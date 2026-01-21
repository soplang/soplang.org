'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/ui/icon';

interface DocItem {
    slug: string;
    title: string;
    order?: number;
    section?: string;
    sectionIcon?: string;
}

interface DocsSidebarProps {
    items: DocItem[];
    basePath?: string;
}

export default function DocsSidebar({ items, basePath = '/docs' }: DocsSidebarProps) {
    const [query, setQuery] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const filteredItems = items.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
    );

    // Close mobile menu when path changes
    React.useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Close on escape key
    React.useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        window.addEventListener('keydown', handleEscape);
        return () => window.removeEventListener('keydown', handleEscape);
    }, []);

    // Prevent body scroll when mobile menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Define the desired order of sections
    const SECTION_ORDER = [
        'Getting Started',
        'General',
        'Core Concepts',
        'Syntax',
        'Data Types',
        'Control Flow',
        'Functions',
        'API Reference'
    ];

    const groupedItems = filteredItems.reduce((acc, item) => {
        const section = item.section || 'General';
        if (!acc[section]) {
            acc[section] = [];
        }
        acc[section].push(item);
        return acc;
    }, {} as Record<string, DocItem[]>);

    const sections = Object.entries(groupedItems).sort((a, b) => {
        const indexA = SECTION_ORDER.indexOf(a[0]);
        const indexB = SECTION_ORDER.indexOf(b[0]);

        // If both are in the list, sort by index
        if (indexA !== -1 && indexB !== -1) return indexA - indexB;

        // If only A is in the list, it comes first
        if (indexA !== -1) return -1;
        if (indexB !== -1) return 1;

        if (a[0] === 'General') return -1;
        if (b[0] === 'General') return 1;

        return a[0].localeCompare(b[0]);
    });

    const SidebarContent = () => (
        <div className="h-full flex flex-col">
            <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-md p-6 pb-4 border-b border-border/40">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-lg flex items-center gap-2 px-2 text-foreground/80">
                        <Icon icon="lucide:book-open" className="w-5 h-5 text-primary" />
                        Documentation
                    </h4>
                </div>
                <div className="relative group">
                    <Icon
                        icon="lucide:search"
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors"
                    />
                    <input
                        type="text"
                        placeholder="Filter pages..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 text-sm bg-muted/50 border border-transparent rounded-xl focus:outline-none focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary/20 transition-all placeholder:text-muted-foreground/60"
                    />
                </div>
            </div>

            <div className="p-6 pt-4 overflow-y-auto flex-1">
                <nav className="flex flex-col space-y-6">
                    {filteredItems.length === 0 ? (
                        <p className="text-sm text-muted-foreground px-2 italic">No results found.</p>
                    ) : (
                        sections.map(([sectionName, sectionItems]) => (
                            <div key={sectionName}>
                                {sections.length > 1 && sectionName !== 'General' && (
                                    <h5 className="mb-3 px-4 text-xs font-bold text-primary uppercase tracking-wider decoration-2 decoration-primary/30 flex items-center gap-2">
                                        {(() => {
                                            const icon = sectionItems.find(i => i.sectionIcon)?.sectionIcon || 'lucide:folder';
                                            return <Icon icon={icon} className="w-4 h-4" />;
                                        })()}
                                        {sectionName}
                                    </h5>
                                )}
                                <div className="space-y-1 border-b border-slate-200 dark:border-slate-800 py-2">
                                    {sectionItems.map((doc) => {
                                        const cleanSlug = doc.slug.replace(/^(tutorials\/|examples\/)/, '');
                                        const linkHref = cleanSlug ? `${basePath}/${cleanSlug}` : basePath;
                                        const isActive = pathname === linkHref || (pathname === basePath && cleanSlug === '');

                                        return (
                                            <Link
                                                key={doc.slug}
                                                href={linkHref}
                                                className={`px-4 py-2.5 rounded-lg text-sm transition-all duration-200 flex items-center justify-between group ${isActive
                                                    ? 'bg-primary/10 text-primary font-semibold shadow-sm'
                                                    : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Icon
                                                        icon={isActive ? 'lucide:file-text' : 'lucide:file'}
                                                        className={`w-4 h-4 transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground/70 group-hover:text-foreground'}`}
                                                    />
                                                    <span>{doc.title}</span>
                                                </div>
                                                {isActive && (
                                                    <Icon icon="lucide:chevron-right" className="w-4 h-4 text-primary opacity-50" />
                                                )}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        ))
                    )}
                </nav>
            </div>
        </div>
    );

    return (
        <>
            {/* Mobile Trigger */}
            <div className="md:hidden fixed bottom-6 right-6 z-50">
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center gap-2 px-4 py-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-all"
                >
                    <Icon icon="lucide:menu" className="w-5 h-5" />
                    <span className="font-medium">Docs Menu</span>
                </button>
            </div>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-[200] bg-background md:hidden flex flex-col"
                >
                    {/* Mobile Header with Close Button */}
                    <div className="flex items-center justify-end p-4 border-b border-border/40 bg-card/80 backdrop-blur-md sticky top-0 z-50">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2.5 bg-muted/80 rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all border border-border/40"
                            aria-label="Close Menu"
                        >
                            <Icon icon="lucide:x" className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto">
                        <SidebarContent />
                    </div>
                </div>
            )}

            {/* Desktop Sidebar */}
            <aside className="w-full md:w-[350px] border-r border-border bg-card/30 h-[calc(100vh-4rem)] sticky top-16 hidden md:block backdrop-blur-sm">
                <SidebarContent />
            </aside>
        </>
    );
}
