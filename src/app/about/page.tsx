import Link from "next/link";

export const metadata = {
  title: "About Soplang - The Somali Programming Language",
  description:
    "Learn about Soplang, a modern programming language designed for Somali speakers with powerful features and an accessible syntax.",
};

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Soplang
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            The first modern programming language designed for Somali speakers.
          </p>
        </div>

        {/* Getting Started */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Getting Started
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Soplang can be easy to pick up whether you're a first-time
                programmer or experienced with other languages. The following
                resources will help you get started with Soplang:
              </p>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/docs/beginners-guide"
                    className="text-primary hover:underline"
                  >
                    Beginner's Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/installation"
                    className="text-primary hover:underline"
                  >
                    Installation Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/tutorials"
                    className="text-primary hover:underline"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/examples"
                    className="text-primary hover:underline"
                  >
                    Code Samples and Examples
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Community & Support
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The Soplang community hosts conferences and meetups,
                collaborates on code, and much more. Soplang's documentation
                will help you along the way and keep you connected with the
                latest updates.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Resources
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/docs"
                        className="text-primary hover:underline"
                      >
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/community/forums"
                        className="text-primary hover:underline"
                      >
                        Community Forums
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Updates
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/blog"
                        className="text-primary hover:underline"
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contribute Section */}
        <section>
          <div className="bg-primary rounded-lg p-8 md:p-12 shadow-lg text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Get Involved</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Soplang is open-source and community-driven. You can contribute to
              its development, documentation, or help grow the community.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/contribute"
                className="bg-white text-primary font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                Contribute to Soplang
              </Link>
              <Link
                href="/community"
                className="bg-transparent text-white border border-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
              >
                Join Our Community
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
