import Layout from "@theme/Layout";
import type { ReactNode } from "react";
import CodeBlock from "../components/shared/CodeBlock";

export default function Home(): ReactNode {
  return (
    <Layout
      title={`SomaliLang - Somali Programming Language`}
      description="Baro barnaamijinta Af-Soomaali. Ku biir bulsho firfircoon oo Soomaaliyeed."
    >
      <main>
        <h3>Hello world soplang</h3>
        <CodeBlock code={'qor("Hello from Soplang")'} className="w-[500px]" title="hello.sop"/>
      </main>
    </Layout>
  );
}
