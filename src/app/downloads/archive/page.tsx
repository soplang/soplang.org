import Link from "next/link";
import CodeWindow from "../../../components/CodeWindow";

// Sidebar navigation for downloads section (same as main downloads page)
const downloadSidebar = [
  {
    title: "Downloads",
    links: [
      {
        name: "Latest Version (2.0)",
        href: "/downloads/latest",
        active: false,
      },
      { name: "Previous Versions", href: "/downloads/archive", active: true },
      {
        name: "System Requirements",
        href: "/downloads#system-requirements",
        active: false,
      },
      { name: "Installation Guide", href: "/docs/installation", active: false },
    ],
  },
  {
    title: "Package Managers",
    links: [
      { name: "npm (Node.js)", href: "/downloads#npm", active: false },
      { name: "Homebrew (macOS)", href: "/downloads#homebrew", active: false },
      { name: "APT (Linux)", href: "/downloads#apt", active: false },
      { name: "Docker", href: "/downloads#docker", active: false },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Getting Started Guide",
        href: "/docs/getting-started",
        active: false,
      },
      {
        name: "Release Notes",
        href: "/blog/release-notes-v2.0",
        active: false,
      },
      {
        name: "Changelog",
        href: "https://github.com/soplang/soplang/blob/main/CHANGELOG.md",
        active: false,
      },
      {
        name: "Source Code",
        href: "https://github.com/soplang/soplang",
        active: false,
      },
    ],
  },
];

// Previous versions data
const previousVersions = [
  {
    version: "1.5",
    releaseDate: "October 10, 2023",
    description:
      "Added initial support for object-oriented programming and expanded standard library.",
    downloads: [
      {
        os: "Windows",
        url: "/downloads/archives/soplang-1.5-win64.msi",
        size: "24.2 MB",
      },
      {
        os: "macOS",
        url: "/downloads/archives/soplang-1.5-macos.pkg",
        size: "22.8 MB",
      },
      {
        os: "Linux",
        url: "/downloads/archives/soplang-1.5-linux-x86_64.tar.gz",
        size: "20.4 MB",
      },
    ],
    releaseNotes: "/blog/release-notes-v1.5",
  },
  {
    version: "1.2",
    releaseDate: "July 15, 2023",
    description:
      "Improved error handling and fixed critical bugs in the runtime environment.",
    downloads: [
      {
        os: "Windows",
        url: "/downloads/archives/soplang-1.2-win64.msi",
        size: "23.4 MB",
      },
      {
        os: "macOS",
        url: "/downloads/archives/soplang-1.2-macos.pkg",
        size: "21.6 MB",
      },
      {
        os: "Linux",
        url: "/downloads/archives/soplang-1.2-linux-x86_64.tar.gz",
        size: "19.8 MB",
      },
    ],
    releaseNotes: "/blog/release-notes-v1.2",
  },
  {
    version: "1.0",
    releaseDate: "March 21, 2023",
    description:
      "Initial stable release with core language features and basic standard library.",
    downloads: [
      {
        os: "Windows",
        url: "/downloads/archives/soplang-1.0-win64.msi",
        size: "21.8 MB",
      },
      {
        os: "macOS",
        url: "/downloads/archives/soplang-1.0-macos.pkg",
        size: "20.2 MB",
      },
      {
        os: "Linux",
        url: "/downloads/archives/soplang-1.0-linux-x86_64.tar.gz",
        size: "18.5 MB",
      },
    ],
    releaseNotes: "/blog/release-notes-v1.0",
  },
  {
    version: "0.9 (Beta)",
    releaseDate: "January 5, 2023",
    description:
      "Beta release for testing with most language features implemented.",
    downloads: [
      {
        os: "Windows",
        url: "/downloads/archives/soplang-0.9-win64.msi",
        size: "19.2 MB",
      },
      {
        os: "macOS",
        url: "/downloads/archives/soplang-0.9-macos.pkg",
        size: "18.5 MB",
      },
      {
        os: "Linux",
        url: "/downloads/archives/soplang-0.9-linux-x86_64.tar.gz",
        size: "17.1 MB",
      },
    ],
    releaseNotes: "/blog/release-notes-beta",
  },
];

export const metadata = {
  title: "Previous Versions - Soplang Download Archive",
  description:
    "Download older versions of Soplang, the Somali programming language. Access all previous releases for Windows, macOS, and Linux.",
  keywords:
    "Soplang, previous versions, archive, download archive, programming language history, Somali language",
};

export default function ArchivePage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Previous Soplang Versions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Access and download older versions of Soplang for your specific
            needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="w-full lg:w-2/3">
            {/* Version warning notice */}
            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-6 mb-10 rounded-r-lg">
              <h2 className="text-lg font-semibold text-amber-800 dark:text-amber-400 mb-2">
                Note About Older Versions
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We recommend using the{" "}
                <Link
                  href="/downloads"
                  className="text-primary hover:underline"
                >
                  latest version
                </Link>{" "}
                of Soplang whenever possible. Older versions may contain bugs
                that have since been fixed and lack newer features and
                optimizations.
              </p>
            </div>

            {/* Version archives list */}
            <div className="space-y-10">
              {previousVersions.map((version) => (
                <div
                  key={version.version}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
                >
                  <div className="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/50">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                      <div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Soplang {version.version}
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">
                          Released on {version.releaseDate}
                        </p>
                      </div>
                      <Link
                        href={version.releaseNotes}
                        className="text-primary hover:underline text-sm font-medium px-4 py-2 border border-primary/30 rounded-full hover:bg-primary/5"
                      >
                        View Release Notes
                      </Link>
                    </div>
                  </div>

                  <div className="p-6 md:p-8">
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                      {version.description}
                    </p>

                    <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                      Download Links
                    </h3>
                    <div className="grid sm:grid-cols-3 gap-4">
                      {version.downloads.map((download) => (
                        <Link
                          key={download.os}
                          href={download.url}
                          className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors border border-gray-200 dark:border-gray-600"
                        >
                          <span className="font-medium">{download.os}</span>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {download.size}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legacy versions notice */}
            <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 p-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Looking for Even Older Versions?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                For access to alpha versions and experimental builds, please
                visit our GitHub repository. All previous releases are archived
                there with full source code and documentation.
              </p>
              <a
                href="https://github.com/soplang/soplang/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block py-3 px-6"
              >
                View All Releases on GitHub
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 lg:pl-8">
            <div className="sticky top-24">
              {downloadSidebar.map((section, index) => (
                <div key={index} className="mb-8">
                  <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className={`text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary ${
                            link.active ? "text-primary font-semibold" : ""
                          }`}
                          target={
                            link.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
                  Version Compatibility
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Need help understanding compatibility between different
                  Soplang versions? Check our compatibility guides or ask in the
                  community forums.
                </p>
                <div className="space-y-2">
                  <Link
                    href="/docs/compatibility"
                    className="text-primary hover:underline block"
                  >
                    Version Compatibility Guide
                  </Link>
                  <Link
                    href="/docs/migration"
                    className="text-primary hover:underline block"
                  >
                    Migration Guides
                  </Link>
                  <a
                    href="https://github.com/orgs/soplang/discussions"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline block"
                  >
                    Community Forums
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
