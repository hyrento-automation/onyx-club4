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
  title: "ONYX Club Genève | Club de Sport & Bien-être d'Exception au bord du Lac",
  description: "Le seul club de fitness et bien-être privé à Genève face au lac. Pilates Reformer, Yoga, HIIT, coaching privé sur mesure dans un cadre d'exception à Cologny.",
  keywords: ["ONYX Club", "Salle de sport luxe Genève", "Cologny fitness", "Pilates Reformer Genève", "Yoga Lac Léman", "Personal trainer Genève"],
  openGraph: {
    title: "ONYX Club Genève — Fitness & Wellness Privé",
    description: "L'art du mouvement et de l'exclusivité face au Lac Léman.",
    type: "website",
    locale: "fr_CH",
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
