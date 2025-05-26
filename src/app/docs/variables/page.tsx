import React from "react";
import Link from "next/link";
import CodeWindow from "@/components/CodeWindow";
import SoplangHighlighter from "@/components/SoplangHighlighter";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Variables in Soplang",
  description:
    "Learn about variable declaration, scoping, naming conventions, and best practices for using variables in the Soplang programming language.",
};

export default function VariablesPage() {
  return (
    // <div className="py-12 container-custom">
    <div className="mb-12 prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-8 text-3xl font-bold text-primary">Soplang Variables</h1>
      <p className="mb-8 text-xl lead">
        Variables in Soplang are containers for storing data values. Soplang offers the flexibility
        of both dynamic and static typing, allowing you to choose the approach that best fits your
        needs while maintaining type safety.
      </p>

      {/* Navigation */}
      <div className="p-6 my-8 rounded-lg bg-primary/10">
        <h2 className="mb-4 text-xl font-bold">On This Page</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <a href="#declaration" className="text-primary hover:underline">
              Variable Declaration
            </a>
          </li>
          <li>
            <a href="#naming" className="text-primary hover:underline">
              Naming Conventions
            </a>
          </li>
          <li>
            <a href="#scope" className="text-primary hover:underline">
              Variable Scope
            </a>
          </li>
          <li>
            <a href="#constants" className="text-primary hover:underline">
              Constants
            </a>
          </li>
          <li>
            <a href="#best-practices" className="text-primary hover:underline">
              Best Practices
            </a>
          </li>
        </ul>
      </div>

      {/* Variable Declaration */}
      <section id="declaration">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Variable Declaration
        </h2>

        <h3 className="mt-6 mb-4 text-xl font-bold">Dynamic Typing</h3>
        <p className="mb-4">
          In Soplang, you can declare variables with dynamic typing using the <code>door</code>{" "}
          keyword. The type of the variable is determined by the value assigned to it.
        </p>

        <p className="mb-4">
          The <code>door</code> keyword is short for <code>doorsoome</code>, which means "variable"
          in Somali. This abbreviation was chosen to make the code more concise while preserving its
          Somali roots.
        </p>

        <CodeWindow
          code={`// Dynamic typing with door
door name = "John"     // String
door age = 25         // Number
door is_student = true  // Boolean
door grades = [85, 90, 78, 92]  // List/Array`}
          title="dynamic_typing.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Static Typing</h3>
        <p className="mb-4">
          For more type safety, Soplang also supports static typing where you explicitly declare the
          type of the variable.
        </p>

        <CodeWindow
          code={`// Static typing with specific type keywords
tiro count = 10           // Integer 
qoraal message = "Hello"  // String
labadaran active = true   // Boolean

// Type mismatch will cause an error
// tiro wrong = "text"  // Error: Cannot assign string to tiro`}
          title="static_typing.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Declaration Without Initialization</h3>
        <p className="mb-4">
          You can also declare variables without initializing them, but you must assign a value
          before using them.
        </p>

        <CodeWindow
          code={`// Declaration without initialization
door username
tiro user_age

// Assign values later
username = "Ahmed"
user_age = 30

// Using the variables
qor(username + " is " + user_age + " years old.")`}
          title="declaration_without_init.sop"
        />
      </section>

      {/* Naming Conventions */}
      <section id="naming" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Naming Conventions
        </h2>

        <p className="mb-4">
          When naming variables in Soplang, follow these guidelines for clarity and consistency:
        </p>

        <h3 className="mt-6 mb-4 text-xl font-bold">Valid Variable Names</h3>

        <CodeWindow
          code={`// Good variable names
door user_name = "John"   // Using underscores
door userName = "John"    // Using camelCase
door age = 25            // Simple and clear
door isActive = true     // Boolean with descriptive name

// Bad variable names
door a = "John"          // Too short, not descriptive
door x1 = 25             // Not meaningful
door thisisaveryverylongvariablenamethatisnoteasytoread = true  // Too long`}
          title="naming_conventions.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Naming Style</h3>
        <ul className="mb-6 space-y-2 list-disc list-inside">
          <li>
            Use <strong>camelCase</strong> for variable names (e.g., <code>userName</code>,{" "}
            <code>firstNumber</code>)
          </li>
          <li>
            Use <strong>PascalCase</strong> for class names (e.g., <code>Person</code>,{" "}
            <code>UserProfile</code>)
          </li>
          <li>
            Use <strong>snake_case</strong> as an alternative for variable names (e.g.,{" "}
            <code>user_name</code>, <code>total_amount</code>)
          </li>
        </ul>

        <div className="p-4 mb-6 bg-yellow-100 rounded-lg dark:bg-yellow-900">
          <h4 className="mb-2 font-bold">Note on Somali Language Identifiers</h4>
          <p>
            While Soplang keywords are in Somali, variable names are typically in English for
            international readability. However, you can use Somali words as variable names if it
            makes your code more readable to Somali speakers.
          </p>
        </div>
      </section>

      {/* Variable Scope */}
      <section id="scope" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Variable Scope
        </h2>

        <p className="mb-4">
          The scope of a variable defines where the variable can be accessed within your code.
        </p>

        <h3 className="mt-6 mb-4 text-xl font-bold">Global Scope</h3>
        <p className="mb-4">
          Variables declared outside any function or block have global scope and can be accessed
          from anywhere in the program.
        </p>

        <CodeWindow
          code={`// Global variable
door app_name = "Soplang Demo"

howl display_app_info() {
    // Global variable accessible inside function
    qor("App: " + app_name)
}

display_app_info()  // Prints "App: Soplang Demo"`}
          title="global_scope.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Local Scope</h3>
        <p className="mb-4">
          Variables declared inside a function or block have local scope and can only be accessed
          within that function or block.
        </p>

        <CodeWindow
          code={`howl calculate_area() {
    // Local variables
    door width = 10
    door height = 5
    door area = width * height
    
    soo_celi area
}

door result = calculate_area()
qor(result)  // Prints 50

// This would cause an error:
// qor(width)  // Error: width is not defined in this scope`}
          title="local_scope.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Variable Shadowing</h3>
        <p className="mb-4">
          When a local variable has the same name as a global variable, the local variable "shadows"
          the global one within its scope.
        </p>

        <CodeWindow
          code={`door count = 5  // Global variable

howl display_count() {
    door count = 10  // Local variable that shadows the global one
    qor("Local count: " + count)  // Prints "Local count: 10"
}

display_count()
qor("Global count: " + count)  // Prints "Global count: 5"`}
          title="shadowing.sop"
        />

        <h3 className="mt-6 mb-4 text-xl font-bold">Lexical Scope</h3>
        <p className="mb-4">
          Soplang uses lexical scoping, which means that inner functions have access to variables
          declared in their outer function.
        </p>

        <CodeWindow
          code={`howl create_counter() {
    door count = 0  // Variable in outer function
    
    // Inner function has access to count
    howl increment() {
        count = count + 1
        soo_celi count
    }
    
    soo_celi increment  // Return the inner function
}

door counter = create_counter()
qor(counter())  // Prints 1
qor(counter())  // Prints 2
qor(counter())  // Prints 3`}
          title="lexical_scope.sop"
        />
      </section>

      {/* Constants */}
      <section id="constants" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Constants
        </h2>

        <p className="mb-4">
          Constants are variables whose values cannot be changed after initialization. In Soplang,
          you declare constants using the <code>joogto</code> keyword.
        </p>

        <CodeWindow
          code={`// Defining constants
joogto PI = 3.14159
joogto MAX_USERS = 100
joogto APP_VERSION = "1.0.0"

// Constants cannot be changed
// PI = 3.14  // This would cause an error

// Using constants
door radius = 5
door area = PI * radius * radius
qor("Area: " + area)  // Prints "Area: 78.53975"`}
          title="constants.sop"
        />

        <div className="p-4 mb-6 bg-blue-100 rounded-lg dark:bg-blue-900">
          <h4 className="mb-2 font-bold">Naming Convention for Constants</h4>
          <p>
            By convention, constants are usually named using UPPER_SNAKE_CASE to distinguish them
            from regular variables.
          </p>
        </div>
      </section>

      {/* Best Practices */}
      <section id="best-practices" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Best Practices
        </h2>

        <ul className="space-y-8">
          <li>
            <h3 className="mb-2 text-xl font-bold">Use Static Typing for Better Type Safety</h3>
            <p className="mb-2">
              While dynamic typing offers flexibility, static typing helps catch type-related errors
              earlier.
            </p>
            <CodeWindow
              code={`// Prefer static typing for important variables
tiro user_count = 42
qoraal status = "active"`}
              title="static_typing_best_practice.sop"
            />
          </li>

          <li>
            <h3 className="mb-2 text-xl font-bold">Initialize Variables When Declaring</h3>
            <p className="mb-2">
              Initialize variables at the time of declaration to avoid undefined value errors.
            </p>
            <CodeWindow
              code={`// Good practice
door user_name = "Default"

// Instead of
// door user_name
// ... code ...
// user_name = "Default"`}
              title="initialization_best_practice.sop"
            />
          </li>

          <li>
            <h3 className="mb-2 text-xl font-bold">Use Descriptive Names</h3>
            <p className="mb-2">
              Choose descriptive variable names that clearly indicate their purpose.
            </p>
            <CodeWindow
              code={`// Good variable names
door user_age = 25
door is_logged_in = true
door product_price = 29.99

// Instead of
door a = 25
door b = true
door c = 29.99`}
              title="descriptive_names.sop"
            />
          </li>

          <li>
            <h3 className="mb-2 text-xl font-bold">Limit Variable Scope</h3>
            <p className="mb-2">
              Keep variables in the smallest scope necessary to avoid naming conflicts and improve
              code clarity.
            </p>
            <CodeWindow
              code={`// Prefer local variables when possible
howl calculate_total(prices) {
    door total = 0  // Local variable only used in this function
    
    ku_celi price ku dhex jira prices {
        total = total + price
    }
    
    soo_celi total
}`}
              title="limit_scope.sop"
            />
          </li>

          <li>
            <h3 className="mb-2 text-xl font-bold">Use Constants for Fixed Values</h3>
            <p className="mb-2">
              Use constants for values that should not change during program execution.
            </p>
            <CodeWindow
              code={`// Use constants for configuration and fixed values
joogto API_URL = "https://api.example.com"
joogto MAX_ATTEMPTS = 3
joogto TAX_RATE = 0.07

// Use in code
door remaining_attempts = MAX_ATTEMPTS
door price_with_tax = price_of_item * (1 + TAX_RATE)`}
              title="use_constants.sop"
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
          href: "/docs/functions",
          title: "Functions",
          description: "Learn about defining and using functions in Soplang",
        }}
      />
    </div>
    // </div>
  );
}
