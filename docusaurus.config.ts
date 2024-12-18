import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Aioha',
  tagline: 'All-In-One Hive Authentication',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://aioha.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'aioha-hive', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/aioha-social-card.jpg',
    navbar: {
      title: 'Aioha',
      logo: {
        alt: 'Aioha Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          href: 'https://peakd.com/@aioha',
          label: 'Blog',
          position: 'right'
        },
        {
          href: 'https://github.com/aioha-hive/aioha',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs',
            },
            {
              label: 'Core API',
              to: '/docs/category/core-api'
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Hive',
              href: 'https://peakd.com/c/hive-169420',
            },
            {
              label: 'Sting',
              href: 'https://chat.peakd.com/t/hive-169420/0'
            }
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://peakd.com/@aioha',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/aioha-hive/aioha',
            },
            {
              label: 'X',
              href: 'https://x.com/aioha_hive'
            },
            {
              // TODO: Demo witness vote page using Aioha core API
              label: 'Vote for Hive witness',
              href: 'https://vote.hive.uno/@techcoderx'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aioha and its contributors.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true
    }
  } satisfies Preset.ThemeConfig,
};

export default config;
