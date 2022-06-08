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
  "number": 192764,
  "time": "1639 secs.",
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 32213,
      "percent": "16.71 %"
    },
    "ERC721": {
      "number": 18510,
      "percent": "9.60 %"
    },
    "ERC1155": {
      "number": 2122,
      "percent": "1.10 %"
    },
    "ERC721A": {
      "number": 6885,
      "percent": "3.57 %"
    },
    "ERC777": {
      "number": 85,
      "percent": "0.04 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 13962,
      "percent": "7.24 %"
    },
    "Pausable": {
      "number": 9586,
      "percent": "4.97 %"
    },
    "PullPayment": {
      "number": 102,
      "percent": "0.05 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 81959,
      "percent": "42.52 %"
    },
    "AccessControl": {
      "number": 4912,
      "percent": "2.55 %"
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
      "address": "0x0574c34385b039c2bb8db898f61b7767024a9449",
      "name": "JOYtoys",
      "countIssues": 38,
      "balance": "0 ETH"
    },
    {
      "address": "0x026224a2940bfe258d0dbe947919b62fe321f042",
      "name": "LobstersNft",
      "countIssues": 36,
      "balance": "0 ETH"
    },
    {
      "address": "0x00065b639A3Fcc65db399a8CeF8c33327CcfE158",
      "name": "TypeCVaultFactory",
      "countIssues": 24,
      "balance": "0 ETH"
    },
    {
      "address": "0x0000000010C38b3D8B4D642D9D065FB69BC77bC7",
      "name": "underground",
      "countIssues": 17,
      "balance": "0 ETH"
    },
    {
      "address": "0x0000000000f0021d219C5AE2Fd5b261966012Dd7",
      "name": "VolatilityOracle",
      "countIssues": 15,
      "balance": "0 ETH"
    },
    {
      "address": "0x00000000006cee72100d161c57ada5bb2be1ca79",
      "name": "Seaport",
      "countIssues": 2,
      "balance": "0 ETH"
    },
    {
      "address": "0x0000000000085d4780B73119b644AE5ecd22b376",
      "name": "OwnedUpgradeabilityProxy",
      "countIssues": 1,
      "balance": "0 ETH"
    }
  ]
}
```
