import React from 'react';
import Link from 'next/link';
import CodeWindow from '@/components/CodeWindow';
import DocNavigation from '@/components/DocNavigation';

export const metadata = {
  title: 'Soplang Syntax Basics',
  description:
    'Learn the fundamental syntax of Soplang, including statements, comments, operators, and code structure.',
};

export default function SyntaxBasicsPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-6 text-3xl font-bold text-primary">Soplang Syntax Basics</h1>

      <p className="mb-6 text-xl lead">
        Understanding the basic syntax elements of Soplang is the first step to becoming proficient
        with this Programming language. This guide covers the fundamental building blocks of Soplang
        code.
      </p>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold" id="comments">
          Comments
        </h2>
        <p className="mb-4">
          Comments allow you to add notes to your code that are ignored by the interpreter. Soplang
          supports single-line and multi-line comments:
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
        <h2 className="mb-4 text-2xl font-bold" id="statements">
          Statements and Blocks
        </h2>
        <p className="mb-4">
          A statement in Soplang is a complete instruction. Statements are typically separated by
          newlines or semicolons. Blocks of code are enclosed in curly braces <code>{}</code>:
        </p>

        <CodeWindow
          code={`// Single statements
door magac = "Soplang"
qor(magac)

// Multiple statements on one line (separated by semicolons)
door a = 5; door b = 10; qor(a + b)

// Code blocks
abn da = 17

haddii (da >= 20) {
  qor("Waxaad tahay dhallinyaro")
} 
haddii_kale (da >= 18) {
  qor("Waad qaan gaadhay")
} 
ugudambeyn {
  qor("Waad yar tahay")
}`}
          title="statements.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold" id="identifiers">
          Identifiers and Naming Conventions
        </h2>
        <p className="mb-4">
          Identifiers are names used for variables, functions, classes, etc. In Soplang:
        </p>

        <ul className="mb-4 list-disc list-inside">
          <li>Identifiers can contain letters, digits, and underscores</li>
          <li>Identifiers cannot start with a digit</li>
          <li>
            Identifiers are case-sensitive (<code>magac</code> and <code>Magac</code> are different)
          </li>
          <li>
            Reserved keywords (like <code>door</code>, <code>haddii</code>, etc.) cannot be used as
            identifiers
          </li>
        </ul>

        <CodeWindow
          code={`// Valid identifiers
door magac = "Cabdi"
door magac_dheer = "Cabdiraxmaan"
door magac1 = "Caasha"

// Invalid identifiers (would cause errors)
door 1magac = "Xasan"     // Cannot start with a digit
door door = "Fadumo"      // Cannot use a reserved keyword`}
          title="identifiers.sop"
        />
      </div>

      {/* <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold" id="operators">
          Basic Operators
        </h2>
        <p className="mb-4">
          Soplang provides a variety of operators for performing operations on values:
        </p>

        <h3 className="mb-2 text-xl font-semibold">Arithmetic Operators</h3>
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

        <h3 className="mt-6 mb-2 text-xl font-semibold">Comparison Operators</h3>
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

        <h3 className="mt-6 mb-2 text-xl font-semibold">Logical Operators</h3>
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

        <h3 className="mt-6 mb-2 text-xl font-semibold">Assignment Operators</h3>
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
      </div> */}

      {/* Reserved Keywords Goes to the -> /docs/built-in-functions  */}
      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold" id="keywords">
          Reserved Keywords
        </h2>
        <p className="mb-4">
          Soplang has several reserved keywords that have special meaning in the language:
        </p>

        <div className="grid grid-cols-2 gap-2 mb-4 font-medium md:grid-cols-4">
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">door</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">abn</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">qoraal</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">labadaran</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">haddii</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">haddii_kale</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">ugudambeyn</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">ku_celi</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">inta_ay</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">jooji</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">sii_wad</div>
          {/* <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">min</div> */}
          {/* <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">ilaa</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">howl</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">soo_celi</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">isku_day</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">qabo</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">fasalka</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">nafta</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">ka_dhaxal</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">cusub</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">qor</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">akhri</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">shey</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">liis</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">run</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">been</div>
          <div className="p-2 bg-gray-100 rounded dark:bg-gray-700">waxba</div> */}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="mb-4 text-2xl font-bold" id="semicolons">
          Semicolons
        </h2>
        <p className="mb-4">
          In Soplang, semicolons are optional at the end of statements but required when placing
          multiple statements on a single line:
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
        <h2 className="mb-4 text-2xl font-bold" id="case-sensitivity">
          Case Sensitivity
        </h2>
        <p className="mb-4">
          Soplang is a case-sensitive language, which means identifiers with different casing are
          treated as distinct:
        </p>

        <CodeWindow
          code={`door magac = "Aaden"
door Magac = "Hodan"

qor(magac)  // Outputs: Aaden
qor(Magac)  // Outputs: Hodan

// Keywords must be lowercase
DOOR x = 5   // This will cause an error
HadDii (true) { }  // This will cause an error`}
          title="case-sensitivity.sop"
        />
      </div>

      {/* <div className="p-6 mt-10 rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <h2 className="mb-3 text-xl font-bold">Next Steps</h2>
        <p className="mb-4">
          Now that you understand the basic syntax of Soplang, you can explore more specific aspects
          of the language:
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Link
            href="/docs/data-types"
            className="block p-4 transition-shadow bg-white rounded-md shadow-sm dark:bg-gray-800 hover:shadow-md"
          >
            <h3 className="font-semibold text-primary">Data Types →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Learn about variables and the different data types in Soplang
            </p>
          </Link>
          <Link
            href="/docs/variables"
            className="block p-4 transition-shadow bg-white rounded-md shadow-sm dark:bg-gray-800 hover:shadow-md"
          >
            <h3 className="font-semibold text-primary">Variables →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Understand how to declare and work with variables
            </p>
          </Link>
          <Link
            href="/docs/control-flow"
            className="block p-4 transition-shadow bg-white rounded-md shadow-sm dark:bg-gray-800 hover:shadow-md"
          >
            <h3 className="font-semibold text-primary">Control Flow →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Master conditional statements and loops
            </p>
          </Link>
          <Link
            href="/docs/functions"
            className="block p-4 transition-shadow bg-white rounded-md shadow-sm dark:bg-gray-800 hover:shadow-md"
          >
            <h3 className="font-semibold text-primary">Functions →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Learn how to define and use functions
            </p>
          </Link>
        </div>
      </div> */}
      {/* <div className="pt-8 mt-16 border-t border-gray-200 dark:border-gray-700"></div> */}
      <DocNavigation
        className="mt-10"
        prevPage={{
          href: '/docs/getting-started',
          title: 'Getting Started',
          description: 'Return to the introduction and setup guide',
        }}
        nextPage={{
          href: '/docs/data-types',
          title: 'Data Types',
          description: 'Learn about variables and the different data types in Soplang',
        }}
      />
    </div>
  );
}
