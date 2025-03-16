'use client';

import { useState } from 'react';
import Link from 'next/link';

// Define TypeScript interfaces
interface Question {
  question: string;
  answer: string;
}

interface CategoryData {
  title: string;
  questions: Question[];
}

interface FAQData {
  [key: string]: CategoryData;
}

// FAQ data organized by categories
const faqData: FAQData = {
  general: {
    title: "General",
    questions: [
      {
        question: "What is Soplang?",
        answer: "Soplang is a modern Somali programming language designed for simplicity, readability, and performance. It's the first programming language developed with Somali developers in mind, offering intuitive syntax and powerful features for a wide range of applications."
      },
      {
        question: "Is Soplang free to use?",
        answer: "Yes, Soplang is completely free and open-source. It's released under the MIT license, which allows you to use, modify, and distribute it for both personal and commercial projects."
      },
      {
        question: "Who created Soplang?",
        answer: "Soplang was created by a team of Somali developers who wanted to create a programming language that reflects Somali thinking patterns and problem-solving approaches. The Soplang Software Foundation now maintains and develops the language."
      },
      {
        question: "What makes Soplang different from other programming languages?",
        answer: "Soplang offers a unique combination of intuitive syntax inspired by Somali language patterns, strong performance optimizations, built-in concurrency support, and a comprehensive standard library. It's designed to be easy to learn while still being powerful enough for professional use."
      }
    ]
  },
  installation: {
    title: "Installation & Setup",
    questions: [
      {
        question: "How do I install Soplang?",
        answer: "Soplang can be installed through various methods depending on your operating system. For Windows, macOS, and Linux, you can download the installer from our downloads page. You can also use package managers like npm (Node.js), Homebrew (macOS), or Chocolatey (Windows)."
      },
      {
        question: "What are the system requirements for Soplang?",
        answer: "Soplang has minimal system requirements. It runs on Windows 10 or later, macOS 10.15 or later, and most modern Linux distributions. It requires at least 4GB of RAM and 500MB of disk space."
      },
      {
        question: "How do I update Soplang to the latest version?",
        answer: "If you installed Soplang using a package manager, you can update it using the same tool (e.g., 'npm update -g soplang'). If you installed it manually, you can download the latest version from our website and run the installer."
      },
      {
        question: "Can I have multiple versions of Soplang installed?",
        answer: "Yes, Soplang supports multiple installations through version management tools. You can use tools like 'sopenv' to manage different Soplang versions for different projects."
      }
    ]
  },
  language: {
    title: "Language Features",
    questions: [
      {
        question: "Is Soplang statically or dynamically typed?",
        answer: "Soplang uses a dynamic type system with optional static type hints. This gives you the flexibility of dynamic typing with the benefits of static type checking when needed."
      },
      {
        question: "Does Soplang support object-oriented programming?",
        answer: "Yes, Soplang fully supports object-oriented programming with classes, inheritance, polymorphism, and encapsulation. It also supports modern OOP features like mixins and traits."
      },
      {
        question: "How does Soplang handle concurrency?",
        answer: "Soplang has built-in support for concurrency through async/await syntax. It also includes a lightweight threading model and support for parallel processing."
      },
      {
        question: "What paradigms does Soplang support?",
        answer: "Soplang is a multi-paradigm language supporting procedural, object-oriented, and functional programming styles. You can choose the approach that best fits your problem or combine different paradigms as needed."
      }
    ]
  },
  ecosystem: {
    title: "Ecosystem & Libraries",
    questions: [
      {
        question: "What package manager does Soplang use?",
        answer: "Soplang uses 'sop' as its official package manager. It allows you to easily install, update, and manage dependencies for your projects."
      },
      {
        question: "Are there many libraries available for Soplang?",
        answer: "Yes, Soplang has a growing ecosystem of libraries. The standard library is comprehensive, and there are many third-party packages available for web development, data science, machine learning, and more."
      },
      {
        question: "Can I use libraries from other languages with Soplang?",
        answer: "Soplang has excellent interoperability with C, C++, and JavaScript. You can use libraries from these languages through Soplang's foreign function interface (FFI) or through dedicated bindings."
      },
      {
        question: "How do I publish my own Soplang package?",
        answer: "You can publish your Soplang package to the Soplang Package Index (SPI) using the 'sop publish' command. Our documentation provides a step-by-step guide for creating and publishing packages."
      }
    ]
  },
  performance: {
    title: "Performance & Optimization",
    questions: [
      {
        question: "How does Soplang's performance compare to other languages?",
        answer: "Soplang typically offers better performance than many interpreted languages while maintaining an intuitive syntax. It provides a good balance between development speed and runtime performance."
      },
      {
        question: "Does Soplang have a JIT compiler?",
        answer: "Yes, Soplang uses a Just-In-Time (JIT) compiler that optimizes code at runtime. This gives it performance advantages over purely interpreted languages."
      },
      {
        question: "How can I optimize my Soplang code?",
        answer: "Soplang provides several tools for optimization, including profiling tools, performance hints, and compiler directives. Our documentation includes a comprehensive guide on performance optimization."
      },
      {
        question: "Is Soplang suitable for high-performance computing?",
        answer: "While not specifically designed for HPC, Soplang can be used for computationally intensive tasks. For extreme performance requirements, you can use Soplang's C/C++ interoperability to implement critical sections in faster languages."
      }
    ]
  },
  community: {
    title: "Community & Support",
    questions: [
      {
        question: "Where can I get help with Soplang?",
        answer: "You can get help through our official documentation, community forums, Discord server, and Stack Overflow (tag: soplang). For more direct support, you can also reach out to our community support team."
      },
      {
        question: "How can I contribute to Soplang?",
        answer: "You can contribute to Soplang in many ways: reporting bugs, improving documentation, developing new features, or creating libraries. Check our contribution guidelines on GitHub to get started."
      },
      {
        question: "Are there Soplang events or conferences?",
        answer: "Yes, we organize an annual SoplangCon conference and regular online meetups. Many local programming communities also host Soplang-specific events. Check our community page for upcoming events."
      },
      {
        question: "How can I stay updated on Soplang news?",
        answer: "You can follow us on Twitter (@soplang), join our Discord server, subscribe to our newsletter, or follow our blog for the latest updates and announcements."
      }
    ]
  }
};

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Add type for filtered questions
  interface FilteredQuestion extends Question {
    category: keyof typeof faqData;
  }

  // Filter questions based on search query and active category
  const filteredQuestions: FilteredQuestion[] = Object.entries(faqData).flatMap(([category, data]) => {
    return data.questions
      .filter(q => 
        (activeCategory === 'all' || activeCategory === category) &&
        (searchQuery === '' || 
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()))
      )
      .map(q => ({ ...q, category }));
  });

  return (
    <div className="container-custom py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about Soplang
          </p>
        </div>

        {/* Search */}
        <div className="mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for questions..."
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button 
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setSearchQuery('')}
            >
              {searchQuery && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex space-x-2 min-w-max pb-2">
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            {Object.entries(faqData).map(([key, data]) => (
              <button
                key={key}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === key
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
                onClick={() => setActiveCategory(key)}
              >
                {data.title}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        {filteredQuestions.length > 0 ? (
          <div className="space-y-6">
            {filteredQuestions.map((item, index) => (
              <details
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
                open={index === 0}
              >
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                    {item.question}
                  </h3>
                  <span className="text-primary transition-transform group-open:rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.answer}
                  </p>
                  {activeCategory === 'all' && (
                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
                        {faqData[item.category].title}
                      </span>
                    </div>
                  )}
                </div>
              </details>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              No questions found matching your search.
            </p>
            <button
              className="text-primary hover:underline"
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Still Have Questions */}
        <div className="mt-16 bg-primary/5 dark:bg-primary/10 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Still Have Questions?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Can't find the answer you're looking for? Please reach out to our support team.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/about/help"
              className="btn-primary"
            >
              Visit Help Center
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
  );
} 