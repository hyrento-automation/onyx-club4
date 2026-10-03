"use client";

import { useState } from "react";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SpacesSection from "@/components/SpacesSection";
import DisciplinesSection from "@/components/DisciplinesSection";
import ScheduleSection from "@/components/ScheduleSection";
import VideoBreakSection from "@/components/VideoBreakSection";
import PricingSection from "@/components/PricingSection";
import CorporateSection from "@/components/CorporateSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import MapSection from "@/components/MapSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedDiscipline, setSelectedDiscipline] = useState("Séance Découverte");

  const handleOpenBooking = (discipline?: string) => {
    if (discipline) {
      setSelectedDiscipline(discipline);
    } else {
      setSelectedDiscipline("Séance Découverte");
    }
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-[#0c0c0e] text-white selection:bg-[#d4af37] selection:text-[#0c0c0e] relative overflow-x-hidden">
        {/* Navigation */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        {/* 1. Hero Section */}
        <HeroSection onOpenBooking={() => handleOpenBooking()} />

        {/* 2. About / Concept Section */}
        <AboutSection onOpenBooking={() => handleOpenBooking()} />

        {/* 3. Les Espaces (Spaces Showcase) */}
        <SpacesSection onOpenBooking={() => handleOpenBooking()} />

        {/* 4. Disciplines & Cours (7 Disciplines) */}
        <DisciplinesSection
          onSelectDiscipline={(name) => handleOpenBooking(name)}
        />

        {/* 5. Daily Schedule Breakdown */}
        <ScheduleSection onOpenBooking={() => handleOpenBooking()} />

        {/* 6. Full-Width Video / Reel Break */}
        <VideoBreakSection onOpenBooking={() => handleOpenBooking()} />

        {/* 7. Tarifs / Membership Pricing Grid */}
        <PricingSection onOpenBooking={() => handleOpenBooking()} />

        {/* 8. Corporate & Team Section */}
        <CorporateSection onOpenBooking={() => handleOpenBooking()} />

        {/* 9. Final CTA & Booking Banner */}
        <FinalCtaSection onOpenBooking={() => handleOpenBooking()} />

        {/* 10. Map & Location Section */}
        <MapSection />

        {/* 11. Minimal Luxury Footer */}
        <Footer />

        {/* Interactive Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          selectedDiscipline={selectedDiscipline}
        />
      </main>
    </SmoothScrollProvider>
  );
}
