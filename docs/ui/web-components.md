# Web Components

The ready made modal UI is available as a framework agnostic web component that can be integrated on vanilla HTML/JS or any web framework.

## Installation[​](#installation "Direct link to Installation")

```
pnpm i @aioha/lit-ui @aioha/aioha
```

## CDN Import[​](#cdn-import "Direct link to CDN Import")

index.html

```
<script type="importmap">
  {
    "imports": {
      "@aioha/aioha": "https://unpkg.com/@aioha/aioha@latest/dist/bundle.js",
      "@aioha/lit-ui": "https://unpkg.com/@aioha/lit-ui@latest/dist/bundle.min.js"
    }
  }
</script>
```

## Usage[​](#usage "Direct link to Usage")

index.html

```
<html>
  <body>
    <button id="connectButton" type="button">Connect Wallet</button>
    <div id="loginModal"></div>
  <body>
  <script type="module">
    import { initAioha, KeyTypes } from '@aioha/aioha'
    import { initModal } from '@aioha/lit-ui'

    // Initialize Aioha
    const aioha = initAioha()

    // Initialize modal UI in a div
    const modal = initModal(aioha, document.getElementById('loginModal'), {
      loginOptions: {
        // see available config here: https://aioha.dev/docs/core/usage#login
      }
    })

    // Show modal on button click
    document.getElementById('connectButton').addEventListener('click', () => (modal.displayed = true))
  </script>
</html>
```

Full example usage may be found [here](https://github.com/aioha-hive/lit-ui/blob/main/examples/index.html).

### `initModal` options[​](#initmodal-options "Direct link to initmodal-options")

| Property             | Description                                                                                                                                                                      | Default                    |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `displayed`          | Boolean of whether the modal is displayed.                                                                                                                                       | *false*                    |
| `lightMode`          | Display the modal in light mode.                                                                                                                                                 | *false*                    |
| `loginTitle`         | Login title to be displayed.                                                                                                                                                     | Connect Wallet             |
| `loginHelpUrl`       | Help URL to be linked under provider selection view, if any.                                                                                                                     | *undefined*                |
| `loginOptions`       | Aioha login options. See available configuration [here](/docs/core/usage.md#login).                                                                                              |                            |
| `discOptions`        | Account discovery options for supported providers. Details [here](/docs/core/usage.md#discover-accounts).                                                                        |                            |
| `arrangement`        | Display view preference of provider selection. Valid values: `list` and `grid`.                                                                                                  | list                       |
| `onLogin`            | Callback function to be called upon successful login, if any. Parameter contains login result as defined [here](/docs/core/usage.md#login).                                      |                            |
| `onClose`            | Function to be called to close the modal.                                                                                                                                        |                            |
| `imageServer`        | Image server URL for user avatar.                                                                                                                                                | <https://images.hive.blog> |
| `explorerUrl`        | Hive block explorer URL.                                                                                                                                                         | <https://hivehub.dev>      |
| `forceShowProviders` | List of `Providers` to force show as login option, which must be registered already. Clicking on unavailable providers displayed will open the URL of the provider landing page. | *\[]*                      |

note

`hiveauth.cbWait` in `loginOptions` will be overriden as `AiohaModal` will handle the presentation of HiveAuth QR codes.

info

When `displayed` is specified to a reactive state, use the `onClose` method to set that reactive state to `false` to properly close the modal.

All properties are optional except `loginOptions`.

## HiveSigner Callback[​](#hivesigner-callback "Direct link to HiveSigner Callback")

The HiveSigner callback component has been provided that you can use in a page, as such:

```
<hivesigner-cb></hivesigner-cb>
```

See full example [here](https://github.com/aioha-hive/lit-ui/blob/main/examples/hivesigner.html).
