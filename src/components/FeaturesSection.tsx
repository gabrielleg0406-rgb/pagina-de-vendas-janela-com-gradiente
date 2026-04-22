import { Zap, Layers, Palette, Rocket, Shield, Code2 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning fast setup",
    desc: "Clone, install and you're live. No tedious configuration, no boilerplate, no headaches.",
  },
  {
    icon: Layers,
    title: "Premium components",
    desc: "80+ refined, animated, production-ready components inspired by the best modern apps.",
  },
  {
    icon: Palette,
    title: "Complete design system",
    desc: "Semantic tokens, dark/light modes, gradients, shadows and typography already calibrated.",
  },
  {
    icon: Rocket,
    title: "Modern stack",
    desc: "React, Vite, Tailwind, TypeScript and Shadcn. The combo that scales from MVP to product.",
  },
  {
    icon: Shield,
    title: "Auth & payments",
    desc: "Templates ship with login, dashboard and Stripe configured. Start earning from day one.",
  },
  {
    icon: Code2,
    title: "Clean code",
    desc: "Small, focused and typed components. Easy to read, easy to extend.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container relative py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-glow">
          Everything included
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
          Built for <span className="text-gradient-primary">creators</span> who want speed without losing taste.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Each template is a complete foundation. You just add your idea on top.
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
