# Overview

Magi JS is JavaScript/TypeScript library for interacting with the [Magi network](https://magi.eco) with wallet interoperability features.

## Supported Wallet Types

* Hive (through [Aioha](/docs.md))
* Ethereum (through [Viem](https://viem.sh))
* Bitcoin (any wallet exposing `signMessage`, e.g. [Leather](https://leather.io), [Xverse](https://www.xverse.app), [UniSat](https://unisat.io))
* View-only (read account state without any signer; signing operations return an error)

## Installation

**npm:**

```sh
npm i @aioha/magi @aioha/aioha viem
```

**yarn:**

```sh
yarn add @aioha/magi @aioha/aioha viem
```

**pnpm:**

```sh
pnpm i @aioha/magi @aioha/aioha viem
```

## Usage Example

```js
import { Magi, Wallet, Asset } from '@aioha/magi'
import { createWalletClient, http } from 'viem'
import { initAioha } from '@aioha/aioha'

const magi = new Magi()

// Set options
magi.setApi('https://magi-test.techcoderx.com/api/v1/graphql', [])
magi.setNetId('vsc-testnet')

// Ethereum wallet
const viemClient = createWalletClient({
  account: '0x2540009A1027e5c6aa0274db4fEF2622aC2B200C',
  transport: http('http://127.0.0.1:1248')
})
magi.setViem(viemClient)

// Bitcoin wallet
magi.setBitcoin({
  address: 'bc1qYourAddress',
  signMessage: (msg) => myBtcWallet.signMessage(msg)
})

// Hive wallet
const aioha = initAioha()
magi.setAioha(aioha)

// Set wallet type to use
magi.setWallet(Wallet.Ethereum)

// Transfer 1 HBD
const xfer = await magi.transfer('did:pkh:eip155:1:0xrecipient', 1, Asset.hbd, '')

// Call contract
const dumpEnv = await magi.call('vsc1contractid', 'method', 'payload', 200, [])

// Sign and broadcast multi-op transaction
const call = await magi.signAndBroadcastTx([
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
])
```
