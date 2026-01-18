import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";

export const metadata = {
  title: "Security Policy - Soplang",
  description:
    "Learn about the security practices and vulnerability reporting processes for the Soplang programming language.",
  keywords: "Soplang, security, vulnerability, disclosure, reporting",
};

export default function SecurityPolicyPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="container-custom py-16 md:py-24">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-700 dark:text-red-400 text-sm font-medium mb-6 animate-fade-in-up">
            <Icon icon="lucide:shield-alert" className="w-4 h-4" />
            <span>Security Policy</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up animation-delay-100">
            Committed to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-600">Safety</span>
          </h1>
          <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-200 leading-relaxed">
            We take the security of Soplang seriously. This policy outlines how to report vulnerabilities and our commitment to addressing security issues.
          </p>
        </div>

        {/* Reporting Section (Hero Card) */}
        <div className="relative mb-16 animate-fade-in-up animation-delay-300">
          <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10 blur-2xl transform scale-y-90 -z-10" />
          <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-12 shadow-xl overflow-hidden relative">
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="flex-1">
                <div className="inline-block p-3 rounded-2xl bg-red-500/10 text-red-500 mb-6">
                  <Icon icon="lucide:siren" className="w-8 h-8" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Reporting a Vulnerability</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  <strong>Do not report security vulnerabilities through public GitHub issues or community forums.</strong>
                </p>
                <p className="text-muted-foreground mb-8">
                  Please report security vulnerabilities by emailing our security team directly. We will acknowledge your email within 48 hours.
                </p>
                <a
                  href="mailto:security@soplang.org"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                >
                  <Icon icon="lucide:mail" className="w-5 h-5" />
                  security@soplang.org
                </a>
              </div>

              <div className="w-full md:w-1/2 bg-muted/30 rounded-2xl p-6 border border-border/50">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Icon icon="lucide:file-text" className="w-4 h-4 text-muted-foreground" />
                  What to include
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Type of vulnerability",
                    "Path or location of the vulnerable code",
                    "Step-by-step instructions to reproduce",
                    "Explanation of potential impacts",
                    "Suggested fix (if available)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Icon icon="lucide:check-circle-2" className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16 animate-fade-in-up animation-delay-400">
          {/* Disclosure Policy */}
          <div className="bg-card hover:bg-card/80 border border-border hover:border-primary/30 p-8 rounded-3xl transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-6">
              <Icon icon="lucide:file-clock" className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold mb-4">Disclosure Policy</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>When we receive a report, we will:</p>
              <ol className="list-decimal list-inside space-y-1 ml-2">
                <li>Confirm scope and vulnerability</li>
                <li>Develop and test a fix</li>
                <li>Release update and credit reporter</li>
              </ol>
              <p className="text-sm border-t border-border pt-4 mt-4">
                We typically address critical issues within <strong className="text-foreground">7-14 days</strong>.
              </p>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-card hover:bg-card/80 border border-border hover:border-primary/30 p-8 rounded-3xl transition-all duration-300 hover:shadow-lg">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-2xl flex items-center justify-center mb-6">
              <Icon icon="lucide:shield-check" className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold mb-4">Security Best Practices</h2>
            <ul className="space-y-3 text-muted-foreground">
              {[
                "Keep Soplang updated to the latest version",
                "Validate all user inputs cautiously",
                "Regularly review your dependencies",
                "Use scanners to identify vulnerabilities"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Icon icon="lucide:check" className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Additional Info & Resources */}
        <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up animation-delay-500">
          <div className="bg-card/50 border border-border p-6 rounded-2xl">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Icon icon="lucide:bug" className="w-4 h-4 text-amber-500" />
              Bug Bounty
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              We don't have a formal program yet, but we credit all reporters in our security releases.
            </p>
          </div>

          <div className="bg-card/50 border border-border p-6 rounded-2xl">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Icon icon="lucide:bell-ring" className="w-4 h-4 text-indigo-500" />
              Security Updates
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Stay informed about the latest security bulletins and patches.
            </p>
            <Link href="/blog?category=security" className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-1">
              View Bulletins <Icon icon="lucide:arrow-right" className="w-3 h-3" />
            </Link>
          </div>

          <div className="bg-card/50 border border-border p-6 rounded-2xl">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <Icon icon="lucide:book-lock" className="w-4 h-4 text-purple-500" />
              Secure Coding
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Learn about secure coding practices specific to Soplang.
            </p>
            <Link href="/docs/security" className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-1">
              Read Guide <Icon icon="lucide:arrow-right" className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* Footer Action */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-500">
          <Link
            href="/contribute"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-full hover:bg-muted"
          >
            <Icon icon="lucide:arrow-left" className="w-4 h-4" />
            Return to Contribute Page
          </Link>
        </div>
      </div>
    </div>
  );
}
