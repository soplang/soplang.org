import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Icon } from "@iconify/react";

export const metadata: Metadata = {
  title: "Community - Soplang",
  description:
    "Join the Soplang community to connect with other developers, find resources, and contribute to the project.",
};

// Community platforms data
const platforms = [
  {
    name: "GitHub",
    description:
      "Contribute to Soplang's development, report issues, and explore the source code.",
    icon: "lucide:github",
    url: "https://github.com/soplang/soplang",
    buttonText: "Join on GitHub",
    gradient: "from-gray-800 to-black",
    textClass: "text-white",
  },
  {
    name: "Discord",
    description:
      "Chat with other Soplang users and developers, get help, and share your work.",
    icon: "simple-icons:discord",
    url: "https://discord.gg/soplang",
    buttonText: "Join Discord",
    gradient: "from-indigo-600 to-blue-600",
    textClass: "text-white",
  },
  {
    name: "X (Formerly Twitter)",
    description:
      "Follow Soplang for the latest news, updates, and announcements.",
    icon: "simple-icons:x",
    url: "https://x.com/SoplangOrg",
    buttonText: "Follow Us",
    gradient: "from-gray-900 to-black",
    textClass: "text-white",
  },
];



export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-20 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6 animate-fade-in-up">
            <Icon icon="lucide:users" className="w-4 h-4 text-indigo-500" />
            <span>Built for the Community</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 tracking-tight animate-fade-in-up animation-delay-100">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Soplang Community</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
            Connect with other developers, contribute to the open-source ecosystem,
            and help shape the future of Somali programming.
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Link
              href="https://discord.gg/soplang"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <Icon icon="simple-icons:discord" className="w-5 h-5" />
              Join Discord
            </Link>
            <Link
              href="https://github.com/soplang/soplang"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-card border border-border hover:border-primary/50 text-foreground font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              <Icon icon="lucide:github" className="w-5 h-5" />
              View on GitHub
            </Link>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {[
            { label: "GitHub Stars", value: "1.2k", icon: "lucide:star" },
            { label: "Contributors", value: "45+", icon: "lucide:git-pull-request" },
          ].map((stat, i) => (
            <div key={i} className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border text-center hover:border-primary/20 transition-colors w-full md:w-64">
              <Icon icon={stat.icon} className="w-6 h-6 mx-auto mb-3 text-primary/60" />
              <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Community Platforms */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
            Connect with Us
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-transparent transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full w-full md:w-[350px]"
              >
                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-gradient-to-br ${platform.gradient}`} />

                <div className="p-6 flex flex-col h-full relative z-10">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-gradient-to-br ${platform.gradient} text-white shadow-lg`}>
                    <Icon icon={platform.icon} className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {platform.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow text-sm leading-relaxed">
                    {platform.description}
                  </p>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center font-semibold text-primary group-hover:underline"
                  >
                    {platform.buttonText}
                    <Icon icon="lucide:arrow-right" className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contribute Section */}
        <section className="mb-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-8 md:p-16 text-center">
            {/* Decorative circles */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Contribute to Soplang</h2>
              <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed">
                Soplang is an open-source project that thrives on community
                contributions. Whether you're fixing bugs, improving docs, or helping others, every contribution matters.
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                <Link
                  href="/contribute"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left transition-all hover:-translate-y-1 group"
                >
                  <Icon icon="lucide:git-pull-request" className="w-8 h-8 mb-4 text-blue-300" />
                  <h3 className="font-bold text-lg mb-1">Code</h3>
                  <p className="text-sm text-blue-100 group-hover:text-white transition-colors">Submit PRs and fix bugs</p>
                </Link>

                <Link
                  href="https://github.com/soplang/docs"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left transition-all hover:-translate-y-1 group"
                >
                  <Icon icon="lucide:file-text" className="w-8 h-8 mb-4 text-purple-300" />
                  <h3 className="font-bold text-lg mb-1">Docs</h3>
                  <p className="text-sm text-blue-100 group-hover:text-white transition-colors">Improve tutorials & guides</p>
                </Link>

                <Link
                  href="https://github.com/soplang/soplang/issues"
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-left transition-all hover:-translate-y-1 group"
                >
                  <Icon icon="lucide:bug" className="w-8 h-8 mb-4 text-red-300" />
                  <h3 className="font-bold text-lg mb-1">Issues</h3>
                  <p className="text-sm text-blue-100 group-hover:text-white transition-colors">Report bugs & ideas</p>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-10 text-center">
            Frequently Asked Questions
          </h2>

          <div className="grid gap-6">
            <div className="p-6 bg-card rounded-2xl border border-border hover:border-primary/20 transition-all">
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                <Icon icon="lucide:rocket" className="w-5 h-5 text-primary" />
                How can I get started with Soplang?
              </h3>
              <p className="text-muted-foreground ml-7">
                You can get started by{" "}
                <Link
                  href="/downloads"
                  className="text-primary hover:underline"
                >
                  downloading Soplang
                </Link>{" "}
                and following our{" "}
                <Link
                  href="/docs/beginners-guide"
                  className="text-primary hover:underline"
                >
                  beginner&apos;s guide
                </Link>
                . We recommend starting with simple programs to get familiar
                with the language.
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border hover:border-primary/20 transition-all">
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                <Icon icon="lucide:book-open" className="w-5 h-5 text-primary" />
                Where can I find documentation?
              </h3>
              <p className="text-muted-foreground ml-7">
                Comprehensive documentation is available in our{" "}
                <Link href="/docs" className="text-primary hover:underline" >
                  documentation section
                </Link>
                , including tutorials, examples, and API references.
              </p>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-border hover:border-primary/20 transition-all">
              <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                <Icon icon="lucide:help-circle" className="w-5 h-5 text-primary" />
                How do I report a bug or request a feature?
              </h3>
              <p className="text-muted-foreground ml-7">
                You can report bugs or request features on our{" "}
                <a
                  href="https://github.com/soplang/soplang/issues"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub issues page
                </a>
                . Please check if the issue has already been reported before
                creating a new one.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
