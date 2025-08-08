import React from "react";
import CodeWindow from "@/components/CodeWindow";
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
      <p className="mb-8 text-lg lead">
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
          In Soplang, you can declare variables with dynamic typing using the{" "}
          <code className="px-2 rounded-md bg-blue-400/35">door</code> keyword. The type of the
          variable is determined by the value assigned to it.
        </p>

        <p className="mb-4">
          The <code className="px-2 rounded-md bg-blue-400/35">door</code> keyword is short for{" "}
          <code className="px-2 rounded-md bg-blue-400/35">doorsoome</code>, which means "variable"
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
        <p className="mb-1">
          For more type safety, Soplang also supports static typing where you explicitly declare the
          type of the variable.
        </p>
        <p className="mb-2">
          Static variables are explicitly typed and use specific keywords for type clarity. some of
          them are:-
        </p>

        <div className="my-8 overflow-x-auto">
          <table className="min-w-full border border-collapse border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Type</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">
                  Keyword
                </th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">
                  Stands for
                </th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">
                  Example
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">1. Integer</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">
                  <code className="px-2 rounded-md bg-blue-400/35">abn</code>
                </td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">
                  <em>abyoone</em>
                </td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">
                  <code className="px-2 rounded-md bg-blue-400/35">abn tirada = 10</code>
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">2. Float</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">
                  <code className="px-2 rounded-md bg-blue-400/35">jajab</code>
                </td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">
                  <em>jajab</em>
                </td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">
                  <code className="px-2 rounded-md bg-blue-400/35">jajab qiime = 3.14</code>
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">3. String</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">
                  <code className="px-2 rounded-md bg-blue-400/35">qoraal</code>
                </td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">
                  <em>qoraal</em>
                </td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">
                  <code className="px-2 rounded-md bg-blue-400/35">qoraal magaca = "Soplang"</code>
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">4. Boolean</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">
                  <code className="px-2 rounded-md bg-blue-400/35">bool</code>
                </td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">
                  <em>bool</em>
                </td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">
                  <code className="px-2 rounded-md bg-blue-400/35">bool sax = run</code>
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">5. List</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">
                  <code className="px-2 rounded-md bg-blue-400/35">teed</code>
                </td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">
                  <em>teed</em>
                </td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">
                  <code className="px-2 rounded-md bg-blue-400/35">teed liis = [1, 2, 3]</code>
                </td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">6. Object</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">
                  <code className="px-2 rounded-md bg-blue-400/35">walax</code>
                </td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">
                  <em>walax</em>
                </td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">
                  <code className="px-2 rounded-md bg-blue-400/35">{`walax qof = {magac: "Ali"}`}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeWindow
          code={`// Static typing with specific type keywords
abn count = 10           // Integer 
qoraal message = "Hello"  // String
bool active = true   // Boolean

// Type mismatch will cause an error
abn wrong = "text"  // Error: Cannot assign string to abn`}
          title="static_typing.sop"
        />
      </section>

      {/* Constants */}
      <section id="constants" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Constants
        </h2>

        <p className="mb-4">
          Constants are variables whose values cannot be changed after initialization. In Soplang,
          you declare constants using the{" "}
          <code className="px-2 rounded-md bg-blue-400/35">madoor</code> keyword.
        </p>

        <CodeWindow
          code={`// Defining constants
madoor PI = 3.14159
madoor MAX_USERS = 100
madoor APP_VERSION = "1.0.0"


// Constants cannot be reassigned:
madoor luuqad = "Somali"
luuqad = "English"  // Error: cannot reassign constant

// Using constants
door radius = 5
door area = PI * radius * radius
qor("Area: " + area)  // Prints "Area: 78.53975"`}
          title="constants.sop"
        />
      </section>

      {/* Navigation */}
      <DocNavigation
        className="mt-12"
        prevPage={{
          href: "/docs/input-and-output",
          title: "Functions",
          description: "Learn about defining and using functions in Soplang",
        }}
        nextPage={{
          href: "/docs/data-types",
          title: "Data Types",
          description: "Data types in Soplang",
        }}
      />
    </div>
  );
}
