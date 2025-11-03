"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
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
      className="relative w-full h-[75vh] overflow-hidden bg-black mb-[-40px]"
      aria-label="Image slider showcasing VgoGenius projects"
    >
      {slides.map((src, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== current}
        >
          {/* Optimized images with Next.js Image component for lazy loading and performance */}
          <Image
            src={src}
            alt={`VgoGenius Slide ${index + 1} - Project showcase`}
            fill
            priority={index === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Bullets - accessibility: proper aria labels and keyboard navigation */}
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
            className={`w-3 h-3 rounded-full border-2 border-[#ff7a00] transition-all focus:outline-none focus:ring-2 focus:ring-[#ff7a00] focus:ring-offset-2 focus:ring-offset-black ${
              current === index ? "bg-[#ff7a00]" : "bg-transparent"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
