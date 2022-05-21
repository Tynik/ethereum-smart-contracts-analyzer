import { getSolFileInfo } from '../index';

describe('Common parsing', () => {
  it('should return empty lists if no source code', () => {
    expect(getSolFileInfo('')).toStrictEqual({
      versions: [],
      imports: [],
      contracts: [],
      functions: [],
      interfaces: [],
      libraries: [],
      errors: [],
      issues: [],
    });
  });

  it('should parse solidity versions', () => {
    expect(getSolFileInfo('pragma solidity 0.6.12;').versions).toStrictEqual(['0.6.12']);
    expect(getSolFileInfo('pragma solidity ^0.8.11;').versions).toStrictEqual(['^0.8.11']);
    expect(getSolFileInfo('pragma solidity 0.6.12 ^0.8.11;').versions).toStrictEqual([
      '0.6.12',
      '^0.8.11',
    ]);
  });

  it('should parse simple contract', () => {
    const code = `
      contract NFT {}
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
      },
    ]);
  });

  it('should parse simple contract with double // in imports (like a comment in string)', () => {
    const code = `
      import "//IAccessControlManager.sol";

      contract NFT {}
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
      },
    ]);
  });

  it('should parse several simple contracts', () => {
    const code = `
      contract NFT {}
      
      contract Ownable {}
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
      },
      {
        name: 'Ownable',
      },
    ]);
  });

  it('should parse simple contract with multiline comment above', () => {
    const code = `
      /*
      * Some comment
      */
      contract NFT {}
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
      },
    ]);
  });

  it('should parse simple contract with multiline/inline comments above', () => {
    const code = `
     /*//////////////////////////////////////////////////////////////////////////////

      - Simply send any non-zero amount of ETH to contract address:
      - Use paymentDue function to check how much owes you (wei)
      - Use balanceOf function to check your balance (wei)
      
      //////////////////////////////////////////////////////////////////////////////*/
      contract NFT {}
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
      },
    ]);
  });

  it('should parse simple contract with multiline comment with braces', () => {
    const code = `
      /*
      * Some comment {test}
      */
      contract NFT {}
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
      },
    ]);
  });

  it('should parse simple contract with multiline comment with single quote', () => {
    const code = `
      /*
      * '
      */
      contract NFT {}
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
      },
    ]);
  });

  it('should parse contract as abstract for simple empty contract', () => {
    const code = `
      abstract contract NFT {}
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        abstract: true,
      },
    ]);
  });

  it('should parse contract with one parent contract', () => {
    const code = `
      contract NFT is ERC721 {}
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        is: ['ERC721'],
      },
    ]);
  });

  it('should parse contract with multiple parents', () => {
    const code = `
      contract NFT is BaseA, BaseB {}
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        is: ['BaseA', 'BaseB'],
      },
    ]);
  });

  it('should parse contract with multiple parents and their parameters', () => {
    const code = `
      contract NFT is BaseA("abc"), BaseB(123, "de") {}
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        is: ['BaseA', 'BaseB'],
      },
    ]);
  });

  it('should parse one event within a contract', () => {
    const code = `
      contract NFT {
        event Transfer();
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        events: [
          {
            name: 'Transfer',
          },
        ],
      },
    ]);
  });

  it('should add an error outside contract/interface/library', () => {
    const code = `
      error Canceled();
    `;

    expect(getSolFileInfo(code).errors).toStrictEqual([
      {
        name: 'Canceled',
      },
    ]);
  });

  it('should add an error within a contract', () => {
    const code = `
      contract NFT {
        error TransferToZeroAddress();
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        errors: [
          {
            name: 'TransferToZeroAddress',
          },
        ],
      },
    ]);
  });

  it('should add one enum within a contract', () => {
    const code = `
      contract NFT {
        enum Action {
          Deposit,
          Withdraw,
          Swap
        }
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        enums: [
          {
            name: 'Action',
          },
        ],
      },
    ]);
  });

  it('should add several events within a contract', () => {
    const code = `
      contract NFT {
        event Started();
        event Finished();
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        events: [
          {
            name: 'Started',
          },
          {
            name: 'Finished',
          },
        ],
      },
    ]);
  });

  it('should add event with arguments within a contract', () => {
    const code = `
      contract NFT {
        event Transfer(address indexed from, address indexed to, uint value);
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        events: [
          {
            name: 'Transfer',
          },
        ],
      },
    ]);
  });

  it('should parse simple empty interface', () => {
    const code = `
      interface NFT {}
    `;

    expect(getSolFileInfo(code).interfaces).toStrictEqual([
      {
        name: 'NFT',
      },
    ]);
  });

  it('should parse simple empty interface, contract and library together', () => {
    const code = `
      contract ContractA {}
      interface IContractA {}
      library ContractLib {}
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'ContractA',
      },
    ]);

    expect(getSolFileInfo(code).interfaces).toStrictEqual([
      {
        name: 'IContractA',
      },
    ]);

    expect(getSolFileInfo(code).libraries).toStrictEqual([
      {
        name: 'ContractLib',
      },
    ]);
  });
});
