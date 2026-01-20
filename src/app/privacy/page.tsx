import { Metadata } from 'next';
import { Icon } from '@/components/ui/icon';

export const metadata: Metadata = {
  title: 'Privacy Policy - Soplang',
  description: 'Privacy Policy for Soplang programming language.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container-custom py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-6">
            Privacy Policy
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground bg-secondary/50 py-1.5 px-4 rounded-full w-fit mx-auto border border-border/50">
            <Icon icon="lucide:calendar" className="w-4 h-4" />
            <span className="text-sm font-medium">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl shadow-sm p-6 md:p-10">
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
            <section className="mb-10 last:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Icon icon="lucide:info" className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold m-0 text-foreground">
                  Introduction
                </h2>
              </div>
              <p>
                At Soplang, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our programming language, website, and related services.
              </p>
            </section>

            <div className="w-full h-px bg-border/50 my-10" />

            <section className="mb-10 last:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Icon icon="lucide:database" className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold m-0 text-foreground">
                  Information We Collect
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6 not-prose">
                <div className="p-5 rounded-xl bg-secondary/30 border border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon icon="lucide:user" className="w-4 h-4 text-primary" />
                    Personal Information
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                      Name and email address
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                      GitHub username
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                      Usage preferences
                    </li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-secondary/30 border border-border/50">
                  <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Icon icon="lucide:monitor" className="w-4 h-4 text-primary" />
                    Technical Data
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                      IP address and browser info
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                      Device information
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
                      Cookies & tracking info
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="w-full h-px bg-border/50 my-10" />

            <section className="mb-10 last:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Icon icon="lucide:check-circle-2" className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold m-0 text-foreground">
                  How We Use Your Information
                </h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4 not-prose pl-0 mt-6">
                {[
                  'To provide and maintain services',
                  'To improve user experience',
                  'To communicate updates',
                  'To prevent security incidents',
                  'To analyze usage patterns'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground bg-background/50 p-3 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                    <Icon icon="lucide:check" className="w-4 h-4 text-green-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <div className="w-full h-px bg-border/50 my-10" />

            <section className="mb-10 last:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Icon icon="lucide:shield" className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold m-0 text-foreground">
                  Data Security & Rights
                </h2>
              </div>
              <p>
                We implement appropriate security measures to protect your information. You have the right to access, correct, delete, or object to the processing of your personal data.
              </p>
            </section>

            <section className="mt-12 bg-primary/5 rounded-xl p-6 border border-primary/10">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2 mt-0">
                <Icon icon="lucide:mail" className="w-5 h-5" />
                Contact Us
              </h2>
              <p className="mb-2 text-sm">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 not-prose">
                <div className="flex items-center gap-2 text-foreground font-medium">
                  <Icon icon="lucide:at-sign" className="w-4 h-4 text-primary" />
                  privacy@soplang.org
                </div>
                <div className="flex items-center gap-2 text-foreground font-medium">
                  <Icon icon="lucide:map-pin" className="w-4 h-4 text-primary" />
                  Soplang Software Foundation
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 