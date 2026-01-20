import DocsSidebar from '@/components/DocsSidebar';
import { getAllContent } from '@/lib/content';
import { notFound } from 'next/navigation';

interface CollectionLayoutProps {
    children: React.ReactNode;
    params: {
        collection: string;
    };
}

export default function CollectionLayout({ children, params }: CollectionLayoutProps) {
    const { collection } = params;

    // Verify collection exists by trying to fetch content
    const content = getAllContent(collection);

    // If no content found and it's not a known static path (which Next.js handles), 
    // it might be an invalid 404. However, getAllContent returns empty array if folder doesn't exist.
    // We can treat empty array as 404 for this purpose to avoid empty sidebars for random URLs.
    if (content.length === 0) {
        notFound();
    }

    // Generate sidebar items from content
    const sidebarItems = content.map((item) => ({
        title: item.title,
        slug: item.slug,
        section: item.section || 'General',
    }));

    return (
        <div className="container-custom flex flex-col md:flex-row min-h-screen">
            <DocsSidebar items={sidebarItems} basePath={`/${collection}`} />
            <div className="flex-1 md:pl-8 py-8 md:py-12 min-w-0">
                <main className="prose prose-slate dark:prose-invert max-w-none">
                    {children}
                </main>
            </div>
        </div>
    );
}
