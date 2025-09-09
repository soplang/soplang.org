import React from "react";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Built-in Functions in Soplang",
  description:
    "Tixraac degdeg ah oo ku saabsan hawlaha ku-dhexjira Soplang: qor, gelin, nooc, abn, jajab, qoraal, bool, teed, walax, daji, kor, dherer, xul.",
};

export default function BuiltInFunctionsPage() {
  return (
    <div className="mb-12 prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-8 text-3xl font-bold text-primary">Built-in Functions in Soplang</h1>
      <p className="mb-8 text-lg lead">
        Soplang waxa uu leeyahay hawlo muhiim ah oo si joogto ah u diyaar ah—daabacaad, akhris,
        beddel-nooc, leex-leexin tiro (rounding), abuuris liis/obj, iyo in ka badan—dhammaantood
        magacyo Soomaali ah.
      </p>

      {/* 📋 Built-in Function Reference */}
      <section id="reference">
        <h2 className="text-2xl font-bold mb-4">📋 Built-in Function Reference</h2>
        <div className="my-4 overflow-x-auto">
          <table className="min-w-full border border-collapse border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Function</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Meaning</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">English Equivalent</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Example</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["qor()", "Print to console", "print()", 'qor("Salaan, Adduunka!")'],
                ['gelin()', "Read user input", "input()", 'door magac = gelin("Magacaaga geli: ")'],
                ["nooc()", "Get type of a value", "typeof", "qor(nooc(magac))"],
                ['abn()', "Convert to integer", "int()", 'door n = abn("5")'],
                ['jajab()', "Convert to float", "float()", 'door f = jajab("3.14")'],
                ['qoraal()', "Convert to string", "str()", "door s = qoraal(25)"],
                ['bool()', "Convert to boolean", "bool()", "door b = bool(1)"],
                ['teed()', "Create an array", "list()", "door liis = teed(1, 2, 3)"],
                ['walax()', "Create an object", "object()", 'door obj = walax(magac: "Ali")'],
                ['daji()', "Round down", "Math.floor()", "door x = daji(4.9)"],
                ['kor()', "Round up", "Math.ceil()", "door x = kor(4.2)"],
                ['dherer()', "Length of string/list", "len()/.length", "door l = qoraal.dherer()"],
                ['xul()', "Pick random number", "random()", "door n = xul(1, 6)"],
              ].map(([fn, meaning, eng, ex], i) => (
                <tr key={i}>
                  <td className="p-3 border border-gray-300 dark:border-gray-700"><code>{fn}</code></td>
                  <td className="p-3 border border-gray-300 dark:border-gray-700">{meaning}</td>
                  <td className="p-3 border border-gray-300 dark:border-gray-700"><code>{eng}</code></td>
                  <td className="p-3 border border-gray-300 dark:border-gray-700"><code>{ex}</code></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 🧪 Examples */}
      <section id="examples" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🧪 Examples</h2>
        <CodeWindow
          title="builtins_examples.sop"
          code={`// Output
qor("Hello World")

// Input
door magac = gelin("Magacaaga geli: ")
qor("Magacaaga waa: " + magac)

// Type detection
door t = nooc(5)
qor("Type: " + t)

// Conversion
door a = abn("42")
door f = jajab("3.14")
door s = qoraal(100)
door b = bool(0)

// List and Object creation
door l = teed(1, 2, 3)
door o = walax(name: "Ayaan", age: 20)

// Math rounding
qor("Floor: " + daji(4.8))
qor("Ceil: " + kor(4.2))

// Random number
door r = xul(1, 6)
qor("Random: " + r)`}
        />
      </section>

      <p className="mt-8">
        <strong>Gunaanad:</strong> built-ins-ka Soplang waxay ka dhigaan koodhka mid kooban, muujin leh,
        isla markaana si dabiici ah ugu qoran Af-Soomaali.
      </p>

      <DocNavigation
        className="mt-12"
        prevPage={{
          href: "/docs/objects",
          title: "Objects",
          description: "walax: furayaal iyo qiimayaal",
        }}
        nextPage={{
          href: "/docs/numbers",
          title: "Numbers",
          description: "abn (tiro dhan) & jajab (tiro jajab)",
        }}
      />
    </div>
  );
}
