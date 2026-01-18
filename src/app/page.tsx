import { Hero } from '@/components/home/Hero';
import { Features } from '@/components/home/Features';
import { Sponsors } from '@/components/home/Sponsors';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Hero />
      <Sponsors />
      <Features />

      {/* Mission Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-black dark:bg-grid-white opacity-[0.03] -z-10"></div>
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Built for Somalia</h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Soplang (Somali Programming Language) bridges the gap between complex coding concepts and native understanding.
              By using Somali keywords, we empower students, educators, and developers to build software using their mother tongue.
            </p>
            <div className="p-8 bg-card border rounded-2xl shadow-sm text-left relative overflow-hidden group hover:border-primary/50 transition-colors">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Icon icon="fa6-solid:code" className="w-24 h-24 rotate-12" />
              </div>
              <p className="italic text-muted-foreground text-center text-lg font-medium relative z-10">
                "Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Steps - Preserving helpful content */}
      <section className="py-24 bg-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Get Started in Minutes</h2>
            <p className="text-muted-foreground text-lg">Follow these simple steps to start coding in Soplang.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="relative p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Icon icon="clarity:install-line" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Install</h3>
              <p className="text-muted-foreground mb-6">Download the latest version for your operating system.</p>
              <Link href="/downloads" className="text-primary font-semibold hover:underline flex items-center gap-1 group">
                Go to Downloads <Icon icon="lucide:arrow-right" className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Step 2 */}
            <div className="relative p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Icon icon="streamline-freehand:learning-programming-book" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Learn</h3>
              <p className="text-muted-foreground mb-6">Follow our step-by-step tutorial to write your first program.</p>
              <Link href="/docs/tutorial" className="text-primary font-semibold hover:underline flex items-center gap-1 group">
                Start Tutorial <Icon icon="lucide:arrow-right" className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Step 3 */}
            <div className="relative p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6">
                <Icon icon="fluent:people-community-20-regular" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Join</h3>
              <p className="text-muted-foreground mb-6">Connect with the community and share your projects.</p>
              <Link href="/community" className="text-primary font-semibold hover:underline flex items-center gap-1 group">
                Join Discord <Icon icon="lucide:arrow-right" className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 -z-10"></div>
        <div className="container-custom">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Ready to start coding?</h2>
          <Link
            href="/docs/getting-started"
            className="inline-flex h-14 items-center justify-center rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-6 py-2 font-medium shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Start Building Now
          </Link>
        </div>
      </section>
    </div>
  );
}
