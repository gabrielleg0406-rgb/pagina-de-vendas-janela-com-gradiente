const testimonials = [
  {
    name: "Lucas Mendes",
    role: "Indie Hacker",
    text: "Lancei meu SaaS em um fim de semana usando o VibeKit. O design system é absurdo — parece que custou R$10k.",
    avatar: "from-violet-500 to-fuchsia-500",
  },
  {
    name: "Júlia Castro",
    role: "Product Designer",
    text: "Os componentes têm uma vibe premium que eu não consigo replicar sozinha. Virei fã.",
    avatar: "from-pink-500 to-rose-500",
  },
  {
    name: "Rafael Souza",
    role: "Full Stack Dev",
    text: "Cada template já vem com auth, pagamento e dashboard. É tipo ter 10 projetos prontos por R$97.",
    avatar: "from-cyan-400 to-blue-500",
  },
  {
    name: "Marina Alves",
    role: "Founder",
    text: "Saí de uma ideia para um MVP em produção em 3 dias. Antes do VibeKit isso era impossível pra mim.",
    avatar: "from-amber-400 to-orange-500",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="container relative py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-glow">
          Vibecoders aprovam
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
          Resultado real, <span className="text-gradient-primary">vibe real.</span>
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
