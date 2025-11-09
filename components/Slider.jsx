"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// WebP αρχεία ίδιου 16:9 λόγου
const slides = [
  "/images/slide1.webp",
  "/images/slide2.webp",
  "/images/slide3.webp",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full h-[60vh] md:h-screen overflow-hidden bg-black"
      aria-label="VgoGenius Project Slider"
    >
      {slides.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`VgoGenius Slide ${index + 1}`}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-contain object-center bg-black"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
          />
        </div>
      ))}

      {/* Δείκτες πλοήγησης */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-10"
        role="tablist"
        aria-label="Slider navigation"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={current === index}
            role="tab"
            className={`w-3 h-3 rounded-full border-2 border-[#e2841a] transition-all focus:outline-none focus:ring-2 focus:ring-[#e2841a] focus:ring-offset-2 focus:ring-offset-black ${
              current === index ? "bg-[#e2841a]" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
