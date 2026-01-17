"use client";

import { motion } from "framer-motion";
import { Laptop, BookOpen, FileText, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

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
    <main className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-24 relative overflow-hidden bg-[#0F1005] text-white selection:bg-[#D4D755] selection:text-black">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[50rem] bg-radial-gradient from-[#D4D755]/10 via-transparent to-transparent opacity-60 blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[60rem] h-[40rem] bg-[#D4D755]/5 opacity-30 blur-3xl -z-10 rounded-full pointer-events-none" />

      {/* Header Badge */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#121217] border border-white/10 shadow-lg shadow-[#D4D755]/5 text-xs font-semibold tracking-wide text-gray-300 uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4D755] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4D755]"></span>
          </span>
          Situs Resmi
        </span>
      </motion.div>

      {/* Logo Image */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="mb-8">
        <img src="/assets/logo-2.png" alt="English Skill Logo" className="w-24 h-24 object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
      </motion.div>

      {/* Headings */}
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-16 relative z-10">
        <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
          Informasi & Pendaftaran <br />
          <span className="text-[#D4D755] drop-shadow-sm">Kampung Inggris</span>
        </motion.h1>

        <motion.p initial="hidden" animate="visible" variants={fadeInUp} className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          English Skill. Pusat pembelajaran bahasa terpercaya dengan metode modern untuk meningkatkan kemampuan komunikasi global Anda.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-5xl mb-24 relative z-10">
        <HomeFnCard icon={Laptop} title="Info Kelas Online" description="Belajar fleksibel dari mana saja dengan kurikulum terstruktur." delay={0.1} />
        <HomeFnCard icon={BookOpen} title="Kelas TOEFL Online" description="Persiapan intensif skor maksimal dengan tutor berpengalaman." delay={0.2} href="/kelas-toefl"/>
        <HomeFnCard icon={FileText} title="Test TOEFL Prediction" description="Ukur kemampuan bahasa Inggris Anda sekarang. Hasil instan!" delay={0.3} href="/toefl-prediction" />
        <HomeFnCard icon={GraduationCap} title="Info Beasiswa 50%" description="Program hemat Kampung Inggris untuk pelajar berprestasi." delay={0.4} />
      </motion.div>

      {/* Footer / Verification Area */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="w-full max-w-4xl p-6 rounded-2xl bg-[#121217] border border-white/5 text-center space-y-3 backdrop-blur-md">
        <div className="flex items-center justify-center gap-2 text-[#D4D755]">
          <CheckCircle2 size={16} />
          <p className="font-bold text-sm text-white">Yayasan Global Operation Indonesia Verified</p>
        </div>
        <p className="text-xs text-gray-500 font-mono">Sk-Diknas : 421.9/4958/418.20/2020 • Sk-Kumham : AHU-0013778.AH.01.04 Tahun 2020</p>
      </motion.div>

      <div className="mt-12 opacity-60 hover:opacity-100 transition-opacity">
        <Footer />
      </div>
    </main>
  );
}

// --- Local Component for Card --- //
interface HomeFnCardProps {
  icon: any;
  title: string;
  description: string;
  delay: number;
  href?: string;
  highlight?: boolean;
}

function HomeFnCard({ icon: Icon, title, description, delay, href, highlight }: HomeFnCardProps) {
  const content = (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      whileHover={{ y: -5 }}
      className={`group relative flex items-start gap-5 p-6 rounded-3xl border transition-all duration-300 h-full overflow-hidden ${
        highlight ? "bg-[#121217] border-[#D4D755]/50 hover:shadow-[0_0_30px_-5px_rgba(212,215,85,0.3)]" : "bg-[#121217] border-white/10 hover:border-white/20 hover:bg-[#1a1a20]"
      }`}
    >
      {/* Glow Effect for Highlighted Card */}
      {highlight && <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#D4D755]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#D4D755]/20 transition-colors" />}

      <div className={`shrink-0 p-3.5 rounded-2xl flex items-center justify-center transition-colors ${highlight ? "bg-[#D4D755] text-black" : "bg-white/5 text-[#D4D755] group-hover:bg-[#D4D755] group-hover:text-black"}`}>
        <Icon size={24} />
      </div>

      <div className="flex-1">
        <h3 className={`font-bold text-lg mb-1 ${highlight ? "text-white" : "text-white group-hover:text-[#D4D755] transition-colors"}`}>{title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">{description}</p>
      </div>

      <div className={`mt-2 ${highlight ? "text-[#D4D755]" : "text-gray-600 group-hover:text-white"} transition-colors`}>
        <ArrowRight size={20} className="-rotate-45 group-hover:rotate-0 transition-transform duration-300" />
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {content}
      </Link>
    );
  }

  return content;
}
