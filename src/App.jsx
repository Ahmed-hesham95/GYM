import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import PricingPage from "./pages/PricingPage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0d0d0d] text-white font-sans selection:bg-[#ff4500] selection:text-white flex flex-col justify-between">
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/FAQ" element={<FaqPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}