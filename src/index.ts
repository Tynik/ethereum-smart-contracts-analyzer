import fs from 'fs';
import util from 'util';
import path from 'path';

import type {
  ETHNetwork,
  SolInterface,
  SolLibrary,
  SolContract,
  SolFunction,
  SolIssue,
  SolFileInfo,
  SolError,
  AggregatedInfo,
} from './types';

import {
  TokenStandard,
  SecurityContract,
  AccessContract,
  TOKEN_STANDARDS,
  SECURITY_CONTRACTS,
  ACCESS_CONTRACTS,
} from './constants';
import { log } from './helpers';
import { parseSolFile, updateReadme } from './utils';
import { getEthBalance } from './etherscanAPI';

const SOL_FILES_PATH = './smart-contract-sanctuary-ethereum/contracts';

export const getSolFileInfo = (sourceCode: string, verbose = false): SolFileInfo => {
  const versions: string[] = [];
  const imports: string[] = [];
  const contracts: SolContract[] = [];
  const interfaces: SolInterface[] = [];
  const libraries: SolLibrary[] = [];
  const errors: SolError[] = [];
  const functions: SolFunction[] = [];
  const issues: SolIssue[] = [];

  let strMode = false;

  parseSolFile(
    sourceCode,
    ({
      rowNumber,
      colNumber,
      pragmaHandler,
      commentHandler,
      stringHandler,
      interfaceHandler,
      libraryHandler,
      contractHandler,
      functionHandler,
      eventHandler,
      enumHandler,
      errorHandler,
      word,
    }) => {
      try {
        if (!strMode && commentHandler()) {
          return;
        }
        if (stringHandler()) {
          strMode = true;
          return;
        }
        strMode = false;

        if (['\n', '\r', '\t'].includes(word)) {
          return;
        }

        pragmaHandler(versions, issues);

        const interfaceEntity = interfaceHandler(interfaces);
        const libraryEntity = libraryHandler(libraries);
        const contractEntity = contractHandler(contracts);

        const entity = interfaceEntity || libraryEntity || contractEntity;

        errorHandler(entity, errors);

        if (entity) {
          functionHandler({ interfaceEntity, libraryEntity, contractEntity, issues });
          eventHandler(entity);
          enumHandler(entity);
        }
      } catch (e) {
        throw new Error(`Message: ${e.message} at [${rowNumber}:${colNumber}]`);
      }
      //
      // if (previousWord === Instruction.IMPORT) {
      //   imports.push(word.replace(/"|\'/g, ''));
      //   previousWord = word;
      //   return;
      // }
    },
    verbose
  );

  return {
    versions: [...new Set(versions)],
    imports,
    contracts,
    functions,
    interfaces,
    libraries,
    errors,
    issues,
  };
};

const analyzeSolFileByPath = (solFilePath: string, verbose = false) => {
  const solFileSourceCode = fs.readFileSync(solFilePath, 'utf-8');
  return solFileSourceCode && getSolFileInfo(solFileSourceCode, verbose);
};

type AnalyzeSolFilesByPath = (options: {
  solFilesPath: string;
  aggregatedInfo: AggregatedInfo;
  address?: string;
  filename?: string;
  verbose?: boolean;
}) => Promise<void>;

