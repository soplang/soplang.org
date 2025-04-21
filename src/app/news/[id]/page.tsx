import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// This would typically come from a database or API
const newsItems = [
  {
    id: "Soplang-2.0-Is-Almost-Here-A-Somali-first-Programming-Language-Nears-Major-Release",
    title:
      "Soplang 2.0 Is Almost Here — A Somali-first Programming Language Nears Major Release",
    excerpt:
      "Soplang 2.0 brings a native Somali programming language into the modern era, with powerful tooling, expanded libraries, and a growing ecosystem.",
    date: "May 15, 2024",
    category: "Announcement",
    image: "/images/blog/soplang-2.0.svg",
    imageAlt: "Soplang 2.0 Announcement",
    author: "Mr Sharafdin",
    authorRole: "Soplang Creator",
    content: `
      <p class="mb-4">The programming language landscape is about to welcome a fresh and culturally grounded addition: <strong>Soplang</strong>, a Somali-first programming language, is preparing to launch its long-awaited 2.0 release. Designed with native Somali syntax, dual typing, and full developer tooling, Soplang 2.0 is shaping up to be more than just a language — it's an ecosystem.</p>
      
      <p class="mb-4">Initially released as a minimalist interpreted language, Soplang has evolved into a feature-rich environment intended to make software development more accessible to Somali-speaking developers.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3 text-primary">What's Soplang?</h3>
      
      <p class="mb-4">Soplang is a general-purpose programming language built around Somali linguistic conventions. Its core syntax reflects Somali words — like <code>door</code> for variable declarations, <code>haddii</code> for conditionals, and <code>howl</code> for functions — making it more intuitive for native speakers.</p>
      
      <p class="mb-4">Beyond the syntax, Soplang includes many of the features developers expect from a modern language: object-oriented programming, static typing, module support, and error handling.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3 text-primary">Soplang 2.0: What's New?</h3>
      
      <p class="mb-4">The upcoming 2.0 release is a full revamp that significantly expands language capabilities and introduces powerful development tools.</p>
      
      <h4 class="text-lg font-bold mt-4 mb-2 text-primary">Language Improvements</h4>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Dual Typing System:</strong> Support for both static and dynamic typing</li>
        <li><strong>Class System:</strong> OOP via <code>fasalka</code>, inheritance with <code>ka_dhaxal</code></li>
        <li><strong>Structured Control Flow:</strong> Including <code>haddii</code>, <code>celi</code>, <code>iska_joog</code>, and loop constructs</li>
        <li><strong>Error Handling:</strong> With <code>isku_day</code>/<code>qabo</code> (try/catch) semantics</li>
      </ul>
      
      <p class="mb-4">Soplang's syntax is backed by a formal EBNF grammar, implemented fully in the interpreter.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3 text-primary">Expanded Standard Library</h3>
      
      <p class="mb-4">Soplang 2.0 ships with a more complete standard library:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Math Module:</strong> Functions for matrix operations, vectors, and basic statistics</li>
        <li><strong>File I/O:</strong> Somali-named file handlers like <code>faylka_fur</code>, <code>faylka_qor</code>, and <code>faylka_xir</code></li>
        <li><strong>Networking:</strong> Basic HTTP functionality using <code>shabakad_codso</code> and <code>shabakad_jawaab</code></li>
        <li><strong>Date/Time:</strong> Native date manipulation in Somali syntax</li>
      </ul>
      
      <p class="mb-4">The goal is to keep everything practical while preserving linguistic clarity and accessibility.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3 text-primary">Tooling & Developer Experience</h3>
      
      <p class="mb-4">Tooling has been a major focus for Soplang 2.0, and it shows:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>VS Code Extension:</strong> Includes syntax highlighting, inline docs, and code suggestions</li>
        <li><strong>REPL:</strong> Command-line interface with history and syntax coloring</li>
        <li><strong>Browser Runtime (<code>sopScript</code>):</strong> For embedding Soplang in web applications and learning platforms</li>
        <li><strong>CLI Tool (<code>sop</code>):</strong> Manage packages, run programs, and handle project scaffolding</li>
      </ul>
      
      <p class="mb-4">This is a level of polish rarely seen in small-language ecosystems — a promising sign of future growth.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3 text-primary">Website & Docs</h3>
      
      <p class="mb-4">The official website is now live at <a href="https://soplang.org" class="text-primary hover:underline">soplang.org</a>. You'll find full documentation, language reference, community links, and project updates — all aligned with the language's mission to be educational, accessible, and community-driven.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3 text-primary">What's Next?</h3>
      
      <p class="mb-4">The current focus is on finalizing the Python-based interpreter and testing the tooling across platforms. A Rust-based compiler is on the roadmap for future versions, bringing faster performance and system-level capabilities.</p>
      
      <p class="mb-4">According to the team, the 2.0 beta release is expected within the next 4–6 weeks.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3 text-primary">Why It Matters</h3>
      
      <p class="mb-4">Soplang is part of a growing trend toward culturally contextual programming languages. For Somali-speaking learners and developers, this offers an easier entry point into coding — no translation required. For educators, it's a new tool to make computer science more accessible.</p>
      
      <p class="mb-4">And for the wider tech community, it's a reminder: programming doesn't need to be English-only.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3 text-primary">Learn More</h3>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>GitHub: <a href="https://github.com/soplang/soplang" class="text-primary hover:underline">github.com/soplang/soplang</a></li>
        <li>Website: <a href="https://soplang.org" class="text-primary hover:underline">soplang.org</a></li>
      </ul>
      
      <p class="mb-4">Have thoughts on culturally localized programming? Seen similar efforts in your own region? Drop a comment below and let's talk.</p>
    `,
  },
  // Other news items would be defined here
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { id: string } }) {
  const newsItem = newsItems.find((item) => item.id === params.id);

  if (!newsItem) {
    return {
      title: "News Article Not Found - Soplang",
      description: "The requested news article could not be found.",
    };
  }

  return {
    title: `${newsItem.title} - Soplang News`,
    description: newsItem.excerpt,
  };
}

export default function NewsDetailPage() {
  // This entire section is no longer accessible
  notFound();
}
