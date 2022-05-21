import { getSolFileInfo } from '../index';

describe('Functions parsing', () => {
  it('should add function within a contract', () => {
    const code = `
      contract NFT {
        function mint() {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
          },
        ],
      },
    ]);
  });

  it('should add default function within a contract', () => {
    const code = `
      contract NFT {
        function () {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: undefined,
          },
        ],
      },
    ]);
  });

  it('should add payable default function within a contract', () => {
    const code = `
      contract NFT {
        function () payable {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: undefined,
            payable: true,
          },
        ],
      },
    ]);
  });

  it('should add function with returns within a contract', () => {
    const code = `
      contract NFT {
        function mint() returns (bool) {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
          },
        ],
      },
    ]);
  });

  it('should add several empty functions within a contract', () => {
    const code = `
      contract NFT {
        function mint() {}
        function withdraw() {}
        function burn() {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
          },
          {
            name: 'withdraw',
          },
          {
            name: 'burn',
          },
        ],
      },
    ]);
  });

  it('should add private function within a contract', () => {
    const code = `
      contract NFT {
        function mint() private {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
            private: true,
          },
        ],
      },
    ]);
  });

  it('should add public function within a contract', () => {
    const code = `
      contract NFT {
        function mint() public {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
            public: true,
          },
        ],
      },
    ]);
  });

  it('should add public view function within a contract', () => {
    const code = `
      contract NFT {
        function mint() public view {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
            public: true,
            view: true,
          },
        ],
      },
    ]);
  });

  it('should add public pure function within a contract', () => {
    const code = `
      contract NFT {
        function mint() public pure {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
            public: true,
            pure: true,
          },
        ],
      },
    ]);
  });

  it('should add internal function within a contract', () => {
    const code = `
      contract NFT {
        function mint() internal {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
            internal: true,
          },
        ],
      },
    ]);
  });

  it('should add pure internal function within a contract', () => {
    const code = `
      contract NFT {
        function mint() internal pure {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
            internal: true,
            pure: true,
          },
        ],
      },
    ]);
  });

  it('should add internal view function within a contract', () => {
    const code = `
      contract NFT {
        function mint() internal view {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
            internal: true,
            view: true,
          },
        ],
      },
    ]);
  });

  it('should add external function within a contract', () => {
    const code = `
      contract NFT {
        function mint() external {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
            external: true,
          },
        ],
      },
    ]);
  });

  it('should add external pure function within a contract', () => {
    const code = `
      contract NFT {
        function mint() external pure {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
            external: true,
            pure: true,
          },
        ],
      },
    ]);
  });

  it('should add external view function within a contract', () => {
    const code = `
      contract NFT {
        function mint() external view {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
            external: true,
            view: true,
          },
        ],
      },
    ]);
  });

  it('should add pure function within a contract', () => {
    const code = `
      contract NFT {
        function mint() pure {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
            pure: true,
          },
        ],
      },
    ]);
  });

  it('should add view function within a contract', () => {
    const code = `
      contract NFT {
        function mint() view {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
            view: true,
          },
        ],
      },
    ]);
  });

  it('should add override function within a contract', () => {
    const code = `
      contract NFT {
        function mint() override {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
            override: true,
          },
        ],
      },
    ]);
  });

  it('should add virtual function within a contract', () => {
    const code = `
      contract NFT {
        function mint() virtual {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
            virtual: true,
          },
        ],
      },
    ]);
  });

  it('should add constant function within a contract', () => {
    const code = `
      contract NFT {
        function mint() constant returns(uint) {
          return 1;
        }
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
            constant: true,
          },
        ],
      },
    ]);
  });

  it('should add payable function within a contract', () => {
    const code = `
      contract NFT {
        function mint() payable {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
            payable: true,
          },
        ],
      },
    ]);
  });

  it('should parse added function modifier within a contract', () => {
    const code = `
      contract NFT {
        function withdraw() onlyOwner {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'withdraw',
            modifiers: [
              {
                name: 'onlyOwner',
              },
            ],
          },
        ],
      },
    ]);
  });

  it('should parse several added function modifiers within a contract', () => {
    const code = `
      contract NFT {
        function withdraw() onlyOwner nonReentrant {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'withdraw',
            modifiers: [
              {
                name: 'onlyOwner',
              },
              {
                name: 'nonReentrant',
              },
            ],
          },
        ],
      },
    ]);
  });

  it('should parse function within a contract with inline comment above', () => {
    const code = `
      contract NFT {
        // some comment
        function mint() {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
          },
        ],
      },
    ]);
  });

  it('should parse function within a contract with multiline comment above', () => {
    const code = `
      contract NFT {
        /*
        * Some comment
        */
        function mint() {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
          },
        ],
      },
    ]);
  });

  it('should parse function within a contract with several multiline comments above', () => {
    const code = `
      contract NFT {
        /*
        * Some comment
        *//*
        * Some second comment
        */
        function mint() {}
      }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
          },
        ],
      },
    ]);
  });

  it.skip('should parse requires withing a function with a message', () => {
    const code = `
      contract NFT {
        function mint(address to, uint256 tokenId) {
          require(to != address(0), "ERC721: mint to the zero address");
          require(!_exists(tokenId), "ERC721: token already minted");
        }
    `;

    expect(getSolFileInfo(code).contracts).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
            requires: [
              {
                expression: 'to != address(0)',
                message: 'ERC721: mint to the zero address',
              },
              {
                expression: '!_exists(tokenId)',
                message: 'ERC721: token already minted',
              },
            ],
          },
        ],
      },
    ]);
  });

  it('should parse functions with arguments within interface', () => {
    const code = `
      interface NFT {
        function mint(address to, uint256 quantity) external;
        function ownerOf(uint256 _tokenID) external view returns (address);
      }
    `;

    expect(getSolFileInfo(code).interfaces).toStrictEqual([
      {
        name: 'NFT',
        functions: [
          {
            name: 'mint',
            external: true,
          },
          {
            name: 'ownerOf',
            external: true,
            view: true,
          },
        ],
      },
    ]);
  });

  it('should parse assembly instruction in a function', () => {
    const code = `
      library Packed64 {
        function read64(uint256 packed, uint256 index) internal pure returns (uint64 value) {
          assembly {
            value := shl(mul(index, 64), packed)
            value := shr(192, value)
          }
        }
      }
      
      pragma solidity >=0.6.0 <0.8.0;
    `;

    expect(getSolFileInfo(code).libraries).toStrictEqual([
      {
        name: 'Packed64',
        functions: [
          {
            name: 'read64',
            internal: true,
            pure: true,
          },
        ],
      },
    ]);
  });
});
