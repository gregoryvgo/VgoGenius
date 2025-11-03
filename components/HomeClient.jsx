"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

export default function HomeClient() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  // Προσομοίωση μικρού preload (0.8s) για smooth είσοδο
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowContent(true), 200);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Fade-in εμφάνιση περιεχομένου όταν μπαίνει στο viewport
  useEffect(() => {
    if (!showContent) return;
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
  }, [showContent]);

  // Οθόνη φόρτωσης
  if (loading)
    return (
      <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999] transition-all">
        <Image
          src="/images/logo.webp"
          alt="VgoGenius Logo"
          width={288}
          height={288}
          priority
          className="w-72 h-auto animate-pulse drop-shadow-[0_0_30px_#e2841a]"
        />
      </div>
    );

  // Κύριο περιεχόμενο
  return (
    <main
      className={`relative bg-black text-white overflow-visible min-h-screen transition-opacity duration-700 ${
        showContent ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* HERO SECTION */}
      <section className="relative z-10 fade-in py-12">
        <Hero />
      </section>

      {/* SLIDER SECTION */}
      <section className="relative z-20 fade-in py-12">
        <Slider />
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="relative z-30 fade-in py-12">
        <Testimonials />
      </section>

      {/* CONTACT SECTION */}
      <section className="relative z-40 fade-in py-12">
        <ContactForm />
      </section>
    </main>
  );
}
