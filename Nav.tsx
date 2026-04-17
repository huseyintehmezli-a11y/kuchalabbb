import { motion } from "framer-motion";
import { ArrowUpRight, PhoneCall, Send } from "lucide-react";
import { useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function CTA() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", link: "", note: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const subject = encodeURIComponent(`KuchaLab — Free review request from ${form.name || "new lead"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nContact: ${form.contact}\nInstagram / Website: ${form.link}\n\nNotes:\n${form.note}`
    );
    window.location.href = `mailto:hello@kuchalab.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section id="cta" className="relative overflow-hidden py-32 scroll-mt-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-x-0 top-0 h-[500px] radial-glow opacity-60" />
      </div>

      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
          className="glass-strong rounded-[2rem] p-10 md:p-14"
        >
          <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-8 bg-border" /> Take the next step
          </div>
          <h2 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            <span className="text-silver-gradient">Stop guessing.</span>
            <br />
            Start turning content into bookings.
          </h2>
          <p className="mt-6 max-w-xl text-base text-muted-foreground">
            Send your Instagram or website and we'll show you the clearest growth gaps in your content, offer, and follow-up.
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_1fr] md:items-start">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="glass rounded-2xl p-6">
                  <div className="text-sm font-medium">Email opened in your client.</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Send it through and we'll reply within 24 hours with your free review.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <input
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-white/[0.03] px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-foreground/40 focus:outline-none"
                  />
                  <input
                    required
                    placeholder="Email or WhatsApp"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-white/[0.03] px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-foreground/40 focus:outline-none"
                  />
                  <input
                    required
                    placeholder="Instagram handle or website URL"
                    value={form.link}
                    onChange={(e) => setForm({ ...form, link: e.target.value })}
                    className="w-full rounded-2xl border border-border bg-white/[0.03] px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-foreground/40 focus:outline-none"
                  />
                  <textarea
                    placeholder="Anything you want us to look at first? (optional)"
                    rows={3}
                    value={form.note}
                    onChange={(e) => setForm({ ...form, note: e.target.value })}
                    className="w-full resize-none rounded-2xl border border-border bg-white/[0.03] px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:border-foreground/40 focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="shimmer-border group inline-flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60"
                  >
                    {loading ? "Opening…" : (
                      <>
                        Get 3 Free Ideas
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </button>
                </form>
              )}

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                <span>Free</span>
                <span>·</span>
                <span>No commitment</span>
                <span>·</span>
                <span>Fast response</span>
              </div>
            </div>

            {/* Side panel */}
            <div className="space-y-3">
              <a
                href="mailto:hello@kuchalab.com?subject=Strategy%20call%20request"
                className="glass flex items-center justify-between rounded-2xl px-5 py-4 transition-colors hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5">
                    <PhoneCall className="h-4 w-4 text-silver" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Book a Strategy Call</div>
                    <div className="text-xs text-muted-foreground">20 min · live mapping</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </a>
              <a
                href="mailto:hello@kuchalab.com"
                className="glass flex items-center justify-between rounded-2xl px-5 py-4 transition-colors hover:bg-white/5"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5">
                    <Send className="h-4 w-4 text-silver" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">hello@kuchalab.com</div>
                    <div className="text-xs text-muted-foreground">Reply within 24h</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </a>

              <div className="rounded-2xl border border-border bg-white/[0.02] p-5 text-xs text-muted-foreground">
                We personally review every submission. If we're not the right fit for your business, we'll tell you upfront — for free.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
