import BlogPostItemHeaderAuthors from "@theme/BlogPostItem/Header/Authors";
import BlogPostItemHeaderInfo from "@theme/BlogPostItem/Header/Info";
import BlogPostItemHeaderTitle from "@theme/BlogPostItem/Header/Title";
import { type ReactNode } from "react";

export default function BlogPostItemHeader(): ReactNode {
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
