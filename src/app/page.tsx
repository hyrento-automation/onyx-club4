"use client";

import { useState } from "react";
import { LanguageProvider } from "@/context/LanguageContext";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import PromoBanner from "@/components/PromoBanner";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import EventsSection from "@/components/EventsSection";
import NutritionSection from "@/components/NutritionSection";
import TeamSection from "@/components/TeamSection";
import PricingSection from "@/components/PricingSection";
import ScheduleSection from "@/components/ScheduleSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState("Boxe (Boxe Technic)");

  const handleOpenBooking = (discipline?: string) => {
    if (discipline) {
      setSelectedDiscipline(discipline);
    } else {
      setSelectedDiscipline("Boxe (Boxe Technic)");
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        <main className="min-h-screen bg-[#0c0c0e] text-white selection:bg-[#d4af37] selection:text-[#0c0c0e] relative overflow-x-hidden">
          {/* Top 10% OFF Promo Banner */}
          <PromoBanner onOpenContact={() => handleOpenBooking()} />

          {/* Navigation with Brand Logo & Bilingual Switcher */}
          <Navbar onOpenBooking={() => handleOpenBooking()} />

          {/* 1. Hero Section with Brand Tagline & Poster Values */}
          <HeroSection onOpenBooking={() => handleOpenBooking()} />

          {/* 2. Le Club / About Section */}
          <AboutSection onOpenBooking={() => handleOpenBooking()} />

          {/* 3. Activités (14 activities grouped as specified) */}
          <ActivitiesSection
            onSelectActivity={(name) => handleOpenBooking(name)}
          />

          {/* 4. Past Event Recap (La Journée Sportive & Bien-être, PASS 27, Timetable) */}
          <EventsSection />

          {/* 5. Nutrition / Protein Milkshake Menu */}
          <NutritionSection />

          {/* 6. Team Section with team images and TODO placeholders */}
          <TeamSection />

          {/* 7. Official Pricing (35 CHF / 120 CHF and TODO placeholder) */}
          <PricingSection onOpenBooking={() => handleOpenBooking()} />

          {/* 8. Regular Weekly Timetable & Opening Hours Placeholders */}
          <ScheduleSection />

          {/* 9. Final CTA with 10% OFF Prominent Banner */}
          <FinalCtaSection onOpenBooking={() => handleOpenBooking()} />

          {/* 10. Contact & Location (Chemin du Nant-d'Argent 1, 078 613 70 21, emails) */}
          <MapSection />

          {/* 11. Footer with circular logo, slogans, and copyright */}
          <Footer />

          {/* Interactive Booking Modal */}
          <BookingModal
            isOpen={isBookingOpen}
            onClose={handleCloseBooking}
            selectedDiscipline={selectedDiscipline}
          />
        </main>
      </SmoothScrollProvider>
    </LanguageProvider>
  );
}
