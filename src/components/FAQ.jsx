import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa6";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    { q: "01. What membership plans do you offer?", a: "Monthly Membership: Pay month-to-month with no long-term commitment. Annual Membership: Get the best value with a discounted rate." },
    { q: "02. Is there a contract or cancellation fee?", a: "No long-term contracts required for monthly plans. You can cancel or pause anytime with zero penalty." },
    { q: "03. Can I freeze or pause my membership?", a: "Yes, members can pause their membership for up to 3 months per year for travel or medical reasons." },
    { q: "04. Do you offer a free trial or guest pass?", a: "Yes! We offer a 1-day free pass for first-time visitors to test out our facilities and classes." },
    { q: "05. What are the operating hours?", a: "Our Premium & Standard members enjoy 24/7 access to all facilities." },
  ];

  return (
    <section id="faq" className="py-20 max-w-4xl mx-auto px-6 border-t border-neutral-900">
      <span className="text-neutral-500 uppercase tracking-widest text-xs font-bold">FAQ</span>
      <h2 className="text-3xl font-extrabold mt-2 mb-8">FREQUENTLY ASKED QUESTIONS</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-neutral-800 pb-4">
            <button
              onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              className="w-full flex justify-between items-center text-left py-2 font-bold text-base hover:text-[#ff4500] transition-colors"
            >
              <span>{faq.q}</span>
              {openFaq === index ? <FaMinus className="text-xs text-[#ff4500]" /> : <FaPlus className="text-xs" />}
            </button>

            <AnimatePresence>
              {openFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="text-neutral-400 text-sm mt-2 leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}