// app/perissotera/ofeli-website/page.tsx
import { generatePageMeta } from "@/lib/seo";
import Link from "next/link";
import { BadgeCheck, Clock, TrendingUp, BarChart3, MessageSquareText, Rocket } from "lucide-react";

// SEO metadata for this page
export const metadata = generatePageMeta({
  title: "Ωφέλη Δημιουργίας Website",
  description:
    "Ανακαλύπτετε γιατί η δημιουργία ενός επαγγελματικού website αποτελεί στρατηγική επένδυση. Αξιοπιστία, SEO, ανάλυση δεδομένων, επικοινωνία και εξωστρέφεια για κάθε επιχείρηση.",
  path: "/perissotera/ofeli-website",
  keywords: [
    "VgoGenius",
    "οφέλη website",
    "γιατί χρειάζομαι ιστοσελίδα",
    "κατασκευή site",
    "ψηφιακή παρουσία",
    "web design",
    "SEO",
  ],
});

// Δεδομένα για τις κάρτες - Τα κείμενα έμειναν 100% άθικτα
const benefits = [
  {
    title: "Αξιοπιστία",
    desc: "Ένα λειτουργικό website ειδικά διαμορφωμένο στις ανάγκες της επιχείρησης σας ενισχύει την εμπιστοσύνη των πελατών σας, αποπνέοντας επαγγελματισμό, οργάνωση και σοβαρότητα. Η επιχείρηση σας κερδίζει σε αναγνωρισιμότητα και ενισχύεται το εταιρικό σας προφίλ.",
    icon: <BadgeCheck className="w-8 h-8 text-[#e2841a] mb-4" />,
  },
  {
    title: "Διαρκής προβολή 24/7",
    desc: "Το website λειτουργεί αδιάκοπα, χωρίς περιορισμούς ωραρίου. Οι πελάτες μπορούν να ενημερωθούν ή να κάνουν αγορές οποιαδήποτε στιγμή, ενισχύοντας την αναγνωρισιμότητα και τις πωλήσεις.",
    icon: <Clock className="w-8 h-8 text-[#e2841a] mb-4" />,
  },
  {
    title: "Ισχυρό εργαλείο marketing",
    desc: "Μέσω SEO, Google Ads και social media, η ιστοσελίδα γίνεται το σημείο αναφοράς όλων των προωθητικών ενεργειών. Όλη η ψηφιακή επισκεψιμότητα συγκεντρώνεται σε ένα επίσημο, αξιόπιστο σημείο.",
    icon: <TrendingUp className="w-8 h-8 text-[#e2841a] mb-4" />,
  },
  {
    title: "Ανάλυση δεδομένων",
    desc: "Με εργαλεία όπως το Google Analytics, η εταιρεία αποκτά εικόνα για το κοινό της: ποιοι επισκέπτονται τη σελίδα, τι ενδιαφέρονται να δουν και ποια προϊόντα αποδίδουν καλύτερα. Αυτή η γνώση οδηγεί σε καλύτερες επιχειρηματικές αποφάσεις.",
    icon: <BarChart3 className="w-8 h-8 text-[#e2841a] mb-4" />,
  },
  {
    title: "Ενίσχυση επικοινωνίας",
    desc: "Μέσω της ιστοσελίδας σας, οι πελάτες έχουν τη δυνατότητα να επικοινωνούν εύκολα με την επιχείρηση σας είτε μέσω φόρμας επικοινωνίας είτε μέσω live chat. Παράλληλα, η εταιρεία σας μπορεί να διατηρεί συνεχή επαφή με τους πελάτες μέσω newsletters, ενημερώνοντάς τους για νέα προϊόντα και υπηρεσίες. Επίσης, μπορείτε να συλλέγετε σχόλια και metadata προκειμένου να αξιολογείτε και να βελτιώνετε τις υπηρεσίες σας.",
    icon: <MessageSquareText className="w-8 h-8 text-[#e2841a] mb-4" />,
  },
  {
    title: "Εξωστρέφεια και ανάπτυξη",
    desc: "Ένα website ανοίγει νέες αγορές. Μια τοπική επιχείρηση μπορεί να αποκτήσει πελατολόγιο σε ολόκληρη τη χώρα ή και διεθνώς, χωρίς φυσική παρουσία.",
    icon: <Rocket className="w-8 h-8 text-[#e2841a] mb-4" />,
  },
];

export default function OfeliWebsite() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 sm:px-6 py-28 overflow-x-hidden relative">
      
      {/* Κεντρικό Κείμενο (Hero Section της σελίδας) */}
      <div className="w-full max-w-5xl text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-[#e2841a] leading-tight">
          Γιατί να δημιουργήσω website για την επιχείρησή μου;
        </h1> 
        <p className="text-gray-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-10">
          Ένα website δεν είναι απλώς ένα ψηφιακό φυλλάδιο. Είναι το κέντρο επικοινωνίας, προβολής και ανάπτυξης της εταιρείας.
        </p>
        <h2 className="text-xl sm:text-2xl font-semibold text-[#e2841a]">
          Οι βασικοί λόγοι που ωφελούν την επιχείρησή σας:
        </h2>
      </div>

      {/* Grid με τις 6 Κάρτες */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {benefits.map((benefit, index) => (
          <div 
            key={index} 
            className="group bg-black/40 border border-[#2d2d2d] hover:border-[#e2841a] rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(226,132,26,0.2)]"
          >
            {benefit.icon}
            <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-[#e2841a] transition-colors">
              {benefit.title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {benefit.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Επίλογος & Call to Action (CTA) */}
      <div className="w-full max-w-4xl text-center bg-gradient-to-t from-[#111] to-black border border-[#2d2d2d] rounded-3xl p-8 sm:p-12">
        <p className="text-gray-300 mb-8 text-lg md:text-xl leading-relaxed">
          Συνολικά, η ύπαρξη ιστοσελίδας δεν είναι πολυτέλεια αλλά απαραίτητη προϋπόθεση για να παραμείνει μια εταιρεία ορατή, ανταγωνιστική και εξελίξιμη στη σύγχρονη αγορά.
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