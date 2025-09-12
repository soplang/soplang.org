import React from "react";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Input and Output in Soplang",
  description:
    "Sida loo isticmaalo qor() iyo gelin() si aad u daabacdo wax soo saar ama u akhrido gelinta isticmaalaha ee Soplang.",
};

export default function InputOutputPage() {
  return (
    <div className="mb-12 prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-8 text-3xl font-bold text-primary">Input and Output in Soplang</h1>
      <p className="mb-8 text-lg lead">
        Soplang waxay isticmaashaa shaqooyin-dhexdeed fudud si loo soo bandhigo wax soo saar iyo
        in lagu akhriyo gelinta isticmaalaha.
      </p>

      {/* 🖨️ qor() – Print to Console */}
      <section id="print">
        <h3 className="mt-6 mb-4 text-xl font-bold">🖨️ <code>qor()</code> – Print to Console</h3>
        <p className="mb-4">
          Adeegso <code className="px-2 rounded-md bg-blue-400/35">qor()</code> si aad u muujiso
          qiimayaal ama xarfo (strings) shaashadda.
        </p>
        <CodeWindow
          code={`qor("Hello, Adduun!")
door magaca = "Aamina"
qor("Magaca: " + magaca)`}
          title="print_console.sop"
        />

      </section>

      {/* ⌨️ gelin() – Read from User Input */}
      <section id="input" className="mt-12">
        <h3 className="mt-6 mb-4 text-xl font-bold">⌨️ <code>gelin()</code> – Read from User Input</h3>
        <p className="mb-4">
          Adeegso <code className="px-2 rounded-md bg-blue-400/35">gelin()</code> si aad u weydiiso
          isticmaalaha gelin. Qiimaha wuxuu had iyo jeer kusoo noqdaa <em>string</em>.
        </p>
        <CodeWindow
          code={`door magaca = gelin("Magacaaga qor: ")
qor("Waad ku mahadsan tahay, " + magaca)`}
          title="read_input.sop"
        />
        <p className="mb-4">
          Haddii aad u baahan tahay is-beddel nooc (type conversion), waxaad adeegsan kartaa
          <code className="px-2 mx-1 rounded-md bg-blue-400/35">abn()</code> si aad ugu rogto tiro.
        </p>
        <CodeWindow
          code={`door da = abn(gelin("Da'daada qor: "))`}
          title="type_conversion.sop"
        />
      </section>

      {/* Navigation */}
      <DocNavigation
        className="mt-10"
        prevPage={{
          href: "/docs/syntax-basics",
          title: "Syntax Basics",
          description: "Return to the introduction and setup guide",
        }}
        nextPage={{
          href: "/docs/variables",
          title: "Variables",
          description: "Learn about variables and the different data types in Soplang",
        }}
      />
    </div>
  );
}
