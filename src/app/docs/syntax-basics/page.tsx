import React from "react";
import Link from "next/link";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Soplang Syntax",
  description:
    "Soplang syntax waa mid fudud, nadiif ah, oo Somali-first ah—halkan ka bar bilowga iyo dareenka luuqadda.",
};

export default function SyntaxPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-6 text-3xl font-bold text-primary">Soplang Syntax</h1>

      <p className="mb-6 text-lg lead">
        Soplang syntax waxaa loo qaabeeyey in ay noqoto mid cad, kooban, oo si sahlan
        loogu fahmo af-Soomaali. Waxay isticmaashaa ereyo Soomaali ah si ay u metesho
        fikradaha barnaamijyada caanka ah, taas oo ka dhigaysa koodhku mid dabiici ah
        oo la akhrin karo.
      </p>

      <div className="mb-12">
        <h2 id="hello-world" className="mb-4 text-2xl font-bold">
          🟢 Hello World
        </h2>
        <p className="mb-4">
          Tani waa barnaamijka ugu fudud ee Soplang. Waxay adeegsanaysaa
          shaqada-dhexdeeda <code>qor()</code> si ay u muujiso wax soo saar.
        </p>
        <CodeWindow
          code={`qor("Hello, Adduun!")`}
          title="hello-world.sop"
        />
      </div>

      <div className="mb-12">
        <h2 id="structure" className="mb-4 text-2xl font-bold">
          🧱 Structure
        </h2>
        <p className="mb-4">
          Barnaamijyada Soplang waxay ka kooban yihiin qaybahaan:
        </p>
        <ul className="mb-4 list-disc list-inside">
          <li>
            <strong>Declarations</strong> – adigoo adeegsanaya <code>door</code>, <code>abn</code>, <code>jajab</code>, ama <code>madoor</code>
          </li>
          <li>
            <strong>Functions</strong> – adigoo adeegsanaya <code>howl</code>, <code>celi</code>
          </li>
          <li>
            <strong>Control flow</strong> – adigoo adeegsanaya <code>haddii</code>, <code>ugudambeyn</code>, <code>celi</code>, iwm.
          </li>
          <li>
            <strong>Built-ins</strong> – sida <code>qor()</code>, <code>gelin()</code>, <code>nooc()</code>
          </li>
        </ul>
        <p className="mb-4">
          Blocks waxaa lagu qeexaa laalaabyo (<code>{"{}"}</code>) koodhkuna wuxuu ku socdaa
          khad-khad.
        </p>
      </div>

      <div className="mb-12">
        <h2 id="example-program" className="mb-4 text-2xl font-bold">
          🔍 Example Program
        </h2>
        <p className="mb-4">
          Tusaalahan waxa uu akhriyaa gelinta isticmaalaha kadibna wuu salaamaa. Waxa uu ka kooban yahay:
          <em> qeexid howl (function)</em>, <em>doorsoome</em>, iyo <em>built-ins</em>.
        </p>
        <CodeWindow
          code={`howl salaan(magac) {
    qor("Asalaamu calaykum, " + magac)
}

door magaca = gelin("Magacaaga qor: ")
salaan(magaca)`}
          title="example.sop"
        />
      </div>

      <div className="mb-12">
        <h2 id="file-extension" className="mb-4 text-2xl font-bold">
          📦 File Extension
        </h2>
        <p className="mb-4">
          Faylasha il-koodhka Soplang waxay adeegsadaan kordhinta <code>.sop</code>.
          Waxaad ku ordi kartaa CLI ama REPL-ka Soplang:
        </p>
        <CodeWindow
          code={`soplang file.sop`}
          title="run.sh"
        />
      </div>

      <p className="mt-8">
        Syntax-kan waxa uu ku barayaa qulqulka iyo dareenka Soplang: fudayd, muujin,
        iyo Somali-first.
      </p>

      <DocNavigation
        className="mt-10"
        prevPage={{
          href: "/docs/installation",
          title: "Installation",
          description: "How to install Soplang on your system",
        }}
        nextPage={{
          href: "/docs/input-and-output",
          title: "Input & Output",
          description: "Input and Outputs in Soplang",
        }}
      />
    </div>
  );
}
