import DemosShowcase from "@/components/DemosShowcase";
import { generatePageMeta } from "@/lib/seo";

export const metadata = generatePageMeta({
  title: "Δείγματα Έργων & Live Demos",
  description: "Δείτε άμεσα projects και πάρτε ιδέες για την αναβάθμιση της δικής σας επιχείρησης!",
  path: "/demos",
  keywords: ["VgoGenius demos", "web design projects", "κατασκευή ιστοσελίδων"]
});

export default function DemosPage() {
  return (
    <div className="pt-28 pb-20">
      <DemosShowcase />
    </div>
  );
}