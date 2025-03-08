import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: 'About Soplang - Our Story, Mission, and Team',
  description: 'Learn about Soplang, our mission to create a modern programming language inspired by Python, and the team behind it.',
};

// Team members data
const teamMembers = [
  {
    name: "Mr Sharafdin",
    role: "Lead Developer",
    bio: "Mr Sharafdin is the creator and lead developer of Soplang. With over 15 years of experience in programming language design, he leads the core development team and sets the technical direction for Soplang.",
    image: "/images/team/sharafdin.jpg",
    social: {
      github: "https://github.com/sharafdin",
      twitter: "https://twitter.com/sharafdin",
      linkedin: "https://linkedin.com/in/sharafdin",
    },
  },
  {
    name: "Omar Tood",
    role: "Developer Advocate",
    bio: "Omar is responsible for growing and supporting the Soplang community. He creates tutorials, documentation, and educational content to help developers get the most out of Soplang.",
    image: "/images/team/omar.jpg",
    social: {
      github: "https://github.com/omartood",
      twitter: "https://twitter.com/omartood",
      linkedin: "https://linkedin.com/in/omartood",
    },
  },
  {
    name: "Ismail Ainte",
    role: "Core Developer",
    bio: "Ismail focuses on performance optimization and the standard library. His work ensures that Soplang remains fast, efficient, and feature-rich for developers around the world.",
    image: "/images/team/ismail.jpg",
    social: {
      github: "https://github.com/ismailainte",
      twitter: "https://twitter.com/ismailainte",
      linkedin: "https://linkedin.com/in/ismailainte",
    },
  },
];

// Timeline data
const timeline = [
  {
    year: "2020",
    title: "The Beginning",
    description:
      "Soplang was conceived as a side project by Mr Sharafdin, who wanted to create a language that combined Python's readability with modern performance features.",
  },
  {
    year: "2021",
    title: "First Alpha Release",
    description:
      "After months of development, the first alpha version of Soplang was released to a small group of testers, who provided valuable feedback for improvement.",
  },
  {
    year: "2022",
    title: "Beta Release & Community Growth",
    description:
      "Soplang entered beta, and the community began to grow. The first set of standard libraries was developed, and early adopters started building real-world applications.",
  },
  {
    year: "2023",
    title: "Soplang 1.0 & Beyond",
    description:
      "With the release of Soplang 1.0, the language reached stability and production readiness. The team continues to expand the ecosystem and improve the language.",
  },
];

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
            Learn about our mission, story, and the team behind Soplang.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Our Mission
                </h2>
                <div className="prose prose-lg dark:prose-invert">
                  <p>
                    At Soplang, our mission is to create a programming language
                    that combines the readability and ease of use of Python with
                    modern performance features and language constructs.
                  </p>
                  <p>
                    We believe that programming should be accessible, enjoyable,
                    and productive. Soplang is designed with these principles in
                    mind, offering a clean syntax that's easy to learn while
                    providing the performance and features needed for real-world
                    applications.
                  </p>
                  <p>
                    As an open-source project, we're committed to building a
                    vibrant, inclusive community where developers of all skill
                    levels can contribute, learn, and create amazing things
                    together.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2 bg-primary/10 dark:bg-primary/20 p-8 md:p-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Core Values
                </h2>
                <ul className="space-y-4">
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Simplicity
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We believe in clean, readable code that expresses intent
                        clearly and concisely.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Performance
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We strive for excellent performance without sacrificing
                        developer productivity or code readability.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Community
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We foster an inclusive, supportive community where
                        everyone can contribute and grow.
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="mr-4 flex-shrink-0">
                      <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        Innovation
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        We embrace new ideas and continuously evolve to meet the
                        changing needs of developers.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Our Story
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-900"></div>

                  {/* Content */}
                  <div className="w-5/12"></div>
                  <div className="w-5/12 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="text-primary font-bold text-xl mb-2">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Meet the Team
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-4xl">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <div className="text-primary font-medium mb-4">
                    {member.role}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {member.bio}
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href={member.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Join Us Section */}
        <section>
          <div className="bg-primary rounded-lg p-8 md:p-12 shadow-lg text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Join the Soplang Team</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              We're always looking for talented individuals who are passionate
              about programming languages and want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/careers"
                className="bg-white text-primary font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
              >
                View Open Positions
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