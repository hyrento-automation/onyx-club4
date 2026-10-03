"use client";

import { useState } from "react";
import { Play, Pause, Volume2, VolumeX, Sparkles } from "lucide-react";

interface VideoBreakSectionProps {
  onOpenBooking: () => void;
}

export default function VideoBreakSection({ onOpenBooking }: VideoBreakSectionProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <section className="relative w-full py-24 sm:py-32 overflow-hidden bg-black">
      {/* Full-width Cinematic visual container */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[420px] sm:h-[580px] group">
          {/* Background Cinematic Visual representing the luxury workout atmosphere */}
          <img
            src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop"
            alt="Ambiance cinéma ONYX Club Genève"
            className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.1] scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Luxury vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-black/40 to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.8)_90%)]" />

          {/* Central Play/Atmosphere Button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label="Contrôler la vidéo"
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#d4af37] shadow-2xl hover:scale-110 hover:bg-[#d4af37] hover:text-black transition-all duration-300 group/btn mb-6"
            >
              <div className="absolute inset-0 rounded-full border border-[#d4af37] animate-ping opacity-30 pointer-events-none" />
              {isPlaying ? (
                <Pause className="w-8 h-8 fill-current ml-0.5" />
              ) : (
                <Play className="w-8 h-8 fill-current ml-1" />
              )}
            </button>

            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#d4af37] mb-2">
              IMMERSION VISUELLE · 4K REEL
            </span>

            <h3 className="text-3xl sm:text-5xl font-serif text-white tracking-tight max-w-2xl leading-tight">
              L&apos;énergie du lac, la puissance du corps.
            </h3>

            <p className="mt-3 text-xs sm:text-sm text-gray-300 max-w-lg leading-relaxed font-light">
              Une architecture minérale, un silence feutré, et le clapotis de l&apos;eau pour sublimer chaque série et chaque respiration.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full bg-[#d4af37] hover:bg-[#e09f3e] text-black text-xs font-semibold uppercase tracking-widest shadow-xl transition"
              >
                Vivre l&apos;expérience
              </button>
            </div>
          </div>

          {/* Bottom Audio Status tag */}
          <div className="absolute bottom-6 right-6 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-gray-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
            <span>SOUND: DOLBY ATMOS SPATIAL AUDIO</span>
          </div>

          {/* Bottom Left location coordinates */}
          <div className="absolute bottom-6 left-6 z-10 hidden sm:flex items-center gap-2 text-[11px] text-gray-400 font-mono">
            <span>46°13&apos;11.8&quot;N 6°11&apos;22.4&quot;E</span>
            <span>·</span>
            <span>COLOGNY WATERFRONT</span>
          </div>
        </div>
      </div>
    </section>
  );
}
