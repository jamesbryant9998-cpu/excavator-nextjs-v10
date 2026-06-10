import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-family",
});

import "./globals.css";
import WhatsAppFloat from "../components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Heavy Excavator Exporter | Premium Used Construction Equipment | EXCAVATOR PRO",
  description: "EXCAVATOR PRO is a leading SGS & ISO9001 certified global exporter of certified pre-owned heavy excavators. Specializing in high-end used Caterpillar, Komatsu, Hitachi, Doosan, Sany, and Kubota equipment for international B2B buyers.",
  keywords: [
    "used excavator exporter",
    "pre-owned construction machinery",
    "used Caterpillar excavator",
    "Komatsu hydraulic excavator",
    "Sany excavator wholesale",
    "heavy machinery export China",
    "certified used excavators bulk"
  ],
  authors: [{ name: "EXCAVATOR PRO" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} dark`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
