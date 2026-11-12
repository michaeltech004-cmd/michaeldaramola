import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowUpRight, CheckCircle2, Instagram, Loader2, Mail, MessageCircle, Send } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/blocks";
import { contactSchema } from "@/lib/contact-schema";
import { submitContact } from "@/lib/contact.functions";
import { contact, projectTypes } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Michael Daramola — Hire a Shopify Expert" },
      { name: "description", content: "Discuss your Shopify project with Michael Daramola. Send a message, email, or chat on WhatsApp." },
      { property: "og:title", content: "Let's Build Something Great Together — Michael Daramola" },
      { property: "og:description", content: "Have an idea, an existing Shopify store, or an e-commerce business you want to grow? Let's talk." },
    ],
  }),
  component: Contact,
});

type Errors = Partial<Record<"name" | "email" | "projectType" | "message", string>>;

const fieldClass =
  "mt-2 block w-full rounded-xl border border-input bg-background/60 px-4 py-3.5 text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring/40 aria-[invalid=true]:border-destructive";

function Contact() {
  const send = useServerFn(submitContact);
  const [values, setValues] = useState({ name: "", email: "", projectType: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const update = (k: keyof typeof values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const fe: Errors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof Errors;
        if (!fe[key]) fe[key] = issue.message;
      }
      setErrors(fe);
      return;
    }
    setStatus("sending");
    try {
      const res = await send({ data: parsed.data });
      if (res.ok) {
        setStatus("sent");
        setValues({ name: "", email: "", projectType: "", message: "" });
        toast.success("Message sent — I'll get back to you soon.");
      } else {
        setStatus("idle");
        toast.error(res.error);
      }
    } catch {
      setStatus("idle");
      toast.error("Something went wrong. Please try again or reach me on WhatsApp.");
    }
  }

  return (
    <>
      <PageHero eyebrow="Contact" title={<>Let&apos;s Build Something <span className="text-gradient">Great Together.</span></>} intro="Have an idea, an existing Shopify store, or an e-commerce business you want to grow? Let's discuss how I can help bring your vision to life." />

      <section className="pb-24 sm:pb-32">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-8 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-10">
            {status === "sent" ? (
              <div className="flex min-h-[28rem] flex-col items-center justify-center text-center" role="status">
                <span className="grid size-16 place-items-center rounded-full bg-brand shadow-glow"><CheckCircle2 className="size-8" /></span>
                <h2 className="mt-6 text-3xl font-semibold">Thank you — message received.</h2>
                <p className="mt-3 max-w-md text-muted-foreground">I&apos;ll review your project details and reply by email. For anything urgent, message me on WhatsApp.</p>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  <Button variant="glass" size="xl" onClick={() => setStatus("idle")}>Send another message</Button>
                  <Button asChild variant="hero" size="xl"><a href={contact.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a></Button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="grid gap-6">
                <div>
                  <h2 className="text-3xl font-semibold">Tell me about your project</h2>
                  <p className="mt-2 text-muted-foreground">Fill in the form and I&apos;ll get back to you with next steps.</p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block text-sm font-medium">Name
                    <input name="name" autoComplete="name" value={values.name} onChange={update("name")} aria-invalid={!!errors.name} aria-describedby="err-name" maxLength={100} className={fieldClass} placeholder="Your name" />
                    {errors.name && <span id="err-name" className="mt-1.5 block text-sm text-destructive">{errors.name}</span>}
                  </label>
                  <label className="block text-sm font-medium">Email
                    <input name="email" type="email" autoComplete="email" value={values.email} onChange={update("email")} aria-invalid={!!errors.email} aria-describedby="err-email" maxLength={255} className={fieldClass} placeholder="you@yourbrand.com" />
                    {errors.email && <span id="err-email" className="mt-1.5 block text-sm text-destructive">{errors.email}</span>}
                  </label>
                </div>
                <label className="block text-sm font-medium">Project type
                  <select name="projectType" value={values.projectType} onChange={update("projectType")} aria-invalid={!!errors.projectType} aria-describedby="err-type" className={fieldClass}>
                    <option value="" disabled>Select a project type</option>
                    {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                  {errors.projectType && <span id="err-type" className="mt-1.5 block text-sm text-destructive">{errors.projectType}</span>}
                </label>
                <label className="block text-sm font-medium">Message
                  <textarea name="message" rows={6} value={values.message} onChange={update("message")} aria-invalid={!!errors.message} aria-describedby="err-msg" maxLength={2000} className={fieldClass} placeholder="Tell me about your store, goals and timeline…" />
                  {errors.message && <span id="err-msg" className="mt-1.5 block text-sm text-destructive">{errors.message}</span>}
                </label>
                <Button type="submit" variant="hero" size="xl" disabled={status === "sending"} className="w-full sm:w-auto sm:justify-self-start">
                  {status === "sending" ? <><Loader2 className="animate-spin" />Sending…</> : <>Send message <Send /></>}
                </Button>
              </form>
            )}
          </div>

          <aside className="grid content-start gap-4">
            <p className="eyebrow text-glow">Or reach me directly</p>
            {contact.emails.map((e) => (
              <ContactLink key={e} href={`mailto:${e}`} icon={<Mail className="size-5" />} label="Email" value={e} />
            ))}
            <ContactLink href={contact.whatsappUrl} external icon={<MessageCircle className="size-5" />} label="WhatsApp" value={contact.whatsappDisplay} />
            <ContactLink href={contact.fiverrUrl} external icon={<span className="text-sm font-bold">fi</span>} label="Fiverr" value="fiverr.com/michael_daram" />
            <ContactLink href={contact.instagramUrl} external icon={<Instagram className="size-5" />} label="Instagram" value={contact.instagramHandle} />
          </aside>
        </div>
      </section>
    </>
  );
}

function ContactLink({ href, icon, label, value, external }: { href: string; icon: ReactNode; label: string; value: string; external?: boolean }) {
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/50">
      <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand shadow-glow">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</span>
        <span className="mt-1 block truncate font-semibold">{value}</span>
      </span>
      <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-glow" />
    </a>
  );
}
