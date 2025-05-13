import React from "react";
import Link from "next/link";
import CodeSnippet from "@/components/CodeSnippet";
import DocNavigation from "@/components/DocNavigation";
import SoplangCodeWindow from "@/components/SoplangCodeWindow";
import TerminalCard from "@/components/TerminalCard";

export default function GettingStartedPage() {
  return (
    // <div className="py-12 container-custom">
    <div className="px-4 py-8 prose prose-lg lg:py-4 dark:prose-invert max-w-none sm:px-6 lg:px-4 sm:py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="mb-8 text-3xl font-bold md:text-4xl lg:text-4xl text-primary">
          Getting Started with Soplang
        </h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="mb-8 text-xl lead">
            Welcome to Soplang! This guide will help you install Soplang, set up your development
            environment, and write your first Soplang program.
          </p>

          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-bold" id="installation">
              1. Installation
            </h2>
            <p className="mb-4">
              Before you can start programming with Soplang, you need to install it on your system.
              Choose the installation method that works best for you:
            </p>

            <h3 className="mb-4 text-xl font-semibold">Option 1: Direct Download</h3>
            <TerminalCard
              className="mb-8"
              type="os"
              title="soplang-installer"
              command="soplang --install"
              introText="Welcome to the Soplang installer. Please select your operating system:"
              footerText="After downloading, run the installer and follow the on-screen instructions. For advanced installation options, use soplang --install --help"
            />

            <h3 className="mb-4 text-xl font-semibold">Option 2: Package Managers</h3>
            <TerminalCard
              type="package"
              title="package-manager-install"
              command="soplang --package-manager"
              introText="Choose your preferred package manager to install Soplang:"
              footerText="After installation, verify by running soplang --version in your terminal"
            />

            <p className="mt-4">
              For more detailed installation instructions, check out our{" "}
              <Link href="/docs/installation" className="text-primary hover:underline">
                comprehensive installation guide
              </Link>
              .
            </p>
          </div>

          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-bold" id="first-program">
              2. Your First Soplang Program
            </h2>
            <p className="mb-4">
              Now that you have Soplang installed, let's write a simple "Hello, World!" program:
            </p>

            <SoplangCodeWindow
              code={`// This is a comment
print("Hello, World!")

// Variables
name = "Soplang"
version = 1.2
print(f"Welcome to {name} version {version}!")

// Simple function
def greet(person):
    return f"Hello, {person}!"

message = greet("Developer")
print(message)`}
              title="hello.sop"
              className="mb-4"
            />

            <p className="mb-4">
              Save this code in a file named{" "}
              <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">hello.sop</code>.
            </p>

            <h3 className="mb-2 text-xl font-semibold">Running Your Program</h3>
            <p className="mb-4">
              To run your Soplang program, open a terminal or command prompt and navigate to the
              directory where you saved the file. Then run:
            </p>

            <CodeSnippet
              code="soplang hello.sop"
              language="bash"
              title="terminal"
              className="mb-4"
            />

            <p>You should see the following output:</p>

            <CodeSnippet
              code={`Hello, World!
Welcome to Soplang version 1.2!
Hello, Developer!`}
              language="text"
              title="output"
              className="mb-4"
            />

            <p>Congratulations! You've just written and executed your first Soplang program.</p>
          </div>

          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-bold" id="basic-concepts">
              3. Basic Concepts
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-xl font-semibold">Variables and Data Types</h3>
                <p>
                  Soplang is dynamically typed, meaning you don't need to declare variable types.
                  The language supports common data types like strings, numbers, booleans, lists,
                  and dictionaries.
                </p>
                <SoplangCodeWindow
                  code={`// String
name = "Soplang"

// Integer
version = 1

// Float
pi = 3.14159

// Boolean
is_awesome = True

// List
languages = ["Somali", "JavaScript", "Soplang"]

// Dictionary
features = {
    "syntax": "clean",
    "learning_curve": "gentle",
    "performance": "excellent"
}`}
                  title="data_types.sop"
                  className="mt-2"
                />
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">Control Flow</h3>
                <p>Soplang uses indentation to define code blocks in control structures:</p>
                <SoplangCodeWindow
                  code={`// If-else statement
age = 25
if age < 18:
    print("You are a minor")
elif age >= 18 and age < 65:
    print("You are an adult")
else:
    print("You are a senior")

// For loop
for language in ["Somali", "JavaScript", "Soplang"]:
    print(f"I like {language}")

// While loop
count = 5
while count > 0:
    print(count)
    count -= 1
print("Blast off!")`}
                  title="control_flow.sop"
                  className="mt-2"
                />
              </div>

              <div>
                <h3 className="mb-2 text-xl font-semibold">Functions</h3>
                <p>
                  Functions in Soplang are defined using the{" "}
                  <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">def</code>{" "}
                  keyword:
                </p>
                <SoplangCodeWindow
                  code={`//Simple function
def greet(name):
    return f"Hello, {name}!"

// Function with default parameter
def power(base, exponent=2):
    return base ** exponent

// Function with type hints (optional)
def add(a: int, b: int) -> int:
    return a + b`}
                  title="functions.sop"
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          <DocNavigation
            className="mt-12"
            prevPage={{
              href: "/docs",
              title: "Introduction",
              description: "Overview of Soplang documentation",
            }}
            nextPage={{
              href: "/docs/installation",
              title: "Installation",
              description: "How to install Soplang on your system",
            }}
          />
        </div>
      </div>
    </div>
  );
}
