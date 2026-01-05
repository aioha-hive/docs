# JSON-RPC Interface

The [EIP-1193 style](https://eips.ethereum.org/EIPS/eip-1193) JSON-RPC API for Hive wallet providers outlined in this page are implemented in Aioha. These are designed to be platform and transport agnostic.

Any RPC methods not defined here shall be redirected to a Hive API node.

## Aioha RPC Errors[​](#aioha-rpc-errors "Direct link to Aioha RPC Errors")

For every RPC method, the error returned (if any) shall follow the convention below:

```
{
  "message": "human readable error message",
  "code": 4001
}
```

The error code returned are as follows, for Aioha-specific errors:

info

The application may use the error codes to provide a localized message to be displayed to the user.

| Error Code | Name                    | Description                                                              |
| ---------- | ----------------------- | ------------------------------------------------------------------------ |
| 4001       | User Rejected Request   | The user rejected the request.                                           |
| 4002       | Request Expired         | The request has expired.                                                 |
| 4100       | Unauthorized            | The requested method and/or account has not been authorized by the user. |
| 4200       | Unsupported Method      | The requested method is not supported.                                   |
| 4201       | Unsupported Provider    | The requested provider is not supported or registered.                   |
| 4900       | Disconnected            | The provider is disconnected.                                            |
| 4901       | Already connected       | Account connection has already been established with the provider.       |
| 5000       | Unknown Error           | Unknown error occurred while serving the request.                        |
| 5001       | Extension Not Found     | The required browser extension is not installed.                         |
| 5002       | Missing Username        | Username is required.                                                    |
| 5003       | Missing/Invalid Options | Valid options are required.                                              |
| 5004       | Invalid Memo            | Memo must start with a #.                                                |
| 5005       | Unsupported Key Type    | Chosen key type is not supported for the requested operation.            |
| 5200       | Nothing To Do           | There are no actions required to complete the request.                   |
| 5201       | Invalid Account Auth    | Could not add/remove itself to/from account auth.                        |
| 5900       | Connection Error        | Failed to establish connection to the device.                            |
| 5901       | Unassociated User       | Username is not associated with the device.                              |
| 5902       | Discovery Error         | Failed to search accounts associated with the device.                    |
| 5903       | Signature Request Error | Failed to obtain message/transaction signature from the device.          |
| 5904       | Hash signing disabled   | Hash signing is not enabled on the device.                               |

## Usage[​](#usage "Direct link to Usage")

```
import { initAioha, Providers } from '@aioha/aioha'
import { AiohaJsonRpc } from '@aioha/aioha/build/extras/jsonrpc-request.js'

const aioha = initAioha()
const rpc = new AiohaJsonRpc(aioha)

// Login as usual
const login = await aioha.login(Providers.Custom, 'your-username', { msg: 'Hello World' })

// Make an RPC request
// This is shown for reference, ideally Wax should be used for Hive RPC client
const result = await rpc.request({
  method: 'database_api.get_dynamic_global_properties',
  params: {}
})

// Listen to an event
rpc.on('connect', () => console.log('connected'))
// or directly through Aioha instance
aioha.on('connect', () => console.log('connected'))
```

## Aioha RPC Methods[​](#aioha-rpc-methods "Direct link to Aioha RPC Methods")

### Decrypt Memo[​](#decrypt-memo "Direct link to Decrypt Memo")

* Request
* Result

```
{
  "method": "aioha_api.decrypt_memo",
  "params": {
    "message": "#9RdpW9b7nfmdzipLJSZVQpcnpR3ipygGZg9DyxQZgBkbztb3NXBhSVKZJRLMs42KdcwUfHTkCWHpiGxTzR3jFfuaoY274chw3DyR16R2Esn5dMtw2Sa2Eh2W8EDochfiBKFmxAGauZRZChWz9Z5AmkS",
    "key_type": "posting"
  }
}
```

string

```
#Hello World
```

### Sign Message[​](#sign-message "Direct link to Sign Message")

* Request
* Result

```
{
  "method": "aioha_api.sign_message",
  "params": {
    "message": "Hello World",
    "key_type": "posting"
  }
}
```

object

```
{
  "signature": "2020647841097bca7d9e84c39df209ac2df9b42c5b194ee2a690304ce8c140690f5296566b5da0ae9d9950243871bf17fa26b34b671dc8284bf7fba767958a5508",
  "public_key": "STM5jruaymFQ93jwUp15r9SF5wPeaNvRKFE4nbbJv4vfHCk5a6zRu"
}
```

### Sign Transaction[​](#sign-transaction "Direct link to Sign Transaction")

* Request
* Result

```
{
  "method": "aioha_api.sign_tx",
  "params": {
    "tx": {
      "ref_block_num": 27912,
      "ref_block_prefix": 1175138206,
      "expiration": "2024-06-07T10:23:57",
      "operations": [
        [
          "transfer",
          {
            "from": "randomvlogs",
            "to": "randomvlogs",
            "amount": "0.001 HIVE",
            "memo": "Aioha Test"
          }
        ]
      ],
      "extensions": []
    },
    "key_type": "posting"
  }
}
```

object

```
{
  "ref_block_num": 27912,
  "ref_block_prefix": 1175138206,
  "expiration": "2024-06-07T10:23:57",
  "operations": [
    [
      "transfer",
      {
        "from": "randomvlogs",
        "to": "randomvlogs",
        "amount": "0.001 HIVE",
        "memo": "Aioha Test"
      }
    ]
  ],
  "extensions": [],
  "signatures": [
    "20469faba4c128ef41c4e444ef5422e88ed9397d43a7c9713a8e59c170de45eea539b63ced8f4ff048442bdcca3b96848f6f740e655c971f9cae00b54535c8eea0"
  ]
}
```

### Sign and Broadcast Transaction[​](#sign-and-broadcast-transaction "Direct link to Sign and Broadcast Transaction")

* Request
* Result

```
{
  "method": "aioha_api.sign_and_broadcast_tx",
  "params": {
    "ops": [
      ["vote", {
        "author": "sagarkothari88",
        "permlink": "2024-06-05-daily-updates-from-sagarkothari88",
        "voter": "techcoderx",
        "weight": 10000
      }]
    ],
    "key_type": "posting"
  }
}
```

string

```
87c10767531071732fe15e6c34cf275900c342a3
```

### Get Registered Providers[​](#get-registered-providers "Direct link to Get Registered Providers")

* Request
* Result

```
{
  "method": "aioha_api.get_registered_providers",
  "params": {}
}
```

array

```
["keychain", "peakvault", "ledger", "hiveauth", "hivesigner"]
```

### Get Current Provider[​](#get-current-provider "Direct link to Get Current Provider")

* Request
* Result

```
{
  "method": "aioha_api.get_current_provider",
  "params": {}
}
```

string

```
hiveauth
```

### Get Current User[​](#get-current-user "Direct link to Get Current User")

* Request
* Result

```
{
  "method": "aioha_api.get_current_user",
  "params": {}
}
```

string

```
aioha
```

### Is Logged In[​](#is-logged-in "Direct link to Is Logged In")

* Request
* Result

```
{
  "method": "aioha_api.is_logged_in",
  "params": {}
}
```

boolean

```
true
```

### Is Provider Registered[​](#is-provider-registered "Direct link to Is Provider Registered")

* Request
* Result

```
{
  "method": "aioha_api.is_provider_registered",
  "params": {
    "enabled": true
  }
}
```

boolean

```
true
```

## Events[​](#events "Direct link to Events")

Aioha provides several methods for listening to events:

* `aioha.on(eventName, callback)`: Register a callback to listen for an event. The callback will be called every time the event occurs until explicitly unregistered.
* `aioha.once(eventName, callback)`: Register a callback to listen for an event only once. The callback will be automatically unregistered after being called.
* `aioha.off(eventName, callback)`: Unregister a specific callback for an event. If no callback is provided, all callbacks for the event will be unregistered.

### Connected[​](#connected "Direct link to Connected")

The `connect` event is emitted every time an account has been successfully authenticated, resulting in a transition from a **disconnected** state to a **connected** state.

```
aioha.on('connect', () => void)
```

### Disconnected[​](#disconnected "Direct link to Disconnected")

The `disconnect` event is emitted every time an account was logged out and no accounts remain active.

```
aioha.on('disconnect', () => void)
```

### Account Changed[​](#account-changed "Direct link to Account Changed")

The `account_changed` event is emitted every time the current logged in accounts changes, under the following circumstances:

1. Another account has been added on top of the existing connected account
2. The connected account has been changed from one previously authenticated account to another
3. An account has been disconnected while leaving another account remain connected.
4. A connected but inactive account has been removed.

```
aioha.on('account_changed', () => void)
```

### Login Request[​](#login-request "Direct link to Login Request")

The `login_request` event is emitted every time a login request has been made to the user's wallet (excluding HiveAuth, see [below](#hiveauth-login-request)).

```
aioha.on('login_request', () => void)
```

### Memo Request[​](#memo-request "Direct link to Memo Request")

The `memo_request` event is emitted every time a memo encryption or decryption request has been made to the user's wallet.

```
aioha.on('memo_request', () => void)
```

### Message Signature Request[​](#message-signature-request "Direct link to Message Signature Request")

The `sign_msg_request` event is emitted every time a message signature request has been made to the user's wallet.

```
aioha.on('sign_msg_request', () => void)
```

### Transaction Signature Request[​](#transaction-signature-request "Direct link to Transaction Signature Request")

The `sign_tx_request` event is emitted every time a transaction signature request has been made to the user's wallet.

```
aioha.on('sign_tx_request', () => void)
```

### HiveAuth Login Request[​](#hiveauth-login-request "Direct link to HiveAuth Login Request")

The `hiveauth_login_request` event is emitted every time a new HiveAuth login request is created. This event contains the payload needed to display a QR code to be scanned using a HiveAuth compatible PKSA. Login request may be cancelled before timeout by calling `cancel()`.

```
aioha.on('hiveauth_login_request', (payload: string, evt: MessageType, cancel: () => void) => void)
```

### HiveAuth Challenge Request[​](#hiveauth-challenge-request "Direct link to HiveAuth Challenge Request")

The `hiveauth_challenge_request` event is emitted every time a new HiveAuth message signature request is created. Challenge request may be cancelled before timeout by calling `cancel()`.

```
aioha.on('hiveauth_challenge_request', (payload: string, evt: MessageType, cancel: () => void) => void)
```

### HiveAuth Sign Transaction Request[​](#hiveauth-sign-transaction-request "Direct link to HiveAuth Sign Transaction Request")

The `hiveauth_sign_request` event is emitted every time a new HiveAuth transaction signature request is created. Signature request may be cancelled before timeout by calling `cancel()`.

```
aioha.on('hiveauth_sign_request', (payload: string, evt: MessageType, cancel: () => void) => void)
```
