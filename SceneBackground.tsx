import { motion } from "framer-motion";
import { SceneBackground } from "@/components/three/SceneBackground";

const steps = [
  { n: "01", title: "Audit", body: "We find where your content, offer, and follow-up are leaking potential clients." },
  { n: "02", title: "Reposition", body: "We clarify your message so people immediately understand what you do and why it matters." },
  { n: "03", title: "Build", body: "We create content ideas, creator direction, scripts, and follow-up assets." },
  { n: "04", title: "Convert", body: "You get a simple system designed to turn views, DMs, and inquiries into bookings." },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-32">
      <SceneBackground variant="process" className="pointer-events-none absolute -left-40 top-20 -z-10 h-[700px] w-[700px] opacity-40" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-20 max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-border" /> The Process
          </div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            <span className="text-silver-gradient">A clear path</span>
            <br />
            from attention to bookings.
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent md:left-1/2 md:-translate-x-1/2" />

          <ul className="space-y-12 md:space-y-24">
            {steps.map((s, i) => {
              const right = i % 2 === 1;
              return (
                <motion.li
                  key={s.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: i * 0.08, ease }}
                  className="relative grid grid-cols-[32px_1fr] gap-6 md:grid-cols-2 md:gap-16"
                >
                  <div className="relative md:absolute md:left-1/2 md:-translate-x-1/2 md:top-2">
                    <div className="relative h-8 w-8">
                      <div className="absolute inset-0 animate-pulse-glow rounded-full bg-white/20 blur-md" />
                      <div className="relative grid h-8 w-8 place-items-center rounded-full glass">
                        <div className="h-2 w-2 rounded-full bg-white" />
                      </div>
                    </div>
                  </div>

                  <div className={`${right ? "md:col-start-2" : "md:col-start-1 md:text-right"} md:row-start-1`}>
                    <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.n}</div>
                    <h3 className="mt-2 text-2xl font-semibold tracking-tight md:text-4xl">{s.title}</h3>
                    <p className="mt-3 max-w-md text-muted-foreground md:max-w-sm md:inline-block">{s.body}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
