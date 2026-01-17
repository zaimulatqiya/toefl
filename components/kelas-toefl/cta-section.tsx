"use client";

import { CheckCircle2 } from "lucide-react";
import { GetStartedButton } from "@/components/ui/get-started-button";

export function CTASection() {
  return (
    <section id="daftar-sekarang" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#D4D755]/5" />

      <div className="max-w-3xl mx-auto text-center relative z-10 space-y-10">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl font-black">🚀 Segera Daftar Sekarang</h2>
          <p className="text-xl md:text-2xl text-red-500 font-bold bg-red-500/10 inline-block px-6 py-2 rounded-full border border-red-500/20">Kuota Sangat Terbatas!</p>
        </div>

        <div className="bg-gradient-to-br from-[#1A1A20] to-black p-8 rounded-3xl border border-[#D4D755]/30 shadow-[0_0_50px_-10px_rgba(212,215,85,0.2)]">
          <div className="flex flex-col gap-6 items-center">
            <p className="text-gray-400">Kelas dimulai dalam waktu dekat. Jangan tunda kesuksesanmu.</p>
            <GetStartedButton text="DAFTAR SEKARANG - 99rb" className="w-full bg-[#D4D755] text-black hover:bg-[#c0c34b] py-4 md:py-8 text-base md:text-xl font-bold shadow-xl rounded-xl" />
            <p className="text-xs text-gray-500 flex items-center gap-2">
              <CheckCircle2 size={12} className="text-green-500" /> Garansi Pembelajaran Professional
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
