"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

// Define different types of searchable content
type SearchResultType = "documentation" | "blog" | "news" | "page";

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  url: string;
  type: SearchResultType;
  relevance: number;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeFilter, setActiveFilter] = useState<SearchResultType | "all">(
    "all"
  );

  // This function would be replaced with actual search functionality
  // For now, it simulates search results
  const performSearch = (searchQuery: string) => {
    setLoading(true);

    // Simulate API delay
    setTimeout(() => {
      if (!searchQuery.trim()) {
        setSearchResults([]);
        setLoading(false);
        return;
      }

      // Mock search results - this would be replaced with actual data
      const mockResults: SearchResult[] = [
        {
          id: "doc-1",
          title: "Getting Started with Soplang",
          excerpt: "Learn how to install and setup Soplang on your computer.",
          url: "/docs/getting-started",
          type: "documentation",
          relevance: 0.95,
        },
        {
          id: "doc-2",
          title: "Soplang Syntax Guide",
          excerpt:
            "A complete guide to Soplang's syntax and language features.",
          url: "/docs/reference",
          type: "documentation",
          relevance: 0.92,
        },
        {
          id: "blog-1",
          title: "Why Soplang Matters for Somali Developers",
          excerpt:
            "Exploring the impact of having a programming language in Somali.",
          url: "/blog/why-soplang-matters",
          type: "blog",
          relevance: 0.85,
        },
        {
          id: "news-1",
          title: "Soplang 2.0 Release Announcement",
          excerpt:
            "Announcing the release of Soplang 2.0 with new features and improvements.",
          url: "/news/Soplang-2.0-Is-Almost-Here-A-Somali-first-Programming-Language-Nears-Major-Release",
          type: "news",
          relevance: 0.88,
        },
        {
          id: "page-1",
          title: "About Soplang",
          excerpt:
            "Learn about the Soplang programming language and its mission.",
          url: "/about",
          type: "page",
          relevance: 0.8,
        },
      ];

      // Filter based on search query (case insensitive)
      const filteredResults = mockResults.filter(
        (result) =>
          result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          result.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchResults(filteredResults);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    performSearch(query);
  }, [query]);

  // Filter results based on active filter
  const filteredResults =
    activeFilter === "all"
      ? searchResults
      : searchResults.filter((result) => result.type === activeFilter);

  // Count results by type
  const resultCounts = {
    all: searchResults.length,
    documentation: searchResults.filter((r) => r.type === "documentation")
      .length,
    blog: searchResults.filter((r) => r.type === "blog").length,
    news: searchResults.filter((r) => r.type === "news").length,
    page: searchResults.filter((r) => r.type === "page").length,
  };

  return (
    <div className="container-custom py-12">
      <div className="max-w-5xl mx-auto">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Search Results
          </h1>
          <div className="relative max-w-2xl">
            <input
              type="text"
              defaultValue={query}
              placeholder="Search Soplang..."
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const input = e.target as HTMLInputElement;
                  window.location.href = `/search?q=${encodeURIComponent(
                    input.value
                  )}`;
                }
              }}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
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
            </div>
          </div>
        </div>

        {/* Search Results */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters */}
          <div className="w-full md:w-64 shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Filters
              </h2>
              <div className="space-y-2">
                <button
                  onClick={() => setActiveFilter("all")}
                  className={`w-full text-left px-3 py-2 rounded-md ${
                    activeFilter === "all"
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  All Results ({resultCounts.all})
                </button>
                <button
                  onClick={() => setActiveFilter("documentation")}
                  className={`w-full text-left px-3 py-2 rounded-md ${
                    activeFilter === "documentation"
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Documentation ({resultCounts.documentation})
                </button>
                <button
                  onClick={() => setActiveFilter("blog")}
                  className={`w-full text-left px-3 py-2 rounded-md ${
                    activeFilter === "blog"
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Blog ({resultCounts.blog})
                </button>
                <button
                  onClick={() => setActiveFilter("news")}
                  className={`w-full text-left px-3 py-2 rounded-md ${
                    activeFilter === "news"
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  News ({resultCounts.news})
                </button>
                <button
                  onClick={() => setActiveFilter("page")}
                  className={`w-full text-left px-3 py-2 rounded-md ${
                    activeFilter === "page"
                      ? "bg-primary text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                  }`}
                >
                  Pages ({resultCounts.page})
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : filteredResults.length > 0 ? (
              <div className="space-y-6">
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {filteredResults.length} results found for "{query}"
                </div>
                {filteredResults.map((result) => (
                  <div
                    key={result.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center mb-2">
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full mr-2 ${
                          result.type === "documentation"
                            ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                            : result.type === "blog"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : result.type === "news"
                            ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {result.type.charAt(0).toUpperCase() +
                          result.type.slice(1)}
                      </span>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {Math.round(result.relevance * 100)}% relevant
                      </div>
                    </div>
                    <Link href={result.url}>
                      <h3 className="text-xl font-bold text-primary hover:underline mb-2">
                        {result.title}
                      </h3>
                    </Link>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      {result.excerpt}
                    </p>
                    <Link
                      href={result.url}
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      View result →
                    </Link>
                  </div>
                ))}
              </div>
            ) : query ? (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
                <div className="text-3xl font-bold text-gray-300 dark:text-gray-600 mb-4">
                  ¯\_(ツ)_/¯
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  No results found
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  We couldn't find any results for "{query}". Try using
                  different keywords or check your spelling.
                </p>
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    You might want to try:
                  </h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 text-left max-w-md mx-auto">
                    <li>Using more general terms</li>
                    <li>Using fewer keywords</li>
                    <li>Checking for typos or misspellings</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Enter a search term to begin
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Search for documentation, blog posts, news, and more.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
