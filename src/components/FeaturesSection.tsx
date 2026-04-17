import { Zap, Layers, Palette, Rocket, Shield, Code2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Setup em 60 segundos",
    desc: "Clone, instale e tá no ar. Sem configuração chata, sem boilerplate, sem dor.",
  },
  {
    icon: Layers,
    title: "Componentes premium",
    desc: "+80 componentes refinados, animados e prontos para produção. Inspirados nas melhores SaaS.",
  },
  {
    icon: Palette,
    title: "Design system completo",
    desc: "Tokens semânticos, dark/light, gradientes, sombras e tipografia já calibrados.",
  },
  {
    icon: Rocket,
    title: "Stack moderna",
    desc: "React, Vite, Tailwind, TypeScript e Shadcn. O combo que escala de MVP a produto.",
  },
  {
    icon: Shield,
    title: "Auth + Pagamentos",
    desc: "Templates com login, dashboard e Stripe configurados. Receba dinheiro no primeiro dia.",
  },
  {
    icon: Code2,
    title: "Código limpo",
    desc: "Componentes pequenos, focados e tipados. Fácil de ler, fácil de estender.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container relative py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-glow">
          Tudo no kit
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
          Construído para <span className="text-gradient-primary">vibe-coders</span> que querem velocidade sem perder o gosto.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Cada template é uma base completa. Você só adiciona sua ideia em cima.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-glow"
            style={{ animationDelay: `${i * 0.05}s` }}
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="relative">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-elegant">
                <feature.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
