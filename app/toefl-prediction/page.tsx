"use client";

import { motion } from "framer-motion";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { Footer } from "@/components/Footer";
import { Component as MorphingCardStack } from "@/components/morphing-card-stack";
import { CheckCircle2, Clock, Award, Wifi, ShieldCheck, AlertCircle, Lightbulb, GraduationCap, Briefcase, FileCheck, School, ArrowRight, ChevronRight } from "lucide-react";

export default function ToeflPredictionPage() {
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
    <main className="min-h-screen bg-[#09090b] text-white selection:bg-[#D4D755] selection:text-black overflow-x-hidden">
      {/* --- HERO SECTION --- */}
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
            <img src="/assets/logo.png" alt="English Skill Logo" className="w-24 md:w-32 h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500" />
          </motion.div>

          <motion.h1 initial="hidden" animate="visible" variants={fadeInUp} className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Gratis!!! <br />
            <span className="text-[#D4D755]">Test TOEFL Prediction</span>
          </motion.h1>

          <motion.p initial="hidden" animate="visible" variants={fadeInUp} className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            Tingkatkan kemampuan bahasa Inggris Anda dengan simulasi tes TOEFL standar internasional dari Yayasan Global Operation.
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
          <div className="relative mt-8 md:-mt-12 mx-auto w-full max-w-lg flex flex-col items-center justify-center">
            {/* Background Image */}
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative z-0 w-48 sm:w-64 md:w-80 -mb-10 md:-mb-20">
              <img src="/assets/transparant/3.png" alt="Student" className="w-full h-auto object-contain drop-shadow-2xl opacity-80" />
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
              <div className="absolute -inset-1 bg-gradient-to-r from-[#D4D755]/0 via-[#D4D755]/20 to-[#D4D755]/0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative bg-[#121217]/90 backdrop-blur-md border border-white/10 rounded-2xl p-1 overflow-hidden transition-all hover:border-[#D4D755]/40 shadow-2xl">
                {/* Inner styling wrapper */}
                <div className="rounded-xl bg-white/5 p-5 flex items-center gap-5 relative overflow-hidden">
                  {/* Subtle shine effect */}
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#D4D755]/10 rounded-full blur-2xl" />

                  {/* Icon Section */}
                  <div className="relative shrink-0">
                    <div className="w-14 h-14 rounded-full bg-[#D4D755] flex items-center justify-center shadow-lg shadow-[#D4D755]/20 z-10 relative">
                      <CheckCircle2 size={28} className="text-black" />
                    </div>
                    {/* Ripple/Pulse */}
                    <div className="absolute inset-0 rounded-full border border-[#D4D755]/50 animate-ping opacity-20" />
                  </div>

                  {/* Text Section */}
                  <div className="text-left space-y-1 relative z-10">
                    <p className="text-xs text-[#D4D755] font-bold tracking-widest uppercase mb-0.5">Available Now</p>
                    <p className="text-white font-bold text-lg leading-none">Pendaftaran Dibuka</p>
                    <p className="text-xs text-gray-400 flex items-center gap-1.5 pt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      Online & Flexible
                    </p>
                  </div>

                  {/* Decor arrow */}
                  <div className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2 transition-all duration-300">
                    <ArrowRight className="text-[#D4D755]" size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- PROBLEM & FACT SECTION --- */}
      <section className="py-12 md:py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mt-0 md:-mt-20">
          {/* Problem Card (Discovery/Search Theme) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group bg-[#0A0A0A] text-white p-8 pb-60 md:pb-8 rounded-3xl border border-red-500/50 md:border-white/10 md:hover:border-red-500/50 transition-all relative overflow-hidden min-h-[450px] md:min-h-[300px] flex flex-col md:justify-between"
          >
            {/* Abstract Graphic Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent opacity-50" />

            {/* Isometric Grid/Element (CSS Graphic) */}
            <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-20 group-hover:opacity-40 transition-opacity">
              <div className="w-40 h-40 border border-white/20 transform rotate-45 grid grid-cols-2 grid-rows-2">
                <div className="border border-white/20"></div>
                <div className="border border-white/20 bg-red-500/20"></div>
                <div className="border border-white/20"></div>
                <div className="border border-white/20"></div>
              </div>
            </div>

            {/* Illustration Image */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-8 w-64 h-64 md:w-60 md:h-60  group-hover:scale-105 transition-all duration-500 ">
              <img src="/assets/transparant/8.png" alt="Problem Illustration" className="w-full h-full object-contain" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mb-6 border border-red-500/30 text-red-500">
                <AlertCircle size={24} />
              </div>
              <p className="text-xs font-mono text-red-500 mb-2">DISCOVERY</p>
              <h3 className="text-3xl font-bold mb-4 leading-tight">Permasalahannya</h3>
            </div>
            <div className="relative z-10 max-w-sm">
              <p className="text-gray-400 text-lg leading-relaxed">Beberapa dari Anda mungkin merasa minder kemampuan bahasa Inggris masih dasar atau merasa tidak punya bakat.</p>
            </div>
          </motion.div>

          {/* Fact Card (Structure/Solution Theme) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group bg-[#0A0A0A] text-white p-8 pb-72 md:pb-8 rounded-3xl border border-green-500/50 md:border-white/10 md:hover:border-green-500/50 transition-all relative overflow-hidden min-h-[450px] md:min-h-[300px] flex flex-col md:justify-between"
          >
            {/* Abstract Graphic Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent opacity-50" />

            {/* Isometric UI/Structure Graphic */}
            <div className="absolute right-0 bottom-0 translate-x-4 translate-y-6 opacity-80 group-hover:scale-105 transition-transform duration-500">
              {/* Simple Isometric Stack Simulation */}
              <div className="relative w-32 h-32">
                <div className="absolute top-0 right-10 w-16 h-16 border border-white/20 bg-white/5 transform skew-x-12 rotate-[-30deg] z-10 backdrop-blur-sm"></div>
                <div className="absolute top-8 right-4 w-16 h-4 border border-white/20 bg-green-500/80 transform skew-x-12 rotate-[-30deg] z-20 shadow-lg"></div>
                <div className="absolute top-16 right-16 w-12 h-12 border border-white/20 rounded-full bg-transparent transform skew-x-12 rotate-[-30deg] z-0"></div>
              </div>
            </div>

            {/* Illustration Image */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-15 w-80 h-80 md:w-72 md:h-72 group-hover:scale-105 transition-all duration-500 z-0">
              <img src="/assets/transparant/7.png" alt="Solution Illustration" className="w-full h-full object-contain" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-6 border border-green-500/30 text-green-500">
                <Lightbulb size={24} />
              </div>
              <p className="text-xs font-mono text-green-500 mb-2">SOLUTION</p>
              <h3 className="text-3xl font-bold mb-4 leading-tight">Faktanya</h3>
            </div>

            <div className="relative z-10 max-w-sm">
              <p className="text-gray-400 text-lg leading-relaxed">Cukup dengan 1 English Skill sudah bisa meningkatkan peluang kerja & karir, memperluas komunikasi dan sumber wawasan.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="py-20 px-6 bg-[#0F1005] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Keunggulan Program</h2>
            <p className="text-gray-400">Kenapa Anda harus mengikuti program ini sekarang?</p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <BenefitCard icon={Award} title="Sertifikat Langsung Jadi" desc="Tidak perlu menunggu lama, hasil tes dan sertifikat keluar secara otomatis dan instan." color="text-[#D4D755]" bg="bg-[#D4D755]/10" />
            {/* Card 2 */}
            <BenefitCard icon={Clock} title="Waktu Fleksibel" desc="Akses tes kapan saja dan dimana saja 24 jam non-stop." color="text-[#D4D755]" bg="bg-[#D4D755]/10" />
            {/* Card 3 */}
            <BenefitCard icon={CheckCircle2} title="Skor Instan" desc="Skor TOEFL Prediction Anda akan muncul secara real-time." color="text-[#D4D755]" bg="bg-[#D4D755]/10" />
            {/* Card 4 */}
            <BenefitCard icon={Wifi} title="100% Online" desc="Mengerjakan ujian dari rumah menggunakan laptop/hp." color="text-[#D4D755]" bg="bg-[#D4D755]/10" />
            {/* Card 5 */}
            <BenefitCard icon={ShieldCheck} title="Sertifikat Resmi" desc="Diakui legalitasnya oleh Yayasan Global Operation dan Dinas Pendidikan." color="text-[#D4D755]" bg="bg-[#D4D755]/10" />
          </motion.div>
        </div>
      </section>

      {/* --- USAGE SECTION --- */}
      <section className="py-16 md:py-24 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-block px-3 py-1 rounded bg-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wide">Nilai</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Sertifikat Dapat Digunakan <br /> Sebagai
            </h2>

            <div className="w-full">
              <MorphingCardStack
                defaultLayout="stack"
                cards={[
                  {
                    id: "usage-1",
                    title: "Syarat Sidang Skripsi & Wisuda",
                    description: "Diakui di berbagai universitas nasional sebagai syarat kelulusan mahasiswa.",
                    icon: (
                      <div className="w-10 h-10 rounded-full bg-[#D4D755]/20 flex items-center justify-center shrink-0">
                        <GraduationCap className="text-yellow-700" size={20} />
                      </div>
                    ),
                  },
                  {
                    id: "usage-2",
                    title: "Pendukung Lamaran Kerja",
                    description: "Nilai tambah untuk CV profesional Anda dalam melamar di perusahaan multinasional.",
                    icon: (
                      <div className="w-10 h-10 rounded-full bg-[#D4D755]/20 flex items-center justify-center shrink-0">
                        <Briefcase className="text-yellow-700" size={20} />
                      </div>
                    ),
                  },
                  {
                    id: "usage-3",
                    title: "Lampiran Test CPNS & BUMN",
                    description: "Memenuhi persyaratan administrasi negara untuk seleksi CPNS dan BUMN.",
                    icon: (
                      <div className="w-10 h-10 rounded-full bg-[#D4D755]/20 flex items-center justify-center shrink-0">
                        <FileCheck className="text-yellow-700" size={20} />
                      </div>
                    ),
                  },
                  {
                    id: "usage-4",
                    title: "Persyaratan S1, S2, atau S3",
                    description: "Diterima untuk pendaftaran universitas dalam dan luar negeri.",
                    icon: (
                      <div className="w-10 h-10 rounded-full bg-[#D4D755]/20 flex items-center justify-center shrink-0">
                        <School className="text-yellow-700" size={20} />
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>

          {/* Visual Certificate Mockup */}
          <div className="relative w-full text-left">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-transparent opacity-20 blur-3xl rounded-full"></div>
            <div className="relative bg-slate-900 p-2 rounded-xl shadow-2xl border border-slate-800 rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Mock Certificate Header */}
              <div className="bg-white rounded-lg p-6 md:p-8 aspect-[1/1.4] flex flex-col items-center text-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

                <div className="w-16 h-16 mb-4 relative z-10">
                  <Award className="w-full h-full text-slate-900" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mb-1 z-10">CERTIFICATE OF TOEFL</h3>
                <p className="text-xs text-slate-500 uppercase tracking-widest mb-8 z-10">Prediction Score Report</p>

                <div className="w-full h-px bg-slate-200 mb-8 z-10"></div>

                <p className="text-sm text-slate-600 mb-2 z-10">This is to certify that</p>
                <p className="text-xl font-medium font-serif text-slate-900 italic mb-8 z-10">Student Name</p>

                <div className="mt-auto grid grid-cols-2 w-full gap-4 text-left z-10">
                  <div>
                    <p className="text-[10px] text-slate-400 uppercase">Listening</p>
                    <p className="font-medium text-slate-900">550</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-400 uppercase">Reading</p>
                    <p className="font-medium text-slate-900">550</p>
                  </div>
                </div>

                {/* Stamp */}
                <div className="absolute bottom-8 right-8 w-20 h-20 border-4 border-red-800/20 rounded-full flex items-center justify-center rotate-[-20deg]">
                  <span className="text-[10px] text-red-900 font-bold text-center">
                    OFFICIAL
                    <br />
                    VALID
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DISCLAIMER SECTION --- */}
      <section className="py-20 px-6 bg-[#0F1005] relative">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-[#121217] border border-[#D4D755]/30 shadow-2xl group text-left">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4D755]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

            <div className="relative z-10 flex flex-col md:flex-row items-center">
              {/* Content Side */}
              <div className="flex-1 p-8 md:p-10 space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#D4D755] flex items-center justify-center shadow-lg shadow-[#D4D755]/20 transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    <AlertCircle className="text-black w-7 h-7" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl text-white tracking-tight">Disclaimer Penting</h4>
                    <div className="h-1 w-12 bg-[#D4D755] rounded-full mt-1"></div>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    "Sertifikat ini adalah hasil simulasi (Prediction Test).",
                    "Hanya diterbitkan oleh lembaga bahasa resmi (Global Foundation).",
                    "Dapat digunakan untuk keperluan internal, Syarat Skripsi, atau lampiran kerja.",
                    "Tidak berlaku untuk beasiswa luar negeri resmi (seperti LPDP) yang mengharuskan iBT/ITP resmi dari ETS.",
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-start group/item">
                      <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5 border border-white/10 group-hover/item:border-[#D4D755] transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4D755]" />
                      </div>
                      <span className={`text-base leading-relaxed ${text.includes("Tidak berlaku") ? "text-red-300/90" : "text-gray-300"}`}>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Side */}
              <div className="relative w-full md:w-[45%] h-64 md:h-auto overflow-hidden flex items-end justify-center md:justify-end md:self-stretch">
                <div className="absolute inset-0 bg-gradient-to-t from-[#121217] via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:via-[#121217]/10 md:to-[#121217]" />

                <img
                  src="/assets/transparant/5.png"
                  alt="Illustration"
                  className="relative z-10 w-auto h-[130%] md:h-[140%] object-contain -mb-4 md:-mb-8 md:-mr-12 transform md:group-hover:scale-105 transition-transform duration-700 ease-in-out drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-20 px-6 bg-[#FAFAFA] flex justify-center">
        <div className="w-full max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#D4D755] px-6 py-16 md:px-20 md:py-24 text-center shadow-2xl shadow-[#D4D755]/30">
            {/* Dashed Border Decoration */}
            <div className="absolute inset-4 rounded-[2rem] border-2 border-dashed border-black/10 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
              {/* Icon */}
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-xl shadow-black/5 mb-8 transform hover:scale-110 transition-transform duration-300">
                <AlertCircle className="w-10 h-10 text-[#D4D755]" fill="currentColor" fillOpacity={0.2} />
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-5xl font-black text-[#121217] leading-[1.15] mb-4">
                Segera Daftar Disini Karena <br className="hidden md:block" />
                <span className="relative inline-block">
                  Kuota Sangat Terbatas
                  {/* Wavy Underline SVG */}
                  <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-4 text-white/50" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 5 10 10 5 T 20 5 T 30 5 T 40 5 T 50 5 T 60 5 T 70 5 T 80 5 T 90 5 T 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h2>

              {/* Subtitles */}
              <div className="space-y-2 mb-10">
                <p className="text-xs md:text-sm font-bold tracking-[0.3em] text-[#121217]/60 uppercase">Limited Seats</p>
                <div className="flex justify-center gap-2 text-[#121217]/60 animate-bounce">
                  <ArrowRight className="rotate-90 w-4 h-4" />
                  <ArrowRight className="rotate-90 w-4 h-4" />
                  <ArrowRight className="rotate-90 w-4 h-4" />
                </div>
              </div>

              {/* Button */}
              <GetStartedButton
                id="daftar-cta"
                text="DAFTAR SEKARANG"
                className="w-full md:w-auto bg-[#121217] hover:bg-black text-white hover:text-[#D4D755] text-lg font-bold pl-10 pr-14 py-7 h-auto rounded-xl shadow-xl hover:shadow-2xl mx-auto cursor-pointer border border-transparent hover:border-[#D4D755]/50"
              />

              {/* Footer Note */}
              <p className="mt-8 text-xs md:text-sm font-medium text-[#121217]/70 italic">*Jangan sampai kehabisan slot ujian bulan ini</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

// --- SUB COMPONENTS ---

function BenefitCard({ icon: Icon, title, desc, color, bg }: { icon: any; title: string; desc: string; color: string; bg: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      className="p-6 rounded-2xl bg-[#121217] border border-white/10 relative overflow-hidden group hover:border-[#D4D755]/30 transition-colors h-full flex flex-col items-center text-center"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4D755]/50 to-transparent opacity-50" />

      <div className={`w-14 h-14 rounded-full ${bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
        <Icon className={`${color}`} size={26} />
      </div>
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function UsageItem({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-sm transition-all">
      <div className="w-10 h-10 rounded-full bg-[#D4D755]/20 flex items-center justify-center shrink-0">
        <Icon className="text-yellow-700" size={20} />
      </div>
      <div>
        <h4 className="font-bold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-500">{desc}</p>
      </div>
    </div>
  );
}
