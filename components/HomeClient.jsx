"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import DemosShowcase from "@/components/DemosShowcase";
import NfcTeaser from "@/components/NfcTeaser";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

export default function HomeClient() {
  // Fade-in effect ΜΟΝΟ για τα στοιχεία που σκρολάρει ο χρήστης προς τα κάτω
  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    fadeEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative bg-black text-white overflow-visible min-h-screen">
      
      {/* HERO SECTION - Χωρίς καθυστερήσεις ή fade-in classes, εμφανίζεται ΑΣΤΡΑΠΙΑΙΑ */}
      <section className="relative z-10 py-12">
        <Hero />
      </section>

      {/* DEMOS SECTION */}
      <section className="relative z-20 fade-in py-12">
        <DemosShowcase compact />
      </section>

      {/* NFC TEASER SECTION */}
      <section className="relative z-25 fade-in py-6">
        <NfcTeaser />
      </section>

      {/* SLIDER SECTION - Εδώ κρατάμε το fade-in για ωραίο εφέ στο scroll */}
      <section className="relative z-30 fade-in py-12">
        <Slider />
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="relative z-40 fade-in py-12">
        <Testimonials />
      </section>

      {/* CONTACT SECTION */}
      <section className="relative z-50 fade-in py-12">
        <ContactForm />
      </section>
      
    </main>
  );
}