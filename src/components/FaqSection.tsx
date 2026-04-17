import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O que é o VibeKit?",
    a: "É uma coleção premium de templates e componentes para devs que querem lançar produtos com cara de SaaS profissional, sem perder semanas configurando o básico.",
  },
  {
    q: "Preciso saber programar?",
    a: "Conhecimento básico de React e Tailwind ajuda. Mas como tudo é modular, dá pra adaptar prompts e gerar variações em qualquer ferramenta de vibecoding.",
  },
  {
    q: "Como recebo o acesso?",
    a: "Imediatamente após a compra você recebe acesso ao repositório privado, à comunidade no Discord e a todas as atualizações futuras.",
  },
  {
    q: "Posso usar em projetos comerciais?",
    a: "Sim. A licença permite uso em projetos pessoais e comerciais ilimitados. Você só não pode revender o kit.",
  },
  {
    q: "E se eu não gostar?",
    a: "Garantia incondicional de 7 dias. Se não amar, devolvemos 100% do valor — sem perguntas.",
  },
  {
    q: "O preço de R$97 é fixo?",
    a: "Não. Esse é o preço de lançamento (de R$297). Conforme novos templates são adicionados, o valor sobe.",
  },
];

export const FaqSection = () => {
  return (
    <section id="faq" className="container relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-glow">
            FAQ
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Perguntas <span className="text-gradient-primary">frequentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 w-full">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-gradient-card mb-3 px-5 data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="text-left font-display text-lg font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
