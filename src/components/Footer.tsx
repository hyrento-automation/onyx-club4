"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#08080a] border-t border-white/10 pt-20 pb-12 text-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Giant Monogram / Brand Headline */}
        <div className="text-center pb-16 border-b border-white/5">
          <div className="inline-block">
            {/* Circular Ring Logo above Wordmark */}
            <div className="w-14 h-14 rounded-full border-2 border-[#d4af37] mx-auto mb-4 flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <div className="w-7 h-7 rounded-full border border-[#d4af37]/60 bg-gradient-to-tr from-[#b87333] to-[#d4af37] opacity-80" />
            </div>

            <span className="font-serif text-5xl sm:text-7xl md:text-8xl font-bold tracking-[0.25em] text-white/15 select-none block">
              ONYX CLUB
            </span>
            <p className="text-[11px] font-mono tracking-[0.35em] uppercase text-[#d4af37] mt-1 sm:mt-2">
              « SPORT · LIFESTYLE · ZEN, SUR LE LAC LÉMAN »
            </p>
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mt-1">
              Stronger Happier You · Bougez. Respirez. Évoluez.
            </p>
          </div>
        </div>

        {/* Multi-column Navigation and Info */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 text-sm">
          {/* Col 1: About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl tracking-widest font-bold text-white">ONYX CLUB</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed font-light">
              {t(
                "Discipline aujourd'hui, résultats demain. Un sanctuaire de sport et de bien-être à Cologny au bord du lac Léman.",
                "Discipline today, results tomorrow. A sanctuary of sport and wellness in Cologny on Lake Geneva."
              )}
            </p>
            <div className="pt-2 text-xs font-mono text-gray-400 space-y-1">
              <p>onyxclub.ch</p>
              <p className="text-[11px] text-gray-500">[TODO: social media links to be confirmed]</p>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d4af37]">
              {t("NAVIGATION", "NAVIGATION")}
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#club" className="hover:text-white transition">{t("Le Club", "The Club")}</a></li>
              <li><a href="#activites" className="hover:text-white transition">{t("Activités & Disciplines", "Activities & Disciplines")}</a></li>
              <li><a href="#evenements" className="hover:text-white transition">{t("Événements Réalisés", "Past Events Recap")}</a></li>
              <li><a href="#nutrition" className="hover:text-white transition">{t("Bar à Protéines", "Protein Bar")}</a></li>
              <li><a href="#equipe" className="hover:text-white transition">{t("L'Équipe des Coachs", "Coaching Team")}</a></li>
              <li><a href="#tarifs" className="hover:text-white transition">{t("Tarifs (35 / 120 CHF)", "Rates (35 / 120 CHF)")}</a></li>
              <li><a href="#contact" className="hover:text-white transition">{t("Contact & Inscriptions", "Contact & Bookings")}</a></li>
            </ul>
          </div>

          {/* Col 3: Values */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d4af37]">
              {t("VALEURS DU CLUB", "OUR VALUES")}
            </h4>
            <ul className="space-y-2 text-xs text-gray-400">
              <li>• Corps · Esprit</li>
              <li>• Équilibre · Communauté</li>
              <li>• Résultats & Discipline</li>
              <li className="pt-2 text-[11px] text-[#d4af37] font-mono">
                {t("10% OFF Nouveaux Membres", "10% OFF New Members")}
              </li>
            </ul>
          </div>

          {/* Col 4: Location & WhatsApp */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d4af37]">
              {t("INFORMATIONS PRATIQUES", "PRACTICAL INFO")}
            </h4>
            <div className="text-xs text-gray-400 space-y-2">
              <p className="text-white font-medium">Chemin du Nant-d&apos;Argent 1, Cologny</p>
              <p>Geneva, Switzerland (Lac Léman)</p>
              <p className="text-gray-300 font-mono">WhatsApp : 078 613 70 21</p>
              <p className="text-[11px] font-mono text-gray-400">[TODO: opening hours to be confirmed]</p>
            </div>
          </div>
        </div>

        {/* Legal bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} ONYX CLUB (onyxclub.ch). All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Cologny · Geneva</span>
            <span>·</span>
            <span>Switzerland</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
