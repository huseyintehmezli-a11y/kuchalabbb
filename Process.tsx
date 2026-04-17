import { motion } from "framer-motion";
import { ArrowUpRight, CalendarCheck, Zap, Users, PhoneCall } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { CrystalScene } from "@/components/three/CrystalScene";

const ease = [0.22, 1, 0.36, 1] as const;

function StatCard({
  icon: Icon,
  value,
  label,
  className,
  delay,
}: {
  icon: typeof CalendarCheck;
  value: string;
  label: string;
  className?: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay, ease }}
      className={`glass animate-float absolute hidden md:flex items-center gap-3 rounded-2xl px-4 py-3 ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-white/5">
        <Icon className="h-4 w-4 text-silver" />
      </div>
      <div>
        <div className="text-base font-semibold leading-none">{value}</div>
        <div className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-screen overflow-hidden pb-24 pt-36 md:pt-44"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 radial-glow" />
        <CrystalScene className="absolute inset-0 h-full w-full opacity-70" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-background/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto mb-8 inline-flex w-fit items-center gap-2 rounded-full glass px-3 py-1.5 text-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          </span>
          <span className="text-muted-foreground">Now booking — limited client slots this month</span>
        </motion.div>

        <div className="relative">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease }}
            className="text-balance text-center text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl md:text-7xl drop-shadow-[0_4px_40px_rgba(0,0,0,0.9)]"
          >
            <span className="text-silver-gradient">Posting every day</span>
            <br />
            <span className="text-silver-gradient">but still getting no bookings?</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="mx-auto mt-8 max-w-2xl text-center text-base text-foreground/85 md:text-lg drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]"
          >
            KuchaLab builds simple <span className="text-foreground font-medium">content + follow-up systems</span> for clinics, gyms, salons, restaurants, and local businesses that want real inquiries — not just views.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.45, ease }}
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#cta"
              className="shimmer-border group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Get 3 Free Ideas
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#cta"
              className="glass inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition-colors hover:bg-white/5"
            >
              <PhoneCall className="h-4 w-4" />
              Book a Strategy Call
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.7, ease }}
            className="mt-6 text-center text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            Free review · No commitment · Built for service businesses
          </motion.p>

          <StatCard icon={CalendarCheck} value="7-Day" label="Growth Sprint" className="-left-4 top-12 lg:-left-12" delay={0.6} />
          <StatCard icon={Zap} value="48h" label="First deliverables" className="-right-4 top-32 lg:-right-12" delay={0.8} />
          <StatCard icon={Users} value="15–50" label="Creator shortlist" className="left-8 bottom-0 lg:left-0" delay={1} />
        </div>
      </div>
    </section>
  );
}
