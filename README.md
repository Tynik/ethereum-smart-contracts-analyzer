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
  "number": 196042,
  "time": "1303 secs.",
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 32641,
      "percent": "16.65 %"
    },
    "ERC721": {
      "number": 18843,
      "percent": "9.61 %"
    },
    "ERC1155": {
      "number": 2190,
      "percent": "1.12 %"
    },
    "ERC721A": {
      "number": 7900,
      "percent": "4.03 %"
    },
    "ERC777": {
      "number": 85,
      "percent": "0.04 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 14692,
      "percent": "7.49 %"
    },
    "Pausable": {
      "number": 9713,
      "percent": "4.95 %"
    },
    "PullPayment": {
      "number": 108,
      "percent": "0.06 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 84008,
      "percent": "42.85 %"
    },
    "AccessControl": {
      "number": 5000,
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
