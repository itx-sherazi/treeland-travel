import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://www.treelandtravel.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Treeland Travel & Tours | Hajj & Umrah Packages from Pakistan",
    template: "%s | Treeland Travel & Tours",
  },
  description:
    "Treeland Travel & Tours offers trusted Hajj packages, Umrah packages, visa assistance, flight booking, hotel reservations and ground transport for pilgrims from Pakistan.",
  keywords: [
    "Hajj packages Pakistan",
    "Umrah packages Pakistan",
    "Treeland Travel",
    "Hajj and Umrah travel agency",
    "visa assistance Pakistan",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: siteUrl,
    siteName: "Treeland Travel & Tours",
    title: "Treeland Travel & Tours | Hajj & Umrah Packages from Pakistan",
    description:
      "Perform your Hajj & Umrah with peace of mind. Professional travel services from Pakistan.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Treeland Travel & Tours",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Treeland Travel & Tours | Hajj & Umrah Packages from Pakistan",
    description:
      "Perform your Hajj & Umrah with peace of mind. Professional travel services from Pakistan.",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport = {
  colorScheme: "light" as const,
  themeColor: "#0f6b4b",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="flex min-h-full flex-col bg-white text-[#1f2937]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
