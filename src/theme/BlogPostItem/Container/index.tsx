import { cn } from "@site/lib/util";
import type { Props } from "@theme/BlogPostItem/Container";
import { type ReactNode } from "react";

export default function BlogPostItemContainer({
  children,
  className,
}: Props): ReactNode {
  if (className)
    return (
      <article
        className={cn(
          className,
          "shadom-1x rounded-[10px] border border-black/10 dark:border-white/10 px-4 py-2 h-fit "
        )}
      >
        {children}
      </article>
    );
  return <article className={cn(className)}>{children}</article>;
}
