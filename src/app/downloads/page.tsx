import Link from "next/link";
import CodeWindow from "../../components/CodeWindow";

// Sidebar navigation for downloads section
const downloadSidebar = [
  {
    title: "Downloads",
    links: [
      {
        name: "Latest Version (2.0)",
        href: "/downloads/latest",
        active: false,
      },
      { name: "Previous Versions", href: "/downloads/archive", active: false },
      {
        name: "System Requirements",
        href: "#system-requirements",
        active: false,
      },
      { name: "Installation Guide", href: "/docs/installation", active: false },
    ],
  },
  {
    title: "Package Managers",
    links: [
      { name: "npm (Node.js)", href: "#npm", active: false },
      { name: "Homebrew (macOS)", href: "#homebrew", active: false },
      { name: "APT (Linux)", href: "#apt", active: false },
      { name: "Docker", href: "#docker", active: false },
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

// OS-specific download data
const downloads = [
  {
    os: "Windows",
    version: "2.0",
    size: "28.6 MB",
    date: "March 15, 2024",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
      </svg>
    ),
    instructions: [
      "Download the Windows installer (.msi file)",
      "Run the installer and follow the on-screen instructions",
      "Add Soplang to your PATH if not done automatically",
      "Open Command Prompt or PowerShell and type 'soplang --version' to verify installation",
    ],
    downloadUrl: "/downloads/soplang-2.0-win64.msi",
  },
  {
    os: "macOS",
    version: "2.0",
    size: "26.2 MB",
    date: "March 15, 2024",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.5 4.5c.5-1.5 2-2.5 3.5-2.5 1 2 .5 4.5-1 6.5-.5-1.5-2-2.5-3.5-2.5-1-2-.5-4.5 1-6.5zm-4 7.5c0-1.5.5-3 1.5-4 1 1.5 1 4 0 6.5-1.5-1-1.5-2.5-1.5-4v-2c0 1.5.5 3 1.5 4-1-1.5-1-4 0-6.5 1.5 1 1.5 2.5 1.5 4v2z" />
      </svg>
    ),
    instructions: [
      "Download the macOS installer (.pkg file)",
      "Open the installer package and follow the installation wizard",
      "Alternatively, use Homebrew: brew install soplang",
      "Open Terminal and type 'soplang --version' to verify installation",
    ],
    downloadUrl: "/downloads/soplang-2.0-macos.pkg",
  },
  {
    os: "Linux",
    version: "2.0",
    size: "23.8 MB",
    date: "March 15, 2024",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489.117.779.567 1.563 1.182 2.114.267.273.236.637.042.727-.195.091-.471.3-.574.848-.127.627.037 1.502.773 2.187 1.094 1.026 1.967 2.389 2.033 4.209.013.403.199.757.418 1.059.334.482.487 1.247.445 2.184-.042.94.107 2.189.81 2.942.18.192.477.328.876.328.919 0 1.804-.258 1.869-.267.161-.015.423-.068.624-.074.822-.033 1.327-.403 1.901-.701.252-.13.503-.261.756-.393.126-.066.241-.131.387-.21.383-.168.871-.38 1.058-.724.303-.565.175-1.465.122-1.834-.074-.527-.23-1.369-.336-1.991-.105-.615-.196-1.146-.196-1.602 0-.018.005-.034.006-.053.038-.706.043-1.398.041-1.845-.002-.347.01-.639.032-.875.02-.236.036-.432.036-.586 0-.535-.253-.856-.421-1.057-.12-.145-.307-.29-.503-.424-.389-.27-.775-.507-.79-.526-.112-.151-.239-.399-.226-.71.011-.282.082-.584.239-.885.213-.399.47-.71.666-.91.038-.04.073-.083.105-.126.235-.336.467-.811.467-1.5 0-.942-.088-1.586-.262-2.128-.174-.541-.376-.94-.552-1.226-.158-.255-.361-.524-.555-.781-.535-.719-1.089-1.466-1.117-2.233-.02-.575.136-1.296.515-1.832.193-.269.389-.419.613-.505.128-.05.258-.086.392-.11.185-.032.35-.044.494-.044.444 0 .904.062 1.254.232.826.4.975 1.083 1.079 1.557.106.49.229 1.049.617 1.326.56.4 1.5.475 2.56.475.773 0 1.613-.031 2.407-.125 1.523-.185 2.304-1.292 2.326-1.329.255-.432.529-.89.661-1.379.134-.488.159-.934.159-1.26 0-.586-.123-1.044-.257-1.419-.133-.382-.278-.701-.278-.999 0-.21.088-.394.253-.56.166-.168.381-.3.631-.4.259-.104.555-.17.872-.208.318-.038.654-.057 1.006-.057.356 0 .7.013 1.023.038.322.026.631.066.915.121.662.121 1.208.324 1.602.653.393.33.685.786.89 1.417.205.634.308 1.441.308 2.488 0 1.196-.259 2.169-.681 2.873-.423.703-.957 1.137-1.529 1.399-.571.262-1.17.346-1.672.346-.503 0-.908-.084-1.14-.17-.232-.085-.372-.17-.372-.17 0 .33.013.661.033.989.02.327.046.652.078.973.033.322.073.637.12.945.047.308.1.61.162.905.061.294.13.579.208.856.077.276.163.542.259.798.095.256.199.503.314.74.115.238.239.467.374.686.134.22.28.43.438.63.158.2.329.39.512.57.183.18.379.35.589.51.21.16.431.31.665.45.234.14.48.27.739.39.258.12.529.22.813.31.283.09.578.17.885.23.307.06.624.11.953.15.329.04.67.06 1.021.06.352 0 .693-.02 1.021-.06.328-.04.645-.09.952-.15.307-.06.603-.14.886-.23.282-.09.554-.19.812-.31.258-.12.504-.25.738-.39.234-.14.456-.29.666-.45.21-.16.406-.33.589-.51.183-.18.354-.37.512-.57.158-.2.304-.41.438-.63.135-.219.239-.466.374-.686.115-.237.219-.484.314-.74.096-.256.182-.522.259-.798.078-.277.147-.562.208-.856.062-.295.115-.597.162-.905.047-.308.087-.623.12-.945.033-.321.059-.646.078-.973.02-.328.033-.659.033-.989 0-.661-.128-1.226-.384-1.703-.256-.477-.622-.863-1.091-1.161-.47-.297-1.045-.506-1.726-.626C20.839.017 20.075 0 19.25 0h-6.746z" />
      </svg>
    ),
    instructions: [
      "For Debian/Ubuntu: sudo apt-get install soplang",
      "For Fedora: sudo dnf install soplang",
      "For Arch Linux: sudo pacman -S soplang",
      "Alternatively, download the tarball and extract it",
      "Run './configure && make && sudo make install' from the extracted directory",
      "Verify installation with 'soplang --version'",
    ],
    downloadUrl: "/downloads/soplang-2.0-linux-x86_64.tar.gz",
  },
];

