"use client";

import { GetStartedButton } from "@/components/ui/get-started-button";

export function PriceSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6 bg-[#D4D755] text-black text-center relative overflow-hidden">
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-black/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <p className="text-lg md:text-xl font-bold uppercase tracking-widest opacity-60">Limited Offer</p>
        <h2 className="text-4xl md:text-7xl font-black leading-tight tracking-tight">
          KELAS TOEFL ONLINE
          <br />
          CUMA 99rb AJA
        </h2>
        <p className="text-xl md:text-2xl font-medium max-w-2xl mx-auto opacity-80 pb-6">Investasi kecil untuk peluang besar di masa depan. Jangan lewatkan kesempatan ini.</p>
        <div className="flex justify-center">
          <GetStartedButton onClick={() => scrollToSection("daftar-sekarang")} text="Amankan Kursi Sekarang" className="bg-black text-white hover:bg-black/80 border-transparent w-full sm:w-auto px-10 py-8 text-lg rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
