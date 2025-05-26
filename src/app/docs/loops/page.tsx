import React from "react";
import Link from "next/link";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Loops in Soplang",
  description:
    "Learn about different types of loops and iteration techniques in the Soplang programming language.",
};

export default function LoopsPage() {
  return (
    <div className="mb-12 prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-8 text-3xl font-bold text-primary">Loops in Soplang</h1>
      <p className="mb-8 text-xl lead">
        Loops are essential programming constructs that allow you to execute a block of code
        repeatedly. Soplang provides several types of loops to handle different iteration needs.
      </p>

      {/* Navigation */}
      <div className="p-6 my-8 rounded-lg bg-primary/10">
        <h2 className="mb-4 text-xl font-bold">On This Page</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <a href="#for-loops" className="text-primary hover:underline">
              For Loops
            </a>
          </li>
          <li>
            <a href="#while-loops" className="text-primary hover:underline">
              While Loops
            </a>
          </li>
          <li>
            <a href="#do-while-loops" className="text-primary hover:underline">
              Do-While Loops
            </a>
          </li>
          <li>
            <a href="#control-statements" className="text-primary hover:underline">
              Loop Control Statements
            </a>
          </li>
          <li>
            <a href="#best-practices" className="text-primary hover:underline">
              Best Practices
            </a>
          </li>
        </ul>
      </div>

      {/* For Loops */}
      <section id="for-loops">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          For Loops
        </h2>

        <p className="mb-4">
          The <code>ku_celi</code> (for) loop is used to iterate over a sequence (like a list,
          string, or range) or any iterable object. The name comes from the Somali phrase "ku celi"
          which means "repeat".
        </p>

        <h3 className="mt-6 mb-4 text-xl font-bold">Basic For Loop</h3>
        <CodeWindow
          code={`// Iterating over a list
door fruits = ["apple", "banana", "orange", "mango"]

ku_celi fruit ku dhex jira fruits {
    qorln(fruit)
}

/* Output:
apple
banana
orange
mango
*/`}
          title="basic_for_loop.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">For Loop with Range</h3>
        <p className="mb-4">
          You can use the <code>tiro_taxane</code> (range) function to iterate over a sequence of
          numbers.
        </p>

        <CodeWindow
          code={`// Iterating over a range of numbers
ku_celi i ku dhex jira tiro_taxane(5) {
    qorln(i)
}

/* Output:
0
1
2
3
4
*/

// Range with start, stop, and step parameters
ku_celi i ku dhex jira tiro_taxane(2, 10, 2) {
    qorln(i)
}

/* Output:
2
4
6
8
*/`}
          title="for_loop_range.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">For Loop with Index</h3>
        <p className="mb-4">
          To access both the index and value during iteration, you can use the{" "}
          <code>tirsan</code> (enumerate) function.
        </p>

        <CodeWindow
          code={`// Iterating with index
door fruits = ["apple", "banana", "orange", "mango"]

ku_celi (index, fruit) ku dhex jira tirsan(fruits) {
    qorln(index + ": " + fruit)
}

/* Output:
0: apple
1: banana
2: orange
3: mango
*/`}
          title="for_loop_index.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">For Loop with Dictionary</h3>
        <p className="mb-4">You can iterate over the keys, values, or key-value pairs of a dictionary.</p>

        <CodeWindow
          code={`// Dictionary iteration
door person = {
    "name": "Ahmed",
    "age": 30,
    "city": "Mogadishu",
    "occupation": "Engineer"
}

// Iterating over keys
qorln("Keys:")
ku_celi key ku dhex jira person.fureyaal() {
    qorln(key)
}

// Iterating over values
qorln("\nValues:")
ku_celi value ku dhex jira person.qiyamyaal() {
    qorln(value)
}

// Iterating over key-value pairs
qorln("\nKey-Value Pairs:")
ku_celi (key, value) ku dhex jira person.shayada() {
    qorln(key + ": " + value)
}`}
          title="for_loop_dictionary.sop"
        />
      </section>

      {/* While Loops */}
      <section id="while-loops" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          While Loops
        </h2>

        <p className="mb-4">
          The <code>inta</code> (while) loop executes a block of code as long as a specified
          condition is true. The name comes from the Somali word "inta" which means "while" or
          "as long as".
        </p>

        <h3 className="mt-6 mb-4 text-xl font-bold">Basic While Loop</h3>
        <CodeWindow
          code={`// Basic while loop
door count = 1

inta count <= 5 {
    qorln(count)
    count += 1
}

/* Output:
1
2
3
4
5
*/`}
          title="basic_while_loop.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">While Loop with Condition Update</h3>
        <CodeWindow
          code={`// Processing a list with while loop
door numbers = [10, 20, 30, 40, 50]
door index = 0

inta index < numbers.dherer() {
    qorln("Number at index " + index + ": " + numbers[index])
    index += 1
}

/* Output:
Number at index 0: 10
Number at index 1: 20
Number at index 2: 30
Number at index 3: 40
Number at index 4: 50
*/`}
          title="while_loop_condition.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Infinite While Loop with Break</h3>
        <p className="mb-4">
          You can create an infinite loop using <code>inta true</code> and exit it using the{" "}
          <code>jebi</code> (break) statement when a certain condition is met.
        </p>

        <CodeWindow
          code={`// Infinite loop with break
door count = 1

inta true {
    qorln(count)
    count += 1
    
    haddii count > 5 {
        qorln("Breaking the loop")
        jebi  // Exit the loop
    }
}

qorln("Loop ended")

/* Output:
1
2
3
4
5
Breaking the loop
Loop ended
*/`}
          title="while_infinite_break.sop"
        />
      </section>

      {/* Do-While Loops */}
      <section id="do-while-loops" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Do-While Loops
        </h2>

        <p className="mb-4">
          The <code>samee_inta</code> (do-while) loop is similar to the while loop, but it
          executes the code block at least once before checking the condition. The name combines
          "samee" (do) and "inta" (while) in Somali.
        </p>

        <h3 className="mt-6 mb-4 text-xl font-bold">Basic Do-While Loop</h3>
        <CodeWindow
          code={`// Basic do-while loop
door count = 1

samee {
    qorln(count)
    count += 1
} inta count <= 5

/* Output:
1
2
3
4
5
*/`}
          title="basic_do_while.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Do-While vs While</h3>
        <p className="mb-4">
          The key difference between <code>samee_inta</code> and <code>inta</code> is that
          do-while always executes the code block at least once, even if the condition is initially
          false.
        </p>

        <CodeWindow
          code={`// Comparing do-while and while when condition is initially false
door x = 10

// Do-while loop (executes once)
qorln("Do-while loop:")
samee {
    qorln("x = " + x)
    x += 1
} inta x < 10

// While loop (doesn't execute)
qorln("\nWhile loop:")
x = 10  // Reset x
inta x < 10 {
    qorln("x = " + x)
    x += 1
}

/* Output:
Do-while loop:
x = 10

While loop:
*/`}
          title="do_while_vs_while.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">User Input Validation</h3>
        <p className="mb-4">
          Do-while loops are particularly useful for input validation where you want to prompt
          the user at least once and then repeat until valid input is received.
        </p>

        <CodeWindow
          code={`// Input validation with do-while
door valid_input = false
door number = 0

samee {
    door input = akhri_weydii("Enter a positive number: ")
    
    isku_day {
        number = tiro_u_badal(input)
        
        haddii number > 0 {
            valid_input = true
            qorln("Valid input received: " + number)
        } kale {
            qorln("Number must be positive. Try again.")
        }
    } qabso {
        qorln("Invalid input. Please enter a number.")
    }
} inta !valid_input

qorln("Processing with number: " + number)`}
          title="do_while_input_validation.sop"
        />
      </section>

      {/* Loop Control Statements */}
      <section id="control-statements" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Loop Control Statements
        </h2>

        <p className="mb-4">
          Soplang provides several statements to control the flow of loops: <code>jebi</code>{" "}
          (break), <code>sii_wad</code> (continue), and <code>ka_bax</code> (return).
        </p>

        <h3 className="mt-6 mb-4 text-xl font-bold">Break Statement</h3>
        <p className="mb-4">
          The <code>jebi</code> statement terminates the loop and transfers control to the
          statement following the loop.
        </p>

        <CodeWindow
          code={`// Using break to exit a loop early
door numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

qorln("Finding the first number greater than 5:")
ku_celi num ku dhex jira numbers {
    haddii num > 5 {
        qorln("Found: " + num)
        jebi  // Exit the loop
    }
    qorln("Checking: " + num)
}

/* Output:
Finding the first number greater than 5:
Checking: 1
Checking: 2
Checking: 3
Checking: 4
Checking: 5
Found: 6
*/`}
          title="break_statement.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Continue Statement</h3>
        <p className="mb-4">
          The <code>sii_wad</code> statement skips the rest of the current iteration and continues
          with the next iteration of the loop.
        </p>

        <CodeWindow
          code={`// Using continue to skip certain iterations
door numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

qorln("Printing only odd numbers:")
ku_celi num ku dhex jira numbers {
    haddii num % 2 == 0 {
        sii_wad  // Skip even numbers
    }
    qorln(num)
}

/* Output:
Printing only odd numbers:
1
3
5
7
9
*/`}
          title="continue_statement.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Nested Loops and Break/Continue</h3>
        <p className="mb-4">
          When using <code>jebi</code> or <code>sii_wad</code> in nested loops, they affect only
          the innermost loop that contains them.
        </p>

        <CodeWindow
          code={`// Nested loops with break and continue
qorln("Multiplication table with some values skipped:")

ku_celi i ku dhex jira tiro_taxane(1, 4) {
    ku_celi j ku dhex jira tiro_taxane(1, 4) {
        // Skip when product is odd
        haddii (i * j) % 2 != 0 {
            sii_wad
        }
        
        qorln(i + " x " + j + " = " + (i * j))
        
        // Break inner loop when product is 6
        haddii i * j == 6 {
            qorln("Breaking inner loop")
            jebi
        }
    }
    qorln("---")
}

/* Output:
Multiplication table with some values skipped:
1 x 2 = 2
---
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
Breaking inner loop
---
3 x 2 = 6
Breaking inner loop
---
*/`}
          title="nested_loops_control.sop"
        />
      </section>

      {/* Best Practices */}
      <section id="best-practices" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Best Practices
        </h2>

        <ul className="space-y-8">
          <li>
            <h3 className="mb-2 text-xl font-bold">Choose the Right Loop Type</h3>
            <p className="mb-2">
              Select the appropriate loop type based on your specific needs:
            </p>
            <ul className="ml-6 space-y-2 list-disc">
              <li>Use <code>ku_celi</code> (for) when you know the number of iterations in advance</li>
              <li>Use <code>inta</code> (while) when you need to loop until a condition is met</li>
              <li>Use <code>samee_inta</code> (do-while) when you need to execute the loop at least once</li>
            </ul>
            <CodeWindow
              code={`// Good practice: Using the right loop type

// For known number of iterations
ku_celi i ku dhex jira tiro_taxane(5) {
    // Process with index i
}

// For unknown number of iterations with condition check first
door input = ""
inta input != "quit" {
    input = akhri_weydii("Enter command (type 'quit' to exit): ")
    // Process input
}

// For unknown number of iterations with at least one execution
samee {
    door input = akhri_weydii("Enter a value: ")
    // Process input
} inta !is_valid(input)`}
              title="right_loop_type.sop"
            />
          </li>

          <li>
            <h3 className="mb-2 text-xl font-bold">Avoid Infinite Loops</h3>
            <p className="mb-2">
              Always ensure that your loop condition will eventually become false, or include a
              break statement to exit the loop.
            </p>
            <CodeWindow
              code={`// Bad practice: Potential infinite loop
door count = 10
inta count > 0 {
    qorln(count)
    // Forgot to decrement count!
}

// Good practice: Ensure loop termination
door count = 10
inta count > 0 {
    qorln(count)
    count -= 1  // Ensure the condition will eventually be false
}`}
              title="avoid_infinite_loops.sop"
            />
          </li>

          <li>
            <h3 className="mb-2 text-xl font-bold">Use For Loops for Iterables</h3>
            <p className="mb-2">
              Prefer <code>ku_celi</code> (for) loops when iterating over collections instead of
              manually tracking indices with while loops.
            </p>
            <CodeWindow
              code={`// Bad practice: Using while loop for iteration
door fruits = ["apple", "banana", "orange"]
door i = 0
inta i < fruits.dherer() {
    qorln(fruits[i])
    i += 1
}

// Good practice: Using for loop for cleaner iteration
door fruits = ["apple", "banana", "orange"]
ku_celi fruit ku dhex jira fruits {
    qorln(fruit)
}`}
              title="use_for_loops.sop"
            />
          </li>

          <li>
            <h3 className="mb-2 text-xl font-bold">Keep Loops Simple</h3>
            <p className="mb-2">
              Keep the body of your loops as simple as possible. If the loop body is complex,
              consider extracting it into a separate function.
            </p>
            <CodeWindow
              code={`// Bad practice: Complex loop body
ku_celi user ku dhex jira users {
    // Complex logic with many conditions and operations
    // ...
    // ...
    // Many lines of code
}

// Good practice: Extract complex logic into a function
howl process_user(user) {
    // Complex logic
    // ...
}

ku_celi user ku dhex jira users {
    process_user(user)
}`}
              title="simple_loops.sop"
            />
          </li>
        </ul>
      </section>

      {/* Navigation */}
      <DocNavigation
        className="mt-12"
        prevPage={{
          href: "/docs/conditional-statements",
          title: "Conditional Statements",
          description: "Return to conditional statements in Soplang",
        }}
        nextPage={{
          href: "/docs/functions",
          title: "Functions",
          description: "Learn about defining and using functions in Soplang",
        }}
      />
    </div>
  );
}
