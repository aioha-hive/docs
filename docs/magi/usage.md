# Usage

Configure and interact with Magi in 5 minutes or less.

## Instantiation[​](#instantiation "Direct link to Instantiation")

Create an instance of Magi. Returns a `Magi` object.

```
import { Magi } from '@aioha/magi'

const magi = new Magi()
```

## Enums[​](#enums "Direct link to Enums")

* Wallet
* Asset
* KeyTypes

The `Wallet` enum exported are as follows:

```
export enum Wallet {
  Hive = 'hive',
  Ethereum = 'evm',
  Bitcoin = 'btc',
  ViewOnly = 'viewonly'
}
```

The `Asset` enum exported are as follows:

```
export enum Asset {
  hive = 'hive',
  hbd = 'hbd',
  shbd = 'hbd_savings'
}
```

The `KeyTypes` enum exported are as follows:

```
export enum KeyTypes {
  Posting = 'posting',
  Active = 'active'
}
```

note

`KeyTypes` is only applicable for Hive wallets. Ethereum and Bitcoin wallets always sign with the account's key.

## Register Wallets[​](#register-wallets "Direct link to Register Wallets")

### Hive Wallet[​](#hive-wallet "Direct link to Hive Wallet")

Register a Hive wallet using an [Aioha](https://aioha.dev) instance.

```
import { initAioha } from '@aioha/aioha'

const aioha = initAioha()
magi.setAioha(aioha)
```

### Ethereum Wallet[​](#ethereum-wallet "Direct link to Ethereum Wallet")

Register an Ethereum wallet using a [Viem](https://viem.sh) wallet client.

```
import { createWalletClient, http } from 'viem'

const viemClient = createWalletClient({
  account: '0xYourAddress',
  transport: http('https://your-rpc-url')
})
magi.setViem(viemClient)
```

### Bitcoin Wallet[​](#bitcoin-wallet "Direct link to Bitcoin Wallet")

Register a Bitcoin wallet by providing a `BtcClient` object. This is a minimal interface that any Bitcoin wallet can implement.

```
import { BtcClient } from '@aioha/magi'
```

The `BtcClient` interface:

```
interface BtcClient {
  address: string
  signMessage(message: string): Promise<string>
}
```

* `address` — Bitcoin address (P2PKH `1...`, P2SH-P2WPKH `3...`, or P2WPKH `bc1q...`)
* `signMessage` — Signs a message string and returns a base64-encoded signature (BIP-137 or BIP-322)

note

Taproot (`bc1p...`) addresses are not currently supported.

```
magi.setBitcoin({
  address: 'bc1qYourAddress',
  signMessage: (msg) => myBtcWallet.signMessage(msg)
})
```

Example: Reown AppKit

If you use [Reown AppKit](https://reown.com/appkit) with the [Bitcoin adapter](https://docs.reown.com/appkit/bitcoin/core/installation), you can create a `BtcClient` from the AppKit modal:

```
import { createAppKit } from '@reown/appkit'
import { BitcoinAdapter } from '@reown/appkit-adapter-bitcoin'

const bitcoinAdapter = new BitcoinAdapter({ projectId })
const modal = createAppKit({
  adapters: [bitcoinAdapter],
  // ...
})

// After wallet connection:
const provider = modal.getProvider('bip122')
magi.setBitcoin({
  address: modal.getAddress(),
  signMessage: (msg) => provider.signMessage({
    message: msg,
    address: modal.getAddress(),
    protocol: 'ECDSA'
  })
})
```

Example: UniSat

```
const unisat = window.unisat
const accounts = await unisat.requestAccounts()

magi.setBitcoin({
  address: accounts[0],
  signMessage: (msg) => unisat.signMessage(msg)
})
```

### View-only Wallet[​](#view-only-wallet "Direct link to View-only Wallet")

Register a view-only wallet by passing a prefixed DID. This lets you display an account's state without ever holding a signer — useful for dashboards, block explorers, or preview UIs.

```
// Hive account
magi.setViewOnly('hive:alice')

// Ethereum account
magi.setViewOnly('did:pkh:eip155:1:0xYourAddress')

// Bitcoin account
magi.setViewOnly('did:pkh:bip122:000000000019d6689c085ae165831e93:bc1qYourAddress')
```

The prefix determines the chain:

| Prefix                                             | Chain    |
| -------------------------------------------------- | -------- |
| `hive:`                                            | Hive     |
| `did:pkh:eip155:1:`                                | Ethereum |
| `did:pkh:bip122:000000000019d6689c085ae165831e93:` | Bitcoin  |

Any other input throws an `Error`.

note

All signing and broadcast operations on a view-only wallet return an `OperationError` with code `4200` and the message `Cannot sign or transact in view only mode`. `getUser()`, `isConnected()`, and `getWallet()` work as usual.

## Set Active Wallet[​](#set-active-wallet "Direct link to Set Active Wallet")

Set the wallet type to use for transactions. This must be called before performing any operations.

```
import { Wallet } from '@aioha/magi'

magi.setWallet(Wallet.Ethereum)
// or
magi.setWallet(Wallet.Hive)
// or
magi.setWallet(Wallet.Bitcoin)
// or
magi.setWallet(Wallet.ViewOnly)
```

## Setters[​](#setters "Direct link to Setters")

### Set Magi API[​](#set-magi-api "Direct link to Set Magi API")

Set the Magi GraphQL API URL. An optional array of fallback API URLs may be provided.

```
magi.setApi('https://vsc.techcoderx.com/api/v1/graphql', [
  'https://api.vsc.eco/api/v1/graphql',
  'https://vsc.atexoras.com:2087/api/v1/graphql'
])
```

The URL must start with `http://` or `https://`. The default API is `https://vsc.techcoderx.com/api/v1/graphql` with built-in fallback nodes.

### Set Network ID[​](#set-network-id "Direct link to Set Network ID")

Set the Magi network ID. Defaults to `vsc-mainnet`.

```
magi.setNetId('vsc-mainnet')

// For testnet
magi.setNetId('vsc-testnet')
```

## Getters[​](#getters "Direct link to Getters")

### Get API[​](#get-api "Direct link to Get API")

Returns an array of API endpoints, where the first item is the main endpoint and the remaining are fallbacks.

```
magi.getApi() // ['https://vsc.techcoderx.com/api/v1/graphql', ...]
```

### Get Network ID[​](#get-network-id "Direct link to Get Network ID")

Returns the current Magi network ID.

```
magi.getNetId() // 'vsc-mainnet'
```

### Get Connected User[​](#get-connected-user "Direct link to Get Connected User")

Returns the connected user address, or `undefined` if not connected.

```
// Without prefix
magi.getUser() // 'alice', '0xYourAddress', or 'bc1q...'

// With prefix
magi.getUser(true)
// 'hive:alice'
// 'did:pkh:eip155:1:0xYourAddress'
// 'did:pkh:bip122:000000000019d6689c085ae165831e93:bc1q...'
```

### Get Active Wallet[​](#get-active-wallet "Direct link to Get Active Wallet")

Returns the `Wallet` enum of the wallet type currently in use, or `undefined` if not set.

```
magi.getWallet() // Wallet.Hive, Wallet.Ethereum, Wallet.Bitcoin, or Wallet.ViewOnly
```

### Is Connected[​](#is-connected "Direct link to Is Connected")

Returns a boolean of whether a wallet is connected.

```
magi.isConnected() // true or false
```

## Sign and Broadcast Transaction[​](#sign-and-broadcast-transaction "Direct link to Sign and Broadcast Transaction")

Sign and broadcast a Magi transaction consisting of one or more operations.

* Usage
* Result

```
const result = await magi.signAndBroadcastTx([
  {
    type: 'call',
    payload: {
      contract_id: 'vsc1BX9RbKJYAqSSZZzrGeBWyBZkG3ojTVPRoo',
      action: 'dumpEnv',
      payload: '',
      rc_limit: 300,
      intents: []
    }
  }
], KeyTypes.Active)
```

* `tx`: Array of `MagiOperation` objects
* `keyType` *(optional)*: `KeyTypes.Active` or `KeyTypes.Posting` — only applicable for Hive wallets, defaults to `KeyTypes.Active`

```
{
  "success": true,
  "result": "bafyreib5af..."
}
```

* `success`: Boolean of whether the transaction was signed and broadcasted successfully
* `error`: Error message, if any
* `result`: Transaction CID

## Operations[​](#operations "Direct link to Operations")

The return value for these method calls will be equivalent to sign and broadcast transaction result [above](#sign-and-broadcast-transaction).

### Call Contract[​](#call-contract "Direct link to Call Contract")

Call a Magi smart contract.

```
// Call testLog at contract vsc1Bp8y... with 100 RC limit, no intents
const result = await magi.call('vsc1Bp8ykBKDT74vYrZShhfEhp8Mn8bG2ChiAf', 'testLog', { foo: 'bar' }, 100, [])

// With posting key (Hive wallets only)
const result = await magi.call('vsc1Bp8ykBKDT74vYrZShhfEhp8Mn8bG2ChiAf', 'testLog', { foo: 'bar' }, 100, [], KeyTypes.Posting)
```

* `contractId`: The contract ID
* `action`: The contract action/method to call
* `payload`: The payload to pass to the contract action
* `rc_limit`: The maximum RC (resource credits) to spend on this call
* `intents`: Array of transaction intents
* `keyType` *(optional)*: Key type for Hive wallets

### Transfer[​](#transfer "Direct link to Transfer")

Transfer tokens to another Magi account.

```
// Transfer 1 HIVE to a Hive account
const xfer = await magi.transfer('hive:bob', 1, Asset.hive)

// Transfer 1 HBD to an Ethereum address with memo
const xferWithMemo = await magi.transfer('did:pkh:eip155:1:0xRecipient', 1, Asset.hbd, 'Optional memo')
```

* `to`: Recipient address (prefixed with `hive:`, `did:pkh:eip155:1:`, or `did:pkh:bip122:...:`)
* `amount`: Amount to transfer (must be greater than 0)
* `currency`: `Asset.hive` or `Asset.hbd`
* `memo` *(optional)*: Transfer memo

### Unmap[​](#unmap "Direct link to Unmap")

Unmap tokens from Magi.

```
// Unmap 1 HIVE
const wd = await magi.unmap('hive:charlie', 1, Asset.hive)

// Unmap 50 HBD with memo
const wdWithMemo = await magi.unmap('hive:charlie', 50, Asset.hbd, 'Optional memo')
```

* `to`: Destination address on L1 (prefixed with `hive:`, `did:pkh:eip155:1:`, or `did:pkh:bip122:...:`)
* `amount`: Amount to withdraw (must be greater than 0)
* `currency`: `Asset.hive` or `Asset.hbd`
* `memo` *(optional)*: Withdrawal memo

### Stake[​](#stake "Direct link to Stake")

Stake tokens on Magi.

```
import { VscStakeType } from '@aioha/aioha'

// Stake 2,000 HIVE for consensus (to self)
const consensusStake = await magi.stake(VscStakeType.Consensus, 2000)

// Stake 2,000 HIVE for consensus to another account
const consensusStakeOther = await magi.stake(VscStakeType.Consensus, 2000, 'hive:anotheraccount')

// Stake 100 HBD
const hbdStake = await magi.stake(VscStakeType.HBD, 100)
```

* `stakeType`: `VscStakeType.Consensus` for HIVE consensus staking, `VscStakeType.HBD` for HBD staking
* `amount`: Amount to stake (must be greater than 0)
* `to` *(optional)*: Recipient address — defaults to the connected account
* `memo` *(optional)*: Stake memo

### Unstake[​](#unstake "Direct link to Unstake")

Unstake tokens on Magi.

```
import { VscStakeType } from '@aioha/aioha'

// Unstake 2,000 HIVE from consensus
const consensusUnstake = await magi.unstake(VscStakeType.Consensus, 2000)

// Unstake 100 HBD
const hbdUnstake = await magi.unstake(VscStakeType.HBD, 100)
```

* `stakeType`: `VscStakeType.Consensus` for HIVE consensus unstaking, `VscStakeType.HBD` for HBD unstaking
* `amount`: Amount to unstake (must be greater than 0)
* `to` *(optional)*: Recipient address — defaults to the connected account
* `memo` *(optional)*: Unstake memo

## Events[​](#events "Direct link to Events")

Subscribe to Magi events using the `on`, `once`, and `off` methods.

### Subscribe[​](#subscribe "Direct link to Subscribe")

```
magi.on('wallet_changed', () => {
  console.log('Wallet type changed to:', magi.getWallet())
})

magi.on('sign_tx_request', () => {
  console.log('Transaction signature requested')
})
```

### Subscribe Once[​](#subscribe-once "Direct link to Subscribe Once")

The listener will be called only on the next emission of the event.

```
magi.once('sign_tx_request', () => {
  console.log('This fires only once')
})
```

### Unsubscribe[​](#unsubscribe "Direct link to Unsubscribe")

```
const handler = () => console.log('wallet changed')
magi.on('wallet_changed', handler)

// Unsubscribe specific listener
magi.off('wallet_changed', handler)

// Unsubscribe all listeners for the event
magi.off('wallet_changed')
```

### Event Reference[​](#event-reference "Direct link to Event Reference")

| Event             | Description                                                                                                                                            |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `wallet_changed`  | Emitted when the active wallet type is changed via `setWallet()`, or when `setViewOnly()` updates the DID while `Wallet.ViewOnly` is the active wallet |
| `sign_tx_request` | Emitted when a transaction signature is requested from the wallet                                                                                      |
