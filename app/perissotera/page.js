import { generatePageMeta } from "@/lib/seo";
import PerissoteraClient from "@/components/PerissoteraClient";

export const metadata = generatePageMeta({
  title: "Περισσότερα",
  description:
    "Ενημερωθείτε για τα οφέλη, τους ορισμούς και τη φιλοσοφία της VgoGenius σχετικά με τη δημιουργία επαγγελματικών websites.",
  path: "/perissotera",
  keywords: [
    "VgoGenius",
    "οφέλη website",
    "επαγγελματική ιστοσελίδα",
    "web design Ελλάδα",
  ],
});

export default function Perissotera() {
  return <PerissoteraClient />;
}
