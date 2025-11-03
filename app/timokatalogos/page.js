import { generatePageMeta } from "@/lib/seo";
import TimokatalogosClient from "@/components/TimokatalogosClient";

export const metadata = generatePageMeta({
  title: "Τιμοκατάλογος",
  description:
    "Δείτε τα διαθέσιμα πακέτα κατασκευής ιστοσελίδων από τη VgoGenius — Βασικό, Επαγγελματικό και Premium, με πλήρες SEO και responsive design.",
  path: "/timokatalogos",
  keywords: [
    "VgoGenius",
    "τιμοκατάλογος",
    "πακέτα website",
    "κόστος κατασκευής ιστοσελίδας",
    "web design Ελλάδα",
  ],
});

export default function Timokatalogos() {
  return <TimokatalogosClient />;
}
