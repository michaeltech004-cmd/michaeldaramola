import { cn } from "@/lib/utils";

export function BrowserFrame({ src, alt, domain, className, eager }: { src: string; alt: string; domain: string; className?: string; eager?: boolean }) {
  return (
    <div className={cn("overflow-hidden rounded-xl border border-border bg-night shadow-card", className)}>
      <div className="flex items-center gap-3 border-b border-border px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-foreground/20" />
          <span className="size-2.5 rounded-full bg-foreground/20" />
          <span className="size-2.5 rounded-full bg-foreground/20" />
        </div>
        <div className="mx-auto min-w-0 max-w-[60%] truncate rounded-full bg-foreground/5 px-4 py-1 text-center font-mono text-[0.68rem] text-muted-foreground">
          {domain}
        </div>
        <span className="w-10" aria-hidden="true" />
      </div>
      <img
        src={src}
        alt={alt}
        width={1440}
        height={900}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className="block aspect-[16/10] w-full object-cover object-top"
      />
    </div>
  );
}

export function PhoneFrame({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn("rounded-[2.2rem] border border-border bg-night p-2 shadow-card", className)}>
      <div className="overflow-hidden rounded-[1.75rem]">
        <img
          src={src}
          alt={alt}
          width={390}
          height={844}
          loading="lazy"
          decoding="async"
          className="block aspect-[390/844] w-full object-cover object-top"
        />
      </div>
    </div>
  );
}
