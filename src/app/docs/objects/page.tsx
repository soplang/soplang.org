import React from "react";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Objects in Soplang",
  description:
    "Learn how to declare, modify, and manage walax (objects) in Soplang with Somali-first methods.",
};

export default function ObjectsPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-6 text-3xl font-bold text-primary">Objects in Soplang</h1>
      <p className="mb-8 text-lg lead">
        Objects in Soplang are defined using the <code>walax</code> type. They store key–value pairs
        and provide Somali-first methods to inspect, modify, and copy structured data.
      </p>

      {/* Declaring an Object */}
      <section id="declaring">
        <h2 className="text-2xl font-bold mb-4">🧾 Declaring an Object – <code>walax</code></h2>
        <CodeWindow
          title="declare_object.sop"
          code={`walax qof = {
    magac: "Ayaan",
    da: 25,
    shaqo: "barayaal"
}`}
        />
      </section>

      {/* Core Methods */}
      <section id="core-methods" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🔧 Core Object Methods</h2>

        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>fure()</code> – Get Keys</h3>
        <CodeWindow
          title="keys.sop"
          code={`door keys = qof.fure()
qor(keys)`}
        />

        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>qiime()</code> – Get Values</h3>
        <CodeWindow
          title="values.sop"
          code={`door values = qof.qiime()
qor(values)`}
        />

        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>lamaane()</code> – Get Key-Value Pairs</h3>
        <CodeWindow
          title="pairs.sop"
          code={`door pairs = qof.lamaane()
qor(pairs)`}
        />

        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>leeyahay(x)</code> – Has Key</h3>
        <CodeWindow
          title="has_key.sop"
          code={`haddii (qof.leeyahay("magac")) {
    qor("Magaca wuu jiraa")
}`}
        />

        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>tir(x)</code> – Delete Key</h3>
        <CodeWindow
          title="delete.sop"
          code={`qof.tir("shaqo")
qor(qof)`}
        />

        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>kudar(obj)</code> – Merge/Assign</h3>
        <CodeWindow
          title="merge.sop"
          code={`walax A = {x: 1}
walax B = {y: 2}
walax C = A.kudar(B)

qor(C)  // {x: 1, y: 2}`}
        />

        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>nuqul()</code> – Copy</h3>
        <CodeWindow
          title="copy.sop"
          code={`walax asal = {a: 10, b: 20}
walax copy = asal.nuqul()
qor(copy)`}
        />

        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>nadiifi()</code> – Clear All Properties</h3>
        <CodeWindow
          title="clear.sop"
          code={`asal.nadiifi()
qor("Cleared object: " + asal)`}
        />
      </section>

      <p className="mt-8">
        <strong>Gunaanad:</strong> <code>walax</code> waxay siisaa qaab awood badan oo lagu kaydiyo
        xog magacyo leh, iyadoo leh habab si buuxda ugu qoran Af-Soomaali.
      </p>

      <DocNavigation
        className="mt-12"
        prevPage={{
          href: "/docs/arrays",
          title: "Arrays",
          description: "teed: uruurinta qiimaha badan",
        }}
        nextPage={{
          href: "/docs/modules",
          title: "Modules",
          description: "Habka qaybinta iyo isticmaalka modules ee Soplang",
        }}
      />
    </div>
  );
}
