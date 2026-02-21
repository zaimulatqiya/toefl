"use client";

import { motion } from "framer-motion";
import { Award, Clock, CheckCircle2, Wifi, ShieldCheck } from "lucide-react";

function BenefitCard({ icon: Icon, title, desc, color, bg }: { icon: any; title: string; desc: string; color: string; bg: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="p-2 rounded-2xl bg-white border border-[#D4D755]/20 relative overflow-hidden group hover:border-[#D4D755] transition-colors h-full flex flex-col items-center text-center shadow-lg"
    >
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#D4D755] to-transparent opacity-80" />

      <div className={`w-14 h-14 rounded-full ${bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform shadow-md`}>
        <Icon className={`${color}`} size={26} />
      </div>
      <h3 className="text-lg font-bold text-black mb-2">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

export function BenefitsSection() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 px-6 bg-[#0F1005] relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Keunggulan Program</h2>
          <p className="text-gray-400">Kenapa Anda harus mengikuti program ini sekarang?</p>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <BenefitCard icon={Award} title="Sertifikat Langsung Jadi" desc="Tidak perlu menunggu lama, hasil tes dan sertifikat keluar secara otomatis dan instan." color="text-white" bg="bg-black" />
          {/* Card 2 */}
          <BenefitCard icon={Clock} title="Waktu Fleksibel" desc="Akses tes kapan saja dan dimana saja 24 jam non-stop." color="text-white" bg="bg-black" />
          {/* Card 3 */}
          <BenefitCard icon={CheckCircle2} title="Skor Instan" desc="Skor TOEFL Anda akan muncul secara real-time." color="text-white" bg="bg-black" />
          {/* Card 4 */}
          <BenefitCard icon={Wifi} title="100% Online" desc="Mengerjakan ujian dari rumah menggunakan laptop/hp." color="text-white" bg="bg-black" />
          {/* Card 5 */}
          <BenefitCard icon={ShieldCheck} title="Sertifikat Resmi" desc="Legalitas Yayasan Global Operation sudah ber SK.Diknas dan SK.Kumham" color="text-white" bg="bg-black" />
        </motion.div>
      </div>
    </section>
  );
}
