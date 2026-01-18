
import React from 'react';
import { notFound } from 'next/navigation';
import { getContentBySlug, getAllContent } from '@/lib/content';
import { MDXRemote } from 'next-mdx-remote/rsc';
import CodeWindow from '@/components/CodeWindow';
import { Icon } from '@/components/ui/icon';
import DocNavigation from '@/components/DocNavigation';

import {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
} from '@/components/ui/Table';

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
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableHead,
    TableRow,
    TableCell,
    TableCaption,
};

interface ExamplePageProps {
    params: {
        slug: string[];
    };
}

export async function generateStaticParams() {
    const items = getAllContent('examples');
    return items.map((item) => ({
        slug: [item.slug],
    }));
}

export async function generateMetadata({ params }: ExamplePageProps) {
    const slug = params.slug.join('/');
    const item = getContentBySlug('examples', slug);

    if (!item) {
        return {
            title: 'Example Not Found',
        };
    }

    return {
        title: `${item.meta.title} - Soplang Examples`,
        description: item.meta.description,
    };
}

export default function ExamplePage({ params }: ExamplePageProps) {
    const slug = params.slug.join('/');
    const item = getContentBySlug('examples', slug);
    const allItems = getAllContent('examples');
    const itemIndex = allItems.findIndex((d) => d.slug === item?.meta.slug);

    let prevPage, nextPage;

    if (itemIndex > 0) {
        const prev = allItems[itemIndex - 1];
        prevPage = {
            href: `/examples/${prev.slug}`,
            title: prev.title,
            description: prev.description || 'Previous example',
        };
    }

    if (itemIndex > -1 && itemIndex < allItems.length - 1) {
        const next = allItems[itemIndex + 1];
        nextPage = {
            href: `/examples/${next.slug}`,
            title: next.title,
            description: next.description || 'Next example',
        };
    }

    if (!item) {
        notFound();
    }

    return (
        <article className="w-full py-10 px-4 md:px-8">
            <div className="mb-10">
                <h1 className="text-4xl font-bold mb-4 text-primary">{item.meta.title}</h1>
                {item.meta.description && (
                    <p className="text-xl text-muted-foreground">{item.meta.description}</p>
                )}
            </div>

            <div className="prose prose-blue dark:prose-invert max-w-none">
                <MDXRemote source={item.content} components={components} />
            </div>

            <DocNavigation prevPage={prevPage} nextPage={nextPage} />
        </article>
    );
}
