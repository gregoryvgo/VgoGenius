"use client";

import { useEffect, useState } from "react";

export default function TimokatalogosClient() {
  const [shake, setShake] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShake(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-36">
      <div
        className={`w-full max-w-5xl bg-black/70 border border-[#2d2d2d] rounded-3xl shadow-[0_0_50px_rgba(226,132,26,0.4)] p-12 text-left leading-relaxed backdrop-blur-md transition-all duration-700 ${
          shake ? "animate-shake" : ""
        }`}
      >
        <h1 className="text-5xl font-bold text-center mb-2 text-[#e2841a]">
          Τιμοκατάλογος
        </h1>
        <h2 className="text-2xl font-semibold text-center mb-12 text-[#e2841a]">
          Προσφορά Κατασκευής Ιστοσελίδας
        </h2>

        <p className="text-gray-300 mb-10 indent-6">
          Η <span className="text-[#e2841a]">VgoGenius</span> σας παρουσιάζει τα
          διαθέσιμα πακέτα για τη δημιουργία και προώθηση της ιστοσελίδας σας.
          Η κατασκευή γίνεται με σύγχρονη πλατφόρμα σχεδίασης, πλήρη δυνατότητα
          SEO, ασφαλές hosting και εύκολη διαχείριση.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="bg-black border border-[#2d2d2d] rounded-2xl p-8 shadow-[0_0_30px_rgba(226,132,26,0.3)] hover:shadow-[0_0_50px_rgba(226,132,26,0.6)] transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#e2841a] mb-4">
              Βασικό
            </h3>
            <p className="text-4xl font-bold mb-6 text-white">450 €</p>
            <ul className="text-gray-300 text-left space-y-2">
              <li>• Έως 4 σελίδες (Αρχική, Υπηρεσίες, Εταιρεία, Επικοινωνία)</li>
              <li>• Responsive design (κινητά & tablet)</li>
              <li>• Σύνδεση με social media</li>
              <li>• Βασικό SEO (τίτλοι, περιγραφές, alt text)</li>
            </ul>
          </div>

          <div className="bg-black border border-[#2d2d2d] rounded-2xl p-8 shadow-[0_0_40px_rgba(226,132,26,0.4)] hover:shadow-[0_0_60px_rgba(226,132,26,0.7)] transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#e2841a] mb-4">
              Επαγγελματικό
            </h3>
            <p className="text-4xl font-bold mb-6 text-white">690 €</p>
            <ul className="text-gray-300 text-left space-y-2">
              <li>• Έως 6 σελίδες (περιλαμβάνει gallery & blog)</li>
              <li>• Προηγμένο SEO (λέξεις-κλειδιά, Google Business, Analytics)</li>
              <li>• Εγκατάσταση SSL (https)</li>
              <li>• Δυνατότητα μελλοντικών επεκτάσεων</li>
            </ul>
          </div>

          <div className="bg-black border border-[#2d2d2d] rounded-2xl p-8 shadow-[0_0_50px_rgba(226,132,26,0.5)] hover:shadow-[0_0_70px_rgba(226,132,26,0.8)] transition-transform hover:scale-105">
            <h3 className="text-2xl font-semibold text-[#e2841a] mb-4">
              Premium
            </h3>
            <p className="text-4xl font-bold mb-6 text-white">890 €</p>
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
      `}</style>
    </section>
  );
}
