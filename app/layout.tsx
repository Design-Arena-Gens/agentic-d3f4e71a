import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair-display",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "H&H Fragrances | Haute Perfumery",
  description:
    "Discover H&H Fragrances, a curated collection of haute perfumery crafted with rare ingredients and timeless artistry.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
