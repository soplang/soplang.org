'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils'; // Assuming standard utils or I will check later

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Downloads', path: '/downloads' },
    { name: 'Documentation', path: '/docs' },
    { name: 'Community', path: '/community' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
];

export const DesktopNav = () => {
    const pathname = usePathname();

    return (
        <nav className="flex max-2xl:hidden items-center gap-1">
            {navLinks.map((link) => (
                <Link
                    key={link.path}
                    href={link.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-full hover:bg-secondary/80 hover:text-foreground ${pathname === link.path
                            ? 'bg-secondary text-foreground'
                            : 'text-muted-foreground'
                        }`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};
