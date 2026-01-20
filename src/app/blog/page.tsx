import { Metadata } from 'next';
import { getAllPosts } from '@/lib/blog';
import BlogList from './BlogList';

export const metadata: Metadata = {
  title: 'Blog - Soplang',
  description: 'News, updates, and deep dives into the world of Soplang.',
};

export default function BlogPage() {
  const blogPosts = getAllPosts();

  return (
    <BlogList initialPosts={blogPosts} />
  );
}
