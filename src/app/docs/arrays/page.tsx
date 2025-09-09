import React from "react";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";

export const metadata = {
  title: "Arrays in Soplang",
  description:
    "Isticmaalka teed (arrays): qeexid, dherer, ku darid/kasaarid, rog, nadiifi, habee, beddel/shaandhayn, indexing iyo jarid.",
};

export default function ArraysPage() {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none">
      <h1 className="mb-6 text-3xl font-bold text-primary">Arrays in Soplang</h1>
      <p className="mb-8 text-lg lead">
        Arrays waxa lagu qeexaa erayga <code>teed</code>. Waxay hayaan uruurin qiimayaal ah oo leh
        habab badan: maarayn, beddelid, iyo falanqayn.
      </p>

      {/* 📦 Declaring Arrays */}
      <section id="declaring">
        <h2 className="text-2xl font-bold mb-4">📦 Declaring Arrays</h2>
        <CodeWindow
          title="declare_arrays.sop"
          code={`teed numbers = [1, 2, 3, 4]
teed magacyo = ["Ali", "Zahra"]`}
        />
      </section>

      {/* 🔧 Core Array Methods */}
      <section id="core-methods" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🔧 Core Array Methods</h2>

        {/* dherer */}
        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>dherer()</code> – Get Length</h3>
        <CodeWindow
          title="length.sop"
          code={`teed x = [10, 20, 30]
qor("Length: " + x.dherer())  // 3`}
        />

        {/* kudar (push) */}
        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>kudar(x)</code> – Add to End</h3>
        <CodeWindow
          title="push.sop"
          code={`teed x = [1, 2]
x.kudar(3)   // [1, 2, 3]
x.kudar(4)   // [1, 2, 3, 4]`}
        />

        {/* kasaar (pop) */}
        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>kasaar()</code> – Remove Last</h3>
        <CodeWindow
          title="pop.sop"
          code={`door last = x.kasaar()
qor("Removed: " + last)`}
        />

        {/* kudar(teed) (concat) */}
        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>kudar(teed)</code> – Concatenate</h3>
        <CodeWindow
          title="concat.sop"
          code={`teed a = [1, 2]
teed b = [3, 4]
teed c = a.kudar(b)    // [1, 2, 3, 4]`}
        />

        {/* leeyahay (includes) */}
        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>leeyahay(x)</code> – Contains Check</h3>
        <CodeWindow
          title="includes.sop"
          code={`haddii (c.leeyahay(3)) {
    qor("Waa jiraa")
}`}
        />
      </section>

      {/* 🧪 Utility Methods */}
      <section id="utilities" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🧪 Utility Methods</h2>

        {/* nuqul */}
        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>nuqul()</code> – Copy Array</h3>
        <CodeWindow
          title="copy.sop"
          code={`teed asal = [10, 20]
teed copy = asal.nuqul()
qor("Copy: " + copy)`}
        />

        {/* rog */}
        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>rog()</code> – Reverse</h3>
        <CodeWindow
          title="reverse.sop"
          code={`asal.rog()
qor("Reversed: " + asal)`}
        />

        {/* nadiifi */}
        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>nadiifi()</code> – Clear</h3>
        <CodeWindow
          title="clear.sop"
          code={`copy.nadiifi()
qor("Emptied copy: " + copy)`}
        />

        {/* habee */}
        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>habee()</code> – Sort</h3>
        <CodeWindow
          title="sort.sop"
          code={`teed t = [4, 2, 3]
t.habee()
qor("Sorted: " + t)`}
        />
      </section>

      {/* 🔬 Transform and Filter */}
      <section id="transform-filter" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">🔬 Transform and Filter</h2>

        {/* aaddin (map) */}
        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>aaddin(funk)</code> – Map Items</h3>
        <CodeWindow
          title="map.sop"
          code={`hawl laban(x) {
    celi x * 2
}

teed nums = [1, 2, 3]
teed doubled = nums.aaddin("laban")`}
        />

        {/* shaandhee (filter) */}
        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>shaandhee(funk)</code> – Filter Items</h3>
        <CodeWindow
          title="filter.sop"
          code={`hawl is_even(x) {
    celi x % 2 == 0
}

teed filtered = nums.shaandhee("is_even")`}
        />
      </section>

      {/* 📍 Indexing and Slicing */}
      <section id="indexing" className="mt-12">
        <h2 className="text-2xl font-bold mb-4">📍 Indexing and Slicing</h2>

        {/* muuji (indexOf) */}
        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>muuji(x)</code> – Find Index</h3>
        <CodeWindow
          title="index_of.sop"
          code={`abn i = nums.muuji(2)
qor("Index of 2: " + i)`}
        />

        {/* jar (slice) */}
        <h3 className="mt-6 mb-3 text-xl font-semibold"><code>jar(a, b)</code> – Slice Sublist</h3>
        <CodeWindow
          title="slice.sop"
          code={`teed subset = nums.jar(1, 3)
qor("Subset: " + subset)`}
        />
      </section>

      <p className="mt-8">
        <strong>Gunaanad:</strong> <code>teed</code> waa qaab-dhismeed aasaasi ah oo Soo-maali-first
        ah, fududeynaaya maaraynta iyo ku celcelinta liisaska.
      </p>

      <DocNavigation
        className="mt-12"
        prevPage={{
          href: "/docs/functions",
          title: "Functions",
          description: "hawl (qeexid) iyo celi (soo celin)",
        }}
        nextPage={{
          href: "/docs/dictionaries",
          title: "Dictionaries",
          description: "shey/objects: furayaal iyo qiimayaal",
        }}
      />
    </div>
  );
}
