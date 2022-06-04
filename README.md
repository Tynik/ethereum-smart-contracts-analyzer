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
  "number": 191100,
  "time": "1609 secs.",
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 32035,
      "percent": "16.76 %"
    },
    "ERC721": {
      "number": 18342,
      "percent": "9.60 %"
    },
    "ERC1155": {
      "number": 2083,
      "percent": "1.09 %"
    },
    "ERC721A": {
      "number": 6323,
      "percent": "3.31 %"
    },
    "ERC777": {
      "number": 85,
      "percent": "0.04 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 13598,
      "percent": "7.12 %"
    },
    "Pausable": {
      "number": 9521,
      "percent": "4.98 %"
    },
    "PullPayment": {
      "number": 102,
      "percent": "0.05 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 80819,
      "percent": "42.29 %"
    },
    "AccessControl": {
      "number": 4857,
      "percent": "2.54 %"
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
      "address": "0x271682DEB8C4E0901D1a1550aD2e64D568E69909",
      "name": "VRFCoordinatorV2",
      "countIssues": 110,
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
      "address": "0x008124D10026Ee9a5E7D985c0100bb6af1Fa8B92",
      "name": "LOSTAirdropV2",
      "countIssues": 31,
      "balance": "0 ETH"
    },
    {
      "address": "0x0021a48b90b89B6552D7C5A65f5063302c647375",
      "name": "headAlpha",
      "countIssues": 20,
      "balance": "0 ETH"
    },
    {
      "address": "0x000000059619cDDdC056910672AbC90887136a95",
      "name": "SeKira",
      "countIssues": 16,
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
