import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Heart, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import irozonLogo from "@/assets/irozon-logo.jpg";
import irozonLogoOrigin from "@/assets/logo-story-light.jpg";

const About = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: "Design with Intent",
      description:
        "Every color, every interaction, every element serves a purpose. We don't create for aesthetics alone—we design for impact.",
    },
    {
      icon: Heart,
      title: "Build to Last",
      description:
        "Beautiful interfaces deserve solid foundations. We craft experiences that are as robust in their engineering as they are refined in their design.",
    },
    {
      icon: Sparkles,
      title: "Partnership over Promises",
      description:
        "No jargon. No overselling. We believe in honest conversations, transparent processes, and outcomes that speak for themselves.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About irozon - Our Story, Mission, and Values</title>
        <meta
          name="description"
          content="Discover irozon's origin story, our mission to build powerful digital experiences, and the values that drive our work with growing businesses."
        />
      </Helmet>

      <main className="py-20 px-6">
        <div className="px-6 py-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">About Us</h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Where design meets technology. Where creative vision meets technical excellence. We're
              irozon—your partners in building digital experiences that define your brand and drive
              real growth.
            </p>
          </motion.div>
        </div>

        {/* Origin Story */}
        <section className="bg-[hsl(0,0%,96%)]">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  <span className="text-6xl md:text-7xl font-bold text-primary/20">01</span>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                    The irozon Origin Story
                  </h2>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-muted-foreground">
                    Where Design Meets Technology
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    irozon began with a simple idea: the best digital experiences happen where
                    creativity and engineering intersect. We wanted a name that captured both
                    worlds—something visually expressive, yet structured and purposeful.
                  </p>
                  <motion.div
                    key="iro"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className="flex items-start gap-3 text-foreground mt-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-lg text-muted-foreground leading-relaxed">
                      From<span className="font-semibold text-foreground"> Japanese</span>, we took{" "}
                      <span className="font-semibold text-foreground">iro(いろ)</span> — meaning
                      color. It represents imagination, design, and the emotional dimension of every
                      visual experience.
                    </span>
                  </motion.div>
                  <motion.div
                    key="zoni"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    className="flex items-start gap-3 text-foreground mt-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                    <span className="text-lg text-muted-foreground leading-relaxed">
                      From<span className="font-semibold text-foreground"> Greek</span>, we drew
                      inspiration from{" "}
                      <span className="font-semibold text-foreground">zoni (ζώνη)</span> — meaning
                      zone. It symbolizes space, structure, and the technical frameworks that make
                      great ideas possible.
                    </span>
                  </motion.div>
                  <motion.div
                    key="google"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                    className="flex items-start gap-3 text-foreground mt-4"
                  >
                    <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                      Like{" "}
                      <a
                        href="https://www.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500"
                      >
                        Google
                      </a>{" "}
                      transforming "googol" into something memorable, we merged two concepts and
                      removed the 'e'—refining them into something that feels right:{" "}
                      <span className="font-semibold text-foreground">irozon.</span> We didn't just
                      combine words. We forged a new identity.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              {/* Logo/Visual Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={irozonLogoOrigin}
                    alt="irozon team collaborating on digital projects"
                    loading="lazy"
                    width="600"
                    height="450"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <div className="bg-[hsl(0,0%,96%)]">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                The principles behind every pixel and every line of code
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="relative p-8 lg:p-10 rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg border border-gray-100 hover:shadow-xl hover:border-primary/40 transition-all duration-300 h-ful hover:cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Our Mission */}
        <div className="bg-background">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative lg:order-1"
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={irozonLogo}
                    alt="irozon team collaborating on digital projects"
                    loading="lazy"
                    width="600"
                    height="450"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8 lg:order-2"
              >
                <div className="flex items-center gap-4">
                  <span className="text-6xl md:text-7xl font-bold text-primary/20">02</span>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                    Our Mission
                  </h2>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-muted-foreground">
                    Empowering Growing Businesses
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We believe every growing business deserves access to exceptional digital
                    craftsmanship. Our mission is to bridge the gap between ambitious vision and
                    technical reality—where your ideas meet the design and development that brings
                    them to life.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                    Whether you're starting from scratch or ready to scale, we're with you from
                    concept to launch. No fluff, no jargon. Just thoughtful design, solid
                    development, and solutions that drive real results.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-background">
          <div className="max-w-4xl mx-auto px-6 py-20 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Ready to Build Something Extraordinary?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                You bring the vision. We bring the craft. Let's create something that works.
              </p>
              <Button
                size="lg"
                className="group rounded-xl text-lg px-8"
                onClick={() => navigate("/contact")}
              >
                Let's Make It Happen
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
