
import React from 'react';
import { getAllContent } from '@/lib/content';
import DocsSidebar from '@/components/DocsSidebar';

export default function ExamplesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Fetch example content for the sidebar
    const examples = getAllContent('examples');

    return (
        <div className="min-h-screen bg-background flex flex-col md:flex-row">
            <DocsSidebar items={examples} basePath="/examples" />

            {/* Main Content */}
            <main className="flex-1 min-w-0">
                <div className="container-custom py-2 w-full">
                    {children}
                </div>
            </main>
        </div>
    );
}
