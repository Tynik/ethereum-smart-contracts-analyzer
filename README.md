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
  "number": 81280,
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 13463,
      "percent": "16.56 %"
    },
    "ERC721": {
      "number": 8232,
      "percent": "10.13 %"
    },
    "ERC1155": {
      "number": 972,
      "percent": "1.20 %"
    },
    "ERC721A": {
      "number": 2484,
      "percent": "3.06 %"
    },
    "ERC777": {
      "number": 39,
      "percent": "0.05 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 6119,
      "percent": "7.53 %"
    },
    "Pausable": {
      "number": 4090,
      "percent": "5.03 %"
    },
    "PullPayment": {
      "number": 39,
      "percent": "0.05 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 33782,
      "percent": "41.56 %"
    },
    "AccessControl": {
      "number": 2304,
      "percent": "2.84 %"
    }
  },
  "mostVulnerable": [
    {
      "address": "0x046db64124cf7132a508580c35c13c472469febd",
      "name": "ControlledToken",
      "countIssues": 284,
      "balance": "0"
    },
    {
      "address": "0x01503bAF774aB3aDb6AF79a6fB725c1610D45b2a",
      "name": "CreateLoanFacet",
      "countIssues": 83,
      "balance": "0"
    },
    {
      "address": "0x01267E6b6EC2196c6E21a64A7F3e3211F10cCcAe",
      "name": "Flasher",
      "countIssues": 68,
      "balance": "0"
    },
    {
      "address": "0x011e5846975c6463a8c6337EECF3cbF64e328884",
      "name": "UnionGovernor",
      "countIssues": 30,
      "balance": "0"
    },
    {
      "address": "0x011FfeE87aD2fe4C091b0d9a7Bd70Bfc697c041c",
      "name": "PriceCalculator",
      "countIssues": 27,
      "balance": "0"
    },
    {
      "address": "0x011C5C4E4A86FC95A7A6d5C49a69Cdf0CB1d0467",
      "name": "HKC",
      "countIssues": 25,
      "balance": "0"
    },
    {
      "address": "0x0119451f94E98716c3fa17ff31d19C98d134DD6d",
      "name": "FYToken",
      "countIssues": 21,
      "balance": "0"
    },
    {
      "address": "0x0100546F2cD4C9D97f798fFC9755E47865FF7Ee6",
      "name": "AlEth",
      "countIssues": 20,
      "balance": "0"
    },
    {
      "address": "0x0000000010C38b3D8B4D642D9D065FB69BC77bC7",
      "name": "underground",
      "countIssues": 16,
      "balance": ""
    },
    {
      "address": "0x000000000014802bC35fEF3484edAD3BDdCA9e8b",
      "name": "VolatilityOracle",
      "countIssues": 15,
      "balance": "0"
    }
  ]
}
```
