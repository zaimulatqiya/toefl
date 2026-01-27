"use client";

import { motion } from "framer-motion";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { Footer } from "@/components/Footer";
import { Component as MorphingCardStack } from "@/components/morphing-card-stack";
import { CheckCircle2, Clock, Award, Wifi, ShieldCheck, AlertCircle, Lightbulb, GraduationCap, Briefcase, FileCheck, School, ArrowRight, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function ToeflPredictionPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
            {/* Background Image */}
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

      {/* --- PROBLEM & FACT SECTION --- */}
      <section className="py-12 md:py-20 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 mt-0 md:-mt-20">
          {/* Problem Card (Discovery/Search Theme) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group bg-[#D4D755] text-black p-6 pb-52 md:p-8 md:pb-8 rounded-3xl transition-all relative overflow-hidden min-h-[380px] md:min-h-[300px] flex flex-col md:justify-between hover:shadow-xl hover:shadow-[#D4D755]/20"
          >
            {/* Abstract Graphic Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 pointer-events-none" />

            {/* Isometric Grid/Element (CSS Graphic) */}
            <div className="absolute right-0 bottom-0 translate-x-10 translate-y-10 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
              <div className="w-40 h-40 border border-black/20 transform rotate-45 grid grid-cols-2 grid-rows-2">
                <div className="border border-black/20"></div>
                <div className="border border-black/20 bg-black/10"></div>
                <div className="border border-black/20"></div>
                <div className="border border-black/20"></div>
              </div>
            </div>

            {/* Illustration Image with Frame */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-8 w-64 h-64 md:w-60 md:h-60 group-hover:scale-105 transition-all duration-500">
              {/* Circular Backdrop/Frame */}
              <div className="absolute inset-4 rounded-full border-2 border-white/10 bg-[#b9bc27] backdrop-blur-sm z-0 transform group-hover:rotate-12 transition-transform duration-700" />
              <div className="absolute inset-4 rounded-full border border-white/80 z-0 transform -rotate-6 scale-90" />

              <img src="/assets/transparant/8.png" alt="Problem Illustration" className="relative z-10 w-full h-full object-contain drop-shadow-xl" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 text-white shadow-lg">
                <AlertCircle size={24} />
              </div>
              <p className="text-xs font-mono text-black/60 font-bold mb-2 tracking-widest">DISCOVERY</p>
              <h3 className="text-3xl font-bold mb-4 leading-tight">Permasalahannya</h3>
            </div>
            <div className="relative z-10 max-w-sm">
              <p className="text-black/70 text-lg leading-relaxed font-medium">Beberapa dari Anda mungkin merasa minder kemampuan bahasa Inggris masih dasar atau merasa tidak punya bakat.</p>
            </div>
          </motion.div>

          {/* Fact Card (Structure/Solution Theme) */}
          <motion.div
            whileHover={{ y: -5 }}
            className="group bg-[#D4D755] text-black p-6 pb-60 md:p-8 md:pb-8 rounded-3xl transition-all relative overflow-hidden min-h-[380px] md:min-h-[300px] flex flex-col md:justify-between hover:shadow-xl hover:shadow-[#D4D755]/20"
          >
            {/* Abstract Graphic Background */}
            <div className="absolute inset-0 bg-gradient-to-bl from-white/20 to-transparent opacity-50 pointer-events-none" />

            {/* Isometric UI/Structure Graphic */}
            <div className="absolute right-0 bottom-0 translate-x-4 translate-y-6 opacity-30 group-hover:scale-105 transition-transform duration-500 pointer-events-none">
              {/* Simple Isometric Stack Simulation */}
              <div className="relative w-32 h-32">
                <div className="absolute top-0 right-10 w-16 h-16 border border-black/20 bg-white/10 transform skew-x-12 rotate-[-30deg] z-10 backdrop-blur-sm"></div>
                <div className="absolute top-8 right-4 w-16 h-4 border border-black/20 bg-black/10 transform skew-x-12 rotate-[-30deg] z-20 shadow-lg"></div>
                <div className="absolute top-16 right-16 w-12 h-12 border border-black/20 rounded-full bg-transparent transform skew-x-12 rotate-[-30deg] z-0"></div>
              </div>
            </div>

            {/* Illustration Image */}
            {/* Illustration Image with Frame */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-15 w-72 h-72 md:w-72 md:h-72 group-hover:scale-105 transition-all duration-500 z-0">
              {/* Hexagon/Geometric Backdrop/Frame */}
              <div className="absolute inset-12 border-2 border-dashed border-black/10 rounded-3xl bg-[#b9bc27] backdrop-blur-sm z-0 transform rotate-3 group-hover:-rotate-3 transition-transform duration-700 shadow-sm" />
              <div className="absolute inset-12 border border-black/20 rounded-3xl z-0 transform -rotate-3 scale-105" />

              <img src="/assets/transparant/7.png" alt="Solution Illustration" className="relative z-10 w-full h-full object-contain drop-shadow-xl" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center mb-6 text-white shadow-lg">
                <Lightbulb size={24} />
              </div>
              <p className="text-xs font-mono text-black/60 font-bold mb-2 tracking-widest">SOLUTION</p>
              <h3 className="text-3xl font-bold mb-4 leading-tight">Faktanya</h3>
            </div>

            <div className="relative z-10 max-w-sm">
              <p className="text-black/70 text-lg leading-relaxed font-medium">Cukup dengan mengikuti TEST TOEFL di English Skill kalian sudah bisa meningkatkan peluang kerja & karir, memperluas komunikasi dan sumber wawasan.</p>
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

      {/* --- USAGE SECTION --- */}
      <section className="py-16 md:py-24 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-block px-3 py-1 rounded bg-[#D4D755]/20 text-black text-xs font-bold uppercase tracking-wide">Nilai</span>
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
                      <div className="w-10 h-10 rounded-full bg-[#D4D755] flex items-center justify-center shrink-0">
                        <GraduationCap className="text-black" size={20} />
                      </div>
                    ),
                  },
                  {
                    id: "usage-2",
                    title: "Pendukung Lamaran Kerja",
                    description: "Nilai tambah untuk CV profesional Anda dalam melamar di perusahaan multinasional.",
                    icon: (
                      <div className="w-10 h-10 rounded-full bg-[#D4D755] flex items-center justify-center shrink-0">
                        <Briefcase className="text-black" size={20} />
                      </div>
                    ),
                  },
                  {
                    id: "usage-3",
                    title: "Lampiran Test CPNS dan BUMN",
                    description: "Memenuhi persyaratan administrasi negara untuk seleksi CPNS, BUMN, dan Kediknasan.",
                    icon: (
                      <div className="w-10 h-10 rounded-full bg-[#D4D755] flex items-center justify-center shrink-0">
                        <FileCheck className="text-black" size={20} />
                      </div>
                    ),
                  },
                  {
                    id: "usage-4",
                    title: "Persyaratan S1, S2, atau S3",
                    description: "Diterima untuk pendaftaran universitas dalam negeri.",
                    icon: (
                      <div className="w-10 h-10 rounded-full bg-[#D4D755] flex items-center justify-center shrink-0">
                        <School className="text-black" size={20} />
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
              <div className="bg-white rounded-lg p-5 md:p-8 aspect-[1.58/1] md:aspect-[1/1.4] flex flex-col items-center justify-between text-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

                {/* Header Section (Desktop) */}
                <div className="hidden md:flex flex-col items-center justify-between w-full h-full relative z-10">
                  <div className="w-full flex flex-col items-center">
                    <div className="w-10 h-10 md:w-16 md:h-16 mb-2 md:mb-4 relative">
                      <Award className="w-full h-full text-slate-900" />
                    </div>
                    <h3 className="text-sm md:text-2xl font-serif font-bold text-slate-900 mb-1 md:mb-1 leading-tight">CERTIFICATE OF TOEFL</h3>
                    <p className="text-[10px] md:text-xs text-slate-500 uppercase tracking-widest mb-1 md:mb-8">Prediction Score Report</p>
                  </div>

                  <div className="w-full h-px bg-slate-200 mb-2 md:mb-8"></div>

                  {/* Body Section */}
                  <div className="w-full">
                    <p className="text-[10px] md:text-sm text-slate-600 mb-1 md:mb-2">This is to certify that</p>
                    <p className="text-base md:text-xl font-medium font-serif text-slate-900 italic mb-3 md:mb-8">Student Name</p>
                  </div>

                  {/* Footer Section */}
                  <div className="mt-auto grid grid-cols-2 w-full gap-4 text-left">
                    <div>
                      <p className="text-[8px] md:text-[10px] text-slate-400 uppercase">Listening</p>
                      <p className="font-medium text-slate-900 text-sm md:text-base">550</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] md:text-[10px] text-slate-400 uppercase">Reading</p>
                      <p className="font-medium text-slate-900 text-sm md:text-base">550</p>
                    </div>
                  </div>

                  {/* Stamp */}
                  <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-14 h-14 md:w-20 md:h-20 border-2 md:border-4 border-red-800/20 rounded-full flex items-center justify-center rotate-[-20deg]">
                    <span className="text-[8px] md:text-[10px] text-red-900 font-bold text-center leading-none">
                      OFFICIAL
                      <br />
                      VALID
                    </span>
                  </div>
                </div>

                {/* Mobile Image */}
                <div className="md:hidden relative z-10 w-full h-full flex items-center justify-center">
                  <img src="/assets/sertif-1.jpeg" alt="Certificate Preview" className="w-full h-full object-contain scale-125" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DISCLAIMER SECTION --- */}
      <section className="py-20 px-6 bg-[#0F1005] relative">
        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-2xl group text-left">
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4D755]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

            <div className="relative z-10 flex flex-col md:flex-row items-center">
              {/* Content Side */}
              <div className="flex-1 p-8 md:p-10 space-y-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center shadow-lg shadow-black/20 transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                    <AlertCircle className="text-white w-7 h-7" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h4 className="font-bold text-2xl text-black tracking-tight">Disclaimer Penting</h4>
                    <div className="h-1 w-12 bg-[#D4D755] rounded-full mt-1"></div>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    "TOEFL adalah merek terdaftar Educational Testing Service (ETS).",
                    " TOEFL Prediction Test yang diselenggarakan oleh ENGLISH SKILL adalah simulasi dari TOEFL tes dari ETS ITP dan skor yang didapat adalah prediksi.",
                    " Sertifikat yang diperoleh dari Tes ini dapat digunakan sebagai tolak ukur kemampuan bahasa inggris peserta tes.",
                    " Kami tidak menerima jual beli sertifikat, Karena Nilai pada sertifikat harus lah sesuai dengan nilai dari hasil test yang diu jikan kepada peserta.",
                    "Penggunaan sertifikat TOEFL sebagai syarat sidang skripsi, thesis, wisuda dan lampiran pekerjaan dikembalikan kepada kebijakan kampus atau instansi lembaga masing-masing.",
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-start group/item">
                      <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-black/10">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#D4D755]" />
                      </div>
                      <span className="text-base leading-relaxed text-gray-600">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image Side */}
              {/* Image Side */}
              <div className="relative w-full md:w-[45%] h-80 md:h-auto overflow-hidden flex items-end justify-center md:justify-end md:self-stretch">
                {/* Modern Frame Design */}
                <div className="absolute inset-6 md:inset-y-8 md:inset-r-12 md:inset-l-0 bg-gray-50/80 rounded-[2.5rem] border border-gray-100 z-0 transform rotate-1 transition-transform group-hover:rotate-0 duration-500">
                  <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(#D4D755_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-30"></div>
                </div>

                {/* Accent Dashed Frame */}
                <div className="absolute inset-8 md:inset-y-10 md:inset-r-16 md:inset-l-4 border-2 border-dashed border-[#D4D755]/40 rounded-[2rem] z-0 transform -rotate-1 transition-transform group-hover:rotate-0 duration-500"></div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:via-white/10 md:to-white z-10" />

                <img
                  src="/assets/transparant/12.png"
                  alt="Illustration"
                  className="relative z-20 w-auto h-[100%] md:h-[100%] object-contain -mb-4 md:-mb-8 md:-mr-12 transform md:group-hover:scale-105 transition-transform duration-700 ease-in-out drop-shadow-2xl"
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
              <div className="space-y-2 mb-4">
                <p className="text-xl md:text-xl font-bold tracking-[0.3em] text-[#121217]/60 uppercase">Limited Seats</p>
                <div className="flex justify-center gap-2 text-[#121217]/60 animate-bounce">
                  <ArrowRight className="rotate-90 w-12 h-12" />
                  <ArrowRight className="rotate-90 w-12 h-12" />
                  <ArrowRight className="rotate-90 w-12 h-12" />
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
