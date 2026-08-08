import type { Metadata } from "next";
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
  title: "NextFlow AI | Enterprise AI Automation Agency",

  description:
    "NextFlow AI builds enterprise AI employees, customer support systems, workflow automation and intelligent business solutions.",

  keywords: [
    "AI Automation",
    "AI Agency",
    "n8n",
    "Workflow Automation",
    "AI Voice Agent",
    "Customer Support AI",
    "RAG",
  ],

  authors: [
    {
      name: "NextFlow AI",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}