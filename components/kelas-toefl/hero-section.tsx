"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { GetStartedButton } from "@/components/ui/get-started-button";

export function HeroSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 md:pt-40 px-6 overflow-hidden flex flex-col items-center justify-between min-h-[80vh] pb-0">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[30rem] pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(closest-side, rgba(212, 215, 85, 0.15) 0%, rgba(212, 215, 85, 0) 100%)",
          filter: "blur(100px)",
          zIndex: 0,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 mt-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1A1A] border border-[#D4D755]/30 text-[#D4D755] font-medium text-xs md:text-sm mx-auto mb-4 tracking-wide uppercase shadow-lg shadow-[#D4D755]/5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4D755] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4D755]"></span>
          </span>
          <span>Cuma 99rb Aja</span>
        </motion.div>

        <div className="space-y-4">
          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1]">
            KELAS TOEFL <span className="text-[#D4D755]">ONLINE</span>
          </motion.h1>
          <motion.h2 initial="hidden" animate="visible" variants={fadeInUp} className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white/90">
            Kuasai TOEFL Dengan Bimbingan Terarah.
          </motion.h2>
        </div>

        <motion.p initial="hidden" animate="visible" variants={fadeInUp} className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium pt-2">
          Belajar TOEFL jadi lebih mudah, terstruktur, dan interaktif. Siap untuk kebutuhan kuliah, beasiswa, atau melamar kerja.
        </motion.p>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <button
            onClick={() => scrollToSection("materi-kelas")}
            className="w-full sm:w-auto px-8 py-4 rounded-full text-white/70 hover:text-white bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 transition-all text-base font-medium cursor-pointer"
          >
            Lihat Materi Kelas
          </button>
        </motion.div>
      </div>

      {/* Hero Image & Graphic Elements - Image at Bottom */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-[500px] mx-auto mt-12 z-20">
        {/* Glowing Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[#D4D755]/10 rounded-full blur-[80px] pointer-events-none" />

        {/* Abstract Decorations */}
        <div className="absolute -top-6 -left-6 w-12 h-12 border border-[#D4D755]/30 rounded-full animate-pulse opacity-60" />
        <div className="absolute top-1/2 -right-8 w-24 h-24 border border-[#D4D755]/10 rounded-full border-dashed animate-[spin_10s_linear_infinite]" />
        <div className="absolute -bottom-4 left-10 w-2 h-2 bg-[#D4D755] rounded-full animate-bounce" />

        {/* Main Image */}
        <div className="relative z-10 group flex justify-center items-end">
          <img src="/assets/transparant/9.png" alt="Kelas Preview" className="w-64 h-auto object-contain drop-shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-700" />
        </div>
      </motion.div>
    </section>
  );
}
