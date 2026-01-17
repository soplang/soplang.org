'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Icon } from '@iconify/react';

import { siteStructure } from "@/constants/sitemap";

// Flatten sitemap into suggestions
const allSuggestions = siteStructure.flatMap((section) =>
    section.links.map((link) => {
        let type = 'page';
        if (section.title.includes('Blog')) type = 'blog';
        else if (section.title.includes('Docs') || section.title.includes('Documentation') || section.title.includes('Getting Started')) type = 'doc';

        return {
            id: link.href,
            title: link.name,
            url: link.href,
            type
        };
    })
);

export const NavSearch = ({ className }: { className?: string }) => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState(allSuggestions);
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                inputRef.current?.focus();
                setIsOpen(true);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
                inputRef.current?.blur();
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (!query) {
            setSuggestions(allSuggestions);
            return;
        }
        const filtered = allSuggestions.filter((item) =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );
        setSuggestions(filtered);
    }, [query]);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query)}`);
            setIsOpen(false);
        }
    };

    const getIcon = (type: string) => {
        switch (type) {
            case 'blog': return <Icon icon="lucide:newspaper" className="w-4 h-4" />;
            case 'doc': return <Icon icon="lucide:file-text" className="w-4 h-4" />;
            default: return <Icon icon="lucide:search" className="w-4 h-4" />;
        }
    };

    return (
        <div className={`relative ${className || ''}`} ref={containerRef}>
            <form onSubmit={handleSearch} className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors">
                    <Icon icon="lucide:search" className="w-4 h-4" />
                </div>
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => {
                        setQuery(e.target.value);
                        setIsOpen(true);
                    }}
                    onFocus={() => setIsOpen(true)}
                    spellCheck={false}
                    className="w-full md:w-64 pl-9 pr-12 py-2 text-sm dark:bg-[#15151a] border dark:border-white/10 border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50 transition-all placeholder:text-muted-foreground/70"
                />
                <div className="absolute right-3 top-[45%] -translate-y-1/2">
                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                        <span className="text-xs">⌘</span>K
                    </kbd>
                </div>
            </form>

            {isOpen && (
                <div className="absolute top-full mt-2 w-full bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl overflow-auto z-50 animate-in fade-in slide-in-from-top-2">
                    {suggestions.length > 0 ? (
                        <div className="flex flex-col max-h-[60vh] overflow-y-auto custom-scrollbar">
                            <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                Suggestions
                            </div>
                            {suggestions.map((item) => (
                                <button
                                    key={item.id}
                                    onClick={() => {
                                        router.push(item.url);
                                        setIsOpen(false);
                                    }}
                                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-primary/10 hover:text-primary transition-colors flex items-center gap-3 group"
                                >
                                    <span className="text-muted-foreground group-hover:text-primary/70 transition-colors">
                                        {getIcon(item.type || 'page')}
                                    </span>
                                    <span className="flex-1">{item.title}</span>
                                    <Icon icon="lucide:arrow-right" className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div className="px-4 py-6 text-center text-sm text-muted-foreground">
                            No results found.
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
