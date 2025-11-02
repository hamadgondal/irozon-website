import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Globe, Palette, Sparkles } from "lucide-react";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceBrand from "@/assets/service-brand.jpg";
import serviceDesign from "@/assets/service-design.jpg";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      number: "01",
      title: "Mobile App Development",
      icon: Smartphone,
      description: "Building high-performance, native (iOS & Android) and cross-platform applications. We ensure speed, stability, and a flawless user experience on every device.",
      details: [
        "Native iOS & Android Development",
        "Cross-platform Solutions",
        "App Store Optimization",
        "Performance & Security"
      ],
      image: serviceMobile,
    },
    {
      number: "02",
      title: "Web & App Development",
      icon: Globe,
      description: "Engineering scalable web applications and custom CMS-driven websites. We deliver robust, secure, and future-proof digital platforms designed for growth.",
      details: [
        "Custom Web Applications",
        "E-commerce Solutions",
        "CMS Development",
        "API Integration"
      ],
      image: serviceWeb,
    },
    {
      number: "03",
      title: "Brand Identity & Strategy",
      icon: Palette,
      description: "Designing complete brand systems—from logo creation and voice development to comprehensive style guides that ensure a unified, memorable presence.",
      details: [
        "Logo & Visual Identity",
        "Brand Guidelines",
        "Marketing Collateral",
        "Brand Strategy"
      ],
      image: serviceBrand,
    },
    {
      number: "04",
      title: "UI/UX & Graphic Design",
      icon: Sparkles,
      description: "Creating intuitive User Interfaces (UI) and compelling User Experiences (UX). This includes all necessary graphic assets, marketing materials, and digital visuals.",
      details: [
        "User Interface Design",
        "User Experience Research",
        "Prototyping & Testing",
        "Design Systems"
      ],
      image: serviceDesign,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <div className="px-6 py-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              What We Do Best
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Comprehensive creative and technical solutions tailored to bring your vision to life with cutting-edge technology and innovative design.
            </p>
          </motion.div>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`min-h-screen flex items-center ${
                  index % 2 === 0 ? 'bg-background' : 'bg-[hsl(0,0%,96%)]'
                }`}
              >
                <div className="w-full max-w-7xl mx-auto px-6 py-20">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}>
                    {/* Content Side */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className={`space-y-8 ${!isEven ? 'lg:order-2' : ''}`}
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
                          {service.description}
                        </p>
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
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                            <span className="text-base">{detail}</span>
                          </motion.div>
                        ))}
                      </div>

                      <Button 
                        size="lg" 
                        className="group rounded-full"
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className={`relative ${!isEven ? 'lg:order-1' : ''}`}
                    >
                      <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                        <img 
                          src={service.image} 
                          alt={service.title}
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

      <Footer />
    </div>
  );
};

export default Services;
