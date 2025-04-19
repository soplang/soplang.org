import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Soplang Blog - News, Updates, and Tutorials",
  description:
    "Stay up-to-date with the latest news, updates, and tutorials for Soplang, the first Somali programming language.",
};

// Blog posts data
const blogPosts = [
  {
    id: "release-notes-v1.2.0",
    title: "Soplang 1.2.0 Released",
    excerpt:
      "We're excited to announce the release of Soplang 1.2.0, which includes new language features, performance improvements, and bug fixes.",
    date: "October 15, 2023",
    author: "Mr Sharafdin",
    authorRole: "Soplang Creator",
    category: "Release",
    readTime: "5 min read",
    image: "/images/blog/release-1.2.0.jpg",
    imageAlt: "Soplang 1.2.0 Release",
  },
  {
    id: "getting-started-with-soplang",
    title: "Getting Started with Soplang: A Beginner's Guide",
    excerpt:
      "New to Soplang? This comprehensive guide will help you get started with the language, from installation to writing your first program.",
    date: "September 28, 2023",
    author: "Omar Tood",
    authorRole: "Developer Advocate",
    category: "Tutorial",
    readTime: "10 min read",
    image: "/images/blog/getting-started.jpg",
    imageAlt: "Getting Started with Soplang",
  },
  {
    id: "building-web-apps-with-soplang",
    title: "Building Web Applications with Soplang",
    excerpt:
      "Learn how to use Soplang's web framework to build fast, scalable web applications with clean, maintainable code.",
    date: "September 15, 2023",
    author: "Ismail Ainte",
    authorRole: "Web Developer",
    category: "Tutorial",
    readTime: "12 min read",
    image: "/images/blog/web-apps.jpg",
    imageAlt: "Building Web Applications with Soplang",
  },
  {
    id: "soplang-features",
    title: "Unique Features of Soplang: A Comprehensive Overview",
    excerpt:
      "Explore the unique features that make Soplang stand out as the first Somali programming language designed for simplicity and performance.",
    date: "August 30, 2023",
    author: "Mr Sharafdin",
    authorRole: "Soplang Creator",
    category: "Features",
    readTime: "8 min read",
    image: "/images/blog/soplang-features.jpg",
    imageAlt: "Soplang Features Overview",
  },
  {
    id: "performance-optimization-tips",
    title: "10 Performance Optimization Tips for Soplang",
    excerpt:
      "Improve the performance of your Soplang applications with these 10 practical optimization tips and best practices.",
    date: "August 15, 2023",
    author: "Omar Tood",
    authorRole: "Performance Engineer",
    category: "Best Practices",
    readTime: "7 min read",
    image: "/images/blog/performance-tips.jpg",
    imageAlt: "Soplang Performance Optimization",
  },
  {
    id: "community-spotlight-august",
    title: "Community Spotlight: August 2023",
    excerpt:
      "Highlighting outstanding community contributions, projects, and developers in the Soplang ecosystem this month.",
    date: "August 5, 2023",
    author: "Ismail Ainte",
    authorRole: "Community Manager",
    category: "Community",
    readTime: "6 min read",
    image: "/images/blog/community-spotlight.jpg",
    imageAlt: "Soplang Community Spotlight",
  },
];

// Categories for filtering
const categories = [
  "All",
  "Release",
  "Tutorial",
  "Comparison",
  "Best Practices",
  "Community",
];

export default function BlogPage() {
  return (
    <div className="py-12">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Soplang Blog
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay up-to-date with the latest news, updates, and tutorials for
            Soplang.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gray-900 opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-6 text-center">
                    <span className="inline-block bg-primary text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                      {blogPosts[0].category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {blogPosts[0].title}
                    </h2>
                    <div className="text-blue-100 mb-4">
                      {blogPosts[0].date} · {blogPosts[0].readTime}
                    </div>
                    <Link
                      href={`/blog/${blogPosts[0].id}`}
                      className="inline-block bg-white text-primary px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
                    >
                      Read Article
                    </Link>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-6 md:p-8">
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {blogPosts[0].author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <div className="text-gray-900 dark:text-white font-medium">
                      {blogPosts[0].author}
                    </div>
                    <div className="text-gray-500 dark:text-gray-400 text-sm">
                      {blogPosts[0].authorRole}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium ${
                  category === "All"
                    ? "bg-primary text-white"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className="relative h-48">
                <div className="absolute inset-0 bg-gray-900 opacity-10"></div>
                <span className="absolute top-4 left-4 bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex-grow">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h2>
                <div className="text-gray-500 dark:text-gray-400 text-sm mb-4">
                  {post.date} · {post.readTime}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {post.excerpt}
                </p>
              </div>
              <div className="px-6 pb-6 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                    {post.author.charAt(0)}
                  </div>
                  <div className="ml-2 text-sm">
                    <div className="text-gray-900 dark:text-white font-medium">
                      {post.author}
                    </div>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-primary hover:underline text-sm font-medium"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="px-3 py-2 rounded-md bg-primary text-white">
              1
            </button>
            <button className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
              2
            </button>
            <button className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
              3
            </button>
            <button className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>

        {/* Stay Updated */}
        <div className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-lg p-8 md:p-12 shadow-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Follow us on X (Twitter) to get the latest Soplang news,
              tutorials, and updates.
            </p>
          </div>

          <div className="max-w-md mx-auto flex justify-center">
            <a
              href="https://x.com/xsoplang"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2 px-6 py-3"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
              <span>Follow @xsoplang</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
