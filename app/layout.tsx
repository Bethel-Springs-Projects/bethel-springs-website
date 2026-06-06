import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const satoshi = localFont({
  src: "../assets/fonts/Satoshi-Variable.ttf",
  variable: "--font-satoshi",
  weight: "100 900",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Bethel Springs | Supported Living & Care Services",
  description:
    "Professional supported living and care services for adults with autism, learning disabilities, and additional support needs. Providing compassionate, person-centred care across the UK.",

  keywords: [
    "supported living UK",
    "care services UK",
    "autism support care",
    "learning disabilities support",
    "adult social care UK",
    "home care support workers",
    "independent living support",
  ],

  openGraph: {
    title: "Bethel Springs | Supported Living & Care Services",
    description:
      "Person-centred supported living and care services for adults with additional needs across the UK.",
    type: "website",
    locale: "en_GB",
    url: "https://bethelspringsgroup.com",
    siteName: "Bethel Springs",
    images: [
      {
        url: "https://bethelspringsgroup.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Supported Living Care Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bethel SPrings | Supported Living & Care Services ",
    description:
      "Professional care and supported living services across the UK.",
    images: ["https://bethelspringsgroup.com/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${satoshi.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
