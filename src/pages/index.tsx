import Layout from "@theme/Layout";
import type { ReactNode } from "react";

export default function Home(): ReactNode {
  return (
    <Layout
      title={`SomaliLang - Somali Programming Language`}
      description="Baro barnaamijinta Af-Soomaali. Ku biir bulsho firfircoon oo Soomaaliyeed."
    >
      <main className="h-screen w-full flex items-center justify-center">
        <p className="w-[500px] leading-relaxed ">
          Elkenzi will be developing this page with slick animation, snappy UI
          effects, eye-blowing linked animations, crazy unseen hover effects,
          timelines that make people say 'WOOOOW', and finally, performance that
          recruiters will take note of it.
        </p>
      </main>
    </Layout>
  );
}
