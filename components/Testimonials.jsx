"use client";
import Image from "next/image";

export default function Testimonials() {
  const data = [
    {
      name: "Ιωάννης",
      text: "Η δημιουργία της ιστοσελίδας τελικά δεν είναι καθόλου ακριβή. Γνωρίζοντας την VgoGenius κάλυψα μια ανάγκη που δεν γνώριζα ότι είχα. Με ελάχιστα χρήματα καταφέραμε να βελτιωθεί σημαντικά η επιχειρησιακή μας αποτελεσματικότητα και να αυξήσουμε τις πωλήσεις μας.",
      img: "/images/user1.jpg",
    },
    {
      name: "Δημήτρης",
      text: "Οι ψηφιακές λύσεις που μου πρότειναν με ικανοποίησαν πλήρως. Είναι κατά τη γνώμη μου η κορυφαία εταιρεία για μικρές επιχειρήσεις. Στηρίζουν σε όλα τα βήματα τον πελάτη και παρέχουν άμεση τεχνική υποστήριξη με ειλικρίνεια και συνέπεια.",
      img: "/images/user2.jpg",
    },
    {
      name: "Μαρία",
      text: "Είμαι πολύ εντυπωσιασμένη με την επαγγελματική προσέγγιση ενός τόσο νέου ανθρώπου. Η συνεργασία ήταν εξαιρετική και ο Γρηγόρης μας καθοδήγησε με συνέπεια σε οτιδήποτε δεν γνωρίζαμε ή δεν μπορούσαμε να αποφασίσουμε. Οι λύσεις που προτάθηκαν ανταποκρίθηκαν πλήρως στις ανάγκες μας και νιώθουμε σιγουριά για τα επόμενα βήματα ανάπτυξης.",
      img: "/images/user3.jpg",
    },
  ];

  return (
    <section className="fade-in py-24 px-6 bg-black relative z-25 text-white">
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-16 text-[#e0b55a]">
        Τι λένε οι πελάτες;
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {data.map((item, i) => (
          <div
            key={i}
            className="relative flex flex-col justify-between text-center rounded-2xl border border-white/10 shadow-lg bg-gradient-to-b from-neutral-900 to-black min-h-[420px] p-8 transform transition-all duration-300 hover:scale-[1.05] hover:shadow-[0_0_25px_rgba(224,181,90,0.3)]"
          >
            <div className="flex-1 flex flex-col justify-start">
              <span className="text-5xl text-[#e0b55a] mb-4 block">“</span>
              <p className="text-sm text-gray-300 leading-relaxed">{item.text}</p>
            </div>

            <div className="flex flex-col items-center mt-10">
              {/* Performance: Optimized avatar images with lazy loading */}
              <div className="w-[60px] h-[60px] rounded-full border border-[#e0b55a] mb-2 overflow-hidden flex items-center justify-center bg-[#1a1a1a]">
                <Image
                  src={item.img}
                  alt={`Avatar of ${item.name}`}
                  width={60}
                  height={60}
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-semibold text-white">{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
