import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import CodeBlock from '@theme/CodeBlock'
import HomepageFeatures from '@site/src/components/HomepageFeatures'

import styles from './index.module.css'

const QUICK_START_SNIPPET = `import { initAioha, KeyTypes, Providers } from '@aioha/aioha'

const aioha = initAioha()
const login = await aioha.login(Providers.Keychain, 'hiveuser', {
  msg: 'Hello World',
  keyType: KeyTypes.Posting
})`

const PROVIDERS = ['Keychain', 'HiveAuth', 'HiveSigner', 'Ledger', 'Peak Vault', 'MetaMask Snap']

const FRAMEWORKS: { label: string; to: string }[] = [
  { label: 'React', to: '/docs/framework/react' },
  { label: 'Vue', to: '/docs/framework/vue' },
  { label: 'Lit', to: '/docs/framework/lit' },
  { label: 'Svelte', to: '/docs/framework/svelte' },
  { label: 'Web Components', to: '/docs/ui/web-components' }
]

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={clsx('container', styles.heroInner)}>
        <img src="/img/logo.svg" alt="Aioha logo" className={styles.heroLogo} />
        <div className={styles.heroText}>
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs">
              Get Started
            </Link>
            <Link
              className="button button--outline button--secondary button--lg"
              href="https://github.com/aioha-hive/aioha"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

function QuickStart() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Get started in seconds
        </Heading>
        <p className={styles.lead}>
          Initialize Aioha and trigger a login flow with just a few lines of code.
        </p>
        <div className={styles.codeWrapper}>
          <CodeBlock language="ts">{QUICK_START_SNIPPET}</CodeBlock>
        </div>
      </div>
    </section>
  )
}

function SupportedProviders() {
  return (
    <section className={styles.sectionAlt}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Supported Providers
        </Heading>
        <ul aria-label="Supported login providers" className={styles.chipList}>
          {PROVIDERS.map((name) => (
            <li key={name} className={styles.chip}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function Frameworks() {
  return (
    <section className={styles.section}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Works with your framework
        </Heading>
        <ul aria-label="Supported frameworks" className={styles.chipList}>
          {FRAMEWORKS.map(({ label, to }) => (
            <li key={label}>
              <Link to={to} className={clsx(styles.chip, styles.chipLink)}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

function MagiBanner() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.magiBanner}>
          <Heading as="h2">Now multi-chain with Magi</Heading>
          <p>
            Magi JS extends Aioha with a unified interface for Hive, Ethereum and Bitcoin wallets — plus a view-only mode for
            read-only accounts.
          </p>
          <Link className={clsx('button button--lg', styles.magiButton)} to="/docs/magi/overview">
            Explore Magi
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuickStart />
        <SupportedProviders />
        <Frameworks />
        <MagiBanner />
      </main>
    </Layout>
  )
}
