import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from './context/LanguageContext';
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
  description:
    "Full-stack developer passionate about building scalable, maintainable, and elegant web applications. Specialized in React, Node.js, and Go.",
  keywords: [
    "full-stack developer",
    "web development",
    "React",
    "Node.js",
    "Go",
    "TypeScript",
    "42 School",
    "portfolio",
  ],
  authors: [{ name: "Alberto Hamuyela" }],
  creator: "Alberto Hamuyela",
  openGraph: {
    title: "Alberto Hamuyela | Full-Stack Developer",
    description:
      "Full-stack developer passionate about building scalable, maintainable, and elegant web applications.",
    type: "website",
    locale: "en_US",
    siteName: "Alberto Hamuyela",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alberto Hamuyela | Full-Stack Developer",
    description:
      "Full-stack developer passionate about building scalable, maintainable, and elegant web applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alberto Hamuyela",
  url: "https://alber701h.vercel.app",
  jobTitle: "Full-Stack Developer",
  knowsAbout: ["React", "Node.js", "TypeScript", "Go", "PostgreSQL"],
  alumniOf: "42 School",
  sameAs: [
    "https://github.com/ahamuyel",
    "https://linkedin.com/in/alber701h",
    "https://instagram.com/alber701h",
  ],
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
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var t = localStorage.getItem('theme');
                var d = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (d) document.documentElement.classList.add('dark');
              } catch(e) {}
              try {
                var l = localStorage.getItem('language');
                if (l === 'pt' || l === 'en') document.documentElement.lang = l;
              } catch(e) {}
            `,
          }}
        />
      </head>
      <body className="bg-[#111111] text-white">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
