import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { CTA } from "@/components/site/CTA";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process — KuchaLab" },
      { name: "description", content: "Audit, plan, source, convert — our 7-day path from attention to revenue." },
      { property: "og:title", content: "Process — KuchaLab" },
      { property: "og:description", content: "A clear path from attention to revenue." },
    ],
  }),
  component: ProcessPage,
});

function ProcessPage() {
  return (
    <main>
      <PageHeader
        eyebrow="How we work"
        title={<>A clear 4-step sprint.</>}
        subtitle="No retainers to figure things out. We move fast, with a structured 7-day system."
        variant="process"
      />
      <Process />
      <CTA />
    </main>
  );
}
