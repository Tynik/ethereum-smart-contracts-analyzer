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
  "number": 193772,
  "time": "1069 secs.",
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 32328,
      "percent": "16.68 %"
    },
    "ERC721": {
      "number": 18611,
      "percent": "9.61 %"
    },
    "ERC1155": {
      "number": 2146,
      "percent": "1.11 %"
    },
    "ERC721A": {
      "number": 7237,
      "percent": "3.73 %"
    },
    "ERC777": {
      "number": 85,
      "percent": "0.04 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 14187,
      "percent": "7.32 %"
    },
    "Pausable": {
      "number": 9625,
      "percent": "4.97 %"
    },
    "PullPayment": {
      "number": 104,
      "percent": "0.05 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 82664,
      "percent": "42.66 %"
    },
    "AccessControl": {
      "number": 4944,
      "percent": "2.55 %"
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
      "address": "0x026224a2940bfe258d0dbe947919b62fe321f042",
      "name": "LobstersNft",
      "countIssues": 36,
      "balance": "0 ETH"
    },
    {
      "address": "0x01E8efB0429f102Ea104681849265459532231aB",
      "name": "Clans",
      "countIssues": 29,
      "balance": "0 ETH"
    },
    {
      "address": "0x00065b639A3Fcc65db399a8CeF8c33327CcfE158",
      "name": "TypeCVaultFactory",
      "countIssues": 24,
      "balance": "0 ETH"
    },
    {
      "address": "0x000000059619cDDdC056910672AbC90887136a95",
      "name": "SeKira",
      "countIssues": 16,
      "balance": "0 ETH"
    },
    {
      "address": "0x0000000000f0021d219C5AE2Fd5b261966012Dd7",
      "name": "VolatilityOracle",
      "countIssues": 15,
      "balance": "0 ETH"
    }
  ]
}
```
