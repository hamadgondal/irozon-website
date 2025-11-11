import { SERVICES_DETAIL } from "@/constants/services";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Services = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-background-secondary">
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            id="services-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground"
          >
            What We Offer
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We partner with businesses like yours to design, build, and manage high-performance
            websites, mobile apps, and IT systems—all tailored to help you grow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_DETAIL.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <Link to="/services" className="block h-full cursor-pointer">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl transition-opacity opacity-0 group-hover:opacity-100`}
                  />
                  <div className="relative p-8 lg:p-10 rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/40 transition-all duration-300 h-full">
                    <div className="flex flex-col h-full">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className={`w-16 h-16 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 shadow-lg`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-foreground ">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-base lg:text-lg flex-grow">
                        {service.shortDescription}
                      </p>
                      {service.price && (
                        <p className="mt-4 text-lg font-semibold text-primary">{service.price}</p>
                      )}

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "60px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                        className="h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full mt-6"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
