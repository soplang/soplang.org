import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  plugins: ["./src/plugins/tailwind-config.ts"],
  title: "Soplang Programming Language",
  tagline: "Dhis Software adigoo adeegsanyo Afkaada Hooyo",
  favicon: "img/favicon.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "so"],
    path: "i18n",
    localeConfigs: {
      en: {
        label: "English",
        direction: "ltr",
        htmlLang: "en-US",
        calendar: "gregory",
        path: "en",
      },
      so: {
        label: "Somali",
        direction: "rtl",
        htmlLang: "so",
        calendar: "gregory",
        path: "so",
      },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: "dark",
      respectPrefersColorScheme: false,
      disableSwitch: false,
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Soplang",
      logo: {
        alt: "soplang logo",
        src: "icons/logo.svg",
      },
      items: [
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Documentation",
        },
        {
          to: "/about",
          label: "About",
          position: "left",
        },
        {
          to: "/download",
          label: "Download",
          position: "left",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          to: "/contact",
          label: "Contact",
          position: "left",
        },

        {
          position: "right",
          label: "github",
          href: "https://github.com/soplang/soplang.com-update",
        },
        {
          position: "right",
          label: "discord",
          href: "https://discord.com/invite/n296G4dd7x",
        },
        {
          position: "right",
          label: "twitter",
          href: "https://x.com/soplangorg",
        },
      ],
    },
    footer: {
      style: "dark",

      links: [
        {
          title: "About",
          items: [
            {
              label: "About",
              to: "/about",
            },
            {
              label: "Get Started",
              to: "/get-started",
            },
            {
              label: "Help",
              to: "/help",
            },
          ],
        },
        {
          title: "Downloads",
          items: [
            {
              label: "All Releases",
              to: "/",
            },
            {
              label: "Source Code",
              to: "/",
            },
            {
              label: "Windows",
              to: "/",
            },
            {
              label: "macOS",
              to: "/",
            },
            {
              label: "Linux/UNIX",
              to: "/",
            },
          ],
        },
        {
          title: "Documentation",
          items: [
            {
              label: "Docs",
              to: "/docs",
            },
            {
              label: "FAQs",
              to: "/faqs",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Community Home",
              to: "/community",
            },
            {
              label: "Discord",
              href: "https://discord.com/invite/n296G4dd7x",
            },
            {
              label: "GitHub",
              href: "https://github.com/soplang/soplang.com-update",
            },
            {
              label: "Discussion",
              href: "https://github.com/orgs/soplang/discussions",
            },
            {
              label: "Contributing",
              href: "https://github.com/soplang/soplang/blob/main/docs/CONTRIBUTING.md",
            },
          ],
        },
        {
          title: "Blog",
          items: [
            {
              label: "Blog Home",
              to: "/blog",
            },
          ],
        },
      ],

      logo: {
        alt: "Soplang Logo",
        src: "icons/logo.svg",
        width: 160,
        height: 51,
      },

      copyright: `Copyright ©2025 Soplang Software Foundation Soplang is an open-source programming language that lets you work quickly and integrate systems effectively.`,
    },
    prism: {
      theme: prismThemes.nightOwlLight,
      darkTheme: prismThemes.nightOwl,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
