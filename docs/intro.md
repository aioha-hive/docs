---
sidebar_position: 1
---

# Introduction

Aioha (All-In-One Hive Authentication) is an API that provides a common interface for working with different Hive login providers. This allows easier integration of [Hive](https://hive.io) login and transacting on the network with fewer code.

Aioha can be used through two different ways:

1. **Core API**

This is the base library containing the inner workings of Aioha. It provides the programmatic APIs needed to interact with Hive login providers without much work on provider-specific code, all within one or two lines of code. Recommended when login UI customizability is important to the application.

2. **Ready Made Login UI**

These are ready to use framework-specific libraries that implements all the UI logic required for an Aioha-powered Hive login modal. It includes and uses the Aioha core API (described above) under the hood. Best for most developers so they have more time to focus on the main functionality of the application.

## Supported Providers

* [Keychain](https://hive-keychain.com)
* [HiveAuth](https://hiveauth.com)
* [HiveSigner](https://hivesigner.com)
* [Ledger](https://hiveledger.io)