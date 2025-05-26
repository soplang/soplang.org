"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Downloads", path: "/downloads" },
  { name: "Documentation", path: "/docs" },
  { name: "Community", path: "/community" },
  { name: "Blog", path: "/blog" },
  { name: "About", path: "/about" },
];

const searchPlaceholder = "Search Soplang";

// Mock suggestions data - in a real app, this would come from an API
const mockSuggestions = [
  {
    id: "doc-1",
    title: "Getting Started with Soplang",
    url: "/docs/getting-started",
  },
  { id: "doc-2", title: "Installation Guide", url: "/docs/installation" },
  {
    id: "news-1",
    title: "Soplang 2.0 Release Announcement",
    url: "/blog/Soplang-2.0-Is-Almost-Here-A-Somali-first-Programming-Language-Nears-Major-Release",
  },
  {
    id: "blog-1",
    title: "Why Soplang Matters",
    url: "/blog/why-soplang-matters",
  },
  { id: "page-1", title: "About Soplang", url: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => {
    if (typeof window !== "undefined") {
      return window.scrollY > 10;
    }
    return false;
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<typeof mockSuggestions>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const desktopSearchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

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

  // Handle click outside to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        desktopSearchRef.current &&
        !desktopSearchRef.current.contains(event.target as Node) &&
        mobileSearchRef.current &&
        !mobileSearchRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter suggestions based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }

    const filtered = mockSuggestions.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setSuggestions(filtered.slice(0, 5)); // Show max 5 suggestions
  }, [searchTerm]);

  // Search functionality
  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const input = e.target as HTMLInputElement;
      const query = input.value.trim();
      if (query) {
        window.location.href = `/search?q=${encodeURIComponent(query)}`;
        setShowSuggestions(false);
      }
    }
  };

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setShowSuggestions(e.target.value.trim() !== "");
  };

  // Handle suggestion click
  const handleSuggestionClick = (url: string) => {
    window.location.href = url;
    setShowSuggestions(false);
    setSearchTerm("");
  };

  return (
    <header>
      {/* banner */}
      <div className="w-full bg-[var(--banner-background-color)] dark:bg-[var(--header-bg)] border border-white/10 dark:border-b dark:border-[var(--border-color)] overflow-x-auto py-2 px-4 text-center text-sm font-medium">
        <p className="text-white">
          Waxaan qoraynaa oon dib uhabeyn ku wadnaa docs oo af-soomaali ku qoran, ka qeybqaadasho
          raac lifaaqaan...
          <Link href="https://www.soplang.org/contribute" className="text-blue-500 ml-2">
            Contribution guidelines
            <FaArrowRight className="w-3 h-3 ml-1 inline-block" />
          </Link>
        </p>
      </div>

      {/* Top navigation bar */}
      <nav
        className="bg-[var(--header-bg)] text-white sticky top-0 z-50 border-b border-white/5 shadow-md"
        suppressHydrationWarning
      >
        <div className="px-4 container-custom sm:px-6 lg:px-8" suppressHydrationWarning>
          <div className="flex items-center justify-between h-16 md:h-20" suppressHydrationWarning>
            {/* Logo */}
            <Link href="/" className="flex items-center mr-12 shrink-0 lg:mr-16">
              <div className="flex items-center">
                <Image
                  src="/images/logo/logo.svg"
                  width={160}
                  height={40}
                  alt="Soplang Logo"
                  className="hidden w-auto h-8 dark:inline-block md:h-10"
                  priority
                  style={{ objectFit: "contain" }}
                />
                <Image
                  src="/images/logo/logo.svg"
                  width={160}
                  height={40}
                  alt="Soplang Logo"
                  className="inline-block w-auto h-8 dark:hidden md:h-10"
                  priority
                  style={{ objectFit: "contain" }}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div
              className="hidden md:flex md:items-center md:space-x-8 lg:space-x-10"
              suppressHydrationWarning
            >
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
              <div className="hidden md:block" ref={desktopSearchRef}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={searchPlaceholder}
                    className="w-48 px-4 py-2 pr-10 text-sm text-white transition-all duration-200 rounded-md lg:w-64 bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onKeyDown={handleSearch}
                    onFocus={() => searchTerm.trim() !== "" && setShowSuggestions(true)}
                  />
                  <button
                    className="absolute transform -translate-y-1/2 right-3 top-1/2"
                    onClick={() => {
                      if (searchTerm.trim()) {
                        window.location.href = `/search?q=${encodeURIComponent(searchTerm.trim())}`;
                        setShowSuggestions(false);
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-white/70"
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

                  {/* Suggestions Dropdown - Desktop */}
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute left-0 right-0 z-50 mt-1 overflow-hidden bg-white rounded-md shadow-lg top-full dark:bg-gray-800">
                      <ul className="py-1">
                        {suggestions.map((suggestion) => (
                          <li key={suggestion.id}>
                            <button
                              className="w-full px-4 py-2 text-sm text-left text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                              onClick={() => handleSuggestionClick(suggestion.url)}
                            >
                              {suggestion.title}
                            </button>
                          </li>
                        ))}
                        <li className="border-t border-gray-200 dark:border-gray-700">
                          <button
                            className="w-full px-4 py-2 text-sm font-medium text-left text-primary hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {
                              window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
                              setShowSuggestions(false);
                            }}
                          >
                            View all results for "{searchTerm}" →
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
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
                    className="w-6 h-6"
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
                    className="w-6 h-6"
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
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
          suppressHydrationWarning
        >
          <div className="px-4 py-2 container-custom">
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
              <div className="px-4 py-2" ref={mobileSearchRef}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder={searchPlaceholder}
                    className="w-full px-4 py-2 pr-10 text-sm text-white transition-all duration-200 rounded-md bg-white/10 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    onKeyDown={handleSearch}
                    onFocus={() => searchTerm.trim() !== "" && setShowSuggestions(true)}
                  />
                  <button
                    className="absolute transform -translate-y-1/2 right-3 top-1/2"
                    onClick={() => {
                      if (searchTerm.trim()) {
                        window.location.href = `/search?q=${encodeURIComponent(searchTerm.trim())}`;
                        setShowSuggestions(false);
                        setIsMenuOpen(false);
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-white/70"
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

                  {/* Suggestions Dropdown - Mobile */}
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute left-0 right-0 z-50 mt-1 overflow-hidden bg-white rounded-md shadow-lg top-full dark:bg-gray-800">
                      <ul className="py-1">
                        {suggestions.map((suggestion) => (
                          <li key={suggestion.id}>
                            <button
                              className="w-full px-4 py-2 text-sm text-left text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                              onClick={() => {
                                handleSuggestionClick(suggestion.url);
                                setIsMenuOpen(false);
                              }}
                            >
                              {suggestion.title}
                            </button>
                          </li>
                        ))}
                        <li className="border-t border-gray-200 dark:border-gray-700">
                          <button
                            className="w-full px-4 py-2 text-sm font-medium text-left text-primary hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {
                              window.location.href = `/search?q=${encodeURIComponent(searchTerm)}`;
                              setShowSuggestions(false);
                              setIsMenuOpen(false);
                            }}
                          >
                            View all results for "{searchTerm}" →
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
