# ethereum-smart-contracts-analyzer

*Some aggregated statistic by verified Ethereum smart contracts from mainnet.*

As the source of smart contracts is used **[smart-contract-sanctuary-ethereum](https://github.com/tintinweb/smart-contract-sanctuary-ethereum)** project developed by **[tintin](https://github.com/tintinweb)** 👏

## 💡 Ethereum smart contracts aggregated info from mainnet

That information is automatically updated every day at 3 PM or when commit is pushed.

**Details:**

1. `number` - The total number of verified contracts.
2. `versions` - TODO
3. `tokenContracts` - Usages of contracts to create non-/fungible tokens.
4. `securityContracts` - Usages of contracts to cover common security practices. 
5. `accessContracts` - Usages of contracts to control the access.
6. `mostVulnerable` - The most vulnerable contracts.

**Aggregated info from mainnet:**

```json
{
  "number": 190658,
  "time": "1720 secs.",
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 32000,
      "percent": "16.78 %"
    },
    "ERC721": {
      "number": 18294,
      "percent": "9.60 %"
    },
    "ERC1155": {
      "number": 2076,
      "percent": "1.09 %"
    },
    "ERC721A": {
      "number": 6160,
      "percent": "3.23 %"
    },
    "ERC777": {
      "number": 85,
      "percent": "0.04 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 13496,
      "percent": "7.08 %"
    },
    "Pausable": {
      "number": 9501,
      "percent": "4.98 %"
    },
    "PullPayment": {
      "number": 102,
      "percent": "0.05 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 80525,
      "percent": "42.24 %"
    },
    "AccessControl": {
      "number": 4848,
      "percent": "2.54 %"
    }
  },
  "mostVulnerable": [
    {
      "address": "0x23a1820a47BcD022E29f6058a5FD224242F50D1A",
      "name": "OrionMigratorToAtomic",
      "countIssues": 304,
      "balance": "0 ETH"
    },
    {
      "address": "0x13E9053D9090ed6a1FAE3f59f9bD3C1FCa4c5726",
      "name": "Periphery",
      "countIssues": 91,
      "balance": "0 ETH"
    },
    {
      "address": "0x0abdace70d3790235af448c88547603b945604ea",
      "name": "District0xNetworkToken",
      "countIssues": 88,
      "balance": "0 ETH"
    },
    {
      "address": "0x01471D5D0F8603E71D4579dA62e1D62cD748CBf7",
      "name": "SBII721A",
      "countIssues": 45,
      "balance": "0.72 ETH"
    },
    {
      "address": "0x01379a8C67466Af8cE0Cf1F99c3D8208b2A3af23",
      "name": "TribesOfOgun",
      "countIssues": 21,
      "balance": "0 ETH"
    },
    {
      "address": "0x00808C4201db673c00950B291EcD23BB9C1C6B0F",
      "name": "TurfShop",
      "countIssues": 20,
      "balance": "0 ETH"
    },
    {
      "address": "0x00758fB0C83a68b6cE4FcF1D2665600F3f0E4570",
      "name": "JuiceboxFrens",
      "countIssues": 18,
      "balance": "0 ETH"
    },
    {
      "address": "0x0000000010C38b3D8B4D642D9D065FB69BC77bC7",
      "name": "underground",
      "countIssues": 17,
      "balance": "0 ETH"
    },
    {
      "address": "0x000000000000d0151e748d25b766e77efe2a6c83",
      "name": "XDEX",
      "countIssues": 5,
      "balance": "0 ETH"
    }
  ]
}
```
