import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import JsonLd from "@/components/layout/JsonLd";
import { Toaster } from "sonner";

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

  // Link the manifest file
  manifest: "/site.webmanifest",

  // Define all favicon variants (including .ico)
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" }, // fallback for old browsers
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],

    // Note: android-chrome icons are defined in the manifest, so they don't need to be listed here.
  },

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
    title: "Bethel Springs | Supported Living & Care Services ",
    description:
      "Professional care and supported living services across the UK.",
    images: ["https://bethelspringsgroup.com/og-image.jpg"],
  },

  // todo
  other: {
    "geo.position": "51.5074;-0.1278", // latitude;longitude (replace with your actual)
    "geo.placename": "London", // replace with your city
    "geo.region": "GB-LND", // ISO 3166-2 (UK country + region code)
    ICBM: "51.5074, -0.1278",
  },

  alternates: {
    canonical: "https://bethelspringsgroup.com",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
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
      <body className="min-h-full flex flex-col">
        {children}
        <Toaster position="top-right" richColors />
        <JsonLd />
      </body>
    </html>
  );
}
