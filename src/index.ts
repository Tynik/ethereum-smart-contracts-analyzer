import fs from 'fs';
import util from 'util';
import path from 'path';

import type {
  Network,
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
import { parseSolFile } from './utils';

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
}) => void;

const analyzeSolFilesByPath: AnalyzeSolFilesByPath = ({
  solFilesPath,
  aggregatedInfo,
  address = null,
  filename = null,
  verbose = false,
}) => {
  fs.readdirSync(solFilesPath, 'utf-8').forEach(solFilename => {
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
  });
};

type AnalyzeSolFile = (options: {
  network?: Network;
  address?: string;
  filename?: string;
  verbose?: boolean;
}) => AggregatedInfo;

const analyzeSolFiles: AnalyzeSolFile = ({
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
  };

  const networkPath = path.join(SOL_FILES_PATH, network);

  if (address) {
    const solFilesDirname = address.slice(2, 4).toLowerCase();
    const solFilesPath = path.join(networkPath, solFilesDirname);

    analyzeSolFilesByPath({ solFilesPath, aggregatedInfo, address, verbose });
    return aggregatedInfo;
  }

  fs.readdirSync(networkPath, 'utf-8').forEach(solFilesDirname => {
    const solFilesPath = path.join(networkPath, solFilesDirname);

    if (!fs.lstatSync(solFilesPath).isDirectory()) {
      return;
    }
    analyzeSolFilesByPath({ solFilesPath, aggregatedInfo, filename, verbose });
  });

  return aggregatedInfo;
};

if (require.main === module) {
  const commandArgs = process.argv.slice(2);

  let findByName = false;
  let verbose = false;

  commandArgs.forEach((commandArg, commandIndex) => {
    if (commandArg === '--name') {
      findByName = true;
    } else if (commandArg === '--verbose') {
      verbose = true;
    } else {
      return;
    }
    delete commandArgs[commandIndex];
  });

  const aggregatedInfo = analyzeSolFiles({
    network: 'mainnet',
    address: findByName ? null : commandArgs.pop(),
    filename: findByName ? commandArgs.pop() : null,
    verbose,
  });
  //
  log(aggregatedInfo);
  // fs.writeFileSync(path.join(__dirname, 'stats.json'), JSON.stringify(aggregatedInfo), 'utf8');

  let readmeFileData = fs.readFileSync(path.join(__dirname, '../README.template.md'), 'utf-8');

  readmeFileData = readmeFileData.replace(
    '[[ETH_AGGREGATED_INFO]]',
    JSON.stringify(aggregatedInfo, null, 2)
  );

  fs.writeFileSync(path.join(__dirname, '../README.md'), readmeFileData, 'utf8');
}
