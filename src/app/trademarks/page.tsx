import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Trademarks - Soplang',
  description: 'Trademark guidelines and policies for Soplang programming language.',
};

export default function TrademarksPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Trademark Policy
        </h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Trademarks
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              The Soplang name and logo are trademarks of the Soplang Software Foundation. These marks help users identify our official software, documentation, and related services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Proper Usage
            </h2>
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Correct Uses
              </h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                <li>Using "Soplang" to refer to our programming language</li>
                <li>Describing your software as "built with Soplang"</li>
                <li>Referencing Soplang in documentation or tutorials</li>
                <li>Using our logo in articles or blog posts about Soplang</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
                Incorrect Uses
              </h3>
              <ul className="list-disc pl-6 text-gray-600 dark:text-gray-300">
                <li>Modifying the Soplang logo or name</li>
                <li>Using our trademarks in your product names</li>
                <li>Suggesting endorsement by Soplang</li>
                <li>Using our trademarks in domain names</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Logo Guidelines
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>When using the Soplang logo:</p>
              <ul className="list-disc pl-6">
                <li>Maintain clear space around the logo</li>
                <li>Do not alter the colors or proportions</li>
                <li>Use the official logo files provided</li>
                <li>Ensure the logo is clearly visible</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Permission Requests
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              For uses not covered by these guidelines, please contact us for permission:
              <br />
              Email: trademarks@soplang.org
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Reporting Violations
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              If you find any misuse of Soplang trademarks, please report it to:
              <br />
              Email: legal@soplang.org
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Changes to This Policy
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              We reserve the right to update this trademark policy at any time. Any changes will be posted on this page with the updated date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
} 