"use client";

import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

export function DisclaimerSection() {
  return (
    <section className="py-20 px-6 bg-[#0F1005] relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative overflow-hidden rounded-3xl bg-white shadow-2xl group text-left"
        >
          {/* Background Effects */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4D755]/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

          <div className="relative z-10 flex flex-col md:flex-row items-center">
            {/* Content Side */}
            <div className="flex-1 p-8 md:p-10 space-y-6 relative z-10">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.6 }} viewport={{ once: true }} className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center shadow-lg shadow-black/20 transform -rotate-3 group-hover:rotate-0 transition-transform duration-300">
                  <AlertCircle className="text-white w-7 h-7" strokeWidth={2.5} />
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-black tracking-tight">Disclaimer Penting</h4>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }} // equivalent to w-12
                    transition={{ delay: 0.5, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="h-1 bg-[#D4D755] rounded-full mt-1"
                  />
                </div>
              </motion.div>

              <ul className="space-y-4">
                {[
                  "TOEFL adalah merek terdaftar Educational Testing Service (ETS).",
                  " TOEFL Prediction Test yang diselenggarakan oleh ENGLISH SKILL adalah simulasi dari TOEFL tes dari ETS ITP dan skor yang didapat adalah prediksi.",
                  " Sertifikat yang diperoleh dari Tes ini dapat digunakan sebagai tolak ukur kemampuan bahasa inggris peserta tes.",
                  " Kami tidak menerima jual beli sertifikat, Karena Nilai pada sertifikat harus lah sesuai dengan nilai dari hasil test yang diu jikan kepada peserta.",
                  "Penggunaan sertifikat TOEFL sebagai syarat sidang skripsi, thesis, wisuda dan lampiran pekerjaan dikembalikan kepada kebijakan kampus atau instansi lembaga masing-masing.",
                ].map((text, i) => (
                  <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }} viewport={{ once: true }} className="flex gap-4 items-start group/item">
                    <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-black/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4D755]" />
                    </div>
                    <span className="text-base leading-relaxed text-gray-600">{text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full md:w-[45%] h-80 md:h-auto overflow-hidden flex items-end justify-center md:justify-end md:self-stretch"
            >
              {/* Modern Frame Design */}
              <div className="absolute inset-6 md:inset-y-8 md:inset-r-12 md:inset-l-0 bg-gray-50/80 rounded-[2.5rem] border border-gray-100 z-0 transform rotate-1 transition-transform group-hover:rotate-0 duration-500">
                <div className="absolute inset-0 rounded-[2.5rem] bg-[radial-gradient(#D4D755_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-30"></div>
              </div>

              {/* Accent Dashed Frame */}
              <div className="absolute inset-8 md:inset-y-10 md:inset-r-16 md:inset-l-4 border-2 border-dashed border-[#D4D755]/40 rounded-[2rem] z-0 transform -rotate-1 transition-transform group-hover:rotate-0 duration-500"></div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent md:bg-gradient-to-l md:from-transparent md:via-white/10 md:to-white z-10" />

              <motion.img
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                src="/assets/transparant/12.png"
                alt="Illustration"
                className="relative z-20 w-auto h-[100%] md:h-[100%] object-contain -mb-4 md:-mb-8 md:-mr-12 transform md:group-hover:scale-105 transition-transform duration-700 ease-in-out drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
