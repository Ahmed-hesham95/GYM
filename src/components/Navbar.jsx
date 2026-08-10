import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import AuthModal from "./AuthModal";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  // التأكد من وجود مستخدم مسجل عند تحميل الصفحة
  useEffect(() => {
    const activeUser = localStorage.getItem("gym_active_user");
    if (activeUser) {
      setUser(JSON.parse(activeUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("gym_active_user");
    setUser(null);
    setShowUserDropdown(false);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "FaqPage", href: "/FAQ" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* 1. Logo */}
            <div className="flex items-center gap-2 cursor-pointer">
              <span className="text-[#ff4500] text-2xl sm:text-3xl">💪</span>
              <span className="font-black text-xl sm:text-2xl tracking-wider text-white">
                Muscle club gym
              </span>
            </div>

            {/* 2. Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm font-medium text-neutral-300 hover:text-[#ff4500] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* 3. Auth State / Signup / User Profile */}
            <div className="flex items-center gap-3">
              {user ? (
                // إذا كان المستخدم مسجل دخوله
                <div className="relative">
                  <button
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="flex items-center gap-2 bg-neutral-900 border border-neutral-800 hover:border-[#ff4500] text-white px-4 py-2 rounded-full transition-all text-xs sm:text-sm font-semibold"
                  >
                    <FaUserCircle className="text-[#ff4500] text-base" />
                    <span>{user.name}</span>
                  </button>

                  {/* Dropdown Menu للـ User */}
                  <AnimatePresence>
                    {showUserDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute right-0 mt-2 w-48 bg-[#0f0f0f] border border-neutral-800 rounded-2xl p-2 shadow-2xl z-50"
                      >
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center gap-2 px-4 py-2.5 text-xs text-red-400 hover:bg-red-500/10 rounded-xl transition-colors font-semibold"
                        >
                          <FaSignOutAlt />
                          <span>Log out</span>
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                // زر التسجيل لو المستخدم غير مسجل
                <button
                  onClick={() => setIsAuthOpen(true)}
                  className="bg-[#ff4500] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold hover:bg-[#e03d00] transition-all shadow-lg shadow-[#ff4500]/20 active:scale-95"
                >
                  Sign up
                </button>
              )}

              {/* Burger Menu Button (الموبايل) */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-neutral-300 hover:text-white p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-2xl focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-[#0a0a0a] border-b border-neutral-800 overflow-hidden"
            >
              <div className="px-6 pt-4 pb-6 space-y-4 flex flex-col">
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-neutral-300 hover:text-[#ff4500] font-medium text-base transition-colors py-1 border-b border-neutral-900/50"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Auth Modal Component */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onAuthSuccess={(userData) => setUser(userData)}
      />
    </>
  );
}