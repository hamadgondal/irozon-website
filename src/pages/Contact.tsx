import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const WEB3FORMS_ACCESS_KEY = "6c821c85-39d2-41d6-bbad-22e2944ab1b8";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useTranslation();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget as HTMLFormElement;
      const data = new FormData(form);
      data.append("access_key", WEB3FORMS_ACCESS_KEY);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "✅ Message Sent!",
          description: "We've received your message and will get back to you soon.",
          variant: "default",
        });
        // Clear the form only on success
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Web3Forms Error:", result);
        toast({
          title: "❌ Submission Failed",
          description:
            result.message || "There was an error sending your message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Network Error:", error);
      toast({
        title: "❌ Submission Failed",
        description: "A network error occurred. Please check your connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t("contact.info.email"),
      value: "hello@irozon.se",
      href: "mailto:hello@irozon.se",
    },
    {
      icon: Phone,
      title: t("contact.info.phone"),
      value: "+46 76 584 1995",
      href: "tel:+46765841995",
    },
    {
      icon: MapPin,
      title: t("contact.info.location"),
      value: t("contact.info.locationValue"),
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Helmet remains static as it's SEO content */}
      <main className="pt-16 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              {t("contact.title")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("contact.description")}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-6">
            <motion.div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">{t("contact.form.name")}</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-white text-gray-900 placeholder-gray-400"
                    placeholder={t("contact.form.placeholderName")}
                  />
                </div>
                <div>
                  <Label htmlFor="email">{t("contact.form.email")}</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-white text-gray-900 placeholder-gray-400"
                    placeholder={t("contact.form.placeholderEmail")}
                  />
                </div>
                <div>
                  <Label htmlFor="subject">{t("contact.form.subject")}</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-2 bg-white text-gray-900 placeholder-gray-400"
                    placeholder={t("contact.form.placeholderSubject")}
                  />
                </div>
                <div>
                  <Label htmlFor="message">{t("contact.form.message")}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-2 min-h-[150px] bg-white text-gray-900 placeholder-gray-400"
                    placeholder={t("contact.form.placeholderMessage")}
                  />
                </div>
                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? (
                    t("contact.form.sending")
                  ) : (
                    <>
                      {t("contact.form.send")} <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            <motion.div className="space-y-8">
              <div className="bg-card rounded-3xl p-8 border border-border">
                <h2 className="text-2xl font-bold mb-6 text-foreground">
                  {t("contact.info.title")}
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={index}
                        href={info.href}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              <div className="bg-muted/30 rounded-3xl p-8">
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {t("contact.hours.title")}
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>{t("contact.hours.weekdays")}</p>
                  <p>{t("contact.hours.weekend")}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
