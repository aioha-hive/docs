# Using Aioha with Next.js (App Router)

This guide shows how to use **Aioha Core** inside a modern **Next.js App Router** application.

Because Next.js uses **Server Components by default**, Aioha must be initialized **only on the client**.

---

# Install

```bash
pnpm add @aioha/aioha
````

If you want to use the optional React UI components:

```bash
pnpm add @aioha/react-ui
```

---

# Project Structure

Example structure:

```
app
 ├ layout.tsx
 ├ page.tsx
 ├ providers
 │   └ AiohaProvider.tsx
 └ components
     └ LoginButton.tsx
```

---

# Create Aioha Provider

Since Aioha interacts with browser wallets like **Hive Keychain**, it must run **client-side only**.

Create a provider component.

`app/providers/AiohaProvider.tsx`

```tsx
"use client";

import { useEffect } from "react";
import { Aioha } from "@aioha/aioha";
import { AiohaProvider as Provider } from "@aioha/react-ui";

const aioha = new Aioha();

export default function AiohaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    aioha.setup();
  }, []);

  return <Provider aioha={aioha}>{children}</Provider>;
}
```

---

# Wrap Your App

Wrap the provider in your root layout.

`app/layout.tsx`

```tsx
import "./globals.css";
import "@aioha/react-ui/dist/build.css";

import AiohaProvider from "./providers/AiohaProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AiohaProvider>
          {children}
        </AiohaProvider>
      </body>
    </html>
  );
}
```

---

# Login Button Example

`app/components/LoginButton.tsx`

```tsx
"use client";

import { useAioha } from "@aioha/react-ui";

export default function LoginButton() {
  const { aioha, user } = useAioha();

  async function login() {
    await aioha.login();
  }

  return (
    <button onClick={login}>
      {user ? `Logged in: ${user}` : "Login"}
    </button>
  );
}
```

---

# Using the Component

`app/page.tsx`

```tsx
import LoginButton from "./components/LoginButton";

export default function Home() {
  return (
    <main>
      <h1>Hive Login Example</h1>
      <LoginButton />
    </main>
  );
}
```

---

# Important Notes

## Client Components Required

Any component using:

```
useAioha()
aioha.login()
```

must include:

```
"use client"
```

because Hive wallet integrations require browser APIs.

---

## SSR Considerations

Next.js renders components on the server by default.

To prevent errors:

* Initialize Aioha inside `useEffect`
* Use client components for authentication UI

---

## Optional CSS

If you use the React UI modal, include:

```
import "@aioha/react-ui/dist/build.css";
```

inside your layout.

---

# Summary

When using Aioha with Next.js:

* Initialize Aioha inside a **client provider**
* Wrap the app in that provider
* Use **client components** for login UI
