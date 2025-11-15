import ClientCarousel from "@/components/ClientCarousel";
import Services from "@/components/Services";
import PortfolioGrid from "@/components/PortfolioGrid";
import HeroSection from "@/components/HeroSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  // JSON-LD structured data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "irozon",
    url: "https://irozon.se",
    logo: "https://irozon.se/assets/irozon-banner.jpg",
    description:
      "irozon builds scalable digital experiences. Custom Web Development, Mobile Apps, E-commerce solutions, and Brand Identity design.",
    sameAs: [
      "https://www.facebook.com/irozon",
      "https://www.instagram.com/irozonllc/",
      "https://www.linkedin.com/company/irozon",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@irozon.se",
      contactType: "Customer Service",
    },
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-background">
          <HeroSection />
        </section>
        {/* What We Offer Section */}
        <section className="bg-[hsl(0,0%,100%)] py-20 px-6" aria-labelledby="services-heading">
          <Services />
        </section>

        {/* Clients Section */}
        <section className="bg-background" aria-labelledby="clients-heading">
          <ClientCarousel />
        </section>

        {/* Our Work Section */}
        <section className="bg-[hsl(0,0%,100%)] py-20 px-6" aria-labelledby="portfolio-heading">
          <PortfolioGrid />
        </section>
      </div>
    </>
  );
};

export default Index;
