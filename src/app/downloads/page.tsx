import Link from 'next/link';
import CodeWindow from '../../components/CodeWindow';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';

// Sidebar navigation for downloads section
const downloadSidebar = [
  {
    title: 'Downloads',
    links: [
      {
        name: 'Latest Version (2.0)',
        href: '/downloads/latest',
        active: false,
      },
      { name: 'Previous Versions', href: '/downloads/archive', active: false },
      {
        name: 'System Requirements',
        href: '#system-requirements',
        active: false,
      },
      { name: 'Installation Guide', href: '/docs/installation', active: false },
    ],
  },
  {
    title: 'Package Managers',
    links: [
      { name: 'npm (Node.js)', href: '#npm', active: false },
      { name: 'Homebrew (macOS)', href: '#homebrew', active: false },
      { name: 'APT (Linux)', href: '#apt', active: false },
      { name: 'Docker', href: '#docker', active: false },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        name: 'Getting Started Guide',
        href: '/docs/getting-started',
        active: false,
      },
      {
        // name: "Release Notes",
        href: '/blog/release-notes-v2.0',
        active: false,
      },
      {
        name: 'Changelog',
        href: 'https://github.com/soplang/soplang/blob/main/CHANGELOG.md',
        active: false,
      },
      {
        name: 'Source Code',
        href: 'https://github.com/soplang/soplang',
        active: false,
      },
    ],
  },
];

// OS-specific download data
const downloads = [
  {
    os: 'Windows',
    version: '2.0',
    size: '28.6 MB',
    date: 'March 15, 2024',
    icon: <FaWindows className="w-12 h-12" />,
    instructions: [
      'Download the Windows installer (.msi file)',
      'Run the installer and follow the on-screen instructions',
      'Add Soplang to your PATH if not done automatically',
      "Open Command Prompt or PowerShell and type 'soplang --version' to verify installation",
    ],
    downloadUrl: 'https://github.com/soplang/soplang/releases/download/v2.0.0/soplang-setup.exe',
  },
  {
    os: 'macOS',
    version: '2.0',
    size: '26.2 MB',
    date: 'March 15, 2024',
    icon: <FaApple className="w-12 h-12" />,
    instructions: [
      'Download the macOS installer (.pkg file)',
      'Open the installer package and follow the installation wizard',
      'Alternatively, use Homebrew: brew install soplang',
      "Open Terminal and type 'soplang --version' to verify installation",
    ],
    downloadUrl: '/',
  },
  {
    os: 'Linux',
    version: '2.0',
    size: '23.8 MB',
    date: 'March 15, 2024',
    icon: <FaLinux className="w-12 h-12" />,
    instructions: [
      'For Debian/Ubuntu: sudo apt-get install soplang',
      'For Fedora: sudo dnf install soplang',
      'For Arch Linux: sudo pacman -S soplang',
      'Alternatively, download the tarball and extract it',
      "Run './configure && make && sudo make install' from the extracted directory",
      "Verify installation with 'soplang --version'",
    ],
    downloadUrl: '/',
  },
];

// Package manager installation commands
const packageManagers = [
  {
    name: 'npm (Node.js)',
    id: 'npm',
    command: 'npm install -g soplang',
  },
  {
    name: 'Homebrew (macOS)',
    id: 'homebrew',
    command: 'brew install soplang',
  },
  {
    name: 'APT (Debian/Ubuntu)',
    id: 'apt',
    command: 'sudo apt install soplang',
  },
  {
    name: 'Docker',
    id: 'docker',
    command: 'docker pull soplang/soplang:latest',
  },
];

export const metadata = {
  title: 'Download Soplang - The Somali Programming Language',
  description:
    'Download Soplang 2.0 for Windows, macOS, or Linux. Get started with the first Somali programming language designed for simplicity and performance.',
  keywords:
    'Soplang, download, programming language, Somali language, install, Windows, macOS, Linux',
};

