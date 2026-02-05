"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { AtSign, ArrowRight, UserPlus, AlertTriangle, Users, Instagram, Loader2 } from "lucide-react";

export default function DaftarToeflPage() {
  const router = useRouter();
  const [loadingStep, setLoadingStep] = useState<string | null>(null);

  useEffect(() => {
    setLoadingStep(null);
  }, []);

  const handleLinkClick = (href: string, step: string) => {
    setLoadingStep(step);
    setTimeout(() => {
      window.open(href, "_blank");
      setLoadingStep(null);
    }, 1500);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-white text-zinc-900 overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[50rem] bg-radial-gradient from-[#D4D755]/20 via-transparent to-transparent opacity-60 blur-3xl -z-10 pointer-events-none" />

      <div className="w-full max-w-md md:max-w-2xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 relative">
          <div className="inline-flex items-center justify-center mb-6 group cursor-default">
            <Image src="/assets/logo.png" alt="English Skill Education Logo" width={100} height={100} className="w-24 h-auto object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-xl" />
          </div>
          <h1 className="text-2xl md:text-3xl font-medium text-zinc-900 tracking-tight mb-3">English Skill Education</h1>
          <p className="text-sm md:text-base text-zinc-600 max-w-xs md:max-w-lg mx-auto leading-relaxed">
            Selesaikan langkah berikut untuk mengikuti ujian ulang <span className="text-[#0F1005] font-bold">TEST TOEFL</span>.
          </p>
        </div>

        {/* Main Card */}
        <div className="backdrop-blur-xl bg-white/60 border border-zinc-200/60 rounded-3xl p-1 overflow-hidden shadow-2xl shadow-zinc-200/50 ring-1 ring-zinc-100">
          <div className="bg-white/80 rounded-[20px] p-6 space-y-8 relative">
            {/* Step 1 */}
            <div className="relative pl-14">
              {/* Connection Line */}
              <div className="absolute left-5 top-10 bottom-[-32px] w-px bg-zinc-200"></div>

              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center z-10 shadow-sm text-zinc-600 transition-colors">
                <span className="text-xs font-mono text-zinc-800">1</span>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-sm font-medium text-zinc-900">Tag 3 Teman</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">Di kolom komentar postingan Instagram</p>
                </div>

                <button
                  onClick={() => handleLinkClick("#", "step1")}
                  disabled={loadingStep === "step1"}
                  className="group relative flex items-center justify-between w-full p-3 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer touch-manipulation shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-pink-50 text-pink-500">
                      <Instagram size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">Buka Postingan</span>
                  </div>
                  {loadingStep === "step1" ? <Loader2 size={16} className="text-zinc-400 animate-spin" /> : <ArrowRight size={16} className="text-zinc-400 group-hover:text-zinc-600 transition-colors" />}
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-14">
              {/* Connection Line */}
              <div className="absolute left-5 top-10 bottom-[-50px] w-px bg-zinc-200"></div>

              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center z-10 shadow-sm text-zinc-600">
                <span className="text-xs font-mono text-zinc-800">2</span>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-sm font-medium text-zinc-900">Follow Instagram</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">Ikuti akun resmi @SkillEducation</p>
                </div>

                <button
                  onClick={() => handleLinkClick("#", "step2")}
                  disabled={loadingStep === "step2"}
                  className="group relative flex items-center justify-between w-full p-3 rounded-lg bg-white border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer touch-manipulation shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-blue-50 text-blue-500">
                      <UserPlus size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-medium text-zinc-600 group-hover:text-zinc-900 transition-colors">Follow Akun</span>
                  </div>
                  {loadingStep === "step2" ? <Loader2 size={16} className="text-zinc-400 animate-spin" /> : <ArrowRight size={16} className="text-zinc-400 group-hover:text-zinc-600 transition-colors" />}
                </button>
              </div>
            </div>

            {/* Warning Block */}
            <div className="relative bg-red-50 border border-red-100 rounded-xl p-4 ml-12">
              <div className="flex gap-3 items-start">
                <AlertTriangle size={16} className="text-red-500 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-medium text-red-700">Verifikasi Wajib</p>
                  <p className="text-xs text-red-600/80 leading-relaxed">Selesaikan langkah 1 &amp; 2 terlebih dahulu. Data Anda tidak akan terinput jika melewati tahapan ini.</p>
                </div>
              </div>
            </div>

            {/* Step 3 (Final) */}
            <div className="relative pl-14">
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center z-10 shadow-sm text-zinc-600">
                <span className="text-xs font-mono text-zinc-800">3</span>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-sm font-medium text-zinc-900">Gabung Group Whatsapp</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">Akses materi dan jadwal ujian</p>
                </div>

                <button
                  onClick={() => handleLinkClick("", "step3")}
                  disabled={loadingStep === "step3"}
                  className="relative overflow-hidden w-full group p-3.5 rounded-xl bg-zinc-900 border border-zinc-900 hover:bg-zinc-800 transition-all duration-300 flex items-center justify-center gap-2 mt-1 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer touch-manipulation shadow-md shadow-zinc-200"
                >
                  <span className="text-sm font-medium text-white">{loadingStep === "step3" ? "Memuat..." : "Gabung Sekarang"}</span>
                  {loadingStep === "step3" ? <Loader2 size={18} className="text-white animate-spin" /> : <Users size={18} strokeWidth={1.5} className="text-white" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
