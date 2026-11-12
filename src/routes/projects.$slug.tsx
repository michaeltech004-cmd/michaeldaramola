import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/blocks";
import { BrowserFrame, PhoneFrame } from "@/components/site/frames";
import { Reveal } from "@/components/site/reveal";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const index = projects.findIndex((p) => p.slug === params.slug);
    if (index === -1) throw notFound();
    return { project: projects[index]!, next: projects[(index + 1) % projects.length]! };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.name} — Shopify Project by Michael Daramola` },
          { name: "description", content: loaderData.project.summary },
          { property: "og:title", content: `${loaderData.project.name} — Shopify Project` },
          { property: "og:description", content: loaderData.project.summary },
        ]
      : [{ title: "Project not found — Michael Daramola" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-5 pb-32 pt-44 text-center">
      <h1 className="text-4xl font-semibold">Project not found</h1>
      <Button asChild variant="hero" size="xl" className="mt-8"><Link to="/projects">Back to projects</Link></Button>
    </div>
  ),
  component: ProjectDetail,
});

function ProjectDetail() {
  const { project, next } = Route.useLoaderData();
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-32 sm:pt-40">
        <div className="absolute inset-0 bg-hero" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" />All projects</Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="eyebrow text-glow">{project.category}</p>
              <h1 className="mt-4 text-5xl font-semibold leading-[1.02] sm:text-7xl">{project.name}</h1>
              <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">{project.description}</p>
            </div>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border">
              <div className="bg-card p-5"><dt className="eyebrow text-muted-foreground">Platform</dt><dd className="mt-2 font-semibold">Shopify</dd></div>
              <div className="bg-card p-5"><dt className="eyebrow text-muted-foreground">Category</dt><dd className="mt-2 font-semibold">{project.category}</dd></div>
              <div className="col-span-2 bg-card p-5">
                <dt className="eyebrow text-muted-foreground">Live store</dt>
                <dd className="mt-2"><a href={project.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-semibold text-glow hover:underline">{project.domain}<ArrowUpRight className="size-4" /></a></dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal><BrowserFrame src={project.desktop[0]!} alt={`${project.name} homepage on desktop`} domain={project.domain} eager /></Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1fr_0.55fr]">
            <Reveal><BrowserFrame src={project.desktop[1]!} alt={`${project.name} store section`} domain={project.domain} /></Reveal>
            <Reveal delay={100}><BrowserFrame src={project.desktop[2]!} alt={`${project.name} product section`} domain={project.domain} /></Reveal>
            <Reveal delay={200} className="mx-auto w-full max-w-[16rem] md:row-span-1"><PhoneFrame src={project.mobile} alt={`${project.name} on mobile`} /></Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 text-ink sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow text-primary">Highlights</p>
            <h2 className="mt-4 text-4xl font-semibold">Key design & development highlights</h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 rounded-2xl border border-paper-border bg-paper-2 p-5">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand text-primary-foreground"><Check className="size-3.5" /></span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mx-auto mt-14 flex max-w-7xl flex-wrap gap-3 px-5 sm:px-8">
          <Button asChild variant="ink" size="xl"><a href={project.url} target="_blank" rel="noreferrer">View Project <ArrowUpRight /></a></Button>
          <Button asChild variant="inkOutline" size="xl"><Link to="/projects/$slug" params={{ slug: next.slug }}>Next: {next.name} <ArrowRight /></Link></Button>
        </div>
      </section>

      <div className="pt-24 sm:pt-32"><CtaBand /></div>
    </>
  );
}
