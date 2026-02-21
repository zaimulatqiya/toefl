"use client";

import { motion } from "framer-motion";
import { Component as MorphingCardStack } from "@/components/morphing-card-stack";
import { GraduationCap, Briefcase, FileCheck, School } from "lucide-react";

export function UsageSection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white text-black overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }} className="space-y-8">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded bg-[#D4D755]/20 text-black text-xs font-bold uppercase tracking-wide"
          >
            Nilai
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-bold leading-tight">
            Sertifikat Dapat Digunakan <br /> Sebagai
          </motion.h2>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.7 }} viewport={{ once: true }} className="w-full">
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
          </motion.div>
        </motion.div>

        {/* Visual Certificate Mockup */}
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }} viewport={{ once: true, margin: "-100px" }} className="relative w-full text-left">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-transparent opacity-20 blur-3xl rounded-full"></div>
          <div className="relative bg-slate-900 p-2 rounded-xl shadow-2xl border border-slate-800 rotate-2 hover:rotate-0 transition-transform duration-500">
            {/* Mock Certificate Header */}
            <div className="bg-white rounded-lg p-5 md:p-8 aspect-[1.58/1] md:aspect-[1/1.4] flex flex-col items-center justify-between text-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]"></div>

              {/* Desktop Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: true }}
                className="hidden md:flex relative z-10 w-full h-full items-center justify-center"
              >
                <img src="/assets/sertif-2.jpeg" alt="Certificate Preview" className="w-full h-full object-contain scale-[1.1]" />
              </motion.div>

              {/* Mobile Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                viewport={{ once: true }}
                className="md:hidden relative z-10 w-full h-full flex items-center justify-center"
              >
                <img src="/assets/sertif-1.jpeg" alt="Certificate Preview" className="w-full h-full object-contain scale-125" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
