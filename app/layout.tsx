import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Euro Web | Custom Web, App & Software Development",
    template: "%s | Euro Web",
  },
  description:
    "We build high-performance web applications, mobile apps, and custom software tailored for growing businesses and enterprises.",
  icons: {
    icon: [
      {
        url: "/images/logo-1.webp",
        type: "image/webp",
      },
    ],
    shortcut: "/images/logo-1.webp",
    apple: "/images/logo-1.webp",
  },
  openGraph: {
    title: "Euro Web | Custom Web, App & Software Development",
    description:
      "Transforming business vision into custom software, web applications, and mobile solutions.",
    url: "https://yourdomain.com",
    siteName: "Euro Web",
    locale: "en_US",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}