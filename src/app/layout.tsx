import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Roboto } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const roboto = Roboto({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'Soplang - The First Somali Programming Language',
  description: 'Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo! Soplang is the first Somali programming language designed for simplicity, usability, and accessibility for Somali speakers worldwide.',
  keywords: ['Soplang', 'programming language', 'Somali', 'coding', 'development', 'afka hooyo', 'software development'],
  metadataBase: new URL('https://soplang.org'),
  openGraph: {
    title: 'Soplang - The First Somali Programming Language',
    description: 'Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo! Soplang is the first Somali programming language designed for simplicity, usability, and accessibility for Somali speakers worldwide.',
    url: 'https://soplang.org',
    siteName: 'Soplang',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Soplang Programming Language',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soplang - The First Somali Programming Language',
    description: 'Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo! Soplang is the first Somali programming language designed for simplicity, usability, and accessibility for Somali speakers worldwide.',
    images: ['/images/twitter-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={roboto.variable}>
      <body className={roboto.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
} 