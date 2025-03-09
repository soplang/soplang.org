import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soplang Community Forums',
  description: 'Join the Soplang community forums to ask questions, share knowledge, and connect with other Soplang developers.',
};

export default function ForumsPage() {
  // Sample forum categories
  const categories = [
    {
      id: 'general',
      name: 'General Discussion',
      description: 'General discussions about Soplang programming language',
      topics: 342,
      posts: 1205,
      icon: '💬',
    },
    {
      id: 'beginners',
      name: 'Beginners',
      description: 'Questions and discussions for those new to Soplang',
      topics: 523,
      posts: 2187,
      icon: '🔰',
    },
    {
      id: 'help',
      name: 'Help & Support',
      description: 'Get help with Soplang programming issues and bugs',
      topics: 687,
      posts: 3421,
      icon: '🆘',
    },
    {
      id: 'advanced',
      name: 'Advanced Topics',
      description: 'Discussions about advanced Soplang features and techniques',
      topics: 156,
      posts: 892,
      icon: '🧠',
    },
    {
      id: 'libraries',
      name: 'Libraries & Packages',
      description: 'Discussions about Soplang libraries, packages, and extensions',
      topics: 234,
      posts: 1103,
      icon: '📦',
    },
    {
      id: 'showcase',
      name: 'Project Showcase',
      description: 'Share and discuss your Soplang projects',
      topics: 178,
      posts: 945,
      icon: '🌟',
    },
    {
      id: 'jobs',
      name: 'Jobs & Opportunities',
      description: 'Job postings and opportunities related to Soplang',
      topics: 87,
      posts: 342,
      icon: '💼',
    },
    {
      id: 'announcements',
      name: 'Announcements',
      description: 'Official announcements about Soplang',
      topics: 45,
      posts: 198,
      icon: '📢',
    },
  ];

  // Sample recent topics
  const recentTopics = [
    {
      id: 1,
      title: 'How to implement recursive functions in Soplang?',
      author: 'Omar Tood',
      category: 'beginners',
      replies: 12,
      views: 234,
      lastActivity: '2 hours ago',
    },
    {
      id: 2,
      title: 'Announcing Soplang 1.2.0 - New features and improvements',
      author: 'Mr Sharafdin',
      category: 'announcements',
      replies: 28,
      views: 876,
      lastActivity: '1 day ago',
      pinned: true,
    },
    {
      id: 3,
      title: 'Best practices for error handling in Soplang',
      author: 'Ismail Ainte',
      category: 'advanced',
      replies: 15,
      views: 342,
      lastActivity: '3 days ago',
    },
    {
      id: 4,
      title: 'New data visualization library for Soplang',
      author: 'Omar Tood',
      category: 'libraries',
      replies: 7,
      views: 189,
      lastActivity: '5 days ago',
    },
    {
      id: 5,
      title: 'Looking for Soplang developers for remote project',
      author: 'Mr Sharafdin',
      category: 'jobs',
      replies: 23,
      views: 567,
      lastActivity: '1 week ago',
    },
  ];

  return (
    <div className="container-custom py-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
              Soplang Community Forums
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Connect with other Soplang developers, ask questions, and share knowledge
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Link href="/community/forums/new-topic" className="btn-primary">
              Start New Topic
            </Link>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search forums..."
              className="w-full px-4 py-3 border border-[var(--border-color)] rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Forum Stats */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-[var(--border-color)] p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-primary">2,252</p>
              <p className="text-gray-600 dark:text-gray-400">Topics</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">10,293</p>
              <p className="text-gray-600 dark:text-gray-400">Posts</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">5,487</p>
              <p className="text-gray-600 dark:text-gray-400">Members</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">Omar Tood</p>
              <p className="text-gray-600 dark:text-gray-400">Newest Member</p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <div className="space-y-4 mb-12">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-[var(--border-color)] hover:shadow-md transition-shadow"
            >
              <Link
                href={`/community/forums/${category.id}`}
                className="block p-4"
              >
                <div className="flex items-start">
                  <div className="text-3xl mr-4">{category.icon}</div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-primary">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                      {category.description}
                    </p>
                    <div className="flex text-xs text-gray-500 dark:text-gray-500">
                      <span className="mr-4">{category.topics} topics</span>
                      <span>{category.posts} posts</span>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Recent Topics */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Recent Topics</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-[var(--border-color)] overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Topic
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden md:table-cell">
                      Category
                    </th>
                    <th className="py-3 px-4 text-center text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden md:table-cell">
                      Replies
                    </th>
                    <th className="py-3 px-4 text-center text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider hidden md:table-cell">
                      Views
                    </th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Last Activity
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {recentTopics.map((topic) => (
                    <tr key={topic.id} className="hover:bg-gray-50 dark:hover:bg-gray-750">
                      <td className="py-4 px-4">
                        <div>
                          <Link
                            href={`/community/forums/${topic.category}/${topic.id}`}
                            className="font-medium text-primary hover:underline flex items-center"
                          >
                            {topic.pinned && (
                              <span className="mr-2 text-yellow-500">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                  />
                                </svg>
                              </span>
                            )}
                            {topic.title}
                          </Link>
                          <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            by {topic.author}
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4 hidden md:table-cell">
                        <Link
                          href={`/community/forums/${topic.category}`}
                          className="inline-block px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs text-gray-700 dark:text-gray-300"
                        >
                          {categories.find((c) => c.id === topic.category)?.name || topic.category}
                        </Link>
                      </td>
                      <td className="py-4 px-4 text-center text-gray-500 dark:text-gray-400 hidden md:table-cell">
                        {topic.replies}
                      </td>
                      <td className="py-4 px-4 text-center text-gray-500 dark:text-gray-400 hidden md:table-cell">
                        {topic.views}
                      </td>
                      <td className="py-4 px-4 text-sm text-gray-500 dark:text-gray-400">
                        {topic.lastActivity}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Link
              href="/community/forums/all-topics"
              className="text-primary hover:underline"
            >
              View All Topics →
            </Link>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Community Guidelines</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Be respectful and kind to other community members</li>
            <li>Stay on topic and avoid off-topic discussions</li>
            <li>Do not spam or post promotional content without permission</li>
            <li>Use code formatting when sharing code snippets</li>
            <li>Search before posting to avoid duplicate topics</li>
            <li>Report inappropriate content to moderators</li>
          </ul>
          <div className="mt-4">
            <Link
              href="/community/guidelines"
              className="text-primary hover:underline"
            >
              Read Full Guidelines →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 