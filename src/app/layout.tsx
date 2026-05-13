import type { Metadata } from "next";
import {
  Inter,
  Playfair_Display,
  Cormorant_Garamond,
  Space_Grotesk,
  JetBrains_Mono,
  Lora,
} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "J-ART Flagi Osielsko — design eksploracja",
  description:
    "Eksploracja kierunków designu dla flagiosielsko.pl. Rodzinna manufaktura flag od 1984 roku.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pl"
      className={`${inter.variable} ${playfair.variable} ${cormorant.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} ${lora.variable} antialiased`}
    >
      <body className="min-h-screen bg-white text-neutral-900 font-sans">
        {children}
      </body>
    </html>
  );
}
