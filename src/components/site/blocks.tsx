import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Quote } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { contact, process, reasons, type Project, type Service } from "@/lib/site-data";
import { BrowserFrame } from "./frames";
import { Icon } from "./icon";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal as="article" delay={(index % 2) * 120}>
      <Link to="/projects/$slug" params={{ slug: project.slug }} className="group block">
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-brand opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25" aria-hidden="true" />
          <div className="relative transition-transform duration-500 group-hover:-translate-y-1.5">
            <BrowserFrame src={project.desktop[0]!} alt={`${project.name} Shopify store homepage`} domain={project.domain} />
          </div>
        </div>
        <div className="mt-6 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="eyebrow text-glow">{String(index + 1).padStart(2, "0")} · {project.category}</p>
            <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">{project.name}</h3>
            <p className="mt-2 max-w-md text-muted-foreground">{project.summary}</p>
          </div>
          <span className="grid size-12 shrink-0 place-items-center rounded-full border border-border transition-all duration-300 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-brand">
            <ArrowUpRight className="size-5" />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function ServiceCard({ service, index, tone = "dark" }: { service: Service; index: number; tone?: "dark" | "light" }) {
  const light = tone === "light";
  return (
    <Reveal delay={(index % 3) * 90} className="h-full">
      <div className={light
        ? "group relative h-full overflow-hidden rounded-2xl border border-paper-border bg-paper p-7 shadow-paper transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
        : "group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"}>
        <div className="absolute -right-10 -top-10 size-32 rounded-full bg-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40" aria-hidden="true" />
        <div className="relative flex items-center justify-between">
          <span className="grid size-12 place-items-center rounded-xl bg-brand text-primary-foreground shadow-glow">
            <Icon name={service.icon} className="size-5" />
          </span>
          <span className={light ? "font-mono text-xs text-ink-muted" : "font-mono text-xs text-muted-foreground"}>{String(index + 1).padStart(2, "0")}</span>
        </div>
        <h3 className={light ? "relative mt-6 text-xl font-semibold text-ink" : "relative mt-6 text-xl font-semibold"}>{service.title}</h3>
        <p className={light ? "relative mt-3 leading-relaxed text-ink-muted" : "relative mt-3 leading-relaxed text-muted-foreground"}>{service.body}</p>
      </div>
    </Reveal>
  );
}

export function ProcessSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow="My work process" title={<>A clear path from <span className="text-gradient">idea to launch.</span></>} intro="Every project follows the same proven structure, so you always know what happens next." />
        <ol className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, i) => (
            <Reveal as="li" key={step.n} delay={(i % 3) * 90} className="group bg-background p-8 transition-colors hover:bg-card">
              <p className="font-display text-6xl font-semibold text-foreground/10 transition-colors group-hover:text-gradient">{step.n}</p>
              <h3 className="mt-4 text-2xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-muted-foreground">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function WhySection() {
  return (
    <section className="bg-paper py-24 text-ink sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading tone="light" eyebrow="Why work with me" title="A partner who cares how your store performs." intro="Good design is only the start. I build stores that are easy to shop, easy to manage and built around your customers." />
          <Button asChild variant="ink" size="xl" className="mt-10">
            <Link to="/contact">Start your project</Link>
          </Button>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {reasons.map((r, i) => (
            <Reveal as="li" key={r.title} delay={(i % 2) * 90} className={i === reasons.length - 1 ? "sm:col-span-2" : undefined}>
              <div className="h-full rounded-2xl border border-paper-border bg-paper-2 p-6 transition-colors hover:border-primary/40">
                <Icon name={r.icon} className="size-6 text-primary" />
                <h3 className="mt-4 text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-ink-muted">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading align="center" eyebrow="Client testimonials" title="What clients say" intro="Client feedback will appear here. In the meantime, you can read verified reviews on my Fiverr profile." />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-dashed border-border bg-card/50 p-8">
                <Quote className="size-8 text-glow/60" aria-hidden="true" />
                <blockquote className="mt-6 flex-1 text-lg text-muted-foreground">Testimonial coming soon.</blockquote>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span className="size-10 rounded-full bg-muted" aria-hidden="true" />
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Client name · Store</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild variant="glass" size="xl">
            <a href={contact.fiverrUrl} target="_blank" rel="noreferrer">Read reviews on Fiverr <ArrowUpRight /></a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="px-5 pb-24 sm:px-8 sm:pb-32">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border bg-card px-6 py-20 text-center sm:px-16">
        <div className="absolute inset-0 bg-hero" aria-hidden="true" />
        <div className="absolute inset-0 bg-grid" aria-hidden="true" />
        <div className="relative">
          <p className="eyebrow text-glow">{contact.tagline}</p>
          <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-6xl">
            Let&apos;s Build Something <span className="text-gradient">Great Together.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Have an idea, an existing Shopify store, or an e-commerce business you want to grow? Let&apos;s talk.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="xl"><Link to="/contact">Let&apos;s Work Together</Link></Button>
            <Button asChild variant="glass" size="xl"><a href={contact.whatsappUrl} target="_blank" rel="noreferrer">Chat on WhatsApp</a></Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: ReactNode; intro: string }) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-44">
      <div className="absolute inset-0 bg-hero" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <p className="eyebrow flex items-center gap-3 text-glow"><span className="h-px w-8 bg-glow/60" aria-hidden="true" />{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-7xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">{intro}</p>
      </div>
    </section>
  );
}
