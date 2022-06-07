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
  "number": 192323,
  "time": "1043 secs.",
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 32167,
      "percent": "16.73 %"
    },
    "ERC721": {
      "number": 18466,
      "percent": "9.60 %"
    },
    "ERC1155": {
      "number": 2115,
      "percent": "1.10 %"
    },
    "ERC721A": {
      "number": 6760,
      "percent": "3.52 %"
    },
    "ERC777": {
      "number": 85,
      "percent": "0.04 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 13885,
      "percent": "7.22 %"
    },
    "Pausable": {
      "number": 9566,
      "percent": "4.97 %"
    },
    "PullPayment": {
      "number": 102,
      "percent": "0.05 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 81688,
      "percent": "42.48 %"
    },
    "AccessControl": {
      "number": 4896,
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
      "address": "0x6c6bc977e13df9b0de53b251522280bb72383700",
      "name": "UniswapV3Pool",
      "countIssues": 140,
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
      "address": "0x00e699bb8D011585E6429fC2F2550743a38d7F8F",
      "name": "CryptoPuppets",
      "countIssues": 21,
      "balance": "0 ETH"
    },
    {
      "address": "0x00808C4201db673c00950B291EcD23BB9C1C6B0F",
      "name": "TurfShop",
      "countIssues": 20,
      "balance": "0 ETH"
    },
    {
      "address": "0x004D52B08Fa30CDd968Daab02dB56f990560f893",
      "name": "amonguswtf",
      "countIssues": 18,
      "balance": "0 ETH"
    }
  ]
}
```
