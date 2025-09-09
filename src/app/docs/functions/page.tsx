import React from "react";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Functions in Soplang",
  description:
    "Qeexid iyo isticmaal hawlaha (hawl) ee Soplang, wicitaan, celin qiime (celi), iyo loops gudaha hawl.",
};

export default function FunctionsPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-6 text-3xl font-bold text-primary">Functions in Soplang</h1>

      <p className="mb-8 text-lg lead">
        Functions (hawlo) waa qaybo koodh oo dib loo isticmaali karo. Soplang waxa lagu qeexaa
        <code className="px-2 rounded-md bg-blue-400/25 ml-1 mr-1">hawl</code> waxaana natiijo lagu
        soo celinayaa <code className="px-2 rounded-md bg-blue-400/25 ml-1 mr-1">celi</code>.
      </p>

      {/* 🛠️ Define a Function – hawl */}
      <section id="define">
        <h2 className="text-2xl font-bold mb-4">🛠️ Define a Function – <code>hawl</code></h2>
        <p className="mb-4">
          Hawl waxa ay bilaabataa <code>hawl</code> kadibna magac hawl iyo parameters (aan lahayn
          type annotations).
        </p>
        <CodeWindow
          title="define_function.sop"
          code={`hawl salaan(magac) {
    qor("Asalaamu calaykum, " + magac)
}`}
        />
      </section>

      {/* 🧾 Call a Function */}
      <section id="call" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🧾 Call a Function</h2>
        <p className="mb-4">Marka aad qeexdo, ku wac magaceeda oo raaci doodaha (arguments):</p>
        <CodeWindow
          title="call_function.sop"
          code={`salaan("Aamina")`}
        />
      </section>

      {/* 🔁 Return Values – celi */}
      <section id="return" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🔁 Return Values – <code>celi</code></h2>
        <p className="mb-4">
          Adeegso <code>celi</code> si aad uga soo celiso hawl qiime.
        </p>
        <CodeWindow
          title="return_values.sop"
          code={`hawl labanlaab(x) {
    celi x * 2
}

abn natiijo = labanlaab(5)
qor("Natiijo: " + natiijo)`}
        />
      </section>

      {/* 🔄 Loops Inside Functions */}
      <section id="loops-in-functions" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🔄 Loops Inside Functions</h2>
        <p className="mb-4">
          Hawluhu waxay ka kooban karaan loops iyo logic kale sida blocks-ka caadiga ah.
        </p>
        <CodeWindow
          title="loops_inside_function.sop"
          code={`hawl muujin(liis) {
    kuceli (i 0 ilaa liis.dherer() - 1) {
        qor("Liiska: " + liis[i])
    }
}`}
        />
      </section>

      {/* ✅ Summary */}
      <section id="summary" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">✅ Summary</h2>
        <div className="my-4 overflow-x-auto">
          <table className="min-w-full border border-collapse border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Keyword</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>hawl</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">function definition</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>celi</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">return value</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          Functions ee Soplang waxay ka dhigaan koodhka dib-u-isticmaal leh, nadiif, oo Somali-first.
        </p>
      </section>

      <DocNavigation
        className="mt-10"
        prevPage={{
          href: "/docs/loops",
          title: "Loops",
          description: "intay (while), kuceli (for), jooji/soco",
        }}
        nextPage={{
          href: "/docs/built-in-functions",
          title: "Built-in Functions",
          description: "Hawlaha ku-dhexjira Soplang ee ugu caansan",
        }}
      />
    </div>
  );
}
