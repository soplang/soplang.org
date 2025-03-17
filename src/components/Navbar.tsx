"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Downloads", path: "/downloads" },
  { name: "Documentation", path: "/docs" },
  { name: "Community", path: "/community" },
  { name: "Success Stories", path: "/success-stories" },
  { name: "News", path: "/news" },
  { name: "About", path: "/about" },
];

const searchPlaceholder = "Search Soplang";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      {/* Top navigation bar */}
      <nav
        className="bg-[var(--header-bg)] text-white sticky top-0 z-50"
        suppressHydrationWarning
      >
        <div className="container-custom px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
          <div className="flex items-center justify-between h-16 md:h-20" suppressHydrationWarning>
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 shrink-0">
              <div className="relative w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-full" suppressHydrationWarning>
                <span className="text-[var(--primary-color)] font-bold text-lg md:text-xl">S</span>
              </div>
              <span className="text-lg md:text-xl font-bold text-white">Soplang</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4" suppressHydrationWarning>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`${
                    pathname === link.path ? "nav-link-active" : "nav-link"
                  } text-sm lg:text-base font-medium px-3 py-2 rounded-md transition-colors duration-200`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Search and Mobile Menu Button */}
            <div className="flex items-center space-x-2 md:space-x-4" suppressHydrationWarning>
              <div className="hidden md:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={searchPlaceholder}
                    className="w-48 lg:w-64 bg-white/10 text-white placeholder-white/70 rounded-md py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-white hover:bg-[var(--nav-hover)] focus:outline-none focus:ring-2 focus:ring-white/50 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`} 
          suppressHydrationWarning
        >
          <div className="container-custom px-4 py-2">
            <div className="flex flex-col space-y-2" suppressHydrationWarning>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`${
                    pathname === link.path 
                      ? "bg-[var(--primary-color)] text-white" 
                      : "text-white hover:bg-[var(--nav-hover)]"
                  } py-3 px-4 rounded-md transition-colors duration-200`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="py-2 px-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={searchPlaceholder}
                    className="w-full bg-white/10 text-white placeholder-white/70 rounded-md py-2 px-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-200"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white/70"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Secondary navigation - Quick access links */}
        <div className="bg-gray-100 dark:bg-gray-800 border-b border-[var(--border-color)] overflow-x-auto">
          <div className="container-custom py-2 px-4">
            <div className="flex space-x-4 md:space-x-6 whitespace-nowrap">
              <Link href="/downloads/latest" className="quick-link text-sm md:text-base">Download Latest</Link>
              <Link href="/docs/getting-started" className="quick-link text-sm md:text-base">Get Started</Link>
              <Link href="/docs/reference" className="quick-link text-sm md:text-base">Reference</Link>
              <Link href="/community/forums" className="quick-link text-sm md:text-base">Forums</Link>
              <Link href="/community/contribute" className="quick-link text-sm md:text-base">Contribute</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
} 