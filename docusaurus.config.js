// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Custom ROM List',
  tagline: 'On this website, you can see almost all the lists of ROM organizations and tons of details about ROM modifications.',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://pixelzdevelopment.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Custom-ROM-List/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'PixelzDevelopment', // Usually your GitHub org/user name.
  projectName: 'Custom-ROM-List', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'warn',
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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/PixelzDevelopment/Custom-ROM-List/edit/main/',
	      showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Custom ROM List',
        logo: {
          alt: 'Custom ROM List Logo',
          src: 'img/logo.png',
        },
        items: [
          {type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: 'Organizations'},
          {href: '/contributions', label: 'Contributions', position: 'right'},
          {href: '/about', label: 'About Us', position: 'right'},
          {href: 'https://github.com/itz-rj-here/Custom-ROM-List', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Organizations',
                to: '/docs/organizations',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/6gjTNXZ4z4',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/itz-rj-here/Custom-ROM-List',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} <a style="color: inherit" href="https://github.com/PixelzDevelopment" target="_blank">Pixel Development</a>. All rights reserved.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
