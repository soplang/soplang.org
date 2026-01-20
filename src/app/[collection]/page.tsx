import Link from 'next/link';
import { getAllContent } from '@/lib/content';
import { notFound } from 'next/navigation';
import { Icon } from '@/components/ui/icon';

interface PageProps {
    params: {
        collection: string;
    };
}

export default function CollectionIndexPage({ params }: PageProps) {
    const { collection } = params;
    const content = getAllContent(collection);

    if (content.length === 0) {
        notFound();
    }

    // Format collection title (e.g., 'my-docs' -> 'My Docs')
    const title = collection
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <h1 className="scroll-m-20 text-blue-500 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    {title}
                </h1>
                <p className="text-xl text-muted-foreground">
                    Welcome to the {title} documentation section.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.map((item) => (
                    <Link
                        key={item.slug}
                        href={`/${collection}/${item.slug}`}
                        className="group block p-6 bg-card border border-border rounded-xl hover:shadow-md transition-all duration-200 hover:border-primary/20"
                    >
                        <div className="flex items-start justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-2">
                                    {item.title}
                                </h3>
                                {item.description && (
                                    <p className="text-muted-foreground text-sm line-clamp-2">
                                        {item.description}
                                    </p>
                                )}
                            </div>
                            <Icon icon="lucide:arrow-right" className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
