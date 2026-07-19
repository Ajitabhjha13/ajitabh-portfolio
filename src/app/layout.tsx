import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Syne, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
});

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: `${profile.tagline} Portfolio of ${profile.name}, final-year CSE student and ${profile.role.toLowerCase()} based in ${profile.location}.`,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.tagline,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0b",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${grotesk.variable} ${jetbrains.variable}`}>
      <body className="bg-bg text-fg antialiased grain">{children}</body>
    </html>
  );
}
