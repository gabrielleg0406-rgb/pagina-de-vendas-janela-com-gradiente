const testimonials = [
  {
    name: "Alex Johnson",
    role: "Indie Hacker",
    text: "I shipped my SaaS in a weekend. The design system is incredible — it looks like it cost a fortune.",
    avatar: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Jamie Carter",
    role: "Product Designer",
    text: "The components have a premium feel I can't replicate on my own. I'm a fan.",
    avatar: "from-pink-500 to-rose-500",
  },
  {
    name: "Sam Rivera",
    role: "Full Stack Dev",
    text: "Every template ships with auth, payments and dashboard. It's like having 10 projects ready to go.",
    avatar: "from-cyan-400 to-blue-500",
  },
  {
    name: "Morgan Lee",
    role: "Founder",
    text: "I went from idea to MVP in production in 3 days. Before this kit that was impossible for me.",
    avatar: "from-amber-400 to-orange-500",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="container relative py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-glow">
          Loved by builders
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
          Real results, <span className="text-gradient-primary">real vibes.</span>
        </h2>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="rounded-2xl border border-border bg-gradient-card p-6 transition-all hover:border-primary/40 hover:shadow-glow"
          >
            <div className="flex gap-1 text-yellow-400">{"★★★★★"}</div>
            <p className="mt-4 text-lg leading-relaxed text-foreground/90">"{t.text}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${t.avatar}`} />
              <div>
                <div className="font-semibold">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
