
exports.ERC20_ABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
]

exports.REWARD_ABI = [
    {
       "inputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"constructor"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"member",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"uint256",
             "name":"era",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"totalClaim",
             "type":"uint256"
          }
       ],
       "name":"MemberClaims",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"member",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"pool",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"amount",
             "type":"uint256"
          },
          {
             "indexed":true,
             "internalType":"uint256",
             "name":"currentEra",
             "type":"uint256"
          }
       ],
       "name":"MemberLocks",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"member",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"pool",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"amount",
             "type":"uint256"
          },
          {
             "indexed":true,
             "internalType":"uint256",
             "name":"currentEra",
             "type":"uint256"
          }
       ],
       "name":"MemberRegisters",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"member",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"pool",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"balance",
             "type":"uint256"
          },
          {
             "indexed":true,
             "internalType":"uint256",
             "name":"currentEra",
             "type":"uint256"
          }
       ],
       "name":"MemberUnlocks",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"admin",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"pool",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"asset",
             "type":"address"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"assetWeight",
             "type":"uint256"
          }
       ],
       "name":"NewPool",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"pool",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"synth",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"address",
             "name":"expiringMultiParty",
             "type":"address"
          }
       ],
       "name":"NewSynth",
       "type":"event"
    },
    {
       "anonymous":false,
       "inputs":[
          {
             "indexed":true,
             "internalType":"address",
             "name":"admin",
             "type":"address"
          },
          {
             "indexed":true,
             "internalType":"uint256",
             "name":"era",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"rewardForEra",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"perlTotal",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"validPoolCount",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"validMemberCount",
             "type":"uint256"
          },
          {
             "indexed":false,
             "internalType":"uint256",
             "name":"date",
             "type":"uint256"
          }
       ],
       "name":"Snapshot",
       "type":"event"
    },
    {
       "inputs":[
          
       ],
       "name":"PERL",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"newAdmin",
             "type":"address"
          }
       ],
       "name":"addAdmin",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"adminCount",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"arrayAdmins",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"arrayMembers",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"arrayPerlinPools",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"arraySynths",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"member",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"era",
             "type":"uint256"
          }
       ],
       "name":"checkClaim",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"totalClaim",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"member",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"era",
             "type":"uint256"
          },
          {
             "internalType":"address",
             "name":"pool",
             "type":"address"
          }
       ],
       "name":"checkClaimInPool",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"claimShare",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"era",
             "type":"uint256"
          },
          {
             "internalType":"address",
             "name":"rewardAsset",
             "type":"address"
          }
       ],
       "name":"claim",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"currentEra",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"pool",
             "type":"address"
          }
       ],
       "name":"delistPool",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"eraIsOpen",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"part",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"total",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"amount",
             "type":"uint256"
          }
       ],
       "name":"getShare",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"share",
             "type":"uint256"
          }
       ],
       "stateMutability":"pure",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"isAdmin",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"isMember",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"pool",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"asset",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"weight",
             "type":"uint256"
          }
       ],
       "name":"listPool",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"pool",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"synth",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"emp",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"weight",
             "type":"uint256"
          }
       ],
       "name":"listSynth",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"pool",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"amount",
             "type":"uint256"
          }
       ],
       "name":"lock",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"mapAsset_Rewards",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          },
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"mapEraAsset_Reward",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          },
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"mapEraPool_Balance",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          },
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"mapEraPool_Claims",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          },
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"mapEraPool_Share",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"mapEra_Total",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          },
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"mapMemberEraAsset_hasClaimed",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          },
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"mapMemberEraPool_Claim",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"mapMemberEra_hasRegistered",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"mapMemberPool_Added",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          },
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"mapMemberPool_Balance",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "name":"mapMember_arrayPools",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"mapMember_poolCount",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"mapPool_Asset",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"mapSynth_EMP",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"memberCount",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"poolCount",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"poolHasMembers",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"poolIsListed",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"poolWasListed",
       "outputs":[
          {
             "internalType":"bool",
             "name":"",
             "type":"bool"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "name":"poolWeight",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"member",
             "type":"address"
          }
       ],
       "name":"registerAllClaims",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"uint256",
             "name":"era",
             "type":"uint256"
          },
          {
             "internalType":"address",
             "name":"rewardAsset",
             "type":"address"
          }
       ],
       "name":"removeReward",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"rewardAsset",
             "type":"address"
          }
       ],
       "name":"snapshot",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"rewardAsset",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"era",
             "type":"uint256"
          }
       ],
       "name":"snapshotInEra",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"rewardAsset",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"era",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"start",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"end",
             "type":"uint256"
          }
       ],
       "name":"snapshotInEraWithOffset",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"rewardAsset",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"start",
             "type":"uint256"
          },
          {
             "internalType":"uint256",
             "name":"end",
             "type":"uint256"
          }
       ],
       "name":"snapshotWithOffset",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"asset",
             "type":"address"
          },
          {
             "internalType":"uint256",
             "name":"amount",
             "type":"uint256"
          }
       ],
       "name":"sweep",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"synthCount",
       "outputs":[
          {
             "internalType":"uint256",
             "name":"",
             "type":"uint256"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"newAdmin",
             "type":"address"
          }
       ],
       "name":"transferAdmin",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    },
    {
       "inputs":[
          
       ],
       "name":"treasury",
       "outputs":[
          {
             "internalType":"address",
             "name":"",
             "type":"address"
          }
       ],
       "stateMutability":"view",
       "type":"function"
    },
    {
       "inputs":[
          {
             "internalType":"address",
             "name":"pool",
             "type":"address"
          }
       ],
       "name":"unlock",
       "outputs":[
          
       ],
       "stateMutability":"nonpayable",
       "type":"function"
    }
 ]


