import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import Navbar from "./components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xaviert.me"),
  title: {
    default: "Xavier Tarazona",
    template: "%s | Xavier Tarazona",
  },
  description: "Full Stack Developer.",
  openGraph: {
    title: "Xavier Tarazona",
    description: "Full Stack Developer.",
    url: "https://xaviert.me",
    siteName: "Xavier Tarazona",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`text-black bg-white dark:text-white dark:bg-[#111010] ${GeistSans.variable} ${GeistMono.variable} `}
    >
      <body className="antialiased max-w-2xl mb-20 flex flex-col mt-8 px-6 mx-auto">
        <Navbar />
        <main className="flex-auto min-w-0 mt-6 flex flex-col md:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
