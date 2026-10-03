"use client";

import { motion } from "framer-motion";
import { Clock, Calendar, AlertCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ScheduleSection() {
  const { t } = useLanguage();

  return (
    <section id="horaires" className="py-24 relative bg-[#0e0e11] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-3">
            <Clock className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-[10px] tracking-[0.25em] uppercase font-semibold text-gray-300">
              {t("PLANNING HEBDOMADAIRE", "WEEKLY SCHEDULE")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            {t("Horaires des Séances", "Class Timetable")}
          </h2>
          <p className="mt-3 text-gray-400 text-sm max-w-lg mx-auto">
            {t(
              "Nos cours collectifs et créneaux individuels sont planifiés tout au long de la semaine face au lac Léman.",
              "Our group classes and individual slots are scheduled throughout the week facing Lake Geneva."
            )}
          </p>
        </div>

        {/* Visible TODO Placeholders per brief */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="p-8 rounded-3xl bg-[#141417] border border-dashed border-[#d4af37]/40 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto text-[#d4af37]">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-white">
              {t("Grille des cours hebdomadaires", "Regular Weekly Class Timetable")}
            </h3>
            <p className="text-xs text-gray-300 font-mono">
              [TODO: Regular weekly class timetable / calendar to be confirmed with client]
            </p>
            <p className="text-xs text-gray-400 max-w-md mx-auto">
              {t(
                "Consultez ou réservez votre créneau directement par WhatsApp / Téléphone au 078 613 70 21.",
                "Check or book your session directly via WhatsApp / Phone at 078 613 70 21."
              )}
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#141417] border border-dashed border-white/20 text-center space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-300">
              {t("Horaires d'ouverture & fermetures exceptionnelles", "Opening Hours & Holiday Closures")}
            </h4>
            <p className="text-xs text-gray-400 font-mono">
              [TODO: Opening hours and holiday closures to be confirmed with client]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
