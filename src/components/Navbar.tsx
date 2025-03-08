"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Docs", path: "/docs" },
  { name: "Downloads", path: "/downloads" },
  { name: "Community", path: "/community" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
];

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
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "bg-white dark:bg-gray-900"
      }`}
    >
      <div className="container-custom" suppressHydrationWarning>
        <div className="flex items-center justify-between h-16" suppressHydrationWarning>
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-8 h-8" suppressHydrationWarning>
              <div className="absolute inset-0 bg-primary rounded-full opacity-20" suppressHydrationWarning></div>
              <div className="absolute inset-1 bg-primary rounded-full" suppressHydrationWarning></div>
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm" suppressHydrationWarning>S</div>
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">Soplang</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8" suppressHydrationWarning>
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

          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-2" suppressHydrationWarning>
            <ThemeToggle />
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700" suppressHydrationWarning>
            <div className="flex flex-col space-y-4" suppressHydrationWarning>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`${
                    pathname === link.path ? "nav-link-active" : "nav-link"
                  } text-base font-medium px-3 py-2 rounded-md`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 