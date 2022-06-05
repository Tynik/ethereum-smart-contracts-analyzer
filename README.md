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
  "number": 191484,
  "time": "1348 secs.",
  "versions": {},
  "tokenContracts": {
    "ERC20": {
      "number": 32068,
      "percent": "16.75 %"
    },
    "ERC721": {
      "number": 18385,
      "percent": "9.60 %"
    },
    "ERC1155": {
      "number": 2097,
      "percent": "1.10 %"
    },
    "ERC721A": {
      "number": 6473,
      "percent": "3.38 %"
    },
    "ERC777": {
      "number": 85,
      "percent": "0.04 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 13708,
      "percent": "7.16 %"
    },
    "Pausable": {
      "number": 9536,
      "percent": "4.98 %"
    },
    "PullPayment": {
      "number": 102,
      "percent": "0.05 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 81105,
      "percent": "42.36 %"
    },
    "AccessControl": {
      "number": 4869,
      "percent": "2.54 %"
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
      "address": "0x01Ba93514e5Eb642Ec63E95EF7787b0eDd403ADd",
      "name": "AOKI",
      "countIssues": 27,
      "balance": "0 ETH"
    },
    {
      "address": "0x0151f9726D0C056B8c29311029cC43BEc291820c",
      "name": "MonsterChampionsGenesis",
      "countIssues": 24,
      "balance": "0 ETH"
    },
    {
      "address": "0x00e699bb8D011585E6429fC2F2550743a38d7F8F",
      "name": "CryptoPuppets",
      "countIssues": 21,
      "balance": "0 ETH"
    }
  ]
}
```
