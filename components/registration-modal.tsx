"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, User, MapPin, Calendar, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RegistrationModal({ isOpen, onClose }: RegistrationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    birthPlace: "",
    birthDate: "",
    whatsapp: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);

    // Construct WhatsApp message
    const message = `Halo, saya ingin mendaftar TOEFL Prediction.\n\nData Diri:\nNama: ${formData.fullName}\nTempat Lahir: ${formData.birthPlace}\nTanggal Lahir: ${formData.birthDate}\nWhatsApp: ${formData.whatsapp}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/6282122223333?text=${encodedMessage}`; // Replace number with actual one if known, using placeholder

    // For now just close or maybe redirect to WA
    // window.open(whatsappUrl, '_blank');
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[#121217] border border-[#D4D755]/20 rounded-3xl shadow-2xl overflow-hidden"
            >
              {/* Decorative Header Background */}
              <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#D4D755]/10 to-transparent pointer-events-none" />

              {/* Close Button */}
              <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors z-20 cursor-pointer">
                <X size={20} />
              </button>

              <div className="p-8 relative z-10">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 rounded-full bg-white/10 mx-auto flex items-center justify-center mb-4 shadow-lg shadow-black/20 backdrop-blur-sm p-3">
                    <img src="/assets/logo-2.png" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <h2 className="text-2xl font-bold text-white mb-2">Formulir Pendaftaran</h2>
                  <p className="text-gray-400 text-sm">Silahkan isi data diri Anda dengan benar</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Nama Lengkap */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Nama Lengkap</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-[#D4D755] transition-colors">
                        <User size={18} />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4D755]/50 focus:ring-1 focus:ring-[#D4D755]/50 transition-all"
                        placeholder="Masukan nama lengkap sesuai KTP"
                      />
                    </div>
                  </div>

                  {/* Tempat Kelahiran */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Tempat Kelahiran</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-[#D4D755] transition-colors">
                        <MapPin size={18} />
                      </div>
                      <input
                        type="text"
                        name="birthPlace"
                        value={formData.birthPlace}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4D755]/50 focus:ring-1 focus:ring-[#D4D755]/50 transition-all"
                        placeholder="Kota kelahiran"
                      />
                    </div>
                  </div>

                  {/* Tanggal Lahir */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Tanggal Lahir</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-[#D4D755] transition-colors">
                        <Calendar size={18} />
                      </div>
                      <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4D755]/50 focus:ring-1 focus:ring-[#D4D755]/50 transition-all [color-scheme:dark]"
                      />
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1">Nomer WhatsApp</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-3.5 text-gray-500 group-focus-within:text-[#D4D755] transition-colors">
                        <Phone size={18} />
                      </div>
                      <input
                        type="tel"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#D4D755]/50 focus:ring-1 focus:ring-[#D4D755]/50 transition-all"
                        placeholder="Contoh: 08123456789"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full bg-[#D4D755] hover:bg-[#c0c34b] text-[#121217] font-bold py-4 rounded-xl shadow-lg shadow-[#D4D755]/20 hover:shadow-[#D4D755]/30 transform hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                    >
                      Kirim Pendaftaran
                    </button>
                    <p className="text-center text-xs text-gray-500 mt-4">Data Anda aman dan hanya digunakan untuk keperluan pendaftaran.</p>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
