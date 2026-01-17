"use client";

import { motion } from "framer-motion";

export function MateriCard({ icon: Icon, title, desc, color, bg, border }: { icon: any; title: string; desc: string; color: string; bg: string; border: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      tabIndex={0}
      className={`group p-8 rounded-3xl bg-[#121217] border border-white/5 hover:border-opacity-100 focus:border-opacity-100 focus:outline-none ${border} transition-all duration-300 relative overflow-hidden flex flex-col h-full`}
    >
      <div className={`absolute -right-4 -top-4 w-24 h-24 ${bg} rounded-full blur-2xl opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-opacity`} />

      <div className={`w-14 h-14 rounded-2xl ${bg} flex items-center justify-center mb-6 text-white group-hover:scale-110 group-focus:scale-110 transition-transform duration-300 relative z-10`}>
        <Icon className={color} size={28} />
      </div>

      <h3 className="text-xl font-bold mb-3 text-white relative z-10">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed relative z-10">{desc}</p>
    </motion.div>
  );
}
