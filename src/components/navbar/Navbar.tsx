'use client';

import { NavLogo } from './NavLogo';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';
import { NavSearch } from './NavSearch';
import { ModeSwitcher } from '@/components/ui/mode-switcher';
import Link from 'next/link';

export default function Navbar() {
    return (
        <header
            className="sticky top-0 z-[100] w-full transition-all duration-300 bg-background/80 backdrop-blur-md shadow-sm"
        >
            {/* Gradient Border Bottom */}
            <div
                className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-200 dark:bg-gray-800 opacity-100"
            />

            <div className="w-full px-4 md:px-8 flex h-16 items-center justify-between">
                <div className="flex items-center gap-8">
                    <NavLogo />
                    <DesktopNav />
                </div>

                <div className="flex items-center gap-4">
                    <NavSearch className="hidden md:block" />

                    {/* CTA Button */}
                    <Link
                        href="/downloads"
                        className="hidden md:inline-flex items-center justify-center rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 h-9 px-4 py-2 text-sm font-medium shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                        Get Started
                    </Link>

                    <div className="flex items-center gap-2 pl-2 border-l border-border/50">
                        <ModeSwitcher />
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    );
}
