"use client";

import { useEffect } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function EpikoinoniaClient() {
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

  return (
    <section className="contact fade-in py-24 px-6 bg-black text-white relative z-[100] mt-24">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-semibold text-center mb-12 text-[#e2841a]">
          Επικοινωνία
        </h2>

        <p className="text-gray-300 text-lg mb-12 leading-relaxed text-center max-w-4xl mx-auto">
          Η ομάδα της <strong>VgoGenius</strong> είναι πάντα διαθέσιμη για
          συνεργασίες, ερωτήσεις και νέες ιδέες. Επικοινωνήστε μαζί μας για να
          συζητήσουμε πώς μπορούμε να εξελίξουμε τη δική σας ψηφιακή παρουσία.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-16 items-center">
          {/* Φόρμα */}
          <div className="w-full">
            <form
              className="flex flex-col gap-6 bg-black/60 rounded-2xl shadow-[0_0_40px_rgba(226,132,26,0.3)] p-12 border border-[#2d2d2d]"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Το μήνυμά σας στάλθηκε επιτυχώς!");
              }}
            >
              {/* Accessibility: Proper labels and aria attributes for form inputs */}
              <label htmlFor="contact-name" className="sr-only">
                Όνομα
              </label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Το όνομά σας"
                required
                aria-required="true"
                aria-label="Το όνομά σας"
                className="border border-[#e2841a] rounded-lg p-4 text-lg bg-black/80 text-white focus:outline-none focus:ring-2 focus:ring-[#e2841a] transition-all"
              />
              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="Το email σας"
                required
                aria-required="true"
                aria-label="Το email σας"
                className="border border-[#e2841a] rounded-lg p-4 text-lg bg-black/80 text-white focus:outline-none focus:ring-2 focus:ring-[#e2841a] transition-all"
              />
              <label htmlFor="contact-message" className="sr-only">
                Μήνυμα
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows="7"
                placeholder="Το μήνυμά σας"
                required
                aria-required="true"
                aria-label="Το μήνυμά σας"
                className="border border-[#e2841a] rounded-lg p-4 text-lg bg-black/80 text-white focus:outline-none focus:ring-2 focus:ring-[#e2841a] transition-all"
              ></textarea>

              <button
                type="submit"
                aria-label="Αποστολή μηνύματος επικοινωνίας"
                className="bg-[#e2841a] text-white rounded-xl py-5 text-lg font-semibold shadow-[0_0_35px_rgba(226,132,26,0.7)] hover:shadow-[0_0_55px_rgba(226,132,26,1)] hover:scale-105 transition-transform duration-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#e2841a] focus:ring-offset-2 focus:ring-offset-black"
              >
                Αποστολή
              </button>
            </form>
          </div>

          {/* Στοιχεία επικοινωνίας */}
          <div className="flex flex-col justify-center h-full text-left space-y-4 md:pl-8">
            <div>
              <p className="text-xl mb-3">
                <strong className="text-[#e2841a]">Τηλέφωνο:</strong>
                <br />
                <span className="text-[1.25rem] font-medium">6980206638</span>
              </p>
              <p className="text-xl mb-3">
                <strong className="text-[#e2841a]">Email:</strong>
                <br />
                <a
                  href="mailto:VgoGenius@gmail.com"
                  className="underline text-[1.25rem] text-white hover:text-[#e2841a] transition-colors"
                >
                  VgoGenius@gmail.com
                </a>
              </p>
            </div>

            <div>
              <p className="text-xl mb-2">
                Επισκεφτείτε μας σε Facebook και Instagram
              </p>
              <div className="flex space-x-8 text-[2.6rem]">
                <a
                  href="https://www.facebook.com/profile.php?id=61579276037702"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook VgoGenius"
                  className="text-[#1877F2] hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  <FaFacebook aria-hidden="true" />
                </a>
                <a
                  href="https://www.instagram.com/dokimastiko.web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram VgoGenius"
                  className="text-[#E4405F] hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#E4405F] focus:ring-offset-2 focus:ring-offset-black rounded"
                >
                  <FaInstagram aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
