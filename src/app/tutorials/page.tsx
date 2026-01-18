
import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/icon';

// Helper to render MDX components if we want reuse, 
// otherwise we just hardcode the landing page content.

export const metadata = {
    title: "Soplang Tutorials - Learn by Doing",
    description: "Step-by-step tutorials to master Soplang programming.",
};

export default function TutorialsIndexPage() {
    // Optionally fetch the 'index' tutorial if it exists to show snippet 
    // or just hardcode the landing experience.
    // simpler: Hardcode a nice landing page for now.

    return (
        <div className="w-full px-4 py-8 prose prose-lg lg:py-12 dark:prose-invert sm:px-6 lg:px-8">
            <h1 className="mb-6 text-3xl font-bold sm:text-4xl lg:text-5xl text-primary">
                Soplang Tutorials
            </h1>

            <p className="text-lg text-muted-foreground sm:text-xl leading-relaxed">
                Welcome to the <strong>Soplang Tutorials</strong>. Here you will find step-by-step guides helping you build real-world applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-12">
                <div className="p-6 rounded-xl border border-border bg-card shadow-sm">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Icon icon="lucide:graduation-cap" className="text-primary w-6 h-6" />
                        Beginner
                    </h3>
                    <p className="text-muted-foreground mb-4">
                        Start your journey with basic syntax and simple programs.
                    </p>
                    <Link href="/tutorials/index" className="text-primary font-medium hover:underline inline-flex items-center gap-1">
                        Start Learning <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                    </Link>
                </div>

                <div className="p-6 rounded-xl border border-border bg-card shadow-sm opacity-60">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                        <Icon icon="lucide:code-2" className="text-primary w-6 h-6" />
                        Advanced
                    </h3>
                    <p className="text-muted-foreground mb-4">
                        Building complex web servers and tools. (Coming Soon)
                    </p>
                </div>
            </div>
        </div>
    );
}
