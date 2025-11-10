import HomeClient from "@/components/HomeClient";
import { generatePageMeta } from "@/lib/seo";

// SEO για την Αρχική
export const metadata = generatePageMeta({
  title: "Αρχική",
  description:
    "Η VgoGenius, του Γρηγόρη Βγόντζα, δημιουργεί websites με Next.js και Tailwind CSS — γρήγορα, μοντέρνα και SEO-optimized.",
  path: "/",
  keywords: [
    "Γρηγόρης Βγόντζας",
    "VgoGenius",
    "κατασκευή ιστοσελίδων",
    "web design",
    "Next.js",
    "Tailwind CSS",
    "SEO",
  ],
});

export default function Home() {
  return <HomeClient />;
}
