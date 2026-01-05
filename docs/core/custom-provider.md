# Custom Provider

Besides the [built-in providers](/docs.md#supported-providers), a custom defined provider that extends [`AiohaBaseProvider` class](https://github.com/aioha-hive/aioha/blob/main/src/providers/provider.ts) may be registered as `Providers.Custom` provider. This may be useful for backend use or development of another browser provider.

## Usage[​](#usage "Direct link to Usage")

The below demonstrates the registration of plaintext private key provider for use in Aioha. This is a common example of backend usage of Aioha.

```
import { Aioha, Providers } from '@aioha/aioha'
import { PlaintextKeyProvider } from '@aioha/aioha/build/providers/custom/plaintext.js'

const aioha = new Aioha()
aioha.registerCustomProvider(new PlaintextKeyProvider('5somethingsomething'))

// Login as usual
const login = await aioha.login(Providers.Custom, 'your-username', { msg: 'Hello World' })

// Claim rewards
const claim = await aioha.claimRewards()
console.log(claim)
```
