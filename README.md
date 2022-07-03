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
  "number": 202389,
  "time": "1496 secs.",
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 33465,
      "percent": "16.54 %"
    },
    "ERC721": {
      "number": 19555,
      "percent": "9.66 %"
    },
    "ERC1155": {
      "number": 2332,
      "percent": "1.15 %"
    },
    "ERC721A": {
      "number": 9357,
      "percent": "4.62 %"
    },
    "ERC777": {
      "number": 87,
      "percent": "0.04 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 15868,
      "percent": "7.84 %"
    },
    "Pausable": {
      "number": 10029,
      "percent": "4.96 %"
    },
    "PullPayment": {
      "number": 109,
      "percent": "0.05 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 87936,
      "percent": "43.45 %"
    },
    "AccessControl": {
      "number": 5246,
      "percent": "2.59 %"
    }
  },
  "mostVulnerable": [
    {
      "address": "0xcE744a9BAf573167B2CF138114BA32ed7De274Fa",
      "name": "InitializableImmutableAdminUpgradeabilityProxy",
      "countIssues": 196,
      "balance": "0 ETH"
    },
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
      "address": "0x271682DEB8C4E0901D1a1550aD2e64D568E69909",
      "name": "VRFCoordinatorV2",
      "countIssues": 110,
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
