"use client";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [accepted, setAccepted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookiesAccepted");
    if (stored === "true" || stored === "false") {
      setAccepted(true);
    } else {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleChoice = (choice) => {
    localStorage.setItem("cookiesAccepted", choice ? "true" : "false");
    setAccepted(true);
  };

  if (accepted || !visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-black/90 text-white px-6 py-5 flex flex-col items-center justify-center gap-4 z-[9999] border-t border-[#e2841a]">
      <p className="text-sm md:text-base text-gray-300 text-center leading-relaxed max-w-3xl">
        Χρησιμοποιούμε cookies για να εξασφαλίσουμε την ομαλή λειτουργία του
        ιστότοπου, να βελτιώσουμε την εμπειρία χρήσης και να αναλύουμε την
        επισκεψιμότητα για συνεχή βελτίωση των υπηρεσιών μας.
      </p>

      <div className="flex space-x-4">
        <button
          onClick={() => handleChoice(true)}
          className="bg-[#e2841a] text-black font-semibold px-6 py-2 rounded-full 
             hover:text-white transition"
        >
          Αποδοχή
        </button>

        <button
          onClick={() => handleChoice(false)}
          className="bg-transparent border border-[#e2841a] text-[#e2841a] font-semibold px-6 py-2 rounded-full hover:bg-[#e2841a]/20 transition"
        >
          Απόρριψη
        </button>
      </div>
    </div>
  );
}
