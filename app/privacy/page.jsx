import Link from "next/link";

export const metadata = {
  title: "Πολιτική Απορρήτου | VgoGenius",
  description: "Πολιτική απορρήτου και προστασίας προσωπικών δεδομένων του VgoGenius.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-black text-gray-300 px-6 py-12 md:py-20 flex justify-center selection:bg-[#e2841a] selection:text-black">
      <div className="max-w-4xl w-full bg-neutral-950/80 border border-[#e2841a]/30 p-8 md:p-12 rounded-2xl shadow-2xl backdrop-blur-md space-y-8">
        
        {/* Header */}
        <header className="border-b border-[#e2841a]/20 pb-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Πολιτική <span className="text-[#e2841a]">Απορρήτου</span>
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Τελευταία ενημέρωση: 13 Αυγούστου 2026
          </p>
        </header>

        {/* Content */}
        <div className="space-y-6 text-sm md:text-base leading-relaxed text-gray-300">
          <p>
            Στο <strong className="text-white">VgoGenius</strong>, εκτιμούμε την εμπιστοσύνη σας και δεσμευόμαστε να προστατεύουμε τα προσωπικά σας δεδομένα. Η παρούσα Πολιτική Απορρήτου εξηγεί τον τρόπο με τον οποίο συλλέγουμε, χρησιμοποιούμε και διασφαλίζουμε τις πληροφορίες σας κατά την επίσκεψή σας στον ιστότοπό μας.
          </p>

          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#e2841a]">1.</span> Πληροφορίες που Συλλέγουμε
            </h2>
            <p>
              Συλλέγουμε δεδομένα που μας παρέχετε εσείς οικειοθελώς (π.χ. κατά την επικοινωνία μαζί μας), καθώς και τεχνικά δεδομένα που συλλέγονται αυτόματα:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li>Στοιχεία επικοινωνίας (όπως το email σας, αν επικοινωνήσετε μαζί μας).</li>
              <li>Τεχνικά δεδομένα (διεύθυνση IP, τύπος browser, λειτουργικό σύστημα).</li>
              <li>Δεδομένα αλληλεπίδρασης και χρήσης της ιστοσελίδας.</li>
            </ul>
          </section>

          {/* Section 2 - Aligned with Cookie Consent */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#e2841a]">2.</span> Cookies & Local Storage
            </h2>
            <p>
              Χρησιμοποιούμε cookies και τεχνολογίες τοπικής αποθήκευσης (Local Storage) για να διασφαλίσουμε τη σωστή λειτουργία του VgoGenius, να αποθηκεύουμε τις προτιμήσεις σας (όπως την αποδοχή ή απόρριψη του cookie banner) και να αναλύουμε την επισκεψιμότητα.
            </p>
            <p className="text-gray-400 text-sm italic">
              Μπορείτε ανά πάσα στιγμή να διαγράψετε τα cookies ή τα δεδομένα του Local Storage μέσα από τις ρυθμίσεις του προγράμματος περιήγησης (browser) που χρησιμοποιείτε.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#e2841a]">3.</span> Πώς Χρησιμοποιούμε τα Δεδομένα σας
            </h2>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li>Για την παροχή, συντήρηση και βελτίωση των υπηρεσιών του VgoGenius.</li>
              <li>Για την απάντηση σε αιτήματα ή μηνύματα υποστήριξης.</li>
              <li>Για την προστασία του ιστότοπου από κακόβουλες ενέργειες.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#e2841a]">4.</span> Τα Δικαιώματά σας (GDPR)
            </h2>
            <p>
              Σύμφωνα με τον ευρωπαϊκό κανονισμό GDPR, διατηρείτε τα εξής δικαιώματα:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-gray-400">
              <li>Δικαίωμα πρόσβασης και ενημέρωσης για τα δεδομένα που διατηρούμε για εσάς.</li>
              <li>Δικαίωμα διόρθωσης ή πλήρους διαγραφής των δεδομένων σας ("Δικαίωμα στη λήθη").</li>
              <li>Δικαίωμα περιορισμού ή εναντίωσης στην επεξεργασία.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 border-t border-[#e2841a]/20 pt-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-[#e2841a]">5.</span> Επικοινωνία
            </h2>
            <p>
              Για οποιαδήποτε απορία, διευκρίνιση ή αίτημα σχετικά με την παρούσα Πολιτική Απορρήτου, μπορείτε να επικοινωνήσετε μαζί μας στο:
            </p>
            <div className="bg-black/60 p-4 rounded-xl border border-[#e2841a]/30 inline-block mt-2">
              <span className="text-gray-400">Email Επικοινωνίας: </span>
              <a 
                href="mailto:vgogenius@gmail.com" 
                className="text-[#e2841a] font-semibold hover:underline"
              >
                vgogenius@gmail.com
              </a>
            </div>
          </section>
        </div>

        {/* Footer Link back */}
        <footer className="pt-6 border-t border-neutral-800 flex justify-between items-center text-sm">
          <Link 
            href="/" 
            className="text-[#e2841a] hover:text-white transition font-medium flex items-center gap-1"
          >
            ← Επιστροφή στην Αρχική
          </Link>
          <span className="text-gray-500">© 2026 VgoGenius</span>
        </footer>

      </div>
Main  </main>
  );
}