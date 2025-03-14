import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use - Soplang',
  description: 'Terms of Use for Soplang programming language.',
};

export default function TermsPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Terms of Use
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              By accessing and using Soplang, you accept and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, you must not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              2. License and Usage
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Soplang is open-source software released under the MIT License. You are free to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Use Soplang for personal and commercial purposes</li>
              <li>Modify and distribute the software</li>
              <li>Include Soplang in your own projects</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              You agree to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
              <li>Use the software responsibly and legally</li>
              <li>Not attempt to disrupt or compromise our services</li>
              <li>Maintain the security of your account and credentials</li>
              <li>Report any security vulnerabilities you discover</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              The Soplang name, logo, and branding are trademarks of the Soplang Software Foundation. While the software is open-source, these trademarks may not be used without permission.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              5. Disclaimer of Warranties
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Soplang is provided "as is" without warranty of any kind, either express or implied. We do not guarantee that the software will be error-free or uninterrupted.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              6. Limitation of Liability
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              In no event shall Soplang Software Foundation be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the software.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              7. Changes to Terms
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We reserve the right to modify these terms at any time. We will notify users of any material changes through our website or email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              8. Contact Information
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              For questions about these Terms of Use, please contact us at:
              <br />
              Email: legal@soplang.org
              <br />
              Address: Soplang Software Foundation
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 