"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center min-h-screen text-white overflow-hidden"
      style={{ isolation: "isolate" }}
    >
      {/* ===== Βίντεο φόντο ===== */}
      <video
        className="absolute inset-0 w-full h-full object-cover -z-10 brightness-75"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/images/backpage-new.webp"
      >
        <source src="/videos/backpage.mp4" type="video/mp4" />
      </video>

      {/* ===== Κεντρικό περιεχόμενο ===== */}
      {/* Χρησιμοποιούμε animate-fade-in αν έχεις Tailwind animations, αλλιώς εμφανίζεται κατευθείαν */}
      <div className="z-10 flex flex-col items-center justify-center">
        
        {/* ===== Logo ===== */}
        <div className="w-[300px] h-[300px] relative mb-8">
          <Image
            src="/images/logo.webp"
            alt="VgoGenius Logo"
            fill
            priority // <-- Αυτό δίνει εντολή για αστραπιαίο κατέβασμα!
            sizes="(max-width: 768px) 300px, 300px"
            className="object-contain drop-shadow-[0_0_40px_#e2841a]"
          />
        </div>

        {/* ===== Κείμενο ===== */}
        <p className="max-w-xl mx-auto text-lg md:text-xl text-white leading-relaxed mb-8">
          Επαγγελματικός σχεδιασμός και ανάπτυξη ιστοσελίδων.
          <br />
          Δημιουργούμε ψηφιακές πλατφόρμες που ξεχωρίζουν.
        </p>

        {/* ===== Κουμπί Επικοινωνίας ===== */}
        <a
          href="/epikoinonia"
          className="inline-block bg-[#e2841a] text-black font-semibold py-3 px-6 rounded-full
          hover:text-white transition-all duration-300
          shadow-[0_0_25px_rgba(226,132,26,0.7)] hover:shadow-[0_0_45px_rgba(226,132,26,1)]
          hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e2841a] focus:ring-offset-2 focus:ring-offset-black"
        >
          Επικοινωνήστε μαζί μας
        </a>
      </div>
    </section>
  );
}