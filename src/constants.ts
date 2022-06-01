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
  INT = 'int',
  INT8 = 'int8',
  INT16 = 'int16',
  INT32 = 'int32',
  INT64 = 'int64',
  INT128 = 'int128',
  INT176 = 'int176',
  INT232 = 'int232',
  INT256 = 'int256',
  UINT = 'uint',
  UINT8 = 'uint8',
  UINT16 = 'uint16',
  UINT32 = 'uint32',
  UINT64 = 'uint64',
  UINT128 = 'uint128',
  UINT176 = 'uint176',
  UINT232 = 'uint232',
  UINT256 = 'uint256',
  BYTES = 'bytes',
  BYTES1 = 'bytes1',
  BYTES2 = 'bytes2',
  BYTES4 = 'bytes4',
  BYTES8 = 'bytes8',
  BYTES16 = 'bytes16',
  BYTES32 = 'bytes32',
  ADDRESS = 'address',
  MAPPING = 'mapping',
  BOOL = 'bool',
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
