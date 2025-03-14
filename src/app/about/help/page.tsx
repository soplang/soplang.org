'use client';

import Link from 'next/link';

const commonQuestions = [
  {
    question: "How do I install Soplang?",
    answer: "You can install Soplang using package managers like pip (Python) or brew (macOS). Visit our installation guide for detailed instructions.",
    link: "/docs/installation"
  },
  {
    question: "Where can I find documentation?",
    answer: "Our comprehensive documentation includes tutorials, API reference, and best practices.",
    link: "/docs"
  },
  {
    question: "How do I report a bug?",
    answer: "You can report bugs through our GitHub issue tracker or contact our support team.",
    link: "/support/bugs"
  },
  {
    question: "Where can I get community support?",
    answer: "Join our Discord server or visit our community forums to connect with other developers.",
    link: "/community"
  }
];

const supportChannels = [
  {
    title: "Documentation",
    description: "Comprehensive guides and API reference",
    links: [
      { text: "Getting Started", href: "/docs/getting-started" },
      { text: "API Reference", href: "/docs/api" },
      { text: "Examples", href: "/docs/examples" },
      { text: "Best Practices", href: "/docs/best-practices" }
    ]
  },
  {
    title: "Community",
    description: "Connect with other Soplang developers",
    links: [
      { text: "Discord Server", href: "https://discord.gg/soplang" },
      { text: "Community Forums", href: "/community/forums" },
      { text: "Stack Overflow", href: "https://stackoverflow.com/questions/tagged/soplang" },
      { text: "GitHub Discussions", href: "https://github.com/soplang/soplang/discussions" }
    ]
  },
  {
    title: "Support",
    description: "Get help from our team",
    links: [
      { text: "Submit a Ticket", href: "/support/ticket" },
      { text: "Bug Reports", href: "/support/bugs" },
      { text: "Feature Requests", href: "/support/features" },
      { text: "Security Issues", href: "/security" }
    ]
  }
];

export default function HelpPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          How Can We Help?
        </h1>

        {/* Search Section */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Search Documentation
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for answers..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Common Questions */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Common Questions
          </h2>
          <div className="grid gap-6">
            {commonQuestions.map((item, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {item.answer}
                </p>
                <Link
                  href={item.link}
                  className="text-primary hover:underline inline-flex items-center"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Support Channels */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Support Channels
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {channel.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {channel.description}
                </p>
                <ul className="space-y-2">
                  {channel.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-primary hover:underline"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Still Need Help?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Our support team is available to help you with any questions or issues.
          </p>
          <Link
            href="/contact"
            className="btn-primary"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
} 