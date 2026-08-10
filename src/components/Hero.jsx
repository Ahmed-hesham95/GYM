import React, { useState } from "react";
import { motion } from "framer-motion";

// قم بتعديل مسار صورة اللوجو حسب مكان حفظها في مشروعك
import { assets } from "../assets/assets";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-white">
            Your <span className="text-[#ff4500]">Fitness Journey</span> Starts{" "}
            <span className="text-[#ff4500]">Here</span>
          </h1>
          <p className="mt-6 text-neutral-400 text-base md:text-lg max-w-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Habitasse lacus a sit
            ultrices sem nulla donec pulvinar. Vitae nam laoreet senectus
            porttitor aliquet.
          </p>
        </motion.div>

        {/* Right Side Hover Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative perspective-1000 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="relative z-10 rounded-3xl overflow-hidden border-2 border-neutral-800 bg-neutral-900 shadow-2xl h-[500px]"
            animate={{
              scale: isHovered ? 1.03 : 1,
              borderColor: isHovered ? "#ff4500" : "#262626",
              rotateY: isHovered ? 10 : 0,
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Base Image (Athlete) */}
            <motion.img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800"
              alt="Gym Athlete"
              className="absolute inset-0 w-full h-full object-cover"
              animate={{
                opacity: isHovered ? 0 : 1,
                scale: isHovered ? 1.2 : 1,
                filter: isHovered ? "blur(10px)" : "blur(0px)",
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />

            {/* Second Image (Muscle Club Logo) */}
            <motion.img
              src={assets.club}
              alt="Muscle Club"
              className="absolute inset-0 w-full h-full object-contain p-6 bg-black"
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.7,
                rotate: isHovered ? 0 : -10,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}