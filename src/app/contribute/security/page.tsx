import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Security Policy - Soplang",
  description:
    "Learn about the security practices and vulnerability reporting processes for the Soplang programming language.",
  keywords: "Soplang, security, vulnerability, disclosure, reporting",
};

export default function SecurityPolicyPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Soplang Security Policy
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We take the security of Soplang seriously. This policy outlines how
            to report vulnerabilities and our commitment to addressing security
            issues.
          </p>
        </div>

        {/* Security Policy Content */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Reporting a Vulnerability
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  <strong>
                    Do not report security vulnerabilities through public GitHub
                    issues or community forums.
                  </strong>
                </p>

                <p>
                  Please report security vulnerabilities by emailing our
                  security team at:{" "}
                  <a
                    href="mailto:security@soplang.org"
                    className="text-primary hover:underline font-semibold"
                  >
                    security@soplang.org
                  </a>
                </p>

                <p>Please include the following information in your report:</p>

                <ul>
                  <li>Type of vulnerability</li>
                  <li>Path or location of the vulnerable code</li>
                  <li>Step-by-step instructions to reproduce the issue</li>
                  <li>Explanation of potential impacts</li>
                  <li>Suggested fix, if available</li>
                </ul>

                <p>
                  Our security team will acknowledge your email within 48 hours,
                  and you'll receive a more detailed response within 72 hours
                  indicating the next steps in handling your report.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Disclosure Policy
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>When we receive a security vulnerability report, we will:</p>

                <ol>
                  <li>Confirm the vulnerability and determine its scope</li>
                  <li>Develop and test a fix</li>
                  <li>Prepare an update that addresses the vulnerability</li>
                  <li>
                    Release the update and credit the reporter (unless they
                    prefer to remain anonymous)
                  </li>
                </ol>

                <p>
                  We ask that you give us reasonable time to address the
                  vulnerability before any public disclosure. We typically
                  address critical issues within 7-14 days.
                </p>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Security Best Practices
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>To keep your Soplang projects secure:</p>

                <ul>
                  <li>
                    Keep Soplang and its dependencies updated to the latest
                    versions
                  </li>
                  <li>
                    Follow secure coding practices, especially when handling
                    user input
                  </li>
                  <li>Regularly review and update your dependencies</li>
                  <li>Be cautious when running untrusted Soplang code</li>
                  <li>
                    Use dependency scanning tools to identify vulnerabilities
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Bug Bounty Program
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <p>
                  While we currently do not have a formal bug bounty program, we
                  deeply appreciate the efforts of security researchers and the
                  community in identifying and reporting vulnerabilities.
                </p>

                <p>
                  We acknowledge all reporters in our security releases unless
                  they wish to remain anonymous.
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Additional Resources
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Security Updates
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Stay informed about security vulnerabilities and updates.
              </p>
              <Link
                href="/blog?category=security"
                className="text-primary hover:underline font-medium"
              >
                View Security Bulletins
              </Link>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Secure Coding Guidelines
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Learn about secure coding practices specific to Soplang.
              </p>
              <Link
                href="/docs/security"
                className="text-primary hover:underline font-medium"
              >
                View Secure Coding Guide
              </Link>
            </div>
          </div>
        </div>

        {/* Return to Contribute Page */}
        <div className="mt-12 text-center">
          <Link
            href="/contribute"
            className="btn-primary inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Return to Contribute Page
          </Link>
        </div>
      </div>
    </div>
  );
}
