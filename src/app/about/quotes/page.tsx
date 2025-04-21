import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Quotes - Soplang",
  description:
    "What developers and companies are saying about Soplang programming language.",
};

const quotes = [
  {
    text: "Soplang has transformed how we build our backend services. Its simplicity and performance are unmatched.",
    author: "Mr Sharafdin",
    role: "Senior Software Engineer",
    company: "Tech Solutions Inc.",
    image: "/images/testimonials/sharafdin.jpg",
  },
  {
    text: "The learning curve is incredibly smooth. Soplang makes complex programming concepts accessible to everyone.",
    author: "Omar Tood",
    role: "Soplang Creator",
    company: "Innovation Labs",
    image: "/images/testimonials/omar.jpg",
  },
  {
    text: "We've seen a 40% increase in development speed since switching to Soplang. It's now our go-to language for new projects.",
    author: "Ismail Ainte",
    role: "CTO",
    company: "StartUp Hub",
    image: "/images/testimonials/ismail.jpg",
  },
];

const featuredQuotes = [
  {
    text: "Soplang represents the future of programming languages - simple, fast, and developer-friendly.",
    source: "TechDaily",
    link: "https://techdaily.com/soplang-review",
  },
  {
    text: "A game-changer in the programming world. Soplang combines simplicity with powerful performance, making it accessible to Somali developers worldwide.",
    source: "CodeMagazine",
    link: "https://codemagazine.com/soplang",
  },
];

export default function AboutQuotesPage() {
  // Make this page inaccessible
  notFound();
}
