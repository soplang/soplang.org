'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/ui/icon';

interface DocItem {
    slug: string;
    title: string;
    order?: number;
}

interface DocsSidebarProps {
    items: DocItem[];
}

export default function DocsSidebar({ items }: DocsSidebarProps) {
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

    const SidebarContent = () => (
        <div className="h-full flex flex-col">
            <div className="sticky top-0 z-10 bg-card/80 backdrop-blur-md p-6 pb-4 border-b border-border/40">
                <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-lg flex items-center gap-2 px-2 text-foreground/80">
                        <Icon icon="lucide:book-open" className="w-5 h-5 text-primary" />
                        Documentation
                    </h4>
                    {isOpen && (
                        <button
                            onClick={() => setIsOpen(false)}
                            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
                        >
                            <Icon icon="lucide:x" className="w-5 h-5" />
                        </button>
                    )}
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
                <nav className="flex flex-col space-y-1">
                    {filteredItems.length === 0 ? (
                        <p className="text-sm text-muted-foreground px-2 py-4 italic">No results found.</p>
                    ) : (
                        filteredItems.map((doc) => {
                            const isActive = pathname === `/docs/${doc.slug}` || (pathname === '/docs' && doc.slug === '');
                            return (
                                <Link
                                    key={doc.slug}
                                    href={doc.slug ? `/docs/${doc.slug}` : '/docs'}
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
                        })
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
                <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden">
                    <SidebarContent />
                </div>
            )}

            {/* Desktop Sidebar */}
            <aside className="w-full md:w-[350px] border-r border-border bg-card/30 h-[calc(100vh-4rem)] sticky top-16 hidden md:block backdrop-blur-sm">
                <SidebarContent />
            </aside>
        </>
    );
}
