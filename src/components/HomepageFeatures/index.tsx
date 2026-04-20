import React from 'react'
import clsx from 'clsx'
import Heading from '@theme/Heading'
import styles from './styles.module.css'

type IconProps = React.ComponentProps<'svg'>

function KeyIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="8" cy="14" r="4" />
      <path d="M11 12 21 2" />
      <path d="m17 6 3 3" />
      <path d="m14 9 3 3" />
    </svg>
  )
}

function LayersIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 3 2 8l10 5 10-5-10-5z" />
      <path d="M2 13l10 5 10-5" />
      <path d="M2 18l10 5 10-5" />
    </svg>
  )
}

function FeatherIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
      <path d="M16 8 2 22" />
      <path d="M17.5 15H9" />
    </svg>
  )
}

type FeatureItem = {
  title: string
  Icon: React.ComponentType<IconProps>
  description: React.JSX.Element
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Multiple Providers',
    Icon: KeyIcon,
    description: (
      <>Sign in with Keychain, HiveAuth, HiveSigner, Ledger, Peak Vault, or MetaMask Snap through a single, consistent API.</>
    )
  },
  {
    title: 'Framework Agnostic',
    Icon: LayersIcon,
    description: <>First-class support for React, Vue, Lit, and Svelte, plus universal Web Components for everything else.</>
  },
  {
    title: 'Lightweight Core',
    Icon: FeatherIcon,
    description: (
      <>
        The main bundle is around 17 KB gzipped. Provider-specific code loads on demand, so users only download what they actually
        use.
      </>
    )
  }
]

function Feature({ title, Icon, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
