import Link from "next/link";
import Image from "next/image";
import CodeWindow from "../components/CodeWindow";

// Sample code snippet for the hero section
const codeSnippet = `# Soplang example

door x = 10

haddii (x > 5) {
    qor("X waa weyn yahay!")
} haddii_kale (x == 5) {
    qor("X waa shan!")
} haddii_kalena {
    qor("X waa yar yahay!")
}

howl salaam(magac) {
    qor("Salaan, " + magac)
}

salaam("Sharafdin")
`;

// Latest news items
const latestNews = [
  {
    title: "Soplang 1.2.0 Released",
    date: "October 15, 2023",
    url: "/blog/release-notes-v1.2.0",
  },
  {
    title: "Soplang Developer Survey Results",
    date: "September 28, 2023",
    url: "/blog/developer-survey-results",
  },
  {
    title: "Upcoming Soplang Conference 2023",
    date: "September 15, 2023",
    url: "/events/soplang-conference-2023",
  },
];

// Upcoming events
const upcomingEvents = [
  {
    title: "Soplang Conference 2023",
    date: "November 15-17, 2023",
    location: "Virtual Event",
    url: "/events/soplang-conference-2023",
  },
  {
    title: "Monthly Community Call",
    date: "October 26, 2023",
    location: "Discord",
    url: "/events/monthly-community-call",
  },
];

