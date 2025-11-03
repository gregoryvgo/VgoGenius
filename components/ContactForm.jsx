"use client";
import Image from "next/image";

export default function ContactForm() {
  return (
    <section
      className="contact fade-in flex justify-center items-center pt-6 pb-24 px-6 text-white relative z-[200] min-h-[70vh]"
    >
      <div className="w-full max-w-3xl bg-transparent border border-[#2d2d2d] rounded-2xl shadow-[0_0_25px_rgba(226,132,26,0.4)] p-10 text-center backdrop-blur-none">
        <h2 className="text-3xl font-semibold mb-4 text-[#e2841a]">
          Επικοινωνήστε μαζί μας
        </h2>

        <p className="text-gray-300 mb-10">
          Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας το συντομότερο.
        </p>

        <form
          className="flex flex-col gap-5 text-left max-w-lg mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Το μήνυμά σας στάλθηκε επιτυχώς!");
          }}
        >
          <label htmlFor="name" className="sr-only">
            Όνομα
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Το όνομά σας"
            required
            className="border border-[#e2841a] rounded-lg p-3 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-[#e2841a] transition-all"
          />

          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Το email σας"
            required
            className="border border-[#e2841a] rounded-lg p-3 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-[#e2841a] transition-all"
          />

          <label htmlFor="message" className="sr-only">
            Μήνυμα
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Το μήνυμά σας"
            required
            className="border border-[#e2841a] rounded-lg p-3 bg-black/50 text-white focus:outline-none focus:ring-2 focus:ring-[#e2841a] transition-all"
          ></textarea>

          <button
            type="submit"
            className="bg-[#e2841a] text-white rounded-xl py-4 font-semibold shadow-[0_0_25px_rgba(226,132,26,0.7)] hover:shadow-[0_0_45px_rgba(226,132,26,1)] hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-[#e2841a] focus:ring-offset-2 focus:ring-offset-black"
          >
            Αποστολή
          </button>
        </form>

        {/* LOGO + SOCIAL */}
        <div className="flex flex-col items-center justify-center mt-10 relative z-50">
          <Image
            src="/images/logo.webp"
            alt="VgoGenius Logo"
            width={176}
            height={176}
            className="w-44 mb-6 opacity-90 drop-shadow-[0_0_20px_#e2841a]"
            loading="lazy"
          />

          <h3 className="text-2xl font-semibold mb-2 text-[#e2841a]">
            Επισκεφτείτε μας
          </h3>
          <p className="mb-4 text-lg">σε Facebook και Instagram</p>

          <div className="flex space-x-6 justify-center">
            <a
              href="https://www.facebook.com/profile.php?id=61579276037702"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <i
                className="fab fa-facebook text-4xl"
                style={{ color: "#1877F2" }}
              ></i>
            </a>
            <a
              href="https://www.instagram.com/dokimastiko.web/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <i
                className="fab fa-instagram text-4xl"
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
