import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import portrait from "@/assets/michael_portrait.webp";
import logo from "@/assets/md_logo.webp";
import { Button } from "@/components/ui/button";
import { CtaBand, PageHero, WhySection } from "@/components/site/blocks";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { contact } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Michael Daramola — Shopify Expert & E-commerce Developer" },
      { name: "description", content: "Meet Michael Daramola, a Shopify Expert helping businesses build, redesign, optimize and grow successful online stores." },
      { property: "og:title", content: "About Michael Daramola — Shopify Expert" },
      { property: "og:description", content: "Shopify development, redesign, POD setup, Etsy integration, SEO and conversion optimization." },
    ],
  }),
  component: About,
});

const expertise = [
  "Shopify store development",
  "Shopify store design and redesign",
  "E-commerce optimization",
  "Print-on-demand business setup",
  "Etsy and Shopify integration",
  "SEO and store visibility",
  "Product presentation and branding",
  "Conversion rate optimization",
];

function About() {
  return (
    <>
      <PageHero eyebrow="About me" title={<>Hi, I&apos;m <span className="text-gradient">Michael Daramola.</span></>} intro="Shopify Expert and E-commerce Developer helping businesses build, optimize, redesign and grow successful online stores." />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border">
              <img src={portrait} alt="Michael Daramola" width={896} height={1117} className="aspect-[4/5] w-full object-cover object-top" />
            </div>
            <div className="mt-5 flex items-center gap-4 rounded-2xl border border-border bg-card p-4">
              <img src={logo} alt="Michael Daramola logo" width={64} height={64} className="size-16 rounded-xl" loading="lazy" />
              <div>
                <p className="font-display text-lg font-semibold">{contact.role}</p>
                <p className="eyebrow mt-1 text-glow">{contact.tagline}</p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
            <Reveal><p className="text-2xl leading-snug text-foreground">I build Shopify stores that look premium, feel effortless to shop and are structured to turn visitors into customers.</p></Reveal>
            <Reveal><p>Every brand deserves an online store that reflects the quality of its products. Whether you&apos;re launching your first store, refreshing one that no longer represents you, or setting up a print-on-demand or digital product business, I bring together design, development and e-commerce thinking to get it right.</p></Reveal>
            <Reveal><p>I care about the details — clean navigation, strong product presentation, fast and responsive pages, and the trust signals that help shoppers feel confident at checkout. Just as importantly, I keep communication clear and reliable from the first call to the final handover.</p></Reveal>

            <Reveal className="pt-6">
              <SectionHeading eyebrow="Areas of expertise" title="What I help with" />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {expertise.map((e) => (
                  <li key={e} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 text-base text-foreground">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand"><Check className="size-3.5" /></span>
                    {e}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal className="flex flex-wrap gap-3 pt-4">
              <Button asChild variant="hero" size="xl"><Link to="/projects">See my work <ArrowRight /></Link></Button>
              <Button asChild variant="glass" size="xl"><Link to="/services">Explore services</Link></Button>
            </Reveal>
          </div>
        </div>
      </section>

      <WhySection />
      <div className="pt-24 sm:pt-32"><CtaBand /></div>
    </>
  );
}
