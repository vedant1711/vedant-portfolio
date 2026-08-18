import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import ScrollProgress from "@/components/ScrollProgress";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vedant-portfolio.vercel.app"),
  title: {
    default: "Vedant Somani — AI & Software Engineer",
    template: "%s — Vedant Somani",
  },
  description:
    "Vedant Somani is an AI and software engineer at UW Libraries and the eScience Institute. He builds agentic AI systems, data pipelines, and the full-stack products around them.",
  openGraph: {
    title: "Vedant Somani — AI & Software Engineer",
    description:
      "AI and software engineer at the University of Washington, building agentic AI systems, data pipelines, and the full-stack products around them.",
    type: "website",
  },
};

const themeInit = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark");}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${grotesk.variable} ${inter.variable} ${plexMono.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        <div className="grid-backdrop" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
        <ScrollProgress />
        <SiteNav />
        <main className="flex-1 pt-14 sm:pt-16">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
