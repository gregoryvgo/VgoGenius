"use client";

import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function EpikoinoniaClient() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fadeEls = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    fadeEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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
    <section className="contact fade-in pt-10 pb-24 px-6 bg-black text-white relative z-[100] mt-10">
      <div className="w-full max-w-[420px] md:max-w-6xl mx-auto p-6 md:px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 text-[#e2841a] leading-tight">
          Επικοινωνία
        </h2>

        <p className="text-sm md:text-lg text-gray-300 mb-12 leading-relaxed text-center max-w-[420px] md:max-w-4xl mx-auto">
          Η ομάδα της <strong>VgoGenius</strong> είναι πάντα διαθέσιμη για συνεργασίες, ερωτήσεις και νέες ιδέες.
          Επικοινωνήστε μαζί μας για να συζητήσουμε πώς μπορούμε να εξελίξουμε τη δική σας ψηφιακή παρουσία.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-10 md:gap-16 items-center">

          {/* Φόρμα με Formspree */}
          <div className="w-full">
            {status === "success" ? (
              <p className="text-green-400 text-center">
                Το μήνυμά σας στάλθηκε. Θα επικοινωνήσουμε σύντομα.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 bg-black/60 rounded-2xl shadow-[0_0_40px_rgba(226,132,26,0.3)] p-6 md:p-12 border border-[#2d2d2d]"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Το όνομά σας"
                  required
                  className="border border-[#e2841a] rounded-lg p-3 md:p-4 text-sm md:text-lg bg-black/80 text-white focus:outline-none focus:ring-2 focus:ring-[#e2841a] transition-all"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Το email σας"
                  required
                  className="border border-[#e2841a] rounded-lg p-3 md:p-4 text-sm md:text-lg bg-black/80 text-white focus:outline-none focus:ring-2 focus:ring-[#e2841a] transition-all"
                />

                <textarea
                  name="message"
                  rows="7"
                  placeholder="Το μήνυμά σας"
                  required
                  className="border border-[#e2841a] rounded-lg p-3 md:p-4 text-sm md:text-lg bg-black/80 text-white focus:outline-none focus:ring-2 focus:ring-[#e2841a] transition-all"
                ></textarea>

                <button
                  type="submit"
                  className="bg-[#e2841a] text-black hover:text-white rounded-xl py-4 md:py-5 text-sm md:text-lg font-semibold shadow-[0_0_35px_rgba(226,132,26,0.7)] hover:shadow-[0_0_55px_rgba(226,132,26,1)] hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#e2841a]"
                >
                  Αποστολή
                </button>
              </form>
            )}

            {status === "error" && (
              <p className="text-red-400 text-center mt-4">
                Κάτι πήγε στραβά. Προσπαθήστε ξανά.
              </p>
            )}
          </div>

          {/* Στοιχεία επικοινωνίας */}
          <div className="flex flex-col justify-center h-full text-left space-y-6 md:pl-8">
            <div>
              <p className="text-base md:text-xl mb-3">
                <strong className="text-[#e2841a]">Τηλέφωνο:</strong>
                <br />
                <span className="text-lg md:text-[1.25rem] font-medium">
                  +30 6980206638
                </span>
              </p>

              <p className="text-base md:text-xl mb-3">
                <strong className="text-[#e2841a]">Email:</strong>
                <br />
                <a
                  href="mailto:vgogenius@gmail.com"
                  className="underline text-lg md:text-[1.25rem] text-white hover:text-[#e2841a] transition-colors"
                >
                  vgogenius@gmail.com
                </a>
              </p>
            </div>

            <div>
              <p className="text-base md:text-xl mb-2">
                Επισκεφτείτε μας σε Facebook και Instagram
              </p>

              <div className="flex space-x-6 md:space-x-8 text-3xl md:text-[2.6rem]">
                <a
                  href="https://www.facebook.com/profile.php?id=61583187277864"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1877F2] hover:opacity-80 transition-opacity"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.instagram.com/vgogenius/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E4405F] hover:opacity-80 transition-opacity"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
