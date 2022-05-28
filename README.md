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
  "number": 188034,
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 31753,
      "percent": "16.89 %"
    },
    "ERC721": {
      "number": 17982,
      "percent": "9.56 %"
    },
    "ERC1155": {
      "number": 2028,
      "percent": "1.08 %"
    },
    "ERC721A": {
      "number": 5315,
      "percent": "2.83 %"
    },
    "ERC777": {
      "number": 85,
      "percent": "0.05 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 12868,
      "percent": "6.84 %"
    },
    "Pausable": {
      "number": 9403,
      "percent": "5.00 %"
    },
    "PullPayment": {
      "number": 101,
      "percent": "0.05 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 78756,
      "percent": "41.88 %"
    },
    "AccessControl": {
      "number": 4780,
      "percent": "2.54 %"
    }
  },
  "mostVulnerable": [
    {
      "name": "_MultipleWinnersBuilder",
      "address": "0x094e0c66bEc52a737e580fbba50ECb66a4CF74B2",
      "countIssues": 241
    },
    {
      "name": "_LiquidationModelV1",
      "address": "0x0638BD341d6BBB8E1fBFD529558C051D7e97d151",
      "countIssues": 76
    },
    {
      "name": "_WeightedPool",
      "address": "0x062F38735AAC32320DB5e2DBBEb07968351D7C72",
      "countIssues": 37
    },
    {
      "name": "_ExpiringMultiPartyCreator",
      "address": "0x062138265bC254cd93362Ca956237469b9Da0d5C",
      "countIssues": 104
    },
    {
      "name": "_StableReserve",
      "address": "0x05F4B6B112E2f2978c92A0cCdA49F270837F713a",
      "countIssues": 98
    },
    {
      "name": "_SablierManager",
      "address": "0x0589C7a2b2acB895fF0314A394A6D991a9204444",
      "countIssues": 82
    },
    {
      "name": "_MintedTokenCappedCrowdsaleExt",
      "address": "0x04935c19114d529E24070ED41f7bF4D4d822D1ed",
      "countIssues": 52
    },
    {
      "name": "_Inbox",
      "address": "0x048cc108763de75e080ad717bd284003aa49ea15",
      "countIssues": 59
    },
    {
      "name": "_ZilleriumPresaleToken",
      "address": "0x046e6bea4d53727ccedc2c252ea61d042ff7aba6",
      "countIssues": 31
    },
    {
      "name": "_ControlledToken",
      "address": "0x046db64124cf7132a508580c35c13c472469febd",
      "countIssues": 284
    }
  ]
}
```
