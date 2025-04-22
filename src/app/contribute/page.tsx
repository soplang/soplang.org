import Link from "next/link";
import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Contribute to Soplang - Join the Community",
  description:
    "Learn how to contribute to Soplang, an open-source Somali programming language. Find guidelines, development setup instructions, and join our community of contributors.",
  keywords:
    "Soplang, contribute, open-source, Somali programming language, coding, development, community",
};

export default function ContributePage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contribute to Soplang
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Soplang is open-source under the MIT License and everyone is welcome
            to contribute!
          </p>
          <div className="mt-6">
            <a
              href="https://github.com/soplang/soplang/blob/main/docs/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
            >
              View Contribution Guidelines
            </a>
          </div>
        </div>

        {/* About contributing */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Community & Contribution
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Soplang is a community-driven project and we welcome
                  contributions of all forms. Whether you're a developer,
                  designer, writer, translator, or just enthusiastic about the
                  language, there are many ways to contribute.
                </p>
                <p>
                  GitHub:{" "}
                  <a
                    href="https://github.com/soplang/soplang"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/soplang/soplang
                  </a>
                </p>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                  Current Contributors:
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Mr Sharafdin</strong> (Creator)
                  </li>
                  <li>
                    <strong>Omar Tood</strong>
                  </li>
                  <li>
                    <strong>Ismail Ainte</strong>
                  </li>
                  <li>
                    <strong>Shiine</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to contribute */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Ways to Contribute
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Code Contributions
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Help improve the Soplang interpreter, compiler, or standard
                    library by contributing code. Check our{" "}
                    <a
                      href="https://github.com/soplang/soplang/blob/main/docs/CONTRIBUTING.md"
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      contribution guidelines
                    </a>{" "}
                    for detailed instructions.
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Fork the repository on GitHub</li>
                    <li>Clone your fork locally</li>
                    <li>Create a new branch for your feature or bug fix</li>
                    <li>Make your changes and write tests if applicable</li>
                    <li>
                      Submit a pull request with a clear description of your
                      changes
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Documentation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Help improve Soplang's documentation, tutorials, or
                    examples:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Fix typos or clarify existing documentation</li>
                    <li>Write tutorials or guides for beginners</li>
                    <li>
                      Create example projects that showcase Soplang's features
                    </li>
                    <li>Help translate documentation into other languages</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Bug Reports and Feature Requests
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Help us improve by reporting bugs or suggesting new
                    features:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Submit detailed bug reports with steps to reproduce</li>
                    <li>Suggest new features or improvements</li>
                    <li>Vote on existing feature requests</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Community Support
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Help grow the Soplang community:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>
                      Answer questions on GitHub Discussions or Stack Overflow
                    </li>
                    <li>Share your experience with Soplang</li>
                    <li>Organize local meetups or workshops</li>
                    <li>Spread the word about Soplang</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Security
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We take the security of Soplang seriously. If you discover a
                  security vulnerability within Soplang, please responsibly
                  disclose it by following these steps:
                </p>

                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mt-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Reporting Security Issues
                  </h3>

                  <ol className="list-decimal pl-6 space-y-2">
                    <li>
                      <strong>Do not</strong> publicly disclose the
                      vulnerability without contacting us first
                    </li>
                    <li>
                      Email your findings to{" "}
                      <a
                        href="mailto:security@soplang.org"
                        className="text-primary hover:underline"
                      >
                        security@soplang.org
                      </a>
                    </li>
                    <li>
                      Include detailed information about the vulnerability,
                      including steps to reproduce
                    </li>
                    <li>
                      Allow us reasonable time to address the issue before
                      public disclosure
                    </li>
                  </ol>

                  <p className="mt-4">
                    For more information, please see our{" "}
                    <a
                      href="/contribute/security"
                      className="text-primary hover:underline font-bold"
                    >
                      Security Policy
                    </a>
                    .
                  </p>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">
                  Security Best Practices
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Keep your Soplang installation updated to the latest version
                  </li>
                  <li>
                    Review the dependencies in your Soplang projects regularly
                  </li>
                  <li>
                    Follow security best practices when deploying Soplang
                    applications
                  </li>
                  <li>Be cautious when running untrusted Soplang code</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contribution Guidelines */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2
                className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
                id="guidelines"
              >
                Contribution Guidelines
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  We've created comprehensive guidelines to help you contribute
                  effectively to Soplang. These guidelines cover code style,
                  pull request processes, testing requirements, and more.
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-4">
                  <p className="font-medium">
                    Please review our detailed{" "}
                    <a
                      href="https://github.com/soplang/soplang/blob/main/docs/CONTRIBUTING.md"
                      className="text-primary hover:underline font-bold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contribution Guidelines on GitHub
                    </a>{" "}
                    before submitting your contributions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Code of Conduct */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2
                className="text-3xl font-bold text-gray-900 dark:text-white mb-6"
                id="code-of-conduct"
              >
                Code of Conduct
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Soplang is committed to providing a welcoming and inclusive
                  environment for everyone. We expect all community members to
                  abide by our Code of Conduct.
                </p>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Our Pledge
                  </h3>
                  <p className="mb-4">
                    In the interest of fostering an open and welcoming
                    environment, we as contributors and maintainers pledge to
                    make participation in our project and our community a
                    harassment-free experience for everyone, regardless of age,
                    body size, disability, ethnicity, gender identity and
                    expression, level of experience, nationality, personal
                    appearance, race, religion, or sexual identity and
                    orientation.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mt-6">
                  <p className="font-medium">
                    Please read our complete{" "}
                    <a
                      href="https://github.com/soplang/soplang/blob/main/CODE_OF_CONDUCT.md"
                      className="text-primary hover:underline font-bold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Code of Conduct on GitHub
                    </a>{" "}
                    for full details on our community standards and enforcement
                    guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started CTA */}
        <section>
          <div className="bg-primary rounded-lg p-8 md:p-12 shadow-lg text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Contribute?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Join us in making programming more accessible through Soplang.
              Your contributions make a difference!
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://github.com/soplang/soplang"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                GitHub Repository
              </a>
              <a
                href="https://github.com/soplang/soplang/blob/main/docs/CONTRIBUTING.md"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent text-white border border-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors"
              >
                Contribution Guidelines
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
