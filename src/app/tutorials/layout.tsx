
import React from 'react';
import { getAllContent } from '@/lib/content';
import DocsSidebar from '@/components/DocsSidebar';

export default function TutorialsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Fetch tutorial content for the sidebar
    const tutorials = getAllContent('tutorials');

    return (
        <div className="min-h-screen bg-background flex flex-col md:flex-row">
            <DocsSidebar items={tutorials} basePath="/tutorials" />

            {/* Main Content */}
            <main className="flex-1 min-w-0">
                <div className="container-custom py-2 w-full">
                    {children}
                </div>
            </main>
        </div>
    );
}
