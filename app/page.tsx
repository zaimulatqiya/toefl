"use client";

import { motion } from "framer-motion";
import { Laptop, BookOpen, FileText, GraduationCap } from "lucide-react";
import { FeatureCard } from "../components/FeatureCard";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-24 relative overflow-hidden bg-background selection:bg-primary/30">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[40rem] bg-gradient-to-b from-[#D4D755]/30 via-[#D4D755]/5 to-transparent opacity-60 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[60rem] h-[40rem] bg-gradient-to-t from-blue-100/40 via-indigo-100/20 to-transparent opacity-50 blur-3xl -z-10 rounded-full pointer-events-none" />

      {/* Header Badge */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-secondary border border-border shadow-sm text-xs font-semibold tracking-wide text-foreground uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Situs Resmi
        </span>
      </motion.div>

      {/* Logo Image */}
      <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="mb-8">
        <img src="/assets/logo.png" alt="English Skill Logo" className="w-24 h-24 object-contain drop-shadow-sm" />
      </motion.div>

      {/* Headings */}
      <div className="max-w-4xl mx-auto text-center space-y-6 mb-16">
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.1]">
          Informasi & Pendaftaran <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/70">Kampung Inggris</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed -mt-8">
          English Skill. Pusat pembelajaran bahasa terpercaya dengan metode modern untuk meningkatkan kemampuan komunikasi global Anda.
        </motion.p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full max-w-5xl mb-24">
        <FeatureCard icon={Laptop} title="Info Kelas Online" description="Belajar fleksibel dari mana saja" iconBg="bg-amber-100/50 dark:bg-amber-900/20" iconColor="text-amber-600 dark:text-amber-400" delay={0.4} />
        <FeatureCard icon={BookOpen} title="Kelas TOEFL Online" description="Persiapan intensif skor maksimal" iconBg="bg-blue-100/50 dark:bg-blue-900/20" iconColor="text-blue-600 dark:text-blue-400" delay={0.5} />
        <FeatureCard
          icon={FileText}
          title="Test TOEFL Prediction"
          description="Ukur kemampuan bahasa Inggris"
          iconBg="bg-purple-100/50 dark:bg-purple-900/20"
          iconColor="text-purple-600 dark:text-purple-400"
          delay={0.6}
          href="/toefl-prediction"
        />
        <FeatureCard icon={GraduationCap} title="Info Beasiswa 50%" description="Program hemat Kampung Inggris" iconBg="bg-green-100/50 dark:bg-green-900/20" iconColor="text-green-600 dark:text-green-400" delay={0.7} />
      </div>

      {/* Footer / Verification Area */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }} className="w-full max-w-4xl p-6 rounded-2xl bg-secondary/30 border border-secondary text-center space-y-2 backdrop-blur-sm">
        <p className="font-semibold text-sm text-foreground/80">Yayasan Global Operation Indonesia Verified</p>
        <p className="text-xs text-muted-foreground font-mono">Sk-Diknas : 421.9/4958/418.20/2020 • Sk-Kumham : AHU-0013778.AH.01.04 Tahun 2020</p>
      </motion.div>

      
    </main>
  );
}
