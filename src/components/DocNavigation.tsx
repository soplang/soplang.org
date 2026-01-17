import React from "react";
import Link from "next/link";
import { Icon } from '@/components/ui/icon';

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
    <div className={`mt-12 pt-8 border-t border-border ${className}`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {prevPage && !prevPage.hidden ? (
          <Link
            href={prevPage.href}
            className="group flex flex-col p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/30 transition-all duration-200"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors">
              <Icon icon="lucide:arrow-left" className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Previous</span>
            </div>
            <div className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
              {prevPage.title}
            </div>
            {prevPage.description && (
              <p className="text-sm text-muted-foreground line-clamp-1">{prevPage.description}</p>
            )}
          </Link>
        ) : (
          <div aria-hidden="true" />
        )}

        {nextPage ? (
          <Link
            href={nextPage.href}
            className="group flex flex-col items-end text-right p-6 rounded-xl border border-border hover:border-primary/50 hover:bg-muted/30 transition-all duration-200"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2 group-hover:text-primary transition-colors">
              <span>Next</span>
              <Icon icon="lucide:arrow-right" className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
            <div className="font-semibold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
              {nextPage.title}
            </div>
            {nextPage.description && (
              <p className="text-sm text-muted-foreground line-clamp-1">{nextPage.description}</p>
            )}
          </Link>
        ) : (
          <div aria-hidden="true" />
        )}
      </div>
    </div>
  );
};

export default DocNavigation;
