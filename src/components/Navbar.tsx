"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("Le Club", "The Club"), href: "#club" },
    { name: t("Activités", "Activities"), href: "#activites" },
    { name: t("Événements", "Events"), href: "#evenements" },
    { name: t("Nutrition", "Protein Bar"), href: "#nutrition" },
    { name: t("Équipe", "Team"), href: "#equipe" },
    { name: t("Tarifs", "Rates"), href: "#tarifs" },
    { name: t("Contact", "Contact"), href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#0c0c0e]/90 backdrop-blur-xl border-b border-white/10 py-3.5 shadow-2xl shadow-black/50"
          : "bg-transparent border-b border-white/5 py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo with gold/copper circular ring above wordmark */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8 rounded-full border-2 border-[#d4af37] flex items-center justify-center shadow-[0_0_12px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-4 h-4 rounded-full border border-[#d4af37]/60 bg-gradient-to-tr from-[#b87333] to-[#d4af37] opacity-80" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif tracking-[0.25em] text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors leading-none">
              ONYX CLUB
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-gray-400 font-light mt-1">
              Cologny · Lac Léman
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="relative text-[12px] tracking-wider uppercase text-gray-300 hover:text-white transition-colors duration-200 py-1 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Action & Language Switcher */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Language Switcher */}
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 text-[11px] font-mono">
            <button
              onClick={() => setLang("FR")}
              className={`px-2.5 py-1 rounded-full transition ${
                lang === "FR"
                  ? "bg-[#d4af37] text-black font-semibold shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("EN")}
              className={`px-2.5 py-1 rounded-full transition ${
                lang === "EN"
                  ? "bg-[#d4af37] text-black font-semibold shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              EN
            </button>
          </div>

          <button
            onClick={onOpenBooking}
            className="relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden text-xs font-semibold tracking-[0.16em] uppercase rounded-full text-black bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#b87333] shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] transition-all duration-300 hover:scale-[1.03]"
          >
            <span>{t("RÉSERVER", "BOOK NOW")}</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-black" />
          </button>
        </div>

        {/* Mobile Hamburger & Lang */}
        <div className="flex items-center gap-3 lg:hidden">
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 text-[10px] font-mono">
            <button
              onClick={() => setLang("FR")}
              className={`px-2 py-0.5 rounded-full ${lang === "FR" ? "bg-[#d4af37] text-black font-bold" : "text-gray-400"}`}
            >
              FR
            </button>
            <button
              onClick={() => setLang("EN")}
              className={`px-2 py-0.5 rounded-full ${lang === "EN" ? "bg-[#d4af37] text-black font-bold" : "text-gray-400"}`}
            >
              EN
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0c0c0e]/98 backdrop-blur-2xl flex flex-col pt-24 px-8 pb-12 lg:hidden animate-in fade-in duration-300">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex flex-col space-y-6 text-center my-auto">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg tracking-widest uppercase font-serif text-gray-300 hover:text-[#d4af37] transition"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 text-center">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b87333] text-black font-semibold text-xs tracking-widest uppercase shadow-xl"
            >
              {t("RÉSERVER UNE SÉANCE", "BOOK A SESSION")}
            </button>
            <p className="text-[11px] text-gray-500 mt-4 tracking-widest uppercase">
              Chemin du Nant-d&apos;Argent 1 · Cologny
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
