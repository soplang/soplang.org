import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search Soplang - Find Documentation, Blogs, and News",
  description:
    "Search through Soplang's documentation, blog posts, news, and more to find the information you need.",
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
