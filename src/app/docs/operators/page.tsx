import React from "react";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Operators in Soplang",
  description:
    "Arithmetic, comparison, iyo logical operators ee Soplang—syntax, tusaalooyin, iyo isticmaal caadi ah.",
};

export default function OperatorsPage() {
  return (
    <div className="mb-12 prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-8 text-3xl font-bold text-primary">Operators in Soplang</h1>
      <p className="mb-8 text-lg lead">
        Soplang waxa uu taageeraa operators caadi ah oo u eg kuwa luqadaha caanka ah:
        arithmetic, comparison, iyo logical—si fudud oo akhris-wanaagsan.
      </p>

      {/* ➕ Arithmetic Operators */}
      <section id="arithmetic">
        <h2 className="text-2xl font-bold mb-4">➕ Arithmetic Operators</h2>
        <p className="mb-4">Waxaa loo adeegsadaa xisaab tirooyin <code>abn</code> ama <code>jajab</code>.</p>

        <div className="my-4 overflow-x-auto">
          <table className="min-w-full border border-collapse border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Operator</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Meaning</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>+</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Addition</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>a + b</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>-</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Subtraction</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>a - b</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>*</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Multiplication</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>a * b</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>/</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Division</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>a / b</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>%</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Modulo</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>a % b</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeWindow
          title="arithmetic.sop"
          code={`abn a = 10
abn b = 3
qor("Wadarta: " + (a + b))
qor("Hadhaaga: " + (a % b))`}
        />
      </section>

      {/* 🧮 Comparison Operators */}
      <section id="comparison" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🧮 Comparison Operators</h2>
        <p className="mb-4">Lagu hubiyo isbarbar dhig ama sinnaansho u dhexeeya qiimeyaal.</p>

        <div className="my-4 overflow-x-auto">
          <table className="min-w-full border border-collapse border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Operator</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Meaning</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>==</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Equal</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>a == b</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>!=</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Not equal</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>a != b</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>{`>`}</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Greater than</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>a {`>`} b</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>{`<`}</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Less than</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>a {`<`} b</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>{`>=`}</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Greater or equal</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>a {`>=`} b</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>{`<=`}</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Less or equal</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>a {`<=`} b</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeWindow
          title="comparison.sop"
          code={`door a = 5
door b = 10
qor("a == b: " + (a == b))
qor("a < b: " + (a < b))`}
        />
      </section>

      {/* 🔗 Logical Operators */}
      <section id="logical" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🔗 Logical Operators</h2>
        <p className="mb-4">Waxaa loo adeegsadaa isku-darka xaaladaha (conditions) boolean.</p>

        <div className="my-4 overflow-x-auto">
          <table className="min-w-full border border-collapse border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Operator</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Meaning</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>&amp;&amp;</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Logical AND</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>(a {`>`} 5) && (b {`<`} 10)</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>||</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Logical OR</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>(a {`<`} 5) || (b {`>`} 3)</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>!</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Logical NOT</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>!(a == b)</code></td>
              </tr>
            </tbody>
          </table>
        </div>

        <CodeWindow
          title="logical.sop"
          code={`abn x = 5
abn y = 10

bool isInRange = (x > 3) && (y < 15)
bool isMismatch = !(x == y)
qor("Is in range: " + isInRange)
qor("Mismatch: " + isMismatch)`}
        />
      </section>

      <p className="mt-8">
        Operators-ka Soplang waxay kuu oggolaanayaan inaad dhisto muujiyeyo awood leh iyo
        xakamayn (control flow) nadiif ah.
      </p>

      <DocNavigation
        className="mt-12"
        prevPage={{
          href: "/docs/strings",
          title: "Strings",
          description: "Ka shaqaynta xarfo iyo hababkooda ee Soplang",
        }}
        nextPage={{
          href: "/docs/conditional-statements",
          title: "Conditional Statements",
          description: "haddii / haddii_kale / ugudambeyn iyo go'aan qaadasho",
        }}
      />
    </div>
  );
}
