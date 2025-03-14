import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Applications - Soplang',
  description: 'Discover how Soplang is used across different industries and applications, from web development to data science and beyond.',
};

export default function ApplicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 