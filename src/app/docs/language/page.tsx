import React from "react";
import Link from "next/link";
import CodeWindow from "@/components/CodeWindow";
import SoplangHighlighter from "@/components/SoplangHighlighter";

export const metadata = {
  title: "Soplang Language Reference",
  description:
    "Comprehensive reference for the Soplang programming language syntax, keywords, and structure.",
};

export default function LanguageReferencePage() {
  // Example code snippets for various language features
  const variablesExample = `// Variable declarations with dynamic typing
door magac = "Soplang"     // String
door lambarka = 2.0        // Float
door waa_cusub = true      // Boolean

// Static typing
qoraal cinwaan = "Soplang: Luuqadda Barnaamijyada ee Soomaalida"
tiro tirada = 10
labadaran sax = false

// Multiple assignment
door x, y, z = 1, 2, 3`;

  const controlFlowExample = `// If statement
door da = 18

haddii (da > 18) {
    qor("Waa qof weyn")
} haddii_kale (da == 18) {
    qor("Waa 18 jir")
} haddii_kalena {
    qor("Waa qof yar")
}

// Simplified if/else
door barasho = true
qor(barasho ? "Waa arday" : "Ma ahan arday")`;

  const loopExample = `// For loop
ku_celi i min 1 ilaa 5 {
    qor(i)
}

// For loop with arrays
liis magacyada = ["Cabdi", "Caasha", "Xasan"]
ku_celi magac ku dhex jira magacyada {
    qor("Salaan " + magac)
}

// While loop
tiro j = 5
inta_ay (j > 0) {
    qor(j)
    j = j - 1
}`;

  const functionsExample = `// Basic function
howl salaanta(qofka) {
    soo_celi "Salaan, " + qofka + "!"
}

qor(salaanta("Cabdiraxmaan"))   // Prints "Salaan, Cabdiraxmaan!"

// Function with multiple parameters
howl isku_dar(x, y) {
    soo_celi x + y
}

qor(isku_dar(5, 3))   // Prints 8`;

  const classesExample = `// Basic class definition
fasalka Qof {
    howl cusub(magac, da) {
        nafta.magac = magac
        nafta.da = da
    }
    
    howl faahfaahin() {
        soo_celi nafta.magac + " waa " + qoraal(nafta.da) + " jir."
    }
}

// Creating an object
door qof1 = cusub Qof("Sacdiya", 25)
qor(qof1.faahfaahin())   // Prints "Sacdiya waa 25 jir."`;

  return (
    <div className="container-custom py-12">
      <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-primary">
          Soplang Language Reference
        </h1>
        <p className="lead text-xl mb-8">
          This reference guide provides a comprehensive overview of the Soplang
          programming language syntax, keywords, and language constructs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-lg border border-[var(--border-color)] p-4">
            <h2 className="text-xl font-bold mb-4 text-primary">
              On This Page
            </h2>
            <nav className="space-y-2">
              <a
                href="#variables"
                className="block text-gray-700 dark:text-gray-300 hover:text-primary"
              >
                Variables & Data Types
              </a>
              <a
                href="#control-flow"
                className="block text-gray-700 dark:text-gray-300 hover:text-primary"
              >
                Control Flow
              </a>
              <a
                href="#loops"
                className="block text-gray-700 dark:text-gray-300 hover:text-primary"
              >
                Loops
              </a>
              <a
                href="#functions"
                className="block text-gray-700 dark:text-gray-300 hover:text-primary"
              >
                Functions
              </a>
              <a
                href="#classes"
                className="block text-gray-700 dark:text-gray-300 hover:text-primary"
              >
                Classes & Objects
              </a>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:col-span-3">
          <section id="variables" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
              Variables & Data Types
            </h2>
            <p className="mb-6">
              Soplang provides both dynamic and static typing options. You can
              use <code>door</code> for dynamic variables or specific type
              keywords like <code>tiro</code>, <code>qoraal</code>, and{" "}
              <code>labadaran</code> for static typing.
            </p>
            <SoplangHighlighter code={variablesExample} title="variables.sop" />
          </section>

          <section id="control-flow" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
              Control Flow
            </h2>
            <p className="mb-6">
              Control flow statements in Soplang use <code>haddii</code> for if,{" "}
              <code>haddii_kale</code> for else if, and{" "}
              <code>haddii_kalena</code> for else blocks.
            </p>
            <SoplangHighlighter
              code={controlFlowExample}
              title="control_flow.sop"
            />
          </section>

          <section id="loops" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
              Loops
            </h2>
            <p className="mb-6">
              Soplang supports several loop constructs, including for loops with
              the <code>ku_celi</code> keyword and while loops with{" "}
              <code>inta_ay</code>.
            </p>
            <SoplangHighlighter code={loopExample} title="loops.sop" />
          </section>

          <section id="functions" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
              Functions
            </h2>
            <p className="mb-6">
              Functions in Soplang are defined using the <code>howl</code>{" "}
              keyword and can return values using <code>soo_celi</code>.
            </p>
            <SoplangHighlighter code={functionsExample} title="functions.sop" />
          </section>

          <section id="classes" className="mb-12">
            <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
              Classes & Objects
            </h2>
            <p className="mb-6">
              Soplang supports object-oriented programming through classes using
              the <code>fasalka</code> keyword. The <code>nafta</code> keyword
              is used to refer to the current instance (similar to "this" in
              other languages).
            </p>
            <SoplangHighlighter code={classesExample} title="classes.sop" />
          </section>

          <div className="bg-primary/10 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Documentation Resources</h3>
            <p className="mb-4">
              For more detailed information, check out these resources:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <Link
                  href="/docs/tutorial"
                  className="text-primary hover:underline"
                >
                  Soplang Tutorial
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/reference"
                  className="text-primary hover:underline"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/examples"
                  className="text-primary hover:underline"
                >
                  Example Projects
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
