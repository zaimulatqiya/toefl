"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, backgroundColor: "#1f1f22", boxShadow: "0 0 20px rgba(212, 215, 85, 0.4)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => scrollToSection("daftar-sekarang")}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 md:gap-3 bg-[#09090b] text-white px-6 py-4 md:px-10 md:py-5 rounded-full text-base md:text-xl font-bold shadow-2xl hover:shadow-xl hover:shadow-black/20 transition-all border border-black/5 overflow-hidden cursor-pointer"
          >
            {/* Shimmer Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12" />

            <span className="relative z-10 flex items-center gap-2">Amankan Kursi Sekarang</span>
            <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#D4D755] text-black flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shadow-lg shadow-[#D4D755]/20 shrink-0">
              <ArrowRight size={18} className="md:w-5 md:h-5" strokeWidth={2.5} />
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
