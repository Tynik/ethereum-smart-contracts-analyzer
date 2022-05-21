export enum TokenStandard {
  'ERC20' = 'ERC20',
  'ERC721' = 'ERC721',
  'ERC721A' = 'ERC721A',
  'ERC777' = 'ERC777',
  'ERC1155' = 'ERC1155',
}

export const TOKEN_STANDARDS = [
  TokenStandard.ERC20,
  TokenStandard.ERC721,
  TokenStandard.ERC721A,
  TokenStandard.ERC777,
  TokenStandard.ERC1155,
];

export enum SecurityContract {
  REENTRANCY_GUARD = 'ReentrancyGuard',
  PULL_PAYMENT = 'PullPayment',
  PAUSABLE = 'Pausable',
}

export const SECURITY_CONTRACTS = [
  SecurityContract.REENTRANCY_GUARD,
  SecurityContract.PULL_PAYMENT,
  SecurityContract.PAUSABLE,
];

export enum AccessContract {
  OWNABLE = 'Ownable',
  ACCESS_CONTROL = 'AccessControl',
}

export const ACCESS_CONTRACTS = [AccessContract.OWNABLE, AccessContract.ACCESS_CONTROL];

export enum Instruction {
  PRAGMA = 'pragma',
  SOLIDITY = 'solidity',
  ABSTRACT = 'abstract',
  IMPORT = 'import',
  CONTRACT = 'contract',
  INTERFACE = 'interface',
  LIBRARY = 'library',
  FUNCTION = 'function',
  ENUM = 'enum',
  ERROR = 'error',
  EVENT = 'event',
  ASSEMBLY = 'assembly',
  IS = 'is',
  PRIVATE = 'private',
  PUBLIC = 'public',
  EXTERNAL = 'external',
  INTERNAL = 'internal',
  VIEW = 'view',
  PURE = 'pure',
  VIRTUAL = 'virtual',
  OVERRIDE = 'override',
  CONSTANT = 'constant',
  PAYABLE = 'payable',
  RETURNS = 'returns',
  REQUIRE = 'require',
  SELF_DESTRUCT = 'selfdestruct',
}

export const RESERVED_CHARS = [
  '{',
  '}',
  '(',
  ')',
  ',',
  ';',
  '"',
  "'",
  '/',
  '\\',
  '\n',
  '\r',
  '\t',
  '*',
];
