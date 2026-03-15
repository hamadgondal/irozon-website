import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Target, Heart, Sparkles, LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import irozonLogo from "@/assets/irozon-logo.jpg";
import irozonLogoOrigin from "@/assets/logo-story-light.jpg";

interface ValueItem {
  icon: LucideIcon;
  titleKey: string;
  descKey: string;
}

const About = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const values: ValueItem[] = [
    {
      icon: Target,
      titleKey: "about.values.items.0.title",
      descKey: "about.values.items.0.description",
    },
    {
      icon: Heart,
      titleKey: "about.values.items.1.title",
      descKey: "about.values.items.1.description",
    },
    {
      icon: Sparkles,
      titleKey: "about.values.items.2.title",
      descKey: "about.values.items.2.description",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{t("about.helmet.title")}</title>
        <meta name="description" content={t("about.helmet.description")} />
      </Helmet>

      <main className="py-20 px-6">
        {/* Hero Section */}
        <div className="px-6 py-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              {t("about.hero.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t("about.hero.description")}
            </p>
          </motion.div>
        </div>

        {/* Origin Story */}
        <section className="bg-[hsl(0,0%,96%)]">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4">
                  <span className="text-6xl md:text-7xl font-bold text-primary/20">01</span>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("about.origin.title")}</h2>
                  <h3 className="text-xl md:text-2xl font-semibold mb-4 text-muted-foreground">
                    {t("about.origin.subtitle")}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("about.origin.p1")}
                  </p>

                  {/* Etymology Points */}
                  <div className="mt-6 space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">
                          {t("about.origin.japanese.label")}
                        </span>{" "}
                        {t("about.origin.japanese.text")}
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        <span className="font-semibold text-foreground">
                          {t("about.origin.greek.label")}
                        </span>{" "}
                        {t("about.origin.greek.text")}
                      </p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mt-6">
                    {t("about.origin.conclusion")}{" "}
                    <span className="font-semibold text-foreground">irozon.</span>
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <img
                  src={irozonLogoOrigin}
                  alt="irozon origin"
                  className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <div className="bg-[hsl(0,0%,96%)]">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("about.values.title")}</h2>
              <p className="text-xl text-muted-foreground">{t("about.values.subtitle")}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 lg:p-10 rounded-3xl bg-white/70 backdrop-blur-lg shadow-lg border border-gray-100"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <v.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{t(v.titleKey)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(v.descKey)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-background py-20">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={irozonLogo}
                alt="irozon mission"
                className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="text-6xl font-bold text-primary/20">02</span>
                <Target className="w-12 h-12 text-primary" />
              </div>
              <h2 className="text-4xl font-bold">{t("about.mission.title")}</h2>
              <p className="text-lg text-muted-foreground">{t("about.mission.p1")}</p>
              <p className="text-lg text-muted-foreground">{t("about.mission.p2")}</p>
            </motion.div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-4xl mx-auto py-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">{t("about.cta.title")}</h2>
          <p className="text-xl text-muted-foreground mb-8">{t("about.cta.subtitle")}</p>
          <Button size="lg" className="rounded-xl group" onClick={() => navigate("/contact")}>
            {t("about.cta.button")}{" "}
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default About;
