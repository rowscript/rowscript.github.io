// @ts-check

const prism = require("prism-react-renderer");

const config = {
  title: "RowScript",
  favicon: "img/favicon.ico",

  url: "https://rows.ro",
  baseUrl: "/",

  organizationName: "rowscript",
  projectName: "rowscript.github.io",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "zh-cn",
    locales: ["en-us", "zh-cn"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/rowscript/rowscript.github.io/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/rowscript/rowscript.github.io/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/rowscript-social-card.png",
      navbar: {
        title: "RowScript",
        logo: {
          alt: "RowScript Logo",
          src: "img/logo.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tourSidebar",
            position: "left",
            label: "Tour",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/rowscript/rowscript",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tour",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discussions",
                href: "https://github.com/rowscript/rowscript/discussions",
              },
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/rowscript",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/rowscript/rowscript",
              },
            ],
          },
        ],
        copyright: `"Copyright © ${new Date().getFullYear()} RowScript. Built with Docusaurus.`,
      },
      prism: {
        theme: prism.themes.github,
        darkTheme: prism.themes.dracula,
      },
    }),
};

module.exports = config;
