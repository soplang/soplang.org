import React from "react";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Strings in Soplang",
  description:
    "Declare iyo ka shaqaynta xarfo (strings) ee Soplang: qoraal/door, iyo hababka sida qeybi, leeyahay, dhamaad, bilow, beddel, kudar, jar.",
};

export default function StringsPage() {
  return (
    <div className="mb-12 prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-8 text-3xl font-bold text-primary">Strings in Soplang</h1>
      <p className="mb-8 text-lg lead">
        Soplang waxa uu taageeraa habab kala duwan oo <em>string</em> manipulation ah oo leh magacyo
        Soomaali u-dhega nugul. Strings waxaa lagu qeexaa <code>door</code> ama <code>qoraal</code>.
      </p>

      {/* 🧵 Declare a String */}
      <section id="declare">
        <h2 className="text-2xl font-bold mb-4">🧵 Declare a String</h2>
        <CodeWindow
          title="declare_string.sop"
          code={`qoraal magac = "Sharafdin Yusuf"
door farriin = "Ku soo dhowow Soplang"`}
        />
      </section>

      {/* 🛠️ String Methods */}
      <section id="methods" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🛠️ String Methods</h2>
        <p className="mb-4">
          Hababka hoose waxay ka tarjumayaan kuwa caanka ah ee luqadaha kale, balse magacyo
          Soomaali ah ayay leeyihiin:
        </p>

        <div className="my-6 overflow-x-auto">
          <table className="min-w-full border border-collapse border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Method</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">English Equivalent</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Description</th>
                <th className="p-3 text-left border border-gray-300 dark:border-gray-700">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>qeybi(xad)</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>split()</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Kala jabiso string iyadoo la adeegsanayo kala-sooc.</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>door parts = text.qeybi(",")</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>leeyahay(sub)</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>includes()</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Hubi in uu ku jiro far-qoraal gaaban.</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>haddii (text.leeyahay("search")) {'{'}...{'}'}</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>dhamaad(sub)</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>endsWith()</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Hubi in uu ku dhammaado far-qoraal.</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>haddii (text.dhamaad("ing")) {'{'}...{'}'}</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>bilow(sub)</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>startsWith()</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Hubi in uu ku bilaabmo far-qoraal.</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>haddii (text.bilow("http")) {'{'}...{'}'}</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>beddel(x, y)</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>replace()</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Beddel <em>x</em> adigoo u beddelaya <em>y</em>.</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>door cusub = text.beddel("old", "new")</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>kudar(teed)</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>join()</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Ku xiro liis xarfo adigoo isticmaalaya kala-soocan.</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>door text = ", ".kudar(names)</code></td>
              </tr>
              <tr>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>jar(bilow, dhamaad)</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>slice()</code></td>
                <td className="p-3 border border-gray-300 dark:border-gray-700">Soo saar qayb ka timid <em>bilow</em> ilaa <em>dhamaad</em>.</td>
                <td className="p-3 border border-gray-300 dark:border-gray-700"><code>door sub = text.jar(0, 3)</code></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 📌 Example Usage */}
      <section id="example" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">📌 Example Usage</h2>
        <CodeWindow
          title="strings_example.sop"
          code={`qoraal jumlad = "Soplang waa luqad qurux badan"

// Split string into parts
teed ereyo = jumlad.qeybi(" ")
qor("Ereyada: " + ereyo)

// Check if it contains a word
haddii (jumlad.leeyahay("luqad")) {
    qor("Waa luqad!")
}

// Starts and ends with
haddii (jumlad.bilow("Soplang")) {
    qor("Waxay ku bilaabataa Soplang")
}

haddii (jumlad.dhamaad("badan")) {
    qor("Waxay ku dhammaanaysaa badan")
}

// Replace word
door beddelay = jumlad.beddel("luqad", "barnaamij")
qor("Beddelay: " + beddelay)

// Join string from list
teed magacyo = ["Ayaan", "Omar", "Zahra"]
door joined = ", ".kudar(magacyo)
qor("Dad: " + joined)

// Slice part of string
door qeyb = jumlad.jar(0, 7)
qor("Qeybta koowaad: " + qeyb)`}
        />
      </section>

      <p className="mt-6">
        Strings ee Soplang waa muujin iyo la-qabsan fudud, iyadoo magacyada hababka ay yihiin
        Soomaali-first si ay u noqdaan kuwo si dabiici ah loo fahmo.
      </p>

      <DocNavigation
        className="mt-12"
        prevPage={{
          href: "/docs/numbers",
          title: "Numbers",
          description: "Labada nooc ee tirooyinka: abn & jajab",
        }}
        nextPage={{
          href: "/docs/operators",
          title: "Operators",
          description: "Ku shaqaynta hawlgallada iyo muujiyeyaasha ee Soplang",
        }}
      />
    </div>
  );
}
