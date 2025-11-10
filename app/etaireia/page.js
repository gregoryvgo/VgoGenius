import { generatePageMeta } from "@/lib/seo";
import EtairiaClient from "@/components/EtairiaClient";

// SEO για τη σελίδα "Εταιρεία"
export const metadata = generatePageMeta({
  title: "Η Εταιρεία μας",
  description:
    "Η VgoGenius, του Γρηγόρη Βγόντζα, ιδρύθηκε το 2025 και προσφέρει ολοκληρωμένες λύσεις web design και ανάπτυξης ιστοσελίδων με δημιουργικότητα, τεχνογνωσία και όραμα.",
  path: "/etairia",
  keywords: [
    "Γρηγόρης Βγόντζας",
    "VgoGenius",
    "εταιρεία",
    "web design",
    "κατασκευή ιστοσελίδων",
    "ψηφιακή παρουσία",
  ],
});

export default function Etairia() {
  return (
    <EtairiaClient>
      <p className="mt-8 text-gray-300 text-center">
        Ιδρυτής της VgoGenius είναι ο <strong>Γρηγόρης Βγόντζας</strong>, με
        εμπειρία στον σχεδιασμό και την ανάπτυξη επαγγελματικών ιστοσελίδων.
      </p>
    </EtairiaClient>
  );
}
