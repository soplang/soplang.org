import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Icon } from '@iconify/react';
import FaqClient from '@/app/faq/FaqClient';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSection {
    title: string;
    items: FAQItem[];
    icon?: string;
}

// Map section titles to icons
const SECTION_ICONS: Record<string, string> = {
    'General': 'lucide:info',
    'Installation & Setup': 'lucide:download',
    'Language Features': 'lucide:code-2',
    'Community & Support': 'lucide:users',
};

function parseFaqMarkdown(content: string): FAQSection[] {
    const lines = content.split('\n');
    const sections: FAQSection[] = [];
    let currentSection: FAQSection | null = null;
    let currentItem: FAQItem | null = null;

    for (const line of lines) {
        if (line.startsWith('## ')) {
            // New Section
            if (currentItem && currentSection) {
                currentSection.items.push(currentItem);
                currentItem = null;
            }
            if (currentSection) {
                sections.push(currentSection);
            }

            const title = line.replace('## ', '').trim();
            currentSection = {
                title,
                items: [],
                icon: SECTION_ICONS[title] || 'lucide:help-circle'
            };
        } else if (line.startsWith('### ')) {
            // New Question
            if (currentItem && currentSection) {
                currentSection.items.push(currentItem);
            }

            currentItem = {
                question: line.replace('### ', '').trim(),
                answer: ''
            };
        } else if (currentItem) {
            // Append line to current answer
            // Preserve line breaks for markdown rendering later if needed, but for now simple text
            currentItem.answer += line + '\n';
        }
    }

    // Push last items
    if (currentItem && currentSection) {
        currentSection.items.push(currentItem);
    }
    if (currentSection) {
        sections.push(currentSection);
    }

    // Clean up answers (trim whitespace)
    sections.forEach(section => {
        section.items.forEach(item => {
            item.answer = item.answer.trim();
        });
    });

    return sections;
}

async function getFaqData() {
    const filePath = path.join(process.cwd(), 'src/docs/faq.mdx');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(fileContent);
    return parseFaqMarkdown(content);
}

export const metadata = {
    title: 'FAQ - Soplang',
    description: 'Frequently Asked Questions about Soplang',
};

export default async function FaqPage() {
    const sections = await getFaqData();

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container-custom py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-amber-700 dark:text-amber-400 text-sm font-medium mb-6 animate-fade-in-up">
                        <Icon icon="lucide:message-circle-question" className="w-4 h-4" />
                        <span>FAQ</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up animation-delay-100">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">Questions</span>
                    </h1>
                    <p className="text-xl text-muted-foreground animate-fade-in-up animation-delay-200">
                        Everything you need to know about Soplang and how it works.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto animate-fade-in-up animation-delay-300">
                    <FaqClient sections={sections} />
                </div>
            </div>
        </div>
    );
}
