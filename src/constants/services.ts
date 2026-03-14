import { Smartphone, Palette, Store, ShieldCheck, Layout, Sparkles } from "lucide-react";
import serviceMobile from "@/assets/services/mobile-apps.jpg";
import serviceWeb from "@/assets/services/service-web.jpg";
import serviceBrand from "@/assets/services/service-brand.jpg";
import serviceDesign from "@/assets/services/service-design.jpg";
import serviceEcommerce from "@/assets/services/service-ecommerce.jpg";
import serviceCloud from "@/assets/services/service-cloud.jpg";

export const SERVICES_DETAIL = [
  {
    id: "mobile",
    icon: Smartphone,
    image: serviceMobile,
    titleKey: "services.items.0.title",
    priceKey: "services.items.0.price",
    shortDescKey: "services.items.0.shortDescription",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    id: "web",
    icon: Layout,
    image: serviceWeb,
    titleKey: "services.items.1.title",
    priceKey: "services.items.1.price",
    shortDescKey: "services.items.1.shortDescription",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    id: "brand",
    icon: Sparkles,
    image: serviceBrand,
    titleKey: "services.items.2.title",
    priceKey: "services.items.2.price",
    shortDescKey: "services.items.2.shortDescription",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    id: "design",
    icon: Palette,
    image: serviceDesign,
    titleKey: "services.items.3.title",
    priceKey: "services.items.3.price",
    shortDescKey: "services.items.3.shortDescription",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    id: "ecommerce",
    icon: Store,
    image: serviceEcommerce,
    titleKey: "services.items.4.title",
    priceKey: "services.items.4.price",
    shortDescKey: "services.items.4.shortDescription",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    id: "it-cloud",
    icon: ShieldCheck,
    image: serviceCloud,
    titleKey: "services.items.5.title",
    priceKey: "services.items.5.price",
    shortDescKey: "services.items.5.shortDescription",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
];
