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
    <header className={clsx('hero', styles.heroBanner)}>
      <div className={styles.heroDecor} aria-hidden="true" />
      <div className={clsx('container', styles.heroInner)}>
        <div className={styles.heroLogoWrap}>
          <img src="/img/logo.svg" alt="Aioha logo" className={styles.heroLogo} />
        </div>
        <div className={styles.heroText}>
          <span className={styles.eyebrow}>Hive Authentication SDK</span>
          <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
            {siteConfig.title}
          </Heading>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className={clsx('button button--secondary button--lg', styles.primaryCta)} to="/docs">
              Get Started
            </Link>
            <Link
              className={clsx('button button--outline button--secondary button--lg', styles.githubButton)}
              href="https://github.com/aioha-hive/aioha"
            >
              <svg className={styles.ghIcon} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.67.56.1.77-.24.77-.54v-1.9c-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.57 0-1.23.44-2.24 1.16-3.03-.12-.28-.5-1.43.11-2.99 0 0 .95-.3 3.1 1.16.9-.25 1.86-.38 2.82-.38.96 0 1.92.13 2.82.38 2.15-1.46 3.1-1.16 3.1-1.16.61 1.56.23 2.71.11 2.99.72.79 1.16 1.8 1.16 3.03 0 4.33-2.64 5.28-5.15 5.56.4.35.76 1.03.76 2.08v3.08c0 .3.2.65.78.54 4.46-1.49 7.68-5.7 7.68-10.67C23.25 5.48 18.27.5 12 .5Z"
                />
              </svg>
              <span>View on GitHub</span>
            </Link>
          </div>
          <ul className={styles.metaChips} aria-label="Project facts">
            <li className={styles.metaChip}>TypeScript</li>
            <li className={styles.metaChip}>~64 KB</li>
            <li className={styles.metaChip}>MIT License</li>
          </ul>
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
        <p className={styles.lead}>Initialize Aioha and trigger a login flow with just a few lines of code.</p>
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
          <Heading as="h2">Now cross-chain with Magi</Heading>
          <p>
            Magi JS provides a unified interface for building applications on Magi network with wallet interoperability built in.
          </p>
          <Link className={clsx('button button--lg', styles.magiButton)} to="/docs/magi/overview">
            Explore Magi JS
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
