import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Soplang - The First Somali Programming Language',
    description: 'Learn about Soplang, its mission to bring coding closer to Somali speakers, and the story behind its creation by Mr Sharafdin.',
};

export default function AboutLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
