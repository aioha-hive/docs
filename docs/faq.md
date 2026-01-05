# FAQ

## 1. Why is plaintext private key login not supported?[​](#1-why-is-plaintext-private-key-login-not-supported "Direct link to 1. Why is plaintext private key login not supported?")

Plaintext private keys are (and should be) a thing of the past, the closest provider would be HiveSigner. Even in web2 passkeys have replaced passwords.

With that said there is a [PlaintextKeyProvider](https://github.com/aioha-hive/aioha/blob/main/src/providers/custom/plaintext.ts) ([usage](/docs/core/custom-provider.md)) but it should only be used for backends.
