import React from "react";
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
      <p className="mb-8 text-lg lead">
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
          The <code className="px-2 rounded-md bg-blue-400/20">ku_celi</code>{" "}
          <strong>(for loop)</strong> is used to iterate over a sequence (like..
          <code className="px-2 mx-1 rounded-md bg-blue-400/15">a list</code>,
          <code className="px-2 mx-1 rounded-md bg-blue-400/15">string</code>, or
          <code className="px-2 mx-1 rounded-md bg-blue-400/15">range</code>) or any iterable
          object. The name comes from the Somali phrase{" "}
          <code className="px-1 rounded-md bg-blue-400/20">"ku celi"</code> which means{" "}
          <code className="px-1 rounded-md bg-blue-400/20">"repeat"</code>.
        </p>

        <h3 className="mt-6 mb-4 text-xl font-bold">Basic For Loop</h3>
        <CodeWindow
          code={`// Iterating over a list
door fruits = ["apple", "banana", "orange", "mango"]

ku_celi fruit ku dhex jira fruits {
    qor(fruit)
}

// Output: 
// apple 
// banana 
// orange 
// mango
`}
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
    qor(i)
}

// Output:  
// 0 
// 1 
// 2 
// 3 
// 4

// Range with start, stop, and step parameters
ku_celi i ku dhex jira tiro_taxane(2, 10, 2) {
    qor(i)
}

// Output:  
// 2 
// 4 
// 6 
// 8
`}
          title="for_loop_range.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">For Loop with Index</h3>
        <p className="mb-4">
          To access both the index and value during iteration, you can use the <code>tirsan</code>{" "}
          (enumerate) function.
        </p>

        <CodeWindow
          code={`// Iterating with index
door fruits = ["apple", "banana", "orange", "mango"]

ku_celi (index, fruit) ku dhex jira tirsan(fruits) {
    qor(index + ": " + fruit)
}

// Output:   
// 0: apple,  
// 1: banana,  
// 2: orange,  
// 3: mango
`}
          title="for_loop_index.sop"
        />

        {/* <h3 className="mt-6 mb-4 text-xl font-bold">For Loop with Dictionary</h3>
        <p className="mb-4">
          You can iterate over the keys, values, or key-value pairs of a dictionary.
        </p>

        <CodeWindow
          code={`// Dictionary iteration
door person = {
    "name": "Ahmed",
    "age": 30,
    "city": "Mogadishu",
    "occupation": "Engineer"
}

// Iterating over keys
qor("Keys:")
ku_celi key ku dhex jira person.fureyaal() {
    qor(key)
}

// Iterating over values
qor("Values:")
ku_celi value ku dhex jira person.qiyamyaal() {
    qor(value)
}

// Iterating over key-value pairs
qor("Key-Value Pairs:")
ku_celi (key, value) ku dhex jira person.shayada() {
    qor(key + ": " + value)
}`}
          title="for_loop_dictionary.sop"
        /> */}
      </section>

      {/* While Loops */}
      <section id="while-loops" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          While Loops
        </h2>

        <p className="mb-4">
          The <code className="px-2 rounded-md bg-blue-400/20">inta</code> (while) loop executes a
          block of code as long as a specified condition is true. The name comes from the Somali
          word <code className="px-1 rounded-md bg-blue-400/20">"inta"</code> which means{" "}
          <code className="px-1 rounded-md bg-blue-400/20">"while"</code> or{" "}
          <code className="px-1 rounded-md bg-blue-400/20">"as long as"</code>.
        </p>

        <h3 className="mt-6 mb-4 text-xl font-bold">Basic While Loop</h3>
        <CodeWindow
          code={`// Basic while loop
door count = 1

inta count <= 5 {
    qor(count)
    count += 1
}

// Output:
// 1
// 2
// 3
// 4
// 5
`}
          title="basic_while_loop.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">While Loop with Condition Update</h3>
        <CodeWindow
          code={`// Processing a list with while loop
door numbers = [10, 20, 30, 40, 50]
door index = 0

inta index < numbers.dherer() {
    qor("Number at index " + index + ": " + numbers[index])
    index += 1
}

// Output:
// Number at index 0: 10
// Number at index 1: 20
// Number at index 2: 30
// Number at index 3: 40
// Number at index 4: 50
`}
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
    qor(count)
    count += 1
    
    haddii count > 5 {
        qor("Breaking the loop")
        jebi  // Exit the loop
    }
}

qor("Loop ended")

// Output:
// 1
// 2
// 3
// 4
// 5
// Breaking the loop
// Loop ended
`}
          title="while_infinite_break.sop"
        />
      </section>

      {/* Do-While Loops */}
      <section id="do-while-loops" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Do-While Loops
        </h2>

        <p className="mb-4">
          The <code>samee_inta</code> (do-while) loop is similar to the while loop, but it executes
          the code block at least once before checking the condition. The name combines "samee" (do)
          and "inta" (while) in Somali.
        </p>

        <h3 className="mt-6 mb-4 text-xl font-bold">Basic Do-While Loop</h3>
        <CodeWindow
          code={`// Basic do-while loop
door count = 1

samee {
    qor(count)
    count += 1
} inta count <= 5

// Output:
// 1
// 2
// 3
// 4
// 5
`}
          title="basic_do_while.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Do-While vs While</h3>
        <p className="mb-4">
          The key difference between <code>samee_inta</code> and <code>inta</code> is that do-while
          always executes the code block at least once, even if the condition is initially false.
        </p>

        <CodeWindow
          code={`// Comparing do-while and while when condition is initially false
door x = 10

// Do-while loop (executes once)
qor("Do-while loop:")
samee {
    qor("x = " + x)
    x += 1
} inta x < 10

// While loop (doesn't execute)
qor("While loop:")
x = 10  // Reset x
inta x < 10 {
    qor("x = " + x)
    x += 1
}
`}
          // ! TODO: complete a comparison example of do_while vs while loop =
          //* Output:
          //* Do-while loop:
          //* x = 10

          //* While loop:
          //* ...

          title="do_while_vs_while.sop"
        />
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
