import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Success Stories - Soplang',
  description: 'Read success stories from developers, educators, and companies using Soplang in real-world applications.',
};

// Success story data
const successStories = [
  {
    id: 1,
    name: 'Mr Sharafdin',
    role: 'Senior Software Engineer',
    company: 'TechInnovate',
    image: '/images/testimonials/mrsharafdin.svg',
    quote: 'Soplang has transformed how our team approaches rapid prototyping. The intuitive syntax and powerful features allow us to build and test ideas faster than ever before.',
    story: 'Our team was struggling with development bottlenecks when building new features. After adopting Soplang, we reduced our prototype development time by 40%. The clean syntax and excellent documentation in both English and Somali made the transition incredibly smooth for our diverse team.',
  },
  {
    id: 2,
    name: 'Omar Tood',
    role: 'Computer Science Professor',
    company: 'University of Technology',
    image: '/images/testimonials/omartood.svg',
    quote: 'Teaching programming fundamentals has never been easier. Soplang provides the perfect balance of simplicity for beginners while offering advanced capabilities for more experienced students.',
    story: 'I\'ve been teaching programming for over 15 years, and Soplang has revolutionized my introductory courses. Students grasp concepts more quickly, and the error messages are actually helpful! The community resources have been invaluable for creating engaging curriculum materials.',
  },
  {
    id: 3,
    name: 'Ismail Ainte',
    role: 'CTO',
    company: 'DataFlow Systems',
    image: '/images/testimonials/ismailainte.svg',
    quote: 'Soplang\'s performance in data processing applications exceeded our expectations. We\'ve seen significant improvements in both development speed and runtime efficiency.',
    story: 'We needed a language that could handle complex data transformations while remaining maintainable by our growing team. Soplang\'s elegant syntax and powerful data handling capabilities have become central to our data pipeline architecture. The language\'s performance optimizations have allowed us to process larger datasets with fewer resources.',
  },
];

export default function SuccessStories() {
  return (
    <div className="bg-[var(--background-color)] min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Success Stories</h1>
          <p className="text-xl max-w-3xl">
            Discover how developers, educators, and companies are using Soplang to solve real-world problems and build amazing applications.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container-custom py-12">
        <div className="grid grid-cols-1 gap-12">
          {/* Featured Stories */}
          {successStories.map((story, index) => (
            <div 
              key={story.id} 
              className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } md:flex`}
            >
              {/* Image Container */}
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white">
                    <Image 
                      src={story.image} 
                      alt={story.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8 md:w-2/3">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-primary mb-1">{story.name}</h2>
                  <p className="text-gray-600 dark:text-gray-400">{story.role} at {story.company}</p>
                </div>
                
                <blockquote className="italic text-lg mb-6 border-l-4 border-primary pl-4 py-2">
                  "{story.quote}"
                </blockquote>
                
                <p className="mb-6">{story.story}</p>
                
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Was this story helpful?
                  </span>
                  <button className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    Yes
                  </button>
                  <button className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
                    No
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Share Your Soplang Success Story</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Are you using Soplang to build something amazing? We'd love to hear about it and potentially feature your story on our website.
          </p>
          <Link 
            href="/write" 
            className="btn-primary inline-block"
          >
            Submit Your Story
          </Link>
        </div>
      </section>

      {/* Related Resources */}
      <section className="container-custom py-12">
        <h2 className="text-2xl font-bold mb-6">Explore More</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-primary">Documentation</h3>
            <p className="mb-4">Learn how to use Soplang with our comprehensive documentation and tutorials.</p>
            <Link href="/docs" className="text-primary hover:underline">
              View Documentation →
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-primary">Community</h3>
            <p className="mb-4">Join the Soplang community to connect with other developers and share your experiences.</p>
            <Link href="/community" className="text-primary hover:underline">
              Join Community →
            </Link>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-3 text-primary">Blog</h3>
            <p className="mb-4">Stay updated with the latest news, releases, and best practices for Soplang.</p>
            <Link href="/blog" className="text-primary hover:underline">
              Read Blog →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 