import React from "react";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Input and Output in Soplang",
  description:
    "Learn about reading input from users and displaying output in the Soplang programming language.",
};

export default function InputOutputPage() {
  return (
    <div className="mb-12 prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-8 text-3xl font-bold text-primary">Input and Output in Soplang</h1>
      <p className="mb-8 text-lg lead">
        Input and output operations are fundamental to any programming language. Soplang provides
        simple and intuitive ways to interact with users through the console and handle file
        operations.
      </p>

      {/* Console Output */}
      <section id="console-output">
        <h3 className="mt-6 mb-4 text-xl font-bold">Basic Output</h3>
        <p className="mb-4">
          The <code className="px-2 rounded-md bg-blue-400/35">qor</code> function is used to
          display text or values to the console. The name comes from the Somali word "qor" which
          means "write".
        </p>

        <CodeWindow
          code={`// Basic output
qor("Hello, World!")  // Prints: Hello, World!

// Output with variables
door name = "Ahmed"
qor("Welcome, " + name)  // Prints: Welcome, Ahmed

// Output multiple values
door age = 25
qor(name, "is", age, "years old")  // Prints: Ahmed is 25 years old`}
          title="basic_output.sop"
        />
      </section>

      {/* Console Input */}
      <section id="console-input" className="mt-12">
        <h3 className="mt-6 mb-4 text-xl font-bold">User Input</h3>
        <p className="mb-4">
          The <code className="px-2 rounded-md bg-blue-400/35">gelin()</code> function is used to
          read input from the user. It prompts the user for input and returns the entered value as a
          string.
        </p>

        <CodeWindow
          code={`// Basic input
door magaca = gelin("Magacaaga qor: ")  // Mohamed
qor("Mahadsanid, " + magaca + "!")  //  Mahadsanid, Mohamed!

// Converting input to numbers
door da = abn(gelin("Da'daada qor: "))  // da' = 10
qor("Sannad kaddib waxaad noqon doontaa " + (da + 1))   // da' = 11`}
          title="user_input.sop"
        />
      </section>

      {/* Navigation */}
      <DocNavigation
        className="mt-10"
        prevPage={{
          href: "/docs/syntax-basics",
          title: "Syntax Basics",
          description: "Return to the introduction and setup guide",
        }}
        nextPage={{
          href: "/docs/variables",
          title: "Variables",
          description: "Learn about variables and the different data types in Soplang",
        }}
      />
    </div>
  );
}
