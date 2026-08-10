import React from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaDumbbell,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-900 bg-[#080808] text-white py-12 overflow-hidden">
      {/* خلفية مع إضاءة نيون متحركة ببطء */}
      <motion.div
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#ff4500]/15 blur-[90px] rounded-full pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
        
        {/* 1. الشعار مع انيميشن حركة العضلة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start gap-3"
        >
          <div className="flex items-center gap-2 font-black text-2xl tracking-wider text-white group cursor-pointer">
            <motion.span
              animate={{ rotate: [0, -15, 15, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="text-[#ff4500] text-3xl inline-block"
            >
              💪
            </motion.span>
            <span className="group-hover:text-[#ff4500] transition-colors">Muscle club gym</span>
          </div>
        </motion.div>

        {/* 2. عنصر تفاعلي وسطى (شعار الجيم عائم مع تأثير النبض) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotateY: 180 }}
            transition={{ duration: 0.6 }}
            className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-[#ff4500]/30 flex items-center justify-center shadow-lg shadow-[#ff4500]/10 cursor-pointer"
          >
            <FaDumbbell className="text-[#ff4500] text-2xl animate-pulse" />
          </motion.div>
        </motion.div>

        {/* 3. تفاصيل التواصل مع أنيميشن وتفاعل عند الماوس */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-2.5 text-xs text-neutral-300 md:text-right"
        >
          {/* الايميل */}
          <motion.div
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 md:justify-end cursor-pointer group"
          >
            <span className="group-hover:text-[#ff4500] transition-colors">abc@design.com</span>
            <FaEnvelope className="text-[#ff4500] text-sm group-hover:scale-125 transition-transform" />
          </motion.div>

          {/* التليفون */}
          <motion.div
            whileHover={{ x: -5 }}
            className="flex items-center gap-2 md:justify-end cursor-pointer group"
          >
            <span className="group-hover:text-[#ff4500] transition-colors dir-ltr">010 99242865</span>
            <motion.div
              animate={{ rotate: [0, -10, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 2 }}
            >
              <FaPhone className="text-[#ff4500] text-sm group-hover:scale-125 transition-transform" />
            </motion.div>
          </motion.div>

          {/* العنوان */}
          <motion.div
            whileHover={{ x: -5 }}
            className="flex items-start gap-2 md:justify-end cursor-pointer group"
          >
            <span className="group-hover:text-[#ff4500] transition-colors max-w-xs leading-relaxed">
              10 Al Doctor Mohammed Awad Street, From Makram Ebeid - Nasr City, Cairo
            </span>
            <motion.div
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <FaLocationDot className="text-[#ff4500] text-sm shrink-0 mt-0.5 group-hover:scale-125 transition-transform" />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>

      {/* شريط حقوق الملكية السفلي */}
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-4 border-t border-neutral-900/60 text-center text-[11px] text-neutral-500">
        © {new Date().getFullYear()} Muscle Club. All rights reserved.
      </div>
    </footer>
  );
}