const analyzeSolFilesByPath: AnalyzeSolFilesByPath = async ({
  solFilesPath,
  aggregatedInfo,
  address = null,
  filename = null,
  verbose = false,
}) => {
  const solFiles = fs.readdirSync(solFilesPath, 'utf-8');

  // eslint-disable-next-line no-restricted-syntax
  for await (const solFilename of solFiles) {
    if (
      (address && solFilename.indexOf(address.slice(2)) === -1) ||
      (filename && solFilename.toLowerCase().indexOf(filename.toLowerCase()) === -1) ||
      solFilename.slice(-3) !== 'sol'
    ) {
      return;
    }
    // log(solFilename);

    const solFilePath = path.join(solFilesPath, solFilename);
    const solInfo = analyzeSolFileByPath(solFilePath, verbose);
    if (solInfo) {
      aggregatedInfo.number += 1;

      if (
        !aggregatedInfo.mostVulnerable.length ||
        solInfo.issues.length > aggregatedInfo.mostVulnerable[0].countIssues
      ) {
        const contractAddress = `0x${solFilename.slice(0, 40)}`;

        let balance = '';
        try {
          const ethBalanceResponse = await getEthBalance([contractAddress]);
          balance = ethBalanceResponse.result[0].balance;
        } catch (e) {
          console.error(e);
        }

        aggregatedInfo.mostVulnerable.unshift({
          address: contractAddress,
          name: solFilename.slice(41, -4),
          countIssues: solInfo.issues.length,
          balance,
        });
        if (aggregatedInfo.mostVulnerable.length > 10) {
          aggregatedInfo.mostVulnerable.pop();
        }
      }

      const iss = [...new Set(solInfo.contracts.map(contract => contract.is || []).flat())];
      iss.forEach(is => {
        if (TOKEN_STANDARDS.includes(is as TokenStandard)) {
          const number = (aggregatedInfo.tokenContracts[is]?.number || 0) + 1;

          aggregatedInfo.tokenContracts[is] = {
            number,
            percent: `${((number / aggregatedInfo.number) * 100).toFixed(2)} %`,
          };
          return;
        }

        if (SECURITY_CONTRACTS.includes(is as SecurityContract)) {
          const number = (aggregatedInfo.securityContracts[is]?.number || 0) + 1;

          aggregatedInfo.securityContracts[is] = {
            number,
            percent: `${((number / aggregatedInfo.number) * 100).toFixed(2)} %`,
          };
          return;
        }

        if (ACCESS_CONTRACTS.includes(is as AccessContract)) {
          const number = (aggregatedInfo.accessContracts[is]?.number || 0) + 1;

          aggregatedInfo.accessContracts[is] = {
            number,
            percent: `${((number / aggregatedInfo.number) * 100).toFixed(2)} %`,
          };
        }
      });
      // aggregatedInfo.versions[solInfo.solidity] = (aggregatedInfo.versions[solInfo.solidity] || 0) + 1;
    }

    if (verbose) {
      log(
        util.inspect(
          {
            filename: solFilename,
            ...solInfo,
          },
          { colors: true, depth: null }
        )
      );
    }
  }
};

type AnalyzeSolFiles = (options: {
  network?: ETHNetwork;
  address?: string;
  filename?: string;
  verbose?: boolean;
}) => Promise<AggregatedInfo>;

const analyzeSolFiles: AnalyzeSolFiles = async ({
  network = 'mainnet',
  address = null,
  filename = null,
  verbose = false,
}) => {
  const aggregatedInfo: AggregatedInfo = {
    number: 0,
    versions: {},
    tokenContracts: {},
    securityContracts: {},
    accessContracts: {},
    mostVulnerable: [],
  };

  const networkPath = path.join(SOL_FILES_PATH, network);

  if (address) {
    const solFilesDirname = address.slice(2, 4).toLowerCase();
    const solFilesPath = path.join(networkPath, solFilesDirname);

    await analyzeSolFilesByPath({ solFilesPath, aggregatedInfo, address, verbose });
    return aggregatedInfo;
  }

  const solFilesDirNames = fs.readdirSync(networkPath, 'utf-8');

  // eslint-disable-next-line no-restricted-syntax
  for await (const solFilesDirname of solFilesDirNames) {
    const solFilesPath = path.join(networkPath, solFilesDirname);

    if (!fs.lstatSync(solFilesPath).isDirectory()) {
      // eslint-disable-next-line consistent-return
      return;
    }
    await analyzeSolFilesByPath({ solFilesPath, aggregatedInfo, filename, verbose });
  }

  return aggregatedInfo;
};

if (require.main === module) {
  const cmdArgs = process.argv.slice(2);

  let findByName = false;
  let verbose = false;

  cmdArgs.forEach((cmdArg, cmdIndex) => {
    if (cmdArg === '--name') {
      findByName = true;
    } else if (cmdArg === '--verbose') {
      verbose = true;
    } else {
      return;
    }
    delete cmdArgs[cmdIndex];
  });

  analyzeSolFiles({
    network: 'mainnet',
    address: findByName ? null : cmdArgs.pop(),
    filename: findByName ? cmdArgs.pop() : null,
    verbose,
  }).then(aggregatedInfoMainnet => {
    log(aggregatedInfoMainnet);

    updateReadme({ aggregatedInfoMainnet });
  });
}
