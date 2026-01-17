import Footer from '@/components/Footer';
import Navbar from '@/components/navbar/Navbar';
import '@/styles/globals.css';
import '@/styles/soplang-syntax.css';
import { ThemeProvider } from 'next-themes';
import { getJsonLd } from '@/lib/schema';

import type { Metadata } from 'next';
import { Roboto, Inter } from 'next/font/google';
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'block', // Changed from 'swap' to 'block' to prevent FOUT
  variable: '--font-roboto',
  preload: true,
  fallback: [
    'system-ui',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Arial',
    'sans-serif',
  ],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'block',
  preload: true,
  fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Arial', 'sans-serif'],
});
export const metadata: Metadata = {
  title: 'Soplang | First Somali Programming Language',
  description:
    'Soplang is a modern Somali programming language created by Mr Sharafdin and first released in October 2023. It makes coding intuitive and accessible in native Somali syntax. Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo! Perfect for students, educators, and developers in Somalia and the Somali diaspora worldwide.',
  applicationName: 'Soplang - Somali Programming Language',
  authors: [
    { name: 'Mr Sharafdin', url: 'https://github.com/sharafdin' },
    { name: 'Soplang Development Team', url: 'https://github.com/soplang' },
  ],
  creator: 'Mr Sharafdin',
  publisher: 'Soplang Software Foundation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
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
    'soplang tutorial',
    'barashada soplang',
    'tusaale soplang',
    'casharo soplang',
    'teknoolojiyada Soomaaliya',
    'horumarka casriga Soomaaliya',
    'waxbarashada casriga soomaali',
    'fursadaha teknoolojiyada',
    'xalinta dhibaatooyinka barnaamijyada',
    'guruubka horumarinta software soomaali',
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
    'programming education',
    'Soplang examples',
    'Soplang tutorials',
    'Somali code learning',
    'technology in Somalia',
    'tech development Somalia',
    'coding for Somali diaspora',
    'Somali language software',
    'accessible programming Somali',
    'Somali tech innovation',
    'Horn of Africa tech',
    // Additional keywords for better discoverability
    'learn programming in native language',
    'accessible coding',
    'inclusive programming',
    'indigenous programming languages',
    'cultural tech innovation',
    'Somali tech education',
    'programming in East Africa',
    'beginner-friendly programming',
    'ethnic language programming',
    'linguistic diversity in tech',
    // Even more targeted keywords
    'Python-based interpreter',
    'Somali syntax',
    'beginner programming language',
    'educational programming',
    'programming language for schools',
    'Somali IT education',
    'African programming languages',
    'culturally-aware computing',
    'localized programming',
    'mother tongue coding education',
  ],
  metadataBase: new URL('https://soplang.org'),
  alternates: {
    languages: {
      'so-SO': '/so',
      'en-US': '/en',
    },
    canonical: 'https://soplang.org',
  },
  openGraph: {
    title: 'Soplang - The First Somali Programming Language',
    description:
      'Soplang is a modern Somali programming language created by Mr Sharafdin, first released in October 2023. It makes coding intuitive and accessible with native Somali syntax. Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo!',
    url: 'https://soplang.org',
    siteName: 'Soplang',
    images: [
      {
        url: '/images/logo/logo-512.png',
        width: 512,
        height: 512,
        alt: 'Soplang - Luuqada Programinka ee Soomaaliga',
      },
      {
        url: '/images/logo/logo-128.png',
        width: 128,
        height: 128,
        alt: 'Soplang Logo',
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Soplang App Icon',
      },
      {
        url: '/favicon/android-chrome-192x192.png',
        width: 192,
        height: 192,
        alt: 'Soplang App Icon',
      },
    ],
    locale: 'so_SO',
    alternateLocale: ['en_US'],
    type: 'website',
    countryName: 'Somalia',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soplang - The First Somali Programming Language',
    description:
      'Soplang is a modern Somali programming language created by Mr Sharafdin. It makes coding intuitive and accessible with native Somali syntax. Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo!',
    site: '@soplangorg',
    creator: '@soplangorg',
    images: [
      {
        url: '/images/logo/logo-512.png',
        alt: 'Soplang - The First Somali Programming Language',
        width: 512,
        height: 512,
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        alt: 'Soplang App Icon',
        width: 512,
        height: 512,
      },
    ],
  },
  other: {
    'google-site-verification': 'your-verification-code',
    'baidu-site-verification': 'your-verification-code',
    'yandex-verification': 'your-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
    'facebook-domain-verification': 'your-facebook-verification-code',
    // Additional geo meta tags
    'geo.region': 'SO',
    'geo.placename': 'Somalia',
    'geo.position': '2.0469;45.3182', // Mogadishu coordinates
    ICBM: '2.0469, 45.3182',
    // Additional social media tags
    'og:email': 'info@soplang.org',
    'og:phone_number': '+252 61 SOPLANG',
    'og:latitude': '2.0469',
    'og:longitude': '45.3182',
    'og:street-address': 'Mogadishu',
    'og:locality': 'Mogadishu',
    'og:region': 'Banaadir',
    'og:postal-code': '00000',
    'og:country-name': 'Somalia',
    // Article specific for blog integration
    'article:publisher': 'https://soplang.org',
    'article:author': 'https://github.com/sharafdin',
    // App specific
    'al:ios:app_name': 'Soplang',
    'al:android:app_name': 'Soplang',
    // Apple specific
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Soplang',
    // Pinterest verification
    'p:domain_verify': 'your-pinterest-verification-code',
    // Norton Safe Web verification
    'norton-safeweb-site-verification': 'your-norton-verification-code',
    // Additional platform verifications
    'pocket-site-verification': 'your-pocket-verification-code',
    // Educational tags
    'edu:language-of-instruction': 'Somali',
    'edu:target-audience': 'Somali speakers, students, developers',
    'edu:skill-level': 'Beginner to Advanced',
    // Technology tags
    'tech:programming-language': 'Soplang',
    'tech:implementation-language': 'Python',
    'tech:primary-purpose': 'Education, Software Development',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  classification:
    'Programming Language, Education, Software Development, Cultural Technology, Linguistic Innovation',
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      {
        url: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/favicon/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/favicon/safari-pinned-tab.svg',
        color: '#1e3a8a',
      },
    ],
  },
  manifest: '/site.webmanifest',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1e3a8a' },
  ],
  appLinks: {
    web: {
      url: 'https://soplang.org',
      should_fallback: true,
    },
    ios: {
      url: 'https://soplang.org',
      app_store_id: 'soplang',
    },
    android: {
      package: 'org.soplang.app',
      app_name: 'Soplang',
    },
  },
  archives: ['https://soplang.org/blog/archive'],
  assets: ['https://soplang.org/assets'],
  bookmarks: ['https://soplang.org/features'],
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="so" suppressHydrationWarning className={`${roboto.variable} antialiased`} dir="ltr" translate="no">
      <head>
        {/* Prevent theme flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function() {
            try {
              const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              const theme = localStorage.getItem('theme') || systemTheme;
              if (theme === 'dark') document.documentElement.classList.add('dark');
            } catch (e) {}
          })()
        `,
          }}
        />
        <link rel="alternate" hrefLang="so-SO" href="https://soplang.org/so" />
        <link rel="alternate" hrefLang="en-US" href="https://soplang.org/en" />
        <link rel="alternate" hrefLang="x-default" href="https://soplang.org" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="google" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        <meta name="theme-color" content="#ffffff" />

        {/* Facebook specific meta tags */}
        <meta property="fb:app_id" content="your-fb-app-id" />

        {/* Additional social media meta tags */}
        <meta property="og:site_name" content="Soplang" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="so_SO" />
        <meta property="og:locale:alternate" content="en_US" />

        {/* LinkedIn specific meta tags */}
        <meta property="linkedin:card" content="summary_large_image" />
        <meta property="linkedin:title" content="Soplang - The First Somali Programming Language" />
        <meta
          property="linkedin:description"
          content="Soplang is a modern Somali programming language created by Mr Sharafdin, first released in October 2023. It makes coding intuitive and accessible with native Somali syntax."
        />
        <meta property="linkedin:image" content="https://soplang.org/images/logo/logo-512.png" />

        {/* Mobile app specific */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Soplang" />
        <meta name="application-name" content="Soplang" />
        <meta name="format-detection" content="telephone=no" />

        {/* Rich snippets for search engines */}
        <meta
          name="description"
          content="Soplang is the first Somali programming language created by Mr Sharafdin in October 2023, making coding intuitive and accessible with native Somali syntax."
        />
        <meta name="author" content="Soplang Software Foundation" />
        <meta
          name="copyright"
          content={`© ${new Date().getFullYear()} Soplang Software Foundation`}
        />
        <meta name="language" content="Somali" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />

        {/* Schema.org JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getJsonLd()),
          }}
        />
      </head>
      <body
        className={`${roboto.className} ${inter.className} font-sans antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          themes={['dark', 'light']}
          enableSystem={true}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
