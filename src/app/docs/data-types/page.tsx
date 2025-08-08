import React from "react";
import Link from "next/link";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Soplang Data Types",
  description:
    "Learn about all data types available in the Soplang programming language, including primitives, collections, and custom types.",
};

export default function DataTypesPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-6 text-3xl font-bold text-primary">Data Types in Soplang</h1>

      <p className="mb-6 text-lg lead">
        Soplang provides a rich set of data types to represent different kinds of values. This guide
        covers all the built-in data types available in Soplang and how to use them effectively.
      </p>

      <nav className="p-4 my-8 rounded-lg bg-gray-50 dark:bg-gray-800">
        <h2 className="mb-3 text-lg font-semibold">On This Page</h2>
        <ul className="space-y-1">
          <li>
            <a href="#primitive-types" className="text-primary hover:underline">
              Primitive Types
            </a>
          </li>
          <li>
            <a href="#collection-types" className="text-primary hover:underline">
              Collection Types
            </a>
          </li>
          <li>
            <a href="#special-types" className="text-primary hover:underline">
              Special Types
            </a>
          </li>
          <li>
            <a href="#type-conversion" className="text-primary hover:underline">
              Type Conversion
            </a>
          </li>
          <li>
            <a href="#type-checking" className="text-primary hover:underline">
              Type Checking
            </a>
          </li>
        </ul>
      </nav>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold" id="primitive-types">
          Primitive Types
        </h2>
        <p className="mb-4">
          Primitive types are the most basic data types in Soplang. They represent simple values and
          are the building blocks for more complex types.
        </p>

        <h3 className="mb-3 text-xl font-semibold" id="numbers">
          Numbers
        </h3>
        <p className="mb-4">
          Soplang supports both integers and floating-point numbers. You can define a number
          variable using either the dynamic{" "}
          <code className="px-2 rounded-md bg-blue-400/35">door</code> keyword or the static{" "}
          <code className="px-2 rounded-md bg-blue-400/35">abn</code> keyword:
        </p>

        <CodeWindow
          code={`// Using dynamic typing
door lambarka1 = 42       // Integer
door lambarka2 = 3.14     // Floating-point

// Using static typing
abn lambarka3 = 100      // Integer type
abn lambarka4 = -25      // Negative integer

// Arithmetic operations
qor(lambarka1 + lambarka2)  // Addition: 45.14
qor(lambarka1 * lambarka3)  // Multiplication: 4200
qor(lambarka3 / lambarka1)  // Division: 2.38...
`}
          title="numbers.sop"
        />

        <h3 className="mt-8 mb-3 text-xl font-semibold" id="strings">
          Strings
        </h3>
        <p className="mb-4">
          Strings in Soplang are sequences of characters. You can define strings using either single{" "}
          <code className="px-1 mx-1 rounded-md bg-blue-400/35">'</code>
          or double quotes <br />
          <code className="px-1 rounded-md bg-blue-400/35">"</code> and manipulate them with various
          operations:
        </p>

        <CodeWindow
          code={`// Using dynamic typing
door magac1 = "Soplang"
door magac2 = 'Programming Language'

// Using static typing
qoraal magac3 = "Soplang: Luuqadda Barnaamijyada ee Afka Soomaaliga"

// String concatenation
qor(magac1 + " - " + magac2)  // Outputs: Soplang - Programming Language

// String length
qor(magac1.dherer())  // Outputs: 7

// String methods
qor(magac1.sareyn())  // Outputs: SOPLANG
qor(magac1.hooseyn())  // Outputs: soplang
qor(magac3.qayb(0, 7))  // Outputs: Soplang

// String interpolation
door version = 2.0
qor(f"{magac1} v{version}")  // Outputs: Soplang v2.0`}
          title="strings.sop"
        />

        <h3 className="mt-8 mb-3 text-xl font-semibold" id="booleans">
          Booleans
        </h3>
        <p className="mb-4">
          Boolean values represent truth values with two possible states:{" "}
          <code className="px-2 rounded-md bg-blue-400/35">run</code> (true) or{" "}
          <code className="px-2 rounded-md bg-blue-400/35">been</code> (false). You can define
          boolean variables using <code className="px-2 rounded-md bg-blue-400/35">door</code> or{" "}
          <code className="px-1 rounded-md bg-blue-400/35">bool</code>:
        </p>

        <CodeWindow
          code={`// Using dynamic typing
door waa_sax = run    // true
door waa_qalad = been  // false

// Using static typing
bool waa_arday = run
bool waa_macalin = been

// Logical operations
qor(waa_sax && waa_qalad)  // Logical AND: false
qor(waa_sax || waa_qalad)  // Logical OR: true
qor(!waa_sax)              // Logical NOT: false

// Comparison operations
door x = 10
door y = 20
qor(x > y)   // false
qor(x <= y)  // true
qor(x == 10) // true
qor(x != y)  // true`}
          title="booleans.sop"
        />
      </div>

      <div className="mb-12">
        {/* Incomplete section  */}
        {/* <h2 className="mb-4 text-2xl font-bold" id="collection-types">
          Collection Types
        </h2>
        <p className="mb-4">
          Collection types allow you to group multiple values together. Soplang provides several
          collection types for different use cases.
        </p> */}

        <h3 className="mb-3 text-xl font-semibold" id="lists">
          Lists
        </h3>
        <p className="mb-4">
          Lists are ordered collections of items that can be of any type. You can define a list
          using the <code className="px-1 rounded-md bg-blue-400/35">liis</code> keyword or use{" "}
          <code className="px-1 rounded-md bg-blue-400/35">door</code> with square brackets:
        </p>

        <CodeWindow
          code={`// Creating lists
door tiro = [1, 2, 3, 4, 5]
liis magacyada = ["Cabdi", "Caasha", "Xasan", "Hodan"]
liis isku_dhafan = [1, "Soplang", run, 3.14]

// Accessing elements (zero-indexed)
qor(tiro[0])     // Outputs: 1
qor(magacyada[2])    // Outputs: Xasan

// Modifying lists
tiro[0] = 10     // Change the first element
qor(magacyada)    // Outputs: [10, 2, 3, 4, 5]

// List methods
tiro.kudar(6)    // Add an element to the end
qor(magacyada)    // Outputs: [10, 2, 3, 4, 5, 6]

magacyada.saar(1)    // Remove element at index 1
qor(magacyada)   // Outputs: ["Cabdi", "Xasan", "Hodan"]

// List length
qor(magacyada.dherer())  // Outputs: 4
`}
          title="lists.sop"
        />

        <h3 className="mt-8 mb-3 text-xl font-semibold" id="dictionaries">
          Dictionaries
        </h3>
        <p className="mb-4">
          Dictionaries are collections of key-value pairs where each key must be unique. You can
          define a dictionary using{" "}
          <code className="px-2 mx-1 rounded-md bg-blue-400/35">door</code> with curly braces or
          using the <code className="px-2 mx-1 rounded-md bg-blue-400/35">shey</code> keyword:
        </p>

        <CodeWindow
          code={`// Creating dictionaries
door qof = {
    "magac": "Cabdilaahi",
    "da": 25,
    "waa_arday": run
}

shey luuqad = {
    "magac": "Soplang",
    "version": 2.0,
    "sanadka": 2023,
    "features": ["OOP", "Dynamic Typing", "Easy Syntax"]
}

// Accessing values
qor(qof["magac"])  // Outputs: Cabdilaahi
qor(luuqad["version"])  // Outputs: 2.0

// Alternative dot notation
qor(qof.magac)  // Outputs: Cabdilaahi
qor(luuqad.features)  // Outputs: ["OOP", "Dynamic Typing", "Easy Syntax"]

// Modifying dictionaries
qof["da"] = 26  // Update a value
qof["degaan"] = "Muqdisho"  // Add a new key-value pair
qor(qof)  // Outputs: {"magac": "Cabdilaahi", "da": 26, "waa_arday": true, "degaan": "Muqdisho"}

// Checking if a key exists
qor("magac" ku dhex jira qof)  // Outputs: true
qor("luuqad" ku dhex jira qof)  // Outputs: false

// Dictionary methods
qor(qof.fureyaasha())  // Outputs: ["magac", "da", "waa_arday", "degaan"]
qor(qof.qiimeyaasha())  // Outputs: ["Cabdilaahi", 26, true, "Muqdisho"]
qor(luuqad.dherer())  // Outputs: 4`}
          title="dictionaries.sop"
        />
      </div>

      {/* Footer Navigation */}
      <DocNavigation
        className="mt-10"
        prevPage={{
          href: "/docs/syntax-basics",
          title: "Syntax Basics",
          description: "Return to the fundamental syntax of Soplang",
        }}
        nextPage={{
          href: "/docs/variables",
          title: "Variables",
          description: "Learn more about variable declaration and scope",
        }}
      />
    </div>
  );
}
