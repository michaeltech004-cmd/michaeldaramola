import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, PageHero, ProcessSection, ServiceCard } from "@/components/site/blocks";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { packages, services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Shopify Services & Packages — Michael Daramola" },
      { name: "description", content: "Shopify store design, redesign, development, print-on-demand setup, Etsy integration, SEO, listing optimization, CRO, store management and digital product stores." },
      { property: "og:title", content: "Shopify Services & Packages — Michael Daramola" },
      { property: "og:description", content: "Ten Shopify services and four packages to build, fix and grow your online store." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services & packages" title={<>Shopify services that <span className="text-gradient">build, fix and grow</span> your store.</>} intro="Choose a single service or a package that combines everything you need. Every project is quoted to fit your goals." />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-3">
          {services.map((s, i) => <ServiceCard key={s.title} service={s} index={i} />)}
          <Reveal className="h-full">
            <Link to="/contact" className="group flex h-full flex-col justify-between rounded-2xl bg-brand p-7 text-primary-foreground shadow-glow transition-transform hover:-translate-y-1">
              <p className="eyebrow">Not sure what you need?</p>
              <div>
                <p className="font-display text-2xl font-semibold">Tell me about your store and I&apos;ll recommend the right mix.</p>
                <span className="mt-6 inline-flex items-center gap-2 font-semibold">Get a recommendation <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading tone="light" eyebrow="Packages" title="Packages built around your goal." intro="Each package bundles the services that work best together. Pricing depends on your store's size and scope — send your details for a tailored quote." />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {packages.map((p, i) => (
              <Reveal key={p.name} delay={i * 90} className="h-full">
                <div className={cn("relative flex h-full flex-col rounded-2xl border p-7", p.featured ? "border-transparent bg-ink text-paper shadow-paper" : "border-paper-border bg-paper-2")}>
                  {p.featured && <span className="absolute -top-3 left-7 rounded-full bg-brand px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-primary-foreground">Most requested</span>}
                  <p className={cn("eyebrow", p.featured ? "text-glow" : "text-primary")}>{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-2xl font-semibold">{p.name}</h3>
                  <p className={cn("mt-2", p.featured ? "text-paper/70" : "text-ink-muted")}>{p.forWho}</p>
                  <ul className="mt-8 flex-1 space-y-3">
                    {p.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-3">
                        <Check className={cn("mt-0.5 size-4 shrink-0", p.featured ? "text-glow" : "text-primary")} />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant={p.featured ? "hero" : "ink"} size="xl" className="mt-10 w-full">
                    <Link to="/contact">Request a quote</Link>
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <CtaBand />
    </>
  );
}
