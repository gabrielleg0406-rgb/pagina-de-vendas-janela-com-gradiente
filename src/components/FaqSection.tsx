import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is this product?",
    a: "It's a premium collection of templates and components for builders who want to ship products with a professional SaaS feel, without spending weeks on the basics.",
  },
  {
    q: "Do I need to know how to code?",
    a: "Basic React and Tailwind knowledge helps. But since everything is modular, you can adapt and generate variations using any modern AI tool.",
  },
  {
    q: "How do I get access?",
    a: "Right after purchase you get access to the private repository, the community and all future updates.",
  },
  {
    q: "Can I use it for commercial projects?",
    a: "Yes. The license allows unlimited personal and commercial use. The only restriction is that you can't resell the kit itself.",
  },
  {
    q: "What if I don't like it?",
    a: "Unconditional 7-day guarantee. If you don't love it, we'll refund 100% — no questions asked.",
  },
  {
    q: "Is the $97 price fixed?",
    a: "No. This is the launch price (down from $297). As new templates are added, the price will go up.",
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
            Frequently asked <span className="text-gradient-primary">questions</span>
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
