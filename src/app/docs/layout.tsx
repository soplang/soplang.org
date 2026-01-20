
import React from 'react';
import Link from 'next/link';
// import { getAllDocs } from '@/lib/docs';
import { Icon } from '@/components/ui/icon';
// For now, we will hardcode sidebar items or fetch them. 
// Since this is a server component layout, we can fetch data.
import { getAllContent, ContentMetadata } from '@/lib/content';
import DocsSidebar from '@/components/DocsSidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const docs = [
    {
      title: 'Introduction',
      slug: '',
      description: 'Introduction to Soplang',
      // Mock other required fields if any, or cast
    } as any,
    ...getAllContent('docs')
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col md:flex-row">
      {/* 
          Sidebar:
          We use the client component for interactivity (search).
          It takes up the left side (md:w-72) and is sticky.
       */}
      <DocsSidebar items={docs} basePath="/docs" />

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        <div className="container-custom py-2 w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
