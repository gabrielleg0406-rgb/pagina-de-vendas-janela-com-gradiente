import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const includes = [
  "12+ templates premium prontos para uso",
  "+80 componentes UI customizáveis",
  "Design system completo (tokens, cores, tipografia)",
  "Integrações com Stripe, Supabase e OpenAI",
  "Autenticação e dashboard prontos",
  "Atualizações vitalícias gratuitas",
  "Acesso à comunidade privada de Vibecoders",
  "Suporte direto via Discord",
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="container relative py-24 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full border border-success/40 bg-success/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-success">
          🔥 Oferta de lançamento
        </span>
        <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
          Um preço. <span className="text-gradient-primary">Acesso a tudo.</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Sem assinatura, sem pegadinha. Pague uma vez e use para sempre.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-xl">
        <div className="relative">
          {/* glow */}
          <div className="absolute -inset-4 bg-gradient-primary opacity-30 blur-3xl" />

          <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-card p-8 shadow-elegant md:p-10">
            {/* Badge */}
            <div className="absolute -top-px left-1/2 -translate-x-1/2 rounded-b-xl bg-gradient-primary px-4 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
              Mais escolhido
            </div>

            <div className="text-center">
              <h3 className="font-display text-2xl font-bold">VibeKit Pro</h3>
              <p className="mt-1 text-sm text-muted-foreground">Vibecoding Templates · Acesso vitalício</p>

              {/* Price anchor */}
              <div className="mt-6 flex items-end justify-center gap-3">
                <span className="text-2xl text-muted-foreground line-through decoration-destructive/70 decoration-2">
                  R$297
                </span>
                <span className="font-display text-6xl font-bold text-gradient md:text-7xl">
                  R$97
                </span>
              </div>
              <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-success/15 px-3 py-1 text-sm font-semibold text-success">
                <Zap className="h-3.5 w-3.5" /> Economize R$200 hoje
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-primary">
                    <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="xl" className="mt-8 w-full">
              Garantir meu VibeKit por R$97
            </Button>

            <p className="mt-4 text-center text-xs text-muted-foreground">
              ✓ Pagamento único · ✓ Garantia de 7 dias · ✓ Acesso imediato
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
