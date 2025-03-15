import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contribute to Soplang',
  description: 'Learn how to contribute to the Soplang programming language - code, documentation, translations, and more.',
};

export default function ContributePage() {
  // Ways to contribute
  const contributionWays = [
    {
      title: 'Code Contributions',
      description: 'Help improve Soplang by contributing code to the core language, standard library, or tools.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      link: '/community/contribute/code',
    },
    {
      title: 'Documentation',
      description: 'Help improve the documentation by fixing errors, adding examples, or writing tutorials.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      link: '/community/contribute/documentation',
    },
    {
      title: 'Bug Reports',
      description: 'Report bugs or suggest improvements to help make Soplang more stable and feature-rich.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      link: '/community/contribute/bugs',
    },
    {
      title: 'Translations',
      description: 'Help translate Soplang documentation and resources into different languages.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      link: '/community/contribute/translations',
    },
    {
      title: 'Community Support',
      description: 'Help other users by answering questions in forums, chat, or mailing lists.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
      link: '/community/forums',
    },
    {
      title: 'Financial Support',
      description: 'Donate to the Soplang project to help fund development and infrastructure.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      link: '/community/contribute/donate',
    },
  ];

  // Current contributors
  const contributors = [
    { name: 'Mr Sharafdin', role: 'Core Developer', contributions: 247, avatar: '/images/avatars/sharafdin.jpg' },
    { name: 'Omar Tood', role: 'Documentation Lead', contributions: 183, avatar: '/images/avatars/omar.jpg' },
    { name: 'Ismail Ainte', role: 'Community Manager', contributions: 156, avatar: '/images/avatars/ismail.jpg' },
  ];

  return (
    <div className="container-custom py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Contribute to Soplang
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Soplang is an open-source project that thrives on community contributions. 
            There are many ways to contribute, regardless of your skill level or background.
          </p>
        </div>

        {/* Why Contribute Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-[var(--border-color)] p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 text-primary">Why Contribute?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Improve Your Skills</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Contributing to Soplang is a great way to improve your programming skills and learn from experienced developers.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Join the Community</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Become part of a vibrant community of developers passionate about creating a better programming language.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-4">
              <div className="bg-primary/10 rounded-full p-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Make an Impact</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Your contributions can help thousands of developers who use Soplang around the world.
              </p>
            </div>
          </div>
        </div>

        {/* Ways to Contribute */}
        <h2 className="text-2xl font-bold mb-6 text-primary">Ways to Contribute</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contributionWays.map((way, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-[var(--border-color)] p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 mt-1">{way.icon}</div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">{way.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {way.description}
                  </p>
                  <Link href={way.link} className="text-primary hover:underline text-sm font-medium">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Getting Started */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">1. Set Up Your Development Environment</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Before you can contribute to Soplang, you'll need to set up your development environment:
              </p>
              <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
                <pre className="font-mono text-sm overflow-x-auto">
                  <code>{`# Clone the repository
git clone https://github.com/soplang/soplang.git
cd soplang

# Install dependencies
npm install

# Run tests to make sure everything is working
npm test`}</code>
                </pre>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                For more detailed instructions, see the <Link href="/docs/development/setup" className="text-primary hover:underline">Development Setup Guide</Link>.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">2. Find an Issue to Work On</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">
                We maintain a list of beginner-friendly issues that are good starting points for new contributors:
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mb-4">
                <li>Look for issues labeled <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">good first issue</span> or <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded text-xs">help wanted</span></li>
                <li>Check the <Link href="/community/contribute/roadmap" className="text-primary hover:underline">project roadmap</Link> for upcoming features</li>
                <li>Browse the <Link href="/community/forums" className="text-primary hover:underline">forums</Link> for user-requested features</li>
              </ul>
              <a 
                href="https://github.com/soplang/soplang/issues" 
                className="btn-primary inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse Issues on GitHub
              </a>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">3. Submit Your Contribution</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Once you've made your changes, submit a pull request:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Create a new branch for your changes</li>
                <li>Make your changes and commit them with clear, descriptive commit messages</li>
                <li>Push your branch to your fork</li>
                <li>Open a pull request against the main Soplang repository</li>
                <li>Wait for feedback from maintainers</li>
              </ol>
            </div>
          </div>
        </div>

        {/* Contribution Guidelines */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-[var(--border-color)] p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">Contribution Guidelines</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Code Style</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We follow ESLint and Prettier standards. Please ensure your code adheres to our style guide.
                Use the provided linters and formatters to check your code before submitting.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Testing</h3>
              <p className="text-gray-600 dark:text-gray-400">
                All code contributions should include appropriate tests. We use Jest for our test suite.
                Make sure all tests pass before submitting your pull request.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Documentation</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Code should be well-documented with docstrings and comments where appropriate.
                If you're adding a new feature, please also update the relevant documentation.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Pull Requests</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Keep pull requests focused on a single change. If you have multiple changes to make,
                submit multiple pull requests. Provide a clear description of the problem and solution.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/community/contribute/guidelines" className="text-primary hover:underline">
              Read the full contribution guidelines →
            </Link>
          </div>
        </div>

        {/* Top Contributors */}
        <h2 className="text-2xl font-bold mb-6 text-primary">Top Contributors</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contributors.map((contributor, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-[var(--border-color)] p-6 flex items-center"
            >
              <div className="w-16 h-16 bg-gray-200 dark:bg-gray-600 rounded-full mr-4 overflow-hidden flex-shrink-0">
                {/* Placeholder for avatar */}
                <div className="w-full h-full flex items-center justify-center text-2xl font-bold text-gray-500 dark:text-gray-400">
                  {contributor.name.charAt(0)}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{contributor.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{contributor.role}</p>
                <p className="text-sm text-primary mt-1">{contributor.contributions} contributions</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="https://github.com/soplang/soplang/graphs/contributors" 
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Contributors
          </a>
        </div>

        {/* Contact */}
        <div className="bg-primary/5 rounded-lg p-8 mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Getting Started?</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            If you have questions about contributing to Soplang, don't hesitate to reach out to us.
            We're always happy to help new contributors get started.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/community/forums" className="btn-primary">
              Ask in the Forums
            </Link>
            <a 
              href="https://discord.gg/soplang" 
              className="bg-[#5865F2] text-white px-4 py-2 rounded hover:opacity-90 transition-opacity flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join our Discord
            </a>
            <a 
              href="mailto:contribute@soplang.org" 
              className="bg-gray-700 text-white px-4 py-2 rounded hover:opacity-90 transition-opacity"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 