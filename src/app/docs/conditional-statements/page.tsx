import React from "react";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Conditional Statements in Soplang",
  description:
    "Learn about if-else statements and decision making in the Soplang programming language.",
};

export default function ConditionalStatementsPage() {
  return (
    <div className="mb-12 prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-8 text-3xl font-bold text-primary">Conditional Statements in Soplang</h1>
      <p className="mb-8 text-lg lead">
        Conditional statements allow your program to make decisions based on conditions. Soplang
        provides intuitive Somali-first keywords for conditional logic.
      </p>

      {/* Navigation */}
      <div className="p-6 my-8 rounded-lg bg-primary/10">
        <h2 className="mb-4 text-xl font-bold">On This Page</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li>
            <a href="#if-statements" className="text-primary hover:underline">
              If Statements (haddii)
            </a>
          </li>
          <li>
            <a href="#if-else" className="text-primary hover:underline">
              If-Else Statements (haddii-kale)
            </a>
          </li>
          <li>
            <a href="#else-if" className="text-primary hover:underline">
              Else-If Statements (haddii-kale-haddii)
            </a>
          </li>
          <li>
            <a href="#switch" className="text-primary hover:underline">
              Switch Statements (doorasho)
            </a>
          </li>
          <li>
            <a href="#ternary" className="text-primary hover:underline">
              Ternary Operator
            </a>
          </li>
          <li>
            <a href="#best-practices" className="text-primary hover:underline">
              Best Practices
            </a>
          </li>
        </ul>
      </div>

      {/* If Statements */}
      <section id="if-statements">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          If Statements (haddii)
        </h2>

        <p className="mb-4">
          The <code className="px-1 rounded-md bg-blue-400/20">haddii</code> statement executes a
          block of code if a specified condition is true. The keyword{" "}
          <code className="px-1 rounded-md bg-blue-400/20">haddii</code> means "if" in Somali.
        </p>

        <CodeWindow
          code={`// Basic if statement
door da = 18

haddii da >= 18 {
    qor("Waa qof weyn")
}  // Prints: "Waa qof weyn" ("Is an adult")

// If statement with multiple conditions
door qiime = 85

haddii qiime >= 60 && qiime < 90 {
    qor("Waa dhexdhexaad")
}  // Prints: "Waa dhexdhexaad" ("Is average")`}
          title="if_statements.sop"
        />
      </section>

      {/* If-Else Statements */}
      <section id="if-else" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          If-Else Statements (haddii-kale)
        </h2>

        <p className="mb-4">
          The <code className="px-1 rounded-md bg-blue-400/20">haddii-kale</code> statement executes
          one block of code if a condition is true and another block if the condition is false. The
          keyword <code className="px-1 rounded-md bg-blue-400/20">kale</code> means "else" in
          Somali.
        </p>

        <CodeWindow
          code={`// If-else statement
door qiime = 45

haddii qiime >= 50 {
    qor("Waa guul")
} kale {
    qor("Waa dhicin")
}  // Prints: "Waa dhicin" ("Failed")

// If-else with boolean condition
door xaqiiqo = run  // run means true

haddii xaqiiqo {
    qor("Waa run")
} kale {
    qor("Waa been")
}  // Prints: "Waa run" ("Is true")`}
          title="if_else_statements.sop"
        />
      </section>

      {/* Else-If Statements */}
      <section id="else-if" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Else-If Statements (haddii-kale-haddii)
        </h2>

        <p className="mb-4">
          The <code className="px-1 rounded-md bg-blue-400/20">haddii-kale-haddii</code> statement
          allows you to test multiple conditions in sequence. In Soplang, this is written as{" "}
          <code className="px-1 rounded-md bg-blue-400/20">haddii ... kale haddii ... kale</code>.
        </p>

        <CodeWindow
          code={`// Else-if statement
door natiijo = 78

haddii natiijo >= 90 {
    qor("Darajada: A")
} kale haddii natiijo >= 80 {
    qor("Darajada: B")
} kale haddii natiijo >= 70 {
    qor("Darajada: C")
} kale haddii natiijo >= 60 {
    qor("Darajada: D")
} kale {
    qor("Darajada: F")
}  // Prints: "Darajada: C" ("Grade: C")`}
          title="else_if_statements.sop"
        />
      </section>

      {/* Switch Statements */}
      <section id="switch" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Switch Statements (doorasho)
        </h2>

        <p className="mb-4">
          The <code className="px-1 rounded-md bg-blue-400/20">doorasho</code> statement evaluates
          an expression, matching the expression's value to a{" "}
          <code className="px-1 rounded-md bg-blue-400/20">xaalad</code> (case) clause, and executes
          the associated code. The keyword
          <code className="px-1 rounded-md bg-blue-400/20">doorasho</code> means "choice" in Somali.
        </p>

        <CodeWindow
          code={`// Switch statement
door maalin = "Isniin"

doorasho maalin {
  xaalad "Isniin":
      qor("Waa maalinta koowaad ee toddobaadka")
      jebi
  xaalad "Talaado":
      qor("Waa maalinta labaad ee toddobaadka")
      jebi
  xaalad "Arbaco":
      qor("Waa maalinta saddexaad ee toddobaadka")
      jebi
  xaalad "Khamiis":
      qor("Waa maalinta afraad ee toddobaadka")
      jebi
  xaalad "Jimce":
      qor("Waa maalinta shanaad ee toddobaadka")
      jebi
  xaalad kale:
      qor("Waa fasax")
}  // Prints: "Waa maalinta koowaad ee toddobaadka" ("It's the first day of the week")`}
          title="switch_statements.sop"
        />

        <div className="p-4 my-6 bg-blue-100 rounded-lg dark:bg-blue-900/20">
          <h4 className="mb-2 font-bold">Note</h4>
          <p>
            The <code className="px-1 rounded-md bg-blue-400/20">jebi</code> keyword (meaning
            "break" in Somali) is required to prevent fall-through to the next case. Without it,
            execution would continue to the next case regardless of whether it matches.
          </p>
        </div>
      </section>

      {/* Ternary Operator */}
      <section id="ternary" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Ternary Operator
        </h2>

        <p className="mb-4">
          The ternary operator is a shorthand way of writing an
          <code className="px-1 rounded-md bg-blue-400/20">if-else</code> statement. It takes three
          operands :- <br /> <code className="px-1 rounded-md bg-blue-400/20">a condition</code>,
          <code className="px-2 mx-3 rounded-md bg-blue-400/20">a result for true</code>, and
          <code className="px-2 mx-3 rounded-md bg-blue-400/20">a result for false</code>.
        </p>

        <CodeWindow
          code={`// Ternary operator
door da = 20
door xaalad = da >= 18 ? "qof weyn" : "ilmo"

qor(xaalad)  // Prints: "qof weyn" ("adult")

// Ternary operator in an expression
door qiime = 75
qor("Imtixaanka waad " + (qiime >= 60 ? "baastay" : "dhacday"))
// Prints: "Imtixaanka waad baastay" ("You passed the exam")`}
          title="ternary_operator.sop"
        />
      </section>

      {/* Best Practices */}
      <section id="best-practices" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          Best Practices
        </h2>

        <ul className="space-y-4">
          <li>
            <h3 className="mb-2 text-xl font-bold">Use Braces for Clarity</h3>
            <p>
              Always use braces <code>{}</code> for conditional blocks, even for single-line
              statements. This makes your code more readable and less prone to errors when
              modifications are made.
            </p>
            <CodeWindow
              code={`// Good practice
haddii xaalad {
    qor("Waa run")
}

// Avoid this
haddii xaalad
  qor("Waa run")  // Error-prone if more lines are added later`}
              title="braces_practice.sop"
            />
          </li>
          <li className="mt-6">
            <h3 className="mb-2 text-xl font-bold">Keep Conditions Simple</h3>
            <p>
              Complex conditions can be hard to understand and debug. Break them down into smaller,
              more manageable parts or use intermediate variables with descriptive names.
            </p>
            <CodeWindow
              code={`// Instead of this
haddii da >= 18 && dakhli >= 30000 && !diiwaangashan {
    // Complex logic
}

// Do this
door waa_qof_weyn = da >= 18
door dakhli_ku_filan = dakhli >= 30000
door u_baahan_diiwaan = !diiwaangashan

haddii waa_qof_weyn && dakhli_ku_filan && u_baahan_diiwaan {
    // Clearer logic
}`}
              title="simple_conditions.sop"
            />
          </li>
          <li className="mt-6">
            <h3 className="mb-2 text-xl font-bold">Avoid Deep Nesting</h3>
            <p>
              Deeply nested conditional statements can make code hard to follow. Consider using
              early returns, guard clauses, or refactoring into separate functions.
            </p>
            <CodeWindow
              code={`// Instead of deep nesting
haddii xaalad1 {
    haddii xaalad2 {
        haddii xaalad3 {
            // Deeply nested code
        }
    }
}

// Better approach with early returns
haddii !xaalad1 {
    soo_celi
}

haddii !xaalad2 {
    soo_celi
}

haddii !xaalad3 {
    soo_celi
}

// Main code here (not deeply nested)`}
              title="avoid_nesting.sop"
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
          href: "/docs/loops",
          title: "Loops",
          description: "Learn about loops and iteration in Soplang",
        }}
      />
    </div>
  );
}
