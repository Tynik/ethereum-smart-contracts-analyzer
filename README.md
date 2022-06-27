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
  "number": 200043,
  "time": "1052 secs.",
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 33162,
      "percent": "16.58 %"
    },
    "ERC721": {
      "number": 19321,
      "percent": "9.66 %"
    },
    "ERC1155": {
      "number": 2287,
      "percent": "1.15 %"
    },
    "ERC721A": {
      "number": 8823,
      "percent": "4.41 %"
    },
    "ERC777": {
      "number": 86,
      "percent": "0.04 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 15430,
      "percent": "7.71 %"
    },
    "Pausable": {
      "number": 9925,
      "percent": "4.96 %"
    },
    "PullPayment": {
      "number": 109,
      "percent": "0.06 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 86467,
      "percent": "43.23 %"
    },
    "AccessControl": {
      "number": 5159,
      "percent": "2.58 %"
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
