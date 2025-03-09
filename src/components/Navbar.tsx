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
        className="bg-[var(--header-bg)] text-white"
        suppressHydrationWarning
      >
        <div className="container-custom" suppressHydrationWarning>
          <div className="flex items-center justify-between h-16" suppressHydrationWarning>
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative w-10 h-10 flex items-center justify-center bg-white rounded-full" suppressHydrationWarning>
                <span className="text-[var(--primary-color)] font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-white">Soplang</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-1" suppressHydrationWarning>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`${
                    pathname === link.path ? "nav-link-active" : "nav-link"
                  } text-sm font-medium`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Search and Mobile Menu Button */}
            <div className="flex items-center space-x-2" suppressHydrationWarning>
              <div className="hidden md:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder={searchPlaceholder}
                    className="bg-white/10 text-white placeholder-white/70 rounded py-1 px-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-white/50"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
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
                className="md:hidden p-2 rounded text-white hover:bg-[var(--nav-hover)] focus:outline-none"
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
        {isMenuOpen && (
          <div className="md:hidden py-2 bg-[var(--nav-hover)]" suppressHydrationWarning>
            <div className="container-custom">
              <div className="flex flex-col space-y-1" suppressHydrationWarning>
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`${
                      pathname === link.path ? "bg-[var(--primary-color)]" : ""
                    } text-white py-2 px-4 rounded`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="py-2 px-4">
                  <input
                    type="text"
                    placeholder={searchPlaceholder}
                    className="w-full bg-white/10 text-white placeholder-white/70 rounded py-1 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-white/50"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Secondary navigation - Quick access links */}
      <div className="bg-gray-100 dark:bg-gray-800 border-b border-[var(--border-color)]">
        <div className="container-custom py-2">
          <div className="quick-links">
            <Link href="/downloads/latest" className="quick-link">Download Latest</Link>
            <Link href="/docs/getting-started" className="quick-link">Get Started</Link>
            <Link href="/docs/reference" className="quick-link">Reference</Link>
            <Link href="/community/forums" className="quick-link">Forums</Link>
            <Link href="/community/contribute" className="quick-link">Contribute</Link>
          </div>
        </div>
      </div>
    </header>
  );
} 