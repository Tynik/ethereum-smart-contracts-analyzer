import { TokenStandard, SecurityContract, AccessContract } from './constants';

export type ETHNetwork = 'mainnet' | 'ropsten' | 'rinkeby' | 'goerli' | 'kovan';

export type ContractsInfo<T extends string> = Partial<
  Record<
    T,
    {
      number: number;
      percent: string;
    }
  >
>;

export type MostVulnerable = {
  name: string;
  address: string;
  countIssues: number;
  balance: string;
  lastNormalTransaction?: {
    hash: string;
    when: string;
  };
};

export type AggregatedInfo = {
  number: number;
  time: string;
  versions: Record<string, number>;
  tokenContracts: ContractsInfo<TokenStandard>;
  securityContracts: ContractsInfo<SecurityContract>;
  accessContracts: ContractsInfo<AccessContract>;
  mostVulnerable: MostVulnerable[];
};

type SolFunctionModifier = {
  name: string;
};

type SolFunctionRequire = {
  expression: string;
  message?: string;
};

export type SolFunction = {
  name: string;
  private?: boolean;
  public?: boolean;
  pure?: boolean;
  internal?: boolean;
  external?: boolean;
  view?: boolean;
  virtual?: boolean;
  override?: boolean;
  payable?: boolean;
  constant?: boolean;
  modifiers?: SolFunctionModifier[];
  requires?: SolFunctionRequire[];
};

export type SolEvent = {
  name: string;
};

export type SolError = {
  name: string;
};

export type SolEnum = {
  name: string;
};

export type SolIssue = {
  id: 'SWC-100' | 'SWC-103' | 'SWC-106' | 'SWC-111' | 'SWC-115' | 'SWC-116';
  // row and col number
  position: [number, number];
  version?: string;
  function?: string;
  contract?: string;
  library?: string;
  interface?: string;
};

export interface SolEntity {
  name: string;
  functions?: SolFunction[];
  events?: SolEvent[];
  errors?: SolError[];
  enums?: SolEnum[];
}

export interface SolContract extends SolEntity {
  is?: (string | TokenStandard)[];
  abstract?: boolean;
}

export interface SolInterface extends SolEntity {
  is?: (string | TokenStandard)[];
}

export interface SolLibrary extends SolEntity {}

export type SolFileInfo = {
  versions: string[];
  imports: string[];
  libraries: SolLibrary[];
  interfaces: SolInterface[];
  contracts: SolContract[];
  functions: SolFunction[];
  errors: SolError[];
  issues: SolIssue[];
};

export type Handler = () => (options: {
  rowNumber: number;
  colNumber: number;
  word: string;
}) => any;

export type Processor<R = unknown, P extends any[] = any> = (
  verbose?: boolean
) => (options: {
  rowNumber: number;
  colNumber: number;
  word: string;
  wordsDistance: number;
}) => (...args: P) => R;
