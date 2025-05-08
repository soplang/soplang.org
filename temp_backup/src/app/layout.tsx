import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soplang - A Python-inspired Programming Language",
  description:
    "Soplang is a modern, intuitive programming language inspired by Python, designed for simplicity and usability.",
  keywords: [
    "Soplang",
    "programming language",
    "Python-inspired",
    "coding",
    "development",
  ],
  openGraph: {
    title: "Soplang - A Python-inspired Programming Language",
    description:
      "Soplang is a modern, intuitive programming language inspired by Python, designed for simplicity and usability.",
    url: "https://soplang.org",
    siteName: "Soplang",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Soplang Programming Language",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soplang - A Python-inspired Programming Language",
    description:
      "Soplang is a modern, intuitive programming language inspired by Python, designed for simplicity and usability.",
    images: ["/images/twitter-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
