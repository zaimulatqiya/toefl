"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { ArrowRight, Send, AlertTriangle, Users, Loader2 } from "lucide-react";

export default function DaftarToeflPage() {
  const router = useRouter();
  const [loadingStep, setLoadingStep] = useState<string | null>(null);

  const handleLinkClick = (href: string, step: string) => {
    setLoadingStep(step);
    setTimeout(() => {
      window.open(href, "_blank");
      setLoadingStep(null);
    }, 1500);
  };
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#0F1005] text-white overflow-hidden relative">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80rem] h-[50rem] bg-radial-gradient from-[#D4D755]/10 via-transparent to-transparent opacity-60 blur-3xl -z-10 pointer-events-none" />

      <div className="w-full max-w-md md:max-w-2xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-10 relative">
          <div className="inline-flex items-center justify-center mb-6 group cursor-default">
            <Image src="/assets/logo-2.png" alt="English Skill Education Logo" width={100} height={100} className="w-24 h-auto object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl" />
          </div>
          <h1 className="text-2xl md:text-3xl font-medium text-zinc-100 tracking-tight mb-3">English Skill Education</h1>
          <p className="text-sm md:text-base text-zinc-500 max-w-xs md:max-w-lg mx-auto leading-relaxed">
            Syarat Mengikuti <span className="text-[#D4D755]/90 font-bold">TEST TOEFL</span> Adalah Sebagai Berikut :
          </p>
        </div>

        {/* Main Card */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-1 overflow-hidden shadow-2xl shadow-black/50">
          <div className="bg-zinc-900/40 rounded-[20px] p-6 space-y-8 relative">
            {/* Step 1 */}
            <div className="relative pl-14">
              {/* Connection Line */}
              <div className="absolute left-5 top-10 bottom-[-32px] w-px bg-zinc-800"></div>

              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center z-10 shadow-sm text-zinc-500 transition-colors">
                <span className="text-xs font-mono text-white">1</span>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Join Saluran WhatsApp</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">Klik Tombol Disini</p>
                </div>

                <button
                  onClick={() => handleLinkClick("#", "step1")}
                  disabled={loadingStep === "step1"}
                  className="group relative flex items-center justify-between w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800/50 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-green-500/10 text-green-400">
                      <FontAwesomeIcon icon={faWhatsapp} className="w-[18px] h-[18px]" />
                    </div>
                    <span className="text-xs font-medium text-zinc-300 group-hover:text-white">Join WhatsApp</span>
                  </div>
                  {loadingStep === "step1" ? <Loader2 size={16} className="text-zinc-600 animate-spin" /> : <ArrowRight size={16} className="text-white group-hover:text-zinc-300 transition-colors" />}
                </button>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative pl-14">
              {/* Connection Line */}
              <div className="absolute left-5 top-10 bottom-[-50px] w-px bg-zinc-800"></div>

              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center z-10 shadow-sm text-zinc-500">
                <span className="text-xs font-mono text-white">2</span>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Join Saluran Telegram</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">Klik Tombol disini</p>
                </div>

                <button
                  onClick={() => handleLinkClick("#", "step2")}
                  disabled={loadingStep === "step2"}
                  className="group relative flex items-center justify-between w-full p-3 rounded-lg bg-zinc-900 border border-zinc-800/50 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-300 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-md bg-blue-500/10 text-blue-400">
                      <Send size={18} strokeWidth={1.5} />
                    </div>
                    <span className="text-xs font-medium text-zinc-300 group-hover:text-white">Join Telegram</span>
                  </div>
                  {loadingStep === "step2" ? <Loader2 size={16} className="text-zinc-600 animate-spin" /> : <ArrowRight size={16} className="text-white group-hover:text-zinc-300 transition-colors" />}
                </button>
              </div>
            </div>

            {/* Warning Block */}
            <div className="relative bg-red-500/5 border border-red-500/10 rounded-xl p-4 ml-12">
              <div className="flex gap-3 items-start">
                <AlertTriangle size={16} className="text-red-400/80 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-xs font-medium text-red-200">Warning !!!</p>
                  <p className="text-xs text-red-200/50 leading-relaxed">Jangan Klik Syarat Nomer 3 Sebelum Syarat Nomer 1 & 2 Terpenuhi, Karena Data tidak akan terinput otomatis sebelum melakukan syarat 1 & 2.</p>
                </div>
              </div>
            </div>

            {/* Step 3 (Final) */}
            <div className="relative pl-14">
              <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-gradient-to-b from-[#D4D755] to-[#B0B340] flex items-center justify-center z-10 shadow-[0_0_20px_-5px_rgba(212,215,85,0.5)] text-zinc-950">
                <span className="text-xs font-mono font-bold">3</span>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <h3 className="text-sm font-medium text-zinc-100">Gabung Group</h3>
                  <p className="text-xs text-zinc-500 mt-0.5">Klik Tombol Disini</p>
                </div>

                <button
                  onClick={() => handleLinkClick("", "step3")}
                  disabled={loadingStep === "step3"}
                  className="relative overflow-hidden w-full group p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 mt-1 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  <span className="text-sm font-medium text-zinc-900">{loadingStep === "step3" ? "Memuat..." : "Gabung Group"}</span>
                  {loadingStep === "step3" ? <Loader2 size={18} className="text-zinc-900 animate-spin" /> : <Users size={18} strokeWidth={1.5} className="text-zinc-900" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
