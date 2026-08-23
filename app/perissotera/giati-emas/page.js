// app/perissotera/giati-emas/page.tsx
import { generatePageMeta } from "@/lib/seo";
import Link from "next/link";
import { Target, Users, Zap, ShieldCheck, Lightbulb, Handshake } from "lucide-react";

export const metadata = generatePageMeta({
  title: "Γιατί Εμάς",
  description:
    "Η VgoGenius ξεχωρίζει για τη συνέπεια, τη δημιουργικότητα και την ουσιαστική κατανόηση των αναγκών κάθε πελάτη.",
  path: "/perissotera/giati-emas",
  keywords: ["VgoGenius", "γιατί VgoGenius", "web design Ελλάδα"],
});

// Δεδομένα για τις κάρτες
const features = [
  {
    title: "Προσωποποιημένη Προσέγγιση",
    desc: "Κάθε project αντιμετωπίζεται με μοναδικό τρόπο. Αφουγκραζόμαστε τις ανάγκες και το κοινό της επιχείρησής σας.",
    icon: <Target className="w-8 h-8 text-[#e2841a] mb-4" />,
  },
  {
    title: "Εξειδικευμένη Ομάδα",
    desc: "Επαγγελματίες με όρεξη, τεχνογνωσία και διάθεση να εξελίσσονται συνεχώς στις τάσεις του digital design.",
    icon: <Users className="w-8 h-8 text-[#e2841a] mb-4" />,
  },
  {
    title: "Ποιότητα & Λεπτομέρεια",
    desc: "Από τον σχεδιασμό ως την τελική παράδοση, κάθε στοιχείο αποπνέει επαγγελματισμό και τεχνική αρτιότητα.",
    icon: <Zap className="w-8 h-8 text-[#e2841a] mb-4" />,
  },
  {
    title: "Αξιοπιστία & Συνέπεια",
    desc: "Τηρούμε αυστηρά τα χρονοδιαγράμματα, παρέχοντας παράλληλα πλήρη υποστήριξη μετά την ολοκλήρωση του έργου.",
    icon: <ShieldCheck className="w-8 h-8 text-[#e2841a] mb-4" />,
  },
  {
    title: "Καινοτόμες Ιδέες",
    desc: "Συμμετέχουμε ενεργά στη διαμόρφωση του οράματος, προτείνοντας δημιουργικές λύσεις που ξεχωρίζουν.",
    icon: <Lightbulb className="w-8 h-8 text-[#e2841a] mb-4" />,
  },
  {
    title: "Σχέση Εμπιστοσύνης",
    desc: "Χτίζουμε μακροχρόνιες συνεργασίες βασισμένες στην ειλικρίνεια, την επικοινωνία και το αμοιβαίο όφελος.",
    icon: <Handshake className="w-8 h-8 text-[#e2841a] mb-4" />,
  },
];

export default function GiatiEmas() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 sm:px-6 py-28 overflow-x-hidden relative">
      
      {/* Κεντρικό Κείμενο */}
      <div className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#e2841a] leading-tight">
          Γιατί Εμάς;
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Η <strong className="text-[#e2841a]">VgoGenius</strong> δεν προσφέρει απλώς υπηρεσίες κατασκευής ιστοσελίδων. Δημιουργούμε ψηφιακές εμπειρίες που αντικατοπτρίζουν το όραμα και την ταυτότητα της κάθε επιχείρησης.
        </p>
      </div>

      {/* Grid με Κάρτες */}
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="group bg-black/40 border border-[#2d2d2d] hover:border-[#e2841a] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(226,132,26,0.2)]"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#e2841a] transition-colors">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Κατάληξη & CTA (Call to Action) */}
      <div className="w-full max-w-4xl text-center bg-gradient-to-t from-[#111] to-black border border-[#2d2d2d] rounded-3xl p-8 sm:p-12">
        <p className="text-gray-300 mb-8 text-lg">
          Στόχος μας είναι να αναδεικνύουμε το καλύτερο δυνατό αποτέλεσμα — τόσο αισθητικά όσο και επιχειρηματικά.
        </p>
        <Link 
          href="/epikoinonia"
          className="inline-block bg-[#e2841a] text-black font-semibold py-3 px-8 rounded-full hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(226,132,26,0.5)] hover:shadow-[0_0_40px_rgba(226,132,26,0.9)] hover:scale-105"
        >
          Ας ξεκινήσουμε
        </Link>
      </div>
    </section>
  );
}