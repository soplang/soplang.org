'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/icon';
import { BlogPost } from '@/lib/blog';

interface BlogListProps {
    initialPosts: BlogPost[];
}

export default function BlogList({ initialPosts }: BlogListProps) {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    // Categories
    const categories = ['All', 'Tutorials', 'Announcements', 'Community'];

    // Filter Logic
    const filteredPosts = initialPosts.filter((post) => {
        // 1. Category Filter
        const matchesCategory = selectedCategory === 'All' ||
            (post.category && post.category.toLowerCase().includes(selectedCategory.toLowerCase().slice(0, -1))); // simplistic matching (Tutorials -> Tutorial)

        // 2. Search Filter
        const matchesSearch = searchQuery === '' ||
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    // Sort by updatedAt (descending)
    const sortedPosts = [...filteredPosts].sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime());

    const heroPost = sortedPosts[0];
    const otherPosts = sortedPosts.slice(1);

    // Helper to get icon based on category
    const getCategoryIcon = (category?: string) => {
        const cat = (category || '').toLowerCase();
        if (cat.includes('tutorial')) return 'lucide:book-open';
        if (cat.includes('announcement')) return 'lucide:megaphone';
        if (cat.includes('community')) return 'lucide:users';
        if (cat.includes('update')) return 'lucide:refresh-cw';
        return 'lucide:file-text';
    };

    // Helper to get color theme based on category
    const getCategoryColor = (category?: string) => {
        const cat = (category || '').toLowerCase();
        if (cat.includes('tutorial')) return 'text-green-500 bg-green-500/10 border-green-500/20';
        if (cat.includes('announcement')) return 'text-purple-500 bg-purple-500/10 border-purple-500/20';
        if (cat.includes('community')) return 'text-orange-500 bg-orange-500/10 border-orange-500/20';
        if (cat.includes('update')) return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
        return 'text-primary bg-primary/10 border-primary/20';
    };

    return (
        <div className="min-h-screen bg-background pb-20 selection:bg-primary/20">
            {/* 1. Header Section */}
            <div className="pt-16 pb-12 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 blur-[100px] rounded-full -z-10 pointer-events-none" />

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/50 border border-border/50 text-sm font-medium text-muted-foreground mb-8">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Engineering & Community Updates
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground">
                    The Soplang <span className="text-primary">Blog</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4 mb-10">
                    Discover tutorials, release notes, and stories from the Soplang ecosystem.
                </p>

                {/* Search Bar */}
                <div className="max-w-md mx-auto px-4 mb-12 relative">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full px-5 py-3 pl-12 rounded-2xl bg-card border border-border shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-muted-foreground/70"
                    />
                    <Icon icon="lucide:search" className="absolute left-8 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                </div>

                {/* Categories Filter - User Requested Design */}
                <div className="flex flex-wrap justify-center gap-2 px-4">
                    {categories.map((filter) => {
                        const isActive = selectedCategory === filter;
                        return (
                            <button
                                key={filter}
                                onClick={() => setSelectedCategory(filter)}
                                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all border ${isActive
                                        ? 'bg-foreground text-background border-foreground shadow-lg'
                                        : 'bg-background text-muted-foreground border-border hover:border-foreground/20 hover:text-foreground'
                                    }`}
                            >
                                {filter}
                            </button>
                        )
                    })}
                </div>
            </div>

            <div className="container-custom px-4 md:px-8">

                {sortedPosts.length === 0 ? (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                            <Icon icon="lucide:search-x" className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground">No articles found</h3>
                        <p className="text-muted-foreground mt-2">Try adjusting your search or filter.</p>
                        <button
                            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
                            className="mt-6 px-4 py-2 bg-primary/10 text-primary font-bold rounded-lg hover:bg-primary/20 transition-colors"
                        >
                            Clear Filters
                        </button>
                    </div>
                ) : (
                    <>
                        {/* 2. Hero Card */}
                        {heroPost && (
                            <div className="mb-16">
                                <Link href={`/blog/${heroPost.slug}`} className="group relative block w-full bg-card rounded-3xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-primary/20 to-transparent blur-[120px] rounded-full opacity-50 -z-10" />
                                    <div className="grid grid-cols-1 lg:grid-cols-2">
                                        {/* Icon/Visual Side */}
                                        <div className="p-12 lg:p-20 flex items-center justify-center bg-muted/30 border-b lg:border-b-0 lg:border-r border-border/50 group-hover:bg-primary/5 transition-colors duration-500">
                                            <div className={`w-32 h-32 md:w-48 md:h-48 rounded-3xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500 ${getCategoryColor(heroPost.category).split(' ')[1]}`}>
                                                <Icon icon={getCategoryIcon(heroPost.category)} className={`w-16 h-16 md:w-24 md:h-24 ${getCategoryColor(heroPost.category).split(' ')[0]}`} />
                                            </div>
                                        </div>
                                        {/* Content Side */}
                                        <div className="p-8 md:p-12 flex flex-col justify-center">
                                            <div className="flex items-center gap-3 mb-6">
                                                <span className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider border ${getCategoryColor(heroPost.category)}`}>
                                                    {heroPost.category || 'Featured'}
                                                </span>
                                                <span className="text-sm font-medium text-muted-foreground">
                                                    {new Date(heroPost.updatedAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight group-hover:text-primary transition-colors">
                                                {heroPost.title}
                                            </h2>
                                            <p className="text-lg text-muted-foreground mb-8 line-clamp-3">
                                                {heroPost.description}
                                            </p>
                                            <div className="flex items-center gap-4">
                                                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background font-bold text-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                                    Read Article <Icon icon="lucide:arrow-right" className="w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}

                        {/* 3. Post Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {otherPosts.map((post) => {
                                const colors = getCategoryColor(post.category);
                                const [textColor, bgColor, borderColor] = colors.split(' ');

                                return (
                                    <Link key={post.slug} href={`/blog/${post.slug}`} className="group relative flex flex-col bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        {/* Header with Icon */}
                                        <div className="h-48 bg-muted/40 border-b border-border/50 flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-sm transform group-hover:scale-110 transition-transform duration-300 ${bgColor}`}>
                                                <Icon icon={getCategoryIcon(post.category)} className={`w-8 h-8 ${textColor}`} />
                                            </div>
                                        </div>

                                        {/* Body */}
                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className={`text-xs font-bold uppercase tracking-wider ${textColor}`}>
                                                    {post.category}
                                                </span>
                                                <span className="text-xs font-medium text-muted-foreground">
                                                    {new Date(post.updatedAt).toLocaleDateString()}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                                                {post.title}
                                            </h3>

                                            <p className="text-sm text-muted-foreground line-clamp-3 mb-6 flex-1">
                                                {post.description}
                                            </p>

                                            <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                                <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                                                    <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs">
                                                        {post.author.charAt(0)}
                                                    </div>
                                                    {post.author}
                                                </div>
                                                <Icon icon="lucide:arrow-right" className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </>
                )}

                {/* Newsletter Section */}
                <div className="mt-24 p-8 md:p-12 rounded-3xl bg-card border border-border relative overflow-hidden text-center">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full -z-10" />
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                        <Icon icon="lucide:mail" className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Stay up to date</h2>
                    <p className="text-muted-foreground max-w-lg mx-auto mb-8">
                        Get notified about new releases, tutorials, and community highlights. No spam, ever.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                        <input type="email" placeholder="Enter your email" className="flex-1 bg-background border border-border rounded-xl px-4 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" />
                        <button className="px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-colors">
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
