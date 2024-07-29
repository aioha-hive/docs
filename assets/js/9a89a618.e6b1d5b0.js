"use strict";(self.webpackChunkaioha_docs=self.webpackChunkaioha_docs||[]).push([[862],{601:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>x,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var a=s(6070),r=s(5710),i=s(3385),t=s(7527),l=s(251);const d={sidebar_position:3},c="JSON-RPC Specs",o={id:"core/jsonrpc",title:"JSON-RPC Specs",description:"Method, parameter and event names may change in the near future.",source:"@site/docs/core/jsonrpc.mdx",sourceDirName:"core",slug:"/core/jsonrpc",permalink:"/docs/core/jsonrpc",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/core/jsonrpc.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/docs/core/usage"},next:{title:"React",permalink:"/docs/category/react"}},h={},u=[{value:"Aioha RPC Errors",id:"aioha-rpc-errors",level:2},{value:"Aioha RPC Methods",id:"aioha-rpc-methods",level:2},{value:"Login",id:"login",level:3},{value:"Login and Decrypt Memo",id:"login-and-decrypt-memo",level:3},{value:"Logout",id:"logout",level:3},{value:"Decrypt Memo",id:"decrypt-memo",level:3},{value:"Sign Message",id:"sign-message",level:3},{value:"Sign Transaction",id:"sign-transaction",level:3},{value:"Sign and Broadcast Transaction",id:"sign-and-broadcast-transaction",level:3},{value:"Get Registered Providers",id:"get-registered-providers",level:3},{value:"Get Current Provider",id:"get-current-provider",level:3},{value:"Get Current User",id:"get-current-user",level:3},{value:"Is Logged In",id:"is-logged-in",level:3},{value:"Is Provider Registered",id:"is-provider-registered",level:3},{value:"Operations",id:"operations",level:2},{value:"Social",id:"social",level:3},{value:"Custom JSON",id:"custom-json",level:3},{value:"Claim Rewards",id:"claim-rewards",level:3},{value:"Transfer",id:"transfer",level:3},{value:"HIVE staking",id:"hive-staking",level:3},{value:"Governance",id:"governance",level:3},{value:"Authority",id:"authority",level:3},{value:"Call VSC Contract",id:"call-vsc-contract",level:3},{value:"Events",id:"events",level:2},{value:"Connected",id:"connected",level:3},{value:"Disconnected",id:"disconnected",level:3},{value:"Account Changed",id:"account-changed",level:3},{value:"HiveAuth Login Requested",id:"hiveauth-login-requested",level:3}];function j(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"json-rpc-specs",children:"JSON-RPC Specs"}),"\n",(0,a.jsx)(n.admonition,{title:"Not Final",type:"warning",children:(0,a.jsx)(n.p,{children:"Method, parameter and event names may change in the near future."})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1193",children:"EIP-1193 style"})," JSON-RPC API for Hive wallet providers outlined in this page are implemented in Aioha. These are designed to be platform and transport agnostic."]}),"\n",(0,a.jsx)(n.p,{children:"Any RPC methods not defined here shall be redirected to a Hive API node."}),"\n",(0,a.jsx)(n.h2,{id:"aioha-rpc-errors",children:"Aioha RPC Errors"}),"\n",(0,a.jsx)(n.p,{children:"For every RPC method, the error returned (if any) shall follow the convention below:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "message": "human readable error message",\n  "code": 4001\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"The error code returned are as follows, for Aioha-specific errors:"}),"\n",(0,a.jsx)(l.A,{type:"info",children:(0,a.jsx)(n.p,{children:"The application may use the error codes to provide a localized message to be displayed to the user."})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Error Code"}),(0,a.jsx)(n.th,{children:"Name"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"4001"}),(0,a.jsx)(n.td,{children:"User Rejected Request"}),(0,a.jsx)(n.td,{children:"The user rejected the request."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"4002"}),(0,a.jsx)(n.td,{children:"Request Expired"}),(0,a.jsx)(n.td,{children:"The request has expired."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"4100"}),(0,a.jsx)(n.td,{children:"Unauthorized"}),(0,a.jsx)(n.td,{children:"The requested method and/or account has not been authorized by the user."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"4200"}),(0,a.jsx)(n.td,{children:"Unsupported Method"}),(0,a.jsx)(n.td,{children:"The requested method is not supported."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"4201"}),(0,a.jsx)(n.td,{children:"Unsupported Provider"}),(0,a.jsx)(n.td,{children:"The requested provider is not supported or registered."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"4900"}),(0,a.jsx)(n.td,{children:"Disconnected"}),(0,a.jsx)(n.td,{children:"The provider is disconnected."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"5000"}),(0,a.jsx)(n.td,{children:"Unknown Error"}),(0,a.jsx)(n.td,{children:"Unknown error occurred while serving the request."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"5001"}),(0,a.jsx)(n.td,{children:"Extension Not Found"}),(0,a.jsx)(n.td,{children:"The required browser extension is not installed."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"5002"}),(0,a.jsx)(n.td,{children:"Missing Username"}),(0,a.jsx)(n.td,{children:"Username is required."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"5003"}),(0,a.jsx)(n.td,{children:"Missing/Invalid Options"}),(0,a.jsx)(n.td,{children:"Valid options are required."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"5004"}),(0,a.jsx)(n.td,{children:"Invalid Memo"}),(0,a.jsx)(n.td,{children:"Memo must start with a #."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"5005"}),(0,a.jsx)(n.td,{children:"Unsupported Key Type"}),(0,a.jsx)(n.td,{children:"Chosen key type is not supported for the requested operation."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"5200"}),(0,a.jsx)(n.td,{children:"Nothing To Do"}),(0,a.jsx)(n.td,{children:"There are no actions required to complete the request."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"5201"}),(0,a.jsx)(n.td,{children:"Invalid Account Auth"}),(0,a.jsx)(n.td,{children:"Could not add/remove itself to/from account auth."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"5900"}),(0,a.jsx)(n.td,{children:"Connection Error"}),(0,a.jsx)(n.td,{children:"Failed to establish connection to the device."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"5901"}),(0,a.jsx)(n.td,{children:"Unassociated User"}),(0,a.jsx)(n.td,{children:"Username is not associated with the device."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"5902"}),(0,a.jsx)(n.td,{children:"Discovery Error"}),(0,a.jsx)(n.td,{children:"Failed to search accounts associated with the device."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"5903"}),(0,a.jsx)(n.td,{children:"Signature Request Error"}),(0,a.jsx)(n.td,{children:"Failed to obtain message/transaction signature from the device."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"aioha-rpc-methods",children:"Aioha RPC Methods"}),"\n",(0,a.jsx)(n.h3,{id:"login",children:"Login"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsxs)(t.A,{value:"request",label:"Request",children:[(0,a.jsx)(l.A,{type:"info",children:(0,a.jsxs)(n.p,{children:["You may need to subscribe to ",(0,a.jsxs)(n.a,{href:"#hiveauth-login-requested",children:[(0,a.jsx)(n.code,{children:"hiveauth_login_requested"})," event"]})," in order to receive the HiveAuth QR code payload."]})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.login",\n  "params": {\n    "provider": "keychain",\n    "username": "aioha",\n    "message": "Hello World",\n    "key_type": "posting",\n    "login_title": "Login"\n  }\n}\n'})})]}),(0,a.jsx)(t.A,{value:"result",label:"Result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="object"',children:'{\n  "provider": "keychain",\n  "result": "2020647841097bca7d9e84c39df209ac2df9b42c5b194ee2a690304ce8c140690f5296566b5da0ae9d9950243871bf17fa26b34b671dc8284bf7fba767958a5508",\n  "username": "aioha",\n  "public_key": "STM5jruaymFQ93jwUp15r9SF5wPeaNvRKFE4nbbJv4vfHCk5a6zRu"\n}\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"login-and-decrypt-memo",children:"Login and Decrypt Memo"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(t.A,{value:"request",label:"Request",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.login_memo",\n  "params": {\n    "provider": "keychain",\n    "username": "aioha",\n    "message": "#9RdpW9b7nfmdzipLJSZVQpcnpR3ipygGZg9DyxQZgBkbztb3NXBhSVKZJRLMs42KdcwUfHTkCWHpiGxTzR3jFfuaoY274chw3DyR16R2Esn5dMtw2Sa2Eh2W8EDochfiBKFmxAGauZRZChWz9Z5AmkS",\n    "key_type": "posting"\n  }\n}\n'})})}),(0,a.jsx)(t.A,{value:"result",label:"Result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="object"',children:'{\n  "provider": "keychain",\n  "result": "#Hello World",\n  "username": "aioha"\n}\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"logout",children:"Logout"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(t.A,{value:"request",label:"Request",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.logout",\n  "params": {}\n}\n'})})}),(0,a.jsx)(t.A,{value:"result",label:"Result",children:(0,a.jsx)(l.A,{type:"note",children:(0,a.jsx)(n.p,{children:"This method does not return anything."})})})]}),"\n",(0,a.jsx)(n.h3,{id:"decrypt-memo",children:"Decrypt Memo"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(t.A,{value:"request",label:"Request",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.decrypt_memo",\n  "params": {\n    "message": "#9RdpW9b7nfmdzipLJSZVQpcnpR3ipygGZg9DyxQZgBkbztb3NXBhSVKZJRLMs42KdcwUfHTkCWHpiGxTzR3jFfuaoY274chw3DyR16R2Esn5dMtw2Sa2Eh2W8EDochfiBKFmxAGauZRZChWz9Z5AmkS",\n    "key_type": "posting"\n  }\n}\n'})})}),(0,a.jsx)(t.A,{value:"result",label:"Result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-string",metastring:'title="string"',children:"#Hello World\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"sign-message",children:"Sign Message"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(t.A,{value:"request",label:"Request",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.sign_message",\n  "params": {\n    "message": "Hello World",\n    "key_type": "posting"\n  }\n}\n'})})}),(0,a.jsx)(t.A,{value:"result",label:"Result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="object"',children:'{\n  "signature": "2020647841097bca7d9e84c39df209ac2df9b42c5b194ee2a690304ce8c140690f5296566b5da0ae9d9950243871bf17fa26b34b671dc8284bf7fba767958a5508",\n  "public_key": "STM5jruaymFQ93jwUp15r9SF5wPeaNvRKFE4nbbJv4vfHCk5a6zRu"\n}\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"sign-transaction",children:"Sign Transaction"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(t.A,{value:"request",label:"Request",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.sign_tx",\n  "params": {\n    "tx": {\n      "ref_block_num": 27912,\n      "ref_block_prefix": 1175138206,\n      "expiration": "2024-06-07T10:23:57",\n      "operations": [\n        [\n          "transfer",\n          {\n            "from": "randomvlogs",\n            "to": "randomvlogs",\n            "amount": "0.001 HIVE",\n            "memo": "Aioha Test"\n          }\n        ]\n      ],\n      "extensions": []\n    },\n    "key_type": "posting"\n  }\n}\n'})})}),(0,a.jsx)(t.A,{value:"result",label:"Result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="object"',children:'{\n  "ref_block_num": 27912,\n  "ref_block_prefix": 1175138206,\n  "expiration": "2024-06-07T10:23:57",\n  "operations": [\n    [\n      "transfer",\n      {\n        "from": "randomvlogs",\n        "to": "randomvlogs",\n        "amount": "0.001 HIVE",\n        "memo": "Aioha Test"\n      }\n    ]\n  ],\n  "extensions": [],\n  "signatures": [\n    "20469faba4c128ef41c4e444ef5422e88ed9397d43a7c9713a8e59c170de45eea539b63ced8f4ff048442bdcca3b96848f6f740e655c971f9cae00b54535c8eea0"\n  ]\n}\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"sign-and-broadcast-transaction",children:"Sign and Broadcast Transaction"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(t.A,{value:"request",label:"Request",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.sign_and_broadcast_tx",\n  "params": {\n    "ops": [\n      ["vote", {\n        "author": "sagarkothari88",\n        "permlink": "2024-06-05-daily-updates-from-sagarkothari88",\n        "voter": "techcoderx",\n        "weight": 10000\n      }]\n    ],\n    "key_type": "posting"\n  }\n}\n'})})}),(0,a.jsx)(t.A,{value:"result",label:"Result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-string",metastring:'title="string"',children:"87c10767531071732fe15e6c34cf275900c342a3\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-registered-providers",children:"Get Registered Providers"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(t.A,{value:"request",label:"Request",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.get_registered_providers",\n  "params": {}\n}\n'})})}),(0,a.jsx)(t.A,{value:"result",label:"Result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="array"',children:'["keychain", "peakvault", "ledger", "hiveauth", "hivesigner"]\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-current-provider",children:"Get Current Provider"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(t.A,{value:"request",label:"Request",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.get_current_provider",\n  "params": {}\n}\n'})})}),(0,a.jsx)(t.A,{value:"result",label:"Result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-string",metastring:'title="string"',children:"hiveauth\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"get-current-user",children:"Get Current User"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(t.A,{value:"request",label:"Request",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.get_current_user",\n  "params": {}\n}\n'})})}),(0,a.jsx)(t.A,{value:"result",label:"Result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-string",metastring:'title="string"',children:"aioha\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"is-logged-in",children:"Is Logged In"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(t.A,{value:"request",label:"Request",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.is_logged_in",\n  "params": {}\n}\n'})})}),(0,a.jsx)(t.A,{value:"result",label:"Result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bool",metastring:'title="boolean"',children:"true\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"is-provider-registered",children:"Is Provider Registered"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(t.A,{value:"request",label:"Request",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.is_provider_registered",\n  "params": {\n    "enabled": true\n  }\n}\n'})})}),(0,a.jsx)(t.A,{value:"result",label:"Result",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bool",metastring:'title="boolean"',children:"true\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"operations",children:"Operations"}),"\n",(0,a.jsxs)(n.p,{children:["The return value for these method calls will be equivalent to sign and broadcast transaction result ",(0,a.jsx)(n.a,{href:"#sign-and-broadcast-transaction",children:"above"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"social",children:"Social"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(t.A,{value:"vote-post",label:"Vote",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.vote",\n  "params": {\n    "author": "alice",\n    "permlink": "my-permlink",\n    "weight": 10000\n  }\n}\n'})})}),(0,a.jsx)(t.A,{value:"vote-many",label:"Vote Many",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.vote_many",\n  "params": [\n    {\n      "author": "author1",\n      "permlink": "permlink1",\n      "weight": 10000\n    },\n    {\n      "author": "author2",\n      "permlink": "permlink2",\n      "weight": 5000\n    }\n  ]\n}\n'})})}),(0,a.jsxs)(t.A,{value:"comment",label:"Comment",children:[(0,a.jsx)(l.A,{type:"note",title:"Comment Options",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"options"})," is an optional ",(0,a.jsx)(n.a,{href:"https://developers.hive.io/apidefinitions/#broadcast_ops_comment_options",children:(0,a.jsx)(n.code,{children:"comment_options"})})," config."]})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.comment",\n  "params": {\n    "parent_author": "pa",\n    "parent_permlink": "pp",\n    "permlink": "my-permlink",\n    "title": "Post Title",\n    "body": "An awesome post body goes here",\n    "json_metadata": {\n      "foo": "bar"\n    },\n    "options": {\n      "author": "aioha",\n      "permlink": "my-permlink",\n      "max_accepted_payout": "1000000.000 HBD",\n      "percent_hbd": 10000,\n      "allow_votes": true,\n      "allow_curation_rewards": true,\n      "extensions": [[0, {\n        "beneficiaries": [\n          {\n            "account": "alice",\n            "weight": 100\n          }, {\n            "account": "bob",\n            "weight": 150\n          }\n        ]\n      }]]\n    }\n  }\n}\n'})})]}),(0,a.jsxs)(t.A,{value:"del-comment",label:"Delete Comment",children:[(0,a.jsx)(l.A,{type:"note",children:(0,a.jsx)(n.p,{children:"The post or comment must contain no child comments or positive rshares."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.delete_comment",\n  "params": {\n    "permlink": "permlink-to-delete",\n  }\n}\n'})})]}),(0,a.jsx)(t.A,{value:"reblog",label:"Reblog",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.reblog",\n  "params": {\n    "author": "charlie",\n    "permlink": "charlie-awesome-permlink",\n    "reblog": true\n  }\n}\n'})})}),(0,a.jsx)(t.A,{value:"follow",label:"Follow",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.follow",\n  "params": {\n    "author": "bob",\n    "follow": true\n  }\n}\n'})})}),(0,a.jsx)(t.A,{value:"ignore",label:"Ignore",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.ignore",\n  "params": {\n    "author": "spam.account"\n  }\n}\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"custom-json",children:"Custom JSON"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.custom_json",\n  "params": {\n    "key_type": "posting"\n    "id": "my-id",\n    "json": {\n      "foo": "bar"\n    },\n    "title": "Display Title"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"claim-rewards",children:"Claim Rewards"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.claim_rewards",\n  "params": {}\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"transfer",children:"Transfer"}),"\n",(0,a.jsx)(n.p,{children:"Transfer HIVE/HBD to another account."}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(t.A,{value:"xfer-single",label:"One Time",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.transfer",\n  "params": {\n    "to": "bob",\n    "amount": 1,\n    "asset": "HIVE",\n    "memo": "Transferred using Aioha with memo"\n  }\n}\n'})})}),(0,a.jsxs)(t.A,{value:"xfer-recurrent",label:"Recurrent",children:[(0,a.jsx)(l.A,{type:"note",children:(0,a.jsx)(n.p,{children:"Set amount to 0 to cancel a recurrent transter."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.transfer",\n  "params": {\n    "to": "bob",\n    "amount": 1,\n    "asset": "HIVE",\n    "memo": "Transferred using Aioha with memo",\n    "recurrent": {\n      "recurrence": 24,\n      "executions": 7\n    }\n  }\n}\n'})})]})]}),"\n",(0,a.jsx)(n.h3,{id:"hive-staking",children:"HIVE staking"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsxs)(t.A,{value:"stake",label:"Stake",children:[(0,a.jsx)(l.A,{type:"note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"to"})," is an optional parameter when staking HIVE to another account."]})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.stake_hive",\n  "params": {\n    "to": "itself",\n    "amount": 1000\n  }\n}\n'})})]}),(0,a.jsxs)(t.A,{value:"unstake",label:"Unstake",children:[(0,a.jsx)(l.A,{type:"note",children:(0,a.jsx)(n.p,{children:"Set amount to 0 to cancel unstake."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.unstake_hive",\n  "params": {\n    "amount": 1000\n  }\n}\n'})})]}),(0,a.jsxs)(t.A,{value:"unstake-vests",label:"Unstake (VESTS)",children:[(0,a.jsx)(l.A,{type:"note",children:(0,a.jsx)(n.p,{children:"Set amount to 0 to cancel unstake."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.unstake_vests",\n  "params": {\n    "amount": 1000000\n  }\n}\n'})})]}),(0,a.jsxs)(t.A,{value:"delegate",label:"Delegate",children:[(0,a.jsx)(l.A,{type:"note",children:(0,a.jsx)(n.p,{children:"Set amount to 0 to undelegate."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.delegate_staked_hive",\n  "params": {\n    "amount": 1000\n  }\n}\n'})})]}),(0,a.jsxs)(t.A,{value:"delegate-vests",label:"Delegate (VESTS)",children:[(0,a.jsx)(l.A,{type:"note",children:(0,a.jsx)(n.p,{children:"Set amount to 0 to undelegate."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.delegate_vests",\n  "params": {\n    "amount": 1000000\n  }\n}\n'})})]})]}),"\n",(0,a.jsx)(n.h3,{id:"governance",children:"Governance"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsx)(t.A,{value:"vote-witness",label:"Vote Witness",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.vote_witness",\n  "params": {\n    "witness": "thewitness",\n    "approve": true\n  }\n}\n'})})}),(0,a.jsx)(t.A,{value:"vote-proposals",label:"Vote Proposals",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.vote_proposals",\n  "params": {\n    "proposals": [0],\n    "approve": true\n  }\n}\n'})})}),(0,a.jsxs)(t.A,{value:"set-proxy",label:"Set Proxy",children:[(0,a.jsx)(l.A,{type:"note",children:(0,a.jsx)(n.p,{children:"Set proxy to an empty string to clear proxy."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.set_proxy",\n  "params": {\n    "proxy": "proxiedacc"\n  }\n}\n'})})]})]}),"\n",(0,a.jsx)(n.h3,{id:"authority",children:"Authority"}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsxs)(t.A,{value:"auths-accounts",label:"Account Auths",children:[(0,a.jsx)(l.A,{type:"note",children:(0,a.jsx)(n.p,{children:"Set weight to 0 to remove the account auth."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.add_account_auth",\n  "params": {\n    "account": "aioha",\n    "authority": "posting",\n    "weight": 1\n  }\n}\n'})})]}),(0,a.jsxs)(t.A,{value:"auths-keys",label:"Key Auths",children:[(0,a.jsx)(l.A,{type:"note",children:(0,a.jsx)(n.p,{children:"Set weight to 0 to remove the key auth."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.add_key_auth",\n  "params": {\n    "key": "STMxxxx",\n    "authority": "posting",\n    "weight": 1\n  }\n}\n'})})]})]}),"\n",(0,a.jsx)(n.h3,{id:"call-vsc-contract",children:"Call VSC Contract"}),"\n",(0,a.jsx)(n.p,{children:"Call a VSC contract from L1."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'{\n  "method": "aioha_api.vsc_call_contract",\n  "params": {\n    "contract_id": "vs41q9c3yg82k4q76nprqk89xzk2n8zhvedrz5prnrrqpy6v9css3seg2q43uvjdc500",\n    "action": "dumpEnv",\n    "payload": "tx payload",\n    "authority": "active"\n  }\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,a.jsx)(n.h3,{id:"connected",children:"Connected"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"connect"})," event is emitted every time an account has been successfully authenticated after:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Aioha is first initialized"}),"\n",(0,a.jsxs)(n.li,{children:["A ",(0,a.jsx)(n.code,{children:"disconnect"})," event was emitted"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"aioha.on('connect', () => void)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"disconnected",children:"Disconnected"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"disconnect"})," event is emitted every time an account was logged out and no accounts remain authenticated."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"aioha.on('disconnect', () => void)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"account-changed",children:"Account Changed"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"account_changed"})," event is emitted every time the current logged in account changes, under the following circumstances:"]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Another account has been added on top of the existing connected account"}),"\n",(0,a.jsx)(n.li,{children:"The connected account has been changed from one previously authenticated account to another"}),"\n",(0,a.jsx)(n.li,{children:"An account has been disconnected while leaving other accounts remain connected."}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"aioha.on('account_changed', () => void)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"hiveauth-login-requested",children:"HiveAuth Login Requested"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"hiveauth_login_requested"})," event is emitted every time a new HiveAuth login request is created. This event contains the payload needed to display a QR code to be scanned using a HiveAuth compatible PKSA."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"aioha.on('hiveauth_login_requested', (payload: string) => void)\n"})})]})}function x(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}}}]);