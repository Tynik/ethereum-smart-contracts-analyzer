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
      "name": "ControlledToken",
      "address": "0x046db64124cf7132a508580c35c13c472469febd",
      "countIssues": 284
    },
    {
      "name": "NFT20Pair",
      "address": "0x01d80f525eda270abdd352cda66bd743ab913469",
      "countIssues": 109
    },
    {
      "name": "MainnetCreateLoanWithNFTFacet",
      "address": "0x00F5c620bD442E8ADBce6Fbd0d68C7Ecc181701B",
      "countIssues": 100
    },
    {
      "name": "MintedTokenCappedCrowdsaleExt",
      "address": "0x00A4B757cB0B7cff002fCF075D896a77daC533D4",
      "countIssues": 52
    },
    {
      "name": "RollupAdminFacet",
      "address": "0x00792e3740FA46E9123F10025873d5FA3e0369D7",
      "countIssues": 47
    },
    {
      "name": "DataCompressor",
      "address": "0x0050b1abd1dd2d9b01ce954e663ff3dbca9193b1",
      "countIssues": 40
    },
    {
      "name": "Fork",
      "address": "0x0047E488C0fD25Ef1326F24e356E30B84518b175",
      "countIssues": 32
    },
    {
      "name": "Registrar",
      "address": "0x002B720B1F7689b05182A6e09902868DC962759C",
      "countIssues": 27
    },
    {
      "name": "BondingShare",
      "address": "0x0013B6033dd999676Dc547CEeCEA29f781D8Db17",
      "countIssues": 26
    },
    {
      "name": "TypeCVaultFactory",
      "address": "0x00065b639A3Fcc65db399a8CeF8c33327CcfE158",
      "countIssues": 23
    }
  ]
}
```
