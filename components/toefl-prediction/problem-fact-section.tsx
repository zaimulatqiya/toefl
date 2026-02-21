"use client";

import { motion } from "framer-motion";
import { AlertCircle, Lightbulb } from "lucide-react";

export function ProblemFactSection() {
  return (
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
  );
}
