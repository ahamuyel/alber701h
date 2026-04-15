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
    default: "Alberto Hamuyela | Full-Stack Developer",
    template: "%s | Alberto Hamuyela",
  },
  description: "Full-stack developer passionate in building scalable, maintainable, and elegant web applications. Specialized in React, Node.js, and Go.",
  keywords: ["full-stack developer", "web development", "React", "Node.js", "Go", "TypeScript"],
  authors: [{ name: "Alberto Hamuyela" }],
  openGraph: {
    title: "Alberto Hamuyela | Full-Stack Developer",
    description: "Full-stack developer passionate in building scalable, maintainable, and elegant web applications.",
    type: "website",
    locale: "en_US",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="bg-[#111111] text-white">{children}</body>
    </html>
  );
}
