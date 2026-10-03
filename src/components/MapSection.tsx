"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation, Car, Bus, Phone, Mail, Clock } from "lucide-react";

export default function MapSection() {
  return (
    <section id="contact" className="py-24 relative bg-[#0e0e11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-gray-300">
                LOCALISATION PRIVILÉGIÉE
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              Rejoindre <span className="gold-gradient-text italic font-normal">le club.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-gray-400 text-sm max-w-sm">
            Situé au cœur de Cologny, à quelques minutes à peine du centre-ville de Genève et des quais.
          </p>
        </div>

        {/* Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Location & Access details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="rounded-2xl p-7 bg-[#141417] border border-white/10 space-y-5">
              <h3 className="text-xl font-serif font-bold text-white flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#d4af37]" />
                ONYX Club Genève
              </h3>
              
              <div className="text-sm text-gray-300 space-y-1">
                <p className="font-medium text-white">Route de Thonon 84</p>
                <p>1223 Cologny · Genève, Suisse</p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <Car className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Parking privé sécurisé réservé aux membres sur place</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <Bus className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Arrêt TPG « Cologny-Mairie » ou « Ruth » à 100 mètres</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-300">
                  <Clock className="w-4 h-4 text-[#d4af37] shrink-0" />
                  <span>Du lundi au dimanche : 06h30 – 21h30</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Card */}
            <div className="rounded-2xl p-7 bg-[#141417] border border-white/10 space-y-4">
              <h4 className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                CONCIERGERIE DU CLUB
              </h4>
              <div className="space-y-3">
                <a
                  href="tel:+41227350000"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#d4af37]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>+41 22 735 00 00</span>
                </a>
                <a
                  href="mailto:contact@onyx-club.ch"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition group"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-[#d4af37]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span>concierge@onyx-geneve.ch</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Dark-Mode Styled Interactive Map Embed */}
          <div className="lg:col-span-7">
            <div className="relative w-full h-[450px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#141417]">
              {/* Google Maps Embed with Dark mode contrast filter */}
              <iframe
                title="ONYX Club Cologny Genève Map"
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

              {/* Floating Overlay Card on Map */}
              <div className="absolute top-4 left-4 p-4 rounded-xl bg-[#0c0c0e]/90 backdrop-blur-md border border-white/10 text-white shadow-xl max-w-xs pointer-events-none">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  <span className="text-xs font-semibold tracking-wider uppercase text-[#d4af37]">
                    ONYX CLUB
                  </span>
                </div>
                <p className="text-xs text-gray-200 mt-1 font-medium">
                  Face au Lac Léman · Cologny
                </p>
                <p className="text-[11px] text-gray-400 mt-0.5">
                  5 min de Baby Plage & Eaux-Vives
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
