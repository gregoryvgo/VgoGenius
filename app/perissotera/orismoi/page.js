// app/perissotera/orismoi/page.tsx
import { generatePageMeta } from "@/lib/seo";
import Link from "next/link";
import { Server, Globe, Search, Cookie, MonitorSmartphone, ShieldCheck } from "lucide-react";

// SEO metadata for this page
export const metadata = generatePageMeta({
  title: "Βασικά Εργαλεία",
  description:
    "Μάθετε τι σημαίνουν βασικοί όροι όπως Hosting, Domain, SEO, Cookies, Responsive Design και SSL — απαραίτητες γνώσεις για κάθε website.",
  path: "/perissotera/orismoi",
  keywords: [
    "VgoGenius",
    "ορισμοί website",
    "βασικά εργαλεία",
    "hosting",
    "domain name",
    "seo",
    "cookies",
    "responsive design",
    "ssl",
  ],
});

// Δεδομένα για τις κάρτες 
const definitions = [
  {
    title: "Hosting",
    desc: "Η υπηρεσία που φιλοξενεί τα αρχεία του website (κώδικας, εικόνες, βάσεις δεδομένων) σε έναν server, ώστε να μπορεί ο κόσμος να το βλέπει στο διαδίκτυο. Ως πραγματικό παράδειγμα, μπορεί να παραλληλιστεί με το ενοίκιο ενός διαμερίσματος ή κτιρίου· απλώς στη δική μας περίπτωση υπάρχει σε ηλεκτρονική μορφή.",
    icon: <Server className="w-8 h-8 text-[#e2841a] mb-4" />,
  },
  {
    title: "Domain Name",
    desc: "Το μοναδικό όνομα (π.χ. mysite.com) που χρησιμοποιεί ένα website. Είναι ξεχωριστό κόστος και χρειάζεται ανανέωση κάθε χρόνο. Ακόμα κι αν το hosting σταματήσει (δηλαδή πάψει να εμφανίζεται δημόσια το website), το domain πρέπει να πληρώνεται προκειμένου να μην χαθεί, ειδικά αν σε ενδιαφέρει για μελλοντική χρήση.",
    icon: <Globe className="w-8 h-8 text-[#e2841a] mb-4" />,
  },
  {
    title: "SEO (Search Engine Optimization)",
    desc: "Η διαδικασία που χρησιμοποιείται για να βελτιωθεί η θέση ενός website στα αποτελέσματα αναζήτησης (π.χ. Google, Bing) όταν κάποιος ψάχνει κάτι σχετικό με το συγκεκριμένο site. Ένα καλό SEO αυξάνει την επισκεψιμότητα και την αξιοπιστία της επιχείρησης.",
    icon: <Search className="w-8 h-8 text-[#e2841a] mb-4" />,
  },
  {
    title: "Cookies",
    desc: "Μικρά αρχεία που αποθηκεύονται στον υπολογιστή ή στο κινητό σου όταν επισκέπτεσαι μια ιστοσελίδα. Χρησιμοποιούνται για να κάνουν την εμπειρία στο διαδίκτυο πιο προσωποποιημένη και αποτελεσματική.",
    icon: <Cookie className="w-8 h-8 text-[#e2841a] mb-4" />,
  },
  {
    title: "Responsive Design",
    desc: "Ο τρόπος σχεδίασης ενός website ώστε να προσαρμόζεται αυτόματα σε κάθε συσκευή — κινητό, tablet ή υπολογιστή — διασφαλίζοντας άνετη πλοήγηση παντού.",
    icon: <MonitorSmartphone className="w-8 h-8 text-[#e2841a] mb-4" />,
  },
  {
    title: "SSL Certificate",
    desc: "Το πιστοποιητικό ασφαλείας που εξασφαλίζει ότι η σύνδεση μεταξύ του επισκέπτη και του website είναι κρυπτογραφημένη και ασφαλής. Είναι απαραίτητο για την προστασία δεδομένων και ενισχύει την αξιοπιστία και το SEO του website.",
    icon: <ShieldCheck className="w-8 h-8 text-[#e2841a] mb-4" />,
  },
];

export default function OrismoiPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 sm:px-6 py-28 overflow-x-hidden relative">
      
      {/* Κεντρικό Κείμενο */}
      <div className="definitions-heading w-full max-w-5xl text-center mb-16">
        <h1 className="definitions-title text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#e2841a] leading-tight">
          Βασικά Εργαλεία
        </h1>
        <p className="definitions-intro text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          Για να κατανοήσει κάποιος σωστά τη διαδικασία δημιουργίας ενός website, είναι σημαντικό να γνωρίζει ορισμένους βασικούς όρους που χρησιμοποιούνται σε κάθε στάδιο της ανάπτυξης και λειτουργίας του.
        </p>
      </div>

      {/* Grid με τις 6 Κάρτες Ορισμών */}
      <div className="definitions-grid w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {definitions.map((def, index) => (
          <div 
            key={index} 
            className="definition-card group bg-black/40 border border-[#2d2d2d] hover:border-[#e2841a] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(226,132,26,0.2)]"
            style={{ "--definition-delay": `${index * 120}ms` }}
          >
            {def.icon}
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#e2841a] transition-colors">
              {def.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {def.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Επίλογος & Call to Action (CTA) */}
      <div className="definitions-cta w-full max-w-4xl text-center bg-gradient-to-t from-[#111] to-black border border-[#2d2d2d] rounded-3xl p-8 sm:p-12">
        <p className="text-gray-300 mb-8 text-lg leading-relaxed">
          Τώρα που γνωρίζετε τα βασικά, είστε έτοιμοι να κάνετε το επόμενο βήμα. Εμείς αναλαμβάνουμε να συνδέσουμε όλα αυτά τα εργαλεία αρμονικά για να δημιουργήσουμε το ιδανικό website για εσάς.
        </p>
        <Link 
          href="/timokatalogos"
          className="inline-block bg-[#e2841a] text-black font-semibold py-3 px-8 rounded-full hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(226,132,26,0.5)] hover:shadow-[0_0_40px_rgba(226,132,26,0.9)] hover:scale-105"
        >
          Δείτε τα Πακέτα μας
        </Link>
      </div>
    </section>
  );
}