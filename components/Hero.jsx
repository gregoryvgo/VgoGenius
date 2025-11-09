"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 150);
    return () => clearTimeout(timer);
  }, []);

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
      >
        <source src="/videos/backpage.mp4" type="video/mp4" />
      </video>

      {/* ===== Κεντρικό περιεχόμενο ===== */}
      <div
        className={`transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* ===== Logo ===== */}
        <div className="w-[300px] h-[300px] mx-auto mb-8 relative">
          <img
            src="/images/logo.webp"
            alt="VgoGenius Logo"
            className="w-full h-full object-contain drop-shadow-[0_0_40px_#e2841a]"
            loading="eager"
          />
        </div>

        {/* ===== Κείμενο ===== */}
        <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
          Επαγγελματικός σχεδιασμός και ανάπτυξη ιστοσελίδων.
          <br />
          Δημιουργούμε ψηφιακές πλατφόρμες που ξεχωρίζουν.
        </p>

        {/* ===== Κουμπί Επικοινωνίας ===== */}
        <a
          href="/epikoinonia"
          className="inline-block bg-[#e2841a] text-black font-semibold py-3 px-6 rounded-full hover:bg-[#ff9f2a] transition-colors duration-300"
        >
          Επικοινωνήστε μαζί μας
        </a>
      </div>
    </section>
  );
}
