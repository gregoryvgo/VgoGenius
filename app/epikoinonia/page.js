import { generatePageMeta } from "@/lib/seo";
import EpikoinoniaClient from "@/components/EpikoinoniaClient";

export const metadata = generatePageMeta({
  title: "Επικοινωνία",
  description:
    "Επικοινωνήστε με τη VgoGenius για συνεργασίες, ιδέες ή πληροφορίες σχετικά με την κατασκευή ιστοσελίδων και υπηρεσίες web design.",
  path: "/epikoinonia",
  keywords: [
    "VgoGenius επικοινωνία",
    "κατασκευή ιστοσελίδων επικοινωνία",
    "web design συνεργασία",
  ],
});

export default function Epikoinonia() {
  return <EpikoinoniaClient />;
}
