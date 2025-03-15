import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Report a Security Issue - Soplang',
  description: 'Learn how to responsibly report security vulnerabilities in Soplang and understand our security response process.',
};

export default function SecurityReportPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Report a Security Issue
        </h1>

        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-5 mb-8 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>Do not report security vulnerabilities through public GitHub issues or community forums.</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg">
            The Soplang team takes security vulnerabilities seriously. We appreciate your efforts to responsibly disclose your findings and will make every effort to acknowledge your contributions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Reporting a Vulnerability
          </h2>

          <p>
            To report a security issue, please email <a href="mailto:security@soplang.org" className="text-primary hover:underline">security@soplang.org</a> with a detailed description of the issue, including:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Description of the vulnerability</li>
            <li>Steps to reproduce the issue</li>
            <li>Potential impact of the vulnerability</li>
            <li>Suggested mitigation or fix (if available)</li>
            <li>Your name and contact information (for acknowledgment purposes, optional)</li>
          </ul>

          <p>
            You can use our PGP key to encrypt sensitive information in your report:
          </p>

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto my-6">
            <pre className="text-sm">
              <code>
{`-----BEGIN PGP PUBLIC KEY BLOCK-----
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
=UXKK
-----END PGP PUBLIC KEY BLOCK-----`}
              </code>
            </pre>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Security Response Process
          </h2>

          <p>
            When we receive a security bug report, we will take the following steps:
          </p>

          <ol className="list-decimal pl-6 space-y-2 mb-6">
            <li>Confirm the vulnerability and determine its scope</li>
            <li>Acknowledge receipt of the vulnerability report (typically within 24-48 hours)</li>
            <li>Work on a fix and release plan</li>
            <li>Release patches for all supported versions</li>
            <li>Publicly disclose the vulnerability after patches are available</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Disclosure Policy
          </h2>

          <p>
            We follow the principle of responsible disclosure:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Security issues should be disclosed privately to <a href="mailto:security@soplang.org" className="text-primary hover:underline">security@soplang.org</a></li>
            <li>We request a 90-day disclosure deadline from the time we confirm the vulnerability</li>
            <li>We will acknowledge your report within 48 hours</li>
            <li>We will provide an estimated timeline for a fix within 1 week</li>
            <li>We will notify you when the vulnerability has been fixed</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Security Advisories
          </h2>

          <p>
            We publish security advisories for all confirmed vulnerabilities on our{" "}
            <a href="https://github.com/soplang/soplang/security/advisories" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              GitHub Security Advisories page
            </a>{" "}
            and on our{" "}
            <Link href="/security/advisories" className="text-primary hover:underline">
              Security Advisories
            </Link>{" "}
            page.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Scope
          </h2>

          <p>
            The following are in scope for security vulnerability reports:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Soplang core language implementation</li>
            <li>Standard library modules</li>
            <li>Official documentation</li>
            <li>Official website (soplang.org)</li>
            <li>Package manager and distribution infrastructure</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Security Researcher Recognition
          </h2>

          <p>
            We believe in acknowledging the valuable work of security researchers. Unless you request to remain anonymous, we will acknowledge your contribution in:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>The security advisory for the vulnerability</li>
            <li>The release notes for the version containing the fix</li>
            <li>Our <Link href="/security/hall-of-fame" className="text-primary hover:underline">Security Researcher Hall of Fame</Link></li>
          </ul>

          <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-6 my-8">
            <h3 className="text-xl font-semibold text-primary mb-4">Safe Harbor</h3>
            <p className="mb-0">
              We consider security research conducted in accordance with this policy to be:
            </p>
            <ul className="list-disc pl-6 mt-2 mb-0">
              <li>Authorized in accordance with the Computer Fraud and Abuse Act (CFAA)</li>
              <li>Exempt from DMCA prohibitions on circumvention</li>
              <li>Exempt from restrictions in our Terms of Service that would prohibit security research</li>
              <li>Lawful, helpful to the overall security of the Internet, and conducted in good faith</li>
            </ul>
            <p className="mt-4 mb-0">
              You are expected to comply with all applicable laws. If legal action is initiated by a third party against you and you have complied with this policy, we will take steps to make it known that your actions were conducted in compliance with this policy.
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
            Contact
          </h2>

          <p>
            For security concerns, please contact us at:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Email: <a href="mailto:security@soplang.org" className="text-primary hover:underline">security@soplang.org</a></li>
            <li>PGP Key: Available above or on public key servers with fingerprint <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">4995 2E6B F156 5F91 2414 4309 7EEE 92B3 7794 25D7</code></li>
          </ul>

          <p>
            For general inquiries, please use our{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact form
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
} 