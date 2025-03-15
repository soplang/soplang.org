import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Report a Security Issue - Soplang',
  description: 'Learn how to responsibly report security vulnerabilities in Soplang and understand our security response process.',
};

export default function SecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 