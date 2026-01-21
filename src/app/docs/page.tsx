import Link from "next/link";
import CodeWindow from "@/components/CodeWindow";
import DocNavigation from "@/components/DocNavigation";
import { Icon } from "@/components/ui/icon";
import { siteStructure } from "@/constants/sitemap";

const findSitemapLink = (sectionTitle: string, linkName: string) => {
  const section = siteStructure.find((s) => s.title === sectionTitle);
  return section?.links.find((l) => l.name === linkName);
};

const getSectionHome = (sectionTitle: string) => {
  const section = siteStructure.find((s) => s.title === sectionTitle);
  return section?.links.find((l) => l.name.endsWith("Home") || l.name === sectionTitle);
};

export const metadata = {
  title: "Soplang Documentation - Introduction",
  description:
    "Introduction to Soplang, a Somali-first programming language that makes coding intuitive, inclusive, and accessible for Somali speakers.",
};

export default function DocsPage() {
  return (
    <div className="w-full px-4 py-8 prose prose-lg lg:py-4 dark:prose-invert sm:px-6 lg:px-8 sm:py-12">
      <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl text-primary">
        Introduction to Soplang
      </h1>

      <p className="text-lg text-muted-foreground sm:text-xl leading-relaxed">
        Welcome to the official documentation for <strong>Soplang</strong>, a Somali-first
        programming language that makes coding <em>intuitive</em>, <em>inclusive</em>, and{" "}
        <em>accessible</em>.
      </p>

      <div className="p-6 my-8 rounded-xl border border-blue-100 bg-blue-50/50 dark:bg-blue-900/10 dark:border-blue-800/50">
        <h3 className="mt-0 mb-3 text-xl sm:text-2xl font-semibold text-primary">
          What is Soplang?
        </h3>
        <p className="mb-0 text-base text-muted-foreground sm:text-lg">
          <strong>Soplang</strong> (short for <em>Somali Programming Language</em>) is a
          culturally-rooted programming language designed and developed by{" "}
          <strong>Mr Sharafdin</strong> (Sharafdin Yusuf Sharafdin). It allows developers to
          write code in <strong>native Somali syntax</strong> using familiar keywords,
          expressions, and structures — making programming feel natural and accessible.
        </p>
      </div>

      <h2 className="mt-12 mb-6 text-2xl font-bold sm:text-3xl text-primary">Language Goals</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
        {[
          { title: 'Simplicity', desc: 'Clean, easy-to-read syntax that makes programming concepts clear and approachable.' },
          { title: 'Education', desc: 'Built with learners in mind, making programming accessible to students and beginners.' },
          { title: 'Localization', desc: 'Fully Somali-first keywords and structures, embracing Somali language and culture.' },
          { title: 'Accessibility', desc: 'Removes English-language barriers, opening programming to a wider Somali-speaking audience.' }
        ].map((goal) => (
          <div key={goal.title} className="p-6 rounded-xl border border-border bg-card shadow-sm hover:shadow-md transition-all duration-200 hover:border-primary/50">
            <h3 className="text-lg font-bold text-foreground mb-2">{goal.title}</h3>
            <p className="text-muted-foreground">{goal.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 mb-6 text-2xl font-bold sm:text-3xl text-primary">Key Features</h2>
      <ul className="space-y-3 text-base text-muted-foreground sm:text-lg list-marker-primary">
        <li>
          <strong className="text-foreground">Dual Typing</strong>: <code>door</code> for dynamic, and{" "}
          <code>abn</code>, <code>jajab</code>, <code>qoraal</code> etc. for static typing flexibility.
        </li>
        <li>
          <strong className="text-foreground">Object-Oriented</strong>: Support for{" "}
          <code>fasalka</code>, <code>ka_dhaxal</code>, <code>cusub</code>, and{" "}
          <code>nafta</code>.
        </li>
        <li>
          <strong className="text-foreground">Control Flow</strong>: Clean syntax for conditionals (<code>haddii</code>,{" "}
          <code>haddii_kale</code>, <code>ugudambeyn</code>) and loops (<code>kuceli</code>,{" "}
          <code>intay</code>).
        </li>
        <li>
          <strong className="text-foreground">Error Handling</strong>: With <code>isku_day</code> and <code>qabo</code> for
          robust error management.
        </li>
        <li>
          <strong className="text-foreground">Native Tooling</strong>: Includes CLI, Standard Library, and REPL.
        </li>
      </ul>

      <h2 className="mt-16 mb-6 text-2xl font-bold sm:text-3xl text-primary">Example Code</h2>

      <CodeWindow
        code={`// Hello World
qor("Hello, World!")

// Variables
door name = "Faarax"
qoraal title = "Soplang Developer"
abn age = 10

qor("Name: " + name)
qor("Title: " + title)
qor("Age: " + qoraal(age))

// Function
hawl greet(person) {
    celi "Hello, " + person + "!"
}
qor(greet(name))

// If/Else
haddii (age > 18) {
    qor("You are an adult")
} ugudambeyn {
    qor("You are underage")
}

// For Loop
kuceli (i 1 ilaa 5) {
    qor(i)
}

// While Loop
abn counter = 5
intay (counter > 0) {
    qor(counter)
    counter = counter - 1
}

qor("Done!")`}
        title="example.sop"
      />

      <h2 className="mt-16 mb-6 text-2xl font-bold sm:text-3xl text-primary">Tooling Ecosystem</h2>

      <div className="grid grid-cols-1 gap-6 my-8 sm:grid-cols-2 not-prose">
        {[
          { title: 'CLI Tool (sop)', desc: 'Run code, manage projects, and handle packages.' },
          { title: 'VS Code Extension', desc: 'Syntax highlighting, inline docs, and code execution.' },
          { title: 'REPL Environment', desc: 'Interactive terminal environment with history and syntax highlighting.' },
          { title: 'sopScript Runtime', desc: 'Run Soplang directly in the browser for demos and learning.' }
        ].map((tool) => (
          <div key={tool.title} className="p-6 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-200 hover:border-primary/50 group">
            <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
              {tool.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {tool.desc}
            </p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 mb-6 text-2xl font-bold sm:text-3xl text-primary">Get Started Today</h2>

      <div className="grid grid-cols-1 gap-6 my-8 sm:grid-cols-2 not-prose">
        <Link
          href={findSitemapLink("Docs", "Installing Soplang")?.href || "/docs/installation"}
          className="group block p-6 transition-all duration-200 bg-card border border-border rounded-xl shadow-sm hover:shadow-md hover:border-primary/50"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Installation</h3>
            <Icon icon="lucide:arrow-right" className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
          </div>
          <p className="text-muted-foreground">
            Learn how to install Soplang on your system.
          </p>
        </Link>

        {/* Future use for video tutorials */}
        {/* <Link
          href="https://www.youtube.com/@soplang"
          target="_blank"
          className="group block p-6 transition-all duration-200 bg-card border border-border rounded-xl shadow-sm hover:shadow-md hover:border-primary/50"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">Visual Tutorials</h3>
            <Icon icon="lucide:external-link" className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-transform group-hover:translate-x-1" />
          </div>
          <p className="text-muted-foreground">
            Watch step-by-step tutorials to build real applications.
          </p>
        </Link> */}
      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <h2 className="mb-4 text-2xl font-bold text-primary">Community & Contribution</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Soplang is <strong>open-source</strong> under the <strong>MIT License</strong>. Everyone
          is welcome to contribute to its development.
        </p>

        <div className="flex flex-wrap gap-4 not-prose">
          <Link
            href="/contribute"
            className="px-6 py-2.5 font-medium text-white rounded-lg bg-primary hover:bg-primary/90 transition-colors shadow-sm hover:shadow inline-flex items-center gap-2"
          >
            <Icon icon="lucide:heart" className="w-4 h-4" />
            Contribute
          </Link>
          <Link
            href="https://github.com/soplang/soplang"
            target="_blank"
            className="px-6 py-2.5 font-medium text-foreground rounded-lg bg-muted hover:bg-muted/80 transition-colors inline-flex items-center gap-2"
          >
            <Icon icon="lucide:github" className="w-4 h-4" />
            GitHub Repository
          </Link>
        </div>
      </div>

      <DocNavigation
        prevPage={{
          href: getSectionHome("Docs")?.href || "/docs",
          hidden: true,
        }}
        nextPage={{
          href: findSitemapLink("Docs", "Installing Soplang")?.href || "/docs/installation",
          title: "Installation",
          description: "Get Soplang installed on your machine",
        }}
      />
    </div>
  );
}
