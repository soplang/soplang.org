import React from "react";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Soplang Keywords Reference",
  description:
    "Tixraac dhamaystiran ee ereyada (keywords) Soplang: door, madoor, haddii, kuceli, hawl, celi, iyo kuwo kale—oo leh macnayaal iyo tusaalooyin.",
};

export default function KeywordsReferencePage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-6 text-3xl font-bold text-primary">Soplang Keywords Reference</h1>
      <p className="mb-8 text-lg lead">
        Dukumeentigani waxa uu soo koobayaa ereyada (keywords) ee Soplang, macnahooda, u dhigmaha
        Ingiriisiga, iyo tusaalooyin isticmaal.
      </p>

      {/* Variable Declaration Keywords */}
      <section id="variables">
        <h2 className="text-2xl font-bold mb-4">Variable Declaration Keywords</h2>
        <div className="my-4 overflow-x-auto">
          <table className="min-w-full border border-collapse border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border">Keyword</th>
                <th className="p-3 text-left border">Meaning</th>
                <th className="p-3 text-left border">English Equivalent</th>
                <th className="p-3 text-left border">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["door", "Dynamic variable declaration", "var/let", 'door magac = "Sharafdin"'],
                ["madoor", "Constant variable declaration", "const", "madoor PI = 3.14159"],
                ["abn", "Integer type", "int", "abn da = 25"],
                ["jajab", "Decimal/float type", "float/double", "jajab qiimo = 3.14"],
                ["qoraal", "String type", "string", 'qoraal magac = "Sharafdin"'],
                ["bool", "Boolean type", "bool", "bool waaRun = run"],
                ["walax", "Object type", "object", 'walax person = { name: "Sharafdin" }'],
                ["teed", "List/array type", "array", "teed numbers = [1, 2, 3]"],
                ["maran", "Null value", "null", "door a = maran"],
              ].map(([k, m, e, ex], i) => (
                <tr key={i}>
                  <td className="p-3 border"><code>{k}</code></td>
                  <td className="p-3 border">{m}</td>
                  <td className="p-3 border"><code>{e}</code></td>
                  <td className="p-3 border"><code>{ex}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Control Flow Keywords */}
      <section id="control-flow" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Control Flow Keywords</h2>
        <div className="my-4 overflow-x-auto">
          <table className="min-w-full border border-collapse border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border">Keyword</th>
                <th className="p-3 text-left border">Meaning</th>
                <th className="p-3 text-left border">English Equivalent</th>
                <th className="p-3 text-left border">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["haddii", "If statement", "if", 'haddii (x > 10) { qor("Weyn") }'],
                ["haddii_kale", "Else if statement", "else if", 'haddii_kale (x == 10) { qor("Dhexe") }'],
                ["ugudambeyn", "Else statement", "else", 'ugudambeyn { qor("Yar") }'],
                ["dooro", "Switch statement", "switch", 'dooro (x) { xaalad 1 { qor("Hal") } }'],
                ["xaalad", "Case clause", "case", 'xaalad "A" { qor("Case A") }'],
                ["kuceli", "For loop", "for", "kuceli (i 1 ilaa 5) { qor(i) }"],
                ["ilaa", "Loop range end", "to", "kuceli (i 1 ilaa 5) { qor(i) }"],
                ["::", "Loop increment", "step", "kuceli (i 1 ilaa 10 :: 2) { qor(i) }"],
                ["intay", "While loop", "while", "intay (x < 5) { qor(x) }"],
                ["jooji", "Break statement", "break", "haddii (x == 3) { jooji }"],
                ["soco", "Continue statement", "continue", "haddii (x == 3) { soco }"],
              ].map(([k, m, e, ex], i) => (
                <tr key={i}>
                  <td className="p-3 border"><code>{k}</code></td>
                  <td className="p-3 border">{m}</td>
                  <td className="p-3 border"><code>{e}</code></td>
                  <td className="p-3 border"><code>{ex}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Function Keywords */}
      <section id="functions" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Function Keywords</h2>
        <div className="my-4 overflow-x-auto">
          <table className="min-w-full border border-collapse border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border">Keyword</th>
                <th className="p-3 text-left border">Meaning</th>
                <th className="p-3 text-left border">English Equivalent</th>
                <th className="p-3 text-left border">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["hawl", "Function declaration", "function", "hawl isuGee(a, b) { celi a + b }"],
                ["celi", "Return statement", "return", "celi x * 2"],
              ].map(([k, m, e, ex], i) => (
                <tr key={i}>
                  <td className="p-3 border"><code>{k}</code></td>
                  <td className="p-3 border">{m}</td>
                  <td className="p-3 border"><code>{e}</code></td>
                  <td className="p-3 border"><code>{ex}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Special Values */}
      <section id="special-values" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Special Values</h2>
        <div className="my-4 overflow-x-auto">
          <table className="min-w-full border border-collapse border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border">Somali Value</th>
                <th className="p-3 text-left border">English Equivalent</th>
                <th className="p-3 text-left border">Description</th>
                <th className="p-3 text-left border">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["run", "true", "Boolean true value", "haddii (run) { ... }"],
                ["been", "false", "Boolean false value", "haddii (!been) { ... }"],
                ["maran", "null", "Empty/null value", "door val = maran"],
              ].map(([k, e, d, ex], i) => (
                <tr key={i}>
                  <td className="p-3 border"><code>{k}</code></td>
                  <td className="p-3 border"><code>{e}</code></td>
                  <td className="p-3 border">{d}</td>
                  <td className="p-3 border"><code>{ex}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Operators */}
      <section id="operators" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Operators</h2>
        <div className="my-4 overflow-x-auto">
          <table className="min-w-full border border-collapse border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border">Somali Operator</th>
                <th className="p-3 text-left border">English Equivalent</th>
                <th className="p-3 text-left border">Description</th>
                <th className="p-3 text-left border">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["+", "+", "Addition", "x = a + b"],
                ["-", "-", "Subtraction", "x = a - b"],
                ["*", "*", "Multiplication", "x = a * b"],
                ["/", "/", "Division", "x = a / b"],
                ["%", "%", "Modulo", "x = a % b"],
                ["==", "==", "Equal to", "haddii (a == b) {...}"],
                ["!=", "!=", "Not equal to", "haddii (a != b) {...}"],
                [">", ">", "Greater than", "haddii (a > b) {...}"],
                ["<", "<", "Less than", "haddii (a < b) {...}"],
                [">=", ">=", "Greater than or equal to", "haddii (a >= b) {...}"],
                ["<=", "<=", "Less than or equal to", "haddii (a <= b) {...}"],
                ["&&", "&&", "Logical AND", "haddii (a && b) {...}"],
                ["||", "||", "Logical OR", "haddii (a || b) {...}"],
                ["!", "!", "Logical NOT", "haddii (!a) {...}"],
              ].map(([op, eng, desc, ex], i) => (
                <tr key={i}>
                  <td className="p-3 border"><code>{op}</code></td>
                  <td className="p-3 border"><code>{eng}</code></td>
                  <td className="p-3 border">{desc}</td>
                  <td className="p-3 border"><code>{ex}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tiny live examples block (optional) */}
      <section id="examples" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Quick Examples</h2>
        <CodeWindow
          title="keywords_quick_examples.sop"
          code={`// Variables
door magac = "Sharafdin"
madoor PI = 3.14159
abn da = 25
jajab qiimo = 3.14
qoraal qora = "Salaan"
bool sax = run
teed numbers = [1, 2, 3]
walax qof = { magac: "Ayaan" }
door wax = maran

// Control flow
haddii (da >= 18) { qor("Qof weyn") } ugudambeyn { qor("Ilmo") }

dooro (qora) {
  xaalad "Salaan" { qor("Hello!") }
  ugudambeyn { qor("Unknown") }
}

kuceli (i 1 ilaa 5 :: 2) { qor(i) }
abn x = 1
intay (x < 3) { qor(x); x = x + 1 }

// Functions
hawl isuGee(a, b) { celi a + b }
qor(isuGee(2, 3))`}
        />
      </section>

      <DocNavigation
        className="mt-12"
        prevPage={{
          href: "/docs/built-in-functions",
          title: "Built-in Functions",
          description: "Hawlaha ku-dhex jira ee Soplang",
        }}
        nextPage={{
          href: "/docs/syntax-basics",
          title: "Syntax Basics",
          description: "Aasaaska naxwaha Soplang",
        }}
      />
    </div>
  );
}
