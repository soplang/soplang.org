import React from "react";
import Link from "next/link";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

interface DocNavigationProps {
  prevPage?: {
    href: string;
    title?: string;
    description?: string;
    hidden?: boolean; // Add this property to hide the previous link
  };
  nextPage?: {
    href: string;
    title: string;
    description: string;
  };
  className?: string;
}

const DocNavigation: React.FC<DocNavigationProps> = ({ prevPage, nextPage, className = "" }) => {
  return (
    <>
      <div className="pt-8 mt-16 border-t border-gray-200 dark:border-gray-700"></div>
      <div className={`p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg ${className}`}>
        {/* <h2 className="mb-3 text-xl font-bold">Continue Learning</h2>
      <p className="mb-4">Navigate through the Soplang documentation to learn more:</p> */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {prevPage && !prevPage.hidden && (
            <Link
              href={prevPage.href}
              className="flex items-center p-5 transition-shadow bg-white rounded-md shadow-sm dark:bg-gray-800 hover:shadow-md group"
            >
              <div className="mr-4 transition-transform text-primary group-hover:transform group-hover:-translate-x-1">
                <HiArrowLeft className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-primary">{prevPage.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{prevPage.description}</p>
              </div>
            </Link>
          )}
          {nextPage && (
            <Link
              href={nextPage.href}
              className={`flex items-center p-5 bg-white dark:bg-gray-800 rounded-md shadow-sm hover:shadow-md transition-shadow group ${
                !prevPage || prevPage.hidden ? "md:col-start-2" : ""
              }`}
            >
              <div className="flex-1">
                <h3 className="font-semibold text-primary">{nextPage.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{nextPage.description}</p>
              </div>
              <div className="ml-4 transition-transform text-primary group-hover:transform group-hover:translate-x-1">
                <HiArrowRight className="w-5 h-5" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default DocNavigation;
