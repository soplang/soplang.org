import React from "react";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Numbers in Soplang",
  description:
    "Learn the two numeric types in Soplang—abn (integers) and jajab (decimals)—with literals, arithmetic, comparisons, and conversions.",
};

export default function NumbersPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-6 text-3xl font-bold text-primary">Numbers in Soplang</h1>

      <p className="mb-8 text-lg lead">
        Soplang waxa uu leeyahay laba nooc oo tiro ah: <strong>abn</strong> (integers) iyo{" "}
        <strong>jajab</strong> (decimals). Boggan waxa uu muujinayaa sida loo qoro, loo xisaabiyo,
        loona is-beddelo labadan nooc.
      </p>

      {/* Integers – abn */}
      <section id="integers" className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">🧱 Integers — <code>abn</code></h2>
        <p className="mb-4">
          <code className="px-2 rounded-md bg-blue-400/35">abn</code> waxa uu metelaa tirooyin dhan
          (…,-2,-1,0,1,2,…). Waxaad qeexi kartaa si <em>dynamic</em> (<code>door</code>) ama si
          <em> static</em> (<code>abn</code>).
        </p>

        <CodeWindow
          title="integers_basic.sop"
          code={`// Literals & declaration
abn da = 21
door tirin = 100     // dynamic, but integer value

// Arithmetic
abn a = 10
abn b = 3
qor(a + b)   // 13
qor(a - b)   // 7
qor(a * b)   // 30
qor(a / b)   // 3.333...  (natiijo jajab ah)
qor(a % b)   // 1         (remainder)

// Comparisons
qor(a > b)    // run
qor(a == 10)  // run
qor(a != b)   // run`}
        />

        <p className="mt-4">
          Qaybintu (<code>/</code>) waxay bixin kartaa natiijo <em>jajab</em> haddii aysan si buuxda
          u qaybsamin—haddii aad rabto integer oo keliya, isticmaal{" "}
          <code className="px-2 rounded-md bg-blue-400/35">abn()</code> si aad u <em>truncation</em>
          sameyso.
        </p>
        <CodeWindow
          title="integers_division_trunc.sop"
          code={`abn natiijo_dhan = abn(10 / 3)  // 3 (truncation)`}
        />
      </section>

      {/* Decimals – jajab */}
      <section id="decimals" className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">💧 Decimals — <code>jajab</code></h2>
        <p className="mb-4">
          <code className="px-2 rounded-md bg-blue-400/35">jajab</code> waxa uu metelaa tirooyinka
          leh meel-dhaaf (floating/decimal). Waxaa ku habboon xisaab sax ah oo leh jajab.
        </p>

        <CodeWindow
          title="decimals_basic.sop"
          code={`// Literals & declaration
jajab pi = 3.14159
door qiime = 2.5       // dynamic, decimal value

// Arithmetic
jajab x = 10.0
jajab y = 4.0
qor(x + y)   // 14.0
qor(x - y)   // 6.0
qor(x * y)   // 40.0
qor(x / y)   // 2.5

// Comparisons
qor(pi > 3)        // run
qor(2.0 == 2)      // run (labaduba waxay loo turjumi karaa qiime isu eg)`}
        />

        <p className="mt-4">
          Haddii aad ka timid <code>door</code> oo aadan hubin nooca, waxaad ka fiirsan kartaa{" "}
          <code className="px-2 rounded-md bg-blue-400/35">nooc()</code> si aad u xaqiijiso.
        </p>
        <CodeWindow
          title="decimals_type_check.sop"
          code={`door n = 2.75
qor(nooc(n))  // "jajab"`}
        />
      </section>

      {/* Mixed arithmetic & conversions */}
      <section id="mixed" className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">🔁 Isku-darka abn & jajab</h2>
        <p className="mb-4">
          Marka aad isku qasto <code>abn</code> iyo <code>jajab</code>, natiijadu inta badan waxay
          noqotaa <code>jajab</code>. Waxaad si cad u qasbi kartaa nooca adigoo adeegsanaya{" "}
          <code>abn()</code> ama <code>jajab()</code>.
        </p>

        <CodeWindow
          title="mixed_arithmetic.sop"
          code={`abn a = 5
jajab b = 2.0

// Natiijo jajab
door c = a + b
qor(c)          // 7.0
qor(nooc(c))    // "jajab"

// Qasbi integer (truncation)
abn d = abn(a / b)
qor(d)          // 2

// Qasbi decimal
jajab e = jajab(a * 2)
qor(e)          // 10.0`}
        />
      </section>

      {/* Useful numeric helpers */}
      <section id="helpers" className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">🧩 Beddel & xaqiijin degdeg ah</h2>
        <CodeWindow
          title="helpers_quick.sop"
          code={`// From input → number
door gelin_da = gelin("Da'daada qor: ")
abn da = abn(gelin_da)               // "19" -> 19
qor("Nooc: " + nooc(da))             // "abn"

// String → decimal
jajab qiime = jajab("12.75")
qor(qiime + 0.25)                    // 13.0

// Number → string
qoraal s = qoraal(2025)
qor("Sanad: " + s)`}
        />
      </section>

      <DocNavigation
        className="mt-10"
        prevPage={{
          href: "/docs/type-conversion",
          title: "Type Conversion",
          description: "nooc(), abn(), jajab(), qoraal(), bool()",
        }}
        nextPage={{
          href: "/docs/strings",
          title: "Strings",
          description: "Taxane xarfo: qeexid, habab, isku-xirid, dherer",
        }}
      />
    </div>
  );
}
