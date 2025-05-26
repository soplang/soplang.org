import React from "react";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Numbers in Soplang",
  description:
    "Learn about numeric data types, operations, and functions in the Soplang programming language.",
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
          Soplang supports two main numeric types: integers (<code>tiro</code>) and floating-point
          numbers (<code>toban</code>). The names come from the Somali words "tiro" (number) and
          "toban" (decimal).
        </p>

        <h3 className="mt-6 mb-4 text-xl font-bold">Integers (tiro)</h3>
        <p className="mb-4">
          Integers are whole numbers without a decimal point. They can be positive, negative, or
          zero.
        </p>

        <CodeWindow
          code={`// Integer declarations
tiro a = 42        // Positive integer
tiro b = -7        // Negative integer
tiro c = 0         // Zero
tiro d = 1_000_000  // Using underscores for readability

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

        <div className="p-4 mb-6 bg-blue-100 rounded-lg dark:bg-blue-900/20">
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

// Using underscores for readability
door million = 1_000_000
door billion = 1_000_000_000
door binary_readable = 0b1010_1010_1010`}
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

// Using underscores for readability
door readable_float = 3.141_592_653_589_793`}
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

      {/* Advanced Operations */}
      <section id="advanced-operations" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Advanced Operations
        </h2>

        <h3 className="mt-6 mb-4 text-xl font-bold">Bitwise Operators</h3>
        <p className="mb-4">
          Soplang provides bitwise operators for manipulating individual bits in integers.
        </p>

        <CodeWindow
          code={`// Bitwise AND
door and_result = 0b1010 & 0b1100    // 0b1000 (8)

// Bitwise OR
door or_result = 0b1010 | 0b1100     // 0b1110 (14)

// Bitwise XOR
door xor_result = 0b1010 ^ 0b1100    // 0b0110 (6)

// Bitwise NOT
door not_result = ~0b1010            // Inverts all bits

// Left shift
door left_shift = 0b1 << 3           // 0b1000 (8)

