# Introduction

Aioha (All-In-One Hive Authentication) is an API that provides a common interface for working with different Hive login providers. This allows easier integration of [Hive](https://hive.io) login and transacting on the network with fewer code.

Aioha is designed for use in browser contexts and can be used through a variety of different ways:

1. [**Core API**](/docs/category/core-api.md)

This is the base library containing the inner workings of Aioha. It provides the APIs needed to interact with different Hive login providers, all within one or two lines of code. Recommended when flexibility is important.

2. [**Framework Libraries**](#supported-frameworks)

These are libraries that provide framework-specific conveniences for integrating Aioha. Optionally includes all the UI logic required for an Aioha-powered Hive login modal. Best for most developers.

3. [**Wax Signer**](/docs/core/wax.md)

Aioha can be used as a transaction signer for applications powered by [Wax Typescript](https://gitlab.syncad.com/hive/wax/-/tree/develop/ts?ref_type=heads).

## Supported Providers[​](#supported-providers "Direct link to Supported Providers")

* [Keychain](https://hive-keychain.com)
* [HiveAuth](https://hiveauth.com)
* [HiveSigner](https://hivesigner.com)
* [Ledger](https://hiveledger.io)
* [Peak Vault](https://vault.peakd.com)
* [MetaMask Snap](https://snaps.metamask.io/snap/npm/hiveio/metamask-snap)

## Supported Frameworks[​](#supported-frameworks "Direct link to Supported Frameworks")

* Universal Web Components ([Ready Made UI](/docs/ui/web-components.md))
* Lit ([Provider](/docs/framework/lit.md), [Ready Made UI](/docs/ui/lit.md))
* React ([Provider](/docs/framework/react.md), [Ready Made UI](/docs/react/ui.md))
* Vue ([Provider](/docs/framework/vue.md))
* Svelte ([Provider](/docs/framework/svelte.md))

## Feature Matrix[​](#feature-matrix "Direct link to Feature Matrix")

| Feature                     | Peak Vault | Keychain | HiveAuth | HiveSigner | Ledger | MetaMask |
| --------------------------- | ---------- | -------- | -------- | ---------- | ------ | -------- |
| Login                       | ✅         | ✅       | ✅       | ✅1        | ✅     | ✅7      |
| Discover accounts           | ❌         | ❌       | ❌       | ❌         | ✅     | ✅       |
| Memo encryption             | ✅         | ✅       | ❌4      | ❌         | ❌     | ✅       |
| Memo decryption             | ✅         | ✅       | ❌5      | ✅2        | ❌     | ✅       |
| Sign message                | ✅         | ✅       | ✅       | ❌         | ✅     | ❌       |
| Sign tx (without broadcast) | ✅         | ✅       | ❌3      | ❌         | ✅     | ✅       |
| Sign tx (with broadcast)    | ✅         | ✅       | ✅       | ✅         | ✅     | ✅       |
| Sign HF26 serialized tx     | ❌         | ❌       | ❌       | ❌         | ❌6    | ✅       |
| Transact using owner auth   | ❌         | ❌       | ❌       | ✅         | ✅     | ✅       |

1 A HiveSigner access token will be returned instead of an ECDSA signature.<br />2 Memo must be encrypted using `@hivesigner`'s public posting key.<br />3 While technically supported by the provider, the PKSA generates the transaction headers instead of using supplied values. This is unhelpful for signing multisig transactions.<br />4 Developer claims to be possible however this is not documented anywhere therefore not implemented in Aioha.<br />5 Only available in protocol 1.0 that doesn't seem to be deployed therefore not implemented in Aioha.<br />6 Possible with blind signing, however this is not implemented in Aioha.<br />7 No signatures will be created, an empty result will be returned.

## Local Storage Reserved Keys[​](#local-storage-reserved-keys "Direct link to Local Storage Reserved Keys")

Aioha uses certain keys in browser `localStorage` to store persistent logins, and in the case of HiveSigner provider, pass info from callback URL.

warning

Do **not** modify any values for the local storage keys below outside Aioha core and HiveSigner callback page.

The following keys are reserved:

* General: `aiohaUsername`, `aiohaProvider`, `aiohaPubKey`, `aiohaOtherLogins`
* HiveAuth: `hiveauthToken`, `hiveauthKey`, `hiveauthExp`
* HiveSigner: `hivesignerTxId`, `hivesignerToken`, `hivesignerExpiry`, `hivesignerUsername`
* Ledger: `ledgerPath`
* MetaMask: `mmHiveSnapAccIdx`
