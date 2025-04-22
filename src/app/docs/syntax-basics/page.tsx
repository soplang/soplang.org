import React from "react";
import Link from "next/link";
import CodeWindow from "@/components/CodeWindow";

export const metadata = {
  title: "Soplang Syntax Basics",
  description:
    "Learn the fundamental syntax of Soplang, including statements, comments, operators, and code structure.",
};

export default function SyntaxBasicsPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold mb-6">Soplang Syntax Basics</h1>

      <p className="lead text-xl mb-6">
        Understanding the basic syntax elements of Soplang is the first step to
        becoming proficient with the language. This guide covers the fundamental
        building blocks of Soplang code.
      </p>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4" id="comments">
          Comments
        </h2>
        <p className="mb-4">
          Comments allow you to add notes to your code that are ignored by the
          interpreter. Soplang supports single-line and multi-line comments:
        </p>

        <CodeWindow
          code={`// This is a single-line comment

/* This is a multi-line comment
   that spans several lines
   and is useful for longer explanations */

qor("Soplang") // You can also place comments at the end of a line`}
          title="comments.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4" id="statements">
          Statements and Blocks
        </h2>
        <p className="mb-4">
          A statement in Soplang is a complete instruction. Statements are
          typically separated by newlines or semicolons. Blocks of code are
          enclosed in curly braces <code>{}</code>:
        </p>

        <CodeWindow
          code={`// Single statements
door magac = "Soplang"
qor(magac)

// Multiple statements on one line (separated by semicolons)
door a = 5; door b = 10; qor(a + b)

// Code blocks
haddii (a > b) {
    qor("A waa ka weyn yahay B")
    a = a - b
} haddii_kalena {
    qor("B waa ka weyn yahay A")
    b = b - a
}`}
          title="statements.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4" id="identifiers">
          Identifiers and Naming Conventions
        </h2>
        <p className="mb-4">
          Identifiers are names used for variables, functions, classes, etc. In
          Soplang:
        </p>

        <ul className="list-disc list-inside mb-4">
          <li>Identifiers can contain letters, digits, and underscores</li>
          <li>Identifiers cannot start with a digit</li>
          <li>
            Identifiers are case-sensitive (<code>magac</code> and{" "}
            <code>Magac</code> are different)
          </li>
          <li>
            Reserved keywords (like <code>door</code>, <code>haddii</code>,
            etc.) cannot be used as identifiers
          </li>
        </ul>

        <CodeWindow
          code={`// Valid identifiers
door magac = "Cabdi"
door magac_dheer = "Cabdiraxmaan"
door magac1 = "Caasha"

// Invalid identifiers (would cause errors)
// door 1magac = "Xasan"     // Cannot start with a digit
// door door = "Fadumo"      // Cannot use a reserved keyword`}
          title="identifiers.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4" id="operators">
          Basic Operators
        </h2>
        <p className="mb-4">
          Soplang provides a variety of operators for performing operations on
          values:
        </p>

        <h3 className="text-xl font-semibold mb-2">Arithmetic Operators</h3>
        <CodeWindow
          code={`door a = 10
door b = 3

qor(a + b)    // Addition: 13
qor(a - b)    // Subtraction: 7
qor(a * b)    // Multiplication: 30
qor(a / b)    // Division: 3.333...
qor(a % b)    // Modulus (remainder): 1
qor(a ^ b)    // Exponentiation: 1000`}
          title="arithmetic.sop"
        />

        <h3 className="text-xl font-semibold mb-2 mt-6">
          Comparison Operators
        </h3>
        <CodeWindow
          code={`door a = 10
door b = 3

qor(a == b)    // Equal to: false
qor(a != b)    // Not equal to: true
qor(a > b)     // Greater than: true
qor(a < b)     // Less than: false
qor(a >= b)    // Greater than or equal to: true
qor(a <= b)    // Less than or equal to: false`}
          title="comparison.sop"
        />

        <h3 className="text-xl font-semibold mb-2 mt-6">Logical Operators</h3>
        <CodeWindow
          code={`door run = true
door been = false

qor(run && run)     // Logical AND: true
qor(run && been)    // Logical AND: false
qor(run || been)    // Logical OR: true
qor(been || been)   // Logical OR: false
qor(!run)           // Logical NOT: false
qor(!been)          // Logical NOT: true`}
          title="logical.sop"
        />

        <h3 className="text-xl font-semibold mb-2 mt-6">
          Assignment Operators
        </h3>
        <CodeWindow
          code={`door a = 10     // Basic assignment

a += 5         // Add and assign: a = a + 5
qor(a)         // 15

a -= 3         // Subtract and assign: a = a - 3
qor(a)         // 12

a *= 2         // Multiply and assign: a = a * 2
qor(a)         // 24

a /= 4         // Divide and assign: a = a / 4
qor(a)         // 6

a %= 4         // Modulus and assign: a = a % 4
qor(a)         // 2`}
          title="assignment.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4" id="keywords">
          Reserved Keywords
        </h2>
        <p className="mb-4">
          Soplang has several reserved keywords that have special meaning in the
          language:
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">door</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">tiro</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">qoraal</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
            labadaran
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">haddii</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
            haddii_kale
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
            haddii_kalena
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
            ku_celi
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
            inta_ay
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">jooji</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
            sii_wad
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">min</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">ilaa</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">howl</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
            soo_celi
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
            isku_day
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">qabo</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
            fasalka
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">nafta</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">
            ka_dhaxal
          </div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">cusub</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">qor</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">akhri</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">shey</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">liis</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">run</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">been</div>
          <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded">waxba</div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4" id="semicolons">
          Semicolons
        </h2>
        <p className="mb-4">
          In Soplang, semicolons are optional at the end of statements but
          required when placing multiple statements on a single line:
        </p>

        <CodeWindow
          code={`// Semicolons are optional at the end of a line
door a = 5
door b = 10
qor(a + b)

// Semicolons are required for multiple statements on one line
door x = 1; door y = 2; qor(x + y)`}
          title="semicolons.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4" id="case-sensitivity">
          Case Sensitivity
        </h2>
        <p className="mb-4">
          Soplang is a case-sensitive language, which means identifiers with
          different casing are treated as distinct:
        </p>

        <CodeWindow
          code={`door magac = "Aaden"
door Magac = "Hodan"

qor(magac)  // Outputs: Aaden
qor(Magac)  // Outputs: Hodan

// Keywords must be lowercase
// DOOR x = 5   // This will cause an error
// HadDii (true) { }  // This will cause an error`}
          title="case-sensitivity.sop"
        />
      </div>

      <div className="mt-10 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h2 className="text-xl font-bold mb-3">Next Steps</h2>
        <p className="mb-4">
          Now that you understand the basic syntax of Soplang, you can explore
          more specific aspects of the language:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/docs/data-types"
            className="block p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-primary">Data Types →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Learn about variables and the different data types in Soplang
            </p>
          </Link>
          <Link
            href="/docs/variables"
            className="block p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-primary">Variables →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Understand how to declare and work with variables
            </p>
          </Link>
          <Link
            href="/docs/control-flow"
            className="block p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-primary">Control Flow →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Master conditional statements and loops
            </p>
          </Link>
          <Link
            href="/docs/functions"
            className="block p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-primary">Functions →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Learn how to define and use functions
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
