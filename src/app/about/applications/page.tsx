import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const applications = [
  {
    title: "Web Development",
    description:
      "Build fast, scalable web applications with Soplang's powerful web frameworks and libraries designed with Somali developers in mind.",
    features: [
      "Server-side rendering support",
      "Built-in HTTP server and routing",
      "WebSocket integration",
      "Database ORM support",
    ],
    image: "/images/applications/web-dev.svg",
    link: "/docs/web-development",
  },
  {
    title: "Data Science",
    description:
      "Process and analyze large datasets efficiently with Soplang's data science tools and libraries, featuring terminology and approaches familiar to Somali speakers.",
    features: [
      "Data manipulation libraries",
      "Statistical analysis tools",
      "Machine learning integration",
      "Data visualization capabilities",
    ],
    image: "/images/applications/data-science.svg",
    link: "/docs/data-science",
  },
  {
    title: "System Administration",
    description:
      "Automate system tasks and manage infrastructure with Soplang's system administration tools, with documentation available in both English and Somali.",
    features: [
      "Process management",
      "File system operations",
      "Network programming",
      "Shell script integration",
    ],
    image: "/images/applications/system-admin.svg",
    link: "/docs/system-admin",
  },
];

const industries = [
  {
    name: "Finance",
    description:
      "Used by financial institutions in Somalia and globally for data analysis, algorithmic trading, and risk management.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    name: "Healthcare",
    description:
      "Powers medical research, patient data analysis, and healthcare system automation in Somali hospitals and clinics.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    name: "Education",
    description:
      "Used in educational institutions across Somalia and East Africa for teaching programming and building learning platforms.",
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
  },
];

const caseStudies = [
  {
    company: "Tech Solutions Inc.",
    description:
      "Reduced development time by 40% using Soplang for their microservices architecture.",
    quote:
      "Soplang's simplicity and performance have transformed how we build and deploy services.",
    author: "Mr Sharafdin",
    role: "Senior Software Engineer",
  },
  {
    company: "DataCorp Analytics",
    description:
      "Processed big data 30% faster after switching their data pipeline to Soplang.",
    quote:
      "The performance gains and code readability have made Soplang our go-to language for data processing.",
    author: "Omar Tood",
    role: "Lead Data Scientist",
  },
  {
    company: "EduTech Platforms",
    description:
      "Built a scalable e-learning platform serving millions of students using Soplang.",
    quote:
      "Soplang's ecosystem made it easy to build and maintain our growing platform.",
    author: "Ismail Ainte",
    role: "CTO",
  },
];

export default function AboutApplicationsPage() {
  // Make this page inaccessible
  notFound();
}
