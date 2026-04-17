import { motion } from "framer-motion";
import { Eye, Target, MessageCircle } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const cards = [
  {
    icon: Eye,
    title: "You post, but no one books",
    text: "Views and likes don't matter if they don't create inquiries.",
  },
  {
    icon: Target,
    title: "Your offer isn't clear enough",
    text: "People don't know why they should choose you now.",
  },
  {
    icon: MessageCircle,
    title: "Your DMs don't convert",
    text: "Without a follow-up system, warm leads disappear.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-border" /> The problem
          </div>
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            <span className="text-silver-gradient">Why your content</span>
            <br />
            isn't turning into clients.
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease }}
              className="glass rounded-3xl p-8"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-white/5">
                <c.icon className="h-5 w-5 text-silver" />
              </div>
              <h3 className="mt-6 text-xl font-semibold tracking-tight">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-12 text-center text-lg text-foreground/85 md:text-xl"
        >
          It's not just a content problem.{" "}
          <span className="text-silver-gradient font-medium">It's a conversion system problem.</span>
        </motion.p>
      </div>
    </section>
  );
}
