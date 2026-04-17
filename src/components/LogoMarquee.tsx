const logos = [
  "lovable", "vercel", "supabase", "openai", "stripe", "next.js", "tailwind", "shadcn",
];

export const LogoMarquee = () => {
  return (
    <section className="relative border-y border-border/40 bg-background/60 py-10">
      <div className="container">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
          Stack que vibeca com as melhores ferramentas
        </p>
        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-16">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={i}
                className="font-display text-2xl font-bold text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
