# React Provider

For React apps that are **not** using the [ready-made UI](/docs/react/ui.md).

note

This module is used and provided in the ready-made UI so there is no need to install this separately.

## Installation[​](#installation "Direct link to Installation")

```
pnpm i @aioha/providers @aioha/aioha
```

## Usage[​](#usage "Direct link to Usage")

1. Initialize Aioha and setup the provider at the root of your application. This may be in `index.jsx`, `index.tsx` or `App.tsx` depending on the framework you use.

src/App.tsx

```
import { initAioha } from '@aioha/aioha'
import { AiohaProvider } from '@aioha/providers/react'

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

2. Use Aioha anywhere within `AiohaProvider` through `useAioha()`.

src/components/AiohaPage.tsx

```
import { useAioha } from '@aioha/providers/react'

export const AiohaPage = () => {
  const { aioha, user, provider, otherUsers } = useAioha()

  // rest of your page goes here
}
```

Logged in username and provider may be retrieved through `user` and `provider` variables. Other authenticated accounts can be retrieved through `otherUsers` variable.

## Using Events[​](#using-events "Direct link to Using Events")

Listen for [events](/docs/core/jsonrpc.md#events) in `useEffect` hook.

src/components/YourComponent.tsx

```
import { useEffect } from 'react'
import { useAioha } from '@aioha/providers/react'

export const YourComponent = () => {
  const { aioha } = useAioha()
  useEffect(() => {
    const handler = () => {
      // handle your event here
    }
    aioha.on('sign_tx_request', handler)

    return () => {
      aioha.off('sign_tx_request', handler)
    }
  }, [])
}
```

## SSR Apps[​](#ssr-apps "Direct link to SSR Apps")

If you are using a framework that uses SSR (server-side rendering) such as Next.js, you may need to setup Aioha separately in a `useEffect()`.

src/App.tsx

```
import React, { useEffect } from 'react'
import { Aioha } from '@aioha/aioha'
import { AiohaProvider } from '@aioha/providers/react'

const aioha = new Aioha()

const App = () => {
  useEffect(() => {
    // See options: https://aioha.dev/docs/core/usage#instantiation
    aioha.setup()
  }, [])
  return (
    <AiohaProvider aioha={aioha}>
      <TheRestOfYourApplication />
    </AiohaProvider>
  )
}
```

## Migrating to >=1.8.0[​](#migrating-to-180 "Direct link to Migrating to >=1.8.0")

The React provider is now part of a single unified package that consists of all framework providers.

Uninstall the old React provider and install the new package:

```
pnpm un @aioha/react-provider
pnpm i @aioha/providers
```

Update the imports accordingly:

```
// From:
import { AiohaProvider, useAioha } from '@aioha/react-provider'

// To:
import { AiohaProvider, useAioha } from '@aioha/providers/react'
```
