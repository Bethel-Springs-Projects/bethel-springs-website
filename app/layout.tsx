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
  metadataBase: new URL("https://www.bethelspringsgroup.com/"),
  title: {
    default: "Bethel Springs | Domiciliary care Services",
    template: "%s | Bethel Springs",
  },

  description:
    "Professional domiciliary care services for adults with autism, learning disabilities, and additional support needs. Providing compassionate, person-centred care across the UK.",

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
    "domiciliary care UK",
    "domiciliary care London",
    "care services UK",
    "autism support care",
    "learning disabilities support",
    "adult social care UK",
    "adult cares services london",
    "home care support workers",
    "independent living support",
  ],

  authors: [
    { name: "Bethel Springs", url: "https://www.bethelspringsgroup.com/" },
  ],
  creator: "Bethel Springs",
  publisher: "Bethel Springs",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  openGraph: {
    title: "Bethel Springs | Domiciliary care Services",
    description:
      "Person-centred Domiciliary care services for adults with additional needs across the UK.",
    type: "website",
    locale: "en_GB",
    url: "https://www.bethelspringsgroup.com",
    siteName: "Bethel Springs",
    images: [
      {
        url: "https://www.bethelspringsgroup.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bethel Springs | Domiciliary care Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bethel Springs | Domiciliary care Services ",
    description: "Professional domiciliary care services across the UK.",
    images: ["/og-image.png"],
    creator: "@bethelsprings",
    site: "@bethelsprings",
  },

  // todo
  other: {
    "geo.position": "51.5074;-0.1278", // latitude;longitude (replace with your actual)
    "geo.placename": "London", // replace with your city
    "geo.region": "GB-LND", // ISO 3166-2 (UK country + region code)
    ICBM: "51.5074, -0.1278",
  },

  alternates: {
    canonical: "https://www.bethelspringsgroup.com",
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
