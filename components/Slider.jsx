"use client";
import { useState } from "react";
import Image from "next/image";

// WebP αρχεία ίδιου 16:9 λόγου
const slides = [
  "/images/slide1.webp",
  "/images/slide2.webp",
  "/images/slide3.webp",
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  // Βοηθητικές συναρτήσεις για επόμενο/προηγούμενο slide
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // Χειρισμός αφής για κινητά (swipe)
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50; // swipe προς τα αριστερά
    const isRightSwipe = distance < -50; // swipe προς τα δεξιά

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(null);
  };

  return (
    <section
      className="relative w-full h-[60vh] md:h-screen overflow-hidden bg-black group"
      aria-label="VgoGenius Project Slider"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
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

      {/* Βελάκι Προηγούμενου (Μόνο σε Desktop - Κρύβεται στα κινητά) */}
      <button
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-black/40 text-white rounded-full hover:bg-[#e2841a] transition-all opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#e2841a]"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      {/* Βελάκι Επόμενου (Μόνο σε Desktop - Κρύβεται στα κινητά) */}
      <button
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 items-center justify-center bg-black/40 text-white rounded-full hover:bg-[#e2841a] transition-all opacity-0 group-hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[#e2841a]"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      {/* Δείκτες πλοήγησης (Τελείες) */}
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