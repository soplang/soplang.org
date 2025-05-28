import React from 'react';
import CodeWindow from '@/components/CodeWindow';
import DocNavigation from '@/components/DocNavigation';

export const metadata = {
  title: 'Numbers in Soplang',
  description:
    'Learn about numeric data types, operations, and functions in the Soplang programming language.',
};

export default function NumbersPage() {
  return (
    <div className="mb-12 prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-8 text-3xl font-bold text-primary">Numbers in Soplang</h1>
      <p className="mb-8 text-xl lead">
        Soplang supports various numeric types and provides a comprehensive set of operations and
        functions for working with numbers. This guide covers the essential aspects of numeric
        operations in Soplang.
      </p>

      {/* Navigation */}
      <div className="p-6 my-8 rounded-lg bg-primary/10">
        <h2 className="mb-4 text-xl font-bold">On This Page</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <a href="#numeric-types" className="text-primary hover:underline">
              Numeric Types
            </a>
          </li>
          <li>
            <a href="#numeric-literals" className="text-primary hover:underline">
              Numeric Literals
            </a>
          </li>
          <li>
            <a href="#basic-operations" className="text-primary hover:underline">
              Basic Operations
            </a>
          </li>
          <li>
            <a href="#advanced-operations" className="text-primary hover:underline">
              Advanced Operations
            </a>
          </li>
          <li>
            <a href="#math-functions" className="text-primary hover:underline">
              Math Functions
            </a>
          </li>
          <li>
            <a href="#number-conversion" className="text-primary hover:underline">
              Number Conversion
            </a>
          </li>
          <li>
            <a href="#best-practices" className="text-primary hover:underline">
              Best Practices
            </a>
          </li>
        </ul>
      </div>

      {/* Numeric Types */}
      <section id="numeric-types">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Numeric Types
        </h2>

        <p className="mb-4">
          Soplang supports two main numeric types: integers{' '}
          <code className="px-1 rounded-md bg-blue-400/35">abn</code> and floating-point numbers{' '}
          <code className="px-1 rounded-md bg-blue-400/35">toban</code>. The names come from the
          Somali words "abyoone" (number) and "tobanle" (decimal).
        </p>

        <h3 className="mt-6 mb-4 text-xl font-bold">Integers (abn)</h3>
        <p className="mb-4">
          Integers are whole numbers without a decimal point. They can be positive, negative, or
          zero.
        </p>

        <CodeWindow
          code={`// Integer declarations
abn a = 42        // Positive integer
abn b = -7        // Negative integer
abn c = 0         // Zero
abn d = 1,000,000  // Using commas for readability

// Dynamic typing with integers
door x = 100       // Automatically inferred as an integer`}
          title="integers.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Floating-Point Numbers (toban)</h3>
        <p className="mb-4">
          Floating-point numbers (or floats) represent real numbers with a decimal point.
        </p>

        <CodeWindow
          code={`// Float declarations
toban pi = 3.14159
toban e = 2.71828
toban negative = -0.5
toban small = 1.23e-4    // Scientific notation: 0.000123
toban large = 6.022e23   // Scientific notation: 6.022 × 10²³

// Dynamic typing with floats
door price = 19.99       // Automatically inferred as a float`}
          title="floats.sop"
        />

        <div className="p-4 my-6 bg-blue-100 rounded-lg dark:bg-blue-900/20">
          <h4 className="mb-2 font-bold">Note on Precision</h4>
          <p>
            Like most programming languages, Soplang's floating-point numbers follow the IEEE 754
            standard, which may lead to small precision errors in certain calculations. For
            financial calculations or when exact precision is required, consider using specialized
            libraries or techniques.
          </p>
        </div>
      </section>

      {/* Numeric Literals */}
      <section id="numeric-literals" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Numeric Literals
        </h2>

        <p className="mb-4">
          Soplang supports various formats for representing numeric literals in your code.
        </p>

        <h3 className="mt-6 mb-4 text-xl font-bold">Integer Literals</h3>
        <CodeWindow
          code={`// Decimal (base 10) - default
door decimal = 42

// Binary (base 2) - prefix with 0b
door binary = 0b101010    // 42 in binary

// Octal (base 8) - prefix with 0o
door octal = 0o52         // 42 in octal

// Hexadecimal (base 16) - prefix with 0x
door hex = 0x2A           // 42 in hexadecimal

// Using commas for readability
door million = 1,000,000
door billion = 1,000,000,000
door binary_readable = 0b1010,1010,1010`}
          title="integer_literals.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Floating-Point Literals</h3>
        <CodeWindow
          code={`// Standard decimal notation
door pi = 3.14159
door negative = -2.5

// Scientific notation
door avogadro = 6.022e23    // 6.022 × 10²³
door plancks_constant = 6.626e-34  // 6.626 × 10⁻³⁴
`}
          title="float_literals.sop"
        />
      </section>

      {/* Basic Operations */}
      <section id="basic-operations" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Basic Operations
        </h2>

        <p className="mb-4">
          Soplang supports all standard arithmetic operations for working with numbers.
        </p>

        <h3 className="mt-6 mb-4 text-xl font-bold">Arithmetic Operators</h3>
        <CodeWindow
          code={`// Addition
door sum = 5 + 3             // 8

// Subtraction
door difference = 10 - 4     // 6

// Multiplication
door product = 6 * 7         // 42

// Division
door quotient = 20 / 4       // 5
door decimal_result = 10 / 3  // 3.33333...

// Integer division (floor division)
door int_division = 10 // 3   // 3

// Modulo (remainder)
door remainder = 10 % 3      // 1

// Exponentiation
door power = 2 ** 8          // 256

// Negation
door x = 5
door negative = -x           // -5`}
          title="arithmetic_operators.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Compound Assignment Operators</h3>
        <p className="mb-4">
          Compound assignment operators combine an arithmetic operation with assignment.
        </p>

        <CodeWindow
          code={`// Addition assignment
door a = 5
a += 3              // a = a + 3, now a is 8

// Subtraction assignment
door b = 10
b -= 4              // b = b - 4, now b is 6

// Multiplication assignment
door c = 6
c *= 7              // c = c * 7, now c is 42

// Division assignment
door d = 20
d /= 4              // d = d / 4, now d is 5

// Integer division assignment
door e = 10
e //= 3             // e = e // 3, now e is 3

// Modulo assignment
door f = 10
f %= 3              // f = f % 3, now f is 1

// Exponentiation assignment
door g = 2
g **= 8             // g = g ** 8, now g is 256`}
          title="compound_assignment.sop"
        />
      </section>

      {/* Navigation */}
      <DocNavigation
        className="mt-12"
        prevPage={{
          href: '/docs/data-types',
          title: 'Data Types',
          description: 'Return to data types in Soplang',
        }}
        nextPage={{
          href: '/docs/strings',
          title: 'Strings',
          description: 'Learn about string operations and formatting in Soplang',
        }}
      />
    </div>
  );
}
