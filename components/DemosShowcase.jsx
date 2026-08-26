"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";

const categories = [
  { label: "Όλα", value: "all" },
  { label: "Επαγγελματίες & Υπηρεσίες", value: "services" },
  { label: "Καταστήματα", value: "commerce" },
  { label: "Εκπαίδευση & Portfolios", value: "education" },
];

// Η νέα σειρά που ζήτησες!
const demosData = [
  {
    id: "iatreio",
    title: "Medical & Dental Clinic",
    category: "services",
    categoryLabel: "Υγεία & Ιατρικές Υπηρεσίες",
    tag: "Astro",
    description:
      "Σύγχρονο web portal ιατρείου με αναλυτική παρουσίαση θεραπειών, βιογραφικό ιατρού και φόρμα ραντεβού.",
    image: "/images/demos/iatreio.webp",
    demoUrl: "https://iatreio.vgogenius.gr",
    features: ["Online Ραντεβού", "Παρουσίαση Θεραπειών", "SEO Optimized"],
  },
  {
    id: "sxoli-xorou",
    title: "Dance Academy & Studio",
    category: "education",
    categoryLabel: "Εκπαίδευση & Δραστηριότητες",
    tag: "TypeScript",
    description:
      "Δυναμικό site σχολής χορού με εβδομαδιαίο πρόγραμμα μαθημάτων, καθηγητές και εγγραφή σε δοκιμαστικό.",
    image: "/images/demos/sxoli-xorou.webp",
    demoUrl: "https://sxoli-xorou.vgogenius.gr",
    features: ["Εβδομαδιαίο Πρόγραμμα", "Εγγραφή Δοκιμαστικού", "Video Showcase"],
  },
  {
    id: "koureio",
    title: "Modern Barbershop & Grooming",
    category: "commerce",
    categoryLabel: "Ομορφιά & Περιποίηση",
    tag: "JavaScript",
    description:
      "Urban αισθητική για μοντέρνο κουρείο με τιμοκατάλογο υπηρεσιών, lookbook και online σύστημα κρατήσεων.",
    image: "/images/demos/koureio.webp",
    demoUrl: "https://koureio.vgogenius.gr",
    features: ["Online Booking", "Τιμοκατάλογος", "Lookbook Gallery"],
  },
  {
    id: "astro-anthopoleio",
    title: "Boutique Ανθοπωλείο (Astro)",
    category: "commerce",
    categoryLabel: "E-Commerce / Κατάστημα",
    tag: "Astro",
    description:
      "Minimal και ταχύτατη παρουσίαση ανθοπωλείου με seasonal collections και online παραγγελίες.",
    image: "/images/demos/anthopoleio-astro.webp",
    demoUrl: "https://anthopoleio-astro.vgogenius.gr",
    features: ["Astro Fast Load", "Εποχιακές Συνθέσεις", "Direct Order"],
  },
  {
    id: "anthopoleio-next",
    title: "Modern Flower Shop (Next.js)",
    category: "commerce",
    categoryLabel: "E-Commerce / Next.js",
    tag: "Next.js",
    description:
      "Πλήρες dynamic online κατάστημα λουλουδιών με slide-over cart και κατηγοριοποίηση περιστάσεων.",
    image: "/images/demos/anthopoleio-next.webp",
    demoUrl: "https://anthopoleio.vgogenius.gr",
    features: ["Interactive Cart", "Custom Checkouts", "Filter ανά Περίσταση"],
  },
  {
    id: "ydraylikos",
    title: "Τεχνικές Υπηρεσίες & Υδραυλικός",
    category: "services",
    categoryLabel: "Τεχνικά Επαγγέλματα",
    tag: "TypeScript",
    description:
      "Landing page άμεσης ανάγκης με έμφαση στις κλήσεις 24/7, κάλυψη περιοχών και αξιολογήσεις πελατών.",
    image: "/images/demos/ydraylikos.webp",
    demoUrl: "https://ydraylikos.vgogenius.gr",
    features: ["Click-to-Call 24/7", "Περιοχές Εξυπηρέτησης", "Γρήγορη Φόρτωση"],
  },
  {
    id: "wedding-invitation",
    title: "Digital Wedding Invitation & RSVP",
    category: "services",
    categoryLabel: "Events & Γάμος",
    tag: "Next.js",
    description:
      "Κομψό ψηφιακό προσκλητήριο γάμου με αντίστροφη μέτρηση, online RSVP φόρμα, χάρτη τοποθεσίας και πρόγραμμα δεξίωσης.",
    image: "/images/demos/wedding-invitation.webp",
    demoUrl: "https://wedding.vgogenius.gr",
    features: ["Online RSVP", "Live Countdown", "Google Maps", "Timeline"],
  },
  {
    id: "cv-portfolio",
    title: "Executive Interactive CV",
    category: "education",
    categoryLabel: "Personal Branding / CV",
    tag: "Astro + Tailwind",
    description:
      "Διαδραστικό βιογραφικό υψηλών επιδόσεων με live KPI drawers, dynamic filters και εξαγωγή σε καθαρό PDF.",
    image: "/images/demos/cv-portfolio.webp",
    demoUrl: "https://cv.vgogenius.gr",
    features: ["Instant PDF Export", "KPI Drawer", "Ultra Fast (Astro)", "Mobile QR"],
  },
];

