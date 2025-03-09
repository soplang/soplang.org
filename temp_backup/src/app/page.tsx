import Link from "next/link";
import Image from "next/image";

// Sample code snippet for the hero section
const codeSnippet = `# Soplang example
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Print the first 10 Fibonacci numbers
for i in range(10):
    print(fibonacci(i))
`;

// Features section data
const features = [
  {
    title: "Simple & Intuitive",
    description:
      "Soplang is designed to be easy to learn and use, with a clean syntax inspired by Python.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "High Performance",
    description:
      "Built with performance in mind, Soplang offers fast execution times and efficient memory usage.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Cross-Platform",
    description:
      "Run your Soplang code on Windows, macOS, Linux, and more with consistent behavior across platforms.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    title: "Rich Ecosystem",
    description:
      "Access a growing library of packages and tools to enhance your development experience.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
  },
];

// Testimonials data
const testimonials = [
  {
    content:
      "Soplang has transformed how I approach programming. Its intuitive syntax and powerful features make development a joy.",
    author: "Mr Sharafdin",
    role: "Senior Developer",
  },
  {
    content:
      "As someone who teaches programming, I find Soplang to be the perfect language for beginners while still being powerful enough for advanced projects.",
    author: "Omar Tood",
    role: "Computer Science Professor",
  },
  {
    content:
      "The performance improvements we've seen after switching to Soplang are remarkable. Our data processing tasks run 30% faster now.",
    author: "Ismail Ainte",
    role: "CTO, TechInnovate",
  },
];

export default function Home() {
  return (
    <div suppressHydrationWarning>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-16 pb-24">
        <div className="container-custom" suppressHydrationWarning>
          <div className="flex flex-col lg:flex-row items-center" suppressHydrationWarning>
            <div className="lg:w-1/2 lg:pr-12" suppressHydrationWarning>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                A Modern Programming Language Inspired by{" "}
                <span className="text-primary">Python</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 dark:text-gray-300">
                Soplang combines the simplicity of Python with enhanced performance
                and modern language features to make coding more enjoyable and
                productive.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4" suppressHydrationWarning>
                <Link href="/downloads" className="btn-primary text-center">
                  Download Soplang
                </Link>
                <Link
                  href="/docs/getting-started"
                  className="bg-white dark:bg-gray-800 text-primary border border-primary px-4 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0" suppressHydrationWarning>
              <div className="bg-gray-900 dark:bg-gray-800 rounded-lg shadow-xl p-4 text-white overflow-hidden" suppressHydrationWarning>
                <div className="flex items-center space-x-2 mb-4" suppressHydrationWarning>
                  <div className="w-3 h-3 rounded-full bg-red-500" suppressHydrationWarning></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500" suppressHydrationWarning></div>
                  <div className="w-3 h-3 rounded-full bg-green-500" suppressHydrationWarning></div>
                  <div className="ml-2 text-sm text-gray-400" suppressHydrationWarning>main.so</div>
                </div>
                <pre className="font-mono text-sm overflow-x-auto">
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom" suppressHydrationWarning>
          <div className="text-center mb-16" suppressHydrationWarning>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Why Choose Soplang?
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Designed with developers in mind, Soplang offers a unique combination
              of simplicity, performance, and modern features.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" suppressHydrationWarning>
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover:shadow-md transition-shadow"
                suppressHydrationWarning
              >
                <div className="w-12 h-12 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center text-primary mb-4" suppressHydrationWarning>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom" suppressHydrationWarning>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" suppressHydrationWarning>
            <div suppressHydrationWarning>
              <div className="text-4xl font-bold text-white" suppressHydrationWarning>10K+</div>
              <div className="mt-2 text-blue-100" suppressHydrationWarning>Downloads</div>
            </div>
            <div suppressHydrationWarning>
              <div className="text-4xl font-bold text-white" suppressHydrationWarning>5K+</div>
              <div className="mt-2 text-blue-100" suppressHydrationWarning>GitHub Stars</div>
            </div>
            <div suppressHydrationWarning>
              <div className="text-4xl font-bold text-white" suppressHydrationWarning>500+</div>
              <div className="mt-2 text-blue-100" suppressHydrationWarning>Packages</div>
            </div>
            <div suppressHydrationWarning>
              <div className="text-4xl font-bold text-white" suppressHydrationWarning>50+</div>
              <div className="mt-2 text-blue-100" suppressHydrationWarning>Contributors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container-custom" suppressHydrationWarning>
          <div className="text-center mb-16" suppressHydrationWarning>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              What Developers Say
            </h2>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Hear from developers who have made Soplang a part of their toolkit.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8" suppressHydrationWarning>
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
                suppressHydrationWarning
              >
                <div className="text-gray-600 dark:text-gray-300 mb-4" suppressHydrationWarning>
                  "{testimonial.content}"
                </div>
                <div className="font-semibold text-gray-900 dark:text-white" suppressHydrationWarning>
                  {testimonial.author}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400" suppressHydrationWarning>
                  {testimonial.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container-custom" suppressHydrationWarning>
          <div className="bg-primary rounded-lg p-8 md:p-12 shadow-lg" suppressHydrationWarning>
            <div className="text-center" suppressHydrationWarning>
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Get Started with Soplang?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Download Soplang today and join thousands of developers building
                amazing applications with this powerful language.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4" suppressHydrationWarning>
                <Link
                  href="/downloads"
                  className="bg-white text-primary font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition-colors text-center"
                >
                  Download Now
                </Link>
                <Link
                  href="/docs"
                  className="bg-transparent text-white border border-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors text-center"
                >
                  Read the Docs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 