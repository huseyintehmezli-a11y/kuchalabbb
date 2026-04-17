import { motion } from "framer-motion";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Starter Sprint",
    price: "$149",
    bestFor: "Best for testing the system",
    desc: "A focused audit for businesses that need clarity fast.",
    features: ["Instagram / TikTok audit", "Content gap analysis", "5 short-form ideas", "1 DM reply script"],
    highlight: false,
    cta: "Get Started",
  },
  {
    name: "Growth Sprint",
    price: "$349",
    bestFor: "Best for businesses ready to generate more inquiries",
    desc: "The recommended 7-day sprint for content, creator direction, and lead follow-up.",
    features: ["Full audit + gap analysis", "10–20 short-form hooks", "Creator shortlist (15–50)", "DM reply scripts", "7-day action plan", "Loom walkthrough + Q&A"],
    highlight: true,
    cta: "Start Sprint",
    badge: "Most picked",
  },
  {
    name: "Advanced Sprint",
    price: "$599",
    bestFor: "Best for aggressive growth",
    desc: "A deeper conversion setup with outreach support and stronger messaging.",
    features: ["Everything in Growth", "Creator outreach support", "Lead follow-up flow", "Conversion messaging", "60-day roadmap"],
    highlight: false,
    cta: "Get Started",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-[400px] radial-glow opacity-40" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-border" /> Pricing <span className="h-px w-8 bg-border" />
          </div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            <span className="text-silver-gradient">Sprint pricing.</span>
            <br />
            No retainers.
          </h2>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            <span className="text-foreground/90">Limited client slots available while sprint pricing is active</span>
          </div>
        </motion.div>

        <div className="grid items-stretch gap-4 md:grid-cols-3">
          {tiers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease }}
              className={`relative flex flex-col rounded-3xl p-8 ${
                t.highlight
                  ? "glass-strong shadow-glow md:-my-4 md:scale-[1.04] z-10 border-foreground/30"
                  : "glass"
              }`}
            >
              {t.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-background">
                  {t.badge}
                </span>
              )}
              <div className="text-sm uppercase tracking-widest text-muted-foreground">{t.name}</div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-semibold tracking-tight">{t.price}</span>
                <span className="text-xs text-muted-foreground">one-time</span>
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.18em] text-foreground/80">{t.bestFor}</div>
              <p className="mt-3 text-sm text-muted-foreground">{t.desc}</p>

              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 text-silver" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#cta"
                className={`shimmer-border mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.02] ${
                  t.highlight ? "bg-foreground text-background" : "border border-border text-foreground hover:bg-white/5"
                }`}
              >
                {t.cta}
              </a>
              <div className="mt-3 text-center text-[11px] uppercase tracking-widest text-muted-foreground">
                Clear deliverables · No confusion
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
