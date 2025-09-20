import { useBlogPost } from "@docusaurus/plugin-content-blog/client";
import BlogPostItemHeaderAuthors from "@theme/BlogPostItem/Header/Authors";
import BlogPostItemHeaderInfo from "@theme/BlogPostItem/Header/Info";
import BlogPostItemHeaderTitle from "@theme/BlogPostItem/Header/Title";
import { type ReactNode } from "react";

export default function BlogPostItemHeader(): ReactNode {
  const { isBlogPostPage } = useBlogPost();
  if (!isBlogPostPage)
    return (
      <header>
        <div className="flex items-center  justify-between">
          <BlogPostItemHeaderAuthors />
          <BlogPostItemHeaderInfo />
        </div>
      </header>
    );
  return (
    <header>
      <BlogPostItemHeaderTitle />
      <div className="flex items-center  justify-between">
        <BlogPostItemHeaderAuthors />
        <BlogPostItemHeaderInfo />
      </div>
    </header>
  );
}