export default function DownloadsPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Download Soplang
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
            Get the latest version of Soplang for your operating system and start coding today.
          </p>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Main content */}
          <div className="w-full lg:w-2/3">
            {/* Latest Version Info */}
            <div className="p-6 mb-12 rounded-lg bg-primary/10 dark:bg-primary/20">
              <div className="flex flex-col items-center justify-between md:flex-row">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Latest Release: v2.0
                  </h2>
                  {/* <p className="mt-2 text-gray-600 dark:text-gray-300">
                    Released on March 15, 2024 |{' '}
                    <Link
                      href="/blog/release-notes-v2.0"
                      className="ml-1 text-primary hover:underline"
                    >
                      View Release Notes
                    </Link>
                  </p> */}
                </div>
                <Link href="#download-options" className="mt-4 btn-primary md:mt-0">
                  Download Now
                </Link>
              </div>

              <div className="pt-6 mt-6 border-t border-primary/20">
                <h3 className="mb-3 font-semibold">What's New in Soplang 2.0</h3>
                <ul className="space-y-1 text-gray-700 list-disc list-inside dark:text-gray-300">
                  <li>Enhanced standard library with advanced math functions</li>
                  <li>Improved error messages with contextual hints</li>
                  <li>50% faster execution engine for improved performance</li>
                  <li>New built-in web API framework for backend development</li>
                  <li>Expanded language documentation in both English and Somali</li>
                </ul>
              </div>
            </div>

            {/* Choose Your Platform */}
            <div id="download-options" className="mb-16">
              <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
                Choose Your Platform
              </h2>

              <div className="grid gap-8 md:grid-cols-3">
                {downloads.map((download) => (
                  <div
                    key={download.os}
                    className="overflow-hidden transition-all bg-white border border-gray-200 shadow-md dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:shadow-lg hover:border-primary/50"
                  >
                    <div className="p-8 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700/30">
                      <div className="flex flex-col items-center text-center">
                        <div className="flex items-center justify-center w-20 h-20 p-5 mb-4 rounded-full text-primary dark:text-blue-400 bg-primary/10 dark:bg-primary/5">
                          <div className="w-12 h-12">{download.icon}</div>
                        </div>
                        <div>
                          <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                            {download.os}
                          </h3>
                          <p className="text-gray-500 dark:text-gray-400">
                            Version {download.version} ({download.size})
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <h4 className="mb-4 font-semibold text-gray-900 dark:text-white">
                        Installation Instructions:
                      </h4>
                      <ol className="mb-6 space-y-3 text-gray-600 list-decimal list-inside dark:text-gray-300">
                        {download.instructions.map((instruction, index) => (
                          <li key={index} className="pl-1">
                            {instruction}
                          </li>
                        ))}
                      </ol>
                      <Link
                        href={download.downloadUrl}
                        className="flex items-center justify-center w-full py-3 text-base font-semibold text-center btn-primary"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 mr-2"
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
            <div className="mt-24 mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                Install via Package Managers
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
                Choose from a variety of package managers to install Soplang on your system.
              </p>
            </div>

            {/* Package Managers */}
            <div className="mb-16">
              <div className="overflow-hidden transition-all bg-white border border-gray-200 shadow-md dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:shadow-lg">
                <div className="p-8">
                  <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                    Soplang can also be installed using various package managers:
                  </p>

                  <div className="space-y-8">
                    {packageManagers.map((pm) => (
                      <div
                        key={pm.name}
                        id={pm.id}
                        className="p-6 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600"
                      >
                        <div className="flex items-center mb-4">
                          <div className="mr-3 p-2.5 bg-primary/10 rounded-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-5 h-5 text-primary"
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
                          <div className="text-lg font-semibold text-gray-900 dark:text-white">
                            {pm.name}
                          </div>
                        </div>
                        <CodeWindow code={pm.command} title="Terminal" className="shadow-lg" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Source Code section title */}
            <div className="mt-24 mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">Source Code</h2>
              <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
                Access and contribute to the Soplang open source project on GitHub.
              </p>
            </div>

            {/* Source Code */}
            <div className="mb-16">
              <div className="overflow-hidden transition-all bg-white border border-gray-200 shadow-md dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:shadow-lg">
                <div className="p-8">
                  <p className="mb-8 text-lg text-gray-600 dark:text-gray-300">
                    Soplang is open source. You can access the source code on GitHub:
                  </p>

                  <div className="p-6 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="mr-3 p-2.5 bg-primary/10 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-primary"
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
                        <div className="text-lg font-semibold text-gray-900 dark:text-white">
                          GitHub Repository
                        </div>
                      </div>
                      <a
                        href="https://github.com/soplang/soplang"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-primary hover:underline"
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
            <div className="mt-24 mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                System Requirements
              </h2>
              <p className="max-w-3xl mx-auto text-xl text-gray-600 dark:text-gray-300">
                Check if your system meets the requirements to run Soplang.
              </p>
            </div>

            {/* System Requirements */}
            <div id="system-requirements" className="mb-16">
              <div className="overflow-hidden transition-all bg-white border border-gray-200 shadow-md dark:bg-gray-800 rounded-xl dark:border-gray-700 hover:shadow-lg">
                <div className="p-8">
                  <div className="grid gap-8 md:grid-cols-3">
                    <div className="space-y-4">
                      <h3 className="flex items-center text-xl font-bold text-gray-900 dark:text-white">
                        <svg
                          className="w-6 h-6 mr-2 text-primary"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
                        </svg>
                        Windows
                      </h3>
                      <ul className="pl-4 ml-2 space-y-2 text-gray-600 border-l-2 border-gray-200 dark:text-gray-300 dark:border-gray-700">
                        <li>Windows 10/11 (64-bit)</li>
                        <li>4 GB RAM minimum</li>
                        <li>1 GB disk space</li>
                        <li>Intel/AMD processor</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="flex items-center text-xl font-bold text-gray-900 dark:text-white">
                        <FaApple className="w-6 h-6 mr-2 text-primary" />
                        macOS
                      </h3>
                      <ul className="pl-4 ml-2 space-y-2 text-gray-600 border-l-2 border-gray-200 dark:text-gray-300 dark:border-gray-700">
                        <li>macOS 11.0 (Big Sur) or later</li>
                        <li>4 GB RAM minimum</li>
                        <li>1 GB disk space</li>
                        <li>Intel or Apple Silicon</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="flex items-center text-xl font-bold text-gray-900 dark:text-white">
                        <FaLinux className="w-6 h-6 mr-2 text-primary" />
                        Linux
                      </h3>
                      <ul className="pl-4 ml-2 space-y-2 text-gray-600 border-l-2 border-gray-200 dark:text-gray-300 dark:border-gray-700">
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
                  <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className={`text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary ${
                            link.active ? 'text-primary font-semibold' : ''
                          }`}
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="p-6 rounded-lg bg-primary/10 dark:bg-primary/20">
                <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Need Help?</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-300">
                  Having trouble with installation or setup? Check out our resources or reach out to
                  the community for assistance.
                </p>
                <div className="space-y-2">
                  <Link href="/docs/installation" className="block text-primary hover:underline">
                    Installation Guide
                  </Link>
                  <Link href="/docs/faq" className="block text-primary hover:underline">
                    FAQs
                  </Link>
                  <Link href="/community" className="block text-primary hover:underline">
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
