import { Smartphone, Palette, Store, ShieldCheck, Layout, Sparkles } from "lucide-react";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceBrand from "@/assets/service-brand.jpg";
import serviceDesign from "@/assets/service-design.jpg";
import serviceEcommerce from "@/assets/service-ecommerce.jpg";
import serviceCloud from "@/assets/service-cloud.jpg";
import indigoBrochure from "@/assets/projects/indigo/Indigo-Brochure-1.jpg";

export const SERVICES_DETAIL = [
  {
    number: "01",
    icon: Smartphone,
    title: "Mobile App Development",
    price: "from 4,999 SEK",
    image: serviceMobile,
    subtitle:
      "We craft bespoke, high-performance apps that are fast, stable, and seriously smooth.",
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    shortDescription: `Turn your brilliant vision into a flawless mobile app. We build fast, reliable applications for both iPhones and Androids. It's easy to use, glitch-free, and exactly what your users will love.`,
    longDescription: `Got a great idea? We bring it to life. Our team handles all the techy complexities to build a stunning mobile app that works perfectly on every device. From launch to growth, we build a scalable foundation for your business success.`,
    details: [
      `iOS & Android Excellence: Get a custom native app, perfectly tailored for either platform and its users.`,
      `Design Users Love: We obsess over intuitive UX and beautiful UI to guarantee engagement.`,
      `Speed & Stability: Built for performance so your app is always fast and reliable.`,
      `Launch & Beyond: Our support includes app store submission, updates, and keeping your app at its best.`,
    ],
  },
  {
    number: "02",
    icon: Layout,
    title: "Web Development",
    subtitle: "Fast, Secure & Lead-Generating Websites",
    price: "from 3,800 SEK",
    image: serviceWeb,
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    shortDescription:
      "Stunning websites & powerful web apps that drive leads and run your business 24/7. Built for speed, security, and serious growth.",
    longDescription:
      "Your business needs a digital home that works as hard as you do. We build fast, flexible websites and custom web apps designed to attract customers, streamline operations, and scale with your ambitions—no tech jargon, just results that matter.",
    details: [
      "Responsive Website Design: Beautiful, mobile-first sites that look perfect on every device.",
      "Custom Web Applications: Powerful tools like client portals, booking systems, and dashboards that automate your workflow.",
      "SEO & Performance Built-In: Fast-loading sites optimized for Google visibility and superior user experience from day one.",
      "Easy Content Management: Simple systems that let you update content yourself—no developer needed.",
    ],
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Brand Identity & Strategy",
    subtitle: "Make Your Mark with Memorable Branding",
    price: "from 499 SEK/hour",
    image: serviceBrand,
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    shortDescription:
      "Stand out with a complete brand identity—logo, colors, voice, and strategy—that makes you instantly memorable and professionally undeniable.",
    longDescription:
      "Your brand is your promise to customers. We craft complete visual identities and strategic messaging that connects emotionally, builds trust, and sets you apart. From logo to language, we create a cohesive brand experience that turns viewers into loyal fans.",
    details: [
      "Custom Logo & Visual Identity: Unique logo, color palette, and typography that perfectly represent your business essence.",
      "Brand Voice & Messaging: Defining your unique tone and key messaging to connect with your ideal customers.",
      "Comprehensive Brand Guidebook: A clear rulebook for using your brand assets consistently across all platforms.",
      "Ready-to-Use Asset Package: All final files and templates for instant professional use across digital and print.",
    ],
  },
  {
    number: "04",
    icon: Palette,
    title: "UI/UX & Graphic Design",
    subtitle: "Beautiful Designs That Feel Effortless",
    price: "from 2,999 SEK",
    image: indigoBrochure,
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    shortDescription:
      "We craft intuitive, stunning designs that users love. From apps to marketing graphics—professional visuals that engage and convert.",
    longDescription:
      "Great design should work beautifully and feel effortless. We blend strategic UX thinking with stunning visual design to create interfaces that are both gorgeous and intuitive. The result? Happy users who stay engaged and become loyal customers.",
    details: [
      "User Interface Design: Clean, professional visual elements that guide users seamlessly through your product.",
      "User Experience Research: Understanding user behavior to create genuinely intuitive, easy-to-use experiences.",
      "Prototyping & Testing: Interactive mockups tested with real users before development, saving time and costs.",
      "Complete Graphic Assets: Marketing materials, custom icons, social graphics, and full design systems.",
    ],
  },
  {
    number: "05",
    icon: Store,
    title: "E-commerce & Store Management",
    subtitle: "Your Online Sales Engine, Built to Convert",
    price: "from 5,999 SEK",
    image: serviceEcommerce,
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    shortDescription:
      "Launch and grow your online shop with high-converting stores on Shopify & WooCommerce. Easy inventory, secure payments, and sales-ready design.",
    longDescription:
      "Your online store should sell for you 24/7. We build beautiful, high-converting e-commerce platforms with intuitive management tools. From platform setup to inventory management, we create a sales engine that lets you focus on growing your business.",
    details: [
      "Platform Setup & Customization: Professional Shopify & WooCommerce stores tailored to your products and brand.",
      "Inventory & Order Management: Streamlined systems to track stock, manage orders, and simplify fulfillment.",
      "Secure Payment Integration: Trusted payment gateways with smooth international checkout experiences.",
      "Store Optimization & Training: Fast, mobile-ready stores plus hands-on training for easy management.",
    ],
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "IT Support & Cloud Care",
    subtitle: "Proactive Tech Care for Peace of Mind",
    price: "from 299 SEK/month",
    image: serviceCloud,
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
    shortDescription:
      "Stop worrying about tech problems. We provide proactive support, security monitoring, and cloud hosting to keep your business running smoothly 24/7.",
    longDescription:
      "Your technology should work for you, not the other way around. Our proactive IT support and cloud care prevent issues before they happen. With secure hosting, automated backups, and expert support, we ensure your digital operations run seamlessly so you can focus on your business.",
    details: [
      "Secure Cloud Hosting: Reliable AWS & Google Cloud setup for maximum uptime and blazing speeds.",
      "Proactive Maintenance: Regular monitoring, security patches, and updates to prevent downtime.",
      "Automated Backup & Recovery: Secure, routine backups ensuring quick recovery from any emergency.",
      "Dedicated Technical Support: Expert help when you need it—troubleshooting and guidance on demand.",
    ],
  },
];
