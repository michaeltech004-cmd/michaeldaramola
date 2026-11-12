import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/md_logo.webp.asset.json";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || open ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent")}>
      <div className="mx-auto grid h-18 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr]">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="" width={40} height={40} className="size-10 shrink-0 rounded-xl ring-1 ring-border" />
          <span className="min-w-0">
            <span className="block truncate font-display text-base font-semibold leading-tight">Michael Daramola</span>
            <span className="block truncate font-mono text-[0.62rem] uppercase tracking-[0.2em] text-muted-foreground">Shopify Expert</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 rounded-full glass px-2 py-1.5 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:bg-foreground/10 data-[status=active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-2">
          <Button asChild variant="hero" size="lg" className="hidden px-6 sm:inline-flex">
            <Link to="/contact">Hire Me</Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid size-11 place-items-center rounded-full glass lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div id="mobile-nav" hidden={!open} className="h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-border bg-background px-5 pb-10 lg:hidden">
        <nav aria-label="Mobile" className="flex flex-col pt-4">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: item.to === "/" }}
              className="border-b border-border py-4 font-display text-3xl font-semibold text-muted-foreground data-[status=active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Button asChild variant="hero" size="xl" className="mt-8 w-full">
          <Link to="/contact" onClick={() => setOpen(false)}>Hire Me</Link>
        </Button>
      </div>
    </header>
  );
}
