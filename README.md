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
  "number": 202691,
  "time": "1656 secs.",
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 33493,
      "percent": "16.52 %"
    },
    "ERC721": {
      "number": 19580,
      "percent": "9.66 %"
    },
    "ERC1155": {
      "number": 2334,
      "percent": "1.15 %"
    },
    "ERC721A": {
      "number": 9427,
      "percent": "4.65 %"
    },
    "ERC777": {
      "number": 87,
      "percent": "0.04 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 15921,
      "percent": "7.86 %"
    },
    "Pausable": {
      "number": 10037,
      "percent": "4.95 %"
    },
    "PullPayment": {
      "number": 109,
      "percent": "0.05 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 88143,
      "percent": "43.49 %"
    },
    "AccessControl": {
      "number": 5248,
      "percent": "2.59 %"
    }
  },
  "mostVulnerable": [
    {
      "address": "0x92D6C1e31e14520e676a687F0a93788B716BEff5",
      "name": "DydxToken",
      "countIssues": 175,
      "balance": "0 ETH"
    },
    {
      "address": "0x1F98431c8aD98523631AE4a59f267346ea31F984",
      "name": "UniswapV3Factory",
      "countIssues": 140,
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
      "address": "0x000000000000cd17345801aa8147b8D3950260FF",
      "name": "Poster",
      "countIssues": 0,
      "balance": "0 ETH"
    }
  ]
}
```
