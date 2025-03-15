import Link from 'next/link';
import Image from 'next/image';

const applications = [
  {
    title: "Web Development",
    description: "Build fast, scalable web applications with Soplang's powerful web frameworks and libraries designed with Somali developers in mind.",
    features: [
      "Server-side rendering support",
      "Built-in HTTP server and routing",
      "WebSocket integration",
      "Database ORM support"
    ],
    image: "/images/applications/web-dev.svg",
    link: "/docs/web-development"
  },
  {
    title: "Data Science",
    description: "Process and analyze large datasets efficiently with Soplang's data science tools and libraries, featuring terminology and approaches familiar to Somali speakers.",
    features: [
      "Data manipulation libraries",
      "Statistical analysis tools",
      "Machine learning integration",
      "Data visualization capabilities"
    ],
    image: "/images/applications/data-science.svg",
    link: "/docs/data-science"
  },
  {
    title: "System Administration",
    description: "Automate system tasks and manage infrastructure with Soplang's system administration tools, with documentation available in both English and Somali.",
    features: [
      "Process management",
      "File system operations",
      "Network programming",
      "Shell script integration"
    ],
    image: "/images/applications/system-admin.svg",
    link: "/docs/system-admin"
  }
];

const industries = [
  {
    name: "Finance",
    description: "Used by financial institutions in Somalia and globally for data analysis, algorithmic trading, and risk management.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    name: "Healthcare",
    description: "Powers medical research, patient data analysis, and healthcare system automation in Somali hospitals and clinics.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    )
  },
  {
    name: "Education",
    description: "Used in educational institutions across Somalia and East Africa for teaching programming and building learning platforms.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  }
];

const caseStudies = [
  {
    company: "Tech Solutions Inc.",
    description: "Reduced development time by 40% using Soplang for their microservices architecture.",
    quote: "Soplang's simplicity and performance have transformed how we build and deploy services.",
    author: "Mr Sharafdin",
    role: "Senior Software Engineer"
  },
  {
    company: "DataCorp Analytics",
    description: "Processed big data 30% faster after switching their data pipeline to Soplang.",
    quote: "The performance gains and code readability have made Soplang our go-to language for data processing.",
    author: "Omar Tood",
    role: "Lead Data Scientist"
  },
  {
    company: "EduTech Platforms",
    description: "Built a scalable e-learning platform serving millions of students using Soplang.",
    quote: "Soplang's ecosystem made it easy to build and maintain our growing platform.",
    author: "Ismail Ainte",
    role: "CTO"
  }
];

export default function ApplicationsPage() {
  return (
    <div className="container-custom py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Applications of Soplang
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            From web development to data science, discover how Soplang is powering
            modern applications across different domains.
          </p>
        </div>

        {/* Main Applications */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <div className="mb-4 h-48 relative">
                  <Image
                    src={app.image}
                    alt={app.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {app.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {app.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {app.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                      <svg className="w-4 h-4 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={app.link}
                  className="text-primary hover:underline inline-flex items-center"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Industries Using Soplang
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <div className="text-primary mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Case Studies */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {study.company}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {study.description}
                </p>
                <blockquote className="border-l-4 border-primary pl-4 mb-4">
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    "{study.quote}"
                  </p>
                </blockquote>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <p className="font-semibold">{study.author}</p>
                  <p>{study.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Ready to Build with Soplang?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Join thousands of developers and companies using Soplang to build amazing applications.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/docs/getting-started"
                className="btn-primary"
              >
                Get Started
              </Link>
              <Link
                href="/community"
                className="btn-secondary"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 