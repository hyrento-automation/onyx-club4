import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ONYX CLUB (onyxclub.ch) | Sport · Lifestyle · Zen, sur le Lac Léman | Cologny",
  description: "ONYX CLUB à Cologny (Genève) : Sport, Lifestyle & Zen sur le Lac Léman. Coaching privé, Boxe, Yoga, Pilates, Personal Training, Développement personnel.",
  keywords: ["ONYX CLUB", "onyxclub.ch", "Cologny fitness", "Boxe Genève", "Yoga Lac Léman", "Personal Training Cologny", "Coaching mental Genève"],
  openGraph: {
    title: "ONYX CLUB — Sport · Lifestyle · Zen, sur le Lac Léman",
    description: "Stronger Happier You · Bougez. Respirez. Évoluez. · Cologny, Genève.",
    url: "https://onyxclub.ch",
    siteName: "ONYX CLUB",
    locale: "fr_CH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${jakarta.variable} ${playfair.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#0c0c0e] text-white font-sans antialiased selection:bg-[#d4af37] selection:text-[#0b0b0d]">
        {children}
      </body>
    </html>
  );
}
