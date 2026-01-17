"use client";

import { motion } from "framer-motion";
import { Headphones, BookOpen, Puzzle, PenTool } from "lucide-react";
import { MateriCard } from "@/components/kelas-toefl/materi-card";

export function MateriSection() {
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
    <section id="materi-kelas" className="py-20 px-6 bg-[#0c0c10] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">📚 Materi Yang Akan Diajarkan</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Kurikulum komprehensif yang dirancang khusus untuk meningkatkan skor TOEFL Anda secara signifikan.</p>
        </div>

        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <MateriCard
            icon={Headphones}
            title="Listening Skill"
            desc="Melatih pemahaman audio TOEFL secara efektif dengan trik mendengarkan kata kunci."
            color="text-[#D4D755]"
            bg="bg-[#D4D755]/10"
            border="group-hover:border-[#D4D755]/50 group-focus:border-[#D4D755]/50"
          />
          <MateriCard
            icon={BookOpen}
            title="Reading Skill"
            desc="Strategi memahami teks panjang dengan cepat dan teknik skimming & scanning yang tepat."
            color="text-[#D4D755]"
            bg="bg-[#D4D755]/10"
            border="group-hover:border-[#D4D755]/50 group-focus:border-[#D4D755]/50"
          />
          <MateriCard
            icon={Puzzle}
            title="Structure Skill"
            desc="Grammar TOEFL tanpa ribet & tanpa hafalan rumus yang membosankan. Logika praktis."
            color="text-[#D4D755]"
            bg="bg-[#D4D755]/10"
            border="group-hover:border-[#D4D755]/50 group-focus:border-[#D4D755]/50"
          />
          <MateriCard
            icon={PenTool}
            title="Written Expression"
            desc="Menghindari kesalahan fatal dalam soal TOEFL dan mengenali pola soal yang sering muncul."
            color="text-[#D4D755]"
            bg="bg-[#D4D755]/10"
            border="group-hover:border-[#D4D755]/50"
          />
        </motion.div>
      </div>
    </section>
  );
}
