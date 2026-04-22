import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CtaSection = () => {
  return (
    <section className="container relative py-24 md:py-32">
      <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-card p-10 text-center md:p-20">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute -top-24 left-1/2 h-64 w-[600px] -translate-x-1/2 bg-gradient-primary opacity-30 blur-3xl" />

        <div className="relative">
          <h2 className="mx-auto max-w-3xl font-display text-4xl font-bold leading-[1.1] md:text-6xl">
            Your next <span className="text-gradient-primary">idea</span> deserves to ship.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            Join 1,200+ builders who ship faster with our toolkit.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button variant="hero" size="xl" asChild>
              <a href="#pricing">
                Get instant access for $97 <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <span className="text-sm text-muted-foreground">⏰ Offer ends soon</span>
          </div>
        </div>
      </div>
    </section>
  );
};
