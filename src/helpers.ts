import type { SolInterface, SolLibrary, SolContract, SolFunction, SolIssue } from './types';

export const log = (...args) => {
  // eslint-disable-next-line no-console
  console.log(...args);
};

export const getContractAddress = (solFilename: string) => `0x${solFilename.slice(0, 40)}`;

export const getContractName = (solFilename: string) => solFilename.slice(41, -4);

export const addSolIssue = ({
  issues,
  id,
  position,
  version,
  functionEntity,
  contractEntity,
  interfaceEntity,
  libraryEntity,
}: {
  issues: SolIssue[];
  id: SolIssue['id'];
  position: SolIssue['position'];
  version?: string;
  functionEntity?: SolFunction;
  contractEntity?: SolContract;
  interfaceEntity?: SolInterface;
  libraryEntity?: SolLibrary;
}) => {
  issues.push({
    id,
    position,
    ...(version && { version }),
    ...(functionEntity && { function: functionEntity.name }),
    ...(contractEntity && { contract: contractEntity.name }),
    ...(interfaceEntity && { interface: interfaceEntity.name }),
    ...(libraryEntity && { library: libraryEntity.name }),
  });
};
