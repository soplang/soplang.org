"use client";

import { useMetaColor } from "@/hooks/use-meta-color";

import { useTheme } from "next-themes";
import * as React from "react";
import { Button } from "./button";
import { cn } from "@/lib/utils";

export function ModeSwitcher({ className }: { className?: string }) {
  const { setTheme, resolvedTheme } = useTheme();
  const { setMetaColor, metaColor } = useMetaColor();
  // const [systemTheme, setSystemTheme] = useState<'light' | 'dark'>();

  React.useEffect(() => {
    setMetaColor(metaColor);
  }, [metaColor, setMetaColor]);

  const toggleTheme = React.useCallback(() => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }, [resolvedTheme, setTheme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("group/toggle extend-touch-target size-8", className)}
      aria-label={"Toggle theme"}
      // onClick={toggleTheme}
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      title="Toggle theme"
    >
      {/* Sun icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={
          // Show sun when the page is in dark mode (immediately via CSS)
          "absolute h-5 w-5 size-8 text-foreground dark:opacity-100 opacity-0 transition-opacity"
        }
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>

      {/* Moon icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={
          // Show moon when the page is in light mode (immediately via CSS)
          "absolute w-5 size-8 text-indigo-600 dark:opacity-0 opacity-100 transition-opacity"
        }
        fill="currentColor"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
