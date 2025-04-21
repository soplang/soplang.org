import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sitemap - Soplang",
  description: "Complete sitemap of Soplang programming language website.",
};

const siteStructure = [
  {
    title: "Getting Started",
    links: [
      { name: "Introduction", href: "/docs/getting-started" },
      { name: "Quick Start Guide", href: "/docs/quick-start" },
      { name: "Installation", href: "/docs/installation" },
      { name: "First Program", href: "/docs/first-program" },
    ],
  },
  {
    title: "Downloads",
    links: [
      { name: "Latest Version", href: "/downloads/latest" },
      { name: "All Releases", href: "/downloads" },
      { name: "Windows", href: "/downloads/windows" },
      { name: "macOS", href: "/downloads/macos" },
      { name: "Linux", href: "/downloads/linux" },
      { name: "Source Code", href: "/downloads/source" },
    ],
  },
  {
    title: "Documentation",
    links: [
      { name: "Language Reference", href: "/docs/language" },
      { name: "Standard Library", href: "/docs/stdlib" },
      { name: "API Reference", href: "/docs/api" },
      { name: "Best Practices", href: "/docs/best-practices" },
      { name: "Examples", href: "/docs/examples" },
      { name: "Tutorials", href: "/docs/tutorials" },
      { name: "FAQs", href: "/docs/faq" },
      { name: "Extending Soplang", href: "/docs/extending" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Community Home", href: "/community" },
      { name: "Discord", href: "https://discord.gg/n296G4dd7x" },
      { name: "GitHub", href: "https://github.com/soplang" },
      {
        name: "Discussions",
        href: "https://github.com/orgs/soplang/discussions",
      },
      { name: "Contributing", href: "/contribute" },
    ],
  },
  {
    title: "Blog",
    links: [
      { name: "Blog Home", href: "/blog" },
      {
        name: "Soplang 2.0",
        href: "/blog/Soplang-2.0-Is-Almost-Here-A-Somali-first-Programming-Language-Nears-Major-Release",
      },
    ],
  },
  {
    title: "About",
    links: [
      { name: "About Soplang", href: "/about" },
      { name: "Help", href: "/about/help" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Use", href: "/terms" },
      { name: "Trademarks", href: "/trademarks" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Sitemap
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteStructure.map((section) => (
            <div key={section.title} className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {section.title}
              </h2>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Can't find what you're looking for?{" "}
            <Link href="/contact" className="text-primary hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
