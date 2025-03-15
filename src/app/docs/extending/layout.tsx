import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Extending Soplang - Documentation',
  description: 'Learn how to extend Soplang with custom modules, plugins, and integrations to enhance its capabilities for your specific needs.',
};

export default function ExtendingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 