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
  "number": 197948,
  "time": "1281 secs.",
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 32881,
      "percent": "16.61 %"
    },
    "ERC721": {
      "number": 19066,
      "percent": "9.63 %"
    },
    "ERC1155": {
      "number": 2244,
      "percent": "1.14 %"
    },
    "ERC721A": {
      "number": 8313,
      "percent": "4.20 %"
    },
    "ERC777": {
      "number": 85,
      "percent": "0.04 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 15022,
      "percent": "7.59 %"
    },
    "Pausable": {
      "number": 9808,
      "percent": "4.96 %"
    },
    "PullPayment": {
      "number": 109,
      "percent": "0.06 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 85126,
      "percent": "43.01 %"
    },
    "AccessControl": {
      "number": 5063,
      "percent": "2.56 %"
    }
  },
  "mostVulnerable": [
    {
      "address": "0x50C7a557d408a5f5a7FDBE1091831728Ae7Eba45",
      "name": "Pool",
      "countIssues": 658,
      "balance": "0 ETH"
    },
    {
      "address": "0x1F98431c8aD98523631AE4a59f267346ea31F984",
      "name": "UniswapV3Factory",
      "countIssues": 140,
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
      "address": "0x00000000000045166c45af0fc6e4cf31d9e14b9a",
      "name": "BID",
      "countIssues": 1,
      "balance": "0 ETH"
    }
  ]
}
```
