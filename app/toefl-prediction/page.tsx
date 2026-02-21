"use client";

import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/toefl-prediction/hero-section";
import { ProblemFactSection } from "@/components/toefl-prediction/problem-fact-section";
import { BenefitsSection } from "@/components/toefl-prediction/benefits-section";
import { UsageSection } from "@/components/toefl-prediction/usage-section";
import { DisclaimerSection } from "@/components/toefl-prediction/disclaimer-section";
import { RegistrationSteps } from "@/components/toefl-prediction/registration-steps";

export default function ToeflPredictionPage() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white selection:bg-[#D4D755] selection:text-black overflow-x-hidden">
      <HeroSection />
      <ProblemFactSection />
      <BenefitsSection />
      <UsageSection />
      <DisclaimerSection />
      <RegistrationSteps />
      <Footer />
    </main>
  );
}
