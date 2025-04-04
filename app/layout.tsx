import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

export const metadata: Metadata = {
  title: "Ell-ena",
  description:
    "Your AI-powered product manager that creates tasks, transcribes meetings, and keeps work organized. Simplify teamwork—effortlessly.",
  icons: {
    icon: "/assets/images/site-logo.svg",
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
      </body>
    </html>
  );
}
