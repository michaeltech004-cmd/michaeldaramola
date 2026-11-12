import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, ShoppingBag, Sparkles, TrendingUp } from "lucide-react";
import portrait from "@/assets/michael_portrait.webp.asset.json";
import logo from "@/assets/md_logo.webp.asset.json";
import { Button } from "@/components/ui/button";
import { CtaBand, ProcessSection, ProjectCard, ServiceCard, TestimonialsSection, WhySection } from "@/components/site/blocks";
import { Reveal } from "@/components/site/reveal";
import { SectionHeading } from "@/components/site/section-heading";
import { projects, services } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Michael Daramola — Shopify Expert & E-commerce Developer" },
      { name: "description", content: "I build high-converting Shopify stores that grow businesses: custom design, development, redesigns, SEO and conversion optimization." },
      { property: "og:title", content: "Michael Daramola — Shopify Expert & E-commerce Developer" },
      { property: "og:description", content: "High-converting Shopify stores for growing brands. Design, development, redesigns, POD setup, SEO and CRO." },
    ],
  }),
  component: Home,
});

const marquee = ["Shopify Design", "Store Redesign", "Theme Customization", "Print-on-Demand", "Etsy Integration", "Shopify SEO", "Conversion Optimization", "Digital Products"];

function Home() {
  return (
    <>
      <Hero />

      <div className="overflow-hidden border-y border-border bg-night py-5" aria-hidden="true">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="flex items-center gap-12 font-display text-2xl font-medium text-foreground/50">
              {m}<Sparkles className="size-5 text-glow" />
            </span>
          ))}
        </div>
      </div>

      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Featured projects" title={<>Real stores, <span className="text-gradient">built to sell.</span></>} intro="A selection of Shopify stores across apparel, luxury fashion and automotive parts." />
            <Button asChild variant="glass" size="xl"><Link to="/projects">All projects <ArrowRight /></Link></Button>
          </div>
          <div className="mt-16 grid gap-x-10 gap-y-16 md:grid-cols-2">
            {projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 text-ink sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading tone="light" eyebrow="My services" title="Everything your Shopify store needs." intro="From a brand-new build to growing an existing store — ten services under one roof." />
            <Button asChild variant="inkOutline" size="xl"><Link to="/services">All services & packages <ArrowRight /></Link></Button>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 6).map((s, i) => <ServiceCard key={s.title} service={s} index={i} tone="light" />)}
          </div>
        </div>
      </section>

      <AboutTeaser />
      <ProcessSection />
      <WhySection />
      <TestimonialsSection />
      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="absolute inset-0 bg-hero" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid" aria-hidden="true" />
      <div className="absolute right-[8%] top-40 size-[28rem] rounded-full bg-primary/25 blur-[120px] animate-pulse-glow" aria-hidden="true" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-28">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-foreground/90">
              <span className="relative flex size-2"><span className="absolute inline-flex size-full animate-ping rounded-full bg-glow opacity-75" /><span className="relative inline-flex size-2 rounded-full bg-glow" /></span>
              Available for new Shopify projects
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-8 text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
              Building <span className="text-gradient">High-Converting</span> Shopify Stores That Grow Businesses.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              I&apos;m a Shopify Expert and E-commerce Developer helping brands create beautiful, functional, and conversion-focused online stores. From custom Shopify design and development to store optimization and growth, I turn ideas into powerful e-commerce experiences.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl"><Link to="/projects">View My Projects <ArrowRight /></Link></Button>
              <Button asChild variant="glass" size="xl"><Link to="/contact">Let&apos;s Work Together</Link></Button>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              {["Custom Shopify design", "Store redesign & CRO", "POD & Etsy setup"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Check className="size-4 text-glow" />{t}</li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-3 rounded-[2.5rem] bg-brand opacity-40 blur-2xl" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card">
            <img src={portrait.url} alt="Michael Daramola, Shopify Expert and E-commerce Developer" width={896} height={1117} className="aspect-[4/5] w-full object-cover object-top" fetchPriority="high" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-night/90 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-2xl glass p-3">
              <img src={logo.url} alt="" width={48} height={48} className="size-12 shrink-0 rounded-xl" />
              <div className="min-w-0">
                <p className="truncate font-display font-semibold">Michael Daramola</p>
                <p className="truncate text-sm text-muted-foreground">Shopify Expert & E-commerce Developer</p>
              </div>
            </div>
          </div>
          <div className="absolute -left-6 top-10 hidden animate-float items-center gap-3 rounded-2xl glass px-4 py-3 shadow-card sm:flex">
            <span className="grid size-9 place-items-center rounded-xl bg-brand"><ShoppingBag className="size-4" /></span>
            <span className="text-sm font-semibold">Shopify</span>
          </div>
          <div className="absolute -right-4 bottom-32 hidden animate-float items-center gap-3 rounded-2xl glass px-4 py-3 shadow-card [animation-delay:1.5s] sm:flex">
            <span className="grid size-9 place-items-center rounded-xl bg-brand"><TrendingUp className="size-4" /></span>
            <span className="text-sm font-semibold">Conversion-focused</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AboutTeaser() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-border">
            <img src={portrait.url} alt="Portrait of Michael Daramola" width={896} height={1117} loading="lazy" className="aspect-[5/4] w-full object-cover object-[50%_20%]" />
          </div>
          <div className="absolute -bottom-8 right-6 hidden size-36 overflow-hidden rounded-3xl border border-border shadow-card sm:block">
            <img src={logo.url} alt="Michael Daramola brand logo" width={144} height={144} loading="lazy" className="size-full object-cover" />
          </div>
        </Reveal>
        <div>
          <SectionHeading eyebrow="About me" title="Shopify stores with purpose, built with care." />
          <Reveal>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I&apos;m Michael Daramola — a Shopify Expert and E-commerce Developer. I help businesses build, redesign, optimize and grow online stores that look premium and are easy to shop.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              My work covers everything from custom store design and theme customization to print-on-demand setup, Etsy integration, SEO and conversion rate optimization.
            </p>
            <Button asChild variant="glass" size="xl" className="mt-8"><Link to="/about">More about me <ArrowRight /></Link></Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
