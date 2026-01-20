import { Metadata } from 'next';
import { Icon } from '@/components/ui/icon';

export const metadata: Metadata = {
  title: 'Terms of Use - Soplang',
  description: 'Terms of Use for Soplang programming language.',
};

export default function TermsPage() {
  return (
    <div className="container-custom py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-6">
            Terms of Use
          </h1>
          <div className="flex items-center justify-center gap-2 text-muted-foreground bg-secondary/50 py-1.5 px-4 rounded-full w-fit mx-auto border border-border/50">
            <Icon icon="lucide:calendar" className="w-4 h-4" />
            <span className="text-sm font-medium">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>

        <div className="bg-card border border-border rounded-2xl shadow-sm p-6 md:p-10">
          <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-10 not-prose">
              <div className="flex gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg h-fit">
                  <Icon icon="lucide:file-text" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Acceptance of Terms</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    By accessing and using Soplang, you accept and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, you must not use our services.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-12">

              <section>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-base border border-border">1</span>
                  License and Usage
                </h2>
                <p>
                  Soplang is open-source software released under the MIT License. You are free to:
                </p>
                <ul className="not-prose grid gap-2 mt-4">
                  {[
                    'Use Soplang for personal and commercial purposes',
                    'Modify and distribute the software',
                    'Include Soplang in your own projects'
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-base border border-border">2</span>
                  User Responsibilities
                </h2>
                <p>You agree to:</p>
                <ul className="not-prose grid gap-2 mt-4">
                  {[
                    'Use the software responsibly and legally',
                    'Not attempt to disrupt or compromise our services',
                    'Maintain the security of your account and credentials',
                    'Report any security vulnerabilities you discover'
                  ].map(item => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <Icon icon="lucide:check" className="w-4 h-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-base border border-border">3</span>
                  Intellectual Property
                </h2>
                <p>
                  The Soplang name, logo, and branding are trademarks of the Soplang Software Foundation. While the software is open-source, these trademarks may not be used without permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary text-base border border-border">4</span>
                  Disclaimer & Limitation
                </h2>
                <div className="bg-secondary/30 p-4 rounded-lg border border-border/50 text-sm mt-4">
                  <p className="font-semibold mb-2">Disclaimer of Warranties</p>
                  <p className="text-muted-foreground mb-4">Soplang is provided "as is" without warranty of any kind.</p>

                  <p className="font-semibold mb-2">Limitation of Liability</p>
                  <p className="text-muted-foreground mb-0">In no event shall Soplang Software Foundation be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
                </div>
              </section>

            </div>

            <div className="w-full h-px bg-border/50 my-10" />

            <section>
              <h2 className="text-2xl font-bold m-0 text-foreground mb-6">Contact Information</h2>
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/10 not-prose">
                <p className="text-muted-foreground mb-4">For questions about these Terms of Use, please contact us:</p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <Icon icon="lucide:at-sign" className="w-4 h-4 text-primary" />
                    legal@soplang.org
                  </div>
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <Icon icon="lucide:map-pin" className="w-4 h-4 text-primary" />
                    Soplang Software Foundation
                  </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
} 