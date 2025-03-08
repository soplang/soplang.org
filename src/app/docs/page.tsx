import Link from "next/link";

export const metadata = {
  title: 'Soplang Documentation - Introduction',
  description: 'Introduction to Soplang, a Python-inspired programming language designed for simplicity and performance.',
};

export default function DocsPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1>Introduction to Soplang</h1>
      
      <p>
        Welcome to the official documentation for Soplang, a modern programming
        language inspired by Python that combines simplicity, readability, and
        performance.
      </p>

      <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-md my-6">
        <h3 className="text-primary dark:text-blue-400 mt-0">What is Soplang?</h3>
        <p className="mb-0">
          Soplang is a high-level, general-purpose programming language designed
          with a focus on code readability and developer productivity. It takes
          inspiration from Python's clean syntax while introducing performance
          optimizations and modern language features.
        </p>
      </div>

      <h2>Key Features</h2>

      <ul>
        <li>
          <strong>Clean, Readable Syntax</strong>: Soplang uses indentation to
          define code blocks, making your code clean and consistent.
        </li>
        <li>
          <strong>Strong, Dynamic Typing</strong>: Variables are dynamically
          typed, but the language enforces type consistency during operations.
        </li>
        <li>
          <strong>Performance Optimized</strong>: Soplang includes a
          just-in-time compiler that provides significant performance
          improvements over traditional interpreted languages.
        </li>
        <li>
          <strong>Modern Language Features</strong>: Includes pattern matching,
          async/await, and other modern programming paradigms.
        </li>
        <li>
          <strong>Comprehensive Standard Library</strong>: Comes with batteries
          included - a rich set of modules and functions for common tasks.
        </li>
        <li>
          <strong>Cross-Platform</strong>: Runs on Windows, macOS, Linux, and
          more.
        </li>
      </ul>

      <h2>A Simple Example</h2>

      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
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

      <h2>Philosophy</h2>

      <p>
        Soplang follows these key principles:
      </p>

      <ol>
        <li>
          <strong>Readability counts</strong>: Code is read more often than it's
          written. Soplang prioritizes clear, readable syntax.
        </li>
        <li>
          <strong>Explicit is better than implicit</strong>: Soplang avoids
          hidden behaviors and magic methods where possible.
        </li>
        <li>
          <strong>Simple is better than complex</strong>: The language aims to
          provide straightforward solutions to common problems.
        </li>
        <li>
          <strong>Performance matters</strong>: While maintaining readability,
          Soplang is designed with performance in mind.
        </li>
      </ol>

      <h2>Getting Started</h2>

      <p>
        Ready to dive in? Here are some resources to help you get started with
        Soplang:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <Link
          href="/docs/installation"
          className="block p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600"
        >
          <h3 className="text-primary dark:text-blue-400 mt-0">Installation</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-0">
            Learn how to install Soplang on your system.
          </p>
        </Link>
        <Link
          href="/docs/quick-start"
          className="block p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600"
        >
          <h3 className="text-primary dark:text-blue-400 mt-0">Quick Start</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-0">
            Write your first Soplang program and learn the basics.
          </p>
        </Link>
        <Link
          href="/docs/syntax-basics"
          className="block p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600"
        >
          <h3 className="text-primary dark:text-blue-400 mt-0">Syntax Basics</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-0">
            Understand the fundamental syntax of Soplang.
          </p>
        </Link>
        <Link
          href="/docs/tutorials/cli-app"
          className="block p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 dark:border-gray-600"
        >
          <h3 className="text-primary dark:text-blue-400 mt-0">Tutorials</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-0">
            Follow step-by-step tutorials to build real applications.
          </p>
        </Link>
      </div>

      <h2>Community and Support</h2>

      <p>
        Soplang has a growing community of developers. Here's how you can get
        involved and find help:
      </p>

      <ul>
        <li>
          <Link href="https://github.com/soplang/soplang" className="text-primary hover:underline">
            GitHub Repository
          </Link>
          : Report issues, contribute code, or explore the source.
        </li>
        <li>
          <Link href="https://discord.gg/soplang" className="text-primary hover:underline">
            Discord Community
          </Link>
          : Chat with other Soplang developers and get help.
        </li>
        <li>
          <Link href="https://stackoverflow.com/questions/tagged/soplang" className="text-primary hover:underline">
            Stack Overflow
          </Link>
          : Ask technical questions using the "soplang" tag.
        </li>
        <li>
          <Link href="/community" className="text-primary hover:underline">
            Community Page
          </Link>
          : Find more resources and ways to connect.
        </li>
      </ul>

      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center">
          <span></span>
          <Link
            href="/docs/installation"
            className="inline-flex items-center text-primary hover:underline"
          >
            Next: Installation
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
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