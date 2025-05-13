import Link from "next/link";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Soplang Documentation - Introduction",
  description:
    "Introduction to Soplang, a Somali-first programming language that makes coding intuitive, inclusive, and accessible for Somali peoples.",
};

export default function DocsPage() {
  return (
    <div className="px-4 py-8 prose prose-lg lg:py-4 dark:prose-invert max-w-none sm:px-6 lg:px-2 sm:py-12">
      <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-4xl text-primary">
        Introduction to Soplang
      </h1>

      <p className="text-lg text-gray-700 sm:text-xl dark:text-gray-300">
        Welcome to the official documentation for Soplang, a Somali-first programming language that
        makes coding intuitive, inclusive, and accessible.
      </p>

      <div className="p-4 my-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 sm:p-6">
        <h3 className="mt-0 mb-4 text-xl sm:text-2xl text-primary dark:text-blue-400">
          What is Soplang?
        </h3>
        <p className="mb-0 text-base text-gray-700 sm:text-lg dark:text-gray-300">
          <strong>Soplang</strong> (short for <em>Somali Programming Language</em>) is a
          culturally-rooted programming language designed and developed by{" "}
          <strong>Mr Sharafdin</strong> (Sharafdin Yusuf Sharafdin). It allows developers to write
          code in <strong>native Somali syntax</strong> using familiar keywords, expressions, and
          structures — making programming feel natural and accessible.
        </p>
      </div>

      <h2 className="mt-12 mb-6 text-2xl font-bold sm:text-3xl">Language Goals</h2>

      <ul className="space-y-4 text-base text-gray-700 sm:text-lg dark:text-gray-300">
        <li className="flex items-start">
          <span className="mr-2 text-primary dark:text-blue-400">•</span>
          <div>
            <strong>Simplicity</strong>: Clean, easy-to-read syntax designed to make programming
            concepts clear and approachable.
          </div>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-primary dark:text-blue-400">•</span>
          <div>
            <strong>Education</strong>: Built with learners in mind, making programming accessible
            to students and new developers.
          </div>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-primary dark:text-blue-400">•</span>
          <div>
            <strong>Localization</strong>: Native Somali throughout, embracing Somali language and
            cultural context in programming.
          </div>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-primary dark:text-blue-400">•</span>
          <div>
            <strong>Accessibility</strong>: Removes English-language barriers, opening programming
            to a wider audience of Somali speakers.
          </div>
        </li>
      </ul>

      <h2 className="mt-12 mb-6 text-2xl font-bold sm:text-3xl">Current Version: Soplang 2.0</h2>

      <h3 className="mb-4 text-xl font-bold sm:text-2xl">Key Features</h3>
      <ul className="space-y-4 text-base text-gray-700 sm:text-lg dark:text-gray-300">
        <li className="flex items-start">
          <span className="mr-2 text-primary dark:text-blue-400">•</span>
          <div>
            <strong>Dual Typing</strong>: <code>door</code> for dynamic, <code>tiro</code>,{" "}
            <code>qoraal</code>, etc. for static typing flexibility.
          </div>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-primary dark:text-blue-400">•</span>
          <div>
            <strong>Object-Oriented Programming</strong>: Full support for OOP with{" "}
            <code>fasalka</code>, <code>ka_dhaxal</code>, <code>cusub</code>, <code>nafta</code>.
          </div>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-primary dark:text-blue-400">•</span>
          <div>
            <strong>Control Flow</strong>: Clean syntax for conditionals (<code>haddii</code>,{" "}
            <code>haddii_kale</code>, <code>haddii_kalena</code>) and loops (<code>ku_celi</code>,{" "}
            <code>inta_ay</code>).
          </div>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-primary dark:text-blue-400">•</span>
          <div>
            <strong>Error Handling</strong>: With <code>isku_day</code>, <code>qabo</code> for
            robust error management.
          </div>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-primary dark:text-blue-400">•</span>
          <div>
            <strong>Package Manager</strong>: Coming soon via the <code>sop</code> CLI.
          </div>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-primary dark:text-blue-400">•</span>
          <div>
            <strong>Standard Library</strong>: Includes Math, File System, Network, and Date/Time
            modules.
          </div>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-primary dark:text-blue-400">•</span>
          <div>
            <strong>Interpreter</strong>: Python-based (compiler planned for future release).
          </div>
        </li>
      </ul>

      <h2 className="mt-12 mb-6 text-2xl font-bold sm:text-3xl">Example Code</h2>

      <CodeWindow
        code={`// Hello World
qor("Hello, World!")

// Variables
door name = "Faarax"
qoraal title = "Soplang Developer"
tiro age = 10

qor("Name: " + name)
qor("Title: " + title)
qor("Age: " + qoraal(age))

// Function
howl greet(person) {
    soo_celi "Hello, " + person + "!"
}
qor(greet(name))

// If/Else
haddii (age > 18) {
    qor("You are an adult")
} haddii_kalena {
    qor("You are underage")
}

// For Loop
ku_celi i min 1 ilaa 5 {
    qor(i)
}

// While Loop
tiro counter = 5
inta_ay (counter > 0) {
    qor(counter)
    counter = counter - 1
}

qor("Done!")`}
        title="example.sop"
      />

      <h2 className="mt-12 mb-6 text-2xl font-bold sm:text-3xl">Tooling</h2>

      <div className="grid grid-cols-1 gap-6 my-8 sm:grid-cols-2">
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h3 className="mt-0 mb-2 text-xl font-bold text-primary dark:text-blue-400">
            CLI Tool (<code>sop</code>)
          </h3>
          <p className="mb-0 text-gray-600 dark:text-gray-300">
            For running code, managing projects, and package management.
          </p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h3 className="mt-0 mb-2 text-xl font-bold text-primary dark:text-blue-400">
            VS Code Extension
          </h3>
          <p className="mb-0 text-gray-600 dark:text-gray-300">
            Syntax highlighting, inline docs, and code execution.
          </p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h3 className="mt-0 mb-2 text-xl font-bold text-primary dark:text-blue-400">
            REPL (Interactive)
          </h3>
          <p className="mb-0 text-gray-600 dark:text-gray-300">
            Terminal-based environment with history and highlighting.
          </p>
        </div>
        <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <h3 className="mt-0 mb-2 text-xl font-bold text-primary dark:text-blue-400">
            sopScript (Browser Runtime)
          </h3>
          <p className="mb-0 text-gray-600 dark:text-gray-300">
            For online execution and learning demos.
          </p>
        </div>
      </div>

      <h2 className="mt-12 mb-6 text-2xl font-bold sm:text-3xl">Getting Started</h2>

      <p className="mb-8 text-lg text-gray-700 sm:text-xl dark:text-gray-300">
        Ready to dive in? Here are some resources to help you get started with Soplang:
      </p>

      <div className="grid grid-cols-1 gap-6 my-8 sm:grid-cols-2">
        <Link
          href="/docs/installation"
          className="block p-6 transition-all duration-200 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 hover:shadow-md dark:border-gray-700 hover:border-primary dark:hover:border-blue-400"
        >
          <h3 className="mt-0 mb-2 text-xl font-bold text-primary dark:text-blue-400">
            Installation
          </h3>
          <p className="mb-0 text-gray-600 dark:text-gray-300">
            Learn how to install Soplang on your system.
          </p>
        </Link>
        <Link
          href="/docs/quick-start"
          className="block p-6 transition-all duration-200 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 hover:shadow-md dark:border-gray-700 hover:border-primary dark:hover:border-blue-400"
        >
          <h3 className="mt-0 mb-2 text-xl font-bold text-primary dark:text-blue-400">
            Quick Start
          </h3>
          <p className="mb-0 text-gray-600 dark:text-gray-300">
            Write your first Soplang program and learn the basics.
          </p>
        </Link>
        <Link
          href="/docs/syntax-basics"
          className="block p-6 transition-all duration-200 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 hover:shadow-md dark:border-gray-700 hover:border-primary dark:hover:border-blue-400"
        >
          <h3 className="mt-0 mb-2 text-xl font-bold text-primary dark:text-blue-400">
            Syntax Basics
          </h3>
          <p className="mb-0 text-gray-600 dark:text-gray-300">
            Understand the fundamental syntax of Soplang.
          </p>
        </Link>
        <Link
          href="/docs/tutorials/cli-app"
          className="block p-6 transition-all duration-200 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 hover:shadow-md dark:border-gray-700 hover:border-primary dark:hover:border-blue-400"
        >
          <h3 className="mt-0 mb-2 text-xl font-bold text-primary dark:text-blue-400">Tutorials</h3>
          <p className="mb-0 text-gray-600 dark:text-gray-300">
            Follow step-by-step tutorials to build real applications.
          </p>
        </Link>
      </div>

      <h2 className="mt-12 mb-6 text-2xl font-bold sm:text-3xl">Community & Contribution</h2>

      <p className="mb-6 text-lg text-gray-700 sm:text-xl dark:text-gray-300">
        Soplang is <strong>open-source</strong> under the <strong>MIT License</strong>. Everyone is
        welcome to contribute to its development!
      </p>

      <div className="flex flex-col items-center justify-center gap-6 mt-10 sm:flex-row">
        <Link
          href="/contribute"
          className="px-6 py-3 font-semibold text-white transition-colors rounded-lg bg-primary hover:bg-primary-dark"
        >
          Contribute to Soplang
        </Link>
        <Link
          href="https://github.com/soplang/soplang"
          target="_blank"
          className="flex items-center px-6 py-3 font-semibold text-white transition-colors bg-gray-800 rounded-lg hover:bg-black"
        >
          <span>GitHub Repository</span>
          <span className="ml-2">↗</span>
        </Link>
      </div>

      <DocNavigation
        prevPage={{
          href: "/docs",
          hidden: true, // Hide the previous link on the main docs page
        }}
        nextPage={{
          href: "/docs/getting-started",
          title: "Quick Start",
          description: "Write your first Soplang program and learn the basics",
        }}
      />
    </div>
  );
}
