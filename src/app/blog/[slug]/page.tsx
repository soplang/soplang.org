import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Icon } from '@/components/ui/icon';

import CodeWindow from '@/components/CodeWindow';

const CustomPre = (props: any) => {
    // Check if the children is a 'code' element
    const codeElement = props.children;

    // If it's a code block with className (language), render CodeWindow
    if (codeElement && codeElement.props && codeElement.props.className) {
        const className = codeElement.props.className || '';
        const language = className.replace('language-', '');
        const code = codeElement.props.children;
        const title = language === 'sop' || language === 'soplang' ? 'main.sop' : 'terminal';

        return (
            <div className="mb-8 mt-6">
                <CodeWindow
                    code={code.trim()}
                    language={language}
                    title={title}
                />
            </div>
        );
    }

    // Fallback for standard pre (no language or weird structure)
    return <pre className="bg-[#15151a] p-4 rounded-xl overflow-x-auto mb-6 border border-white/10" {...props} />;
};

// Define components mapping for MDX
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '@/components/ui/Table';

const components = {
    h1: (props: any) => <h1 className="text-3xl font-bold mt-8 mb-4 text-foreground" {...props} />,
    h2: (props: any) => <h2 className="text-2xl font-bold mt-8 mb-4 text-foreground flex items-center gap-2" {...props} />,
    h3: (props: any) => <h3 className="text-xl font-bold mt-6 mb-3 text-foreground" {...props} />,
    p: (props: any) => <p className="mb-4 text-lg text-muted-foreground leading-relaxed" {...props} />,
    ul: (props: any) => <ul className="list-disc pl-6 mb-4 space-y-2 text-muted-foreground" {...props} />,
    li: (props: any) => <li className="pl-1" {...props} />,
    code: (props: any) => <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary" {...props} />,
    pre: CustomPre,
    a: (props: any) => <a className="text-primary hover:underline underline-offset-4" {...props} />,
    strong: (props: any) => <strong className="font-bold text-foreground" {...props} />,
    table: Table,
    thead: TableHeader,
    tbody: TableBody,
    th: TableHead,
    tr: TableRow,
    td: TableCell,
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
    TableCell,
};


export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen py-10">
            <div className="container-custom">
                {/* Back Link */}
                <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group">
                    <Icon icon="lucide:arrow-left" className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    Back to Blog
                </Link>

                <article className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="mb-14 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-6">
                            <Icon icon="lucide:file-text" className="w-6 h-6" />
                        </div>
                        <div className="flex items-center justify-center gap-2 text-sm text-primary font-bold mb-4 uppercase tracking-wider">
                            <span className="px-3 py-1 rounded-full bg-primary/5 border border-primary/10">
                                {post.category || 'Article'}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-8 text-foreground leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center justify-center gap-6 text-muted-foreground">
                            <div className="flex items-center gap-3 bg-muted/30 px-4 py-2 rounded-full border border-border/50">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/20">
                                    {post.author.charAt(0)}
                                </div>
                                <div className="text-left">
                                    <div className="font-bold text-foreground text-sm">{post.author}</div>
                                    <div className="text-xs text-primary">{post.authorRole || 'Author'}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <Icon icon="lucide:calendar" className="w-4 h-4" />
                                <span>{new Date(post.updatedAt).toLocaleDateString()}</span>
                            </div>
                        </div>
                    </div>

                    {/* Content (No Image) */}

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <MDXRemote source={post.content} components={components} />
                    </div>

                    {/* Share / Footer */}
                    <div className="mt-16 pt-8 border-t border-border flex justify-between items-center">
                        <div className="text-muted-foreground">
                            Thanks for reading!
                        </div>
                        <div className="flex gap-4">
                            <button className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
                                <Icon icon="lucide:share-2" className="w-5 h-5" />
                            </button>
                            <button className="p-2 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors">
                                <Icon icon="lucide:twitter" className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