// Success stories
const successStories = [
  {
    company: "TechInnovate",
    quote: "Soplang has transformed our data processing pipeline, reducing processing time by 30%.",
    author: "Ismail Ainte, CTO",
    url: "/success-stories/techinnovate",
  },
  {
    company: "EduTech Solutions",
    quote: "We use Soplang to teach programming concepts. Its clean syntax makes it perfect for beginners.",
    author: "Omar Tood, Lead Instructor",
    url: "/success-stories/edutech",
  },
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900" suppressHydrationWarning>
      {/* Hero Section */}
      <section className="bg-[var(--primary-color)] text-white py-12">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 lg:pr-12">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
                Soplang
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo!
              </h2>
              <p className="text-xl mb-6">
                Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/downloads" className="bg-white text-[var(--primary-color)] font-bold px-6 py-3 rounded hover:bg-gray-100 transition-colors">
                  Download Soplang
                </Link>
                <Link href="/docs/getting-started" className="bg-[var(--secondary-color)] text-gray-900 font-bold px-6 py-3 rounded hover:bg-opacity-90 transition-colors">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 mt-8 lg:mt-0">
              <CodeWindow code={codeSnippet} title="main.so" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content Area */}
            <div className="lg:w-2/3">
              {/* Introduction */}
              <div className="soplang-box">
                <h2 className="soplang-header">What is Soplang?</h2>
                <p className="mb-4">
                  Soplang is the first Somali programming language, designed with a focus on code readability and developer productivity. By using Somali keywords and syntax, it makes programming accessible to Somali speakers worldwide who may face language barriers with traditional programming languages.
                </p>
                <p className="mb-4">
                  Whether you're a beginner or an experienced developer, Soplang provides a clean and intuitive syntax that makes it easy to express concepts in fewer lines of code while using your native language.
                </p>
                <p>
                  With Soplang, you can "Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo!" (Build software using your mother tongue!)
                </p>
              </div>

              {/* Features */}
              <div className="soplang-box">
                <h2 className="soplang-header">Key Features</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Somali Keywords & Syntax</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Program using familiar Somali words like "door" (function), "qor" (print), and "haddii" (if), making coding intuitive for Somali speakers.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Bilingual Documentation</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Comprehensive documentation available in both Somali and English, ensuring accessibility for all users.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Cross-Platform</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Runs on Windows, macOS, Linux, and more with consistent behavior across platforms.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">Cultural Integration</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      Examples and tutorials incorporate Somali cultural contexts, making learning more relevant and engaging.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/about/features" className="soplang-link">
                    Learn more about Soplang features →
                  </Link>
                </div>
              </div>

              {/* Getting Started */}
              <div className="soplang-box">
                <h2 className="soplang-header">Getting Started</h2>
                <p className="mb-4">
                  Ready to dive in? Here's how to get started with Soplang:
                </p>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  <li>
                    <Link href="/downloads" className="soplang-link">
                      Download and install Soplang
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/tutorial" className="soplang-link">
                      Follow the beginner's tutorial
                    </Link>
                  </li>
                  <li>
                    <Link href="/docs/reference" className="soplang-link">
                      Explore the language reference
                    </Link>
                  </li>
                  <li>
                    <Link href="/community" className="soplang-link">
                      Join the community
                    </Link>
                  </li>
                </ol>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Quick Installation</h3>
                  <CodeWindow 
                    code={`# On macOS/Linux
$ curl -sSL https://install.soplang.org | bash

# On Windows (PowerShell)
> iwr -useb https://install.soplang.org/win | iex`} 
                    title="terminal" 
                  />
                </div>
              </div>

              {/* Success Stories */}
              <div className="soplang-box">
                <h2 className="soplang-header">Success Stories</h2>
                <div className="space-y-4">
                  {successStories.map((story, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
                      <p className="italic mb-2">"{story.quote}"</p>
                      <div className="flex justify-between items-center">
                        <p className="font-medium text-gray-900 dark:text-white">
                          {story.author}, {story.company}
                        </p>
                        <Link href={story.url} className="soplang-link text-sm">
                          Read more
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <Link href="/success-stories" className="soplang-link">
                    View all success stories →
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              {/* Latest Version */}
              <div className="soplang-box">
                <h2 className="sidebar-header">Latest Version</h2>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-[var(--primary-color)]">Soplang 1.2.0</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Released: October 15, 2023</div>
                </div>
                <Link href="/downloads" className="btn-primary w-full text-center block">
                  Download Now
                </Link>
                <div className="mt-2 text-center">
                  <Link href="/blog/release-notes-v1.2.0" className="text-sm soplang-link">
                    Release Notes
                  </Link>
                </div>
              </div>

              {/* Latest News */}
              <div className="soplang-box">
                <h2 className="sidebar-header">Latest News</h2>
                <ul className="sidebar-list">
                  {latestNews.map((item, index) => (
                    <li key={index}>
                      <Link href={item.url} className="sidebar-item">
                        {item.title}
                      </Link>
                      <div className="text-xs text-gray-500 dark:text-gray-500">
                        {item.date}
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href="/blog" className="soplang-link text-sm">
                  More news →
                </Link>
              </div>

              {/* Upcoming Events */}
              <div className="soplang-box">
                <h2 className="sidebar-header">Upcoming Events</h2>
                <ul className="sidebar-list">
                  {upcomingEvents.map((event, index) => (
                    <li key={index}>
                      <Link href={event.url} className="sidebar-item">
                        {event.title}
                      </Link>
                      <div className="text-xs text-gray-500 dark:text-gray-500">
                        {event.date} • {event.location}
                      </div>
                    </li>
                  ))}
                </ul>
                <Link href="/events" className="soplang-link text-sm">
                  All events →
                </Link>
              </div>

              {/* Community */}
              <div className="soplang-box">
                <h2 className="sidebar-header">Join the Community</h2>
                <p className="mb-4 text-sm">
                  Connect with other Soplang developers and get involved in the community.
                </p>
                <ul className="space-y-2">
                  <li>
                    <a href="https://github.com/soplang" className="soplang-link" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://discord.gg/soplang" className="soplang-link" target="_blank" rel="noopener noreferrer">
                      Discord
                    </a>
                  </li>
                  <li>
                    <Link href="/community/forums" className="soplang-link">
                      Forums
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/mailing-lists" className="soplang-link">
                      Mailing Lists
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 