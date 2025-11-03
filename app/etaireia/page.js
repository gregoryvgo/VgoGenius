import { generatePageMeta } from "@/lib/seo";
import EtairiaClient from "@/components/EtairiaClient";

export const metadata = generatePageMeta({
  title: "Εταιρεία",
  description:
    "Η VgoGenius ιδρύθηκε το 2025 και προσφέρει ολοκληρωμένες λύσεις web design και ανάπτυξης ιστοσελίδων με δημιουργικότητα, τεχνογνωσία και όραμα.",
  path: "/etairia",
  keywords: [
    "VgoGenius",
    "εταιρεία",
    "web design",
    "κατασκευή ιστοσελίδων",
    "ψηφιακή παρουσία",
  ],
});

export default function Etairia() {
  return <EtairiaClient />;
}
