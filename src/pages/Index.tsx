import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/ui/glass-video-hero";
import { LogoMarquee } from "@/components/LogoMarquee";
import { FeaturesSection } from "@/components/FeaturesSection";
import { TemplatesSection } from "@/components/TemplatesSection";
import { PricingSection } from "@/components/PricingSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FaqSection } from "@/components/FaqSection";
import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      <div className="relative">
        <Navbar />
        <HeroSection />
        <LogoMarquee />
        <FeaturesSection />
        <TemplatesSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
