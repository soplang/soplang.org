import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soplang Language Reference',
  description: 'Comprehensive reference documentation for the Soplang programming language - syntax, built-in functions, and standard library.',
};

export default function ReferencePage() {
  const sections = [
    {
      id: 'syntax',
      title: 'Syntax',
      subsections: [
        { id: 'variables', title: 'Variables and Data Types' },
        { id: 'operators', title: 'Operators' },
        { id: 'control-flow', title: 'Control Flow' },
        { id: 'functions', title: 'Functions' },
        { id: 'classes', title: 'Classes and Objects' },
        { id: 'modules', title: 'Modules and Imports' },
        { id: 'exceptions', title: 'Exception Handling' },
      ]
    },
    {
      id: 'built-in',
      title: 'Built-in Functions',
      subsections: [
        { id: 'io', title: 'Input/Output' },
        { id: 'math', title: 'Mathematical Functions' },
        { id: 'string', title: 'String Operations' },
        { id: 'list', title: 'List Operations' },
        { id: 'dict', title: 'Dictionary Operations' },
        { id: 'type', title: 'Type Conversion' },
      ]
    },
    {
      id: 'stdlib',
      title: 'Standard Library',
      subsections: [
        { id: 'math-module', title: 'Math Module' },
        { id: 'string-module', title: 'String Module' },
        { id: 'datetime', title: 'Date and Time' },
        { id: 'file-io', title: 'File I/O' },
        { id: 'regex', title: 'Regular Expressions' },
        { id: 'json', title: 'JSON Processing' },
        { id: 'random', title: 'Random Number Generation' },
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced Topics',
      subsections: [
        { id: 'decorators', title: 'Decorators' },
        { id: 'generators', title: 'Generators and Iterators' },
        { id: 'context-managers', title: 'Context Managers' },
        { id: 'metaprogramming', title: 'Metaprogramming' },
        { id: 'concurrency', title: 'Concurrency and Parallelism' },
      ]
    }
  ];

  return (
    <div className="container-custom py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-4">
            <h2 className="text-xl font-bold mb-4 text-primary">Reference</h2>
            <nav className="space-y-6">
              {sections.map((section) => (
                <div key={section.id}>
                  <h3 className="font-semibold mb-2">
                    <a href={`#${section.id}`} className="text-primary hover:underline">
                      {section.title}
                    </a>
                  </h3>
                  <ul className="space-y-1 pl-4">
                    {section.subsections.map((subsection) => (
                      <li key={subsection.id}>
                        <a 
                          href={`#${subsection.id}`} 
                          className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:underline text-sm"
                        >
                          {subsection.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
            
            <div className="mt-8 pt-4 border-t border-[var(--border-color)]">
              <h3 className="font-semibold mb-2">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/docs/getting-started" className="text-primary hover:underline text-sm">
                    Getting Started Guide
                  </Link>
                </li>
                <li>
                  <Link href="/docs/tutorials" className="text-primary hover:underline text-sm">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="/docs/examples" className="text-primary hover:underline text-sm">
                    Example Projects
                  </Link>
                </li>
                <li>
                  <Link href="/downloads/latest" className="text-primary hover:underline text-sm">
                    Download Soplang
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="lg:col-span-3">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
            Soplang Language Reference
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="lead text-xl mb-8">
              This reference manual describes the syntax and core functionality of the Soplang programming language. Use the navigation menu to find specific information.
            </p>
            
            {/* Syntax Section */}
            <section id="syntax" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
                Syntax
              </h2>
              
              <div id="variables" className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Variables and Data Types</h3>
                <p className="mb-4">
                  Soplang is dynamically typed, which means you don't need to declare the type of a variable when you create it. The interpreter infers the type based on the value assigned.
                </p>
                
                <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
                  <pre className="font-mono text-sm">
                    <code>{`# Basic variable assignment
name = "Soplang"  # String
version = 1.2     # Float
is_new = True     # Boolean

# Multiple assignment
x, y, z = 1, 2, 3

# Constants (by convention, use uppercase)
PI = 3.14159
MAX_USERS = 100`}</code>
                  </pre>
                </div>
                
                <h4 className="font-semibold mb-2">Primitive Data Types</h4>
                <ul className="list-disc list-inside mb-4">
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">int</code> - Integer numbers</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">float</code> - Floating-point numbers</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">str</code> - Strings (text)</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">bool</code> - Boolean values (True or False)</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">None</code> - Represents the absence of a value</li>
                </ul>
                
                <h4 className="font-semibold mb-2">Collection Data Types</h4>
                <ul className="list-disc list-inside mb-4">
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">list</code> - Ordered, mutable collection</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">tuple</code> - Ordered, immutable collection</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">dict</code> - Key-value pairs</li>
                  <li><code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">set</code> - Unordered collection of unique elements</li>
                </ul>
                
                <div className="bg-gray-800 text-white p-4 rounded-md">
                  <pre className="font-mono text-sm">
                    <code>{`# List (mutable, ordered)
fruits = ["apple", "banana", "cherry"]
fruits.append("orange")  # Add an item

# Tuple (immutable, ordered)
coordinates = (10, 20)

# Dictionary (key-value pairs)
person = {
    "name": "John",
    "age": 30,
    "city": "New York"
}

# Set (unique elements)
unique_numbers = {1, 2, 3, 4, 5}
unique_numbers.add(6)  # Add an item`}</code>
                  </pre>
                </div>
              </div>
              
              <div id="operators" className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Operators</h3>
                
                <h4 className="font-semibold mb-2">Arithmetic Operators</h4>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white dark:bg-gray-800 border border-[var(--border-color)]">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="py-2 px-4 border-b">Operator</th>
                        <th className="py-2 px-4 border-b">Description</th>
                        <th className="py-2 px-4 border-b">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">+</td>
                        <td className="py-2 px-4 border-b">Addition</td>
                        <td className="py-2 px-4 border-b"><code>x + y</code></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">-</td>
                        <td className="py-2 px-4 border-b">Subtraction</td>
                        <td className="py-2 px-4 border-b"><code>x - y</code></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">*</td>
                        <td className="py-2 px-4 border-b">Multiplication</td>
                        <td className="py-2 px-4 border-b"><code>x * y</code></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">/</td>
                        <td className="py-2 px-4 border-b">Division</td>
                        <td className="py-2 px-4 border-b"><code>x / y</code></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">%</td>
                        <td className="py-2 px-4 border-b">Modulus</td>
                        <td className="py-2 px-4 border-b"><code>x % y</code></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">**</td>
                        <td className="py-2 px-4 border-b">Exponentiation</td>
                        <td className="py-2 px-4 border-b"><code>x ** y</code></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">//</td>
                        <td className="py-2 px-4 border-b">Floor Division</td>
                        <td className="py-2 px-4 border-b"><code>x // y</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h4 className="font-semibold mb-2">Comparison Operators</h4>
                <div className="overflow-x-auto mb-4">
                  <table className="min-w-full bg-white dark:bg-gray-800 border border-[var(--border-color)]">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="py-2 px-4 border-b">Operator</th>
                        <th className="py-2 px-4 border-b">Description</th>
                        <th className="py-2 px-4 border-b">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">==</td>
                        <td className="py-2 px-4 border-b">Equal</td>
                        <td className="py-2 px-4 border-b"><code>x == y</code></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">!=</td>
                        <td className="py-2 px-4 border-b">Not equal</td>
                        <td className="py-2 px-4 border-b"><code>x != y</code></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">{'>'}</td>
                        <td className="py-2 px-4 border-b">Greater than</td>
                        <td className="py-2 px-4 border-b"><code>x {'>'} y</code></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">{'<'}</td>
                        <td className="py-2 px-4 border-b">Less than</td>
                        <td className="py-2 px-4 border-b"><code>x {'<'} y</code></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">{'>='}</td>
                        <td className="py-2 px-4 border-b">Greater than or equal to</td>
                        <td className="py-2 px-4 border-b"><code>x {'>='} y</code></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">{'<='}</td>
                        <td className="py-2 px-4 border-b">Less than or equal to</td>
                        <td className="py-2 px-4 border-b"><code>x {'<='} y</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <h4 className="font-semibold mb-2">Logical Operators</h4>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white dark:bg-gray-800 border border-[var(--border-color)]">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="py-2 px-4 border-b">Operator</th>
                        <th className="py-2 px-4 border-b">Description</th>
                        <th className="py-2 px-4 border-b">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b">and</td>
                        <td className="py-2 px-4 border-b">Logical AND</td>
                        <td className="py-2 px-4 border-b"><code>x and y</code></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">or</td>
                        <td className="py-2 px-4 border-b">Logical OR</td>
                        <td className="py-2 px-4 border-b"><code>x or y</code></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">not</td>
                        <td className="py-2 px-4 border-b">Logical NOT</td>
                        <td className="py-2 px-4 border-b"><code>not x</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div id="control-flow" className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Control Flow</h3>
                
                <h4 className="font-semibold mb-2">Conditional Statements</h4>
                <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
                  <pre className="font-mono text-sm">
                    <code>{`# If statement
if condition:
    # code to execute if condition is True
    
# If-else statement
if condition:
    # code to execute if condition is True
else:
    # code to execute if condition is False
    
# If-elif-else statement
if condition1:
    # code to execute if condition1 is True
elif condition2:
    # code to execute if condition1 is False and condition2 is True
else:
    # code to execute if both conditions are False
    
# Ternary operator
result = value_if_true if condition else value_if_false`}</code>
                  </pre>
                </div>
                
                <h4 className="font-semibold mb-2">Loops</h4>
                <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
                  <pre className="font-mono text-sm">
                    <code>{`# For loop
for item in iterable:
    # code to execute for each item
    
# For loop with range
for i in range(5):  # 0, 1, 2, 3, 4
    # code to execute for each number
    
# While loop
while condition:
    # code to execute while condition is True
    
# Loop control statements
for item in iterable:
    if condition:
        break  # Exit the loop
    if another_condition:
        continue  # Skip to the next iteration`}</code>
                  </pre>
                </div>
                
                <h4 className="font-semibold mb-2">Match Statement (Pattern Matching)</h4>
                <div className="bg-gray-800 text-white p-4 rounded-md">
                  <pre className="font-mono text-sm">
                    <code>{`# Match statement (similar to switch in other languages)
match value:
    case pattern1:
        # code for pattern1
    case pattern2:
        # code for pattern2
    case _:
        # default case`}</code>
                  </pre>
                </div>
              </div>
              
              {/* More sections would go here, but I'll keep it brief for this example */}
              <div className="text-center mt-8">
                <p className="text-gray-600 dark:text-gray-400">
                  This is just a sample of the reference documentation. The full reference includes detailed information on all language features.
                </p>
              </div>
            </section>
            
            {/* Built-in Functions Section */}
            <section id="built-in" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
                Built-in Functions
              </h2>
              
              <p className="mb-6">
                Soplang provides a rich set of built-in functions that are always available. Here are some of the most commonly used ones:
              </p>
              
              <div id="io" className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Input/Output Functions</h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white dark:bg-gray-800 border border-[var(--border-color)]">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="py-2 px-4 border-b">Function</th>
                        <th className="py-2 px-4 border-b">Description</th>
                        <th className="py-2 px-4 border-b">Example</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-4 border-b"><code>print()</code></td>
                        <td className="py-2 px-4 border-b">Prints objects to the console</td>
                        <td className="py-2 px-4 border-b"><code>print("Hello, World!")</code></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b"><code>input()</code></td>
                        <td className="py-2 px-4 border-b">Reads a line from input</td>
                        <td className="py-2 px-4 border-b"><code>name = input("Enter your name: ")</code></td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b"><code>open()</code></td>
                        <td className="py-2 px-4 border-b">Opens a file</td>
                        <td className="py-2 px-4 border-b"><code>file = open("data.txt", "r")</code></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Link href="/docs/reference/built-in" className="btn-primary">
                  View All Built-in Functions
                </Link>
              </div>
            </section>
            
            {/* Standard Library Section */}
            <section id="stdlib" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
                Standard Library
              </h2>
              
              <p className="mb-6">
                Soplang comes with a comprehensive standard library that provides modules for common tasks. Here's an overview of some key modules:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-4">
                  <h3 className="text-lg font-semibold mb-2" id="math-module">Math Module</h3>
                  <p className="text-sm mb-2">
                    Provides mathematical functions and constants.
                  </p>
                  <Link href="/docs/reference/stdlib/math" className="text-primary hover:underline text-sm">
                    View Documentation →
                  </Link>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-4">
                  <h3 className="text-lg font-semibold mb-2" id="string-module">String Module</h3>
                  <p className="text-sm mb-2">
                    Advanced string manipulation functions.
                  </p>
                  <Link href="/docs/reference/stdlib/string" className="text-primary hover:underline text-sm">
                    View Documentation →
                  </Link>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-4">
                  <h3 className="text-lg font-semibold mb-2" id="datetime">Date and Time</h3>
                  <p className="text-sm mb-2">
                    Functions for working with dates and times.
                  </p>
                  <Link href="/docs/reference/stdlib/datetime" className="text-primary hover:underline text-sm">
                    View Documentation →
                  </Link>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-4">
                  <h3 className="text-lg font-semibold mb-2" id="file-io">File I/O</h3>
                  <p className="text-sm mb-2">
                    File input/output operations.
                  </p>
                  <Link href="/docs/reference/stdlib/fileio" className="text-primary hover:underline text-sm">
                    View Documentation →
                  </Link>
                </div>
              </div>
              
              <div className="text-center">
                <Link href="/docs/reference/stdlib" className="btn-primary">
                  View All Standard Library Modules
                </Link>
              </div>
            </section>
            
            {/* Advanced Topics Section */}
            <section id="advanced" className="mb-8">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
                Advanced Topics
              </h2>
              
              <p className="mb-6">
                Once you're comfortable with the basics, explore these advanced features of Soplang:
              </p>
              
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-4">
                  <h3 className="text-lg font-semibold mb-2" id="decorators">Decorators</h3>
                  <p className="mb-2">
                    Decorators provide a way to modify the behavior of functions or classes.
                  </p>
                  <Link href="/docs/reference/advanced/decorators" className="text-primary hover:underline">
                    Learn More →
                  </Link>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-4">
                  <h3 className="text-lg font-semibold mb-2" id="generators">Generators and Iterators</h3>
                  <p className="mb-2">
                    Create memory-efficient sequences and custom iteration behavior.
                  </p>
                  <Link href="/docs/reference/advanced/generators" className="text-primary hover:underline">
                    Learn More →
                  </Link>
                </div>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-4">
                  <h3 className="text-lg font-semibold mb-2" id="context-managers">Context Managers</h3>
                  <p className="mb-2">
                    Use the 'with' statement for resource management.
                  </p>
                  <Link href="/docs/reference/advanced/context-managers" className="text-primary hover:underline">
                    Learn More →
                  </Link>
                </div>
              </div>
            </section>
            
            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Need Help?</h2>
              <p className="mb-4">
                If you can't find what you're looking for in the reference, try these resources:
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
                  <Link href="/docs/tutorials" className="text-primary hover:underline">
                    Follow a Tutorial
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 