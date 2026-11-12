import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/md_logo.webp.asset.json";
import { contact } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-night">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="Michael Daramola logo" width={56} height={56} className="size-14 rounded-2xl ring-1 ring-border" loading="lazy" />
            <div>
              <p className="font-display text-xl font-semibold">Michael Daramola</p>
              <p className="eyebrow text-glow">{contact.tagline}</p>
            </div>
          </div>
          <p className="mt-6 max-w-sm text-muted-foreground">
            Shopify Expert and E-commerce Developer building beautiful, conversion-focused online stores for brands worldwide.
          </p>
        </div>
        <div>
          <p className="eyebrow text-muted-foreground">Explore</p>
          <ul className="mt-5 space-y-3">
            {([["/about", "About"], ["/services", "Services"], ["/projects", "Projects"], ["/skills", "Skills"], ["/contact", "Contact"]] as const).map(([to, label]) => (
              <li key={to}><Link to={to} className="text-foreground/80 transition-colors hover:text-glow">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-muted-foreground">Get in touch</p>
          <ul className="mt-5 space-y-3 text-foreground/80">
            {contact.emails.map((e) => (
              <li key={e}><a href={`mailto:${e}`} className="flex items-center gap-2 break-all hover:text-glow"><Mail className="size-4 shrink-0" />{e}</a></li>
            ))}
            <li><a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-glow"><MessageCircle className="size-4 shrink-0" />{contact.whatsappDisplay}</a></li>
            <li><a href={contact.instagramUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-glow"><Instagram className="size-4 shrink-0" />{contact.instagramHandle}</a></li>
            <li><a href={contact.fiverrUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-glow"><span className="grid size-4 shrink-0 place-items-center rounded-sm bg-foreground/80 text-[0.6rem] font-bold text-background">fi</span>Fiverr profile</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-sm text-muted-foreground sm:px-8">© {new Date().getFullYear()} Michael Daramola. All rights reserved.</p>
      </div>
    </footer>
  );
}
