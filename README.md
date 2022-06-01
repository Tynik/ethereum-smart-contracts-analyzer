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
  "number": 189808,
  "time": "1353 secs.",
  "versions": {},
  "tokenContracts": {
    "ERC721": {
      "number": 18152,
      "percent": "9.56 %"
    },
    "ERC20": {
      "number": 31778,
      "percent": "16.74 %"
    },
    "ERC1155": {
      "number": 2037,
      "percent": "1.08 %"
    },
    "ERC721A": {
      "number": 5880,
      "percent": "3.10 %"
    },
    "ERC777": {
      "number": 84,
      "percent": "0.04 %"
    }
  },
  "securityContracts": {
    "ReentrancyGuard": {
      "number": 13232,
      "percent": "6.97 %"
    },
    "Pausable": {
      "number": 9419,
      "percent": "4.96 %"
    },
    "PullPayment": {
      "number": 101,
      "percent": "0.05 %"
    }
  },
  "accessContracts": {
    "Ownable": {
      "number": 79846,
      "percent": "42.07 %"
    },
    "AccessControl": {
      "number": 4771,
      "percent": "2.51 %"
    }
  },
  "mostVulnerable": [
    {
      "address": "0x7Cb48E0826433b2D7A2a7F0e69a716D5Ca045229",
      "name": "Twap",
      "countIssues": 106,
      "balance": "0 ETH",
      "lastNormalTransaction": {
        "hash": "0xe827ab1f191896fd3306f67699a6c90b11099860270bcba83c4d08aca9ff7ba7",
        "when": "1.176111111111111 hrs ago"
      }
    },
    {
      "address": "0x6531f133e6deebe7f2dce5a0441aa7ef330b4e53",
      "name": "ChronoBankAssetProxy",
      "countIssues": 100,
      "balance": "0 ETH",
      "lastNormalTransaction": {
        "hash": "0x3bcbf604df74243fc06d713c2c599c4fb330b0f1b542db2cc0c0e2ae13c9df89",
        "when": "15.591944444444444 hrs ago"
      }
    },
    {
      "address": "0x446C9033E7516D820cc9a2ce2d0B7328b579406F",
      "name": "HealthCareToken",
      "countIssues": 97,
      "balance": "0 ETH",
      "lastNormalTransaction": {
        "hash": "0x3d5da789d4e54516e88ac4ef4c68a89b1f7e37d2d108bb71a27f27c222e5ae79",
        "when": "9.041666666666666 hrs ago"
      }
    },
    {
      "address": "0x0abdace70d3790235af448c88547603b945604ea",
      "name": "District0xNetworkToken",
      "countIssues": 85,
      "balance": "0 ETH",
      "lastNormalTransaction": {
        "hash": "0xcc371df2c3e6e4492fba938526e04edaa179830085d8ec4eb5c342aa43fc4a00",
        "when": "43.9 mins ago"
      }
    },
    {
      "address": "0x073e06e3a316c59c53b905bf2bf8112475ffca08",
      "name": "ZoraNFTCreatorV1",
      "countIssues": 49,
      "balance": "0 ETH",
      "lastNormalTransaction": {
        "hash": "0xf126e3a639cb4c77a25e9737f1597626bf6a4c402793dc22638793cd342db9c9",
        "when": "18.044166666666666 hrs ago"
      }
    },
    {
      "address": "0x038957E11EE9A299E2F7c2e74adAF12b62c7CB1D",
      "name": "UnipilotActiveVault",
      "countIssues": 36,
      "balance": "0 ETH",
      "lastNormalTransaction": {
        "hash": "0x28d58557299016730c2975e47b4c94d4a8498905d8f640abb6a1899d60e06fea",
        "when": "4.532222222222222 hrs ago"
      }
    },
    {
      "address": "0x026224a2940bfe258d0dbe947919b62fe321f042",
      "name": "LobstersNft",
      "countIssues": 34,
      "balance": "0 ETH",
      "lastNormalTransaction": {
        "hash": "0x34095d903d55b4579cbea2a2baa8002ae70886b349c04d92e494a6669e6859ef",
        "when": "7.485 hrs ago"
      }
    },
    {
      "address": "0x011C5C4E4A86FC95A7A6d5C49a69Cdf0CB1d0467",
      "name": "HKC",
      "countIssues": 25,
      "balance": "0 ETH",
      "lastNormalTransaction": {
        "hash": "0x264daa961f4be1fe6d55ded6e52eeb8591f52c24c9b06eba992dcbca4f8e666f",
        "when": "37 mins ago"
      }
    },
    {
      "address": "0x00FA82eA9BE4E24ec6D7ED86ef93bfe85b9a3e68",
      "name": "NervousNFT",
      "countIssues": 20,
      "balance": "0.001 ETH",
      "lastNormalTransaction": {
        "hash": "0x54f493d13f4e70661b93eacd979bc327f8913bf9fd13026feda0db68d05bbc7c",
        "when": "9.565277777777778 hrs ago"
      }
    },
    {
      "address": "0x00808C4201db673c00950B291EcD23BB9C1C6B0F",
      "name": "TurfShop",
      "countIssues": 19,
      "balance": "0 ETH",
      "lastNormalTransaction": {
        "hash": "0xfefddcd93511093f6f175ec8e6c82d85e6705c9e13319d63d9a86bd97bed8a05",
        "when": "8.248333333333333 hrs ago"
      }
    }
  ]
}
```
