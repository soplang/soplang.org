import { Metadata } from 'next';
import { Icon } from '@/components/ui/icon';

export const metadata: Metadata = {
  title: 'Trademarks - Soplang',
  description: 'Trademark guidelines and policies for Soplang programming language.',
};

export default function TrademarksPage() {
  return (
    <div className="container-custom py-12 md:py-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-6">
            Trademark Policy
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
                  <Icon icon="lucide:award" className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold m-0 text-foreground">
                  Our Trademarks
                </h2>
              </div>
              <p>
                The Soplang name and logo are trademarks of the Soplang Software Foundation. These marks help users identify our official software, documentation, and related services.
              </p>
            </section>

            <div className="w-full h-px bg-border/50 my-10" />

            <section className="mb-10 last:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Icon icon="lucide:check-square" className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold m-0 text-foreground">
                  Proper Usage
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-6 not-prose">
                <div className="p-5 rounded-xl bg-green-500/10 border border-green-500/20">
                  <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-3 flex items-center gap-2">
                    <Icon icon="lucide:check" className="w-4 h-4" />
                    Correct Uses
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    {[
                      'Using "Soplang" to refer to the language',
                      'Describing software as "built with Soplang"',
                      'Referencing Soplang in docs/tutorials',
                      'Using official logo in articles'
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500/50 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                  <h3 className="text-lg font-semibold text-red-700 dark:text-red-400 mb-3 flex items-center gap-2">
                    <Icon icon="lucide:x" className="w-4 h-4" />
                    Incorrect Uses
                  </h3>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    {[
                      'Modifying the logo or name',
                      'Using trademarks in product names',
                      'Suggesting official endorsement',
                      'Using trademarks in domain names'
                    ].map(item => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500/50 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            <div className="w-full h-px bg-border/50 my-10" />

            <section className="mb-10 last:mb-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Icon icon="lucide:image" className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold m-0 text-foreground">
                  Logo Guidelines
                </h2>
              </div>
              <p>When using the Soplang logo, please ensure you:</p>
              <ul className="grid sm:grid-cols-2 gap-3 not-prose pl-0 mt-4">
                {[
                  'Maintain clear space around the logo',
                  'Do not alter colors or proportions',
                  'Use provided official files',
                  'Ensure high visibility'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-muted-foreground bg-background/50 p-3 rounded-lg border border-border/50">
                    <Icon icon="lucide:arrow-right" className="w-4 h-4 text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-12 bg-primary/5 rounded-xl p-6 border border-primary/10">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center gap-2 mt-0">
                <Icon icon="lucide:mail" className="w-5 h-5" />
                Contact Us
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-foreground mb-1">Permission Requests</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Icon icon="lucide:at-sign" className="w-4 h-4 text-primary" />
                    trademarks@soplang.org
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Report Violations</p>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Icon icon="lucide:flag" className="w-4 h-4 text-primary" />
                    legal@soplang.org
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
} 