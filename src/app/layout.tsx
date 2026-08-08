import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: {
    default: "NextFlow AI | Enterprise AI Automation Agency",
    template: "%s | NextFlow AI",
  },

  description:
    "NextFlow AI builds AI voice agents, AI employees, workflow automation, RAG systems, customer support automation, and intelligent business solutions.",

  keywords: [
    "AI Automation Agency",
    "AI Automation",
    "AI Voice Agents",
    "AI Employees",
    "AI Agents",
    "n8n Automation",
    "Workflow Automation",
    "Business Automation",
    "RAG AI",
    "Customer Support AI",
    "AI Customer Service",
    "AI Integration",
  ],

  authors: [
    {
      name: "NextFlow AI",
    },
  ],

  creator: "NextFlow AI",
  publisher: "NextFlow AI",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    siteName: "NextFlow AI",
    title: "NextFlow AI | Enterprise AI Automation Agency",
    description:
      "Build smarter businesses with AI voice agents, AI employees, workflow automation, RAG systems, and intelligent customer support.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "NextFlow AI | Enterprise AI Automation Agency",
    description:
      "AI voice agents, AI employees, workflow automation, RAG systems, and intelligent business solutions.",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050816",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}