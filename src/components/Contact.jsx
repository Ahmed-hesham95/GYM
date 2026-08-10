import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaCopy,
  FaCheck,
  FaDumbbell,
  FaDirections,
} from "react-icons/fa";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const whatsappNumber = "01142291469";
  const formattedNumber = "011 4229 1469";

  const handleCopy = () => {
    navigator.clipboard.writeText(whatsappNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Direct Contact",
      details: "010 99242865",
      subDetails: "We are available around the clock to answer your calls.",
      link: "tel:01099242865",
      actionText: "Call Now",
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      details: "abc@design.com",
      subDetails: "Our team responds to all messages daily.",
      link: "mailto:abc@design.com",
      actionText: "Send Email",
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      details: "24 / 7 Open All Days",
      subDetails: "We welcome you every day of the week without interruption.",
      link: "#",
      actionText: "Gym Always Ready",
    },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white pt-28 pb-20 relative overflow-hidden">
      {/* خلفية ضوئية متدرجة Ambient Glow Effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff4500]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff4500]/10 border border-[#ff4500]/30 text-[#ff4500] text-xs font-bold uppercase tracking-widest mb-4"
          >
            <FaDumbbell className="text-sm" /> Contact Us
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-black tracking-tight"
          >
            Contact Us and Start Your <span className="text-[#ff4500]">Journey Now</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-neutral-400 text-sm sm:text-base leading-relaxed"
          >
            We are here to help you with any questions or to book your first training session.
          </motion.p>
        </div>

        {/* 1. Quick Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-neutral-900/80 border border-neutral-800 hover:border-[#ff4500]/50 rounded-3xl p-6 transition-all shadow-xl backdrop-blur-md flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#ff4500]/10 border border-[#ff4500]/30 text-[#ff4500] text-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#ff4500] group-hover:text-white transition-all">
                  {info.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{info.title}</h3>
                <p className="text-lg font-bold text-[#ff4500] dir-ltr text-right mb-2">
                  {info.details}
                </p>
                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {info.subDetails}
                </p>
              </div>

              {info.link !== "#" && (
                <a
                  href={info.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-neutral-300 hover:text-white flex items-center justify-between pt-4 border-t border-neutral-800/80 transition-colors"
                >
                  <span>{info.actionText}</span>
                  <span className="text-[#ff4500]">←</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>

        {/* 2. Enhanced WhatsApp Banner with Visible Number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-emerald-950/60 via-neutral-900 to-neutral-900 border border-emerald-500/30 rounded-3xl p-6 sm:p-8 mb-12 shadow-2xl relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-5 text-center md:text-right w-full md:w-auto">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center text-3xl shrink-0 mx-auto md:mx-0">
                <FaWhatsapp />
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <span>Instant support via WhatsApp</span>
                </div>
                <h3 className="text-2xl font-black text-white dir-ltr">
                  {formattedNumber}
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  You can contact us directly on this number or copy it for quick access
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
              {/* Copy Button */}
              <button
                onClick={handleCopy}
                className="bg-neutral-800 hover:bg-neutral-700 text-neutral-200 border border-neutral-700 font-semibold px-5 py-3.5 rounded-2xl text-xs flex items-center gap-2 transition-all active:scale-95 cursor-pointer"
              >
                {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                <span>{copied ? "Copied!" : "Copy Number"}</span>
              </button>

              {/* Chat Direct Button */}
              <a
                href={`https://wa.me/+201142291469`}
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold px-6 py-3.5 rounded-2xl text-xs flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/20 active:scale-95 cursor-pointer"
              >
                <FaWhatsapp className="text-base" />
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3. Premium Interactive Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl relative"
        >
          {/* Floating Address Badge */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 bg-black/85 backdrop-blur-md border border-neutral-800 rounded-2xl p-4 sm:p-5 max-w-xs shadow-2xl">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ff4500]/20 text-[#ff4500] flex items-center justify-center text-lg shrink-0 mt-0.5">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-1">Main Branch Location</h4>
                <p className="text-xs text-neutral-300 leading-relaxed mb-3">
                  10 Street of Dr. Mohamed Awad - Branch of Mokram Awaid - Nasr City - Cairo
                </p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#ff4500] hover:underline"
                >
                  <FaDirections />
                  <span>Open Directions on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Styled Google Map Frame */}
          <div className="h-[450px] sm:h-[500px] w-full relative">
            <iframe
              title="Gym Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.181283623979!2d31.3435!3d30.0594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAzJzMzLjgiTiAzMcKwMjAnMzYuNiJF!5e0!3m2!1sen!2seg!4v1620000000000!5m2!1sen!2seg"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.1)" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

      </div>
    </div>
  );
}