// Right shift
door right_shift = 0b1000 >> 2       // 0b0010 (2)`}
          title="bitwise_operators.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Complex Expressions</h3>
        <p className="mb-4">
          You can combine multiple operations in a single expression. Soplang follows standard
          operator precedence rules.
        </p>

        <CodeWindow
          code={`// Operator precedence
door result1 = 2 + 3 * 4        // 14 (multiplication happens first)
door result2 = (2 + 3) * 4      // 20 (parentheses override precedence)

// Complex expression
door x = 5
door y = 3
door z = 2
door result3 = x ** 2 + (y * z) / (x - z)
                // 5² + (3 * 2) / (5 - 2)
                // 25 + 6 / 3
                // 25 + 2
                // 27`}
          title="complex_expressions.sop"
        />
      </section>

      {/* Math Functions */}
      <section id="math-functions" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Math Functions
        </h2>

        <p className="mb-4">
          Soplang provides a rich set of mathematical functions through its built-in{" "}
          <code>xisaab</code> (math) module.
        </p>

        <h3 className="mt-6 mb-4 text-xl font-bold">Basic Math Functions</h3>
        <CodeWindow
          code={`// Import the math module
isticmaal xisaab

// Constants
door pi_value = xisaab.PI          // 3.141592653589793
door e_value = xisaab.E            // 2.718281828459045

// Absolute value
door abs_value = xisaab.abs(-5)    // 5

// Rounding functions
door rounded = xisaab.round(3.7)    // 4
door floor_value = xisaab.floor(3.7) // 3
door ceil_value = xisaab.ceil(3.2)   // 4

// Min and max
door minimum = xisaab.min(5, 3, 9, 1, 7)  // 1
door maximum = xisaab.max(5, 3, 9, 1, 7)  // 9

// Power and square root
door power_result = xisaab.pow(2, 8)     // 256
door sqrt_result = xisaab.sqrt(16)       // 4`}
          title="basic_math_functions.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Trigonometric Functions</h3>
        <CodeWindow
          code={`// Trigonometric functions (angles in radians)
door sin_value = xisaab.sin(xisaab.PI / 2)    // 1.0
door cos_value = xisaab.cos(0)                // 1.0
door tan_value = xisaab.tan(xisaab.PI / 4)    // 1.0

// Inverse trigonometric functions
door asin_value = xisaab.asin(1)              // π/2
door acos_value = xisaab.acos(1)              // 0
door atan_value = xisaab.atan(1)              // π/4

// Convert between degrees and radians
door radians = xisaab.radians(180)            // π
door degrees = xisaab.degrees(xisaab.PI)      // 180`}
          title="trigonometric_functions.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Logarithmic and Exponential Functions</h3>
        <CodeWindow
          code={`// Exponential functions
door exp_value = xisaab.exp(2)              // e²
door exp2_value = xisaab.exp2(3)            // 2³

// Logarithmic functions
door log_value = xisaab.log(xisaab.E)       // Natural logarithm (base e): 1.0
door log10_value = xisaab.log10(100)        // Base 10 logarithm: 2.0
door log2_value = xisaab.log2(8)            // Base 2 logarithm: 3.0`}
          title="logarithmic_functions.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Random Number Generation</h3>
        <CodeWindow
          code={`// Import the random module
isticmaal bakhtiyaa

// Random float between 0.0 and 1.0
door random_float = bakhtiyaa.random()            // e.g., 0.7231742029971469

// Random integer in range [min, max]
door random_int = bakhtiyaa.randint(1, 100)       // e.g., 42

// Random choice from a sequence
door options = ["apple", "banana", "orange", "mango"]
door random_choice = bakhtiyaa.choice(options)    // e.g., "banana"

// Random sample from a sequence
door sample = bakhtiyaa.sample(options, 2)        // e.g., ["orange", "apple"]

// Shuffle a list in place
door numbers = [1, 2, 3, 4, 5]
bakhtiyaa.shuffle(numbers)                        // e.g., [3, 1, 5, 2, 4]`}
          title="random_numbers.sop"
        />
      </section>

      {/* Number Conversion */}
      <section id="number-conversion" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Number Conversion
        </h2>

        <p className="mb-4">
          Soplang provides functions for converting between different numeric types and formats.
        </p>

        <h3 className="mt-6 mb-4 text-xl font-bold">Type Conversion</h3>
        <CodeWindow
          code={`// Convert string to integer
door str_num = "42"
door num = tiro_u_badal(str_num)      // 42 (integer)

// Convert string to float
door str_float = "3.14"
door float_val = toban_u_badal(str_float)  // 3.14 (float)

// Convert float to integer (truncates decimal part)
door float_num = 9.99
door int_num = tiro_u_badal(float_num)  // 9

// Convert integer to float
door int_val = 5
door float_result = toban_u_badal(int_val)  // 5.0`}
          title="type_conversion.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Base Conversion</h3>
        <CodeWindow
          code={`// Convert integer to binary string
door num = 42
door binary_str = tiro_u_qoraal(num, 2)    // "101010"

// Convert integer to octal string
door octal_str = tiro_u_qoraal(num, 8)     // "52"

// Convert integer to hexadecimal string
door hex_str = tiro_u_qoraal(num, 16)      // "2a"

// Convert from other bases to integer
door binary_num = tiro_u_badal("101010", 2)    // 42
door octal_num = tiro_u_badal("52", 8)         // 42
door hex_num = tiro_u_badal("2a", 16)          // 42`}
          title="base_conversion.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Formatting Numbers as Strings</h3>
        <CodeWindow
          code={`// Basic string conversion
door num = 42
door num_str = qoraal_u_badal(num)      // "42"

// Format float with specific precision
door pi = 3.14159265359
door formatted_pi = f"{pi:.2f}"          // "3.14"

// Format with thousands separator
door large_num = 1000000
door formatted_large = f"{large_num:,}"  // "1,000,000"

// Format as percentage
door ratio = 0.7568
door percentage = f"{ratio:.2%}"         // "75.68%"

// Format in scientific notation
door avogadro = 6.02214076e23
door scientific = f"{avogadro:.4e}"      // "6.0221e+23"`}
          title="number_formatting.sop"
        />
      </section>

      {/* Best Practices */}
      <section id="best-practices" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Best Practices
        </h2>

        <ul className="space-y-8">
          <li>
            <h3 className="mb-2 text-xl font-bold">Be Aware of Floating-Point Precision</h3>
            <p className="mb-2">
              Floating-point arithmetic can lead to small precision errors. Be cautious when
              comparing floats for equality.
            </p>
            <CodeWindow
              code={`// Potential precision issue
door a = 0.1 + 0.2
door b = 0.3

// Bad practice: Direct comparison
haddii a == b {
    qorln("Equal")
} kale {
    qorln("Not equal")  // This will likely execute due to precision errors
}

// Good practice: Use a small epsilon for comparison
door EPSILON = 1e-10
haddii xisaab.abs(a - b) < EPSILON {
    qorln("Equal within tolerance")
}`}
              title="floating_point_comparison.sop"
            />
          </li>

          <li>
            <h3 className="mb-2 text-xl font-bold">Use Integer Division Appropriately</h3>
            <p className="mb-2">
              Be aware of the difference between regular division (<code>/</code>) and integer
              division (<code>//</code>).
            </p>
            <CodeWindow
              code={`// Regular division (returns float)
door result1 = 5 / 2      // 2.5

// Integer division (returns integer)
door result2 = 5 // 2     // 2

// Choose based on your needs
howl calculate_average(scores) {
    // Use regular division for average
    soo_celi xisaab.sum(scores) / scores.dherer()
}

howl calculate_pages_needed(items, items_per_page) {
    // Use ceiling division pattern for pages
    soo_celi (items + items_per_page - 1) // items_per_page
}`}
              title="division_types.sop"
            />
          </li>

          <li>
            <h3 className="mb-2 text-xl font-bold">Validate Numeric Input</h3>
            <p className="mb-2">
              Always validate numeric input from users or external sources.
            </p>
            <CodeWindow
              code={`// Validate numeric input
howl get_positive_number() {
    inta true {
        door input = akhri_weydii("Enter a positive number: ")
        
        isku_day {
            door num = tiro_u_badal(input)
            
            haddii num > 0 {
                soo_celi num
            } kale {
                qorln("Please enter a positive number.")
            }
        } qabso {
            qorln("Invalid input. Please enter a number.")
        }
    }
}`}
              title="validate_numeric_input.sop"
            />
          </li>

          <li>
            <h3 className="mb-2 text-xl font-bold">Use Underscores for Readability</h3>
            <p className="mb-2">
              Make large numbers more readable by using underscores as digit separators.
            </p>
            <CodeWindow
              code={`// Hard to read
door population = 7800000000

// Much more readable
door population = 7_800_000_000

// Also works with other number formats
door binary = 0b1101_0101_1010_1101
door hex = 0xD5AD
door pi = 3.141_592_653_589_793`}
              title="number_readability.sop"
            />
          </li>
        </ul>
      </section>

      {/* Navigation */}
      <DocNavigation
        className="mt-12"
        prevPage={{
          href: "/docs/data-types",
          title: "Data Types",
          description: "Return to data types in Soplang",
        }}
        nextPage={{
          href: "/docs/strings",
          title: "Strings",
          description: "Learn about string operations and formatting in Soplang",
        }}
      />
    </div>
  );
}
