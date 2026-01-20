'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { Icon } from '@/components/ui/icon';

export type SearchType = 'documentation' | 'tutorial' | 'example' | 'page';

export interface SearchItem {
    title: string;
    description?: string;
    slug: string;
    type: SearchType;
    url: string;
}

interface SearchClientProps {
    initialItems: SearchItem[];
}

export default function SearchClient({ initialItems }: SearchClientProps) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const initialQuery = searchParams.get('q') || '';

    const [query, setQuery] = useState(initialQuery);
    const [activeFilter, setActiveFilter] = useState<SearchType | 'all'>('all');
    const [isSearching, setIsSearching] = useState(false);

    // Update URL when query changes, but with a debounce effect could be better. 
    // For simplicity and immediate feedback, we just update local state and filter.
    // We sync back to URL on meaningful changes or enter.

    useEffect(() => {
        const params = new URLSearchParams(searchParams.toString());
        if (query) {
            params.set('q', query);
        } else {
            params.delete('q');
        }
        router.replace(`/search?${params.toString()}`, { scroll: false });
    }, [query, router, searchParams]);


    const filteredResults = useMemo(() => {
        if (!query.trim()) return [];

        const lowerQuery = query.toLowerCase();
        return initialItems.filter((item) => {
            const matchesType = activeFilter === 'all' || item.type === activeFilter;
            const matchesText =
                item.title.toLowerCase().includes(lowerQuery) ||
                (item.description && item.description.toLowerCase().includes(lowerQuery));

            return matchesType && matchesText;
        });
    }, [query, activeFilter, initialItems]);

    const counts = useMemo(() => {
        const lowerQuery = query.toLowerCase();
        // Count matches for ALL filters regardless of active filter, but dependent on query
        if (!query.trim()) return { all: 0, documentation: 0, tutorial: 0, example: 0, page: 0 };

        const matches = initialItems.filter(item =>
            item.title.toLowerCase().includes(lowerQuery) ||
            (item.description && item.description.toLowerCase().includes(lowerQuery))
        );

        return {
            all: matches.length,
            documentation: matches.filter(i => i.type === 'documentation').length,
            tutorial: matches.filter(i => i.type === 'tutorial').length,
            example: matches.filter(i => i.type === 'example').length,
            page: matches.filter(i => i.type === 'page').length,
        };
    }, [query, initialItems]);


    return (
        <div className="container-custom py-12 md:py-20 min-h-[80vh]">
            <div className="max-w-5xl mx-auto">

                {/* Search Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600 mb-6">
                        Search Soplang
                    </h1>
                    <div className="relative max-w-2xl mx-auto">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none z-10">
                            <Icon icon="lucide:search" className="w-5 h-5 text-muted-foreground" />
                        </div>
                        <input
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search documentation, tutorials, examples, and pages..."
                            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-background/50 backdrop-blur-sm shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-lg"
                            autoFocus
                        />
                        {query && (
                            <button
                                onClick={() => setQuery('')}
                                className="absolute inset-y-0 right-4 flex items-center text-muted-foreground hover:text-foreground z-10"
                            >
                                <Icon icon="lucide:x" className="w-5 h-5" />
                            </button>
                        )}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-8">

                    {/* Filters Sidebar */}
                    <div className="w-full md:w-64 shrink-0 space-y-2">
                        <h2 className="text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider px-2">Filters</h2>

                        <FilterButton
                            active={activeFilter === 'all'}
                            onClick={() => setActiveFilter('all')}
                            label="All Results"
                            count={counts.all}
                            icon="lucide:grid"
                        />
                        <FilterButton
                            active={activeFilter === 'documentation'}
                            onClick={() => setActiveFilter('documentation')}
                            label="Docs"
                            count={counts.documentation}
                            icon="lucide:book-open"
                        />
                        <FilterButton
                            active={activeFilter === 'tutorial'}
                            onClick={() => setActiveFilter('tutorial')}
                            label="Tutorials"
                            count={counts.tutorial}
                            icon="lucide:graduation-cap"
                        />
                        <FilterButton
                            active={activeFilter === 'example'}
                            onClick={() => setActiveFilter('example')}
                            label="Examples"
                            count={counts.example}
                            icon="lucide:code-2"
                        />
                        <FilterButton
                            active={activeFilter === 'page'}
                            onClick={() => setActiveFilter('page')}
                            label="Pages"
                            count={counts.page}
                            icon="lucide:layout"
                        />
                    </div>

                    {/* Results Grid */}
                    <div className="flex-1">
                        {!query.trim() ? (
                            <div className="flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-border/50 rounded-2xl bg-secondary/5">
                                <div className="p-4 bg-background rounded-full shadow-sm mb-4">
                                    <Icon icon="lucide:search" className="w-8 h-8 text-muted-foreground" />
                                </div>
                                <h3 className="text-lg font-medium text-foreground mb-2">Ready to search</h3>
                                <p className="text-muted-foreground max-w-sm">
                                    Type specific keywords to find what you're looking for across our documentation and resources.
                                </p>
                            </div>
                        ) : filteredResults.length === 0 ? (
                            <div className="flex flex-col items-center justify-center p-12 text-center border border-border rounded-2xl bg-background">
                                <div className="text-4xl mb-4">🤔</div>
                                <h3 className="text-lg font-bold text-foreground mb-2">No results found</h3>
                                <p className="text-muted-foreground">
                                    We couldn't find anything matching "{query}". <br />Try simple keywords or different search terms.
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4 px-1">
                                    <span>Showing {filteredResults.length} result{filteredResults.length !== 1 ? 's' : ''}</span>
                                </div>

                                <div className="grid gap-4">
                                    {filteredResults.map((result) => (
                                        <Link
                                            key={result.url}
                                            href={result.url}
                                            className="group block p-6 bg-card hover:bg-secondary/50 border border-border rounded-xl transition-all duration-200 hover:shadow-md hover:border-primary/20"
                                        >
                                            <div className="flex items-start justify-between gap-4">
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-2">
                                                        <Badge type={result.type} />
                                                        <span className="text-xs text-muted-foreground font-mono">
                                                            {result.slug || result.url}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                                                        {result.title}
                                                    </h3>
                                                    {result.description && (
                                                        <p className="text-muted-foreground text-sm line-clamp-2">
                                                            {result.description}
                                                        </p>
                                                    )}
                                                </div>
                                                <div className="p-2 rounded-full bg-secondary text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                                                    <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

function FilterButton({ active, onClick, label, count, icon }: { active: boolean; onClick: () => void; label: string; count: number; icon: string }) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${active
                ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20'
                : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
        >
            <div className="flex items-center gap-3">
                <Icon icon={icon} className="w-4 h-4" />
                {label}
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full ${active ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-secondary text-muted-foreground'
                }`}>
                {count}
            </span>
        </button>
    );
}

function Badge({ type }: { type: SearchType }) {
    const styles = {
        documentation: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
        tutorial: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
        example: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
        page: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
    };

    const labels = {
        documentation: 'Docs',
        tutorial: 'Tutorial',
        example: 'Example',
        page: 'Page',
    };

    return (
        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[type]}`}>
            {labels[type]}
        </span>
    );
}
