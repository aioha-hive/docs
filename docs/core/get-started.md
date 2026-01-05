# Get Started

Aioha core may be installed through npm or imported through CDN using ES6 module import syntax.

## NPM Installation[​](#npm-installation "Direct link to NPM Installation")

* npm
* yarn
* pnpm

```
npm i @aioha/aioha
```

```
yarn add @aioha/aioha
```

```
pnpm i @aioha/aioha
```

## CDN Import[​](#cdn-import "Direct link to CDN Import")

index.html

```
<script type="module">
  import { initAioha } from 'https://unpkg.com/@aioha/aioha@latest/dist/bundle.js'
</script>
```

## Usage Example[​](#usage-example "Direct link to Usage Example")

Instantiating Aioha, logging in and transacting on Hive can be done with just one or two lines of code for each task. Most configuration are provider-specific.

```
import { initAioha, Asset, KeyTypes, Providers } from '@aioha/aioha'

// Instantiation
const aioha = initAioha({
  hiveauth: {
    name: 'Aioha',
    description: 'Aioha test app'
  },
  hivesigner: {
    app: 'ipfsuploader.app',
    callbackURL: window.location.origin + '/hivesigner.html',
    scope: ['login', 'vote']
  }
})

// Get registered providers
console.log(aioha.getProviders())

// Get current logged in user and provider name
if (aioha.isLoggedIn()) {
  console.log(aioha.getCurrentUser(), aioha.getCurrentProvider())
}

// Login with provider
const login = await aioha.login(Providers.Keychain, 'hiveusername', {
  msg: 'Hello World',
  keyType: KeyTypes.Posting
})

// Transfer 1 HIVE using logged in provider
const xfer = await aioha.transfer('recipient', 1, Asset.HIVE, 'Transferred using Aioha with memo')

// Vote comment with 100% weight
const vote = await aioha.vote('author', 'permlink', 10000)

// Claim rewards
const rewardClaim = await aioha.claimRewards()
```

## HiveSigner Callback Page[​](#hivesigner-callback-page "Direct link to HiveSigner Callback Page")

HiveSigner provider requires a callback page that stores the login and transaction results into `localStorage` which is then used as callback data for the application. The function is included in [`src/lib/hivesigner-cb.ts`](https://github.com/aioha-hive/aioha/blob/main/src/lib/hivesigner-cb.ts) file in Aioha core and may be used as such:

* CDN
* NPM Module

```
<script type="module">
  import { hivesignerCb } from 'https://unpkg.com/@aioha/aioha@latest/dist/hivesigner-cb.js'
  hivesignerCb()
</script>
```

```
import { hivesignerCb } from '@aioha/aioha/build/lib/hivesigner-cb'

hivesignerCb()
```

## Polyfills[​](#polyfills "Direct link to Polyfills")

When using Aioha with bundlers such as Webpack or Vite, you may need to add some polyfills for it to work correctly.

* Webpack
* Vite

webpack.config.cjs

```
const { DefinePlugin, ProvidePlugin } = require('webpack')

module.exports = {
  // ...
  resolve: {
    // ...
    fallback: {
      url: false,
      buffer: require.resolve('buffer/')
    }
  },
  plugins: [
    // ...
    new DefinePlugin({
      'process.env.NODE_DEBUG': false
    }),
    new ProvidePlugin({
      Buffer: ['buffer', 'Buffer']
    })
  ]
}
```

vite.config.ts

```
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  // ...
  define: {
    'process.env.NODE_DEBUG': false
  },
  plugins: [
    // ...
    nodePolyfills({
      globals: {
        Buffer: true
      }
    })
  ]
})
```

## Chunking[​](#chunking "Direct link to Chunking")

To keep the main bundle as lightweight as possible, enable chunking (or code splitting) in your bundler if not already by default.

* Webpack

webpack.config.cjs

```
module.exports = {
  // ...
  optimization: {
    splitChunks: {
      name: (module, chunks, cacheGroupKey) => {
        const allChunksNames = chunks.map((chunk) => chunk.name).join('-')
        return allChunksNames
      }
    }
  }
}
```
