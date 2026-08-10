import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Pricing />
      <FAQ />
    </div>
  );
}