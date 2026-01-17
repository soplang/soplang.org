
import React from 'react';
import { notFound } from 'next/navigation';
import { getDocBySlug, getAllDocs } from '@/lib/docs';
import { MDXRemote } from 'next-mdx-remote/rsc';
import CodeWindow from '@/components/CodeWindow';
import { Icon } from '@/components/ui/icon';
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
};

interface DocPageProps {
    params: {
        slug: string[];
    };
}

export async function generateStaticParams() {
    const docs = getAllDocs();
    return docs.map((doc) => ({
        slug: [doc.slug],
    }));
}

export async function generateMetadata({ params }: DocPageProps) {
    const slug = params.slug.join('/');
    const doc = getDocBySlug(slug);

    if (!doc) {
        return {
            title: 'Document Not Found',
        };
    }

    return {
        title: `${doc.meta.title} - Soplang Documentation`,
        description: doc.meta.description,
    };
}

export default function DocPage({ params }: DocPageProps) {
    const slug = params.slug.join('/');
    const doc = getDocBySlug(slug);
    const allDocs = getAllDocs();
    const docIndex = allDocs.findIndex((d) => d.slug === doc?.meta.slug);

    let prevPage, nextPage;

    if (docIndex > 0) {
        const prev = allDocs[docIndex - 1];
        prevPage = {
            href: `/docs/${prev.slug}`,
            title: prev.title,
            description: prev.description || 'Previous page',
        };
    }

    if (docIndex > -1 && docIndex < allDocs.length - 1) {
        const next = allDocs[docIndex + 1];
        nextPage = {
            href: `/docs/${next.slug}`,
            title: next.title,
            description: next.description || 'Next page',
        };
    }

    if (!doc) {
        notFound();
    }

    return (
        <article className="w-full py-10 px-4 md:px-8">
            <div className="mb-10">
                <h1 className="text-4xl font-bold mb-4 text-primary">{doc.meta.title}</h1>
                {doc.meta.description && (
                    <p className="text-xl text-muted-foreground">{doc.meta.description}</p>
                )}
            </div>

            <div className="prose prose-blue dark:prose-invert max-w-none">
                <MDXRemote source={doc.content} components={components} />
            </div>

            <DocNavigation prevPage={prevPage} nextPage={nextPage} />
        </article>
    );
}
