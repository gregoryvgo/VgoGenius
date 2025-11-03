export default function Footer() {
  return (
    <footer className="relative w-full text-center py-6 bg-black text-white border-t border-[#1a1a1a] mt-0">
      <div className="container mx-auto">
        <p className="text-sm text-gray-400">
          © 2025{" "}
          <span className="text-[#e2841a] font-semibold">VgoGenius</span> — Σχεδιασμός
          και Ανάπτυξη ιστοσελίδων. Όλα τα δικαιώματα διατηρούνται.
        </p>

        <div className="social-links mt-3 flex justify-center gap-6">
          <a
            href="https://www.facebook.com/profile.php?id=61579276037702"
            target="_blank"
            aria-label="Facebook"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <i className="fab fa-facebook text-xl" style={{ color: "#1877F2" }}></i>
          </a>

          <a
            href="https://www.instagram.com/dokimastiko.web/"
            target="_blank"
            aria-label="Instagram"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-110"
          >
            <i
              className="fab fa-instagram text-xl"
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
    </footer>
  );
}
