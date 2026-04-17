import { motion } from "framer-motion";
import { Zap, ClipboardList, Briefcase } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const chips = [
  { icon: Zap, label: "Fast 48h first delivery" },
  { icon: ClipboardList, label: "Clear action plan" },
  { icon: Briefcase, label: "Built for service businesses" },
];

export function Proof() {
  return (
    <section id="proof" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-border" /> Trust <span className="h-px w-8 bg-border" />
          </div>
          <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-5xl">
            <span className="text-silver-gradient">Built for businesses that need practical growth,</span>
            <br />
            not vanity metrics.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="glass mx-auto max-w-3xl rounded-3xl p-10"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Client note</div>
          <p className="mt-6 text-xl font-medium leading-snug tracking-tight md:text-2xl">
            <span className="text-silver-gradient">
              "We had content going out every week, but no clear path from Instagram to bookings. KuchaLab helped us understand what to post, what to say in DMs, and how to follow up properly."
            </span>
          </p>
          <div className="mt-8 flex items-center gap-4">
            <div className="h-11 w-11 rounded-full bg-gradient-to-br from-white/30 to-white/5" />
            <div className="text-sm">
              <div className="font-medium">Maya R.</div>
              <div className="text-muted-foreground">Aesthetic clinic owner</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {chips.map((c) => (
            <span
              key={c.label}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs"
            >
              <c.icon className="h-3.5 w-3.5 text-silver" />
              <span className="text-foreground/90">{c.label}</span>
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
