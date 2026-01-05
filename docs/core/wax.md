# Wax Signer

Aioha may be used to sign transactions on [Wax Typescript](https://gitlab.syncad.com/hive/wax/-/tree/develop/ts?ref_type=heads) library.

note

***Wax*** here refers to the feature-rich multi-language [library](https://gitlab.syncad.com/hive/wax) for [Hive](https://hive.io). Not to be confused with the competing L1 blockchain forked from EOS.

## Usage[​](#usage "Direct link to Usage")

```
import { createHiveChain } from '@hiveio/wax'
import { initAioha, KeyTypes, WaxAiohaSigner } from '@aioha/aioha'

const aioha = initAioha()
const chain = await createHiveChain()
const tx = await chain.createTransaction()
const provider = WaxAiohaSigner.for(aioha, 'active')

// push some operations here...

await provider.signTransaction(tx)
await chain.broadcast(tx)
```

## Caveats[​](#caveats "Direct link to Caveats")

Currently most providers produce signatures using the legacy serialization method, while Wax prefers the newer method supported as of HF26 which saves 4 bytes per asset/NAI value in the transaction.

In addition, Aioha primarily uses the legacy transaction JSON format (array tuple of `["operation_name", {...body}]`) while Wax primarily uses the newer JSON format of `{"type": "operation_name", value: {...body}}`.
