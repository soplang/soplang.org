'use client';

import React, { useState } from 'react';
import { Icon } from '@iconify/react';


interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSection {
    title: string;
    items: FAQItem[];
    icon?: string;
}

interface FaqClientProps {
    sections: FAQSection[];
}

export default function FaqClient({ sections }: FaqClientProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    const toggleItem = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    const filterSections = () => {
        if (!searchQuery) return sections;

        const lowerQuery = searchQuery.toLowerCase();

        return sections.map(section => {
            const matchesSectionTitle = section.title.toLowerCase().includes(lowerQuery);
            const matchingItems = section.items.filter(item =>
                item.question.toLowerCase().includes(lowerQuery) ||
                item.answer.toLowerCase().includes(lowerQuery)
            );

            if (matchesSectionTitle || matchingItems.length > 0) {
                return {
                    ...section,
                    items: matchesSectionTitle ? section.items : matchingItems
                };
            }
            return null;
        }).filter(Boolean) as FAQSection[];
    };

    const filteredSections = filterSections();

    // Simple parser for links in answer
    const renderAnswer = (text: string) => {
        // Replace [text](url) with <a href="url">text</a>
        const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
        return parts.map((part, i) => {
            const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
            if (match) {
                return (
                    <a key={i} href={match[2]} className="text-primary hover:underline font-medium">
                        {match[1]}
                    </a>
                );
            }
            return <span key={i}>{part}</span>;
        });
    };

    return (
        <div className="space-y-8">
            {/* Search Input */}
            <div className="relative max-w-lg mx-auto mb-12">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                    <Icon icon="lucide:search" className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-border rounded-xl leading-5 bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary placeholder-muted-foreground transition-all duration-200"
                    placeholder="Search for answers..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            {filteredSections.length === 0 ? (
                <div className="text-center py-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                        <Icon icon="lucide:search-x" className="w-8 h-8 text-muted-foreground" />
                    </div>
                    <h3 className="text-lg font-medium text-foreground">No results found</h3>
                    <p className="text-muted-foreground">Try utilizing different keywords.</p>
                </div>
            ) : (
                <div className="space-y-10">
                    {filteredSections.map((section, sectionIdx) => (
                        <div key={section.title} className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-3xl p-6 md:p-8">
                            <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-foreground">
                                {section.icon && (
                                    <span className="p-2 rounded-lg bg-primary/10 text-primary">
                                        <Icon icon={section.icon} className="w-5 h-5" />
                                    </span>
                                )}
                                {section.title}
                            </h2>

                            <div className="space-y-4">
                                {section.items.map((item, itemIdx) => {
                                    const id = `${sectionIdx}-${itemIdx}`;
                                    const isOpen = openIndex === id;

                                    return (
                                        <div
                                            key={id}
                                            className={`rounded-xl border transition-all duration-200 overflow-hidden ${isOpen
                                                ? 'bg-card border-primary/30 shadow-lg ring-1 ring-primary/10'
                                                : 'bg-card/50 border-border hover:border-primary/30 hover:bg-card/80'
                                                }`}
                                        >
                                            <button
                                                onClick={() => toggleItem(id)}
                                                className="w-full flex items-center justify-between p-4 text-left focus:outline-none"
                                            >
                                                <span className={`font-medium text-lg pr-4 ${isOpen ? 'text-primary' : 'text-foreground/90'}`}>
                                                    {item.question}
                                                </span>
                                                <Icon
                                                    icon="lucide:chevron-down"
                                                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 flex-shrink-0 ${isOpen ? 'transform rotate-180 text-primary' : ''
                                                        }`}
                                                />
                                            </button>

                                            <div
                                                className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                                    }`}
                                            >
                                                <div className="p-4 pt-0 text-muted-foreground leading-relaxed">
                                                    <div className="pt-2 border-t border-border/50">
                                                        {renderAnswer(item.answer)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
