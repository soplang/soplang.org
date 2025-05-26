"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Documentation sidebar navigation structure
const docsNav = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Quick Start", href: "/docs/getting-started" },
      { title: "Installation", href: "/docs/installation" },
      // { title: "Editor Setup", href: "/docs/editor-setup" },
    ],
  },
  {
    title: "Core Concepts",
    items: [
      { title: "Syntax Basics", href: "/docs/syntax-basics" },
      { title: "Input & Output", href: "/docs/input-and-output" },
      { title: "Variables", href: "/docs/variables" },
      { title: "Data Types", href: "/docs/data-types" },
      { title: "Numbers", href: "/docs/numbers" },
      { title: "Strings", href: "/docs/strings" },
      { title: "Operators", href: "/docs/operators" },
      { title: "Conditional Statements", href: "/docs/conditional-statements" },
      { title: "Loops", href: "/docs/loops" },
      { title: "Functions", href: "/docs/functions" },
      // { title: "Arrays", href: "/docs/arrays" },
      // { title: "Objects", href: "/docs/objects" },
      { title: "Built-in Functions", href: "/docs/objects" },
      // { title: "Error Handling", href: "/docs/error-handling" },
    ],
  },
  {
    // title: "Advanced Topics",
    items: [
      // { title: "Classes & Objects", href: "/docs/classes-objects" },
      // { title: "Modules & Packages", href: "/docs/modules-packages" },
      // { title: "Concurrency", href: "/docs/concurrency" },
      // { title: "Memory Management", href: "/docs/memory-management" },
      // { title: "Performance Tips", href: "/docs/performance-tips" },
    ],
  },
  {
    // title: "Tutorials",
    items: [
      // { title: "Building a CLI App", href: "/docs/tutorials/cli-app" },
      // { title: "Web Development", href: "/docs/tutorials/web-development" },
      // { title: "Data Analysis", href: "/docs/tutorials/data-analysis" },
      // { title: "Machine Learning", href: "/docs/tutorials/machine-learning" },
    ],
  },
  {
    // title: "API Reference",
    items: [
      // { title: "Standard Library", href: "/docs/api/standard-library" },
      // { title: "Built-in Functions", href: "/docs/api/built-in-functions" },
      // { title: "Core Modules", href: "/docs/api/core-modules" },
    ],
  },
];

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="py-12 container-custom">
      <div className="flex flex-col gap-10 lg:flex-row">
        {/* Mobile Nav Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="flex items-center justify-between w-full p-4 bg-white rounded-md shadow-sm dark:bg-gray-800"
          >
            <span className="font-medium text-gray-900 dark:text-white">Documentation Menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform ${
                mobileNavOpen ? "transform rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Navigation */}
        <div className={`lg:w-1/4 ${mobileNavOpen ? "block" : "hidden lg:block"}`}>
          <div className="sticky p-6 bg-white rounded-lg shadow-sm dark:bg-gray-800 top-24">
            <div className="space-y-8">
              {docsNav.map((section) => (
                <div key={section.title}>
                  <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={`block py-1 px-2 rounded text-sm ${
                            pathname === item.href
                              ? "bg-primary/10 text-primary font-medium"
                              : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                          }`}
                          onClick={() => setMobileNavOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:w-3/4">
          <div className="p-6 bg-white rounded-lg shadow-sm dark:bg-gray-800 md:p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
