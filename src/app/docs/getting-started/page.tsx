import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Started with Soplang',
  description: 'Learn how to get started with Soplang programming language - installation, first program, and basic concepts.',
};

export default function GettingStartedPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
          Getting Started with Soplang
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl mb-8">
            Welcome to Soplang! This guide will help you install Soplang, set up your development environment, and write your first Soplang program.
          </p>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4" id="installation">1. Installation</h2>
            <p className="mb-4">
              Before you can start programming with Soplang, you need to install it on your system. Choose the installation method that works best for you:
            </p>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Option 1: Download the Installer</h3>
              <p className="mb-4">
                The easiest way to get started is to download the installer for your operating system:
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <Link href="/downloads/latest" className="btn-primary">
                  Download for Windows
                </Link>
                <Link href="/downloads/latest" className="btn-primary">
                  Download for macOS
                </Link>
                <Link href="/downloads/latest" className="btn-primary">
                  Download for Linux
                </Link>
              </div>
              <p>
                After downloading, run the installer and follow the on-screen instructions.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-6">
              <h3 className="text-xl font-semibold mb-4">Option 2: Using Package Managers</h3>
              <p className="mb-4">
                You can also install Soplang using package managers:
              </p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Using npm (Node.js Package Manager):</h4>
                <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
                  <code>npm install -g soplang</code>
                </pre>
              </div>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Using Homebrew (macOS):</h4>
                <div className="bg-gray-800 text-white p-4 rounded-md">
                  <p className="font-mono text-sm">brew install soplang</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Using apt (Ubuntu/Debian):</h4>
                <div className="bg-gray-800 text-white p-4 rounded-md">
                  <p className="font-mono text-sm">sudo apt-get install soplang</p>
                </div>
              </div>
            </div>
            
            <p className="mt-4">
              For more detailed installation instructions, check out our <Link href="/docs/installation" className="text-primary hover:underline">comprehensive installation guide</Link>.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4" id="first-program">2. Your First Soplang Program</h2>
            <p className="mb-4">
              Now that you have Soplang installed, let's write a simple "Hello, World!" program:
            </p>
            
            <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
              <pre className="font-mono text-sm">
                <code>{`# This is a comment
print("Hello, World!")

# Variables
name = "Soplang"
version = 1.2
print(f"Welcome to {name} version {version}!")

# Simple function
def greet(person):
    return f"Hello, {person}!"

message = greet("Developer")
print(message)`}</code>
              </pre>
            </div>
            
            <p className="mb-4">
              Save this code in a file named <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">hello.sop</code>.
            </p>
            
            <h3 className="text-xl font-semibold mb-2">Running Your Program</h3>
            <p className="mb-4">
              To run your Soplang program, open a terminal or command prompt and navigate to the directory where you saved the file. Then run:
            </p>
            
            <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
              <p className="font-mono text-sm">soplang hello.sop</p>
            </div>
            
            <p>
              You should see the following output:
            </p>
            
            <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
              <pre className="font-mono text-sm">
                <code>{`Hello, World!
Welcome to Soplang version 1.2!
Hello, Developer!`}</code>
              </pre>
            </div>
            
            <p>
              Congratulations! You've just written and executed your first Soplang program.
            </p>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-4" id="basic-concepts">3. Basic Concepts</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Variables and Data Types</h3>
                <p>
                  Soplang is dynamically typed, meaning you don't need to declare variable types. The language supports common data types like strings, numbers, booleans, lists, and dictionaries.
                </p>
                <div className="bg-gray-800 text-white p-4 rounded-md mt-2">
                  <pre className="font-mono text-sm">
                    <code>{`# String
name = "Soplang"

# Integer
version = 1

# Float
pi = 3.14159

# Boolean
is_awesome = True

# List
languages = ["Somali", "JavaScript", "Soplang"]

# Dictionary
features = {
    "syntax": "clean",
    "learning_curve": "gentle",
    "performance": "excellent"
}`}</code>
                  </pre>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Control Flow</h3>
                <p>
                  Soplang uses indentation to define code blocks in control structures:
                </p>
                <div className="bg-gray-800 text-white p-4 rounded-md mt-2">
                  <pre className="font-mono text-sm">
                    <code>{`# If-else statement
age = 25
if age < 18:
    print("You are a minor")
elif age >= 18 and age < 65:
    print("You are an adult")
else:
    print("You are a senior")

# For loop
for language in ["Somali", "JavaScript", "Soplang"]:
    print(f"I like {language}")

# While loop
count = 5
while count > 0:
    print(count)
    count -= 1
print("Blast off!")`}</code>
                  </pre>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Functions</h3>
                <p>
                  Functions in Soplang are defined using the <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">def</code> keyword:
                </p>
                <div className="bg-gray-800 text-white p-4 rounded-md mt-2">
                  <pre className="font-mono text-sm">
                    <code>{`# Simple function
def greet(name):
    return f"Hello, {name}!"

# Function with default parameter
def power(base, exponent=2):
    return base ** exponent

# Function with type hints (optional)
def add(a: int, b: int) -> int:
    return a + b`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4" id="next-steps">4. Next Steps</h2>
            <p className="mb-4">
              Now that you've learned the basics, here are some resources to continue your Soplang journey:
            </p>
            
            <ul className="list-disc list-inside space-y-2">
              <li>
                <Link href="/docs/reference" className="text-primary hover:underline">
                  Language Reference
                </Link> - Comprehensive documentation of Soplang's syntax and features
              </li>
              <li>
                <Link href="/docs/tutorials" className="text-primary hover:underline">
                  Tutorials
                </Link> - Step-by-step guides for common programming tasks
              </li>
              <li>
                <Link href="/community/forums" className="text-primary hover:underline">
                  Community Forums
                </Link> - Connect with other Soplang developers
              </li>
              <li>
                <Link href="/docs/examples" className="text-primary hover:underline">
                  Example Projects
                </Link> - Real-world applications built with Soplang
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Need Help?</h2>
            <p className="mb-4">
              If you encounter any issues or have questions, there are several ways to get help:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <Link href="/community/forums" className="text-primary hover:underline">
                  Ask in the Forums
                </Link>
              </li>
              <li>
                <Link href="/docs/faq" className="text-primary hover:underline">
                  Check the FAQ
                </Link>
              </li>
              <li>
                <a href="https://github.com/soplang/soplang/issues" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                  Report a Bug on GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 