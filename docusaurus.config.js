// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const config = {
  title: 'RowScript',
  tagline: 'A robustly-typed functional language that compiles to efficient and reliable JavaScript.',
  favicon: 'img/favicon.ico',

  url: 'https://rowscript-lang.org',
  baseUrl: '/',

  organizationName: 'rowscript',
  projectName: 'rowscript.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-Hans']
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/rowscript/rowscript.github.io/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/rowscript/rowscript.github.io/',
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
      image: 'img/rowscript-social-card.png',
      navbar: {
        title: 'RowScript',
        logo: {
          alt: 'RowScript Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tourSidebar',
            position: 'left',
            label: 'Tour',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/rowscript/rowscript',
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
                label: 'Tour',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/rowscript',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/rowscript/rowscript',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} RowScript. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
