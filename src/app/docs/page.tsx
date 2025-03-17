import Link from "next/link";

export const metadata = {
  title: 'Soplang Documentation - Introduction',
  description: 'Introduction to Soplang, the first Somali programming language designed for simplicity and performance.',
};

export default function DocsPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Introduction to Soplang</h1>
      
      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
        Welcome to the official documentation for Soplang, a modern Somali programming
        language that combines simplicity, readability, and performance.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/30 p-4 sm:p-6 rounded-lg my-8">
        <h3 className="text-xl sm:text-2xl text-primary dark:text-blue-400 mt-0 mb-4">What is Soplang?</h3>
        <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-0">
          Soplang is a high-level, general-purpose programming language designed
          with a focus on code readability and developer productivity. It's the first
          programming language developed with Somali developers in mind, featuring intuitive
          syntax and powerful language features.
        </p>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6">Key Features</h2>

      <ul className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
        <li className="flex items-start">
          <span className="text-primary dark:text-blue-400 mr-2">•</span>
          <div>
            <strong>Clean, Readable Syntax</strong>: Soplang uses indentation to
            define code blocks, making your code clean and consistent.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary dark:text-blue-400 mr-2">•</span>
          <div>
            <strong>Strong, Dynamic Typing</strong>: Variables are dynamically
            typed, but the language enforces type consistency during operations.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary dark:text-blue-400 mr-2">•</span>
          <div>
            <strong>Performance Optimized</strong>: Soplang includes a
            just-in-time compiler that provides significant performance
            improvements over traditional interpreted languages.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary dark:text-blue-400 mr-2">•</span>
          <div>
            <strong>Modern Language Features</strong>: Includes pattern matching,
            async/await, and other modern programming paradigms.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary dark:text-blue-400 mr-2">•</span>
          <div>
            <strong>Comprehensive Standard Library</strong>: Comes with batteries
            included - a rich set of modules and functions for common tasks.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary dark:text-blue-400 mr-2">•</span>
          <div>
            <strong>Cross-Platform</strong>: Runs on Windows, macOS, Linux, and
            more.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary dark:text-blue-400 mr-2">•</span>
          <div>
            <strong>Somali-Focused Documentation</strong>: Available in both English and Somali
            to make programming more accessible to Somali speakers.
          </div>
        </li>
      </ul>

      <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6">A Simple Example</h2>

      <pre className="bg-gray-100 dark:bg-gray-800 p-4 sm:p-6 rounded-lg overflow-x-auto text-sm sm:text-base">
        <code>{`# This is a simple Soplang program
def greet(name):
    """Return a greeting message"""
    return f"Hello, {name}! Welcome to Soplang."

# Using the function
message = greet("World")
print(message)

# Working with lists
numbers = [1, 2, 3, 4, 5]
squared = [n * n for n in numbers]
print(f"Original: {numbers}")
print(f"Squared: {squared}")

# Simple class definition
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def describe(self):
        return f"{self.name} is {self.age} years old."

# Creating an object
alice = Person("Alice", 30)
print(alice.describe())`}</code>
      </pre>

      <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6">Philosophy</h2>

      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">
        Soplang follows these key principles:
      </p>

      <ol className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
        <li className="flex items-start">
          <span className="font-bold text-primary dark:text-blue-400 mr-2">1.</span>
          <div>
            <strong>Readability counts</strong>: Code is read more often than it's
            written. Soplang prioritizes clear, readable syntax.
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold text-primary dark:text-blue-400 mr-2">2.</span>
          <div>
            <strong>Explicit is better than implicit</strong>: Soplang avoids
            hidden behaviors and magic methods where possible.
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold text-primary dark:text-blue-400 mr-2">3.</span>
          <div>
            <strong>Simple is better than complex</strong>: The language aims to
            provide straightforward solutions to common problems.
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold text-primary dark:text-blue-400 mr-2">4.</span>
          <div>
            <strong>Performance matters</strong>: While maintaining readability,
            Soplang is designed with performance in mind.
          </div>
        </li>
        <li className="flex items-start">
          <span className="font-bold text-primary dark:text-blue-400 mr-2">5.</span>
          <div>
            <strong>Accessibility for all</strong>: Soplang aims to make programming
            more accessible to Somali speakers worldwide.
          </div>
        </li>
      </ol>

      <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6">Getting Started</h2>

      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8">
        Ready to dive in? Here are some resources to help you get started with
        Soplang:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
        <Link
          href="/docs/installation"
          className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-blue-400"
        >
          <h3 className="text-xl font-bold text-primary dark:text-blue-400 mt-0 mb-2">Installation</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-0">
            Learn how to install Soplang on your system.
          </p>
        </Link>
        <Link
          href="/docs/quick-start"
          className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-blue-400"
        >
          <h3 className="text-xl font-bold text-primary dark:text-blue-400 mt-0 mb-2">Quick Start</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-0">
            Write your first Soplang program and learn the basics.
          </p>
        </Link>
        <Link
          href="/docs/syntax-basics"
          className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-blue-400"
        >
          <h3 className="text-xl font-bold text-primary dark:text-blue-400 mt-0 mb-2">Syntax Basics</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-0">
            Understand the fundamental syntax of Soplang.
          </p>
        </Link>
        <Link
          href="/docs/tutorials/cli-app"
          className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-blue-400"
        >
          <h3 className="text-xl font-bold text-primary dark:text-blue-400 mt-0 mb-2">Tutorials</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-0">
            Follow step-by-step tutorials to build real applications.
          </p>
        </Link>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold mt-12 mb-6">Community and Support</h2>

      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-6">
        Soplang has a growing community of developers. Here's how you can get
        involved and find help:
      </p>

      <ul className="space-y-4 text-base sm:text-lg text-gray-700 dark:text-gray-300">
        <li className="flex items-start">
          <span className="text-primary dark:text-blue-400 mr-2">•</span>
          <div>
            <Link href="https://github.com/soplang/soplang" className="text-primary hover:underline">
              GitHub Repository
            </Link>
            : Report issues, contribute code, or explore the source.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary dark:text-blue-400 mr-2">•</span>
          <div>
            <Link href="https://discord.gg/soplang" className="text-primary hover:underline">
              Discord Community
            </Link>
            : Chat with other Soplang developers and get help.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary dark:text-blue-400 mr-2">•</span>
          <div>
            <Link href="https://stackoverflow.com/questions/tagged/soplang" className="text-primary hover:underline">
              Stack Overflow
            </Link>
            : Ask technical questions using the "soplang" tag.
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-primary dark:text-blue-400 mr-2">•</span>
          <div>
            <Link href="/community" className="text-primary hover:underline">
              Community Page
            </Link>
            : Find more resources and ways to connect.
          </div>
        </li>
      </ul>

      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <span></span>
          <Link
            href="/docs/installation"
            className="inline-flex items-center text-primary hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 group"
          >
            <span className="text-lg">Next: Installation</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
} 