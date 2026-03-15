import { Smartphone, Palette, Store, ShieldCheck, Layout, Sparkles } from "lucide-react";
import serviceMobile from "@/assets/services/mobile-apps.jpg";
import serviceWeb from "@/assets/services/service-web.jpg";
import serviceBrand from "@/assets/services/service-brand.jpg";
import serviceDesign from "@/assets/services/service-design.jpg";
import serviceEcommerce from "@/assets/services/service-ecommerce.jpg";
import serviceCloud from "@/assets/services/service-cloud.jpg";

export const SERVICES_DETAIL = [
  {
    number: "01",
    id: "mobile",
    icon: Smartphone,
    image: serviceMobile,
    key: "services.items.0",
    titleKey: "services.items.0.title",
    priceKey: "services.items.0.price",
    shortDescKey: "services.items.0.shortDescription",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    number: "02",
    id: "web",
    icon: Layout,
    image: serviceWeb,
    key: "services.items.1",
    titleKey: "services.items.1.title",
    priceKey: "services.items.1.price",
    shortDescKey: "services.items.1.shortDescription",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    number: "03",
    id: "brand",
    icon: Sparkles,
    image: serviceBrand,
    key: "services.items.2",
    titleKey: "services.items.2.title",
    priceKey: "services.items.2.price",
    shortDescKey: "services.items.2.shortDescription",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    number: "04",
    id: "design",
    icon: Palette,
    image: serviceDesign,
    key: "services.items.3",
    titleKey: "services.items.3.title",
    priceKey: "services.items.3.price",
    shortDescKey: "services.items.3.shortDescription",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    number: "05",
    id: "ecommerce",
    icon: Store,
    image: serviceEcommerce,
    key: "services.items.4",
    titleKey: "services.items.4.title",
    priceKey: "services.items.4.price",
    shortDescKey: "services.items.4.shortDescription",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    number: "06",
    id: "it-cloud",
    icon: ShieldCheck,
    image: serviceCloud,
    key: "services.items.5",
    titleKey: "services.items.5.title",
    priceKey: "services.items.5.price",
    shortDescKey: "services.items.5.shortDescription",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
];
