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
  "number": 190235,
  "time": "1342 secs.",
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 31970,
      "percent": "16.81 %"
    },
    "ERC721": {
      "number": 18252,
      "percent": "9.60 %"
    },
    "ERC1155": {
      "number": 2068,
      "percent": "1.09 %"
    },
    "ERC721A": {
      "number": 5997,
      "percent": "3.15 %"
    },
    "ERC777": {
      "number": 85,
      "percent": "0.04 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 13376,
      "percent": "7.03 %"
    },
    "Pausable": {
      "number": 9482,
      "percent": "4.98 %"
    },
    "PullPayment": {
      "number": 102,
      "percent": "0.05 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 80226,
      "percent": "42.17 %"
    },
    "AccessControl": {
      "number": 4837,
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
      "balance": "0.64 ETH"
    },
    {
      "address": "0x01234567bac6fF94d7E4f0EE23119CF848F93245",
      "name": "EthBlocks",
      "countIssues": 27,
      "balance": "0 ETH"
    },
    {
      "address": "0x011C5C4E4A86FC95A7A6d5C49a69Cdf0CB1d0467",
      "name": "HKC",
      "countIssues": 26,
      "balance": "0 ETH"
    },
    {
      "address": "0x003af52Ba25645843f42ECf5CeFC06f58763D8D1",
      "name": "VestingWalletMultiLinear",
      "countIssues": 21,
      "balance": "0 ETH"
    },
    {
      "address": "0x000000059619cDDdC056910672AbC90887136a95",
      "name": "SeKira",
      "countIssues": 16,
      "balance": "0 ETH"
    }
  ]
}
```