exports.BALANCER_ABI = [
   {
      "inputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"constructor"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"src",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"dst",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"amt",
            "type":"uint256"
         }
      ],
      "name":"Approval",
      "type":"event"
   },
   {
      "anonymous":true,
      "inputs":[
         {
            "indexed":true,
            "internalType":"bytes4",
            "name":"sig",
            "type":"bytes4"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"caller",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"bytes",
            "name":"data",
            "type":"bytes"
         }
      ],
      "name":"LOG_CALL",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"caller",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"tokenOut",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"tokenAmountOut",
            "type":"uint256"
         }
      ],
      "name":"LOG_EXIT",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"caller",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"tokenIn",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"tokenAmountIn",
            "type":"uint256"
         }
      ],
      "name":"LOG_JOIN",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"caller",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"tokenIn",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"tokenOut",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"tokenAmountIn",
            "type":"uint256"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"tokenAmountOut",
            "type":"uint256"
         }
      ],
      "name":"LOG_SWAP",
      "type":"event"
   },
   {
      "anonymous":false,
      "inputs":[
         {
            "indexed":true,
            "internalType":"address",
            "name":"src",
            "type":"address"
         },
         {
            "indexed":true,
            "internalType":"address",
            "name":"dst",
            "type":"address"
         },
         {
            "indexed":false,
            "internalType":"uint256",
            "name":"amt",
            "type":"uint256"
         }
      ],
      "name":"Transfer",
      "type":"event"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"BONE",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"BPOW_PRECISION",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"EXIT_FEE",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"INIT_POOL_SUPPLY",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"MAX_BOUND_TOKENS",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"MAX_BPOW_BASE",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"MAX_FEE",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"MAX_IN_RATIO",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"MAX_OUT_RATIO",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"MAX_TOTAL_WEIGHT",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"MAX_WEIGHT",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"MIN_BALANCE",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"MIN_BOUND_TOKENS",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"MIN_BPOW_BASE",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"MIN_FEE",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"MIN_WEIGHT",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"address",
            "name":"src",
            "type":"address"
         },
         {
            "internalType":"address",
            "name":"dst",
            "type":"address"
         }
      ],
      "name":"allowance",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"dst",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"amt",
            "type":"uint256"
         }
      ],
      "name":"approve",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"address",
            "name":"whom",
            "type":"address"
         }
      ],
      "name":"balanceOf",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"token",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"balance",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"denorm",
            "type":"uint256"
         }
      ],
      "name":"bind",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"uint256",
            "name":"tokenBalanceIn",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenWeightIn",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenBalanceOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenWeightOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenAmountOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"swapFee",
            "type":"uint256"
         }
      ],
      "name":"calcInGivenOut",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"tokenAmountIn",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"pure",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"uint256",
            "name":"tokenBalanceIn",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenWeightIn",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenBalanceOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenWeightOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenAmountIn",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"swapFee",
            "type":"uint256"
         }
      ],
      "name":"calcOutGivenIn",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"tokenAmountOut",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"pure",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"uint256",
            "name":"tokenBalanceOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenWeightOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"poolSupply",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"totalWeight",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenAmountOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"swapFee",
            "type":"uint256"
         }
      ],
      "name":"calcPoolInGivenSingleOut",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"poolAmountIn",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"pure",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"uint256",
            "name":"tokenBalanceIn",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenWeightIn",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"poolSupply",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"totalWeight",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenAmountIn",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"swapFee",
            "type":"uint256"
         }
      ],
      "name":"calcPoolOutGivenSingleIn",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"poolAmountOut",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"pure",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"uint256",
            "name":"tokenBalanceIn",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenWeightIn",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"poolSupply",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"totalWeight",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"poolAmountOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"swapFee",
            "type":"uint256"
         }
      ],
      "name":"calcSingleInGivenPoolOut",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"tokenAmountIn",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"pure",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"uint256",
            "name":"tokenBalanceOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenWeightOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"poolSupply",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"totalWeight",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"poolAmountIn",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"swapFee",
            "type":"uint256"
         }
      ],
      "name":"calcSingleOutGivenPoolIn",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"tokenAmountOut",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"pure",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"uint256",
            "name":"tokenBalanceIn",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenWeightIn",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenBalanceOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"tokenWeightOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"swapFee",
            "type":"uint256"
         }
      ],
      "name":"calcSpotPrice",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"spotPrice",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"pure",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"decimals",
      "outputs":[
         {
            "internalType":"uint8",
            "name":"",
            "type":"uint8"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"dst",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"amt",
            "type":"uint256"
         }
      ],
      "name":"decreaseApproval",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"uint256",
            "name":"poolAmountIn",
            "type":"uint256"
         },
         {
            "internalType":"uint256[]",
            "name":"minAmountsOut",
            "type":"uint256[]"
         }
      ],
      "name":"exitPool",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"tokenOut",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"tokenAmountOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"maxPoolAmountIn",
            "type":"uint256"
         }
      ],
      "name":"exitswapExternAmountOut",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"poolAmountIn",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"tokenOut",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"poolAmountIn",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"minAmountOut",
            "type":"uint256"
         }
      ],
      "name":"exitswapPoolAmountIn",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"tokenAmountOut",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         
      ],
      "name":"finalize",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"address",
            "name":"token",
            "type":"address"
         }
      ],
      "name":"getBalance",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getColor",
      "outputs":[
         {
            "internalType":"bytes32",
            "name":"",
            "type":"bytes32"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getController",
      "outputs":[
         {
            "internalType":"address",
            "name":"",
            "type":"address"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getCurrentTokens",
      "outputs":[
         {
            "internalType":"address[]",
            "name":"tokens",
            "type":"address[]"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"address",
            "name":"token",
            "type":"address"
         }
      ],
      "name":"getDenormalizedWeight",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getFinalTokens",
      "outputs":[
         {
            "internalType":"address[]",
            "name":"tokens",
            "type":"address[]"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"address",
            "name":"token",
            "type":"address"
         }
      ],
      "name":"getNormalizedWeight",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getNumTokens",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"address",
            "name":"tokenIn",
            "type":"address"
         },
         {
            "internalType":"address",
            "name":"tokenOut",
            "type":"address"
         }
      ],
      "name":"getSpotPrice",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"spotPrice",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"address",
            "name":"tokenIn",
            "type":"address"
         },
         {
            "internalType":"address",
            "name":"tokenOut",
            "type":"address"
         }
      ],
      "name":"getSpotPriceSansFee",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"spotPrice",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getSwapFee",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"getTotalDenormalizedWeight",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"token",
            "type":"address"
         }
      ],
      "name":"gulp",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"dst",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"amt",
            "type":"uint256"
         }
      ],
      "name":"increaseApproval",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         {
            "internalType":"address",
            "name":"t",
            "type":"address"
         }
      ],
      "name":"isBound",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"isFinalized",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"isPublicSwap",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"uint256",
            "name":"poolAmountOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256[]",
            "name":"maxAmountsIn",
            "type":"uint256[]"
         }
      ],
      "name":"joinPool",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"tokenIn",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"tokenAmountIn",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"minPoolAmountOut",
            "type":"uint256"
         }
      ],
      "name":"joinswapExternAmountIn",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"poolAmountOut",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"tokenIn",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"poolAmountOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"maxAmountIn",
            "type":"uint256"
         }
      ],
      "name":"joinswapPoolAmountOut",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"tokenAmountIn",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"name",
      "outputs":[
         {
            "internalType":"string",
            "name":"",
            "type":"string"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"token",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"balance",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"denorm",
            "type":"uint256"
         }
      ],
      "name":"rebind",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"manager",
            "type":"address"
         }
      ],
      "name":"setController",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"bool",
            "name":"public_",
            "type":"bool"
         }
      ],
      "name":"setPublicSwap",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"uint256",
            "name":"swapFee",
            "type":"uint256"
         }
      ],
      "name":"setSwapFee",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"tokenIn",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"tokenAmountIn",
            "type":"uint256"
         },
         {
            "internalType":"address",
            "name":"tokenOut",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"minAmountOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"maxPrice",
            "type":"uint256"
         }
      ],
      "name":"swapExactAmountIn",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"tokenAmountOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"spotPriceAfter",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"tokenIn",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"maxAmountIn",
            "type":"uint256"
         },
         {
            "internalType":"address",
            "name":"tokenOut",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"tokenAmountOut",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"maxPrice",
            "type":"uint256"
         }
      ],
      "name":"swapExactAmountOut",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"tokenAmountIn",
            "type":"uint256"
         },
         {
            "internalType":"uint256",
            "name":"spotPriceAfter",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"symbol",
      "outputs":[
         {
            "internalType":"string",
            "name":"",
            "type":"string"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":true,
      "inputs":[
         
      ],
      "name":"totalSupply",
      "outputs":[
         {
            "internalType":"uint256",
            "name":"",
            "type":"uint256"
         }
      ],
      "payable":false,
      "stateMutability":"view",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"dst",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"amt",
            "type":"uint256"
         }
      ],
      "name":"transfer",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"src",
            "type":"address"
         },
         {
            "internalType":"address",
            "name":"dst",
            "type":"address"
         },
         {
            "internalType":"uint256",
            "name":"amt",
            "type":"uint256"
         }
      ],
      "name":"transferFrom",
      "outputs":[
         {
            "internalType":"bool",
            "name":"",
            "type":"bool"
         }
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   },
   {
      "constant":false,
      "inputs":[
         {
            "internalType":"address",
            "name":"token",
            "type":"address"
         }
      ],
      "name":"unbind",
      "outputs":[
         
      ],
      "payable":false,
      "stateMutability":"nonpayable",
      "type":"function"
   }
]

