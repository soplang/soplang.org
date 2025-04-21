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

export default function NewsDetail({ params }: { params: { id: string } }) {
  const newsItem = newsItems.find((item) => item.id === params.id);

  // If the news item doesn't exist, show a 404 page
  if (!newsItem) {
    notFound();
  }

  return (
    <div className="bg-[var(--background-color)] min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="mb-2 flex items-center space-x-2">
              <Link
                href="/news"
                className="text-white/80 hover:text-white transition-colors"
              >
                News
              </Link>
              <span className="text-white/60">›</span>
              <span className="text-white/80">{newsItem.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {newsItem.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm">
              <span>{newsItem.date}</span>
              <span className="bg-white/20 px-2 py-1 rounded-full">
                {newsItem.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article Content */}
          <div className="lg:w-3/4">
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              {/* Featured Image */}
              <div className="relative h-80 w-full">
                <Image
                  src={newsItem.image}
                  alt={newsItem.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
              </div>

              {/* Article Body */}
              <div className="p-8">
                {/* Author Info */}
                {newsItem.author && (
                  <div className="flex items-center mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {newsItem.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold">{newsItem.author}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {newsItem.authorRole}
                      </div>
                    </div>
                  </div>
                )}

                {/* Article Content */}
                <div
                  className="prose prose-lg max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: newsItem.content }}
                />

                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Tags:
                    </span>
                    <a
                      href="#"
                      className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      Soplang 2.0
                    </a>
                    <a
                      href="#"
                      className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      Announcement
                    </a>
                    <a
                      href="#"
                      className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      Future
                    </a>
                  </div>
                </div>

                {/* Share */}
                <div className="mt-6">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Share this article:
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Navigation */}
            <div className="mt-8 flex justify-between">
              <Link
                href="/news"
                className="flex items-center text-primary hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Back to News
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            {/* Related Articles */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold mb-4 text-primary">
                Related News
              </h3>
              <div className="space-y-4">
                <div className="text-center p-4">
                  <p className="text-gray-500 dark:text-gray-400">
                    No related articles yet
                  </p>
                </div>
              </div>
            </div>

            {/* Stay Updated */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4 text-primary">
                Stay Updated
              </h3>
              <p className="mb-4 text-sm">
                Follow us on X (Twitter) to receive the latest news and updates
                about Soplang.
              </p>
              <a
                href="https://x.com/soplangorg"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2 w-full justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span>Follow @soplangorg</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
