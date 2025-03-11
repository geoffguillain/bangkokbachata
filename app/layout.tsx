import type { Metadata } from "next";
import { Inter, Playfair_Display, Noto_Serif_Display } from "next/font/google"; // Import fonts from Google
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Configure Inter font with all weights
const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Optional: Improves font loading
});

// Configure Playfair Display font with all weights
const playfairFont = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap", // Optional
});

// Configure Noto Serif Display font with all weights
const notoSerifDisplay = Noto_Serif_Display({
  variable: "--font-noto-serif-display",
  subsets: ["latin"],
  display: "swap", // Optional
});

export const metadata: Metadata = {
  title: "Bangkok Bachata Gang",
  description:
    "Immerse yourself in Bangkok’s pulse with Thailand’s most vibrant Latin dance community! Discover a space where passion and connection light up the dance floor through the irresistible rhythms of bachata, salsa, and kizomba.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body
        className={`${interFont.variable} ${playfairFont.variable} ${notoSerifDisplay.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
