import Link from "next/link";
import Image from "next/image";
import CodeWindow from "../components/CodeWindow";

// Sample code snippet for the hero section - back to Hello World
const codeSnippet = `// Hello World
qor("Salaan, Adduunka!")

// Variables
door magac = 'Sharafdin'
qoraal cinwaan = "Soplang Developer"
tiro da = 10

qor("Magaca: " + magac)
qor("Cinwaanka: " + cinwaan)
qor("Da'da: " + qoraal(da))

// Function
howl salaan(qofka) {
    soo_celi "Salaan, " + qofka + "!"
}
qor(salaan(magac))
`;

// Website sections for the sidebar
const websiteSections = [
  {
    title: "Learn",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "Tutorial", href: "/docs/tutorial" },
      { name: "Language Reference", href: "/docs/language" },
      { name: "API Reference", href: "/docs/reference" },
      { name: "Examples", href: "/docs/examples" },
    ],
  },
  {
    title: "Download",
    links: [
      { name: "Latest Version", href: "/downloads/latest" },
      { name: "All Releases", href: "/downloads" },
      { name: "Source Code", href: "https://github.com/soplang/soplang" },
    ],
  },
  {
    title: "Community",
    links: [
      { name: "Community Home", href: "/community" },
      { name: "Contribute", href: "/contribute" },
      { name: "Security", href: "/contribute/security" },
      {
        name: "Report Issues",
        href: "https://github.com/soplang/soplang/issues",
      },
    ],
  },
  {
    title: "About",
    links: [
      { name: "About Soplang", href: "/about" },
      { name: "Blog", href: "/blog" },
    ],
  },
];

// Social media links
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/soplang",
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: "Twitter",
    href: "https://x.com/soplangorg",
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: "Discord",
    href: "https://discord.gg/n296G4dd7x",
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="bg-[var(--primary-color)] text-white py-8 sm:py-12 lg:py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Soplang
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4">
                Somali-first programming language
              </h2>
              <p className="text-lg sm:text-xl mb-6 text-white/90">
                Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/downloads"
                  className="bg-white text-[var(--primary-color)] font-bold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                >
                  Download Soplang
                </Link>
                <Link
                  href="/docs/getting-started"
                  className="bg-[var(--secondary-color)] text-gray-900 font-bold px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="max-w-xl mx-auto lg:max-w-none">
                <CodeWindow code={codeSnippet} title="main.sop" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12">
        <div className="container-custom px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content Area */}
            <div className="w-full lg:w-2/3">
              {/* Introduction */}
              <div className="soplang-box p-6 sm:p-8">
                <h2 className="soplang-header text-2xl sm:text-3xl mb-6">
                  What is Soplang?
                </h2>
                <div className="space-y-4 text-base sm:text-lg">
                  <p>
                    <strong>Soplang</strong> (short for{" "}
                    <em>Somali Programming Language</em>) is a culturally-rooted
                    programming language designed and developed by{" "}
                    <strong>Mr Sharafdin</strong> (Sharafdin Yusuf Sharafdin).
                    It allows developers to write code in{" "}
                    <strong>native Somali syntax</strong> using familiar
                    keywords, expressions, and structures — making programming
                    feel natural and accessible.
                  </p>
                  <p>
                    Soplang is a Somali-first programming language that makes
                    coding intuitive, inclusive, and accessible for Somali
                    peoples.
                  </p>
                  <p>
                    With Soplang, you can "Dhis Software Adigoo Adeegsanaya
                    Afkaaga Hooyo!" (Build software using your mother tongue!)
                  </p>
                </div>
              </div>

              {/* Features */}
              <div className="soplang-box p-6 sm:p-8 mt-8">
                <h2 className="soplang-header text-2xl sm:text-3xl mb-6">
                  Key Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="feature-card">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                      Dual Typing System
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Use <code>door</code> for dynamic typing, or{" "}
                      <code>tiro</code>, <code>qoraal</code>, etc. for static
                      typing flexibility.
                    </p>
                  </div>
                  <div className="feature-card">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                      Object-Oriented Programming
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Full support for OOP with <code>fasalka</code>,{" "}
                      <code>ka_dhaxal</code>, <code>cusub</code>, and{" "}
                      <code>nafta</code>.
                    </p>
                  </div>
                  <div className="feature-card">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                      Intuitive Control Flow
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Clean syntax for conditionals (<code>haddii</code>,{" "}
                      <code>haddii_kale</code>) and loops (<code>ku_celi</code>,{" "}
                      <code>inta_ay</code>).
                    </p>
                  </div>
                  <div className="feature-card">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3">
                      Integrated Tooling
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      VS Code extension, CLI tool (<code>sop</code>), REPL, and
                      browser runtime (sopScript).
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href="/about/features"
                    className="soplang-link inline-flex items-center"
                  >
                    Learn more about Soplang features{" "}
                    <span className="ml-2">→</span>
                  </Link>
                </div>
              </div>

              {/* Getting Started */}
              <div className="soplang-box p-6 sm:p-8 mt-8">
                <h2 className="soplang-header text-2xl sm:text-3xl mb-6">
                  Getting Started
                </h2>
                <p className="text-base sm:text-lg mb-4">
                  Ready to dive in? Here's how to get started with Soplang:
                </p>
                <ol className="list-decimal list-inside space-y-3 mb-6 text-base sm:text-lg">
                  <li>
                    <Link href="/downloads" className="soplang-link">
                      Download and install Soplang
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/tutorial" className="soplang-link">
                      Follow the beginner's tutorial
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/reference" className="soplang-link">
                      Explore the language reference
                    </Link>
                  </li>
                  <li>
                    <Link href="/community" className="soplang-link">
                      Join the community
                    </Link>
                  </li>
                </ol>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-lg">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Quick Installation
                  </h3>
                  <CodeWindow
                    code={`# On macOS/Linux
$ curl -sSL https://install.soplang.org | bash

# On Windows (PowerShell)
> iwr -useb https://install.soplang.org/win | iex`}
                    title="terminal"
                  />
                </div>
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="w-full lg:w-1/3">
              {/* Site Navigation */}
              <div className="sticky top-24">
                {websiteSections.map((section) => (
                  <div
                    className="soplang-sidebar-box p-6 mb-6"
                    key={section.title}
                  >
                    <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.links.map((link, index) => (
                        <li key={index}>
                          <Link
                            href={link.href}
                            className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                            target={
                              link.href.startsWith("http")
                                ? "_blank"
                                : undefined
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

                {/* Social Media Links */}
                <div className="soplang-sidebar-box p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Connect</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.name}
                        title={link.name}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
