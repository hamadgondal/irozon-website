import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ClientCarousel = () => {
  const clients = [
    { name: "HWI Dubai", logo: null, website: "http://www.healthworld-international.com/" },
    { name: "Indigo Oman", logo: null, website: "https://indigo-oman.com/" },
    { name: "MK1 UAE", logo: null, website: "https://www.instagram.com/mk1_uae/" },
    { name: "Al Mouj Muscat", logo: null, website: "https://www.almouj.com/en/" },
    { name: "Omantel", logo: null, website: "https://www.omantel.om/" },
    { name: "Trescorp", logo: null, website: "http://trescorp.biz/" },
  ];

  const duplicatedClients = [...clients, ...clients, ...clients];
  const { t } = useTranslation();
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="clients-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground"
          >
            {t("clients.heading")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("clients.description")}
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true, // This enables infinite loop
            slidesToScroll: 1,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {duplicatedClients.map((client, index) => (
              <CarouselItem
                key={`${client.name}-${index}`}
                className="pl-4 md:basis-1/3 lg:basis-1/4"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }} // Allow re-trigger on loop
                  transition={{ duration: 0.4, delay: (index % clients.length) * 0.1 }}
                  className="p-8 flex items-center justify-center h-full"
                >
                  <Link
                    to={client.website || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center h-full w-full"
                  >
                    {client.logo ? (
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        loading="lazy"
                        width="200"
                        height="80"
                        className="max-w-full max-h-[80px] object-contain opacity-40 hover:opacity-100 transition-opacity duration-300"
                      />
                    ) : (
                      <div className="text-xl md:text-lg font-bold text-foreground/40 hover:text-foreground transition-colors text-center">
                        {client.name}
                      </div>
                    )}
                  </Link>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientCarousel;
