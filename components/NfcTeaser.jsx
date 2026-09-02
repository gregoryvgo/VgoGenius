"use client";

import React from "react";
import Link from "next/link";

export default function NfcTeaser() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="relative bg-gradient-to-r from-neutral-950 via-neutral-900 to-black rounded-3xl p-8 md:p-10 border border-[#e2841a]/40 shadow-[0_0_35px_rgba(226,132,26,0.15)] overflow-hidden">
        
        {/* Glow Background Effect */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#e2841a]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Αριστερή Στήλη: Κείμενο & CTA */}
          <div className="md:col-span-8 space-y-4 text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#e2841a] bg-[#e2841a]/10 border border-[#e2841a]/30 rounded-full">
               Smart Reviews
            </span>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
              Αυξήστε τις κριτικές σας στο Google με μία{" "}
              <span className="text-[#e2841a]">NFC Κάρτα</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Οι πελάτες σας αφήνουν αξιολόγηση 5 αστέρων απλώς ακουμπώντας το κινητό τους στην κάρτα. Χωρίς αναζητήσεις, χωρίς κόπο, με εφάπαξ αγορά χωρίς συνδρομές.
            </p>

            <div className="pt-2">
              <Link
                href="/nfc-cards"
                className="inline-flex items-center gap-2 bg-[#e2841a] text-black font-bold py-3 px-6 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(226,132,26,0.5)] hover:scale-105 text-sm"
              >
                <span>Μάθετε περισσότερα </span>
                <span>&rarr;</span>
              </Link>
            </div>
          </div>

          {/* Δεξιά Στήλη: Mockup Κάρτας */}
          <div className="md:col-span-4 flex justify-center">
            <div className="w-full max-w-[260px] h-[160px] rounded-2xl border-2 border-[#e2841a]/60 bg-gradient-to-br from-neutral-900 to-black p-5 flex flex-col justify-between shadow-[0_0_25px_rgba(226,132,26,0.2)] hover:border-[#e2841a] transition-all">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold tracking-widest text-[#e2841a]">NFC REVIEW</span>
                <span className="text-xs text-slate-400">Google Maps</span>
              </div>
              <div className="text-center py-2">
                <div className="text-amber-400 text-lg tracking-widest">★★★★★</div>
                <div className="text-xs text-slate-300 font-semibold mt-1">Tap to Review</div>
              </div>
              <div className="text-[10px] text-slate-500 text-right tracking-wider">
                VgoGenius Smart Card
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}