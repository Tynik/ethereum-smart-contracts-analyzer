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
  "number": 197458,
  "time": "1524 secs.",
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 32830,
      "percent": "16.63 %"
    },
    "ERC721": {
      "number": 19001,
      "percent": "9.62 %"
    },
    "ERC1155": {
      "number": 2228,
      "percent": "1.13 %"
    },
    "ERC721A": {
      "number": 8201,
      "percent": "4.15 %"
    },
    "ERC777": {
      "number": 85,
      "percent": "0.04 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 14927,
      "percent": "7.56 %"
    },
    "Pausable": {
      "number": 9773,
      "percent": "4.95 %"
    },
    "PullPayment": {
      "number": 109,
      "percent": "0.06 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 84826,
      "percent": "42.96 %"
    },
    "AccessControl": {
      "number": 5045,
      "percent": "2.56 %"
    }
  },
  "mostVulnerable": [
    {
      "address": "0x2C67B0C0493e358cF368073bc0B5fA6F01E981e0",
      "name": "Router",
      "countIssues": 500,
      "balance": "0 ETH"
    },
    {
      "address": "0x1d1a531CBcb969040Da7527bf1092DfC4FF7DD46",
      "name": "BatchAction",
      "countIssues": 499,
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
      "address": "0x00000000006c3852cbef3e08e8df289169ede581",
      "name": "Seaport",
      "countIssues": 49,
      "balance": "0 ETH"
    },
    {
      "address": "0x000000000000d0151e748d25b766e77efe2a6c83",
      "name": "XDEX",
      "countIssues": 5,
      "balance": "0 ETH"
    },
    {
      "address": "0x00000000000045166c45af0fc6e4cf31d9e14b9a",
      "name": "BID",
      "countIssues": 1,
      "balance": "0 ETH"
    }
  ]
}
```
