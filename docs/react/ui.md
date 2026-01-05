# React UI

Opinionated React modal UI for Hive logins through Aioha, styled using [Tailwind CSS](https://tailwindcss.com). This provides a quick and easy way to bootstrap a React web app with ready to use Aioha-powered modal component.

## Installation[​](#installation "Direct link to Installation")

```
pnpm i @aioha/react-ui @aioha/aioha
```

## Usage[​](#usage "Direct link to Usage")

1. Initialize Aioha and setup the provider at the root of your application. This may be in index.jsx, index.tsx or App.tsx depending on the framework you use.

info

If you are using a framework that uses SSR (i.e. Next.js), you may need to setup Aioha separately in `useEffect()` as outlined [here](/docs/framework/react.md#ssr-apps).

src/App.tsx

```
import { initAioha } from '@aioha/aioha'
import { AiohaProvider } from '@aioha/react-ui'

// See options: https://aioha.dev/docs/core/usage#instantiation
const aioha = initAioha()

const App = () => {
  return (
    <AiohaProvider aioha={aioha}>
      <TheRestOfYourApplication />
    </AiohaProvider>
  )
}
```

2. Use the modal component and the [`useAioha()` hook](/docs/framework/react.md#usage) anywhere within `AiohaProvider`.

src/components/AiohaPage.tsx

```
import { useState } from 'react'
import { useAioha, AiohaModal } from '@aioha/react-ui'
import { KeyTypes } from '@aioha/aioha'
import { Button, useColorMode } from '@chakra-ui/react'

export const AiohaPage = () => {
  const { colorMode } = useColorMode()
  const [modalDisplayed, setModalDisplayed] = useState(false)
  const { user } = useAioha()
  return (
    <>
      <Button onClick={() => setModalDisplayed(true)}>
        {user ?? 'Connect Wallet'}
      </Button>
      <div className={colorMode}>
        <AiohaModal
          displayed={modalDisplayed}
          loginOptions={{
            msg: 'Login',
            keyType: KeyTypes.Posting
          }}
          onLogin={console.log}
          onClose={setModalDisplayed}
        />
      </div>
    </>
  )
}
```

### Tailwind CSS v4[​](#tailwind-css-v4 "Direct link to Tailwind CSS v4")

When using the modal in a Tailwind CSS v4 project, add the following `@source` directive to your `index.css` file after the imports:

src/index.css

```
@import 'tailwindcss';
/* ...other imports */

@source '../node_modules/@aioha/react-ui';
```

### Tailwind CSS v3[​](#tailwind-css-v3 "Direct link to Tailwind CSS v3")

When using the modal in a Tailwind CSS v3 project, add the following `content` in `tailwind.config.js`:

tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    './node_modules/@aioha/react-ui/dist/**/*.{js,ts,jsx,tsx,css}',
    // ...
  ],
  // ...
}
```

### Other[​](#other "Direct link to Other")

note

As this is a highly-opinionated component library, the appearance may or may not be different than expected due to potential CSS conflicts with the rest of your application.

When not using Tailwind CSS, add the following import to the file where the `AiohaModal` component is used:

```
import { AiohaModal } from '@aioha/react-ui'
import '@aioha/react-ui/dist/build.css'

// rest of your components that uses AiohaModal 
```

## `AiohaModal` Component[​](#aiohamodal-component "Direct link to aiohamodal-component")

| Property             | Required? | Description                                                                                                                                                                      | Default                    |
| -------------------- | --------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `displayed`          | ✅        | Boolean of whether the modal is displayed.                                                                                                                                       | *false*                    |
| `loginTitle`         | ❌        | Login title to be displayed.                                                                                                                                                     | Connect Wallet             |
| `loginHelpUrl`       | ❌        | Help URL to be linked under provider selection view, if any.                                                                                                                     | *undefined*                |
| `loginOptions`       | ✅        | Aioha login options. See available configuration [here](/docs/core/usage.md#login).                                                                                              |                            |
| `discOptions`        | ❌        | Account discovery options. See available configuration [here](/docs/core/usage.md#discover-accounts).                                                                            |                            |
| `arrangement`        | ❌        | Display view preference of provider selection. Valid values: `list` and `grid`.                                                                                                  | list                       |
| `onLogin`            | ❌        | Callback function to be called upon successful login, if any. Parameter contains login result as defined [here](/docs/core/usage.md#login).                                      |                            |
| `onClose`            | ✅        | Function to be called to close the modal.                                                                                                                                        |                            |
| `imageServer`        | ❌        | Image server URL for user avatar.                                                                                                                                                | <https://images.hive.blog> |
| `explorerUrl`        | ❌        | Hive block explorer URL.                                                                                                                                                         | <https://hivehub.dev>      |
| `forceShowProviders` | ❌        | List of `Providers` to force show as login option, which must be registered already. Clicking on unavailable providers displayed will open the URL of the provider landing page. | *\[]*                      |

warning

`hiveauth.cbWait` in `loginOptions` will be overriden as `AiohaModal` will handle the presentation of HiveAuth QR codes.

## HiveSigner Callback Page[​](#hivesigner-callback-page "Direct link to HiveSigner Callback Page")

The callback page has been provided as a component that you can use in a route, as such:

src/Router.tsx

```
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HiveSignerCb } from '@aioha/react-ui'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/hivesigner',
    element: <HiveSignerCb />
  },
  // ...rest of your pages
])

const Router = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
```

Then specify the path as the callback URL in `initAioha()`:

```
const aioha = initAioha({
  hivesigner: {
    app: 'ipfsuploader.app',
    callbackURL: window.location.origin + '/hivesigner',
    scope: ['login', 'posting']
  },
  // ...other options
})
```
