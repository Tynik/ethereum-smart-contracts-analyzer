# ethereum-smart-contracts-analyzer

*Some aggregated statistic by verified Ethereum smart contracts from mainnet.*

As the source of smart contracts is used **[smart-contract-sanctuary-ethereum](https://github.com/tintinweb/smart-contract-sanctuary-ethereum)** project developed by **[tintin](https://github.com/tintinweb)** 👏

## 💡 Ethereum smart contracts aggregated info from mainnet

That information is automatically updated every day at 3 pm or when commit is pushed.

**Details:**

1. `number` - The total number of verified contracts from mainnet.
2. `versions` - TODO
3. `tokenContracts` - Usages of contracts to create non-/fungible tokens.
4. `securityContracts` - Usages of contracts to cover common security practices. 
5. `accessContracts` - Usages of contracts to control the access.

```json
{
  "number": 187832,
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 31732,
      "percent": "16.89 %"
    },
    "ERC721": {
      "number": 17967,
      "percent": "9.57 %"
    },
    "ERC1155": {
      "number": 2025,
      "percent": "1.08 %"
    },
    "ERC721A": {
      "number": 5254,
      "percent": "2.80 %"
    },
    "ERC777": {
      "number": 85,
      "percent": "0.05 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 12826,
      "percent": "6.83 %"
    },
    "Pausable": {
      "number": 9393,
      "percent": "5.00 %"
    },
    "PullPayment": {
      "number": 100,
      "percent": "0.05 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 78629,
      "percent": "41.86 %"
    },
    "AccessControl": {
      "number": 4778,
      "percent": "2.54 %"
    }
  }
}
```
