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
  "number": 189596,
  "versions": {},
  "tokenContracts": {
    "ERC721": {
      "number": 18136,
      "percent": "9.57 %"
    },
    "ERC20": {
      "number": 31747,
      "percent": "16.74 %"
    },
    "ERC721A": {
      "number": 5817,
      "percent": "3.07 %"
    },
    "ERC1155": {
      "number": 2028,
      "percent": "1.07 %"
    },
    "ERC777": {
      "number": 84,
      "percent": "0.04 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 13193,
      "percent": "6.96 %"
    },
    "Pausable": {
      "number": 9413,
      "percent": "4.97 %"
    },
    "PullPayment": {
      "number": 101,
      "percent": "0.05 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 79712,
      "percent": "42.04 %"
    },
    "AccessControl": {
      "number": 4766,
      "percent": "2.51 %"
    }
  },
  "mostVulnerable": [
    {
      "address": "0x7Cb48E0826433b2D7A2a7F0e69a716D5Ca045229",
      "name": "Twap",
      "countIssues": 106,
      "balance": "0",
      "lastNormalTransaction": "0xb9f25433786fe83173faa310289cbbbbee453091e579f3f24c3a184465c30209"
    },
    {
      "address": "0x446C9033E7516D820cc9a2ce2d0B7328b579406F",
      "name": "HealthCareToken",
      "countIssues": 97,
      "balance": "0",
      "lastNormalTransaction": "0x5715fcee9e891ded8d0824833445409038558281341994cb044d12b74d98d0ec"
    },
    {
      "address": "0x0abdace70d3790235af448c88547603b945604ea",
      "name": "District0xNetworkToken",
      "countIssues": 85,
      "balance": "0",
      "lastNormalTransaction": "0x7025c26a7f7f9737044c6eed6b4fa075110a1a8bf0468bd2fd21eddf8be412a2"
    },
    {
      "address": "0x06c2AE330C57a6320b2de720971ebD09003C7a01",
      "name": "UnipilotPassiveFactory",
      "countIssues": 38,
      "balance": "0",
      "lastNormalTransaction": "0x24e73fbdebb408026a93394f58e309b43d7bfb8c2426543b593949dba0357cdf"
    },
    {
      "address": "0x062F38735AAC32320DB5e2DBBEb07968351D7C72",
      "name": "WeightedPool",
      "countIssues": 37,
      "balance": "0",
      "lastNormalTransaction": "0xe5828d32d71791c9e1a52c68914d0648945962e3a41b77eb62afd70e2f2ca7ef"
    },
    {
      "address": "0x026224a2940bfe258d0dbe947919b62fe321f042",
      "name": "LobstersNft",
      "countIssues": 34,
      "balance": "0",
      "lastNormalTransaction": "0x1af8ef40f587a56fec2193b74d3f9fbdd09bdf86361e6aa0d786bda50c87a7ea"
    },
    {
      "address": "0x01234567bac6fF94d7E4f0EE23119CF848F93245",
      "name": "EthBlocks",
      "countIssues": 26,
      "balance": "0",
      "lastNormalTransaction": "0xa2ebf37e1a11b25a6ea241ab1b7998545d13ac64e6929058349a27fd6e0eced8"
    },
    {
      "address": "0x011C5C4E4A86FC95A7A6d5C49a69Cdf0CB1d0467",
      "name": "HKC",
      "countIssues": 25,
      "balance": "0",
      "lastNormalTransaction": "0x439dd77759cb8fa69b5fac0dd04df132e15d627401f828d5a556b8291e84cdc9"
    },
    {
      "address": "0x00139FdD8f2Bb8b4376aab2435c44981EC34e7e0",
      "name": "AdventurersOfEther",
      "countIssues": 21,
      "balance": "22800000000000000000",
      "lastNormalTransaction": "0x7dbcd5c9e27adda4304727d0e5add3151ee107fa23128c679705472d01e3c78a"
    },
    {
      "address": "0x000000be320d58EAbB01D14B6755B0403a93Ab7d",
      "name": "YuGiOhCard",
      "countIssues": 17,
      "balance": "0"
    }
  ],
  "time": "1361 secs"
}
```
