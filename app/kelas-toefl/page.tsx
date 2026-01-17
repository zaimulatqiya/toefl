"use client";

import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/kelas-toefl/hero-section";
import { MateriSection } from "@/components/kelas-toefl/materi-section";
import { FasilitasSection } from "@/components/kelas-toefl/fasilitas-section";
import { PriceSection } from "@/components/kelas-toefl/price-section";
import { ValueSection } from "@/components/kelas-toefl/value-section";
import { OutcomeSection } from "@/components/kelas-toefl/outcome-section";
import { CTASection } from "@/components/kelas-toefl/cta-section";

export default function KelasToeflPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white selection:bg-[#D4D755] selection:text-black overflow-x-hidden font-sans">
      <HeroSection />
      <MateriSection />
      <FasilitasSection />
      <PriceSection />
      <ValueSection />
      <OutcomeSection />
      <CTASection />
      <Footer />
    </main>
  );
}
