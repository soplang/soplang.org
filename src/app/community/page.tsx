import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community - Soplang",
  description:
    "Join the Soplang community to connect with other developers, find resources, and contribute to the project.",
};

// Community platforms data
const platforms = [
  {
    name: "GitHub",
    description:
      "Contribute to Soplang's development, report issues, and explore the source code.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    url: "https://github.com/soplang/soplang",
    buttonText: "Join on GitHub",
  },
  {
    name: "Discord",
    description:
      "Chat with other Soplang users and developers, get help, and share your work.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
      </svg>
    ),
    url: "https://discord.gg/soplang",
    buttonText: "Join Discord",
  },
  {
    name: "Twitter",
    description:
      "Follow Soplang for the latest news, updates, and announcements.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
    ),
    url: "https://twitter.com/SoplangOrg",
    buttonText: "Follow Us",
  },
  {
    name: "Stack Overflow",
    description: "Ask and answer questions about Soplang programming.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M15 21h-10v-2h10v2zm6-11.665l-1.621-9.335-1.993.346 1.62 9.335 1.994-.346zm-5.964 6.937l-9.746-.975-.186 2.016 9.755.879.177-1.92zm.538-2.587l-9.276-2.608-.526 1.954 9.306 2.5.496-1.846zm1.204-2.413l-8.297-4.864-1.029 1.743 8.298 4.865 1.028-1.744zm1.866-1.467l-5.339-7.829-1.672 1.14 5.339 7.829 1.672-1.14zm-2.644 4.195v8h-12v-8h-2v10h16v-10h-2z" />
      </svg>
    ),
    url: "https://stackoverflow.com/questions/tagged/soplang",
    buttonText: "View Questions",
  },
];

// Community projects data
const projects = [
  {
    title: "Soplang Web Framework",
    author: "Mr Sharafdin",
    description:
      "A lightweight web framework for building web applications with Soplang.",
    stars: 342,
    url: "https://github.com/soplang/web-framework",
  },
  {
    title: "Soplang Data Science Toolkit",
    author: "Omar Tood",
    description:
      "A comprehensive toolkit for data analysis and machine learning with Soplang.",
    stars: 287,
    url: "https://github.com/soplang/data-science-toolkit",
  },
  {
    title: "Soplang Game Engine",
    author: "Ismail Ainte",
    description:
      "A 2D game engine built with Soplang, featuring a simple API for game development.",
    stars: 215,
    url: "https://github.com/soplang/game-engine",
  },
];

export default function CommunityPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join the Soplang Community
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Connect with other Soplang developers, contribute to the project,
            and get help with your Soplang projects.
          </p>
        </div>

        {/* Community Platforms */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Connect with Us
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col"
              >
                <div className="text-primary dark:text-blue-400 mb-4">
                  {platform.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {platform.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">
                  {platform.description}
                </p>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-center"
                >
                  {platform.buttonText}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Community Projects */}
        <section className="mb-20">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Featured Community Projects
            </h2>
            <Link
              href="https://github.com/soplang/community-projects"
              className="text-primary hover:underline"
            >
              View All Projects
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  by {project.author}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-yellow-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {project.stars} stars
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contribute Section */}
        <section className="mb-20">
          <div className="bg-primary rounded-lg p-8 md:p-12 shadow-lg text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Contribute to Soplang</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Soplang is an open-source project that thrives on community
                contributions. There are many ways to get involved and help make
                Soplang better.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Code Contributions</h3>
                <p className="mb-4">
                  Help improve Soplang by contributing code, fixing bugs, or
                  implementing new features.
                </p>
                <Link
                  href="https://github.com/soplang/soplang/blob/main/CONTRIBUTING.md"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:underline inline-flex items-center"
                >
                  Contribution Guidelines
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Documentation</h3>
                <p className="mb-4">
                  Improve Soplang&apos;s documentation, write tutorials, or
                  create learning resources.
                </p>
                <Link
                  href="https://github.com/soplang/docs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:underline inline-flex items-center"
                >
                  Documentation Repository
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Community Support</h3>
                <p className="mb-4">
                  Help other Soplang users by answering questions on forums or
                  reporting bugs.
                </p>
                <Link
                  href="https://stackoverflow.com/questions/tagged/soplang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:underline inline-flex items-center"
                >
                  Stack Overflow
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h2>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md divide-y divide-gray-200 dark:divide-gray-700">
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                How can I get started with Soplang?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                You can get started by{" "}
                <Link
                  href="/downloads"
                  className="text-primary hover:underline"
                >
                  downloading Soplang
                </Link>{" "}
                and following our{" "}
                <Link
                  href="/docs/beginners-guide"
                  className="text-primary hover:underline"
                >
                  beginner&apos;s guide
                </Link>
                . We recommend starting with simple programs to get familiar
                with the language.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Where can I find documentation?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive documentation is available in our{" "}
                <Link href="/docs" className="text-primary hover:underline">
                  documentation section
                </Link>
                , including tutorials, examples, and API references.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                How do I report a bug or request a feature?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                You can report bugs or request features on our{" "}
                <a
                  href="https://github.com/soplang/soplang/issues"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub issues page
                </a>
                . Please check if the issue has already been reported before
                creating a new one.
              </p>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                How can I contribute to Soplang?
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                We welcome contributions! Check out our{" "}
                <a
                  href="https://github.com/soplang/soplang/blob/main/CONTRIBUTING.md"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  contribution guidelines
                </a>{" "}
                to get started. You can contribute code, documentation,
                translations, or help with community support.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
