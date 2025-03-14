import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Soplang',
  description: 'Privacy Policy for Soplang programming language.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Privacy Policy
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              At Soplang, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our programming language, website, and related services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Information We Collect
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Personal Information
            </h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300 mb-4">
              <li>Name and email address when you create an account</li>
              <li>GitHub username when connecting your account</li>
              <li>Usage data and preferences</li>
              <li>Information you provide in support requests</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              Technical Information
            </h3>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>IP address and browser information</li>
              <li>Device information</li>
              <li>Usage statistics and crash reports</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>To provide and maintain our services</li>
              <li>To improve and personalize your experience</li>
              <li>To communicate with you about updates and changes</li>
              <li>To detect and prevent security incidents</li>
              <li>To analyze usage patterns and optimize performance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Data Security
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We implement appropriate technical and organizational security measures to protect your information. However, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Your Rights
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email: privacy@soplang.org
              <br />
              Address: Soplang Software Foundation
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 