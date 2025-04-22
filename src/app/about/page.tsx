import Link from "next/link";

export const metadata = {
  title: "About Soplang - The Somali Programming Language",
  description:
    "Learn about Soplang, a Somali-first programming language that makes coding intuitive, inclusive, and accessible for Somali peoples.",
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
            Soplang is a Somali-first programming language that makes coding
            intuitive, inclusive, and accessible for Somali peoples.
          </p>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Overview
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  <strong>Soplang</strong> (short for{" "}
                  <em>Somali Programming Language</em>) is a culturally-rooted
                  programming language designed and developed by{" "}
                  <strong>Mr Sharafdin</strong> (Sharafdin Yusuf Sharafdin).
                </p>
                <p>
                  It allows developers to write code in{" "}
                  <strong>native Somali syntax</strong> using familiar keywords,
                  expressions, and structures — making programming feel natural
                  and accessible.
                </p>
                <p className="text-xl font-semibold italic text-center border-l-4 border-primary pl-4 py-2 my-6">
                  "Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo!"
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Language Goals */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Language Goals
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Simplicity
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Clean, easy-to-read syntax designed to make programming
                    concepts clear and approachable.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Education
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Built with learners in mind, making programming accessible
                    to students and new developers.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Localization
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Native Somali throughout, embracing Somali language and
                    cultural context in programming.
                  </p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    Accessibility
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Removes English-language barriers, opening programming to a
                    wider audience of Somali speakers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Version */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Current Version: Soplang 2.0
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Key Features
                </h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Dual Typing:</strong> <code>door</code> for dynamic,{" "}
                    <code>tiro</code>, <code>qoraal</code>, etc. for static
                  </li>
                  <li>
                    <strong>Object-Oriented Programming:</strong> with{" "}
                    <code>fasalka</code>, <code>ka_dhaxal</code>,{" "}
                    <code>cusub</code>, <code>nafta</code>
                  </li>
                  <li>
                    <strong>Control Flow:</strong> <code>haddii</code>,{" "}
                    <code>haddii_kale</code>, <code>haddii_kalena</code>, loops
                    (<code>ku_celi</code>, <code>inta_ay</code>)
                  </li>
                  <li>
                    <strong>Error Handling:</strong> <code>isku_day</code>,{" "}
                    <code>qabo</code>
                  </li>
                  <li>
                    <strong>Package Manager:</strong> Coming soon via the{" "}
                    <code>sop</code> CLI
                  </li>
                  <li>
                    <strong>Standard Library:</strong> Includes Math, File
                    System, Network, and Date/Time
                  </li>
                  <li>
                    <strong>Interpreter:</strong> Python-based (compiler planned
                    for future release)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tooling */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Tooling
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    CLI Tool (<code>sop</code>)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    For running code, managing projects, and package management
                  </p>
                </div>
                <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    VS Code Extension
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Syntax highlighting, inline docs, and code execution
                  </p>
                </div>
                <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    REPL (Interactive)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Terminal-based environment with history and highlighting
                  </p>
                </div>
                <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    sopScript (Browser Runtime)
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    For online execution and learning demos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Can Use It */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Who Can Use It?
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Students, teachers, new developers</li>
                  <li>Somali learners exploring code for the first time</li>
                  <li>
                    Anyone passionate about coding in their native language
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Community & Contribution */}
        <section className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Community & Contribution
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Soplang is <strong>open-source</strong> under the{" "}
                  <strong>MIT License</strong>.
                </p>
                <p>
                  <strong>Everyone is welcome</strong> to contribute!
                </p>
                <p>
                  GitHub:{" "}
                  <a
                    href="https://github.com/soplang/soplang"
                    className="text-primary hover:underline"
                  >
                    github.com/soplang/soplang
                  </a>
                </p>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                  Contributors:
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
