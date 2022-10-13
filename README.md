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
  "number": 217516,
  "time": "4555 secs.",
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 36142,
      "percent": "16.62 %"
    },
    "ERC721": {
      "number": 20782,
      "percent": "9.55 %"
    },
    "ERC721A": {
      "number": 12052,
      "percent": "5.54 %"
    },
    "ERC1155": {
      "number": 2596,
      "percent": "1.19 %"
    },
    "ERC777": {
      "number": 87,
      "percent": "0.04 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 18004,
      "percent": "8.28 %"
    },
    "Pausable": {
      "number": 10532,
      "percent": "4.84 %"
    },
    "PullPayment": {
      "number": 119,
      "percent": "0.06 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 98020,
      "percent": "45.06 %"
    },
    "AccessControl": {
      "number": 5707,
      "percent": "2.62 %"
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
      "address": "0x32296969Ef14EB0c6d29669C550D4a0449130230",
      "name": "MetaStablePool",
      "countIssues": 119,
      "balance": "0 ETH"
    },
    {
      "address": "0x1e19cf2d73a72ef1332c882f20534b6519be0276",
      "name": "MetaStablePool",
      "countIssues": 114,
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
      "balance": "0.000000000000000001 ETH"
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
