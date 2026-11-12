import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeading({ eyebrow, title, intro, tone = "dark", align = "left", className }: { eyebrow: string; title: ReactNode; intro?: ReactNode; tone?: "dark" | "light"; align?: "left" | "center"; className?: string }) {
  const light = tone === "light";
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className={cn("eyebrow flex items-center gap-3", align === "center" && "justify-center", light ? "text-primary" : "text-glow")}>
        <span className={cn("h-px w-8", light ? "bg-primary/60" : "bg-glow/60")} aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className={cn("mt-5 text-4xl font-semibold leading-[1.05] sm:text-5xl", light ? "text-ink" : "text-foreground")}>{title}</h2>
      {intro && <p className={cn("mt-5 text-lg leading-relaxed", light ? "text-ink-muted" : "text-muted-foreground")}>{intro}</p>}
    </div>
  );
}
