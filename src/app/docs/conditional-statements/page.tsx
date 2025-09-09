import React from "react";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Control Flow in Soplang",
  description:
    "Shuruudo iyo laanayn: haddii, haddii_kale, ugudambeyn, iyo dooro/xaalad (switch-case) ee Soplang.",
};

export default function ControlFlowPage() {
  return (
    <div className="mb-12 prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-8 text-3xl font-bold text-primary">Control Flow in Soplang</h1>
      <p className="mb-8 text-lg lead">
        Soplang waxay bixisaa fulin shuruudeed (conditional execution) iyadoo adeegsanaysa erayo
        Soomaali ah si ay u noqoto mid cad oo muujin leh.
      </p>

      {/* 🧠 If Statements – haddii, haddii_kale, ugudambeyn */}
      <section id="if-else">
        <h2 className="text-2xl font-bold mb-4">🧠 If Statements – <code>haddii</code>, <code>haddii_kale</code>, <code>ugudambeyn</code></h2>
        <p className="mb-4">Waxay u dhigmaan <em>if</em>, <em>else if</em>, iyo <em>else</em> luqadaha kale.</p>

        <CodeWindow
          title="if_else_basic.sop"
          code={`abn da = 17

haddii (da >= 18) {
    qor("Waad qaan gaadhay")
} haddii_kale (da >= 13) {
    qor("Waxaad tahay dhallinyaro")
} ugudambeyn {
    qor("Waad yar tahay")
}`}
        />

        <p className="mt-4">Block walba waxaa lagu xiraa <code>{"{}"}</code>. Waxaad isku xirin ama isku dhex dhigi kartaa (nest) sidaad u baahan tahay.</p>
      </section>

      {/* 🚦 Boolean Conditions */}
      <section id="boolean-conditions" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🚦 Boolean Conditions</h2>
        <p className="mb-4">Adeegso muujiyeyaasha <code>bool</code> iyo operators-ka <code>&amp;&amp;</code>, <code>||</code>, iyo <code>!</code>.</p>

        <CodeWindow
          title="boolean_conditions.sop"
          code={`abn x = 4
abn y = 9

haddii (x < y && y < 10) {
    qor("Shuruudaha waa sax")
}

// Negation
haddii (!(x == y)) {
    qor("Qiimuhu ma sina")
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
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>haddii</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">if</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>haddii_kale</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">else if</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>ugudambeyn</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">else</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Control flow ee Soplang wuxuu raacaa qaab akhris-wanaagsan oo Somali-first ah.</p>
      </section>

      {/* 🔄 Switch-Case – dooro & xaalad */}
      <section id="switch-case" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🔄 Switch-Case – <code>dooro</code> iyo <code>xaalad</code></h2>
        <p className="mb-4">
          Loogu talagalay laanayn cad oo ku saleysan hal qiime: <code>dooro</code> (switch expression),
          <code> xaalada</code> (case), iyo <code>ugudambeyn</code> (default).
        </p>

        <CodeWindow
          title="switch_case.sop"
          code={`qoraal maalinta = "Jimce"

dooro (maalinta) {
    xaalad "Isniin" {
        qor("Todobaad cusub")
    }
    xaalad "Jimce" {
        qor("Waqti nasasho")
    }
    ugudambeyn {
        qor("Maalin kale")
    }
}`}
        />

        <p className="mt-4">Tani waxay ku habboon tahay go'aan-qaadasho leh laamo badan oo ku saleysan qiime go'an.</p>
      </section>

      {/* 🔁 Combined Usage */}
      <section id="combined" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🔁 Combined Usage</h2>
        <p className="mb-4">Waxaad isku dari kartaa <code>haddii</code>/<code>haddii_kale</code>/<code>ugudambeyn</code> iyo <code>dooro</code> si aad u dhisto logic adag oo weli akhris-wanaagsan.</p>
      </section>

      {/* Navigation */}
      <DocNavigation
        className="mt-12"
        prevPage={{
          href: "/docs/operators",
          title: "Operators",
          description: "Arithmetic, comparison, iyo logical operators",
        }}
        nextPage={{
          href: "/docs/loops",
          title: "Loops",
          description: "ku_celi, inta_ay, iyo hababka ku celcelinta ee Soplang",
        }}
      />
    </div>
  );
}
