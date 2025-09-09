import React from "react";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Loops in Soplang",
  description:
    "intay (while), kuceli (for), iyo xakamaynta jooji/soco—ku celcelin iyo socod shuruudeed ee Soplang.",
};

export default function LoopsPage() {
  return (
    <div className="mb-12 prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-8 text-3xl font-bold text-primary">Loops in Soplang</h1>
      <p className="mb-8 text-lg lead">
        Soplang waxa uu taageeraa laba nooc oo loops ah: <code>intay (shuruud)</code> oo u dhiganta
        <em> while</em>, iyo <code>kuceli (bilow ilaa dhamaad)</code> oo u dhiganta <em>for</em>.
        Waxa kale oo jira <code>jooji</code> (break) iyo <code>soco</code> (continue) si aad u yeelato
        xakameyn faahfaahsan.
      </p>

      {/* 🔁 While Loop – intay */}
      <section id="while-intay">
        <h2 className="text-2xl font-bold mb-4">🔁 While Loop – <code>intay</code></h2>
        <p className="mb-4">Koodhka ku jira block-ga wuu soconayaa inta shuruuddu tahay <em>run</em>:</p>
        <CodeWindow
          title="while_basic.sop"
          code={`abn i = 1
intay (i <= 5) {
    qor("i = " + i)
    i = i + 1
}`}
        />

        <p className="mt-6 mb-2">Waxay taageertaa <code>jooji</code> iyo <code>soco</code>:</p>
        <CodeWindow
          title="while_break_continue.sop"
          code={`abn i = 0
intay (i <= 10) {
    i = i + 1

    haddii (i % 2 == 0) {
        soco        // ka bood tirooyinka labiska ah
    }

    haddii (i == 7) {
        jooji        // jooji loop-ka marka i = 7
    }

    qor("i = " + i) // waxay daabacdaa: 1, 3, 5
}`}
        />
      </section>

      {/* 🔁 For Loop – kuceli */}
      <section id="for-kuceli" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🔁 For Loop – <code>kuceli</code></h2>
        <CodeWindow
          title="for_basic.sop"
          code={`kuceli (i 1 ilaa 5) {
    qor("Tirada: " + i)
}`}
        />

        <p className="mt-6 mb-2">Talaabo (step) la doortay:</p>
        <CodeWindow
          title="for_step.sop"
          code={`kuceli (j 2 ilaa 10 :: 2) {
    qor("Step: " + j)
}`}
        />
      </section>

      {/* 🔁 Loop Over List */}
      <section id="loop-list" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🔁 Loop Over List</h2>
        <CodeWindow
          title="loop_over_list.sop"
          code={`teed numbers = [10, 20, 30]
kuceli (i 0 ilaa numbers.dherer() - 1) {
    qor("Element " + i + ": " + numbers[i])
}`}
        />
      </section>

      {/* 🔁 Nested Loops */}
      <section id="nested" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🔁 Nested Loops</h2>
        <CodeWindow
          title="nested_loops.sop"
          code={`kuceli (i 1 ilaa 3) {
    intay (i > 0) {
        qor("Nested example")
        jooji
    }
}`}
        />
      </section>

      {/* 🔁 Factorial with While */}
      <section id="factorial" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🔁 Factorial with While</h2>
        <CodeWindow
          title="factorial_while.sop"
          code={`abn a = 5
abn result = 1
abn n = a

intay (n > 0) {
    result = result * n
    n = n - 1
}
qor(result)`}
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
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>intay</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">while loop</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>kuceli</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">for loop</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>jooji</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">break</td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>soco</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">continue</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>Soplang loops waxay taageeraan labadaba ku-celcelin qaabaysan iyo socod ku saleysan shuruud.</p>
      </section>

      <DocNavigation
        className="mt-12"
        prevPage={{
          href: "/docs/conditional-statements",
          title: "Conditional Statements",
          description: "haddii / haddii_kale / ugudambeyn",
        }}
        nextPage={{
          href: "/docs/functions",
          title: "Functions",
          description: "Qeexid iyo isticmaal howlaha (functions) ee Soplang",
        }}
      />
    </div>
  );
}
