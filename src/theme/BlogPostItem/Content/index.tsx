import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import { blogPostContainerID } from "@docusaurus/utils-common";
import type { Props } from "@theme/BlogPostItem/Content";
import MDXContent from "@theme/MDXContent";
import clsx from "clsx";
import { type ReactNode } from "react";

export default function BlogPostItemContent({
  children,
  className,
}: Props): ReactNode {
  const { isBlogPostPage } = useBlogPost();
  return (
    <div
      // This ID is used for the feed generation to locate the main content
      id={isBlogPostPage ? blogPostContainerID : undefined}
      className={clsx("markdown", className)}
    >
      <MDXContent>{children}</MDXContent>
    </div>
  );
}
