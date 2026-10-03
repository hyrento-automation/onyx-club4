import { MapPin, Mail, Phone, Globe, Shield, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#08080a] border-t border-white/10 pt-20 pb-12 text-white relative overflow-hidden">
      {/* Background Subtle Monogram Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#d4af37]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Giant Monogram / Luxury Headline */}
        <div className="text-center pb-16 border-b border-white/5">
          <div className="inline-block">
            <span className="font-serif text-6xl sm:text-8xl md:text-9xl font-bold tracking-[0.25em] text-white/10 hover:text-[#d4af37]/20 transition-colors duration-700 select-none block">
              ONYX
            </span>
            <p className="text-[11px] font-mono tracking-[0.4em] uppercase text-[#d4af37] -mt-3 sm:-mt-6">
              CLUB DE SPORT & BIEN-ÊTRE · COLOGNY GENÈVE
            </p>
          </div>
        </div>

        {/* Multi-column navigation and info */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 text-sm">
          {/* Col 1: About Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl tracking-widest font-bold text-white">ONYX</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              <span className="text-[10px] tracking-widest uppercase text-gray-400">GENÈVE</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed font-light">
              L&apos;institution du mouvement et de la sérénité face au Lac Léman. Une communauté exigeante réunie autour du dépassement de soi et de l&apos;art de vivre suisse.
            </p>
            <div className="pt-2 flex items-center gap-3 text-gray-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300 hover:text-[#d4af37] hover:border-[#d4af37]/40 transition flex items-center gap-1.5"
                aria-label="Instagram"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
                <span>Instagram @onyxclub</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d4af37]">
              EXPLORER
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li><a href="#lieu" className="hover:text-white transition">Le Concept Cologny</a></li>
              <li><a href="#espaces" className="hover:text-white transition">Les Espaces & Rooftop</a></li>
              <li><a href="#cours" className="hover:text-white transition">Pilates Reformer & Disciplines</a></li>
              <li><a href="#horaires" className="hover:text-white transition">Horaires des Sessions</a></li>
              <li><a href="#tarifs" className="hover:text-white transition">Tarifs & Adhésion</a></li>
              <li><a href="#corporate" className="hover:text-white transition">Solutions Corporate</a></li>
            </ul>
          </div>

          {/* Col 3: Hours & Operations */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d4af37]">
              HORAIRES D&apos;OUVERTURE
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex justify-between">
                <span>Lundi – Vendredi :</span>
                <span className="text-gray-200 font-mono">06:30 – 21:30</span>
              </li>
              <li className="flex justify-between">
                <span>Samedi :</span>
                <span className="text-gray-200 font-mono">08:00 – 19:00</span>
              </li>
              <li className="flex justify-between">
                <span>Dimanche :</span>
                <span className="text-gray-200 font-mono">08:30 – 18:00</span>
              </li>
              <li className="pt-2 text-[11px] text-[#d4af37]">
                Conciergerie & accès membre 365j / an
              </li>
            </ul>
          </div>

          {/* Col 4: Club Concierge */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d4af37]">
              LOCALISATION & CONCIERGE
            </h4>
            <div className="text-xs text-gray-400 space-y-2">
              <p className="text-white font-medium">Route de Thonon 84, 1223 Cologny</p>
              <p>Genève, Suisse</p>
              <p className="pt-1 text-gray-300">Tél : +41 22 735 00 00</p>
              <p className="text-[#d4af37]">Courriel : concierge@onyx-geneve.ch</p>
            </div>
          </div>
        </div>

        {/* Bottom legal & copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} ONYX Club Genève SA. Tous droits réservés.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300 transition">Conditions Générales</a>
            <a href="#" className="hover:text-gray-300 transition">Politique de Confidentialité</a>
            <a href="#" className="hover:text-gray-300 transition">Règlement Intérieur</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
