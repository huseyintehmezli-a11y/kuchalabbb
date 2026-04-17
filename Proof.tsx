import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";

const links = [
  { label: "Services", hash: "services" },
  { label: "Work", hash: "work" },
  { label: "Process", hash: "process" },
  { label: "Pricing", hash: "pricing" },
  { label: "Contact", hash: "cta" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (hash: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    if (location.pathname !== "/") {
      navigate({ to: "/", hash });
    } else {
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-4 z-50 w-[calc(100%-1.5rem)] max-w-6xl -translate-x-1/2"
    >
      <nav
        className={`glass flex items-center justify-between rounded-full px-4 py-2.5 transition-all md:px-6 md:py-3 ${
          scrolled ? "shadow-glow" : ""
        }`}
      >
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-7 w-7">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-white/20" />
            <div className="absolute inset-[3px] rounded-full bg-background" />
            <div className="absolute inset-[7px] rounded-full bg-white" />
          </div>
          <span className="text-sm font-semibold tracking-tight">KUCHALAB</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.hash}>
              <a
                href={`/#${l.hash}`}
                onClick={handleNav(l.hash)}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="/#cta"
            onClick={handleNav("cta")}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-transform hover:scale-[1.04] active:scale-[0.98]"
          >
            Get Free Ideas
            <span className="h-1.5 w-1.5 rounded-full bg-background/50" />
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-9 w-9 place-items-center rounded-full border border-border md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass-strong mt-2 rounded-3xl p-4 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.hash}>
                  <a
                    href={`/#${l.hash}`}
                    onClick={handleNav(l.hash)}
                    className="block rounded-xl px-3 py-3 text-sm hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/#cta"
                  onClick={handleNav("cta")}
                  className="block rounded-full bg-foreground px-4 py-3 text-center text-sm font-medium text-background"
                >
                  Get Free Ideas
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
