import React from "react";
import Link from "next/link";
import CodeWindow from "@/components/CodeWindow";

export const metadata = {
  title: "Control Flow in Soplang",
  description:
    "Learn about conditional statements, loops, and other control flow structures in the Soplang programming language.",
};

export default function ControlFlowPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold mb-6">Control Flow in Soplang</h1>

      <p className="lead text-xl mb-6">
        Control flow structures allow you to control the execution path of your
        program based on conditions and to repeat code execution. Soplang
        provides intuitive control flow mechanisms using the Somali language.
      </p>

      <CodeWindow
        code={`// Basic if statement
door age = 18

haddii (age >= 18) {
    qor("You are an adult")
} haddii_kalena {
    qor("You are underage")
}`}
        title="basic_conditional.sop"
      />

      <nav className="my-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <h2 className="text-lg font-semibold mb-3">On This Page</h2>
        <ul className="space-y-1">
          <li>
            <a
              href="#conditional-statements"
              className="text-primary hover:underline"
            >
              Conditional Statements
            </a>
          </li>
          <li>
            <a href="#loops" className="text-primary hover:underline">
              Loops
            </a>
          </li>
          <li>
            <a href="#loop-control" className="text-primary hover:underline">
              Loop Control
            </a>
          </li>
          <li>
            <a href="#switch-case" className="text-primary hover:underline">
              Switch-Case Statements
            </a>
          </li>
          <li>
            <a href="#error-handling" className="text-primary hover:underline">
              Error Handling
            </a>
          </li>
        </ul>
      </nav>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4" id="conditional-statements">
          Conditional Statements
        </h2>
        <p className="mb-4">
          Conditional statements allow your program to make decisions based on
          certain conditions. Soplang provides
          <code>haddii</code> (if), <code>haddii_kale</code> (else if), and{" "}
          <code>haddii_kalena</code> (else) keywords for this purpose.
        </p>

        <h3 className="text-xl font-semibold mb-3">Basic If-Else</h3>
        <CodeWindow
          code={`// If-Else statement
door temperature = 25

haddii (temperature > 30) {
    qor("It's hot outside")
} haddii_kalena {
    qor("The weather is pleasant")
}`}
          title="if_else.sop"
        />

        <h3 className="text-xl font-semibold mb-3 mt-6">Multiple Conditions</h3>
        <CodeWindow
          code={`// If-Else If-Else statement
door age = 25
door name = "Faarax"

haddii (age < 13) {
    qor(name + " is a child")
} haddii_kale (age >= 13 && age < 20) {
    qor(name + " is a teenager")
} haddii_kale (age >= 20 && age < 65) {
    qor(name + " is an adult")
} haddii_kalena {
    qor(name + " is a senior")
}`}
          title="multiple_conditions.sop"
        />

        <h3 className="text-xl font-semibold mb-3 mt-6">Nested Conditionals</h3>
        <CodeWindow
          code={`// Nested conditional statements
door score = 85
door isRegistered = true

haddii (isRegistered) {
    qor("User is registered")
    
    haddii (score >= 90) {
        qor("Grade: A")
    } haddii_kale (score >= 80) {
        qor("Grade: B")
    } haddii_kale (score >= 70) {
        qor("Grade: C")
    } haddii_kale (score >= 60) {
        qor("Grade: D")
    } haddii_kalena {
        qor("Grade: F")
    }
} haddii_kalena {
    qor("User is not registered")
}`}
          title="nested_conditionals.sop"
        />

        <h3 className="text-xl font-semibold mb-3 mt-6">Ternary Operator</h3>
        <p className="mb-4">
          For simple conditions, you can use the ternary operator as a shorthand
          way of writing an if-else statement:
        </p>
        <CodeWindow
          code={`// Ternary operator
door age = 20
door status = age >= 18 ? "adult" : "minor"

qor("Xaliimo is an " + status)  // Outputs: "Xaliimo is an adult"

// Equivalent if-else
door message
haddii (age >= 18) {
    message = "adult"
} haddii_kalena {
    message = "minor"
}
qor("Xaliimo is an " + message)  // Outputs: "Xaliimo is an adult"`}
          title="ternary_operator.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4" id="loops">
          Loops
        </h2>
        <p className="mb-4">
          Loops allow you to execute code repeatedly. Soplang offers several
          types of loops to handle different scenarios.
        </p>

        <h3 className="text-xl font-semibold mb-3">For Loops</h3>
        <p className="mb-4">
          For loops in Soplang use the <code>ku_celi</code> keyword and come in
          multiple forms:
        </p>
        <CodeWindow
          code={`// Basic for loop with range
ku_celi i min 1 ilaa 5 {
    qor(i)  // Outputs: 1, 2, 3, 4, 5
}

// Looping through collections
door magacyada = ["Faarax", "Xaliimo", "Abdi", "Yusuf", "Fardowsa"]
ku_celi magac ku dhex jira magacyada {
    qor("Hello, " + magac)
}`}
          title="for_loops.sop"
        />

        <h3 className="text-xl font-semibold mb-3 mt-6">While Loops</h3>
        <p className="mb-4">
          While loops use the <code>inta_ay</code> keyword and continue
          executing as long as a condition is true:
        </p>
        <CodeWindow
          code={`// Basic while loop
door counter = 5
inta_ay (counter > 0) {
    qor("Countdown: " + counter)
    counter = counter - 1
}

// While loop with conditional exit
door userInput = ""
door attempts = 0
inta_ay (userInput != "exit" && attempts < 5) {
    // In a real program, you would get input from the user
    // This is a simulation
    attempts = attempts + 1
    haddii (attempts == 3) {
        userInput = "exit"
    }
    qor("Attempt: " + attempts)
}`}
          title="while_loops.sop"
        />

        <h3 className="text-xl font-semibold mb-3 mt-6">Do-While Loops</h3>
        <p className="mb-4">
          Do-While loops use the <code>samee</code> and <code>inta_ay</code>{" "}
          keywords and execute at least once before checking the condition:
        </p>
        <CodeWindow
          code={`// Do-while loop
door counter = 0
samee {
    qor("Counter value: " + counter)
    counter = counter + 1
} inta_ay (counter < 5)

// Even when the condition starts as false, it executes once
door x = 10
samee {
    qor("This will print only once")
    x = x + 1
} inta_ay (x < 5)`}
          title="do_while_loops.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4" id="loop-control">
          Loop Control
        </h2>
        <p className="mb-4">
          Soplang provides special statements to control the flow of loops:
        </p>

        <h3 className="text-xl font-semibold mb-3">Break</h3>
        <p className="mb-4">
          The <code>jooji</code> keyword is used to exit a loop prematurely:
        </p>
        <CodeWindow
          code={`// Break in a for loop
ku_celi i min 1 ilaa 10 {
    qor(i)
    haddii (i == 5) {
        qor("Breaking the loop at 5")
        jooji  // Exit the loop when i equals 5
    }
}

// Break in a while loop
door counter = 0
inta_ay (true) {  // Infinite loop
    counter = counter + 1
    qor(counter)
    
    haddii (counter >= 5) {
        qor("Breaking infinite loop")
        jooji  // Exit the loop after counter reaches 5
    }
}`}
          title="break_statement.sop"
        />

        <h3 className="text-xl font-semibold mb-3 mt-6">Continue</h3>
        <p className="mb-4">
          The <code>sii_wad</code> keyword is used to skip the rest of the
          current iteration and move to the next one:
        </p>
        <CodeWindow
          code={`// Continue in a for loop - skip even numbers
ku_celi i min 1 ilaa 10 {
    haddii (i % 2 == 0) {
        sii_wad  // Skip even numbers
    }
    qor(i)  // Outputs: 1, 3, 5, 7, 9
}

// Continue in a while loop
door counter = 0
inta_ay (counter < 10) {
    counter = counter + 1
    
    haddii (counter % 3 != 0) {
        sii_wad  // Skip numbers that are not multiples of 3
    }
    
    qor(counter)  // Outputs: 3, 6, 9
}`}
          title="continue_statement.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4" id="switch-case">
          Switch-Case Statements
        </h2>
        <p className="mb-4">
          Switch-case statements provide a cleaner way to handle multiple
          conditions. In Soplang, they use the <code>doorka</code> keyword:
        </p>
        <CodeWindow
          code={`// Switch-case statement
door day = "Monday"

doorka (day) {
    xaalad "Monday":
        qor("Start of work week")
        dhammaad
        
    xaalad "Tuesday":
    xaalad "Wednesday":
    xaalad "Thursday":
        qor("Mid week")
        dhammaad
        
    xaalad "Friday":
        qor("End of work week")
        dhammaad
        
    xaalad "Saturday":
    xaalad "Sunday":
        qor("Weekend")
        dhammaad
        
    kale:
        qor("Invalid day")
        dhammaad
}

// Switch with expressions
door grade = "B"

doorka (grade) {
    xaalad "A":
        qor("Excellent")
        dhammaad
        
    xaalad "B":
        qor("Good")
        dhammaad
        
    xaalad "C":
        qor("Average")
        dhammaad
        
    xaalad "D":
        qor("Pass")
        dhammaad
        
    xaalad "F":
        qor("Fail")
        dhammaad
        
    kale:
        qor("Invalid grade")
        dhammaad
}`}
          title="switch_case.sop"
        />
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-4" id="error-handling">
          Error Handling
        </h2>
        <p className="mb-4">
          Error handling is an important aspect of control flow. Soplang
          provides try-catch blocks using <code>isku_day</code> and{" "}
          <code>qabo</code> keywords:
        </p>
        <CodeWindow
          code={`// Basic error handling
isku_day {
    door x = 10 / 0  // Division by zero error
    qor("This will not be executed")
} qabo (error) {
    qor("An error occurred: " + error.fariin)
}

// Handling specific error types
isku_day {
    door names = ["Abdi", "Yusuf"]
    qor(names[5])  // Index out of bounds
} qabo (IndexOutOfBoundsError error) {
    qor("Array index out of bounds: " + error.fariin)
} qabo (error) {
    qor("Other error: " + error.fariin)
}

// Finally block
isku_day {
    // Database or file operations
    qor("Attempting to open a file")
    // Simulate an error
    throw cusub Error("File not found")
} qabo (error) {
    qor("Error: " + error.fariin)
} ugu_dambeyn {
    qor("This always executes, error or not")
    qor("Closing any open resources")
}`}
          title="error_handling.sop"
        />
      </div>

      <div className="mt-10 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h2 className="text-xl font-bold mb-3">
          Best Practices for Control Flow
        </h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <p>
              <strong>Keep Conditions Simple:</strong> For better readability,
              avoid overly complex conditions.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <p>
              <strong>Limit Nesting:</strong> Too many levels of nested
              conditionals can make code hard to follow.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <p>
              <strong>Consider Early Returns:</strong> In functions, return
              early to avoid deep nesting.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <p>
              <strong>Use Loop Variables Meaningfully:</strong> Choose
              descriptive names for loop variables.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <p>
              <strong>Be Careful with Infinite Loops:</strong> Always ensure
              there's a way to exit any loop.
            </p>
          </li>
          <li className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <p>
              <strong>Handle All Error Cases:</strong> Account for all possible
              error conditions in try-catch blocks.
            </p>
          </li>
        </ul>
      </div>

      <div className="mt-10 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <h2 className="text-xl font-bold mb-3">Next Steps</h2>
        <p className="mb-4">
          Now that you understand control flow in Soplang, you can explore these
          related topics:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link
            href="/docs/functions"
            className="block p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-primary">Functions →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Learn about defining and using functions
            </p>
          </Link>
          <Link
            href="/docs/error-handling"
            className="block p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-primary">Error Handling →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Dive deeper into error handling techniques
            </p>
          </Link>
          <Link
            href="/docs/classes-objects"
            className="block p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-primary">Classes & Objects →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Explore object-oriented programming in Soplang
            </p>
          </Link>
          <Link
            href="/docs/algorithms"
            className="block p-4 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="font-semibold text-primary">Algorithms →</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Implement common algorithms using Soplang control structures
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
