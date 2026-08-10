import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaUser, FaEnvelope, FaLock, FaDumbbell } from "react-icons/fa";

export default function AuthModal({ isOpen, onClose, onAuthSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (isSignUp) {
      if (!formData.name || !formData.email || !formData.password) {
        setError("يرجى ملء جميع الحقول المطلوب");
        return;
      }
      
      // حفظ بيانات المستخدم الجديد في localStorage
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      };

      localStorage.setItem("gym_registered_user", JSON.stringify(newUser));
      localStorage.setItem("gym_active_user", JSON.stringify({ name: formData.name, email: formData.email }));

      onAuthSuccess(newUser);
      onClose();
    } else {
      // Sign In Validation
      if (!formData.email || !formData.password) {
        setError("Please enter your email and password");
        return;
      }

      const savedUser = JSON.parse(localStorage.getItem("gym_registered_user"));

      if (savedUser && savedUser.email === formData.email && savedUser.password === formData.password) {
        localStorage.setItem("gym_active_user", JSON.stringify({ name: savedUser.name, email: savedUser.email }));
        onAuthSuccess(savedUser);
        onClose();
      } else if (savedUser && savedUser.email !== formData.email) {
        setError("This email is not registered with us, please create an account first");
      } else {
        // تسجيل دخول افتراضي تجريبي لو لم يكن هناك حساب مسجل من قبل
        const defaultUser = { name: formData.email.split("@")[0], email: formData.email };
        localStorage.setItem("gym_active_user", JSON.stringify(defaultUser));
        onAuthSuccess(defaultUser);
        onClose();
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-md bg-[#0f0f0f] border border-neutral-800 rounded-3xl p-8 shadow-2xl overflow-hidden"
        >
          {/* Neon Glow Effects Background */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#ff4500]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#ff4500]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-neutral-400 hover:text-white p-2 rounded-full bg-neutral-900 border border-neutral-800 transition-colors"
          >
            <FaTimes className="text-sm" />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#ff4500]/10 border border-[#ff4500]/30 text-[#ff4500] text-xl mb-3">
              <FaDumbbell />
            </div>
            <h2 className="text-2xl font-black text-white tracking-wide">
              {isSignUp ? "Create New Account" : "Log In"}
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              {isSignUp ? "Join the Muscle Club community now" : "Welcome back to your gym"}
            </p>
          </div>

          {/* Error Alert */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs text-center font-medium"
            >
              {error}
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {isSignUp && (
              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm" />
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-neutral-900/80 border border-neutral-800 text-white placeholder-neutral-500 text-sm rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-[#ff4500] transition-colors"
                />
              </div>
            )}

            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-neutral-900/80 border border-neutral-800 text-white placeholder-neutral-500 text-sm rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-[#ff4500] transition-colors"
              />
            </div>

            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full bg-neutral-900/80 border border-neutral-800 text-white placeholder-neutral-500 text-sm rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:border-[#ff4500] transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#ff4500] hover:bg-[#e03d00] text-white font-bold text-sm py-3.5 rounded-xl shadow-lg shadow-[#ff4500]/25 transition-all active:scale-[0.98] mt-2"
            >
              {isSignUp ? "Create account" : "Log in"}
            </button>
          </form>

          {/* Toggle Sign In / Sign Up */}
          <div className="mt-6 text-center text-xs text-neutral-400">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}
            <button
              type="button"
              onClick={() => {
                setIsSignUp(!isSignUp);
                setError("");
              }}
              className="text-[#ff4500] font-bold hover:underline cursor-pointer ml-1"
            >
              {isSignUp ? "Log in" : "Create account"}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}