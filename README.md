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
  "number": 198784,
  "time": "1067 secs.",
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 32977,
      "percent": "16.59 %"
    },
    "ERC721": {
      "number": 19171,
      "percent": "9.64 %"
    },
    "ERC1155": {
      "number": 2263,
      "percent": "1.14 %"
    },
    "ERC721A": {
      "number": 8512,
      "percent": "4.28 %"
    },
    "ERC777": {
      "number": 86,
      "percent": "0.04 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 15198,
      "percent": "7.65 %"
    },
    "Pausable": {
      "number": 9865,
      "percent": "4.96 %"
    },
    "PullPayment": {
      "number": 109,
      "percent": "0.06 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 85635,
      "percent": "43.08 %"
    },
    "AccessControl": {
      "number": 5117,
      "percent": "2.57 %"
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
      "address": "0x08e8c27bfb9849bf9e8c7980762612a947d96d9d",
      "name": "ERC721HolderVestedDistributor",
      "countIssues": 74,
      "balance": "0 ETH"
    },
    {
      "address": "0x0574c34385b039c2bb8db898f61b7767024a9449",
      "name": "JOYtoys",
      "countIssues": 38,
      "balance": "0 ETH"
    },
    {
      "address": "0x04d572734006788B646ce35b133Bdf7160f79995",
      "name": "ProtonB",
      "countIssues": 36,
      "balance": "0 ETH"
    },
    {
      "address": "0x0475b2f06a04d1a361b06558d853c84aa043dcd8",
      "name": "PrideModule",
      "countIssues": 35,
      "balance": "0.05 ETH"
    },
    {
      "address": "0x01234567bac6fF94d7E4f0EE23119CF848F93245",
      "name": "EthBlocks",
      "countIssues": 27,
      "balance": "0 ETH"
    }
  ]
}
```
