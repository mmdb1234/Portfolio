import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mohammad Barzgar | Backend & AI Engineer",
  description:
    "I help startups build scalable backend platforms, AI integrations, automation systems and production-ready SaaS products.",
  icons: {
    icon: "/Portfolio/favicon.svg",
  },
  openGraph: {
    title: "Mohammad Barzgar | Backend & AI Engineer",
    description:
      "I help startups build scalable backend platforms, AI integrations, automation systems and production-ready SaaS products.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
