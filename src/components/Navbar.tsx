"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
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
    { name: "Le Lieu", href: "#lieu" },
    { name: "Les Espaces", href: "#espaces" },
    { name: "Les Cours", href: "#cours" },
    { name: "Horaires", href: "#horaires" },
    { name: "Tarifs", href: "#tarifs" },
    { name: "Corporate", href: "#corporate" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#0d0d10]/85 backdrop-blur-xl border-b border-white/10 py-4 shadow-2xl shadow-black/40"
            : "bg-transparent border-b border-white/5 py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo with luxury gold emblem */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="font-serif tracking-[0.25em] text-2xl font-bold text-white transition-colors group-hover:text-[#d4af37]">
              ONYX
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] shadow-[0_0_8px_#d4af37]" />
            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 font-light ml-1 hidden sm:inline">
              Genève
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-[13px] tracking-wider uppercase text-gray-300 hover:text-white transition-colors duration-200 py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenBooking}
              className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden text-xs font-semibold tracking-[0.18em] uppercase rounded-full text-black bg-gradient-to-r from-[#d4af37] via-[#e5c158] to-[#d4af37] shadow-[0_0_20px_rgba(212,175,55,0.25)] hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>SÉANCE OFFERTE</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-black" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#0c0c0e]/98 backdrop-blur-2xl flex flex-col pt-24 px-8 pb-12 lg:hidden animate-in fade-in duration-300">
          <div className="flex flex-col space-y-6 text-center my-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
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
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#d4af37] to-[#e09f3e] text-black font-semibold text-xs tracking-widest uppercase shadow-xl"
            >
              Réserver ma séance offerte
            </button>
            <p className="text-[11px] text-gray-500 mt-4 tracking-widest uppercase">
              Cologny · Lac Léman · Genève
            </p>
          </div>
        </div>
      )}
    </>
  );
}
