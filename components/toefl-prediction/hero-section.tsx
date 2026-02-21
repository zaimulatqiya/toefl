"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function HeroSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative pt-20 pb-12 md:pt-24 md:pb-20 px-6 overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] pointer-events-none"
        style={{
          background: "radial-gradient(closest-side, rgba(212, 215, 85, 0.2) 0%, rgba(212, 215, 85, 0) 100%)",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <div className="max-w-4xl mx-auto text-center space-y-6">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex justify-center mb-4">
          <img src="/assets/logo-2.png" alt="English Skill Logo" className="w-24 md:w-32 h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
        </motion.div>

        <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          TEST TOEFL <br />
          <span className="text-[#D4D755]">GRATIS!!!</span>
        </motion.h1>

        <motion.p initial="hidden" animate="visible" variants={fadeInUp} className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          Tingkatkan kemampuan bahasa Inggris Anda dengan tes TOEFL Prediction standar internasional.
        </motion.p>

        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => document.getElementById("daftar-cta")?.scrollIntoView({ behavior: "smooth" })}
            className="w-full md:w-auto bg-[#D4D755] hover:bg-[#c0c34b] text-black font-semibold px-8 py-3 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-[#D4D755]/20 cursor-pointer"
          >
            Ambil Tes Sekarang
          </button>
          <button className="w-full md:w-auto px-8 py-3 rounded-full text-white/80 hover:text-white hover:bg-white/5 transition-all text-sm font-medium cursor-pointer">Pelajari Lebih Lanjut</button>
        </motion.div>

        {/* Floating Status & Image Container */}
        <div className="relative mt-8 md:mt-12 mx-auto w-full max-w-lg flex flex-col items-center justify-center">
          {/* Background Image with Frame */}
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative z-0 w-[15rem] sm:w-[18rem] md:w-[20rem] -mb-12 md:-mb-20 mx-auto">
            {/* Decorative Frame */}
            <div className="absolute inset-x-4 top-8 bottom-0 border border-[#D4D755]/30 rounded-[2.5rem] bg-[#D4D755]/5 backdrop-blur-sm z-0 transform rotate-1">
              {/* Inner Glow */}
              <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-b from-[#D4D755]/0 to-[#D4D755]/10" />

              {/* Tech/Corner Accents */}
              <div className="absolute -top-[1px] -left-[1px] w-8 h-8 border-t-2 border-l-2 border-[#D4D755] rounded-tl-2xl" />
              <div className="absolute -top-[1px] -right-[1px] w-8 h-8 border-t-2 border-r-2 border-[#D4D755] rounded-tr-2xl" />
              <div className="absolute -bottom-[1px] -left-[1px] w-8 h-8 border-b-2 border-l-2 border-[#D4D755] rounded-bl-2xl" />
              <div className="absolute -bottom-[1px] -right-[1px] w-8 h-8 border-b-2 border-r-2 border-[#D4D755] rounded-br-2xl" />
            </div>

            {/* Second Offset Frame for Depth */}
            <div className="absolute inset-x-4 top-8 bottom-0 border border-[#D4D755]/10 rounded-[2.5rem] z-[-1] transform -rotate-2 scale-[0.98]" />

            {/* Image */}
            <div className="relative z-10 px-2">
              <img src="/assets/transparant/3.png" alt="Student" className="w-full h-auto object-contain drop-shadow-2xl contrast-110" />
            </div>
          </motion.div>

          {/* Floating Status Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative z-10 w-full max-w-sm group cursor-pointer"
            onClick={() => document.getElementById("daftar-cta")?.scrollIntoView({ behavior: "smooth" })}
          >
            {/* Glow Effect behind */}
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-200/0 via-gray-200/50 to-gray-200/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative bg-white/90 backdrop-blur-md border border-gray-200 rounded-2xl p-1 overflow-hidden transition-all hover:border-gray-300 shadow-2xl">
              {/* Inner styling wrapper */}
              <div className="rounded-xl bg-gray-50 p-5 flex items-center gap-5 relative overflow-hidden">
                {/* Icon Section */}
                <div className="relative shrink-0">
                  <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center shadow-lg shadow-black/10 z-10 relative">
                    <CheckCircle2 size={28} className="text-white" />
                  </div>
                  {/* Ripple/Pulse */}
                  <div className="absolute inset-0 rounded-full border border-black/10 animate-ping opacity-20" />
                </div>

                {/* Text Section */}
                <div className="text-left space-y-1 relative z-10">
                  <p className="text-xs text-gray-500 font-bold tracking-widest uppercase mb-0.5">Available Now</p>
                  <p className="text-gray-900 font-bold text-lg leading-none">Pendaftaran Dibuka</p>
                  <p className="text-xs text-gray-600 flex items-center gap-1.5 pt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    Online & Flexible
                  </p>
                </div>

                {/* Decor arrow */}
                <div className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300">
                  <ArrowRight className="text-black" size={20} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