export default function DemosShowcase({ compact = false }) {
  const [activeTab, setActiveTab] = useState("all");
  const demosTrackRef = useRef(null);

  const filteredDemos =
    activeTab === "all"
      ? demosData
      : demosData.filter((item) => item.category === activeTab);

  const scrollDemos = (direction) => {
    demosTrackRef.current?.scrollBy({
      left: direction * demosTrackRef.current.clientWidth * 0.82,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-mono font-bold tracking-widest text-[#e2841a] uppercase bg-[#e2841a]/10 px-3 py-1 rounded-full border border-[#e2841a]/30">
          Portfolio & Live Demos
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold mt-4 tracking-tight text-white">
          Δείγματα Έργων & <span className="text-[#e2841a]">Demos</span>
        </h1>
        <p className="text-gray-400 text-sm md:text-base mt-3 leading-relaxed">
          Δείτε άμεσα projects και πάρτε ιδέες για την αναβάθμιση της δικής σας επιχείρησης!
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveTab(cat.value)}
            className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer border ${
              activeTab === cat.value
                ? "bg-[#e2841a] text-black border-[#e2841a] shadow-[0_0_15px_rgba(226,132,26,0.3)]"
                : "bg-neutral-900 text-gray-400 border-neutral-800 hover:border-neutral-700 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {compact && (
        <div className="hidden md:flex justify-end gap-2 -mt-5 mb-4">
          <button
            type="button"
            onClick={() => scrollDemos(-1)}
            className="w-11 h-11 inline-flex items-center justify-center rounded-full border border-neutral-700 bg-neutral-950 text-white hover:border-[#e2841a] hover:text-[#e2841a] transition-colors"
            aria-label="Προηγούμενα demos"
          >
            <ArrowLeft size={19} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={() => scrollDemos(1)}
            className="w-11 h-11 inline-flex items-center justify-center rounded-full border border-neutral-700 bg-neutral-950 text-white hover:border-[#e2841a] hover:text-[#e2841a] transition-colors"
            aria-label="Επόμενα demos"
          >
            <ArrowRight size={19} aria-hidden="true" />
          </button>
        </div>
      )}

      {/* Mobile scrolls horizontally; desktop uses the arrow controls above. */}
      <div
        ref={compact ? demosTrackRef : undefined}
        className={compact
          ? "flex gap-5 overflow-x-auto snap-x snap-mandatory pb-5 -mx-6 px-6 md:mx-0 md:px-0 md:overflow-hidden"
          : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8"}
      >
        {filteredDemos.map((demo, index) => (
          <div
            key={demo.id}
            className={`group rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-[#e2841a]/60 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-[0_0_25px_rgba(226,132,26,0.15)]
              ${compact ? "min-w-[min(82vw,360px)] md:min-w-[360px] snap-start" : ""}
              lg:col-span-2 
              ${!compact && activeTab === "all" && index === 6 ? "lg:col-start-2" : ""}
            `}
          >
            {/* Image Preview Box */}
            <div className="relative aspect-video overflow-hidden bg-neutral-900">
              <span className="absolute top-3 right-3 z-20 text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded bg-black/80 text-[#e2841a] border border-neutral-700">
                {demo.tag}
              </span>
              <img
                src={demo.image}
                alt={demo.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-medium text-gray-400">{demo.categoryLabel}</span>
                <h2 className="text-lg font-bold text-white mt-1 group-hover:text-[#e2841a] transition-colors">
                  {demo.title}
                </h2>
                <p className="text-xs text-gray-400 mt-2.5 leading-relaxed">
                  {demo.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {demo.features.map((f, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-neutral-900 text-gray-300 px-2 py-0.5 rounded border border-neutral-800"
                    >
                      ✓ {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-neutral-900">
                <a
                  href={demo.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 py-2.5 px-4 bg-[#e2841a] hover:bg-[#c97112] text-black font-bold text-xs rounded-lg transition-colors shadow-md"
                >
                  Live Demo
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {compact && (
        <div className="mt-8 text-center">
          <Link
            href="/demos"
            className="inline-flex items-center gap-2 border border-[#e2841a] px-5 py-2.5 rounded-lg text-sm font-semibold text-[#e2841a] hover:bg-[#e2841a] hover:text-black transition-colors"
          >
            Δείτε όλα τα demos
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      )}
    </div>
  );
}