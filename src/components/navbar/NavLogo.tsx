'use client';

import Image from 'next/image';
import Link from 'next/link';

export const NavLogo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 mr-6 shrink-0 transition-opacity hover:opacity-80">
            <div className="relative h-8 w-8 md:h-9 md:w-9">
                <Image
                    src="/images/logo/logo.svg"
                    alt="Soplang Logo"
                    fill
                    className="object-contain"
                    priority
                />
            </div>
            <span className="font-bold text-xl md:text-2xl text-blue-600">
                Soplang
            </span>
        </Link>
    );
};
