import ClientCarousel from "@/components/ClientCarousel";
import Services from "@/components/Services";
import PortfolioGrid from "@/components/PortfolioGrid";
import HeroSection from "@/components/HeroSection/HeroSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-background">
        <HeroSection />
      </section>

      {/* What We Offer Section */}
      <section className="bg-[hsl(0,0%,96%)]">
        <Services />
      </section>

      {/* Clients Section */}
      <section className="bg-background">
        <ClientCarousel />
      </section>

      {/* Our Work Section */}
      <section className="bg-[hsl(0,0%,96%)]">
        <PortfolioGrid />
      </section>
    </div>
  );
};

export default Index;
