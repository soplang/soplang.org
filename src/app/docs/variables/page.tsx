import React from "react";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Variables in Soplang",
  description:
    "Baro sida loo isticmaalo variables: door (dynamic), noocyada static (abn, jajab, qoraal, bool, teed, walax), iyo constants (madoor) ee Soplang.",
};

export default function VariablesPage() {
  return (
    <div className="mb-12 prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-8 text-3xl font-bold text-primary">Soplang Variables</h1>
      <p className="mb-8 text-lg lead">
        Soplang variables waxaa lagu qeexaa erayo Somali-first ah oo ka tarjumaya doorka ama nooca.
        Tani waxay ka dhigtaa koodhka mid muujin leh oo u fudud barayaasha Af-Soomaaliga.
      </p>

      {/* On This Page */}
      <div className="p-6 my-8 rounded-lg bg-primary/10">
        <h2 className="mb-4 text-xl font-bold">On This Page</h2>
        <ul className="space-y-2 list-disc list-inside">
          <li><a href="#dynamic" className="text-primary hover:underline">Dynamic Variables – <code>door</code></a></li>
          <li><a href="#static" className="text-primary hover:underline">Static Variables (typed)</a></li>
          <li><a href="#constants" className="text-primary hover:underline">Constants – <code>madoor</code></a></li>
        </ul>
      </div>

      {/* 🟢 Dynamic Variables – door */}
      <section id="dynamic">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          🟢 Dynamic Variables – <code>door</code>
        </h2>
        <p className="mb-4">
          <code className="px-2 rounded-md bg-blue-400/35">door</code> waa soo gaabinta
          <em> doorsoome</em> oo loo adeegsado doorsoomayaal <em>dynamically typed</em>.
        </p>
        <CodeWindow
          title="dynamic_variables.sop"
          code={`door magaca = "Aamina"
door da = 19
door xaqiiqo = run`}
        />
      </section>

      {/* 🔵 Static Variables */}
      <section id="static" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          🔵 Static Variables
        </h2>
        <p className="mb-4">
          Doorsoomayaasha <em>static</em> waa kuwa si cad loo noocqeeyo (explicit types) si loo helo
          hufnaan iyo badbaado nooc (type safety).
        </p>

        <div className="my-8 overflow-x-auto">
          <table className="min-w-full border border-collapse border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Type</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Keyword</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Stands for</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Integer</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code className="px-2 rounded-md bg-blue-400/35">abn</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><em>abyoone</em></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code className="px-2 rounded-md bg-blue-400/35">abn tirada = 10</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Float</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code className="px-2 rounded-md bg-blue-400/35">jajab</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><em>jajab</em></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code className="px-2 rounded-md bg-blue-400/35">jajab qiime = 3.14</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">String</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code className="px-2 rounded-md bg-blue-400/35">qoraal</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><em>qoraal</em></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code className="px-2 rounded-md bg-blue-400/35">qoraal magaca = "Soplang"</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Boolean</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code className="px-2 rounded-md bg-blue-400/35">bool</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><em>bool</em></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code className="px-2 rounded-md bg-blue-400/35">bool sax = run</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">List</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code className="px-2 rounded-md bg-blue-400/35">teed</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><em>teed</em></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code className="px-2 rounded-md bg-blue-400/35">teed liis = [1, 2, 3]</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Object</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code className="px-2 rounded-md bg-blue-400/35">walax</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><em>walax</em></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code className="px-2 rounded-md bg-blue-400/35">{`walax qof = {magac: "Ali"}`}</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 🟡 Constants – madoor */}
      <section id="constants" className="mt-12">
        <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-[var(--border-color)]">
          🟡 Constants – <code>madoor</code>
        </h2>
        <p className="mb-4">
          <code className="px-2 rounded-md bg-blue-400/35">madoor</code> (soo gaabinta <em>madoorsoome</em>)
          waxaa loo adeegsadaa qiyamka aan la beddeli karin (immutable).
        </p>

        <CodeWindow
          title="constants_basic.sop"
          code={`madoor magaca = "Soplang"
madoor da: abn = 21`}
        />

        <p className="mb-4">Constants lama u wareejin karo (reassign):</p>
        <CodeWindow
          title="constants_reassign_error.sop"
          code={`madoor luqad = "Somali"
luqad = "English"  // ❌ Error: cannot reassign constant`}
        />
      </section>

      {/* Navigation */}
      <DocNavigation
        className="mt-12"
        prevPage={{
          href: "/docs/input-and-output",
          title: "Input & Output",
          description: "Input and Outputs in Soplang",
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
