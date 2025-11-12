// app/perissotera/giati-emas/page.tsx
import { generatePageMeta } from "@/lib/seo";

// SEO metadata for this page
export const metadata = generatePageMeta({
  title: "Γιατί Εμάς",
  description:
    "Η VgoGenius ξεχωρίζει για τη συνέπεια, τη δημιουργικότητα και την ουσιαστική κατανόηση των αναγκών κάθε πελάτη. Προσωποποιημένη προσέγγιση, εξειδικευμένη ομάδα και μακροχρόνιες συνεργασίες.",
  path: "/perissotera/giati-emas",
  keywords: [
    "VgoGenius",
    "γιατί VgoGenius",
    "web design Ελλάδα",
    "κατασκευή ιστοσελίδων",
    "επαγγελματικές υπηρεσίες",
  ],
});

export default function GiatiEmas() {
  return (
    <section
      lang="el"
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 sm:px-6 py-28 sm:py-36 overflow-x-hidden"
    >
      <div className="w-full max-w-4xl bg-black/60 border border-[#2d2d2d] rounded-3xl shadow-[0_0_40px_rgba(226,132,26,0.3)] p-6 sm:p-12 text-left leading-relaxed backdrop-blur-md">
        <h1
          className="
            text-lg sm:text-2xl md:text-4xl
            font-bold text-center mb-10 text-[#e2841a]
            leading-tight break-words hyphens-auto max-w-full mx-auto
          "
        >
          Γιατί Εμάς
        </h1>

        <p className="mb-6 text-gray-300 indent-6">
          Η <strong className="text-[#e2841a]">VgoGenius</strong> ξεχωρίζει για
          τη συνέπεια, τη δημιουργικότητα και την ουσιαστική κατανόηση των
          αναγκών κάθε πελάτη. Δεν προσφέρουμε απλώς υπηρεσίες κατασκευής
          ιστοσελίδων — δημιουργούμε ψηφιακές εμπειρίες που αντικατοπτρίζουν το
          όραμα και την ταυτότητα της κάθε επιχείρησης.
        </p>

        <ul className="list-disc list-inside space-y-5 text-gray-300">
          <li>
            <strong className="text-[#e2841a]">Προσωποποιημένη Προσέγγιση:</strong>{" "}
            Κάθε project αντιμετωπίζεται με μοναδικό τρόπο. Αφουγκραζόμαστε τις
            ανάγκες, τους στόχους και το κοινό της επιχείρησής σας, ώστε να
            σχεδιάζουμε λύσεις προσαρμοσμένες ακριβώς σε εσάς.
          </li>

          <li>
            <strong className="text-[#e2841a]">Νεανική και Εξειδικευμένη Ομάδα:</strong>{" "}
            Το δυναμικό μας αποτελείται από επαγγελματίες με όρεξη, τεχνογνωσία
            και διάθεση να εξελίσσονται συνεχώς, παρακολουθώντας τις τάσεις του
            digital design και του web development.
          </li>

          <li>
            <strong className="text-[#e2841a]">Ποιότητα και Λεπτομέρεια:</strong>{" "}
            Από τον σχεδιασμό ως την τελική παράδοση, φροντίζουμε κάθε στοιχείο
            να αποπνέει επαγγελματισμό, αισθητική και τεχνική αρτιότητα.
          </li>

          <li>
            <strong className="text-[#e2841a]">Αξιοπιστία και Συνέπεια:</strong>{" "}
            Τηρούμε αυστηρά τα χρονοδιαγράμματα, παρέχοντας παράλληλα πλήρη
            υποστήριξη μετά την ολοκλήρωση του έργου.
          </li>

          <li>
            <strong className="text-[#e2841a]">Καινοτόμες Ιδέες:</strong>{" "}
            Δεν περιοριζόμαστε στην υλοποίηση — συμμετέχουμε ενεργά στη
            διαμόρφωση του οράματος κάθε έργου, προτείνοντας βελτιώσεις και
            δημιουργικές λύσεις που ξεχωρίζουν.
          </li>

          <li>
            <strong className="text-[#e2841a]">Σχέση Εμπιστοσύνης:</strong>{" "}
            Χτίζουμε μακροχρόνιες συνεργασίες βασισμένες στην ειλικρίνεια,
            την επικοινωνία και το αμοιβαίο όφελος.
          </li>
        </ul>

        <p className="mt-8 text-gray-300">
          Η <strong className="text-[#e2841a]">VgoGenius</strong> δεν βλέπει
          τους πελάτες της απλώς ως συνεργάτες, αλλά ως μέρος μιας κοινής
          δημιουργικής πορείας. Στόχος μας είναι να αναδεικνύουμε το καλύτερο
          δυνατό αποτέλεσμα — τόσο αισθητικά όσο και επιχειρηματικά.
        </p>
      </div>
    </section>
  );
}
