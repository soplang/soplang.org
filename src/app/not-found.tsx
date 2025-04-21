import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-custom py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Return to Home
          </Link>
          <Link href="/docs" className="btn-secondary">
            View Documentation
          </Link>
        </div>

        <div className="mt-12 pt-12 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Looking for something specific?
          </h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/docs" className="text-primary hover:underline">
              Documentation
            </Link>
            <Link href="/blog" className="text-primary hover:underline">
              Blog
            </Link>
            <Link href="/downloads" className="text-primary hover:underline">
              Downloads
            </Link>
            <Link href="/community" className="text-primary hover:underline">
              Community
            </Link>
            <Link href="/about" className="text-primary hover:underline">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
