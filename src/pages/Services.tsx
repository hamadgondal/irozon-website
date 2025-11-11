import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SERVICES_DETAIL } from "@/constants/services";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>What We Do Best | irozon - Web Development, Apps, and Design</title>
        <meta
          name="description"
          content="Explore irozon's core services: Custom Web Development, Mobile App Engineering, Brand Identity, and secure IT Support. Let's build your success."
        />
        {/* Add canonical, Open Graph, etc., here */}
      </Helmet>
      <main className="pt-16">
        {/* Hero Section */}
        <div className="px-6 py-2 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">What We Do Best</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              We offer complete digital solutions—from brand identity and professional UI/UX design
              to secure cloud management—making your path to growth clear and efficient.
            </p>
          </motion.div>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {SERVICES_DETAIL.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex items-center ${
                  index % 2 === 0 ? "bg-background" : "bg-[hsl(0,0%,96%)]"
                }`}
              >
                <div className="w-full max-w-7xl mx-auto px-6 py-20">
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                      !isEven ? "lg:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content Side */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className={`space-y-8 ${!isEven ? "lg:order-2" : ""}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-6xl md:text-7xl font-bold text-primary/20">
                          {service.number}
                        </span>
                        <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>

                      <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                          {service.title}
                        </h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {service.longDescription}
                        </p>
                        {service.price && (
                          <p className="mt-4 text-lg font-semibold text-primary">{service.price}</p>
                        )}
                      </div>

                      <div className="space-y-3">
                        {service.details.map((detail, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                            className="flex items-center gap-3 text-foreground"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                            <span className="text-base">{detail}</span>
                          </motion.div>
                        ))}
                      </div>

                      <Button
                        size="lg"
                        className="group rounded-xl"
                        onClick={() => navigate("/contact")}
                      >
                        Let's Discuss
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </motion.div>
                    {/* Image Side */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className={`relative ${!isEven ? "lg:order-1" : ""}`}
                    >
                      <div className="relative aspect-[1/1] rounded-3xl overflow-hidden shadow-2xl">
                        <img
                          src={service.image}
                          alt={`${service.title} service illustration`}
                          loading="lazy"
                          width="600"
                          height="600"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Services;
