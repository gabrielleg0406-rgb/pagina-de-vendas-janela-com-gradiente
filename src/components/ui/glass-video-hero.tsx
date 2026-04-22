import { useState } from "react";
import { Maximize2, Minimize2, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260210_031346_d87182fb-b0af-4273-84d1-c6fd17d6bf0f.mp4";

export const HeroSection = () => {
  const [fullBleed, setFullBleed] = useState(true);

  return (
    <section className="relative w-full px-4 pt-6 pb-16 md:pt-8">
      <div
        className={`relative mx-auto w-full max-w-[1320px] overflow-hidden rounded-[28px] border border-border/60 transition-all duration-700 ${
          fullBleed ? "min-h-[88vh]" : "min-h-[640px]"
        }`}
      >
        {/* Toggle */}
        <button
          onClick={() => setFullBleed(!fullBleed)}
          aria-label={fullBleed ? "Reduzir altura" : "Expandir altura"}
          className="absolute top-4 right-4 z-30 p-2.5 rounded-[10px] backdrop-blur-xl border border-primary/40 bg-background/40 text-foreground hover:bg-background/60 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          {fullBleed ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </button>

        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
            src={VIDEO_URL}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full min-h-[inherit] flex-col items-center justify-center px-6 py-20 text-center md:px-12 md:py-28">
          {/* Pill */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full glass-strong px-4 py-1.5 text-sm animate-fade-up">
            <span className="inline-flex items-center gap-1 rounded-full bg-gradient-primary px-2.5 py-0.5 text-xs font-bold text-primary-foreground">
              <Sparkles className="h-3 w-3" /> NEW
            </span>
            <span className="text-foreground/90">Built for modern builders ⚡</span>
          </div>

          {/* Headline */}
          <h1
            className="font-display max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-[88px] animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-gradient">Stop starting</span>
            <br />
            from scratch —{" "}
            <span className="text-gradient-primary">ship in hours</span>,
            <br />
            not weeks.
          </h1>

          {/* Subtext */}
          <p
            className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            A complete stack of premium templates to launch full products with the same
            polish as the best apps on the market.
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#pricing">
                Get started for $97 <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#templates">Browse templates</a>
            </Button>
          </div>

          {/* Social proof */}
          <div
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full border-2 border-background bg-gradient-primary"
                    style={{ filter: `hue-rotate(${i * 40}deg)` }}
                  />
                ))}
              </div>
              <span>1,200+ builders</span>
            </div>
            <div className="hidden h-4 w-px bg-border sm:block" />
            <div className="flex items-center gap-1.5">
              <span className="text-yellow-400">★★★★★</span>
              <span>4.9/5 satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
