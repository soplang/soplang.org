'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import { NavLogo } from './NavLogo';

import { NavSearch } from './NavSearch';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Documentation', path: '/docs' },
    { name: 'Community', path: '/community' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
];

export const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <div className="max-2xl:flex hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-muted-foreground hover:text-primary transition-colors"
                aria-label="Open Menu"
            >
                <Icon icon="lucide:menu" className="w-6 h-6" />
            </button>

            {/* Backdrop & Menu Container */}
            {isOpen && (
                <div className="fixed inset-0 z-[100] w-screen h-[100dvh] flex flex-col bg-background/95 backdrop-blur-3xl animate-in slide-in-from-top-5 fade-in duration-300">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-border/40">
                        <NavLogo />
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 text-muted-foreground hover:text-destructive transition-colors"
                            aria-label="Close Menu"
                        >
                            <Icon icon="lucide:x" className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Links */}
                    <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                        {/* Search in Mobile Nav */}
                        <div className="md:hidden">
                            <NavSearch className="w-full" />
                        </div>

                        <nav className="flex flex-col gap-2">
                            {navLinks.map((link, idx) => (
                                <Link
                                    key={link.path}
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={`group flex items-center justify-between p-4 rounded-xl text-lg font-medium transition-all duration-200 border border-transparent ${pathname === link.path
                                        ? 'bg-primary/10 text-primary border-primary/20'
                                        : 'hover:bg-secondary hover:text-foreground hover:border-border/50 text-muted-foreground'
                                        }`}
                                    style={{ animationDelay: `${idx * 50}ms` }}
                                >
                                    {link.name}
                                    <Icon icon="lucide:arrow-right" className={`w-5 h-5 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${pathname === link.path ? 'opacity-100 translate-x-0' : ''}`} />
                                </Link>
                            ))}
                        </nav>

                        {/* CTA */}
                        <div className="mt-auto pt-8 border-t border-border/40">
                            <Link
                                href="/downloads"
                                onClick={() => setIsOpen(false)}
                                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white h-12 px-8 text-base font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
