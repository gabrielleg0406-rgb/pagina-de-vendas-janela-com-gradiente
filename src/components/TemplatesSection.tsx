import { ArrowUpRight } from "lucide-react";

const templates = [
  {
    name: "SaaS Launch",
    tag: "Landing",
    desc: "SaaS landing page with animated hero, pricing, testimonials and blog.",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
  },
  {
    name: "AI Chat Studio",
    tag: "App",
    desc: "AI chat dashboard with history, threads and OpenAI integration.",
    gradient: "from-cyan-400 via-blue-500 to-indigo-600",
  },
  {
    name: "Creator Portfolio",
    tag: "Portfolio",
    desc: "Premium portfolio for devs and designers, with case studies and dark mode.",
    gradient: "from-amber-400 via-orange-500 to-rose-500",
  },
  {
    name: "Modern Commerce",
    tag: "E-commerce",
    desc: "Modern store with cart, Stripe checkout and admin panel.",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
  },
  {
    name: "Community Hub",
    tag: "Social",
    desc: "Community platform with posts, profiles, likes and notifications.",
    gradient: "from-pink-500 via-rose-500 to-red-500",
  },
  {
    name: "Analytics Pro",
    tag: "Dashboard",
    desc: "Complete metrics dashboard with charts, filters and exports.",
    gradient: "from-violet-500 via-indigo-500 to-blue-600",
  },
];

export const TemplatesSection = () => {
  return (
    <section id="templates" className="container relative py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-glow">
          12+ templates included
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
          Ship beautiful <span className="text-gradient-primary">products</span> faster.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Premium templates ready to clone, customize and deploy. Each one is worth more than the entire kit.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {templates.map((t) => (
          <a
            key={t.name}
            href="#pricing"
            className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:-translate-y-1"
          >
            <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${t.gradient}`}>
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22><rect width=%2240%22 height=%2240%22 fill=%22none%22 stroke=%22%23ffffff20%22/></svg>')] opacity-30" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <div className="absolute top-4 left-4 rounded-full glass-strong px-3 py-1 text-xs font-semibold">
                {t.tag}
              </div>
              <div className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full glass-strong opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};
