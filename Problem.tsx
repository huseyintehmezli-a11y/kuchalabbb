import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-background py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
        <div>
          <div className="flex items-center gap-2">
            <div className="relative h-7 w-7">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white to-white/20" />
              <div className="absolute inset-[3px] rounded-full bg-background" />
              <div className="absolute inset-[7px] rounded-full bg-white" />
            </div>
            <span className="text-sm font-semibold tracking-tight">KUCHALAB</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            A modern growth and creative lab. We turn social attention into bookings.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12 text-sm md:grid-cols-3">
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Company</div>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
              <li><Link to="/work" className="text-muted-foreground hover:text-foreground">Work</Link></li>
              <li><Link to="/process" className="text-muted-foreground hover:text-foreground">Process</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-foreground">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Contact</div>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground">Get free ideas</Link></li>
              <li><a href="mailto:hello@kuchalab.com" className="text-muted-foreground hover:text-foreground">hello@kuchalab.com</a></li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-xs uppercase tracking-widest text-muted-foreground">Legal</div>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-6xl px-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} KuchaLab. All rights reserved.
      </div>
    </footer>
  );
}
