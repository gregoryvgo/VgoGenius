// app/terms/page.jsx
import { generatePageMeta } from "@/lib/seo";
import Link from "next/link";

// SEO metadata for this page
export const metadata = generatePageMeta({
  title: "Όροι Χρήσης",
  description:
    "Διαβάστε τους όρους χρήσης της ιστοσελίδας VgoGenius. Πνευματική ιδιοκτησία, περιορισμός ευθύνης και κανόνες πλοήγησης.",
  path: "/terms",
  keywords: [
    "VgoGenius",
    "όροι χρήσης",
    "terms of use",
    "προϋποθέσεις",
    "νομικές πληροφορίες",
  ],
});

export default function TermsPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4 sm:px-6 py-28 sm:py-36 overflow-x-hidden">
      <div className="w-full max-w-4xl bg-black/60 border border-[#2d2d2d] rounded-3xl shadow-[0_0_40px_rgba(226,132,26,0.3)] p-6 sm:p-12 text-left leading-relaxed backdrop-blur-md">
        
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-10 text-[#e2841a] leading-tight">
          Όροι Χρήσης
        </h1>

        <p className="text-gray-400 text-sm mb-8 text-center">
          Τελευταία ενημέρωση: Αύγουστος 2026
        </p>

        <div className="space-y-8 text-gray-300 text-sm md:text-base">
          
          <div>
            <h2 className="text-lg md:text-xl font-semibold text-[#e2841a] mb-3">
              1. Γενικές Πληροφορίες
            </h2>
            <p className="leading-relaxed">
              Καλώς ήρθατε στην ιστοσελίδα της <strong className="text-white">VgoGenius</strong> (<strong className="text-white">vgogenius.gr</strong>). Η χρήση της ιστοσελίδας μας συνεπάγεται την πλήρη και ανεπιφύλακτη αποδοχή των παρόντων Όρων Χρήσης. Εάν δεν συμφωνείστε με οποιονδήποτε όρο, παρακαλούμε να μην χρησιμοποιείτε την ιστοσελίδα μας.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold text-[#e2841a] mb-3">
              2. Πνευματική Ιδιοκτησία (Copyright)
            </h2>
            <p className="leading-relaxed">
              Το σύνολο του περιεχομένου της ιστοσελίδας (συμπεριλαμβανομένων, ενδεικτικά αλλά όχι περιοριστικά, των κειμένων, γραφικών, λογοτύπων, εικόνων, πηγαίου κώδικα και δομής) αποτελεί πνευματική ιδιοκτησία της VgoGenius ή των συνεργατών της και προστατεύεται από τις διατάξεις του ελληνικού και ευρωπαϊκού δικαίου. Απαγορεύεται αυστηρά η αντιγραφή, αναδημοσίευση, τροποποίηση ή εκμετάλλευση οποιουδήποτε τμήματος χωρίς προηγούμενη γραπτή άδεια.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold text-[#e2841a] mb-3">
              3. Υπηρεσίες και Τιμοκατάλογος
            </h2>
            <p className="leading-relaxed">
              Οι πληροφορίες, τα χαρακτηριστικά και οι τιμές των πακέτων που παρουσιάζονται στην ιστοσελίδα μας είναι ενδεικτικές και δύναται να τροποποιούνται χωρίς προειδοποίηση. Η υποβολή φόρμας ενδιαφέροντος ή κράτησης πακέτου δεν συνιστά αυτόματα δεσμευτικό συμβόλαιο, παρά μόνο κατόπιν επίσημης επικοινωνίας και συμφωνίας μεταξύ των δύο πλευρών.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold text-[#e2841a] mb-3">
              4. Περιορισμός Ευθύνης
            </h2>
            <p className="leading-relaxed">
              Η VgoGenius καταβάλλει κάθε δυνατή προσπάθεια για να διασφαλίσει την ορθή λειτουργία της ιστοσελίδας, ωστόσο δεν εγγυάται την αδιάλειπτη ή χωρίς σφάλματα λειτουργία της. Η εταιρεία μας δεν φέρει ευθύνη για οποιαδήποτε άμεση ή έμμεση ζημία προκύψει από τη χρήση ή την αδυναμία χρήσης του ιστότοπου, συμπεριλαμβανομένων τυχόν τεχνικών προβλημάτων ή διακοπών του server.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold text-[#e2841a] mb-3">
              5. Σύνδεσμοι προς Τρίτους (External Links)
            </h2>
            <p className="leading-relaxed">
              Η ιστοσελίδα μας ενδέχεται να περιέχει συνδέσμους (links) προς ιστοσελίδες τρίτων (π.χ. social media, live demos έργων). Η VgoGenius δεν ελέγχει το περιεχόμενό τους και δεν φέρει καμία ευθύνη για την πολιτική ασφαλείας, την ορθότητα ή τις υπηρεσίες των εν λόγω ιστοσελίδων.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold text-[#e2841a] mb-3">
              6. Τροποποίηση Όρων
            </h2>
            <p className="leading-relaxed">
              Η VgoGenius διατηρεί το δικαίωμα να τροποποιεί, να προσθέτει ή να αφαιρεί τμήματα των παρόντων όρων ανά πάσα στιγμή. Οι αλλαγές τίθενται σε ισχύ αμέσως με τη δημοσίευσή τους στην ιστοσελίδα.
            </p>
          </div>

          <div>
            <h2 className="text-lg md:text-xl font-semibold text-[#e2841a] mb-3">
              7. Επικοινωνία
            </h2>
            <p className="leading-relaxed">
              Για οποιαδήποτε απορία ή διευκρίνιση σχετικά με τους Όρους Χρήσης, μπορείτε να επικοινωνήσετε μαζί μας μέσω της <Link href="/epikoinonia" className="text-[#e2841a] underline hover:text-[#ff9d33]">φόρμας επικοινωνίας</Link> ή απευθείας στο email <span className="text-white font-medium">vgogenius@gmail.com</span>.
            </p>
          </div>

        </div>

        {/* Κουμπί επιστροφής */}
        <div className="mt-12 text-center">
          <Link 
            href="/"
            className="inline-block bg-[#e2841a] text-black font-semibold py-3 px-8 rounded-full hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(226,132,26,0.5)] hover:shadow-[0_0_40px_rgba(226,132,26,0.9)] hover:scale-105"
          >
            Επιστροφή στην Αρχική
          </Link>
        </div>

      </div>
    </section>
  );
}