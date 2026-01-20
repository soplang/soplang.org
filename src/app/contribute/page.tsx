import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import { contributors } from "@/constants/contributorsData";
import CodeWindow from "@/components/CodeWindow";

export const metadata = {
  title: "Contribute to Soplang - Join the Community",
  description:
    "Learn how to contribute to Soplang, an open-source Somali programming language. Find guidelines, development setup instructions, and join our community of contributors.",
  keywords:
    "Soplang, contribute, open-source, Somali programming language, coding, development, community",
};

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom py-8 md:py-16">

        {/* Hero Section */}
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 animate-fade-in-up">
            <Icon icon="lucide:heart" className="w-4 h-4 text-indigo-500" />
            <span>Open Source & Community Driven</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight animate-fade-in-up animation-delay-100">
            Contribute to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Soplang</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Soplang is built by people like you. Whether you write code, improve documentation,
            or help others, every contribution makes a difference.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-300">
            <a
              href="https://github.com/soplang/soplang/blob/main/docs/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg font-medium shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
            >
              <Icon icon="lucide:book-open" className="w-5 h-5" />
              Read Guidelines
            </a>
            <a
              href="https://github.com/soplang/soplang"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 text-foreground font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              <Icon icon="lucide:github" className="w-5 h-5" />
              Visit Repository
            </a>
          </div>
        </div>

        {/* Ways to Contribute */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Ways to Contribute</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Code",
                desc: "Fix bugs, optimize performance, or build new features for the compiler and interpreter.",
                icon: "lucide:code-2",
                color: "text-blue-500",
                bg: "bg-blue-500/10",
                link: "https://github.com/soplang/soplang/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"
              },
              {
                title: "Documentation",
                desc: "Improve guides, fix typos, and write tutorials to help new users learn Soplang.",
                icon: "lucide:file-text",
                color: "text-green-500",
                bg: "bg-green-500/10",
                link: "https://github.com/soplang/soplang/tree/main/docs"
              },
              {
                title: "Community",
                desc: "Answer questions, help beginners, and share your Soplang projects with the world.",
                icon: "lucide:users",
                color: "text-purple-500",
                bg: "bg-purple-500/10",
                link: "/community"
              }
            ].map((way, i) => (
              <a
                key={i}
                href={way.link}
                className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${way.bg} ${way.color}`}>
                  <Icon icon={way.icon} className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{way.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {way.desc}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Hall of Fame - Contributors Grid */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Hall of Fame</h2>
            <p className="text-muted-foreground text-lg">
              A huge thanks to our amazing contributors who make Soplang possible.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {contributors.map((contributor) => (
              <a
                key={contributor.login}
                href={contributor.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all hover:-translate-y-1"
              >
                <div className="relative mb-3">
                  <img
                    src={contributor.avatar_url}
                    alt={contributor.login}
                    className="w-20 h-20 rounded-full border-4 border-background group-hover:border-primary/20 transition-colors"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full shadow-sm">
                    {contributor.contributions}
                  </div>
                </div>
                <span className="font-semibold text-sm truncate w-full text-center group-hover:text-primary transition-colors">
                  {contributor.login}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Want to see your face here? <a href="https://github.com/soplang/soplang" className="text-primary hover:underline font-medium">Start contributing!</a>
            </p>
          </div>
        </section>

        {/* Getting Started Steps */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="bg-gradient-to-br from-card to-background rounded-3xl border border-border p-8 md:p-12 shadow-sm">
            <h2 className="text-3xl font-bold mb-8 text-center">Development Setup</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              There are two recommended ways to set up your development environment.
              We recommend using Docker to eliminate "works on my machine" issues.
            </p>

            {/* Option 1: Docker */}
            <div className="mb-16">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wide">
                  Option 1 (Recommended)
                </div>
                <h3 className="text-2xl font-bold">Docker Setup</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground mb-3 font-medium">1. Clone the repository:</p>
                  <CodeWindow
                    code={`git clone https://github.com/soplang/soplang.git\ncd soplang\ndocker-compose build\ndocker-compose up -d`}
                    title="Terminal"
                    language="shell"
                    showLineNumbers={false}
                  />
                </div>
                <div>
                  <p className="text-muted-foreground mb-3 font-medium">2. Run commands inside the container:</p>
                  <CodeWindow
                    code={`# Run the shell\ndocker-compose exec soplang python main.py\n\n# Run tests\ndocker-compose exec soplang python -m unittest discover tests`}
                    title="Terminal"
                    language="shell"
                    showLineNumbers={false}
                  />
                </div>
              </div>
            </div>

            {/* Option 2: Local */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 font-bold px-4 py-1.5 rounded-full text-sm uppercase tracking-wide">
                  Option 2
                </div>
                <h3 className="text-2xl font-bold">Local Setup</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground mb-3 font-medium">Prerequisites: Python 3.6+, Git</p>
                  <CodeWindow
                    code={`git clone https://github.com/soplang/soplang.git\ncd soplang\n\n# Create virtual env (Recommended)\npython -m venv env\nsource env/bin/activate  # On Windows: env\\Scripts\\activate\n\n# Install dependencies\npip install -r requirements-dev.txt`}
                    title="Terminal"
                    language="shell"
                    showLineNumbers={false}
                  />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Security Alert */}
        <section className="max-w-3xl mx-auto text-center p-8 rounded-2xl bg-red-500/5 border border-red-500/20">
          <h3 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2 flex items-center justify-center gap-2">
            <Icon icon="lucide:shield-alert" className="w-5 h-5" />
            Security Policy
          </h3>
          <p className="text-muted-foreground mb-4">
            Found a vulnerability? Please do NOT open a GitHub issue.
          </p>
          <a href="mailto:security@soplang.org" className="text-primary font-medium hover:underline">
            Report to security@soplang.org
          </a>
        </section>

      </div>
    </div>
  );
}