exports.EMP_ABI = [
   {
     "inputs": [
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "expirationTimestamp",
             "type": "uint256"
           },
           {
             "internalType": "uint256",
             "name": "withdrawalLiveness",
             "type": "uint256"
           },
           {
             "internalType": "address",
             "name": "collateralAddress",
             "type": "address"
           },
           {
             "internalType": "address",
             "name": "finderAddress",
             "type": "address"
           },
           {
             "internalType": "address",
             "name": "tokenFactoryAddress",
             "type": "address"
           },
           {
             "internalType": "address",
             "name": "timerAddress",
             "type": "address"
           },
           {
             "internalType": "bytes32",
             "name": "priceFeedIdentifier",
             "type": "bytes32"
           },
           {
             "internalType": "string",
             "name": "syntheticName",
             "type": "string"
           },
           {
             "internalType": "string",
             "name": "syntheticSymbol",
             "type": "string"
           },
           {
             "components": [
               {
                 "internalType": "uint256",
                 "name": "rawValue",
                 "type": "uint256"
               }
             ],
             "internalType": "struct FixedPoint.Unsigned",
             "name": "minSponsorTokens",
             "type": "tuple"
           },
           {
             "internalType": "uint256",
             "name": "liquidationLiveness",
             "type": "uint256"
           },
           {
             "components": [
               {
                 "internalType": "uint256",
                 "name": "rawValue",
                 "type": "uint256"
               }
             ],
             "internalType": "struct FixedPoint.Unsigned",
             "name": "collateralRequirement",
             "type": "tuple"
           },
           {
             "components": [
               {
                 "internalType": "uint256",
                 "name": "rawValue",
                 "type": "uint256"
               }
             ],
             "internalType": "struct FixedPoint.Unsigned",
             "name": "disputeBondPct",
             "type": "tuple"
           },
           {
             "components": [
               {
                 "internalType": "uint256",
                 "name": "rawValue",
                 "type": "uint256"
               }
             ],
             "internalType": "struct FixedPoint.Unsigned",
             "name": "sponsorDisputeRewardPct",
             "type": "tuple"
           },
           {
             "components": [
               {
                 "internalType": "uint256",
                 "name": "rawValue",
                 "type": "uint256"
               }
             ],
             "internalType": "struct FixedPoint.Unsigned",
             "name": "disputerDisputeRewardPct",
             "type": "tuple"
           }
         ],
         "internalType": "struct Liquidatable.ConstructorParams",
         "name": "params",
         "type": "tuple"
       }
     ],
     "stateMutability": "nonpayable",
     "type": "constructor"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "caller",
         "type": "address"
       }
     ],
     "name": "ContractExpired",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "collateralAmount",
         "type": "uint256"
       }
     ],
     "name": "Deposit",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "caller",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "liquidator",
         "type": "address"
       },
       {
         "indexed": false,
         "internalType": "address",
         "name": "disputer",
         "type": "address"
       },
       {
         "indexed": false,
         "internalType": "uint256",
         "name": "liquidationId",
         "type": "uint256"
       },
       {
         "indexed": false,
         "internalType": "bool",
         "name": "disputeSucceeded",
         "type": "bool"
       }
     ],
     "name": "DisputeSettled",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "caller",
         "type": "address"
       },
       {
         "indexed": false,
         "internalType": "uint256",
         "name": "originalExpirationTimestamp",
         "type": "uint256"
       },
       {
         "indexed": false,
         "internalType": "uint256",
         "name": "shutdownTimestamp",
         "type": "uint256"
       }
     ],
     "name": "EmergencyShutdown",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       }
     ],
     "name": "EndedSponsorPosition",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "amount",
         "type": "uint256"
       }
     ],
     "name": "FinalFeesPaid",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "liquidator",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "liquidationId",
         "type": "uint256"
       },
       {
         "indexed": false,
         "internalType": "uint256",
         "name": "tokensOutstanding",
         "type": "uint256"
       },
       {
         "indexed": false,
         "internalType": "uint256",
         "name": "lockedCollateral",
         "type": "uint256"
       },
       {
         "indexed": false,
         "internalType": "uint256",
         "name": "liquidatedCollateral",
         "type": "uint256"
       }
     ],
     "name": "LiquidationCreated",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "liquidator",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "disputer",
         "type": "address"
       },
       {
         "indexed": false,
         "internalType": "uint256",
         "name": "liquidationId",
         "type": "uint256"
       },
       {
         "indexed": false,
         "internalType": "uint256",
         "name": "disputeBondAmount",
         "type": "uint256"
       }
     ],
     "name": "LiquidationDisputed",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "caller",
         "type": "address"
       },
       {
         "indexed": false,
         "internalType": "uint256",
         "name": "withdrawalAmount",
         "type": "uint256"
       },
       {
         "indexed": true,
         "internalType": "enum Liquidatable.Status",
         "name": "liquidationStatus",
         "type": "uint8"
       }
     ],
     "name": "LiquidationWithdrawn",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       }
     ],
     "name": "NewSponsor",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "collateralAmount",
         "type": "uint256"
       },
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "tokenAmount",
         "type": "uint256"
       }
     ],
     "name": "PositionCreated",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "collateralAmount",
         "type": "uint256"
       },
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "tokenAmount",
         "type": "uint256"
       }
     ],
     "name": "Redeem",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "regularFee",
         "type": "uint256"
       },
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "lateFee",
         "type": "uint256"
       }
     ],
     "name": "RegularFeesPaid",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "oldSponsor",
         "type": "address"
       }
     ],
     "name": "RequestTransferPosition",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "oldSponsor",
         "type": "address"
       }
     ],
     "name": "RequestTransferPositionCanceled",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "oldSponsor",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "address",
         "name": "newSponsor",
         "type": "address"
       }
     ],
     "name": "RequestTransferPositionExecuted",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "collateralAmount",
         "type": "uint256"
       }
     ],
     "name": "RequestWithdrawal",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "collateralAmount",
         "type": "uint256"
       }
     ],
     "name": "RequestWithdrawalCanceled",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "collateralAmount",
         "type": "uint256"
       }
     ],
     "name": "RequestWithdrawalExecuted",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "caller",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "collateralReturned",
         "type": "uint256"
       },
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "tokensBurned",
         "type": "uint256"
       }
     ],
     "name": "SettleExpiredPosition",
     "type": "event"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": true,
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       },
       {
         "indexed": true,
         "internalType": "uint256",
         "name": "collateralAmount",
         "type": "uint256"
       }
     ],
     "name": "Withdrawal",
     "type": "event"
   },
   {
     "inputs": [],
     "name": "cancelTransferPosition",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "cancelWithdrawal",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "collateralCurrency",
     "outputs": [
       {
         "internalType": "contract IERC20",
         "name": "",
         "type": "address"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "collateralRequirement",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "rawValue",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "contractState",
     "outputs": [
       {
         "internalType": "enum PricelessPositionManager.ContractState",
         "name": "",
         "type": "uint8"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "collateralAmount",
         "type": "tuple"
       },
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "numTokens",
         "type": "tuple"
       }
     ],
     "name": "create",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       },
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "minCollateralPerToken",
         "type": "tuple"
       },
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "maxCollateralPerToken",
         "type": "tuple"
       },
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "maxTokensToLiquidate",
         "type": "tuple"
       },
       {
         "internalType": "uint256",
         "name": "deadline",
         "type": "uint256"
       }
     ],
     "name": "createLiquidation",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "liquidationId",
         "type": "uint256"
       },
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "tokensLiquidated",
         "type": "tuple"
       },
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "finalFeeBond",
         "type": "tuple"
       }
     ],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "cumulativeFeeMultiplier",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "rawValue",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "collateralAmount",
         "type": "tuple"
       }
     ],
     "name": "deposit",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       },
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "collateralAmount",
         "type": "tuple"
       }
     ],
     "name": "depositTo",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "liquidationId",
         "type": "uint256"
       },
       {
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       }
     ],
     "name": "dispute",
     "outputs": [
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "totalPaid",
         "type": "tuple"
       }
     ],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "disputeBondPct",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "rawValue",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "disputerDisputeRewardPct",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "rawValue",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "emergencyShutdown",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "expirationTimestamp",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "expire",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "expiryPrice",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "rawValue",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "finder",
     "outputs": [
       {
         "internalType": "contract FinderInterface",
         "name": "",
         "type": "address"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       }
     ],
     "name": "getCollateral",
     "outputs": [
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "collateralAmount",
         "type": "tuple"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "getCurrentTime",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       }
     ],
     "name": "getLiquidations",
     "outputs": [
       {
         "components": [
           {
             "internalType": "address",
             "name": "sponsor",
             "type": "address"
           },
           {
             "internalType": "address",
             "name": "liquidator",
             "type": "address"
           },
           {
             "internalType": "enum Liquidatable.Status",
             "name": "state",
             "type": "uint8"
           },
           {
             "internalType": "uint256",
             "name": "liquidationTime",
             "type": "uint256"
           },
           {
             "components": [
               {
                 "internalType": "uint256",
                 "name": "rawValue",
                 "type": "uint256"
               }
             ],
             "internalType": "struct FixedPoint.Unsigned",
             "name": "tokensOutstanding",
             "type": "tuple"
           },
           {
             "components": [
               {
                 "internalType": "uint256",
                 "name": "rawValue",
                 "type": "uint256"
               }
             ],
             "internalType": "struct FixedPoint.Unsigned",
             "name": "lockedCollateral",
             "type": "tuple"
           },
           {
             "components": [
               {
                 "internalType": "uint256",
                 "name": "rawValue",
                 "type": "uint256"
               }
             ],
             "internalType": "struct FixedPoint.Unsigned",
             "name": "liquidatedCollateral",
             "type": "tuple"
           },
           {
             "components": [
               {
                 "internalType": "uint256",
                 "name": "rawValue",
                 "type": "uint256"
               }
             ],
             "internalType": "struct FixedPoint.Unsigned",
             "name": "rawUnitCollateral",
             "type": "tuple"
           },
           {
             "internalType": "address",
             "name": "disputer",
             "type": "address"
           },
           {
             "components": [
               {
                 "internalType": "uint256",
                 "name": "rawValue",
                 "type": "uint256"
               }
             ],
             "internalType": "struct FixedPoint.Unsigned",
             "name": "settlementPrice",
             "type": "tuple"
           },
           {
             "components": [
               {
                 "internalType": "uint256",
                 "name": "rawValue",
                 "type": "uint256"
               }
             ],
             "internalType": "struct FixedPoint.Unsigned",
             "name": "finalFee",
             "type": "tuple"
           }
         ],
         "internalType": "struct Liquidatable.LiquidationData[]",
         "name": "liquidationData",
         "type": "tuple[]"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "liquidationLiveness",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "",
         "type": "address"
       },
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "name": "liquidations",
     "outputs": [
       {
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       },
       {
         "internalType": "address",
         "name": "liquidator",
         "type": "address"
       },
       {
         "internalType": "enum Liquidatable.Status",
         "name": "state",
         "type": "uint8"
       },
       {
         "internalType": "uint256",
         "name": "liquidationTime",
         "type": "uint256"
       },
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "tokensOutstanding",
         "type": "tuple"
       },
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "lockedCollateral",
         "type": "tuple"
       },
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "liquidatedCollateral",
         "type": "tuple"
       },
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "rawUnitCollateral",
         "type": "tuple"
       },
       {
         "internalType": "address",
         "name": "disputer",
         "type": "address"
       },
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "settlementPrice",
         "type": "tuple"
       },
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "finalFee",
         "type": "tuple"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "minSponsorTokens",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "rawValue",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "payRegularFees",
     "outputs": [
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "totalPaid",
         "type": "tuple"
       }
     ],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "pfc",
     "outputs": [
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "",
         "type": "tuple"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "",
         "type": "address"
       }
     ],
     "name": "positions",
     "outputs": [
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "tokensOutstanding",
         "type": "tuple"
       },
       {
         "internalType": "uint256",
         "name": "withdrawalRequestPassTimestamp",
         "type": "uint256"
       },
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "withdrawalRequestAmount",
         "type": "tuple"
       },
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "rawCollateral",
         "type": "tuple"
       },
       {
         "internalType": "uint256",
         "name": "transferPositionRequestPassTimestamp",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "priceIdentifier",
     "outputs": [
       {
         "internalType": "bytes32",
         "name": "",
         "type": "bytes32"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "rawLiquidationCollateral",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "rawValue",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "rawTotalPositionCollateral",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "rawValue",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "numTokens",
         "type": "tuple"
       }
     ],
     "name": "redeem",
     "outputs": [
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "amountWithdrawn",
         "type": "tuple"
       }
     ],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "remargin",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "requestTransferPosition",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "collateralAmount",
         "type": "tuple"
       }
     ],
     "name": "requestWithdrawal",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "time",
         "type": "uint256"
       }
     ],
     "name": "setCurrentTime",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "settleExpired",
     "outputs": [
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "amountWithdrawn",
         "type": "tuple"
       }
     ],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "sponsorDisputeRewardPct",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "rawValue",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "timerAddress",
     "outputs": [
       {
         "internalType": "address",
         "name": "",
         "type": "address"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "tokenCurrency",
     "outputs": [
       {
         "internalType": "contract ExpandedIERC20",
         "name": "",
         "type": "address"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "totalPositionCollateral",
     "outputs": [
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "totalCollateral",
         "type": "tuple"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "totalTokensOutstanding",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "rawValue",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "address",
         "name": "newSponsorAddress",
         "type": "address"
       }
     ],
     "name": "transferPositionPassedRequest",
     "outputs": [],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "collateralAmount",
         "type": "tuple"
       }
     ],
     "name": "withdraw",
     "outputs": [
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "amountWithdrawn",
         "type": "tuple"
       }
     ],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [
       {
         "internalType": "uint256",
         "name": "liquidationId",
         "type": "uint256"
       },
       {
         "internalType": "address",
         "name": "sponsor",
         "type": "address"
       }
     ],
     "name": "withdrawLiquidation",
     "outputs": [
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "amountWithdrawn",
         "type": "tuple"
       }
     ],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "withdrawPassedRequest",
     "outputs": [
       {
         "components": [
           {
             "internalType": "uint256",
             "name": "rawValue",
             "type": "uint256"
           }
         ],
         "internalType": "struct FixedPoint.Unsigned",
         "name": "amountWithdrawn",
         "type": "tuple"
       }
     ],
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "inputs": [],
     "name": "withdrawalLiveness",
     "outputs": [
       {
         "internalType": "uint256",
         "name": "",
         "type": "uint256"
       }
     ],
     "stateMutability": "view",
     "type": "function"
   }
 ]