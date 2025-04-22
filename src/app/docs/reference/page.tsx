import React from "react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soplang Language Reference",
  description:
    "Comprehensive reference documentation for the Soplang programming language - syntax, built-in functions, and standard library.",
};

export default function ReferencePage() {
  const sections = [
    {
      id: "syntax",
      title: "Syntax",
      subsections: [
        { id: "variables", title: "Variables and Data Types" },
        { id: "operators", title: "Operators" },
        { id: "control-flow", title: "Control Flow" },
        { id: "functions", title: "Functions" },
        { id: "classes", title: "Classes and Objects" },
        { id: "modules", title: "Modules and Imports" },
        { id: "exceptions", title: "Exception Handling" },
      ],
    },
    {
      id: "built-in",
      title: "Built-in Functions",
      subsections: [
        { id: "io", title: "Input/Output" },
        { id: "math", title: "Mathematical Functions" },
        { id: "string", title: "String Operations" },
        { id: "list", title: "List Operations" },
        { id: "dict", title: "Dictionary Operations" },
        { id: "type", title: "Type Conversion" },
      ],
    },
    {
      id: "stdlib",
      title: "Standard Library",
      subsections: [
        { id: "math-module", title: "Math Module" },
        { id: "string-module", title: "String Module" },
        { id: "datetime", title: "Date and Time" },
        { id: "file-io", title: "File I/O" },
        { id: "regex", title: "Regular Expressions" },
        { id: "json", title: "JSON Processing" },
        { id: "random", title: "Random Number Generation" },
      ],
    },
    {
      id: "advanced",
      title: "Advanced Topics",
      subsections: [
        { id: "decorators", title: "Decorators" },
        { id: "generators", title: "Generators and Iterators" },
        { id: "context-managers", title: "Context Managers" },
        { id: "metaprogramming", title: "Metaprogramming" },
        { id: "concurrency", title: "Concurrency and Parallelism" },
      ],
    },
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
                    <a
                      href={`#${section.id}`}
                      className="text-primary hover:underline"
                    >
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
                  <Link
                    href="/docs/getting-started"
                    className="text-primary hover:underline text-sm"
                  >
                    Getting Started Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/tutorials"
                    className="text-primary hover:underline text-sm"
                  >
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/examples"
                    className="text-primary hover:underline text-sm"
                  >
                    Example Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/downloads/latest"
                    className="text-primary hover:underline text-sm"
                  >
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
              This reference manual describes the syntax and core functionality
              of the Soplang programming language. Use the navigation menu to
              find specific information.
            </p>

            {/* Syntax Section */}
            <section id="syntax" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
                Syntax
              </h2>

              <div id="variables" className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Variables and Data Types
                </h3>
                <p className="mb-4">
                  Soplang provides both dynamic and static typing options. You
                  can use <code>door</code> for dynamic variables or specific
                  type keywords like <code>tiro</code>, <code>qoraal</code>, and{" "}
                  <code>labadaran</code> for static typing.
                </p>

                <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
                  <pre className="font-mono text-sm">
                    <code>{`// Variable declarations with dynamic typing
door magac = "Soplang"     // String
door lambarka = 2.0        // Float
door waa_cusub = true      // Boolean

// Static typing
qoraal cinwaan = "Soplang: Luuqadda Barnaamijyada ee Soomaalida"
tiro tirada = 10
labadaran sax = false

// Multiple assignment
door x, y, z = 1, 2, 3

// Constants (by convention, use uppercase)
door PI = 3.14159
door MAX_USERS = 100`}</code>
                  </pre>
                </div>

                <h4 className="font-semibold mb-2">Primitive Data Types</h4>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">
                      tiro
                    </code>{" "}
                    - Integer numbers
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">
                      tiro_dhiman
                    </code>{" "}
                    - Floating-point numbers
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">
                      qoraal
                    </code>{" "}
                    - Strings (text)
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">
                      labadaran
                    </code>{" "}
                    - Boolean values (true or false)
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">
                      waxba
                    </code>{" "}
                    - Represents the absence of a value (similar to null)
                  </li>
                </ul>

                <h4 className="font-semibold mb-2">Collection Data Types</h4>
                <ul className="list-disc list-inside mb-4">
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">
                      liis
                    </code>{" "}
                    - Ordered, mutable collection
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">
                      tubal
                    </code>{" "}
                    - Ordered, immutable collection
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">
                      shey
                    </code>{" "}
                    - Key-value pairs
                  </li>
                  <li>
                    <code className="bg-gray-100 dark:bg-gray-700 px-1 py-0.5 rounded">
                      xulasho
                    </code>{" "}
                    - Unordered collection of unique elements
                  </li>
                </ul>

                <div className="bg-gray-800 text-white p-4 rounded-md">
                  <pre className="font-mono text-sm">
                    <code>{`// List (mutable, ordered)
liis miro = ["tufaax", "muus", "qare"]
miro.ku_dar("cambe")  // Add an item

// Dictionary (key-value pairs)
shey qofka = {
    "magac": "Cabdi",
    "da": 30,
    "magaalo": "Muqdisho"
}

// Accessing elements
qor(miro[0])            // Prints "tufaax"
qor(qofka["magac"])     // Prints "Cabdi"`}</code>
                  </pre>
                </div>
              </div>

              <div id="operators" className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Operators</h3>
                <p className="mb-4">
                  Soplang supports standard arithmetic, comparison, and logical
                  operators.
                </p>

                <h4 className="font-semibold mb-2">Arithmetic Operators</h4>
                <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
                  <pre className="font-mono text-sm">
                    <code>{`// Basic arithmetic
door a = 10
door b = 3

qor(a + b)    // Addition: 13
qor(a - b)    // Subtraction: 7
qor(a * b)    // Multiplication: 30
qor(a / b)    // Division: 3.333...
qor(a % b)    // Modulus: 1

// Increment/decrement
a = a + 1     // or a += 1
b = b - 1     // or b -= 1`}</code>
                  </pre>
                </div>

                <h4 className="font-semibold mb-2">Comparison Operators</h4>
                <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
                  <pre className="font-mono text-sm">
                    <code>{`door x = 5
door y = 10

qor(x == y)    // Equal to: false
qor(x != y)    // Not equal to: true
qor(x < y)     // Less than: true
qor(x > y)     // Greater than: false
qor(x <= y)    // Less than or equal to: true
qor(x >= y)    // Greater than or equal to: false`}</code>
                  </pre>
                </div>

                <h4 className="font-semibold mb-2">Logical Operators</h4>
                <div className="bg-gray-800 text-white p-4 rounded-md">
                  <pre className="font-mono text-sm">
                    <code>{`door a = true
door b = false

qor(a && b)    // Logical AND: false
qor(a || b)    // Logical OR: true
qor(!a)        // Logical NOT: false`}</code>
                  </pre>
                </div>
              </div>

              <div id="control-flow" className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Control Flow</h3>

                <h4 className="font-semibold mb-2">Conditional Statements</h4>
                <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
                  <pre className="font-mono text-sm">
                    <code>{`// If statement
door da = 18

haddii (da > 18) {
    qor("Waa qof weyn")
} haddii_kale (da == 18) {
    qor("Waa 18 jir")
} haddii_kalena {
    qor("Waa qof yar")
}

// Simplified if/else
door barasho = true
qor(barasho ? "Waa arday" : "Ma ahan arday")`}</code>
                  </pre>
                </div>

                <h4 className="font-semibold mb-2">Loops</h4>
                <div className="bg-gray-800 text-white p-4 rounded-md">
                  <pre className="font-mono text-sm">
                    <code>{`// For loop
ku_celi i min 1 ilaa 5 {
    qor(i)
}

// For loop with arrays
liis magacyada = ["Cabdi", "Caasha", "Xasan"]
ku_celi magac ku dhex jira magacyada {
    qor("Salaan " + magac)
}

// While loop
tiro j = 5
inta_ay (j > 0) {
    qor(j)
    j = j - 1
}

// Break and continue
ku_celi i min 1 ilaa 10 {
    haddii (i == 3) {
        sii_wad    // Skip to next iteration
    }
    haddii (i == 8) {
        jooji      // Exit the loop
    }
    qor(i)
}`}</code>
                  </pre>
                </div>
              </div>

              <div id="functions" className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Functions</h3>
                <p className="mb-4">
                  Functions in Soplang are defined using the <code>howl</code>{" "}
                  keyword.
                </p>

                <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
                  <pre className="font-mono text-sm">
                    <code>{`// Basic function
howl salaanta(qofka) {
    soo_celi "Salaan, " + qofka + "!"
}

qor(salaanta("Cabdiraxmaan"))   // Prints "Salaan, Cabdiraxmaan!"

// Function with multiple parameters
howl isku_dar(x, y) {
    soo_celi x + y
}

qor(isku_dar(5, 3))   // Prints 8

// Function with default parameters
howl qeybso(a, b = 2) {
    soo_celi a / b
}

qor(qeybso(10))       // Prints 5
qor(qeybso(10, 5))    // Prints 2

// Return multiple values
howl xisaabi(a, b) {
    door isku_dar = a + b
    door ka_jar = a - b
    door ku_dhufan = a * b
    door u_qeybi = a / b
    
    soo_celi [isku_dar, ka_jar, ku_dhufan, u_qeybi]
}

door [w, x, y, z] = xisaabi(10, 2)
qor(w, x, y, z)   // Prints 12 8 20 5`}</code>
                  </pre>
                </div>
              </div>

              <div id="classes" className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Classes and Objects
                </h3>
                <p className="mb-4">
                  Soplang supports object-oriented programming through classes
                  using the <code>fasalka</code> keyword.
                </p>

                <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
                  <pre className="font-mono text-sm">
                    <code>{`// Basic class definition
fasalka Qof {
    howl cusub(magac, da) {
        nafta.magac = magac
        nafta.da = da
    }
    
    howl faahfaahin() {
        soo_celi nafta.magac + " waa " + qoraal(nafta.da) + " jir."
    }
    
    howl sannad_kordhi() {
        nafta.da += 1
        soo_celi nafta.da
    }
}

// Creating an object
door qof1 = cusub Qof("Sacdiya", 25)
qor(qof1.faahfaahin())   // Prints "Sacdiya waa 25 jir."

qof1.sannad_kordhi()
qor(qof1.faahfaahin())   // Prints "Sacdiya waa 26 jir."

// Inheritance
fasalka Arday ka_dhaxal Qof {
    howl cusub(magac, da, fasalka) {
        nafta._Qof.cusub(magac, da)
        nafta.fasalka = fasalka
    }
    
    howl faahfaahin() {
        soo_celi nafta.magac + " waa arday dhigta " + nafta.fasalka
    }
}

door arday1 = cusub Arday("Cabdi", 19, "Computer Science")
qor(arday1.faahfaahin())   // Prints "Cabdi waa arday dhigta Computer Science"`}</code>
                  </pre>
                </div>
              </div>

              <div id="modules" className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Modules and Imports
                </h3>
                <p className="mb-4">
                  Soplang allows you to organize code into modules and import
                  functionality from other files.
                </p>

                <div className="bg-gray-800 text-white p-4 rounded-md mb-4">
                  <pre className="font-mono text-sm">
                    <code>{`// Importing a module
ka_keen xisaabta from "xisaabta.sop"

// Using imported functionality
qor(xisaabta.isku_dar(5, 10))

// Importing specific functions
ka_keen { isku_dar, ka_jar } from "xisaabta.sop"

qor(isku_dar(10, 5))   // Prints 15

// Creating a module (in xisaabta.sop)
howl isku_dar(a, b) {
    soo_celi a + b
}

howl ka_jar(a, b) {
    soo_celi a - b
}

// Export functionality
dalab {
    isku_dar,
    ka_jar
}`}</code>
                  </pre>
                </div>
              </div>

              <div id="exceptions" className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Exception Handling
                </h3>
                <p className="mb-4">
                  Soplang provides error handling capabilities using{" "}
                  <code>isku_day</code> and <code>qabo</code>.
                </p>

                <div className="bg-gray-800 text-white p-4 rounded-md">
                  <pre className="font-mono text-sm">
                    <code>{`// Basic try/catch
isku_day {
    door tirada = qoraal_to_tiro("abc")
    qor(tirada)
} qabo khalad {
    qor("Khalad: " + khalad.farriin)
}

// Try/catch with finally
isku_day {
    door file = faylka_fur("data.txt", "r")
    // Do something with file
} qabo khalad {
    qor("Khalad: " + khalad.farriin)
} marka_dhammaad {
    // Always executed
    haddii (file) {
        file.xir()
    }
}

// Throwing errors
howl qeybi(a, b) {
    haddii (b == 0) {
        ku_rid_khalad cusub Khalad("Ma awoodid inaad wax 0 u qeybiso")
    }
    soo_celi a / b
}`}</code>
                  </pre>
                </div>
              </div>
            </section>

            {/* Built-in Functions Section */}
            <section id="built-in" className="mb-16">
              <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
                Built-in Functions
              </h2>

              <p className="mb-6">
                Soplang provides a rich set of built-in functions that are
                always available. Here are some of the most commonly used ones:
              </p>

              <div id="io" className="mb-8">
                <h3 className="text-xl font-semibold mb-4">
                  Input/Output Functions
                </h3>

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
                        <td className="py-2 px-4 border-b">
                          <code>print()</code>
                        </td>
                        <td className="py-2 px-4 border-b">
                          Prints objects to the console
                        </td>
                        <td className="py-2 px-4 border-b">
                          <code>print("Hello, World!")</code>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">
                          <code>input()</code>
                        </td>
                        <td className="py-2 px-4 border-b">
                          Reads a line from input
                        </td>
                        <td className="py-2 px-4 border-b">
                          <code>name = input("Enter your name: ")</code>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 border-b">
                          <code>open()</code>
                        </td>
                        <td className="py-2 px-4 border-b">Opens a file</td>
                        <td className="py-2 px-4 border-b">
                          <code>file = open("data.txt", "r")</code>
                        </td>
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
                Soplang comes with a comprehensive standard library that
                provides modules for common tasks. Here's an overview of some
                key modules:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-4">
                  <h3 className="text-lg font-semibold mb-2" id="math-module">
                    Math Module
                  </h3>
                  <p className="text-sm mb-2">
                    Provides mathematical functions and constants.
                  </p>
                  <Link
                    href="/docs/reference/stdlib/math"
                    className="text-primary hover:underline text-sm"
                  >
                    View Documentation →
                  </Link>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-4">
                  <h3 className="text-lg font-semibold mb-2" id="string-module">
                    String Module
                  </h3>
                  <p className="text-sm mb-2">
                    Advanced string manipulation functions.
                  </p>
                  <Link
                    href="/docs/reference/stdlib/string"
                    className="text-primary hover:underline text-sm"
                  >
                    View Documentation →
                  </Link>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-4">
                  <h3 className="text-lg font-semibold mb-2" id="datetime">
                    Date and Time
                  </h3>
                  <p className="text-sm mb-2">
                    Functions for working with dates and times.
                  </p>
                  <Link
                    href="/docs/reference/stdlib/datetime"
                    className="text-primary hover:underline text-sm"
                  >
                    View Documentation →
                  </Link>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-4">
                  <h3 className="text-lg font-semibold mb-2" id="file-io">
                    File I/O
                  </h3>
                  <p className="text-sm mb-2">File input/output operations.</p>
                  <Link
                    href="/docs/reference/stdlib/fileio"
                    className="text-primary hover:underline text-sm"
                  >
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
                Once you're comfortable with the basics, explore these advanced
                features of Soplang:
              </p>

              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-4">
                  <h3 className="text-lg font-semibold mb-2" id="decorators">
                    Decorators
                  </h3>
                  <p className="mb-2">
                    Decorators provide a way to modify the behavior of functions
                    or classes.
                  </p>
                  <Link
                    href="/docs/reference/advanced/decorators"
                    className="text-primary hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-4">
                  <h3 className="text-lg font-semibold mb-2" id="generators">
                    Generators and Iterators
                  </h3>
                  <p className="mb-2">
                    Create memory-efficient sequences and custom iteration
                    behavior.
                  </p>
                  <Link
                    href="/docs/reference/advanced/generators"
                    className="text-primary hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-4">
                  <h3
                    className="text-lg font-semibold mb-2"
                    id="context-managers"
                  >
                    Context Managers
                  </h3>
                  <p className="mb-2">
                    Use the 'with' statement for resource management.
                  </p>
                  <Link
                    href="/docs/reference/advanced/context-managers"
                    className="text-primary hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </section>

            <div className="bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Need Help?</h2>
              <p className="mb-4">
                If you can't find what you're looking for in the reference, try
                these resources:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <Link
                    href="/community/forums"
                    className="text-primary hover:underline"
                  >
                    Ask in the Forums
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/faq"
                    className="text-primary hover:underline"
                  >
                    Check the FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/tutorials"
                    className="text-primary hover:underline"
                  >
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
