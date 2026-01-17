"use client";

import { motion } from "framer-motion";
import { Video, BookOpen, Film, CheckCircle2, Award } from "lucide-react";

export function FasilitasSection() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Decorative Grid BG */}
      <div className="absolute inset-0 bg-[#0F1005] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content (Text & Features) */}
          <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1">
            <div className="text-center lg:text-left space-y-4">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-5xl font-bold leading-tight">
                🎁 Fasilitas yang <br />
                <span className="text-[#D4D755]">Kamu Dapatkan</span>
              </motion.h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0">Semua yang kamu butuhkan untuk sukses belajar TOEFL ada di sini. Tanpa biaya tambahan.</p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FeatureCard icon={Video} title="10x Live Interactive Class" subtitle="Via Zoom Meeting" delay={0.1} />
              <FeatureCard icon={BookOpen} title="E-Book Premium Strategy" subtitle="Materi Lengkap & Taktis" delay={0.2} />
              <FeatureCard icon={Film} title="Video Recording" subtitle="Replay Kapan Saja" delay={0.3} />
              <FeatureCard icon={CheckCircle2} title="FREE Test TOEFL" subtitle="Prediction Test Resmi" delay={0.4} />

              {/* Certificate Highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="sm:col-span-2 bg-gradient-to-r from-[#D4D755]/10 to-transparent border border-[#D4D755]/20 p-4 rounded-2xl flex items-center gap-4 group hover:bg-[#D4D755]/20 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-[#D4D755] flex items-center justify-center shrink-0 text-black shadow-lg shadow-[#D4D755]/20 group-hover:scale-110 transition-transform">
                  <Award size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Free E-Certificate Resmi</h3>
                  <p className="text-sm text-gray-300">Valid untuk CPNS, BUMN, & Kedinasan.</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Content (Image) */}
          <div className="w-full lg:w-1/2 relative flex justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            {/* Decorative Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#D4D755]/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border border-[#D4D755]/10 rounded-full animate-[spin_20s_linear_infinite] pointer-events-none" />

            <div className="relative z-10 w-full max-w-sm transform transition-all duration-500 flex flex-col items-center">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="w-full flex justify-center">
                <img src="/assets/transparant/1.png" alt="Fasilitas Kelas TOEFL" className="w-64 h-auto object-contain drop-shadow-2xl relative z-10 -translate-x-8" />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="z-30 -mt-14 bg-[#1A1A1A]/90 border border-[#D4D755]/30 p-4 rounded-2xl shadow-2xl flex items-center gap-4 backdrop-blur-xl min-w-[200px]"
              >
                <div className="bg-[#D4D755] p-2.5 rounded-xl text-black">
                  <Award size={24} strokeWidth={2.5} />
                </div>
                <div>
                  <p className="text-white font-bold text-base leading-none mb-1">Pilihan Terbaik</p>
                  <p className="text-[#D4D755] text-xs font-medium">Untuk masa depanmu</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, subtitle, delay }: { icon: any; title: string; subtitle: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="bg-white/5 border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-colors duration-300"
    >
      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-gray-300 group-hover:text-white transition-colors">
        <Icon size={20} />
      </div>
      <div>
        <h3 className="font-semibold text-white text-sm md:text-base">{title}</h3>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </motion.div>
  );
}
