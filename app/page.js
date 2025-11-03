import HomeClient from "@/components/HomeClient";
import { generatePageMeta } from "@/lib/seo";

// SEO για την Αρχική
export const metadata = generatePageMeta({
  title: "Αρχική",
  description:
    "Η VgoGenius δημιουργεί websites με Next.js και Tailwind CSS — γρήγορα, μοντέρνα και SEO-optimized.",
  path: "/",
  keywords: [
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
