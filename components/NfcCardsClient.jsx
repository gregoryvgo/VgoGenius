"use client";

import React from "react";
import Image from "next/image";

export default function NfcCardsClient() {
  const steps = [
    {
      num: "01",
      title: "Πλησιάστε ή Σκανάρετε",
      desc: "Ο πελάτης ακουμπάει το smartphone του στην κάρτα NFC ή σκανάρει το QR Code στο stand.",
    },
    {
      num: "02",
      title: "Άμεση Μεταφορά",
      desc: "Ανοίγει αυτόματα η επίσημη φόρμα αξιολόγησης της επιχείρησής σας στο Google Maps.",
    },
    {
      num: "03",
      title: "5 Αστέρια σε 5 Δεύτερα",
      desc: "Ο πελάτης αφήνει την κριτική του άμεσα, χωρίς να χρειάζεται να ψάχνει το όνομά σας.",
    },
  ];

  const faqs = [
    {
      q: "Χρειάζεται κάποια μηνιαία συνδρομή;",
      a: "Όχι! Πληρώνετε μόνο μία φορά για την αγορά της κάρτας ή του stand. Η λειτουργία τους είναι δωρεάν για πάντα.",
    },
    {
      q: "Ποια η διαφορά μεταξύ NFC Card και QR Stand;",
      a: "Η NFC Card είναι φορητή σε μέγεθος πιστωτικής, ιδανική για να την έχετε μαζί σας ή στο ταμείο. Το QR Stand είναι επιτραπέζιο plexiglass stand, ιδανικό για τραπέζια εστίασης, πάγκους και reception.",
    },
    {
      q: "Λειτουργεί με όλα τα κινητά;",
      a: "Ναι! Όλα τα σύγχρονα κινητά διαθέτουν NFC, ενώ το QR Code εξασφαλίζει ότι ακόμα και τα παλαιότερα κινητά μπορούν να αξιολογήσουν άμεσα.",
    },
    {
      q: "Πώς συνδέεται με τη σελίδα μου στο Google;",
      a: "Αναλαμβάνουμε εμείς τον πλήρη προγραμματισμό της κάρτας και του stand με το επίσημο Review Link του Google Business Profile σας πριν σας τα παραδώσουμε.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#e2841a] selection:text-black">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative pt-28 sm:pt-32 pb-12 px-4 max-w-7xl mx-auto text-center overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] h-[320px] sm:h-[500px] bg-[#e2841a]/15 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-5 sm:space-y-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-[11px] sm:text-xs font-bold tracking-widest text-[#e2841a] bg-[#e2841a]/10 border border-[#e2841a]/30 rounded-full uppercase">
             Έξυπνες Κάρτες & Stands Google Reviews
          </span>

          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight leading-snug px-2">
            Μάζεψε δεκάδες <span className="text-[#e2841a]">Google Reviews</span> <br />
            με NFC Κάρτες & QR Stands!
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed px-2">
            Μετατρέψτε τους ευχαριστημένους πελάτες σας σε κριτικές 5 αστέρων στο Google Maps. Ιδανικό για ταμεία, reception και τραπέζια.
          </p>

          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
            <a
              href="/epikoinonia"
              className="w-full sm:w-auto bg-[#e2841a] text-black font-bold py-3.5 sm:py-4 px-8 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(226,132,26,0.6)] active:scale-95"
            >
              Παραγγείλτε Κάρτα ή Stand
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto border border-neutral-700 hover:border-[#e2841a]/60 text-slate-300 hover:text-white py-3.5 sm:py-4 px-8 rounded-full transition-all active:scale-95"
            >
              Πώς Λειτουργεί &rarr;
            </a>
          </div>

          {/* ===== NFC IMAGE ===== */}
          <div className="pt-6 sm:pt-10 flex justify-center px-2">
            <div className="relative w-full max-w-[340px] sm:max-w-[460px] h-[200px] sm:h-[240px] rounded-2xl border-2 border-[#e2841a] shadow-[0_0_30px_rgba(226,132,26,0.35)] overflow-hidden bg-neutral-900">
              <Image
                src="/images/nfc-card.webp"
                alt="Google Review NFC Card & QR Stand"
                fill
                unoptimized
                sizes="(max-width: 640px) 340px, 460px"
                className="object-cover object-[50%_45%]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== ΠΩΣ ΛΕΙΤΟΥΡΓΕΙ ===== */}
      <section id="how-it-works" className="py-16 sm:py-20 px-4 max-w-6xl mx-auto border-t border-neutral-900 scroll-mt-12">
        <div className="text-center mb-12 sm:mb-16 space-y-2 sm:space-y-3">
          <h2 className="text-2xl sm:text-4xl font-bold">Πώς Λειτουργεί</h2>
          <p className="text-slate-400 text-sm sm:text-base">3 απλά βήματα για να αποκτήσετε περισσότερες αξιολογήσεις</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => (
            <div key={step.num} className="bg-neutral-950 p-6 sm:p-8 rounded-2xl border border-neutral-800 relative group hover:border-[#e2841a]/50 transition-all text-left">
              <div className="text-4xl sm:text-5xl font-black text-[#e2841a]/30 group-hover:text-[#e2841a] transition-colors mb-3">
                {step.num}
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== ΧΑΡΑΚΤΗΡΙΣΤΙΚΑ & ΠΛΕΟΝΕΚΤΗΜΑΤΑ ===== */}
      <section className="py-16 sm:py-20 px-4 max-w-6xl mx-auto border-t border-neutral-900">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div className="space-y-5 sm:space-y-6 text-left">
            <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
              Γιατί κάθε επιχείρηση χρειάζεται μια <span className="text-[#e2841a]">NFC Card ή QR Stand</span>;
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Οι περισσότεροι πελάτες φεύγουν ευχαριστημένοι αλλά ξεχνούν να αφήσουν κριτική. Οι έξυπνες κάρτες και τα επιτραπέζια stands μηδενίζουν την απόσταση και διευκολύνουν τον πελάτη στη στιγμή.
            </p>

            <ul className="space-y-3 sm:space-y-4">
              {[
                "Επιλογή ανάμεσα σε φορητή NFC κάρτα ή επιτραπέζιο QR Stand",
                "Αύξηση τοπικού SEO & κατάταξης στο Google Maps",
                "Ενίσχυση εμπιστοσύνης από νέους πελάτες",
                "Ανθεκτικό υλικό (PVC κάρτα / Plexiglass stand)",
                "Συνδυασμός τεχνολογίας NFC & δυναμικού QR Code",
                "Χωρίς συνδρομές, κρυφά κόστη ή εφαρμογές",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-200 text-sm sm:text-base">
                  <span className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#e2841a]/20 text-[#e2841a] flex items-center justify-center font-bold text-xs">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Κάρτα Προσφοράς / Παραγγελίας */}
          <div className="bg-gradient-to-b from-neutral-900 to-black p-6 sm:p-8 rounded-3xl border border-[#e2841a]/40 shadow-[0_0_40px_rgba(226,132,26,0.15)] text-center space-y-5 sm:space-y-6">
            <div className="inline-block px-3.5 py-1 bg-[#e2841a]/20 text-[#e2841a] text-xs font-bold rounded-full">
              CUSTOM PRINT & PROGRAMMING
            </div>

            <h3 className="text-xl sm:text-2xl font-bold">Αποκτήστε Κάρτες & Stands</h3>
            <p className="text-xs sm:text-sm text-slate-400">Παραδίδονται έτοιμα προγραμματισμένα με το σύνδεσμο του καταστήματός σας.</p>

            <div className="p-5 sm:p-6 bg-neutral-950 rounded-2xl border border-neutral-800 text-left space-y-3">
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-slate-300">NFC Κάρτα ή QR Stand</span>
                <span className="text-emerald-400 font-bold">Επιλογή σας</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-slate-300">Προγραμματισμός & QR</span>
                <span className="text-emerald-400 font-bold">Περιλαμβάνεται</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-slate-300">Εκτύπωση Λογοτύπου</span>
                <span className="text-emerald-400 font-bold">Περιλαμβάνεται</span>
              </div>
              <div className="flex justify-between items-center text-xs sm:text-sm">
                <span className="text-slate-300">Μηνιαία Συνδρομή</span>
                <span className="text-emerald-400 font-bold">0€ / Για πάντα</span>
              </div>
            </div>

            <a
              href="/epikoinonia"
              className="block w-full py-3.5 sm:py-4 bg-[#e2841a] text-black font-bold rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(226,132,26,0.4)] active:scale-95"
            >
              Ζητήστε Προσφορά / Παραγγελία
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-16 sm:py-20 px-4 max-w-4xl mx-auto border-t border-neutral-900">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Συχνές Ερωτήσεις</h2>
        <div className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-neutral-950 p-5 sm:p-6 rounded-2xl border border-neutral-800 space-y-2 text-left">
              <h3 className="font-bold text-base sm:text-lg text-[#e2841a]">{faq.q}</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}