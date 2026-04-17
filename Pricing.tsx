import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ease = [0.22, 1, 0.36, 1] as const;

const faqs = [
  {
    q: "Who is this for?",
    a: "Clinics, salons, gyms, restaurants, cafes, dentists, and local service businesses that want more inquiries from their content.",
  },
  {
    q: "How fast do I get deliverables?",
    a: "You receive the first clear direction within 48 hours, depending on the package.",
  },
  {
    q: "Do you guarantee bookings?",
    a: "No agency can honestly guarantee bookings. We build the content, messaging, and follow-up system designed to improve your chances of converting attention into inquiries.",
  },
  {
    q: "What do I actually get?",
    a: "Depending on the plan: audit, content ideas, creator shortlist, DM scripts, offer messaging, and a clear 7-day action plan.",
  },
  {
    q: "Do I need a big audience?",
    a: "No. The system is built to improve clarity and conversion even if your audience is still small.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-14 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-border" /> Questions <span className="h-px w-8 bg-border" />
          </div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            <span className="text-silver-gradient">Things people ask</span>
            <br />
            before signing on.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="glass rounded-3xl p-2 md:p-4"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="px-4 py-5 text-left text-base font-medium hover:no-underline md:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