// Package manager installation commands
const packageManagers = [
  {
    name: "npm (Node.js)",
    id: "npm",
    command: "npm install -g soplang",
  },
  {
    name: "Homebrew (macOS)",
    id: "homebrew",
    command: "brew install soplang",
  },
  {
    name: "APT (Debian/Ubuntu)",
    id: "apt",
    command: "sudo apt install soplang",
  },
  {
    name: "Docker",
    id: "docker",
    command: "docker pull soplang/soplang:latest",
  },
];

export const metadata = {
  title: "Download Soplang - The Somali Programming Language",
  description:
    "Download Soplang 2.0 for Windows, macOS, or Linux. Get started with the first Somali programming language designed for simplicity and performance.",
  keywords:
    "Soplang, download, programming language, Somali language, install, Windows, macOS, Linux",
};

export default function DownloadsPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Download Soplang
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get the latest version of Soplang for your operating system and
            start coding today.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="w-full lg:w-2/3">
            {/* Latest Version Info */}
            <div className="bg-primary/10 dark:bg-primary/20 rounded-lg p-6 mb-12">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Latest Release: v2.0
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Released on March 15, 2024 |{" "}
                    <Link
                      href="/blog/release-notes-v2.0"
                      className="text-primary ml-1 hover:underline"
                    >
                      View Release Notes
                    </Link>
                  </p>
                </div>
                <Link
                  href="#download-options"
                  className="btn-primary mt-4 md:mt-0"
                >
                  Download Now
                </Link>
              </div>

              <div className="mt-6 border-t border-primary/20 pt-6">
                <h3 className="font-semibold mb-3">
                  What's New in Soplang 2.0
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

            {/* Choose Your Platform */}
            <div id="download-options" className="mb-16">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Choose Your Platform
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {downloads.map((download) => (
                  <div
                    key={download.os}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-lg hover:border-primary/50"
                  >
                    <div className="p-8 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
                      <div className="flex flex-col items-center text-center">
                        <div className="text-primary dark:text-blue-400 mb-4 p-5 bg-primary/10 dark:bg-primary/5 rounded-full w-20 h-20 flex items-center justify-center">
                          <div className="w-12 h-12">{download.icon}</div>
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            {download.os}
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            Version {download.version} ({download.size})
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                        Installation Instructions:
                      </h4>
                      <ol className="list-decimal list-inside space-y-3 text-gray-600 dark:text-gray-300 mb-6">
                        {download.instructions.map((instruction, index) => (
                          <li key={index} className="pl-1">
                            {instruction}
                          </li>
                        ))}
                      </ol>
                      <Link
                        href={download.downloadUrl}
                        className="btn-primary w-full text-center py-3 font-semibold text-base flex items-center justify-center"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Download for {download.os}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Install via Package Managers section title */}
            <div className="text-center mb-12 mt-24">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Install via Package Managers
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Choose from a variety of package managers to install Soplang on
                your system.
              </p>
            </div>

            {/* Package Managers */}
            <div className="mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
                <div className="p-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                    Soplang can also be installed using various package
                    managers:
                  </p>

                  <div className="space-y-8">
                    {packageManagers.map((pm) => (
                      <div
                        key={pm.name}
                        id={pm.id}
                        className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600"
                      >
                        <div className="flex items-center mb-4">
                          <div className="mr-3 p-2.5 bg-primary/10 rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 text-primary"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <div className="font-semibold text-gray-900 dark:text-white text-lg">
                            {pm.name}
                          </div>
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

            {/* Source Code section title */}
            <div className="text-center mb-12 mt-24">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Source Code
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Access and contribute to the Soplang open source project on
                GitHub.
              </p>
            </div>

            {/* Source Code */}
            <div className="mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
                <div className="p-8">
                  <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                    Soplang is open source. You can access the source code on
                    GitHub:
                  </p>

                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 border border-gray-200 dark:border-gray-600">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <div className="mr-3 p-2.5 bg-primary/10 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-primary"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="font-semibold text-gray-900 dark:text-white text-lg">
                          GitHub Repository
                        </div>
                      </div>
                      <a
                        href="https://github.com/soplang/soplang"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline font-medium"
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

            {/* System Requirements section title */}
            <div className="text-center mb-12 mt-24">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                System Requirements
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Check if your system meets the requirements to run Soplang.
              </p>
            </div>

            {/* System Requirements */}
            <div id="system-requirements" className="mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all">
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                        <svg
                          className="h-6 w-6 mr-2 text-primary"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                        </svg>
                        Windows
                      </h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300 ml-2 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                        <li>Windows 10/11 (64-bit)</li>
                        <li>4 GB RAM minimum</li>
                        <li>1 GB disk space</li>
                        <li>Intel/AMD processor</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                        <svg
                          className="h-6 w-6 mr-2 text-primary"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-.5 4.5c.5-1.5 2-2.5 3.5-2.5 1 2 .5 4.5-1 6.5-.5-1.5-2-2.5-3.5-2.5-1-2-.5-4.5 1-6.5zm-4 7.5c0-1.5.5-3 1.5-4 1 1.5 1 4 0 6.5-1.5-1-1.5-2.5-1.5-4v-2c0 1.5.5 3 1.5 4-1-1.5-1-4 0-6.5 1.5 1 1.5 2.5 1.5 4v2z" />
                        </svg>
                        macOS
                      </h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300 ml-2 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                        <li>macOS 11.0 (Big Sur) or later</li>
                        <li>4 GB RAM minimum</li>
                        <li>1 GB disk space</li>
                        <li>Intel or Apple Silicon</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                        <svg
                          className="h-6 w-6 mr-2 text-primary"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489.117.779.567 1.563 1.182 2.114.267.273.236.637.042.727-.195.091-.471.3-.574.848-.127.627.037 1.502.773 2.187 1.094 1.026 1.967 2.389 2.033 4.209.013.403.199.757.418 1.059.334.482.487 1.247.445 2.184-.042.94.107 2.189.81 2.942.18.192.477.328.876.328.919 0 1.804-.258 1.869-.267.161-.015.423-.068.624-.074.822-.033 1.327-.403 1.901-.701.252-.13.503-.261.756-.393.126-.066.241-.131.387-.21.383-.168.871-.38 1.058-.724.303-.565.175-1.465.122-1.834-.074-.527-.23-1.369-.336-1.991-.105-.615-.196-1.146-.196-1.602 0-.018.005-.034.006-.053.038-.706.043-1.398.041-1.845-.002-.347.01-.639.032-.875.02-.236.036-.432.036-.586 0-.535-.253-.856-.421-1.057-.12-.145-.307-.29-.503-.424-.389-.27-.775-.507-.79-.526-.112-.151-.239-.399-.226-.71.011-.282.082-.584.239-.885.213-.399.47-.71.666-.91.038-.04.073-.083.105-.126.235-.336.467-.811.467-1.5 0-.942-.088-1.586-.262-2.128-.174-.541-.376-.94-.552-1.226-.158-.255-.361-.524-.555-.781-.535-.719-1.089-1.466-1.117-2.233-.02-.575.136-1.296.515-1.832.193-.269.389-.419.613-.505.128-.05.258-.086.392-.11.185-.032.35-.044.494-.044.444 0 .904.062 1.254.232.826.4.975 1.083 1.079 1.557.106.49.229 1.049.617 1.326.56.4 1.5.475 2.56.475.773 0 1.613-.031 2.407-.125 1.523-.185 2.304-1.292 2.326-1.329.255-.432.529-.89.661-1.379.134-.488.159-.934.159-1.26 0-.586-.123-1.044-.257-1.419-.133-.382-.278-.701-.278-.999 0-.21.088-.394.253-.56.166-.168.381-.3.631-.4.259-.104.555-.17.872-.208.318-.038.654-.057 1.006-.057.356 0 .7.013 1.023.038.322.026.631.066.915.121.662.121 1.208.324 1.602.653.393.33.685.786.89 1.417.205.634.308 1.441.308 2.488 0 1.196-.259 2.169-.681 2.873-.423.703-.957 1.137-1.529 1.399-.571.262-1.17.346-1.672.346-.503 0-.908-.084-1.14-.17-.232-.085-.372-.17-.372-.17 0 .33.013.661.033.989.02.327.046.652.078.973.033.322.073.637.12.945.047.308.1.61.162.905.061.294.13.579.208.856.077.276.163.542.259.798.095.256.199.503.314.74.115.238.239.467.374.686.134.22.28.43.438.63.158.2.329.39.512.57.183.18.379.35.589.51.21.16.431.31.665.45.234.14.48.27.739.39.258.12.529.22.813.31.283.09.578.17.885.23.307.06.624.11.953.15.329.04.67.06 1.021.06.352 0 .693-.02 1.021-.06.328-.04.645-.09.952-.15.307-.06.603-.14.886-.23.282-.09.554-.19.812-.31.258-.12.504-.25.738-.39.234-.14.456-.29.666-.45.21-.16.406-.33.589-.51.183-.18.354-.37.512-.57.158-.2.304-.41.438-.63.135-.219.239-.466.374-.686.115-.237.219-.484.314-.74.096-.256.182-.522.259-.798.078-.277.147-.562.208-.856.062-.295.115-.597.162-.905.047-.308.087-.623.12-.945.033-.321.059-.646.078-.973.02-.328.033-.659.033-.989 0-.661-.128-1.226-.384-1.703-.256-.477-.622-.863-1.091-1.161-.47-.297-1.045-.506-1.726-.626C20.839.017 20.075 0 19.25 0h-6.746z" />
                        </svg>
                        Linux
                      </h3>
                      <ul className="space-y-2 text-gray-600 dark:text-gray-300 ml-2 border-l-2 border-gray-200 dark:border-gray-700 pl-4">
                        <li>Ubuntu 20.04 or later</li>
                        <li>4 GB RAM minimum</li>
                        <li>1 GB disk space</li>
                        <li>Intel/AMD 64-bit processor</li>
                      </ul>
                    </div>
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
