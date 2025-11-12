// app/perissotera/orismoi/page.tsx
import { generatePageMeta } from "@/lib/seo";

// SEO metadata for this page
export const metadata = generatePageMeta({
  title: "Επεξήγηση Ορισμών",
  description:
    "Μάθετε τι σημαίνουν βασικοί όροι όπως Hosting, Domain, SEO, Cookies, CMS, Responsive Design και SSL — απαραίτητες γνώσεις για κάθε website.",
  path: "/perissotera/orismoi",
  keywords: [
    "VgoGenius",
    "ορισμοί website",
    "hosting",
    "domain name",
    "seo",
    "cookies",
    "cms",
    "responsive design",
    "ssl",
  ],
});

export default function OrismoiPage() {
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
          Επεξήγηση Ορισμών
        </h1>

        <p className="mb-6 text-gray-300 indent-6">
          Για να κατανοήσει κάποιος σωστά τη διαδικασία δημιουργίας ενός website,
          είναι σημαντικό να γνωρίζει ορισμένους βασικούς όρους που
          χρησιμοποιούνται σε κάθε στάδιο της ανάπτυξης και λειτουργίας του.
        </p>

        <ul className="list-disc list-inside space-y-6 text-gray-300">
          <li>
            <strong className="text-[#e2841a]">Hosting:</strong> Η υπηρεσία που
            φιλοξενεί τα αρχεία του website (κώδικας, εικόνες, βάσεις δεδομένων)
            σε έναν server, ώστε να μπορεί ο κόσμος να το βλέπει στο διαδίκτυο.
            Ως πραγματικό παράδειγμα, μπορεί να παραλληλιστεί με το ενοίκιο ενός
            διαμερίσματος ή κτιρίου· απλώς στη δική μας περίπτωση υπάρχει σε
            ηλεκτρονική μορφή.
          </li>

          <li>
            <strong className="text-[#e2841a]">Domain Name:</strong> Το μοναδικό
            όνομα (π.χ. mysite.com) που χρησιμοποιεί ένα website. Είναι
            ξεχωριστό κόστος και χρειάζεται ανανέωση κάθε χρόνο. Ακόμα κι αν το
            hosting σταματήσει (δηλαδή πάψει να εμφανίζεται δημόσια το
            website), το domain πρέπει να πληρώνεται προκειμένου να μην χαθεί,
            ειδικά αν σε ενδιαφέρει για μελλοντική χρήση.
          </li>

          <li>
            <strong className="text-[#e2841a]">SEO (Search Engine Optimization):</strong>{" "}
            Η διαδικασία που χρησιμοποιείται για να βελτιωθεί η θέση ενός website
            στα αποτελέσματα αναζήτησης (π.χ. Google, Bing) όταν κάποιος ψάχνει
            κάτι σχετικό με το συγκεκριμένο site. Ένα καλό SEO αυξάνει την
            επισκεψιμότητα και την αξιοπιστία της επιχείρησης.
          </li>

          <li>
            <strong className="text-[#e2841a]">Cookies:</strong> Μικρά αρχεία που
            αποθηκεύονται στον υπολογιστή ή στο κινητό σου όταν επισκέπτεσαι μια
            ιστοσελίδα. Χρησιμοποιούνται για να κάνουν την εμπειρία στο
            διαδίκτυο πιο προσωποποιημένη και αποτελεσματική.
          </li>

          <li>
            <strong className="text-[#e2841a]">CMS (Content Management System):</strong>{" "}
            Λογισμικό που επιτρέπει τη διαχείριση του περιεχομένου ενός website
            χωρίς να απαιτούνται τεχνικές γνώσεις προγραμματισμού. Παραδείγματα:
            WordPress, Joomla, Drupal.
          </li>

          <li>
            <strong className="text-[#e2841a]">Responsive Design:</strong> Ο τρόπος
            σχεδίασης ενός website ώστε να προσαρμόζεται αυτόματα σε κάθε συσκευή
            — κινητό, tablet ή υπολογιστή — διασφαλίζοντας άνετη πλοήγηση
            παντού.
          </li>

          <li>
            <strong className="text-[#e2841a]">SSL Certificate:</strong> Το
            πιστοποιητικό ασφαλείας που εξασφαλίζει ότι η σύνδεση μεταξύ του
            επισκέπτη και του website είναι κρυπτογραφημένη και ασφαλής. Είναι
            απαραίτητο για την προστασία δεδομένων και ενισχύει την αξιοπιστία
            και το SEO του website.
          </li>
        </ul>
      </div>
    </section>
  );
}
