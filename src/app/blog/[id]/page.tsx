import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// This would typically come from a database or API
const blogPosts = [
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
    readTime: "7 min read",
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
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { id: string } }) {
  const blogPost = blogPosts.find((post) => post.id === params.id);

  if (!blogPost) {
    return {
      title: "Blog Post Not Found - Soplang",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: `${blogPost.title} - Soplang Blog`,
    description: blogPost.excerpt,
  };
}

export default function BlogPostDetail({ params }: { params: { id: string } }) {
  const blogPost = blogPosts.find((post) => post.id === params.id);

  // If the blog post doesn't exist, show a 404 page
  if (!blogPost) {
    notFound();
  }

  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span>›</span>
            <Link href="/blog" className="hover:text-primary">
              Blog
            </Link>
            <span>›</span>
            <span>{blogPost.category}</span>
          </div>
        </div>

        {/* Article */}
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
          {/* Featured Image */}
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src={blogPost.image}
              alt={blogPost.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>

          {/* Article Header */}
          <div className="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2 mb-4">
              <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                {blogPost.category}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {blogPost.date}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {blogPost.readTime}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {blogPost.title}
            </h1>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                {blogPost.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-gray-900 dark:text-white">
                  {blogPost.author}
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  {blogPost.authorRole}
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-8">
            <div
              className="prose prose-lg max-w-none dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
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
                  Programming Languages
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
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
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
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
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
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <div className="mt-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Check out our other content
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Stay up-to-date with the latest Soplang developments
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href="/docs"
              className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark mx-2"
            >
              Soplang Documentation
            </Link>
            <Link
              href="/downloads"
              className="px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 mx-2"
            >
              Download Soplang
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
