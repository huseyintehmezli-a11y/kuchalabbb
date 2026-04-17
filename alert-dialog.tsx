import { motion } from "framer-motion";
import { Target, Cpu, Send, Database, LineChart } from "lucide-react";
import { MiniCrystal } from "@/components/three/MiniCrystal";
import { SceneBackground } from "@/components/three/SceneBackground";

const ease = [0.22, 1, 0.36, 1] as const;

function Cell({
  className = "",
  children,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={`group relative overflow-hidden rounded-3xl glass p-8 transition-all hover:bg-white/[0.04] ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(400px circle at 50% 0%, oklch(1 0 0 / 0.08), transparent 40%)" }}
      />
      {children}
    </motion.div>
  );
}

function Subtitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-2 text-xs uppercase tracking-[0.18em] text-foreground/70">{children}</div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-32">
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] radial-glow opacity-50" />
      <SceneBackground variant="services" className="pointer-events-none absolute right-[-10%] top-10 -z-10 h-[600px] w-[600px] opacity-40" />
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-border" /> What we do
          </div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
            <span className="text-silver-gradient">Five focused services.</span>
            <br />
            One conversion system.
          </h2>
          <p className="mt-6 max-w-xl text-muted-foreground">
            Each one designed to close the gap between content, inquiries, and booked clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          <Cell className="md:col-span-2 md:row-span-2 min-h-[460px] flex flex-col justify-between" delay={0}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5">
                  <Target className="h-5 w-5" />
                </div>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">01 — Flagship</span>
              </div>
              <MiniCrystal kind="icosa" className="h-32 w-32" />
            </div>
            <div>
              <h3 className="text-3xl font-semibold tracking-tight md:text-5xl">Social Growth Sprint</h3>
              <Subtitle>For businesses that want bookings, not just views.</Subtitle>
              <p className="mt-4 max-w-md text-muted-foreground">
                A 7-day audit and action plan covering your content, offer, DM flow, and next growth moves.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Audit", "Content", "Creators", "DM Scripts"].map((t) => (
                  <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          </Cell>

          <Cell delay={0.1}>
            <Cpu className="h-5 w-5" />
            <h3 className="mt-6 text-xl font-semibold tracking-tight">Creator & UGC Sourcing</h3>
            <Subtitle>For brands that need better content without a huge team.</Subtitle>
            <p className="mt-3 text-sm text-muted-foreground">
              We find relevant creators and define content angles that fit your niche, audience, and offer.
            </p>
          </Cell>

          <Cell delay={0.2}>
            <Send className="h-5 w-5" />
            <h3 className="mt-6 text-xl font-semibold tracking-tight">DM & Lead Follow-Up</h3>
            <Subtitle>For businesses losing warm leads in the inbox.</Subtitle>
            <p className="mt-3 text-sm text-muted-foreground">
              We create simple reply scripts and follow-up flows that turn inquiries into booked clients.
            </p>
          </Cell>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          <Cell delay={0.05}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <Database className="h-5 w-5" />
                <h3 className="mt-6 text-xl font-semibold tracking-tight">Email & Retention</h3>
                <Subtitle>For e-commerce and service brands that want repeat revenue.</Subtitle>
                <p className="mt-3 text-sm text-muted-foreground">
                  We map welcome, abandoned inquiry, post-purchase, and winback flows.
                </p>
              </div>
              <span className="text-xs text-muted-foreground">04</span>
            </div>
          </Cell>
          <Cell delay={0.1}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <LineChart className="h-5 w-5" />
                <h3 className="mt-6 text-xl font-semibold tracking-tight">Conversion Messaging</h3>
                <Subtitle>For businesses whose content looks good but doesn't sell.</Subtitle>
                <p className="mt-3 text-sm text-muted-foreground">
                  We clarify your offer, hooks, and calls-to-action so people know why to act now.
                </p>
              </div>
              <span className="text-xs text-muted-foreground">05</span>
            </div>
          </Cell>
        </div>
      </div>
    </section>
  );
}
