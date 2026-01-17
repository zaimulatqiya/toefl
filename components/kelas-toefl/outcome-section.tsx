"use client";

import { Target } from "lucide-react";
import { OutcomeItem } from "@/components/kelas-toefl/outcome-item";

export function OutcomeSection() {
  return (
    <section className="py-20 px-6 bg-[#121217] relative border-y border-white/5">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-block p-3 rounded-full bg-[#D4D755]/10 mb-4">
          <Target size={40} className="text-[#D4D755]" />
        </div>
        <h2 className="text-bg font-bold text-gray-400 uppercase tracking-widest">Target Kelas Ini</h2>
        <div className="text-6xl md:text-8xl font-black text-white tracking-tighter">
          Score <span className="text-[#D4D755]">500++</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          <OutcomeItem text="Tanpa Pusing" />
          <OutcomeItem text="Tanpa Bingung" />
          <OutcomeItem text="Dibimbing Sampai Paham" />
        </div>
      </div>
    </section>
  );
}
