import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MiniCrystal } from "@/components/three/MiniCrystal";

const ease = [0.22, 1, 0.36, 1] as const;

const cases = [
  {
    tag: "Aesthetic Clinic",
    title: "From consistent posting to clearer booking flow",
    problem: "Posting consistently but getting few appointment inquiries.",
    system: "Content direction + offer repositioning + DM follow-up script.",
    outcome: "Clearer content angles and a booking-focused DM flow in 7 days.",
    shape: "octa" as const,
  },
  {
    tag: "Local Gym",
    title: "Turning views into membership inquiries",
    problem: "High views but low membership inquiries.",
    system: "Short-form content plan + lead response script.",
    outcome: "More structured inquiry flow and stronger offer clarity.",
    shape: "icosa" as const,
  },
  {
    tag: "Beauty Salon",
    title: "From active feed to actual bookings",
    problem: "Instagram looked active but did not create bookings.",
    system: "Service offer audit + content gaps + follow-up message templates.",
    outcome: "A cleaner path from content view to appointment request.",
    shape: "tetra" as const,
  },
];

export function CaseStudies() {
  return (
    <section id="work" className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-border" /> Work
          </div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            <span className="text-silver-gradient">Example</span>
            <br />
            growth sprints.
          </h2>
          <p className="mt-6 max-w-xl text-sm text-muted-foreground">
            Sample sprint outcomes that show how the system is applied to real service businesses. These are illustrative scenarios, not verified client case studies.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {cases.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease }}
              className="group relative flex flex-col overflow-hidden rounded-3xl glass p-8 transition-all hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.tag}</div>
                <MiniCrystal kind={c.shape} className="h-20 w-20 -mt-2 -mr-2" />
              </div>

              <h3 className="mt-4 text-xl font-semibold tracking-tight md:text-2xl">{c.title}</h3>

              <div className="mt-6 space-y-4 text-sm">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Problem</div>
                  <p className="mt-1.5 text-foreground/85">{c.problem}</p>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">System</div>
                  <p className="mt-1.5 text-foreground/85">{c.system}</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-border bg-white/[0.02] p-4">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Example outcome</div>
                <p className="mt-1.5 text-sm font-medium text-silver-gradient">{c.outcome}</p>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                <span>Sample sprint 0{i + 1}</span>
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mt-10 text-center text-xs text-muted-foreground"
        >
          Want a sprint mapped for your business?{" "}
          <a href="#cta" className="text-foreground underline-offset-4 hover:underline">Get 3 free ideas →</a>
        </motion.p>
      </div>
    </section>
  );
}
