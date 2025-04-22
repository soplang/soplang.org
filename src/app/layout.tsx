import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title:
    "Soplang - Luuqada Programinka ee Soomaaliga | The First Somali Programming Language",
  description:
    "Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo! Soplang waa luuqada programming ee ugu horeysa ee loogu talagalay dadka Soomaalida ah iyo kuwa ku hadla afka Soomaaliga. Waxay u fududeysaa barashada iyo horumarinta software-ka. Build software in your mother tongue - the first programming language designed for Somali speakers worldwide.",
  applicationName: "Soplang",
  authors: [
    { name: "Mr Sharafdin" },
    { name: "Omar Tood" },
    { name: "Ismail Ainte" },
  ],
  creator: "Soplang Team",
  publisher: "Soplang Software Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    // Somali Keywords
    "barnaamijyada soomaali",
    "dhis software soomaali",
    "barashada programinka",
    "horumarinta software",
    "luuqada programinka soomaali",
    "afka hooyo",
    "waxbarashada teknolojiyada",
    "barashada kumbuyutarka",
    "software development soomaali",
    "coding soomaali",
    "soplang tutorial",
    "barashada soplang",
    "tusaale soplang",
    "casharo soplang",
    "teknoolojiyada Soomaaliya",
    "horumarka casriga Soomaaliya",
    "waxbarashada casriga soomaali",
    "fursadaha teknoolojiyada",
    "xalinta dhibaatooyinka barnaamijyada",
    "guruubka horumarinta software soomaali",
    // English Keywords
    "Soplang",
    "Somali programming language",
    "learn coding in Somali",
    "software development in Somali",
    "programming for Somalis",
    "mother tongue programming",
    "Somali developers",
    "Somali tech community",
    "learn to code in Somali",
    "programming education",
    "Soplang examples",
    "Soplang tutorials",
    "Somali code learning",
    "technology in Somalia",
    "tech development Somalia",
    "coding for Somali diaspora",
    "Somali language software",
    "accessible programming Somali",
    "Somali tech innovation",
    "Horn of Africa tech",
  ],
  metadataBase: new URL("https://soplang.org"),
  alternates: {
    languages: {
      "so-SO": "/so",
      "en-US": "/en",
    },
    canonical: "https://soplang.org",
  },
  openGraph: {
    title:
      "Soplang - Luuqada Programinka ee Soomaaliga | The First Somali Programming Language",
    description:
      "Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo! Soplang waa luuqada programinka ee ugu horeysa ee loogu talagalay dadka Soomaalida ah. Waxay u fududeysaa barashada iyo horumarinta software-ka.",
    url: "https://soplang.org",
    siteName: "Soplang",
    images: [
      {
        url: "/images/logo/logo-512.png",
        width: 512,
        height: 512,
        alt: "Soplang - Luuqada Programinka ee Soomaaliga",
      },
      {
        url: "/images/logo/logo-128.png",
        width: 128,
        height: 128,
        alt: "Soplang Logo",
      },
    ],
    locale: "so_SO",
    alternateLocale: ["en_US"],
    type: "website",
    countryName: "Somalia",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soplang - Luuqada Programinka ee Soomaaliga",
    description:
      "Dhis Software Adigoo Adeegsanaya Afkaaga Hooyo! Soplang waa luuqada programinka ee ugu horeysa ee loogu talagalay dadka Soomaalida ah. Waxay u fududeysaa barashada iyo horumarinta software-ka.",
    site: "@soplangorg",
    creator: "@soplangorg",
    images: [
      {
        url: "/images/logo/logo-512.png",
        alt: "Soplang - The First Somali Programming Language",
      },
    ],
  },
  other: {
    "google-site-verification": "your-verification-code",
    "baidu-site-verification": "your-verification-code",
    "yandex-verification": "your-verification-code",
    "msvalidate.01": "your-bing-verification-code",
    "facebook-domain-verification": "your-facebook-verification-code",
  },
  category: "technology",
  classification: "Programming Language, Education, Software Development",
  icons: {
    icon: [
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/favicon/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1e3a8a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="so"
      suppressHydrationWarning
      className={roboto.variable}
      dir="ltr"
    >
      <head>
        <link rel="alternate" hrefLang="so-SO" href="https://soplang.org/so" />
        <link rel="alternate" hrefLang="en-US" href="https://soplang.org/en" />
        <link rel="alternate" hrefLang="x-default" href="https://soplang.org" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#1e3a8a" />
        <meta name="theme-color" content="#ffffff" />

        {/* Schema.org JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Soplang - The First Somali Programming Language",
              url: "https://soplang.org",
              description:
                "Soplang is the first programming language designed for Somali speakers, enabling software development in the Somali language.",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://soplang.org/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              keywords:
                "Somalia programming, Somali coding, Soplang, software development, technology education",
              inLanguage: ["so-SO", "en-US"],
              audience: {
                "@type": "Audience",
                geographicArea: {
                  "@type": "Country",
                  name: "Somalia",
                },
              },
              creator: {
                "@type": "Organization",
                name: "Soplang Software Foundation",
                url: "https://soplang.org",
                logo: {
                  "@type": "ImageObject",
                  url: "https://soplang.org/images/logo/logo-512.png",
                  width: 512,
                  height: 512,
                },
              },
            }),
          }}
        />
      </head>
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
