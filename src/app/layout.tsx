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
  title: 'Soplang - Luuqada Programinka ee Soomaaliga | The First Somali Programming Language',
  description: 'Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo! Soplang waa luuqada programinka ee ugu horeysa ee loogu talagalay dadka Soomaalida ah. Waxay u fududeysaa barashada iyo horumarinta software-ka. Build software using your mother tongue with Soplang!',
  keywords: [
    // Somali Keywords
    'barnaamijyada soomaali',
    'dhis software soomaali',
    'barashada programinka',
    'horumarinta software',
    'luuqada programinka soomaali',
    'afka hooyo',
    'waxbarashada teknolojiyada',
    'barashada kumbuyutarka',
    'software development soomaali',
    'coding soomaali',
    // English Keywords
    'Soplang',
    'Somali programming language',
    'learn coding in Somali',
    'software development in Somali',
    'programming for Somalis',
    'mother tongue programming',
    'Somali developers',
    'Somali tech community',
    'learn to code in Somali',
    'programming education'
  ],
  metadataBase: new URL('https://soplang.org'),
  alternates: {
    languages: {
      'so-SO': '/so',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'Soplang - Luuqada Programinka ee Soomaaliga | The First Somali Programming Language',
    description: 'Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo! Soplang waa luuqada programinka ee ugu horeysa ee loogu talagalay dadka Soomaalida ah. Waxay u fududeysaa barashada iyo horumarinta software-ka.',
    url: 'https://soplang.org',
    siteName: 'Soplang',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Soplang - Luuqada Programinka ee Soomaaliga',
      },
    ],
    locale: 'so_SO',
    alternateLocale: ['en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soplang - Luuqada Programinka ee Soomaaliga',
    description: 'Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo! Soplang waa luuqada programinka ee ugu horeysa ee loogu talagalay dadka Soomaalida ah. Waxay u fududeysaa barashada iyo horumarinta software-ka.',
    images: ['/images/twitter-image.png'],
  },
  other: {
    'google-site-verification': 'your-verification-code',
    'baidu-site-verification': 'your-verification-code',
    'yandex-verification': 'your-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="so" suppressHydrationWarning className={roboto.variable}>
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