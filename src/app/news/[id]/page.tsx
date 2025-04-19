import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// This would typically come from a database or API
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
    author: "Mr Sharafdin",
    authorRole: "Lead Developer",
    content: `
      <p class="mb-4">We are excited to announce that Soplang 2.0 is currently in development and will bring a host of new features and improvements to make your coding experience even better.</p>
      
      <p class="mb-4">Since the launch of Soplang, our community has grown tremendously, and we've received valuable feedback from developers around the world. Soplang 2.0 is our response to this feedback, with a focus on performance, developer experience, and expanding the language's capabilities.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3 text-primary">Key Features Coming in Soplang 2.0</h3>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Enhanced Performance:</strong> We've completely rewritten the core runtime for significantly faster execution speeds.</li>
        <li><strong>Improved Type System:</strong> A more robust and flexible type system with better inference capabilities.</li>
        <li><strong>Concurrency Model:</strong> New built-in primitives for handling concurrent operations with ease.</li>
        <li><strong>Interactive Development Environment:</strong> A new IDE specifically designed for Soplang development.</li>
        <li><strong>Package Management:</strong> Revamped package system for easier dependency management.</li>
      </ul>
      
      <p class="mb-4">These are just a few of the exciting features coming in Soplang 2.0. We're working hard to make this the best version of Soplang yet, and we can't wait to share it with you.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3 text-primary">Timeline and Beta Program</h3>
      
      <p class="mb-4">We're targeting a beta release in Q3 2024, with the full release expected by the end of the year. If you're interested in participating in the beta program, please sign up through our developer portal.</p>
      
      <p class="mb-4">Beta participants will have early access to Soplang 2.0 features and will play a crucial role in shaping the final release through their feedback.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3 text-primary">Compatibility and Migration</h3>
      
      <p class="mb-4">We understand that many of you have existing Soplang codebases, and we're committed to making the transition to Soplang 2.0 as smooth as possible. We're developing comprehensive migration tools and guides to help you upgrade your code with minimal effort.</p>
      
      <p class="mb-4">While there will be some breaking changes to enable the new features, we're working to minimize their impact and provide clear upgrade paths.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3 text-primary">Get Involved</h3>
      
      <p class="mb-4">We believe that the best programming languages are built with input from their communities. If you'd like to contribute to Soplang 2.0, there are several ways to get involved:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Join our GitHub discussions to provide feedback on proposed features</li>
        <li>Participate in the beta program when it launches</li>
        <li>Contribute to the documentation and learning resources</li>
        <li>Help test and report issues during the development phase</li>
      </ul>
      
      <p class="mb-4">We're incredibly excited about the future of Soplang and can't wait to share more details about Soplang 2.0 in the coming months. Stay tuned for more updates!</p>
    `,
  },
  // Other news items would be defined here
];

// Generate metadata for the page
export async function generateMetadata({ params }: { params: { id: string } }) {
  const newsItem = newsItems.find((item) => item.id === params.id);
  
  if (!newsItem) {
    return {
      title: "News Article Not Found - Soplang",
      description: "The requested news article could not be found.",
    };
  }
  
  return {
    title: `${newsItem.title} - Soplang News`,
    description: newsItem.excerpt,
  };
}

export default function NewsDetail({ params }: { params: { id: string } }) {
  const newsItem = newsItems.find((item) => item.id === params.id);
  
  // If the news item doesn't exist, show a 404 page
  if (!newsItem) {
    notFound();
  }
  
  return (
    <div className="bg-[var(--background-color)] min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="mb-2 flex items-center space-x-2">
              <Link
                href="/news"
                className="text-white/80 hover:text-white transition-colors"
              >
                News
              </Link>
              <span className="text-white/60">›</span>
              <span className="text-white/80">{newsItem.category}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {newsItem.title}
            </h1>
            <div className="flex items-center space-x-4 text-sm">
              <span>{newsItem.date}</span>
              <span className="bg-white/20 px-2 py-1 rounded-full">
                {newsItem.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Article Content */}
          <div className="lg:w-3/4">
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              {/* Featured Image */}
              <div className="relative h-80 w-full">
                <Image
                  src={newsItem.image}
                  alt={newsItem.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 75vw"
                />
              </div>
              
              {/* Article Body */}
              <div className="p-8">
                {/* Author Info */}
                {newsItem.author && (
                  <div className="flex items-center mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                      {newsItem.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-bold">{newsItem.author}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {newsItem.authorRole}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Article Content */}
                <div 
                  className="prose prose-lg max-w-none dark:prose-invert"
                  dangerouslySetInnerHTML={{ __html: newsItem.content }}
                />
                
                {/* Tags */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Tags:
                    </span>
                    <a
                      href="#"
                      className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      Soplang 2.0
                    </a>
                    <a
                      href="#"
                      className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      Announcement
                    </a>
                    <a
                      href="#"
                      className="text-sm bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                    >
                      Future
                    </a>
                  </div>
                </div>
                
                {/* Share */}
                <div className="mt-6">
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Share this article:
                  </div>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
            
            {/* Navigation */}
            <div className="mt-8 flex justify-between">
              <Link 
                href="/news" 
                className="flex items-center text-primary hover:underline"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Back to News
              </Link>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/4">
            {/* Related Articles */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold mb-4 text-primary">
                Related News
              </h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors"
                >
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    January 25, 2024
                  </div>
                  <div className="font-medium">
                    Soplang 1.5.0 Released with Enhanced Performance
                  </div>
                </a>
                <a
                  href="#"
                  className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors"
                >
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    January 5, 2024
                  </div>
                  <div className="font-medium">
                    New Learning Resources Available for Soplang Developers
                  </div>
                </a>
                <a
                  href="#"
                  className="block hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors"
                >
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    December 20, 2023
                  </div>
                  <div className="font-medium">
                    Community Contributions Drive Soplang Ecosystem Growth
                  </div>
                </a>
              </div>
            </div>
            
            {/* Stay Updated */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4 text-primary">
                Stay Updated
              </h3>
              <p className="mb-4 text-sm">
                Follow us on X (Twitter) to receive the latest news and updates
                about Soplang.
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
          </div>
        </div>
      </section>
    </div>
  );
} 
