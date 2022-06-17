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
  "number": 196428,
  "time": "1659 secs.",
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 32685,
      "percent": "16.64 %"
    },
    "ERC721": {
      "number": 18886,
      "percent": "9.62 %"
    },
    "ERC1155": {
      "number": 2198,
      "percent": "1.12 %"
    },
    "ERC721A": {
      "number": 7985,
      "percent": "4.07 %"
    },
    "ERC777": {
      "number": 85,
      "percent": "0.04 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 14752,
      "percent": "7.51 %"
    },
    "Pausable": {
      "number": 9740,
      "percent": "4.96 %"
    },
    "PullPayment": {
      "number": 108,
      "percent": "0.06 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 84239,
      "percent": "42.89 %"
    },
    "AccessControl": {
      "number": 5016,
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
      "address": "0x0000000000085d4780B73119b644AE5ecd22b376",
      "name": "OwnedUpgradeabilityProxy",
      "countIssues": 1,
      "balance": "0 ETH"
    }
  ]
}
```
