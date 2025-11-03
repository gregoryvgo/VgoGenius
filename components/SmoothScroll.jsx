"use client";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    const items = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("show");
        });
      },
      { threshold: 0.15 }
    );
    items.forEach((el) => observer.observe(el));
    return () => items.forEach((el) => observer.unobserve(el));
  }, []);
  return null;
}
