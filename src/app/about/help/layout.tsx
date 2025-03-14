import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help Center - Soplang',
  description: 'Get help with Soplang programming language. Find documentation, community support, and answers to common questions.',
};

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 