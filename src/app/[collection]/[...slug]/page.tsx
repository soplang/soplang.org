import React from 'react';
import { notFound } from 'next/navigation';
import { getAllContent, getContentBySlug } from '@/lib/content';
import { MDXRemote } from 'next-mdx-remote/rsc';
import CodeWindow from '@/components/CodeWindow';
import { Icon } from '@/components/ui/icon';
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from '@/components/ui/Table';
import DocNavigation from '@/components/DocNavigation';

// Define custom MDX components
const components = {
    // Use our CodeWindow for code blocks
    pre: ({ children }: any) => {
        // Extract code and language from the children (which is usually a <code> element)
        const codeElement = children;
        const className = codeElement.props?.className || '';
        const language = className.replace('language-', '');
        const code = codeElement.props?.children || '';

        // If we have a language, use CodeWindow, otherwise standard pre
        if (language) {
            return (
                <div className="my-6 not-prose">
                    <CodeWindow code={String(code).trim()} language={language} title={`${language === 'bash' ? 'terminal' : ''}`} />
                </div>
            );
        }

        return <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">{children}</pre>;
    },
    h1: (props: any) => <h1 className="text-3xl font-bold mb-6 text-primary" {...props} />,
    h2: (props: any) => <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground border-b border-border pb-2" {...props} />,
    h3: (props: any) => <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground" {...props} />,
    p: (props: any) => <p className="leading-7 mb-4 text-muted-foreground" {...props} />,
    ul: (props: any) => <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground" {...props} />,
    code: (props: any) => <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary" {...props} />,
    table: Table,
    thead: TableHeader,
    tbody: TableBody,
    tfoot: TableFooter,
    th: TableHead,
    tr: TableRow,
    td: TableCell,
    caption: TableCaption as any,
};

interface PageProps {
    params: {
        collection: string;
        slug: string[];
    };
}

export async function generateMetadata({ params }: PageProps) {
    const { collection } = params;
    const slug = params.slug.join('/');
    const doc = getContentBySlug(collection, slug);

    if (!doc) {
        return {
            title: 'Page Not Found',
        };
    }

    return {
        title: `${doc.meta.title} - ${collection.charAt(0).toUpperCase() + collection.slice(1)}`,
        description: doc.meta.description,
    };
}

export default async function DynamicDocPage({ params }: PageProps) {
    const { collection } = params;
    const slug = params.slug.join('/');
    const doc = getContentBySlug(collection, slug);

    if (!doc) {
        notFound();
    }

    // Calculate prev/next navigation
    const allContent = getAllContent(collection);
    const currentIndex = allContent.findIndex((item) => item.slug === slug);

    const prev = currentIndex > 0 ? {
        title: allContent[currentIndex - 1].title,
        href: `/${collection}/${allContent[currentIndex - 1].slug}`,
        description: allContent[currentIndex - 1].description
    } : undefined;

    const next = currentIndex < allContent.length - 1 ? {
        title: allContent[currentIndex + 1].title,
        href: `/${collection}/${allContent[currentIndex + 1].slug}`,
        description: allContent[currentIndex + 1].description
    } : undefined;

    return (
        <article className="w-full px-4 md:px-8">
            <div className="mb-10">
                <h1 className="text-4xl font-bold mb-4 text-primary">
                    {doc.meta.title}
                </h1>
                {doc.meta.description && (
                    <p className="text-xl text-muted-foreground">
                        {doc.meta.description}
                    </p>
                )}
            </div>

            <div className="prose prose-blue dark:prose-invert max-w-none">
                <MDXRemote source={doc.content} components={components} />
            </div>

            <DocNavigation prevPage={prev} nextPage={next} />
        </article>
    );
}
