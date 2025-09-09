import React from "react";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Type Conversion in Soplang",
  description:
    "Baro nooc-ogaanshaha (nooc) iyo shaqooyinka beddelka noocyo xog (abn, jajab, qoraal, bool) ee Soplang.",
};

export default function TypeConversionPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-6 text-3xl font-bold text-primary">Type Conversion in Soplang</h1>

      <p className="mb-8 text-lg lead">
        Soplang waxa uu leeyahay shaqooyin-dhexdeed (built-ins) oo fudud oo lagu kala beddelo
        noocyada xogta. Kuwaas waxay kuu oggolaanayaan inaad si ammaan ah ugu beddesho u dhaxeysa
        integer, string, decimal, iyo boolean—adigoo ilaalinaya saxnaanta xogta.
      </p>

      {/* 🧪 Type Checking – nooc() */}
      <section id="type-checking" className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">🧪 <code>nooc()</code> – Type Checking</h2>
        <p className="mb-4">
          Adeegso <code className="px-2 rounded-md bg-blue-400/35">nooc()</code> si aad u hubiso
          nooca qiime kasta.
        </p>
        <CodeWindow
          title="type_checking.sop"
          code={`door natiijo = nooc(42)         // "abn"
door natiijo2 = nooc("abc")     // "qoraal"
door natiijo3 = nooc(3.14)      // "jajab"`}
        />
      </section>

      {/* 🔁 Type Conversion Functions */}
      <section id="type-conversion" className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">🔁 Type Conversion Functions</h2>
        <p className="mb-4">
          Hoos waxaa ku qoran is-beddellada caanka ah iyo shaqada la adeegsado:
        </p>

        <div className="my-6 overflow-x-auto">
          <table className="min-w-full border border-collapse border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Conversion</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Function</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Int → String</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>qoraal()</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>qoraal(42)</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">String → Int</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>abn()</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>abn("123")</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Float → String</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>qoraal()</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>qoraal(3.14)</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">String → Float</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>jajab()</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>jajab("3.14")</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Int → Float</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>jajab()</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>jajab(5)</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Float → Int</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>abn()</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>abn(4.9)</code> → <code>4</code> <em>(truncates)</em></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Any → Bool</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>bool()</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>bool(1)</code> → <code>run</code>, <code>bool(0)</code> → <code>been</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 📌 Example */}
      <section id="conversion-example" className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">📌 Example</h2>
        <CodeWindow
          title="13_type_conversion.sop"
          code={`// Integer to string
abn int_value = 42
qoraal int_str = qoraal(int_value)
qor("Integer to string: " + int_str + " (Type: " + nooc(int_str) + ")")

// String to decimal
qoraal decimal_string = "3.14159"
jajab converted_decimal = jajab(decimal_string)
qor("String to decimal: " + converted_decimal + " (Type: " + nooc(converted_decimal) + ")")

// Decimal to integer (truncation)
jajab decimal_num = 42.75
abn int_from_decimal = abn(decimal_num)
qor("Decimal to integer (truncation): " + int_from_decimal)`}
        />

        <p className="mt-4">
          Shaqooyinkan beddelka noocyadu waxay muhiim u yihiin dhismaha <em>input-handling </em>
          adag, tusaale ahaan marka aad akhrinayso gelinta isticmaalaha ama faylasha oo aad rabto
          inaad hubiso noocyo sax ah ka hor inta aanad xisaab samayn.
        </p>
      </section>

      <DocNavigation
        className="mt-10"
        prevPage={{
          href: "/docs/data-types",
          title: "Data Types",
          description: "Noocyada xogta ee Soplang",
        }}
        nextPage={{
          href: "/docs/variables",
          title: "Variables",
          description: "Doorsoomayaasha (dynamic/static) iyo constants",
        }}
      />
    </div>
  );
}
