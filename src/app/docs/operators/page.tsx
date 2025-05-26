import React from "react";
import Link from "next/link";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Operators in Soplang",
  description:
    "Learn about arithmetic, comparison, logical, and other operators in the Soplang programming language.",
};

export default function OperatorsPage() {
  return (
    <div className="mb-12 prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-8 text-3xl font-bold text-primary">Operators in Soplang</h1>
      <p className="mb-8 text-xl lead">
        Operators are special symbols that perform operations on variables and values. Soplang
        provides a comprehensive set of operators for arithmetic, comparison, logical operations,
        and more.
      </p>

      {/* Navigation */}
      <div className="p-6 my-8 rounded-lg bg-primary/10">
        <h2 className="mb-4 text-xl font-bold">On This Page</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <a href="#arithmetic-operators" className="text-primary hover:underline">
              Arithmetic Operators
            </a>
          </li>
          <li>
            <a href="#comparison-operators" className="text-primary hover:underline">
              Comparison Operators
            </a>
          </li>
          <li>
            <a href="#logical-operators" className="text-primary hover:underline">
              Logical Operators
            </a>
          </li>
          <li>
            <a href="#assignment-operators" className="text-primary hover:underline">
              Assignment Operators
            </a>
          </li>
          <li>
            <a href="#bitwise-operators" className="text-primary hover:underline">
              Bitwise Operators
            </a>
          </li>
          <li>
            <a href="#identity-membership" className="text-primary hover:underline">
              Identity and Membership Operators
            </a>
          </li>
          <li>
            <a href="#operator-precedence" className="text-primary hover:underline">
              Operator Precedence
            </a>
          </li>
          <li>
            <a href="#best-practices" className="text-primary hover:underline">
              Best Practices
            </a>
          </li>
        </ul>
      </div>

      {/* Arithmetic Operators */}
      <section id="arithmetic-operators">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Arithmetic Operators
        </h2>

        <p className="mb-4">
          Arithmetic operators are used to perform mathematical operations between variables and/or
          values.
        </p>

        <CodeWindow
          code={`// Basic arithmetic operators
door a = 10
door b = 3

// Addition
door sum = a + b        // 13

// Subtraction
door difference = a - b  // 7

// Multiplication
door product = a * b     // 30

// Division (returns float)
door quotient = a / b    // 3.3333...

// Integer Division (floor division)
door int_div = a // b    // 3

// Modulus (remainder)
door remainder = a % b   // 1

// Exponentiation
door power = a ** b      // 1000 (10^3)

// Negation
door negative = -a       // -10`}
          title="arithmetic_operators.sop"
        />
      </section>

      {/* Comparison Operators */}
      <section id="comparison-operators" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Comparison Operators
        </h2>
        
        <p className="mb-4">
          Comparison operators are used to compare two values or expressions and return a boolean
          result (true or false).
        </p>

        <CodeWindow
          code={`// Comparison operators
door a = 10
door b = 3

// Equal to
door is_equal = a == b       // false

// Not equal to
door not_equal = a != b      // true

// Greater than
door greater = a > b         // true

// Less than
door less = a < b            // false

// Greater than or equal to
door greater_equal = a >= b  // false

// Less than or equal to
door less_equal = a <= b     // true`}
          title="comparison_operators.sop"
        />
      </section>

      {/* Logical Operators */}
      <section id="logical-operators" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Logical Operators
        </h2>
        
        <p className="mb-4">
          Logical operators are used to combine conditional statements and evaluate boolean
          expressions.
        </p>

        <CodeWindow
          code={`// Logical operators
door p = true
door q = false

// Logical AND
door and_result = p && q      // false

// Logical OR
door or_result = p || q       // true

// Logical NOT
door not_result = !p          // false

// Alternative Somali keywords
door iyo_result = p iyo q      // Same as p && q (false)
door ama_result = p ama q      // Same as p || q (true)
door ma_result = ma p          // Same as !p (false)`}
          title="logical_operators.sop"
        />
      </section>

      {/* Assignment Operators */}
      <section id="assignment-operators" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Assignment Operators
        </h2>
        
        <p className="mb-4">
          Assignment operators are used to assign values to variables, often combining assignment
          with another operation.
        </p>

        <CodeWindow
          code={`// Basic assignment
door x = 10

// Compound assignment operators

// Addition assignment
x += 5      // x = x + 5, now x is 15

// Subtraction assignment
x -= 3      // x = x - 3, now x is 12

// Multiplication assignment
x *= 2      // x = x * 2, now x is 24

// Division assignment
x /= 4      // x = x / 4, now x is 6

// Integer division assignment
x //= 2     // x = x // 2, now x is 3

// Modulus assignment
x %= 2      // x = x % 2, now x is 1`}
          title="assignment_operators.sop"
        />
      </section>
      
      {/* Bitwise Operators */}
      <section id="bitwise-operators" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Bitwise Operators
        </h2>
        
        <p className="mb-4">
          Bitwise operators perform operations on binary representations of integers at the bit
          level.
        </p>

        <CodeWindow
          code={`// Bitwise operators
door a = 60  // 00111100 in binary
door b = 13  // 00001101 in binary

// Bitwise AND
door and_result = a & b   // 12 (00001100)

// Bitwise OR
door or_result = a | b    // 61 (00111101)

// Bitwise XOR (exclusive OR)
door xor_result = a ^ b   // 49 (00110001)

// Bitwise NOT (complement)
door not_result = ~a      // -61 (11000011, in 2's complement)

// Left shift
door left_shift = a << 2  // 240 (11110000)

// Right shift
door right_shift = a >> 2 // 15 (00001111)`}
          title="bitwise_operators.sop"
        />
      </section>
      
      {/* Identity and Membership Operators */}
      <section id="identity-membership" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Identity and Membership Operators
        </h2>

        <p className="mb-4">
          Soplang provides operators to check identity (if objects are the same) and membership
          (if an item is in a collection).
        </p>

        <CodeWindow
          code={`// Identity operators (check if objects are the same)
door list1 = [1, 2, 3]
door list2 = [1, 2, 3]
door list3 = list1

// is (same object)
door same_object = list1 is list3  // true
door diff_object = list1 is list2  // false

// is not (different objects)
door not_same = list1 is not list2  // true

// Membership operators (check if item is in collection)
door fruits = ["apple", "banana", "orange"]

// in (item exists in collection)
door has_banana = "banana" ku jira fruits  // true

// not in (item doesn't exist in collection)
door no_grape = "grape" ku ma jira fruits  // true`}
          title="identity_membership.sop"
        />
      </section>
      
      {/* Operator Precedence */}
      <section id="operator-precedence" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Operator Precedence
        </h2>
        
        <p className="mb-4">
          Operator precedence determines the order in which operators are evaluated in an
          expression. Operators with higher precedence are evaluated first.
        </p>

        <CodeWindow
          code={`// Operator precedence examples
door result1 = 2 + 3 * 4        // 14 (multiplication before addition)
door result2 = (2 + 3) * 4      // 20 (parentheses override precedence)

// Complex expression
door result3 = 2 + 3 * 4 - 6 / 2  // 11 (3*4=12, 6/2=3, 2+12-3=11)`}
          title="operator_precedence.sop"
        />
        
        <div className="p-4 mb-6 bg-blue-100 rounded-lg dark:bg-blue-900/20">
          <h4 className="mb-2 font-bold">Best Practice</h4>
          <p>
            When in doubt about operator precedence, use parentheses to make your code more
            readable and to ensure operations are performed in the order you intend.
          </p>
        </div>
      </section>
      
      {/* Best Practices */}
      <section id="best-practices" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Best Practices
        </h2>

        <ul className="space-y-4">
          <li>
            <h3 className="mb-2 text-xl font-bold">Use Parentheses for Clarity</h3>
            <p>
              Even when operator precedence makes it unnecessary, using parentheses can make your
              code more readable and less prone to errors.
            </p>
          </li>
          <li>
            <h3 className="mb-2 text-xl font-bold">Be Careful with Compound Assignments</h3>
            <p>
              Compound assignment operators are concise but can make code harder to read if
              overused or used with complex expressions.
            </p>
          </li>
          <li>
            <h3 className="mb-2 text-xl font-bold">Leverage Short-Circuit Evaluation</h3>
            <p>
              Use the short-circuit behavior of logical operators to write more concise code and
              avoid unnecessary computations.
            </p>
          </li>
        </ul>
      </section>
      
      {/* Navigation */}
      <DocNavigation
        className="mt-12"
        prevPage={{
          href: "/docs/strings",
          title: "Strings",
          description: "Return to string operations and formatting in Soplang",
        }}
        nextPage={{
          href: "/docs/conditional-statements",
          title: "Conditional Statements",
          description: "Learn about if-else statements and decision making in Soplang",
        }}
      />
    </div>
  );
}
