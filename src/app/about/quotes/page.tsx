import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Quotes - Soplang',
  description: 'What developers and companies are saying about Soplang programming language.',
};

const quotes = [
  {
    text: "Soplang has transformed how we build our backend services. Its simplicity and performance are unmatched.",
    author: "Mr Sharafdin",
    role: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    image: "/images/testimonials/sharafdin.jpg"
  },
  {
    text: "The learning curve is incredibly smooth. Soplang makes complex programming concepts accessible to everyone.",
    author: "Omar Tood",
    role: "Lead Developer",
    company: "Innovation Labs",
    image: "/images/testimonials/omar.jpg"
  },
  {
    text: "We've seen a 40% increase in development speed since switching to Soplang. It's now our go-to language for new projects.",
    author: "Ismail Ainte",
    role: "CTO",
    company: "StartUp Hub",
    image: "/images/testimonials/ismail.jpg"
  },
];

const featuredQuotes = [
  {
    text: "Soplang represents the future of programming languages - simple, fast, and developer-friendly.",
    source: "TechDaily",
    link: "https://techdaily.com/soplang-review"
  },
  {
    text: "A game-changer in the programming world. Soplang combines simplicity with powerful performance, making it accessible to Somali developers worldwide.",
    source: "CodeMagazine",
    link: "https://codemagazine.com/soplang"
  }
];

export default function QuotesPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          What People Are Saying About Soplang
        </h1>

        {/* Featured Quotes */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Featured in Media
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredQuotes.map((quote, index) => (
              <div 
                key={index}
                className="bg-primary/5 dark:bg-primary/10 rounded-lg p-6 relative"
              >
                <div className="absolute top-4 right-4 text-6xl text-primary/10">"</div>
                <blockquote className="relative z-10">
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 italic">
                    "{quote.text}"
                  </p>
                  <footer>
                    <a 
                      href={quote.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline font-medium"
                    >
                      {quote.source} →
                    </a>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>

        {/* Developer Testimonials */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Developer Testimonials
          </h2>
          <div className="space-y-12">
            {quotes.map((quote, index) => (
              <div 
                key={index}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="w-32 h-32 relative rounded-full overflow-hidden border-2 border-primary/20">
                  <Image
                    src={quote.image}
                    alt={quote.author}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <blockquote>
                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-4 italic">
                      "{quote.text}"
                    </p>
                    <footer>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {quote.author}
                      </div>
                      <div className="text-gray-600 dark:text-gray-400">
                        {quote.role} at {quote.company}
                      </div>
                    </footer>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Join the Community
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Experience why developers love Soplang. Get started today and be part of our growing community.
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="/docs/getting-started" 
              className="btn-primary"
            >
              Get Started
            </a>
            <a 
              href="/community" 
              className="btn-secondary"
            >
              Join Community
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 