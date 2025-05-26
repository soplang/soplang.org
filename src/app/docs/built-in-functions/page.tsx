import React from "react";
import Link from "next/link";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Built-in Functions in Soplang",
  description:
    "Learn about the built-in functions available in the Soplang programming language for input/output, string manipulation, math operations, and more.",
};

export default function BuiltInFunctionsPage() {
  return (
    <div className="mb-12 prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-8 text-3xl font-bold text-primary">Built-in Functions in Soplang</h1>
      <p className="mb-8 text-xl lead">
        Soplang provides a rich set of built-in functions that help you perform common tasks without
        having to write the code yourself. These functions are always available and can be called
        directly in your code.
      </p>

      {/* Navigation */}
      <div className="p-6 my-8 rounded-lg bg-primary/10">
        <h2 className="mb-4 text-xl font-bold">On This Page</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <a href="#input-output-functions" className="text-primary hover:underline">
              Input and Output Functions
            </a>
          </li>
          <li>
            <a href="#string-functions" className="text-primary hover:underline">
              String Functions
            </a>
          </li>
          <li>
            <a href="#math-functions" className="text-primary hover:underline">
              Math Functions
            </a>
          </li>
          <li>
            <a href="#type-conversion" className="text-primary hover:underline">
              Type Conversion Functions
            </a>
          </li>
          <li>
            <a href="#list-functions" className="text-primary hover:underline">
              List Functions
            </a>
          </li>
          <li>
            <a href="#utility-functions" className="text-primary hover:underline">
              Utility Functions
            </a>
          </li>
          <li>
            <a href="#best-practices" className="text-primary hover:underline">
              Best Practices
            </a>
          </li>
        </ul>
      </div>

      {/* Input and Output Functions */}
      <section id="input-output-functions">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Input and Output Functions
        </h2>

        <p className="mb-4">
          These functions allow you to interact with the user and display information.
        </p>

        <h3 className="mb-2 text-xl font-semibold">qor() - Print</h3>
        <p className="mb-4">
          Displays values to the console without a newline at the end.
        </p>

        <CodeWindow
          code={`// Basic printing
qor("Hello")      // Displays: Hello
qor(42)          // Displays: 42
qor(true)        // Displays: true

// Multiple values
qor("The answer is", 42)  // Displays: The answer is 42`}
          title="print_examples.sop"
        />

        <h3 className="mt-6 mb-2 text-xl font-semibold">qorln() - Print Line</h3>
        <p className="mb-4">
          Displays values to the console with a newline at the end.
        </p>

        <CodeWindow
          code={`// Printing with newline
qorln("Hello")    // Displays: Hello (with newline)
qorln("World")    // Displays: World (on next line)

// Multiple values
qorln("Name:", "Ahmed", "Age:", 25)  // Displays: Name: Ahmed Age: 25 (with newline)`}
          title="println_examples.sop"
        />

        <h3 className="mt-6 mb-2 text-xl font-semibold">gelin() - Input</h3>
        <p className="mb-4">
          Prompts the user for input and returns the entered value as a string.
        </p>

        <CodeWindow
          code={`// Basic input
door name = gelin("Enter your name: ")
qorln("Hello,", name)

// Input with conversion
door age_str = gelin("Enter your age: ")
door age = abn(age_str)  // Convert string to number
qorln("In 10 years, you will be", age + 10, "years old")`}
          title="input_examples.sop"
        />
      </section>

      {/* String Functions */}
      <section id="string-functions" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          String Functions
        </h2>

        <p className="mb-4">
          Soplang provides several built-in functions for manipulating strings.
        </p>

        <h3 className="mb-2 text-xl font-semibold">dherer() - Length</h3>
        <p className="mb-4">
          Returns the length of a string or collection.
        </p>

        <CodeWindow
          code={`door greeting = "Hello, World!"
door length = dherer(greeting)  // 13

door numbers = [1, 2, 3, 4, 5]
door count = dherer(numbers)    // 5`}
          title="length_examples.sop"
        />

        <h3 className="mt-6 mb-2 text-xl font-semibold">String Manipulation Functions</h3>

        <CodeWindow
          code={`door text = "Soplang Programming"

// Convert to uppercase
door upper = kor_dhig(text)  // "SOPLANG PROGRAMMING"

// Convert to lowercase
door lower = yar_dhig(text)  // "soplang programming"

// Trim whitespace
door padded = "  hello  "
door trimmed = trim(padded)  // "hello"

// Replace text
door replaced = bedel(text, "Programming", "Language")  // "Soplang Language"

// Split string
door parts = kala_jar(text, " ")  // ["Soplang", "Programming"]

// Join strings
door words = ["Hello", "from", "Soplang"]
door joined = ku_dar(words, " ")  // "Hello from Soplang"`}
          title="string_manipulation.sop"
        />
      </section>

      {/* Math Functions */}
      <section id="math-functions" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Math Functions
        </h2>

        <p className="mb-4">
          Soplang includes various mathematical functions for numerical operations.
        </p>

        <CodeWindow
          code={`// Basic math functions
door abs_value = abs(-10)           // 10 (absolute value)
door rounded = round(3.7)          // 4 (round to nearest integer)
door floored = floor(3.7)          // 3 (round down)
door ceiled = ceil(3.2)            // 4 (round up)

// Trigonometric functions
door sine = sin(0.5)               // Sine of 0.5 radians
door cosine = cos(0.5)             // Cosine of 0.5 radians
door tangent = tan(0.5)            // Tangent of 0.5 radians

// Other math functions
door square_root = sqrt(16)        // 4 (square root)
door power_result = pow(2, 3)      // 8 (2 raised to power 3)
door log_result = log(100)         // Natural logarithm of 100
door log10_result = log10(100)     // 2 (base-10 logarithm of 100)

// Min and max
door minimum = min(5, 3, 8, 1)     // 1
door maximum = max(5, 3, 8, 1)     // 8

// Random number
door random_val = random()         // Random number between 0 and 1
door random_range = random_int(1, 10)  // Random integer between 1 and 10`}
          title="math_functions.sop"
        />
      </section>

      {/* Type Conversion Functions */}
      <section id="type-conversion" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Type Conversion Functions
        </h2>

        <p className="mb-4">
          These functions allow you to convert between different data types.
        </p>

        <CodeWindow
          code={`// String to number conversions
door num_str = "42"
door num = abn(num_str)        // 42 (integer)
door float_str = "3.14"
door float_num = toban_dhig(float_str)  // 3.14 (float)

// Number to string conversion
door x = 42
door x_str = qoraal_dhig(x)         // "42"

// Boolean conversions
door bool_val = run_dhig("true")     // true
door bool_str = qoraal_dhig(true)    // "true"

// List conversions
door str_chars = liis_dhig("hello")  // ["h", "e", "l", "l", "o"]
door num_list = [1, 2, 3, 4]
door num_str = qoraal_dhig(num_list)  // "[1, 2, 3, 4]"`}
          title="type_conversion.sop"
        />
      </section>

      {/* List Functions */}
      <section id="list-functions" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          List Functions
        </h2>

        <p className="mb-4">
          Soplang provides several functions for working with lists and collections.
        </p>

        <CodeWindow
          code={`door numbers = [3, 1, 4, 1, 5, 9]

// Add element to end of list
ku_dar(numbers, 2)  // numbers is now [3, 1, 4, 1, 5, 9, 2]

// Remove and return last element
door last = ka_jar(numbers)  // last = 2, numbers is now [3, 1, 4, 1, 5, 9]

// Insert at specific position
ku_dar_meel(numbers, 0, 0)  // numbers is now [0, 3, 1, 4, 1, 5, 9]

// Remove at specific position
ka_jar_meel(numbers, 2)  // numbers is now [0, 3, 4, 1, 5, 9]

// Sort list
kala_sooc(numbers)  // numbers is now [0, 1, 3, 4, 5, 9]

// Reverse list
kala_rogrog(numbers)  // numbers is now [9, 5, 4, 3, 1, 0]

// Find index of element
door index = ka_raadi(numbers, 5)  // index = 1

// Count occurrences
door fruits = ["apple", "banana", "apple", "orange"]
door count = ku_tiri(fruits, "apple")  // count = 2`}
          title="list_functions.sop"
        />
      </section>

      {/* Utility Functions */}
      <section id="utility-functions" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Utility Functions
        </h2>

        <p className="mb-4">
          These functions provide various utility operations in Soplang.
        </p>

        <CodeWindow
          code={`// Type checking
door x = 42
door is_num = nooca(x) == "tiro"  // true

door text = "hello"
door is_str = nooca(text) == "qoraal"  // true

// Time functions
door current_time = waqtiga()  // Returns current timestamp
door formatted_time = waqti_format(current_time, "%Y-%m-%d")  // e.g., "2025-05-26"

// System functions
sugna("Processing data...")  // Sleep for 1 second

// File existence check
door exists = file_jira("/path/to/file.txt")  // Returns true if file exists

// Get environment variable
door home_dir = deegaan_hel("HOME")  // Returns value of HOME environment variable`}
          title="utility_functions.sop"
        />
      </section>

      {/* Best Practices */}
      <section id="best-practices" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Best Practices
        </h2>

        <ul className="space-y-4">
          <li>
            <h3 className="mb-2 text-xl font-bold">Error Handling</h3>
            <p>
              Always check for potential errors when using functions that might fail, such as type
              conversions or file operations.
            </p>
            <CodeWindow
              code={`// Good practice: Check for conversion errors
haday {
  door age_str = gelin("Enter your age: ")
  door age = abn(age_str)
  qorln("In 10 years, you will be", age + 10, "years old")
} hadii_qalad {
  qorln("Please enter a valid number for age")
}`}
              title="error_handling.sop"
            />
          </li>
          <li className="mt-6">
            <h3 className="mb-2 text-xl font-bold">Function Composition</h3>
            <p>
              Combine built-in functions to create more powerful operations.
            </p>
            <CodeWindow
              code={`// Combining functions for more complex operations
door text = "  Hello, World!  "

// Chain operations: trim, convert to lowercase, and split
door words = kala_jar(yar_dhig(trim(text)), " ")

// Result: ["hello,", "world!"]`}
              title="function_composition.sop"
            />
          </li>
          <li className="mt-6">
            <h3 className="mb-2 text-xl font-bold">Performance Considerations</h3>
            <p>
              Be mindful of performance when using functions in loops or with large data sets.
            </p>
            <CodeWindow
              code={`// Less efficient: Computing length inside loop
door text = "Hello, World!"
ku_celi i = 0; i < dherer(text); i++ {
  // dherer() is called on each iteration
  qorln(text[i])
}

// More efficient: Compute length once
door text = "Hello, World!"
door len = dherer(text)
ku_celi i = 0; i < len; i++ {
  qorln(text[i])
}`}
              title="performance_tips.sop"
            />
          </li>
        </ul>
      </section>

      {/* Navigation */}
      <DocNavigation
        className="mt-12"
        prevPage={{
          href: "/docs/operators",
          title: "Operators",
          description: "Return to operators in Soplang",
        }}
        nextPage={{
          href: "/docs/error-handling",
          title: "Error Handling",
          description: "Learn about error handling in Soplang",
        }}
      />
    </div>
  );
}
