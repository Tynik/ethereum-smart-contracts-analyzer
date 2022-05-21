import { getSolFileInfo } from '../index';

// SWC registry
// https://swcregistry.io/docs/SWC-100

describe('Detecting SWC issues', () => {
  it('should not detect SWC-100 for the same function name as contract', () => {
    // https://swcregistry.io/docs/SWC-100

    const code = `
      contract HashForEther {
        function HashForEther() {}
      }
    `;

    expect(getSolFileInfo(code).issues).toHaveLength(0);
  });

  it('should detect SWC-100', () => {
    // https://swcregistry.io/docs/SWC-100

    const code = `
      contract HashForEther {
        function withdrawWinnings() {
          // Winner if the last 8 hex characters of the address are 0. 
          require(uint32(msg.sender) == 0);
          _sendWinnings();
        }
        
        function _sendWinnings() {
          msg.sender.transfer(this.balance);
        }
      }
    `;

    expect(getSolFileInfo(code).issues.filter(issue => issue.id === 'SWC-100')).toStrictEqual([
      {
        id: 'SWC-100',
        contract: 'HashForEther',
        function: 'withdrawWinnings',
        position: [3, 37],
      },
      {
        id: 'SWC-100',
        contract: 'HashForEther',
        function: '_sendWinnings',
        position: [9, 34],
      },
    ]);
  });

  it('should detect SWC-103', () => {
    // https://swcregistry.io/docs/SWC-103

    const code = `
      pragma solidity ^0.8.11;
    `;

    expect(getSolFileInfo(code).issues).toStrictEqual([
      {
        id: 'SWC-103',
        version: '^0.8.11',
        position: [2, 30],
      },
    ]);
  });

  it('should detect SWC-106', () => {
    // https://swcregistry.io/docs/SWC-106

    const code = `
      contract UnprotectedSuicide {
        function suicide() {
          selfdestruct(msg.sender);
        }
      }
    `;

    expect(getSolFileInfo(code).issues.filter(issue => issue.id === 'SWC-106')).toStrictEqual([
      {
        id: 'SWC-106',
        contract: 'UnprotectedSuicide',
        function: 'suicide',
        position: [4, 23],
      },
    ]);
  });

  it('should not detect SWC-106 if any modifier for a function was set', () => {
    // https://swcregistry.io/docs/SWC-106

    const code = `
      contract SaveSuicide {
        function suicide() onlyOwner {
          selfdestruct(msg.sender);
        }
      }
    `;

    expect(getSolFileInfo(code).issues.filter(issue => issue.id === 'SWC-106')).toHaveLength(0);
  });

  it('should detect SWC-111 if constant function construction applied', () => {
    // https://swcregistry.io/docs/SWC-111

    const code = `
      contract NFT {
        function mint() constant returns(uint) {
          return 1;
        }
      }
    `;

    expect(getSolFileInfo(code).issues.filter(issue => issue.id === 'SWC-111')).toStrictEqual([
      {
        id: 'SWC-111',
        contract: 'NFT',
        function: 'mint',
        position: [3, 33],
      },
    ]);
  });

  it('should detect SWC-115', () => {
    // https://swcregistry.io/docs/SWC-115

    const code = `
      contract MyContract {
        address owner;
    
        function MyContract() public {
          owner = msg.sender;
        }
    
        function sendTo(address receiver, uint amount) public {
          require(tx.origin == owner);
          receiver.transfer(amount);
        }
      }
    `;

    expect(getSolFileInfo(code).issues.filter(issue => issue.id === 'SWC-115')).toStrictEqual([
      {
        id: 'SWC-115',
        contract: 'MyContract',
        function: 'sendTo',
        position: [10, 28],
      },
    ]);
  });

  it('should detect SWC-116', () => {
    // https://swcregistry.io/docs/SWC-116
  });
});
