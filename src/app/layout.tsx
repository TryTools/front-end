import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TryTools - Professional Next.js Starter Template",
  description: "A modern, production-ready Next.js template with TypeScript, Tailwind CSS, and all the tools you need to build exceptional web applications.",
  keywords: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Starter Template", "Web Development"],
  authors: [{ name: "TryTools" }],
  creator: "TryTools",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/trytools/front-end",
    title: "TryTools - Professional Next.js Starter Template",
    description: "A modern, production-ready Next.js template with TypeScript, Tailwind CSS, and modern UI components.",
    siteName: "TryTools",
  },
  twitter: {
    card: "summary_large_image",
    title: "TryTools - Professional Next.js Starter Template",
    description: "A modern, production-ready Next.js template with TypeScript, Tailwind CSS, and modern UI components.",
    creator: "@trytools",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
