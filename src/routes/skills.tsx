import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, ProcessSection } from "@/components/site/blocks";
import { Icon } from "@/components/site/icon";
import { Reveal } from "@/components/site/reveal";
import { skillGroups } from "@/lib/site-data";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Expertise — Michael Daramola, Shopify Developer" },
      { name: "description", content: "Shopify, theme customization, HTML, CSS, JavaScript, Printify, Printful, Gelato, Etsy integration, Shopify SEO and conversion optimization." },
      { property: "og:title", content: "Skills & Expertise — Michael Daramola" },
      { property: "og:description", content: "The tools and skills behind every Shopify store I build." },
    ],
  }),
  component: Skills,
});

function Skills() {
  return (
    <>
      <PageHero eyebrow="Skills & expertise" title={<>The toolkit behind <span className="text-gradient">every store.</span></>} intro="Shopify know-how, front-end craft and e-commerce growth skills — working together for stores that look great and sell." />
      <section className="pb-12">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-2">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={(i % 2) * 100} className="h-full">
              <div className="group h-full rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50">
                <div className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-xl bg-brand shadow-glow"><Icon name={g.icon} className="size-5" /></span>
                  <h2 className="text-2xl font-semibold">{g.title}</h2>
                </div>
                <ul className="mt-8 flex flex-wrap gap-2.5">
                  {g.skills.map((s) => (
                    <li key={s} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium transition-colors group-hover:border-primary/30">{s}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <ProcessSection />
      <CtaBand />
    </>
  );
}
