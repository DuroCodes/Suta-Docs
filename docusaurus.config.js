// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Suta Docs',
  tagline: 'The documentation for Suta',
  url: 'https://docs.suta.tk',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/suta.png',
  organizationName: 'durocodes',
  projectName: 'suta',

  plugins: ['@docusaurus/theme-live-codeblock'],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/durocodes/suta-docs/tree/master/',
          showLastUpdateAuthor: true,
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          content: 'Suta - Documentation',
          property: 'og:title',
        },
        {
          content: 'https://raw.githubusercontent.com/DuroCodes/Suta/master/assets/logo.png',
          property: 'og:image',
        },
        {
          content: '#2E3037',
          name: 'theme-color',
        },
        {
          content: 'Suta is an open source ticket system for Discord.',
          property: 'og:description',
        },
      ],
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      navbar: {
        title: 'Suta',
        logo: {
          alt: 'Suta Logo',
          src: 'img/suta.png',
        },
        items: [
          {
            type: 'doc',
            docId: '/category/self-hosting',
            position: 'left',
            label: 'Self Hosting',
          },
          {
            type: 'doc',
            docId: '/category/how-to-use-suta',
            position: 'left',
            label: 'Usage',
          },
          {
            href: 'https://github.com/durocodes/suta-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Self Hosting',
                to: '/category/self-hosting',
              },
              {
                label: 'Usage',
                to: '/category/how-to-use-suta',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/durocodes/suta-docs',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
