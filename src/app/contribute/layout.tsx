import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contribute to Soplang',
  description:
    'Learn how to contribute to the Soplang programming language and become part of our growing community of developers.',
};

export default function ContributeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
