import React from "react";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Soplang Data Types",
  description:
    "Noocyada xogta ee Soplang: primitives (abn, jajab, qoraal, bool), ururinta (teed, walax), iyo sida loo adeegsado.",
};

export default function DataTypesPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-6 text-3xl font-bold text-primary">Data Types in Soplang</h1>

      <p className="mb-6 text-lg lead">
        Soplang waxa uu leeyahay noocyo xog oo kala duwan si uu u metelo qiimeyaal kala geddisan.
        Boggan waxa uu daboolayaa noocyada aasaasiga ah (primitives) iyo ururinta (collections) iyo
        sida ugu habboon ee loo isticmaalo.
      </p>

      {/* Primitive Types */}
      <section id="primitive-types" className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Primitive Types</h2>
        <p className="mb-4">
          Kuwaani waa noocyada ugu aasaasiga ah ee dhisaya noocyada kale ee adag.
        </p>

        {/* Numbers */}
        <h3 className="mb-3 text-xl font-semibold" id="numbers">Numbers</h3>
        <p className="mb-4">
          Soplang waxa uu taageeraa tirooyinka dhan iyo jajab. Waxa aad isticmaali kartaa{" "}
          <code className="px-2 rounded-md bg-blue-400/35">door</code> (dynamic) ama{" "}
          <code className="px-2 rounded-md bg-blue-400/35">abn</code> (static).
        </p>
        <CodeWindow
          title="numbers.sop"
          code={`// Dynamic typing
door lambarka1 = 42       // Integer
door lambarka2 = 3.14     // Floating-point

// Static typing
abn lambarka3 = 100       // Integer
abn lambarka4 = -25       // Negative integer

// Arithmetic
qor(lambarka1 + lambarka2)   // 45.14
qor(lambarka1 * lambarka3)   // 4200
qor(lambarka3 / lambarka1)   // 2.38...`}
        />

        {/* Strings */}
        <h3 className="mt-8 mb-3 text-xl font-semibold" id="strings">Strings</h3>
        <p className="mb-4">
          <em>Strings</em> waa taxane xarfo ah. Waxaad adeegsan kartaa q-double ama q-single, ka dibna
          ku shaqayn karaan habab kala duwan.
        </p>
        <CodeWindow
          title="strings.sop"
          code={`// Dynamic typing
door magac1 = "Soplang"
door magac2 = 'Programming Language'

// Static typing
qoraal magac3 = "Soplang: Luuqadda Barnaamijyada ee Afka Soomaaliga"

// Concatenation
qor(magac1 + " - " + magac2)   // Soplang - Programming Language

// Dherer & habab
qor(magac1.dherer())           // 7
qor(magac1.sareyn())           // SOPLANG
qor(magac1.hooseyn())          // soplang
qor(magac3.qayb(0, 7))         // Soplang

// Interpolation (haddii ay taageerto f-strings)
door version = 2.0
qor(f"{magac1} v{version}")    // Soplang v2.0`}
        />

        {/* Booleans */}
        <h3 className="mt-8 mb-3 text-xl font-semibold" id="booleans">Booleans</h3>
        <p className="mb-4">
          Qiimayaasha run/been: <code className="px-2 rounded-md bg-blue-400/35">run</code> iyo{" "}
          <code className="px-2 rounded-md bg-blue-400/35">been</code>. Waxaad adeegsan kartaa{" "}
          <code className="px-2 rounded-md bg-blue-400/35">door</code> ama{" "}
          <code className="px-2 rounded-md bg-blue-400/35">bool</code>.
        </p>
        <CodeWindow
          title="booleans.sop"
          code={`// Dynamic typing
door waa_sax = run
door waa_qalad = been

// Static typing
bool waa_arday = run
bool waa_macalin = been

// Logical
qor(waa_sax && waa_qalad)  // false
qor(waa_sax || waa_qalad)  // true
qor(!waa_sax)              // false

// Comparison
door x = 10
door y = 20
qor(x > y)     // false
qor(x <= y)    // true
qor(x == 10)   // true
qor(x != y)    // true`}
        />
      </section>

      {/* Collection Types */}
      <section id="collection-types" className="mb-12">
        <h2 className="mb-4 text-2xl font-bold">Collection Types</h2>
        <p className="mb-4">
          Ururinta waxa ay kuu oggolaanayaan in aad isku kaydiso qiimeyaal badan.
        </p>

        {/* Lists */}
        <h3 className="mb-3 text-xl font-semibold" id="lists">Lists</h3>
        <p className="mb-4">
          Liisaska waa ururin leh amar (ordered). Waad abuuri kartaa adigoo adeegsanaya{" "}
          <code className="px-2 rounded-md bg-blue-400/35">teed</code> (static) ama{" "}
          <code className="px-2 rounded-md bg-blue-400/35">door</code> oo leh{" "}
          <code className="px-1 rounded-md bg-blue-400/35">[]</code>.
        </p>
        <CodeWindow
          title="lists.sop"
          code={`// Abuurista liis
door tiro = [1, 2, 3, 4, 5]
teed magacyada = ["Cabdi", "Caasha", "Xasan", "Hodan"]
teed isku_dhafan = [1, "Soplang", run, 3.14]

// Helidda walxaha (zero-indexed)
qor(tiro[0])         // 1
qor(magacyada[2])    // Xasan

// Beddelid
tiro[0] = 10
qor(tiro)            // [10, 2, 3, 4, 5]

// Hababka liisaska
tiro.kudar(6)        // ku dar dhamaadka
qor(tiro)            // [10, 2, 3, 4, 5, 6]

magacyada.saar(1)    // ka saar index 1
qor(magacyada)       // ["Cabdi", "Xasan", "Hodan"]

// Dherer
qor(magacyada.dherer())  // 3`}
        />

        {/* Dictionaries / Objects */}
        <h3 className="mt-8 mb-3 text-xl font-semibold" id="objects">Objects (Dictionaries)</h3>
        <p className="mb-4">
          <em>Objects</em> waa lammaane fure–qiime ah. Waxaad ku abuuri kartaa{" "}
          <code className="px-2 rounded-md bg-blue-400/35">door</code> adigoo adeegsanaya{" "}
          <code className="px-1 rounded-md bg-blue-400/35">{`{}`}</code> ama nooca static ee{" "}
          <code className="px-2 rounded-md bg-blue-400/35">walax</code>.
        </p>
        <CodeWindow
          title="objects.sop"
          code={`// Abuurista objects
door qof = {
  "magac": "Cabdilaahi",
  "da": 25,
  "waa_arday": run
}

walax luuqad = {
  "magac": "Soplang",
  "version": 2.0,
  "sanadka": 2023,
  "features": ["OOP", "Dynamic Typing", "Easy Syntax"]
}

// Helidda qiimeyaal
qor(qof["magac"])       // Cabdilaahi
qor(luuqad["version"])  // 2.0

// Dot-notation (haddii la taageero)
qor(qof.magac)          // Cabdilaahi
qor(luuqad.features)    // ["OOP", "Dynamic Typing", "Easy Syntax"]

// Beddelid
qof["da"] = 26
qof["degaan"] = "Muqdisho"
qor(qof)

// Hubi furaha
qor("magac" ku dhex jira qof)   // true
qor("luuqad" ku dhex jira qof)  // false

// Habab
qor(qof.fureyaasha())    // ["magac", "da", "waa_arday", "degaan"]
qor(qof.qiimeyaasha())   // ["Cabdilaahi", 26, true, "Muqdisho"]
qor(luuqad.dherer())     // 4`}
        />
      </section>

      {/* Footer Navigation */}
      <DocNavigation
        className="mt-10"
        prevPage={{
          href: "/docs/syntax-basics",
          title: "Syntax Basics",
          description: "Return to the fundamental syntax of Soplang",
        }}
        nextPage={{
          href: "/docs/variables",
          title: "Variables",
          description: "Learn more about variable declaration and scope",
        }}
      />
    </div>
  );
}
