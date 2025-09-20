import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import type { Props } from "@theme/BlogPostItem";
import BlogPostItemContainer from "@theme/BlogPostItem/Container";
import BlogPostItemContent from "@theme/BlogPostItem/Content";
import BlogPostItemFooter from "@theme/BlogPostItem/Footer";
import BlogPostItemHeader from "@theme/BlogPostItem/Header";
import clsx from "clsx";
import { type ReactNode } from "react";

// apply a bottom margin in list view
function useContainerClassName() {
  const { isBlogPostPage } = useBlogPost();
  console.log(isBlogPostPage);
  return !isBlogPostPage ? "margin-bottom--xl" : undefined;
}

export default function BlogPostItem({
  children,
  className,
}: Props): ReactNode {
  const containerClassName = useContainerClassName();

  return (
    <BlogPostItemContainer className={clsx(containerClassName, className)}>
      <BlogPostItemHeader />
      {!containerClassName ? (
        <BlogPostItemContent>{children}</BlogPostItemContent>
      ) : null}

      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
