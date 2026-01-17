"use client";

import { motion } from "framer-motion";
import { GraduationCap, Globe2, Briefcase, Quote, Star } from "lucide-react";

export function ValueSection() {
  return (
    <section className="py-24 px-6 bg-[#09090b] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4D755]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-2 lg:gap-20 items-center ">
        {/* Image Side (Left) */}
        <div className="order-2 lg:order-1 relative flex flex-col items-center gap-8">
          {/* Glow Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#D4D755]/10 rounded-full blur-[80px] pointer-events-none" />

          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative z-10">
            <img src="/assets/transparant/2.png" alt="Student Success" className="w-50 max-w-[400px] md:max-w-[450px] mx-auto drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 translate-y-10" />
          </motion.div>
          {/* Floating Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative z-10 w-full max-w-[400px] md:max-w-[450px] group p-1 rounded-2xl bg-gradient-to-r from-[#D4D755]/30 to-transparent"
          >
            <div className="relative bg-[#121215] p-6 rounded-xl border border-white/5 flex gap-4 items-start">
              <Quote className="text-[#D4D755] shrink-0 fill-[#D4D755]/10" size={32} />
              <div className="space-y-2">
                <p className="text-white text-lg font-medium italic">
                  &ldquo;Stop bergantung pada joki! Kamu punya potensi besar untuk <span className="text-[#D4D755] underline decoration-wavy decoration-[#D4D755]/50 underline-offset-4">menaklukkannya sendiri.</span>&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Content Side (Right) */}
        <div className="order-1 lg:order-2 space-y-10">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4D755]/10 border border-[#D4D755]/20 text-[#D4D755] text-xs font-medium uppercase tracking-wider"
            >
              <Star size={12} /> Why Choose Us
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1]">
              Buka Peluang <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4D755] to-[#c0c34b]">Masa Depanmu</span>
            </motion.h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">Skor TOEFL tinggi adalah kunci emas untuk membuka pintu gerbang pendidikan dan karir global.</p>
          </div>

          <div className="grid gap-6">
            <BenefitItem icon={GraduationCap} title="Tembus Kampus Impian" desc="Syarat mutlak untuk lanjut S1, S2, & S3 di universitas top dalam & luar negeri." delay={0.1} />
            <BenefitItem icon={Globe2} title="Raih Beasiswa Bergengsi" desc="LPDP, AAS, Chevening, dan berbagai beasiswa internasional lainnya." delay={0.2} />
            <BenefitItem icon={Briefcase} title="Karir Global & BUMN" desc="Nilai tambah signifikan untuk rekrutmen CPNS, BUMN, dan Multi-National Company." delay={0.3} />
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitItem({ icon: Icon, title, desc, delay }: { icon: any; title: string; desc: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay }}
      className="flex gap-4 items-start p-4 rounded-2xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 group"
    >
      <div className="w-12 h-12 rounded-xl bg-[#D4D755]/10 flex items-center justify-center shrink-0 text-[#D4D755] group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#D4D755]/5">
        <Icon size={24} strokeWidth={2.5} />
      </div>
      <div className="space-y-1">
        <h3 className="text-white font-bold text-lg group-hover:text-[#D4D755] transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}
