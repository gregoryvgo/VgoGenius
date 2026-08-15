import DemosShowcase from "@/components/DemosShowcase";

export const metadata = {
  title: "Δείγματα Έργων & Live Demos | VgoGenius",
  description: "Εξερευνήστε live εφαρμογές και εξειδικευμένες web λύσεις από τη VgoGenius.",
};

export default function DemosPage() {
  return (
    <div className="pt-28 pb-20">
      <DemosShowcase />
    </div>
  );
}