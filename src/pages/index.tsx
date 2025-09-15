import Layout from "@theme/Layout";
import type { ReactNode } from "react";

export default function Home(): ReactNode {
  return (
    <Layout
      title={`SomaliLang - Somali Programming Language`}
      description="Baro barnaamijinta Af-Soomaali. Ku biir bulsho firfircoon oo Soomaaliyeed."
    >
      <main>
        <h3>Hello world soplang</h3>
      </main>
    </Layout>
  );
}
