import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import CodeWindow from "../../../components/CodeWindow";

// Sidebar navigation for downloads section (same as main downloads page)
const downloadSidebar = [
  {
    title: "Downloads",
    links: [
      {
        name: "Latest Version (2.0)",
        href: "/downloads/latest",
        active: true,
      },
      { name: "Previous Versions", href: "/downloads/archive", active: false },
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

export const metadata: Metadata = {
  title: "Download Soplang 2.0 - The Latest Version",
  description:
    "Download Soplang 2.0, the latest version of the Somali programming language, with improved performance and new features.",
  keywords:
    "Soplang, download, latest version, programming language, Somali, 2.0, installation",
};

export default function DownloadLatestPage() {
  const latestVersion = "2.0";
  const releaseDate = "March 15, 2024";

  const downloadOptions = [
    {
      platform: "Windows",
      architecture: "64-bit",
      fileName: `soplang-${latestVersion}-win64.msi`,
      size: "28.6 MB",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
        </svg>
      ),
    },
    {
      platform: "macOS",
      architecture: "Universal",
      fileName: `soplang-${latestVersion}-macos.pkg`,
      size: "26.2 MB",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.5 4.5c.5-1.5 2-2.5 3.5-2.5 1 2 .5 4.5-1 6.5-.5-1.5-2-2.5-3.5-2.5-1-2-.5-4.5 1-6.5zm-4 7.5c0-1.5.5-3 1.5-4 1 1.5 1 4 0 6.5-1.5-1-1.5-2.5-1.5-4v-2c0 1.5.5 3 1.5 4-1-1.5-1-4 0-6.5 1.5 1 1.5 2.5 1.5 4v2z" />
        </svg>
      ),
    },
    {
      platform: "Linux",
      architecture: "x86_64",
      fileName: `soplang-${latestVersion}-linux-x86_64.tar.gz`,
      size: "23.8 MB",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489.117.779.567 1.563 1.182 2.114.267.273.236.637.042.727-.195.091-.471.3-.574.848-.127.627.037 1.502.773 2.187 1.094 1.026 1.967 2.389 2.033 4.209.013.403.199.757.418 1.059.334.482.487 1.247.445 2.184-.042.94.107 2.189.81 2.942.18.192.477.328.876.328.919 0 1.804-.258 1.869-.267.161-.015.423-.068.624-.074.822-.033 1.327-.403 1.901-.701.252-.13.503-.261.756-.393.126-.066.241-.131.387-.21.383-.168.871-.38 1.058-.724.303-.565.175-1.465.122-1.834-.074-.527-.23-1.369-.336-1.991-.105-.615-.196-1.146-.196-1.602 0-.018.005-.034.006-.053.038-.706.043-1.398.041-1.845-.002-.347.01-.639.032-.875.02-.236.036-.432.036-.586 0-.535-.253-.856-.421-1.057-.12-.145-.307-.29-.503-.424-.389-.27-.775-.507-.79-.526-.112-.151-.239-.399-.226-.71.011-.282.082-.584.239-.885.213-.399.47-.71.666-.91.038-.04.073-.083.105-.126.235-.336.467-.811.467-1.5 0-.942-.088-1.586-.262-2.128-.174-.541-.376-.94-.552-1.226-.158-.255-.361-.524-.555-.781-.535-.719-1.089-1.466-1.117-2.233-.02-.575.136-1.296.515-1.832.193-.269.389-.419.613-.505.128-.05.258-.086.392-.11.185-.032.35-.044.494-.044.444 0 .904.062 1.254.232.826.4.975 1.083 1.079 1.557.106.49.229 1.049.617 1.326.56.4 1.5.475 2.56.475.773 0 1.613-.031 2.407-.125 1.523-.185 2.304-1.292 2.326-1.329.255-.432.529-.89.661-1.379.134-.488.159-.934.159-1.26 0-.586-.123-1.044-.257-1.419-.133-.382-.278-.701-.278-.999 0-.21.088-.394.253-.56.166-.168.381-.3.631-.4.259-.104.555-.17.872-.208.318-.038.654-.057 1.006-.057.356 0 .7.013 1.023.038.322.026.631.066.915.047.322.073.637.12.945.047.308.1.61.162.905.061.294.13.579.208.856.077.276.163.542.259.798.095.256.199.503.314.74.115.238.239.467.374.686.134.22.28.43.438.63.158.2.329.39.512.57.183.18.379.35.589.51.21.16.431.31.665.45.234.14.48.27.739.39.258.12.529.22.813.31.283.09.578.17.885.23.307.06.624.11.953.15.329.04.67.06 1.021.06.352 0 .693-.02 1.021-.06.328-.04.645-.09.952-.15.307-.06.603-.14.886-.23.282-.09.554-.19.812-.31.258-.12.504-.25.738-.39.234-.14.456-.29.666-.45.21-.16.406-.33.589-.51.183-.18.354-.37.512-.57.158-.2.304-.41.438-.63.135-.219.239-.466.374-.686.115-.237.219-.484.314-.74.096-.256.182-.522.259-.798.078-.277.147-.562.208-.856.062-.295.115-.597.162-.905.047-.308.087-.623.12-.945.033-.321.059-.646.078-.973.02-.328.033-.659.033-.989 0-.661-.128-1.226-.384-1.703-.256-.477-.622-.863-1.091-1.161-.47-.297-1.045-.506-1.726-.626C20.839.017 20.075 0 19.25 0h-6.746z" />
        </svg>
      ),
    },
  ];

  const installationInstructions = {
    windows: [
      "Download the Windows installer (.msi file)",
      "Run the installer and follow the on-screen instructions",
      "Add Soplang to your PATH if not done automatically",
      "Open Command Prompt or PowerShell and type 'soplang --version' to verify installation",
    ],
    macos: [
      "Download the macOS installer (.pkg file)",
      "Open the installer package and follow the installation wizard",
      "Alternatively, use Homebrew: brew install soplang",
      "Open Terminal and type 'soplang --version' to verify installation",
    ],
    linux: [
      "For Debian/Ubuntu: sudo apt-get install soplang",
      "For Fedora: sudo dnf install soplang",
      "For Arch Linux: sudo pacman -S soplang",
      "Alternatively, download the tarball and extract it",
      "Run './configure && make && sudo make install' from the extracted directory",
      "Verify installation with 'soplang --version'",
    ],
  };

  const packageManagers = [
    {
      name: "npm (Node.js)",
      command: `npm install -g soplang@${latestVersion}`,
    },
    {
      name: "Homebrew (macOS)",
      command: "brew install soplang",
    },
    {
      name: "APT (Debian/Ubuntu)",
      command: "sudo apt install soplang",
    },
    {
      name: "Docker",
      command: "docker pull soplang/soplang:latest",
    },
  ];

  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Download Soplang {latestVersion}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Download and install the latest version of Soplang for your
            platform.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="w-full lg:w-2/3">
            {/* What's New */}
            <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-6 mb-12">
              <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Soplang {latestVersion}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-1">
                    Released on {releaseDate} |{" "}
                    <Link
                      href="/blog/release-notes-v2.0"
                      className="text-primary hover:underline"
                    >
                      View Release Notes
                    </Link>
                  </p>
                </div>
                <Link
                  href="/docs/getting-started"
                  className="btn-primary mt-4 md:mt-0"
                >
                  Get Started Guide
                </Link>
              </div>

              <div className="mt-6 border-t border-primary/20 pt-6">
                <h3 className="font-semibold mb-3">
                  What's New in Soplang {latestVersion}
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>
                    Enhanced standard library with advanced math functions
                  </li>
                  <li>Improved error messages with contextual hints</li>
                  <li>50% faster execution engine for improved performance</li>
                  <li>
                    New built-in web API framework for backend development
                  </li>
                  <li>
                    Expanded language documentation in both English and Somali
                  </li>
                </ul>
              </div>
            </div>

            {/* Download Options */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Download Options
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {downloadOptions.map((option, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl hover:border-primary/30"
                  >
                    <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                      <div className="flex items-center space-x-4">
                        <div className="text-primary dark:text-blue-400 p-3 bg-primary/10 rounded-full">
                          {option.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                            {option.platform}
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            {option.architecture} ({option.size})
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        Installation Instructions:
                      </h4>
                      <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                        {option.platform === "Windows" &&
                          installationInstructions.windows.map(
                            (instruction, i) => (
                              <li key={i} className="pl-1">
                                {instruction}
                              </li>
                            )
                          )}
                        {option.platform === "macOS" &&
                          installationInstructions.macos.map(
                            (instruction, i) => (
                              <li key={i} className="pl-1">
                                {instruction}
                              </li>
                            )
                          )}
                        {option.platform === "Linux" &&
                          installationInstructions.linux.map(
                            (instruction, i) => (
                              <li key={i} className="pl-1">
                                {instruction}
                              </li>
                            )
                          )}
                      </ol>
                      <a
                        href={`/downloads/files/${option.fileName}`}
                        className="btn-primary w-full text-center py-3 font-medium"
                      >
                        Download for {option.platform}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Package Managers */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Install via Package Managers
              </h2>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="p-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-8">
                    Soplang can also be installed using various package
                    managers:
                  </p>

                  <div className="space-y-8">
                    {packageManagers.map((pm) => (
                      <div
                        key={pm.name}
                        className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6"
                      >
                        <div className="font-semibold text-gray-900 dark:text-white mb-4 text-lg">
                          {pm.name}
                        </div>
                        <CodeWindow
                          code={pm.command}
                          title="Terminal"
                          className="shadow-lg"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Source Code */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Build from Source
              </h2>

              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    For developers who want to build from source:
                  </p>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-md p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="font-semibold text-gray-900 dark:text-white">
                        GitHub Repository
                      </div>
                      <a
                        href="https://github.com/soplang/soplang"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        View on GitHub
                      </a>
                    </div>
                    <CodeWindow
                      code="git clone https://github.com/soplang/soplang.git"
                      title="Terminal"
                      className="shadow-lg"
                    />
                  </div>
                </div>
              </div>
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
                  Need Help?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Having trouble with installation or setup? Check out our
                  resources or reach out to the community for assistance.
                </p>
                <div className="space-y-2">
                  <Link
                    href="/docs/installation"
                    className="text-primary hover:underline block"
                  >
                    Installation Guide
                  </Link>
                  <Link
                    href="/docs/faq"
                    className="text-primary hover:underline block"
                  >
                    FAQs
                  </Link>
                  <Link
                    href="/community"
                    className="text-primary hover:underline block"
                  >
                    Community Help
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
