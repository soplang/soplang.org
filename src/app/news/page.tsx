import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soplang News - Latest Announcements and Updates",
  description: "Stay up-to-date with the latest news, announcements, and updates about Soplang, the first Somali programming language.",
};

// News data
const newsItems = [
  {
    id: "soplang-2.0-announcement",
    title: "Announcing Soplang 2.0: The Future of Intuitive Programming",
    excerpt:
      "We're thrilled to announce that Soplang 2.0 is in development, bringing revolutionary features that will transform how you code.",
    date: "March 5, 2024",
    category: "Announcement",
    image: "/images/blog/soplang-2.0.svg",
    imageAlt: "Soplang 2.0 Announcement",
    featured: true,
  },
  {
    id: "community-milestone",
    title: "Soplang Community Reaches 100,000 Members",
    excerpt:
      "We're celebrating a major milestone as the Soplang community surpasses 100,000 members worldwide. Thank you for your support!",
    date: "February 28, 2024",
    category: "Community",
    image: "/images/blog/community-milestone.svg",
    imageAlt: "Soplang Community Milestone",
    featured: false,
  },
  {
    id: "university-adoption",
    title: "Major Universities Adopt Soplang for Computer Science Education",
    excerpt:
      "Leading universities around the world are now using Soplang in their computer science curricula, citing its intuitive syntax and powerful features.",
    date: "February 15, 2024",
    category: "Education",
    image: "/images/blog/university-adoption.svg",
    imageAlt: "University Adoption of Soplang",
    featured: false,
  },
  {
    id: "hackathon-winners",
    title: "Soplang Hackathon Winners Announced",
    excerpt:
      "After an exciting weekend of coding, we're proud to announce the winners of the first global Soplang Hackathon.",
    date: "February 10, 2024",
    category: "Events",
    image: "/images/blog/hackathon.svg",
    imageAlt: "Soplang Hackathon Winners",
    featured: false,
  },
  {
    id: "release-notes-v1.5.0",
    title: "Soplang 1.5.0 Released with Enhanced Performance",
    excerpt:
      "The latest version of Soplang brings significant performance improvements and new features to enhance your development experience.",
    date: "January 25, 2024",
    category: "Release",
    image: "/images/blog/release-1.5.0.svg",
    imageAlt: "Soplang 1.5.0 Release",
    featured: false,
  },
  {
    id: "enterprise-adoption",
    title: "Fortune 500 Companies Embrace Soplang for Enterprise Applications",
    excerpt:
      "Major corporations are increasingly adopting Soplang for enterprise applications, citing its efficiency and developer productivity benefits.",
    date: "January 15, 2024",
    category: "Industry",
    image: "/images/blog/enterprise-adoption.svg",
    imageAlt: "Enterprise Adoption of Soplang",
    featured: false,
  },
  {
    id: "new-learning-resources",
    title: "New Learning Resources Available for Soplang Developers",
    excerpt:
      "We've launched a comprehensive set of learning resources to help developers of all skill levels master Soplang.",
    date: "January 5, 2024",
    category: "Resources",
    image: "/images/blog/learning-resources.svg",
    imageAlt: "Soplang Learning Resources",
    featured: false,
  },
  {
    id: "community-contributions",
    title: "Community Contributions Drive Soplang Ecosystem Growth",
    excerpt:
      "The Soplang ecosystem is thriving thanks to the incredible contributions from our community members.",
    date: "December 20, 2023",
    category: "Community",
    image: "/images/blog/community-contributions.svg",
    imageAlt: "Soplang Community Contributions",
    featured: false,
  },
];

// Categories for filtering
const categories = [
  "All",
  "Announcement",
  "Release",
  "Community",
  "Education",
  "Events",
  "Industry",
  "Resources",
];

export default function NewsPage() {
  // Get featured news item
  const featuredNews = newsItems.find((item) => item.featured);
  // Get remaining news items
  const regularNews = newsItems.filter((item) => !item.featured);

  return (
    <div className="bg-[var(--background-color)] min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Soplang News</h1>
          <p className="text-xl max-w-3xl">
            Stay up-to-date with the latest announcements, releases, and updates from the Soplang team and community.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* News Content */}
          <div className="lg:w-3/4">
            {/* Featured News */}
            {featuredNews && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-primary">Featured News</h2>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-80 w-full">
                    <Image
                      src={featuredNews.image}
                      alt={featuredNews.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 75vw"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredNews.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {featuredNews.date}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-primary">
                      {featuredNews.title}
                    </h3>
                    <p className="mb-4">{featuredNews.excerpt}</p>
                    <Link
                      href={`/news/${featuredNews.id}`}
                      className="text-primary hover:underline font-medium"
                    >
                      Read full story →
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Latest News */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-primary">Latest News</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regularNews.map((news) => (
                  <div
                    key={news.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col h-full"
                  >
                    <div className="relative h-48">
                      <Image
                        src={news.image}
                        alt={news.imageAlt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="bg-primary text-white px-2 py-1 rounded-full text-xs font-medium">
                          {news.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex-grow">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                        {news.date}
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-primary">
                        {news.title}
                      </h3>
                      <p className="mb-4 text-sm">{news.excerpt}</p>
                      <Link
                        href={`/news/${news.id}`}
                        className="text-primary hover:underline text-sm font-medium"
                      >
                        Read more →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  className="px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="px-4 py-2 border-t border-b border-gray-300 dark:border-gray-600 bg-primary text-white text-sm font-medium"
                >
                  1
                </a>
                <a
                  href="#"
                  className="px-4 py-2 border-t border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  2
                </a>
                <a
                  href="#"
                  className="px-4 py-2 border-t border-b border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  3
                </a>
                <a
                  href="#"
                  className="px-4 py-2 rounded-r-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  Next
                </a>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-1/4">
            {/* Categories */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold mb-4 text-primary">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <a
                    key={category}
                    href="#"
                    className={`block py-2 px-3 rounded ${
                      category === "All"
                        ? "bg-primary text-white"
                        : "hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>

            {/* Follow Us */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold mb-4 text-primary">
                Stay Updated
              </h3>
              <p className="mb-4 text-sm">
                Follow us on X (Twitter) to receive the latest news and updates about Soplang.
              </p>
              <a
                href="https://x.com/xsoplang"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center space-x-2 w-full justify-center"
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

            {/* Social Media */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4 text-primary">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-3 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-3 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-3 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 p-3 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 