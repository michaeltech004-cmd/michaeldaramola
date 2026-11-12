import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, ProjectCard } from "@/components/site/blocks";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Shopify Projects & Portfolio — Michael Daramola" },
      { name: "description", content: "Shopify stores by Michael Daramola: The Build-Out Shop, Vertex Apparel, Ortrends and Qoffah." },
      { property: "og:title", content: "Shopify Projects — Michael Daramola" },
      { property: "og:description", content: "Real Shopify stores across apparel, print-on-demand, luxury fashion and automotive parts." },
    ],
  }),
  component: Projects,
});

function Projects() {
  return (
    <>
      <PageHero eyebrow="Portfolio" title={<>Featured <span className="text-gradient">Shopify projects.</span></>} intro="Live stores across apparel, print-on-demand, luxury fashion and automotive parts. Open any project for screenshots and highlights." />
      <section className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-x-10 gap-y-16 px-5 sm:px-8 md:grid-cols-2">
          {projects.map((p, i) => <ProjectCard key={p.slug} project={p} index={i} />)}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
