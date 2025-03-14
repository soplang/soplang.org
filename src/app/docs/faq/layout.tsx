import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - Soplang',
  description: 'Find answers to common questions about Soplang programming language, installation, usage, and more.',
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 