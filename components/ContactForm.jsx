"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xdkpqvzy", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section className="contact fade-in flex justify-center items-center pt-6 pb-24 px-6 text-white relative z-[200] min-h-[70vh]">
      <div className="w-full max-w-[420px] md:max-w-3xl bg-transparent border border-[#2d2d2d] rounded-2xl shadow-[0_0_25px_rgba(226,132,26,0.4)] p-6 md:p-10 text-center backdrop-blur-none mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#e2841a] leading-tight">
          Επικοινωνήστε μαζί μας
        </h2>

        <p className="text-gray-300 mb-10 text-base md:text-lg leading-relaxed">
          Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο.
        </p>

        {status === "success" ? (
          <p className="text-green-400 text-center">
            Το μήνυμά σας στάλθηκε. Θα επικοινωνήσουμε σύντομα.
          </p>
        ) : (
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left w-full"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Το όνομά σας"
              required
              className="w-full border border-[#e2841a] rounded-lg p-3 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-[#e2841a] transition-all"
            />

            <input
              type="email"
              id="email"
              name="email"
              placeholder="Το email σας"
              required
              className="w-full border border-[#e2841a] rounded-lg p-3 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-[#e2841a] transition-all"
            />

            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Το μήνυμά σας"
              required
              className="w-full border border-[#e2841a] rounded-lg p-3 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-[#e2841a] transition-all md:col-span-2"
            ></textarea>

            <div className="col-span-1 md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-[#e2841a] text-black hover:text-white rounded-xl py-4 px-8 font-semibold shadow-[0_0_25px_rgba(226,132,26,0.7)] hover:shadow-[0_0_45px_rgba(226,132,26,1)] hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[#e2841a] focus:ring-offset-2 focus:ring-offset-black"
              >
                Αποστολή
              </button>
            </div>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-400 mt-4">
            Κάτι πήγε στραβά. Προσπαθήστε ξανά.
          </p>
        )}

        <div className="flex flex-col items-center justify-center mt-10 relative z-50">
          <Image
            src="/images/logo.webp"
            alt="VgoGenius Logo"
            width={176}
            height={176}
            className="w-32 md:w-44 mb-6 opacity-90 drop-shadow-[0_0_20px_#e2841a]"
            loading="lazy"
          />

          <h3 className="text-xl md:text-2xl font-semibold mb-2 text-[#e2841a] leading-tight">
            Επισκεφτείτε μας
          </h3>

          <p className="mb-4 text-base md:text-lg">
            σε Facebook και Instagram
          </p>

          <div className="flex space-x-6 justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=61583187277864"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <i
                className="fab fa-facebook text-3xl md:text-4xl"
                style={{ color: "#1877F2" }}
              ></i>
            </a>

            <a
              href="https://www.instagram.com/vgogenius/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <i
                className="fab fa-instagram text-3xl md:text-4xl"
                style={{
                  background:
                    "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              ></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
