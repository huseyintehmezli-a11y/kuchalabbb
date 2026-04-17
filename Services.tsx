import { motion } from "framer-motion";
import { SceneBackground } from "@/components/three/SceneBackground";

const ease = [0.22, 1, 0.36, 1] as const;

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  variant = "services",
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  variant?: "services" | "work" | "process" | "pricing" | "contact";
}) {
  return (
    <section className="relative isolate overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 radial-glow" />
        <SceneBackground variant={variant} className="absolute inset-0 h-full w-full opacity-90" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/10 to-background" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="relative max-w-3xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-6 bg-border" /> {eyebrow}
          </div>
          <h1 className="text-5xl font-semibold tracking-tight md:text-7xl drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
            <span className="text-silver-gradient">{title}</span>
          </h1>
          {subtitle && (
            <p className="mt-6 max-w-xl text-foreground/80 md:text-lg drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
