import Link from 'next/link';

export default function NewsNotFound() {
  return (
    <div className="bg-[var(--background-color)] min-h-screen">
      <div className="container-custom py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">News Article Not Found</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          We couldn't find the news article you're looking for. It may have been moved, deleted, or never existed.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/news" 
            className="btn-primary"
          >
            Browse All News
          </Link>
          <Link 
            href="/" 
            className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 