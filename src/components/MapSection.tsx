"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, MessageSquare, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function MapSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 relative bg-[#0e0e11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-gray-300">
                {t("CONTACT & LOCALISATION", "CONTACT & LOCATION")}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              {t("Contacter", "Contact")}{" "}
              <span className="gold-gradient-text italic font-normal">
                ONYX CLUB.
              </span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-gray-400 text-sm max-w-sm">
            Chemin du Nant-d&apos;Argent 1, Cologny, Geneva, Switzerland (Lac Léman)
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="rounded-2xl p-7 bg-[#141417] border border-white/10 space-y-5">
              <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#d4af37]" />
                ONYX CLUB
              </h3>

              <div className="text-sm text-gray-300 space-y-1">
                <p className="font-medium text-white">Chemin du Nant-d&apos;Argent 1</p>
                <p>Cologny, Geneva, Switzerland</p>
                <p className="text-xs text-gray-400 font-mono">
                  [TODO: confirm it is also the regular club address]
                </p>
              </div>

              {/* Phone / WhatsApp from brief */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href="https://wa.me/41786137021"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-gray-200 hover:text-[#d4af37] transition group p-3 rounded-xl bg-black/40 border border-white/5"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase text-gray-400 block font-mono">
                      {t("Téléphone / WhatsApp Inscriptions", "Phone / WhatsApp Bookings")}
                    </span>
                    <span className="font-mono font-bold text-white group-hover:text-[#d4af37]">
                      078 613 70 21
                    </span>
                  </div>
                </a>

                {/* Primary domain & note */}
                <div className="flex items-center gap-3 text-sm text-gray-300 p-3 rounded-xl bg-black/40 border border-white/5">
                  <Globe className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <div>
                    <span className="text-[10px] uppercase text-gray-400 block font-mono">
                      {t("Site Web Officiel", "Official Website")}
                    </span>
                    <span className="font-mono font-semibold text-white">onyxclub.ch</span>
                    <span className="text-[10px] text-gray-400 block">
                      (Note: onyxclub.ch as primary · [TODO: confirm with client if .com should also be shown])
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Email Placeholders (at least 2 required) */}
            <div className="rounded-2xl p-7 bg-[#141417] border border-white/10 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold flex items-center gap-2">
                <Mail className="w-3.5 h-3.5" />
                {t("ADRESSES COURRIEL PROFESSIONNELLES", "BUSINESS EMAIL ADDRESSES")}
              </h4>

              <div className="p-4 rounded-xl bg-black/50 border border-dashed border-[#d4af37]/30 space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>contact@onyxclub.ch</span>
                  <span className="text-[10px] text-[#d4af37]">[TODO: confirm business email 1]</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>info@onyxclub.ch</span>
                  <span className="text-[10px] text-[#d4af37]">[TODO: confirm business email 2]</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map with dark mode */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            <div className="relative w-full h-[380px] lg:h-full min-h-[350px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#141417]">
              <iframe
                title="ONYX CLUB Cologny Genève Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22080.20786523098!2d6.166667!3d46.222778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c651f67b5e4ff%3A0x8898124b6fbe1473!2sCologny%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1710000000000!5m2!1sen!2sch"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "invert(92%) hue-rotate(180deg) contrast(110%) grayscale(25%)",
                }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              <div className="absolute top-4 left-4 p-4 rounded-xl bg-[#0c0c0e]/90 backdrop-blur-md border border-white/10 text-white shadow-xl max-w-xs pointer-events-none">
                <span className="text-xs font-semibold tracking-wider uppercase text-[#d4af37] block">
                  ONYX CLUB
                </span>
                <p className="text-xs text-gray-200 mt-0.5">
                  Chemin du Nant-d&apos;Argent 1, Cologny
                </p>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  Sur le Lac Léman · Genève
                </p>
              </div>
            </div>

            {/* TODO Google Maps Link & Social Media links per brief */}
            <div className="p-4 rounded-xl bg-[#141417] border border-dashed border-white/20 text-xs font-mono text-gray-400 flex flex-wrap items-center justify-between gap-2">
              <span>[TODO: Direct Google Maps link to be confirmed with client]</span>
              <span>[TODO: Social media links to be confirmed with client]</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
