import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mohammad Barzgar | Senior Backend Engineer | Distributed Systems & AI",
  description:
    "Senior Backend Engineer with 5+ years of experience designing enterprise-scale distributed systems. Expert in C# (.NET Core), Python, and AI integration. Built 20+ microservice ERP platforms processing 1M+ transactions daily.",
  keywords: [
    "Mohammad Barzgar",
    "Backend Engineer",
    "Distributed Systems",
    "AI",
    ".NET Core",
    "Python",
    "Microservices",
    "ERP",
    "C# Developer",
  ],
  authors: [{ name: "Mohammad Barzgar" }],
  icons: {
    icon: "/Portfolio/favicon.svg",
  },
  openGraph: {
    title: "Mohammad Barzgar | Senior Backend Engineer | Distributed Systems & AI",
    description:
      "Senior Backend Engineer with 5+ years of experience. Architect of 20+ microservice ERP platforms. Expert in .NET Core, Python, AI integration.",
    type: "website",
    locale: "en_US",
    siteName: "Mohammad Barzgar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Barzgar | Senior Backend Engineer",
    description:
      "Senior Backend Engineer with 5+ years of experience. Architect of 20+ microservice ERP platforms.",
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
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>{children}</body>
    </html>
  );
}
