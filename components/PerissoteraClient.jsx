"use client";
import Link from "next/link";
import Image from "next/image";

export default function PerissoteraClient() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-start text-center bg-black text-white px-6 py-36">
      {/* Τίτλος */}
      <div className="mb-16 mt-3">
        <h1 className="text-5xl font-bold mb-5 text-[#e2841a]">Περισσότερα</h1>
        <p className="text-2xl text-gray-300">
          Ενημερωθείτε για τα οφέλη, τους ορισμούς και τη φιλοσοφία μας γύρω από
          τη δημιουργία website.
        </p>
      </div>

      {/* Περιεχόμενο */}
      <div className="bg-black rounded-3xl shadow-[0_0_40px_rgba(226,132,26,0.3)] p-16 max-w-7xl w-full border border-[#2d2d2d]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
          {/* Ωφέλη Δημιουργίας Website */}
          <Link
            href="/perissotera/ofeli-website"
            aria-label="Μάθετε τα οφέλη της δημιουργίας website"
            className="block transition-transform hover:scale-105 bg-black border border-[#2d2d2d] rounded-2xl shadow-[0_0_30px_rgba(226,132,26,0.35)] hover:shadow-[0_0_50px_rgba(226,132,26,0.6)] p-6 focus:outline-none focus:ring-2 focus:ring-[#e2841a] focus:ring-offset-2 focus:ring-offset-black"
          >
            {/* Optimized image with Next.js Image component for lazy loading */}
            <Image
              src="/images/ofeli-website.jpg"
              alt="Ωφέλη Δημιουργίας Website"
              width={420}
              height={420}
              className="rounded-xl shadow-lg w-full h-[420px] object-cover mb-6 border border-[#3d2b1f]"
              loading="lazy"
            />
            <h2 className="text-2xl font-semibold text-[#e2841a]">
              Οφέλη Δημιουργίας Website
            </h2>
          </Link>

          {/* Επεξήγηση Ορισμών */}
          <Link
            href="/perissotera/orismoi"
            aria-label="Επεξήγηση ορισμών web development"
            className="block transition-transform hover:scale-105 bg-black border border-[#2d2d2d] rounded-2xl shadow-[0_0_30px_rgba(226,132,26,0.35)] hover:shadow-[0_0_50px_rgba(226,132,26,0.6)] p-6 focus:outline-none focus:ring-2 focus:ring-[#e2841a] focus:ring-offset-2 focus:ring-offset-black"
          >
            {/* Optimized image with Next.js Image component for lazy loading */}
            <Image
              src="/images/orismoi-website.jpg"
              alt="Επεξήγηση Ορισμών"
              width={420}
              height={420}
              className="rounded-xl shadow-lg w-full h-[420px] object-cover mb-6 border border-[#3d2b1f]"
              loading="lazy"
            />
            <h2 className="text-2xl font-semibold text-[#e2841a]">
              Επεξήγηση Ορισμών
            </h2>
          </Link>

          {/* Γιατί Εμάς */}
          <Link
            href="/perissotera/giati-emas"
            aria-label="Γιατί να επιλέξετε τη VgoGenius"
            className="block transition-transform hover:scale-105 bg-black border border-[#2d2d2d] rounded-2xl shadow-[0_0_30px_rgba(226,132,26,0.35)] hover:shadow-[0_0_50px_rgba(226,132,26,0.6)] p-6 focus:outline-none focus:ring-2 focus:ring-[#e2841a] focus:ring-offset-2 focus:ring-offset-black"
          >
            {/* Optimized image with Next.js Image component for lazy loading */}
            <Image
              src="/images/giati-emas.jpg"
              alt="Γιατί Εμάς"
              width={420}
              height={420}
              className="rounded-xl shadow-lg w-full h-[420px] object-cover mb-6 border border-[#3d2b1f]"
              loading="lazy"
            />
            <h2 className="text-2xl font-semibold text-[#e2841a]">Γιατί Εμάς</h2>
          </Link>
        </div>
      </div>
    </section>
  );
}
