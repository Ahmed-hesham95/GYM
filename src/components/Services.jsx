import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const servicesData = [
  {
    id: 1,
    title: "Transform",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "Elevate",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Achieve",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Perform",
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Push",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Train",
    image: "https://images.unsplash.com/photo-1534367507873-d2d7e24c797f?auto=format&fit=crop&q=80&w=800",
  },
  // الكارت الجديد الخاص بالـ Fitness
  {
    id: 7,
    title: "Fitness",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 8,
    title: "UNLEASH",
    image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800",
    isFeatured: true, // كارت واسع/مميز مثل التصميم لديك
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-black text-white max-w-7xl mx-auto px-6">
      {/* Title Header */}
      <div className="mb-12">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight">
          Our Full Range of <span className="text-[#ff4500]">Fitness Services</span>
        </h2>
        <p className="mt-4 text-neutral-400 text-sm md:text-base max-w-2xl leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Habitasse lacus a sit ultrices sem nulla donec pulvinar.
        </p>
      </div>

      {/* Grid Layout (4 columns on desktop, 2 on tablet, 1 on mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {servicesData.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-neutral-800 bg-neutral-900 ${
              item.isFeatured ? "lg:col-span-1 lg:row-span-2 h-[420px] lg:h-full" : "h-[200px]"
            }`}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content & Icon */}
            <div className="absolute inset-0 p-5 flex items-end justify-between">
              <h3
                className={`font-black text-white uppercase tracking-wider ${
                  item.isFeatured ? "text-2xl md:text-3xl" : "text-base md:text-lg"
                }`}
              >
                {item.title}
              </h3>
              <FiExternalLink className="text-neutral-400 group-hover:text-[#ff4500] text-lg transition-colors" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}