
import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/icon';

export const metadata = {
    title: "Soplang Examples - Code Snippets",
    description: "Browsing practical Soplang code examples.",
};

export default function ExamplesIndexPage() {
    return (
        <div className="w-full px-4 py-8 prose prose-lg lg:py-12 dark:prose-invert sm:px-6 lg:px-8">
            <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl text-primary">
                Soplang Examples
            </h1>

            <p className="text-lg text-muted-foreground sm:text-xl leading-relaxed">
                Explore a collection of <strong>interactive examples</strong> showing Soplang usage in various scenarios.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-12">
                <Link href="/examples/hello-world" className="group p-6 rounded-xl border border-border bg-card shadow-sm hover:border-primary/50 transition-colors">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2 group-hover:text-primary">
                        <Icon icon="lucide:terminal" className="w-5 h-5" />
                        Hello World
                    </h3>
                    <p className="text-muted-foreground text-sm">
                        The classic first program.
                    </p>
                </Link>

                <div className="p-6 rounded-xl border border-border bg-card shadow-sm opacity-60">
                    <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        <Icon icon="lucide:cpu" className="w-5 h-5" />
                        Algorithms
                    </h3>
                    <p className="text-muted-foreground text-sm">
                        Sorting, searching, and data structures. (Coming Soon)
                    </p>
                </div>
            </div>
        </div>
    );
}
