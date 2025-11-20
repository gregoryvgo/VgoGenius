// app/components/TimokatalogosClient.tsx
"use client";

import { useEffect, useState } from "react";

export default function TimokatalogosClient() {
  const [shake, setShake] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShake(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      lang="el"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 sm:px-6 py-28 sm:py-36 overflow-x-hidden"
    >
      <div
        className={`w-full max-w-5xl bg-black/70 border border-[#2d2d2d] rounded-3xl shadow-[0_0_50px_rgba(226,132,26,0.4)] p-6 sm:p-12 text-left leading-relaxed backdrop-blur-md transition-all duration-700 ${
          shake ? "animate-shake" : ""
        }`}
      >
        <h1
          className="
            text-lg sm:text-2xl md:text-4xl
            font-bold text-center mb-2 text-[#e2841a]
            leading-tight break-words hyphens-auto max-w-full mx-auto
          "
        >
          Τιμοκατάλογος
        </h1>

        <h2
          className="
            text-lg sm:text-2xl md:text-3xl
            font-semibold text-center mb-10 sm:mb-12 text-[#e2841a]
            leading-snug break-words hyphens-auto max-w-full mx-auto
          "
        >
          Προσφορά Κατασκευής Ιστοσελίδας
        </h2>

        <p className="text-gray-300 mb-10 indent-6">
          Η <span className="text-[#e2841a]">VgoGenius</span> σας παρουσιάζει τα
          διαθέσιμα πακέτα για τη δημιουργία και προώθηση της ιστοσελίδας σας.
          Η κατασκευή γίνεται με σύγχρονη πλατφόρμα σχεδίασης, πλήρη δυνατότητα
          SEO, ασφαλές hosting και εύκολη διαχείριση.
        </p>

        {/* First row: OnePager, Βασικό, Επαγγελματικό (3 columns on md+) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">
          {/* ⭐ OnePager */}
          <div className="bg-black border border-[#2d2d2d] rounded-2xl p-6 md:p-8 shadow-[0_0_30px_rgba(226,132,26,0.3)] hover:shadow-[0_0_50px_rgba(226,132,26,0.6)] transition-transform hover:scale-105">
            <h3 className="text-xl md:text-2xl font-semibold text-[#e2841a] mb-4">
              OnePager
            </h3>
            <p className="text-3xl md:text-4xl font-bold mb-6 text-white">250 €</p>
            <ul className="text-gray-300 text-left space-y-2">
              <li>• 1 σελίδα</li>
              <li>• Responsive design (κινητά & tablet)</li>
              <li>• Σύνδεση με social media</li>
              <li>• Βασικό SEO (τίτλοι, περιγραφές, alt text)</li>
            </ul>
          </div>

          {/* 🔥 Βασικό - HOT SALE */}
          <div className="relative bg-black border border-[#ff9d00] rounded-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(255,120,0,0.6)] hover:shadow-[0_0_60px_rgba(255,150,0,0.9)] transition-transform hover:scale-105">
            {/* Hot Sale Label */}
            <span className="absolute top-3 left-4 text-[12px] text-[#ffb347] italic tracking-wide">
              hot sale 🔥
            </span>

            <h3 className="text-xl md:text-2xl font-semibold text-[#e2841a] mb-4">
              Βασικό
            </h3>

            {/* Prices */}
            <div className="flex flex-col items-center mb-6">
              <span className="text-sm text-gray-400 line-through italic self-start ml-2 mb-1">
                450 €
              </span>

              <span className="text-3xl md:text-4xl font-bold text-white">
                349 €
              </span>
            </div>

            <ul className="text-gray-300 text-left space-y-2">
              <li>• Έως 4 σελίδες (Αρχική, Υπηρεσίες, Εταιρεία, Επικοινωνία)</li>
              <li>• Responsive design (κινητά & tablet)</li>
              <li>• Σύνδεση με social media</li>
              <li>• Βασικό SEO (τίτλοι, περιγραφές, alt text)</li>
            </ul>
          </div>

          {/* Επαγγελματικό */}
          <div className="bg-black border border-[#2d2d2d] rounded-2xl p-6 md:p-8 shadow-[0_0_40px_rgba(226,132,26,0.4)] hover:shadow-[0_0_60px_rgba(226,132,26,0.7)] transition-transform hover:scale-105">
            <h3 className="text-xl md:text-2xl font-semibold text-[#e2841a] mb-4">
              Επαγγελματικό
            </h3>
            <p className="text-3xl md:text-4xl font-bold mb-6 text-white">690 €</p>
            <ul className="text-gray-300 text-left space-y-2">
              <li>• Έως 6 σελίδες (περιλαμβάνει gallery & blog)</li>
              <li>• Προηγμένο SEO (λέξεις-κλειδιά, Google Business, Analytics)</li>
              <li>• Εγκατάσταση SSL (https)</li>
              <li>• Δυνατότητα μελλοντικών επεκτάσεων</li>
            </ul>
          </div>
        </div>

        {/* Premium centered on its own row */}
        <div className="w-full mt-10 flex justify-center">
          <div className="w-full max-w-lg bg-black border border-[#2d2d2d] rounded-2xl p-6 md:p-8 shadow-[0_0_50px_rgba(226,132,26,0.5)] hover:shadow-[0_0_70px_rgba(226,132,26,0.8)] transition-transform hover:scale-105">
            <h3 className="text-xl md:text-2xl font-semibold text-[#e2841a] mb-4 text-center">
              Premium
            </h3>
            <p className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">890 €</p>
            <ul className="text-gray-300 text-left space-y-2">
              <li>• Έως 10 σελίδες</li>
              <li>• Πλήρες SEO + Στρατηγική περιεχομένου (άρθρα, keywords)</li>
              <li>• White-label παρουσίαση (με δικό σας brand)</li>
              <li>• Συνεχές SEO/Marketing (150–300 €/μήνα, προαιρετικά)</li>
            </ul>
          </div>
        </div>

        <p className="text-gray-400 text-sm text-center mt-12">
          Όλες οι τιμές αφορούν το κόστος κατασκευής (one-off) και
          συμπεριλαμβάνουν ΦΠΑ. Τα πάγια έξοδα για{" "}
          <span className="text-[#e2841a]">hosting</span> &{" "}
          <span className="text-[#e2841a]">domain name</span> ανέρχονται περίπου
          σε 120 € / έτος.
        </p>

        <p className="text-center mt-6 text-gray-400 text-sm">
          © 2025 <span className="text-[#e2841a]">VgoGenius</span>
        </p>
      </div>

      <style jsx global>{`
        /* ----------- SHAKE ----------- */
        @keyframes shake {
          0% { transform: translate(0, 0) rotate(0deg); }
          20% { transform: translate(-5px, 3px) rotate(-1deg); }
          40% { transform: translate(5px, -3px) rotate(1deg); }
          60% { transform: translate(-4px, 2px) rotate(-1deg); }
          80% { transform: translate(4px, -2px) rotate(1deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        .animate-shake {
          animation: shake 0.8s ease-in-out;
        }

        /* Subtle pulse for the main container shadow */
        @keyframes fireGlowPulse {
          0% { box-shadow: 0 0 25px rgba(226,132,26,0.12); }
          50% { box-shadow: 0 0 45px rgba(226,132,26,0.18); }
          100% { box-shadow: 0 0 25px rgba(226,132,26,0.12); }
        }

        .shadow-[0_0_50px_rgba(226,132,26,0.4)] {
          animation: fireGlowPulse 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}
