import {
  Smartphone,
  Globe,
  Palette,
  Store,
  Layers,
  ShieldCheck,
  Camera,
  Layout,
  Sparkles,
} from "lucide-react";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceWeb from "@/assets/service-web.jpg";
import serviceBrand from "@/assets/service-brand.jpg";
import serviceDesign from "@/assets/service-design.jpg";

export const SERVICES_SHORT = [
  {
    icon: Palette,
    title: "Mobile App Development",
    description: `Turn your brilliant vision into a flawless mobile app. We build fast, reliable applications for both iPhones and Androids. It's easy to use, glitch-free, and exactly what your users will love.`,
    gradient: "from-blue-500/10 to-cyan-500/10",
    iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  {
    icon: Camera,
    title: "Web Development",
    description: `Need a stunning website or a powerful online tool to run your business? We build lightning-fast, secure web solutions that not only look fantastic but are also designed to grow your leads and streamline your operations.`,
    gradient: "from-purple-500/10 to-pink-500/10",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
  {
    icon: Layout,
    title: "Brand Identity & Strategy",
    description: `Ready to stand out and look professional? We create complete, memorable brand identities—from your logo and colors to the exact words you use. Get a unified, instantly recognizable presence.`,
    gradient: "from-orange-500/10 to-yellow-500/10",
    iconBg: "bg-gradient-to-br from-orange-500 to-yellow-500",
  },
  {
    icon: Sparkles,
    title: "UI/UX & Graphic Design",
    description: `We ensure your product is easy and enjoyable to use while looking professional. We craft intuitive designs, from app screens to marketing graphics, so your users stay happy and engaged.`,
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    icon: Store,
    title: "E-commerce & Store Management",
    description: `Ready to launch your online shop and grow sales? We build high-converting e-commerce stores on platforms like Shopify and WooCommerce, and set you up with the tools to easily manage all your orders and inventory.`,
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
  {
    icon: Sparkles,
    title: "IT Support & Cloud Care",
    description: `Stop worrying about tech problems and focus on your business. We provide proactive support, security monitoring, and secure cloud hosting to keep your websites and applications running fast, safely, and smoothly, 24/7.`,
    gradient: "from-green-500/10 to-emerald-500/10",
    iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
  },
];

export const SERVICES_DETAIL = [
  {
    number: "01",
    title: "Mobile App Development",
    icon: Smartphone,
    description: `You have a vision. We have the expertise to bring it to life. Forget slow, clunky apps. We specialize in building high-performance mobile applications that are designed for speed, stability, and a fantastic user experience. We handle the complexities of the tech stack so you don't have to worry. Your app will look great, work perfectly, and deliver a smooth experience on every single device. We focus on building a sustainable, scalable application that supports your business goals from launch day and beyond.`,
    details: [
      `Custom iOS App Development: Professional design and build services for iPhone and iPad applications, ensuring seamless integration with the Apple ecosystem.`,
      `Native Android Solutions: Developing stable, fast applications specifically for the Android platform, reaching the largest mobile user base globally.`,
      `Flawless User Experience (UX/UI): Prioritizing intuitive navigation and stunning design to guarantee high user engagement and satisfaction.`,
      `Post-Launch Support & Optimization: Continuous service including app store submission, bug fixes, and performance updates to keep your app running perfectly.`,
    ],
    image: serviceMobile,
  },
  {
    number: "02",
    title: "Web Development",
    icon: Globe,
    description: `Every great business needs a powerful digital home. Whether you're starting from scratch or need an upgrade, we design and build flexible, future-proof web solutions that are tailored to your exact needs—no complicated jargon, just professional results. We don't just create pretty pages; we craft secure, fast, and responsive digital platforms that act as a 24/7 engine for your business, driving leads, supporting customers, and managing your daily operations.`,
    details: [
      `Responsive Website Design: Creating stunning, modern sites that look and work perfectly on phones, tablets, and desktops (mobile-first design).`,
      `Custom Web Application Development: Building powerful, custom tools like client portals, online booking systems, and internal management dashboards to automate your business.`,
      `Search Engine Optimization (SEO) & Speed: Ensuring your new platform is built with a solid foundation for Google visibility and loads instantly for a great user experience.`,
      `Easy Content Management: Setting up a simple system (like WordPress or a custom CMS) that lets you easily update text, photos, and blog posts yourself without needing a developer.`,
    ],
    image: serviceWeb,
  },
  {
    number: "03",
    title: "Brand Identity & Strategy",
    icon: Palette,
    description: `Your brand is more than just a logo; it's how you look, sound, and feel to the world. We partner with you to design a unified, powerful, and instantly recognizable brand identity that connects with your ideal customers and sets you apart from the competition. We handle the entire process of defining your brand's personality, ensuring consistency across all platforms, and giving you the tools you need to look professional every single day.`,
    details: [
      `Custom Logo and Visual Design: Creation of a unique, professional logo, color palette, and typography that perfectly reflects your business.`,
      `Brand Voice and Messaging: Defining the specific tone, style, and key phrases you should use to speak to your customers effectively (your company's "personality").`,
      `Comprehensive Brand Guidebook: A simple, easy-to-follow guide for your team and partners that clearly outlines how, when, and where to use all your brand assets correctly.`,
      `Digital Asset Package: Delivery of all final files, including ready-to-use templates for social media, marketing materials, and your website, for instant, professional use.`,
    ],
    image: serviceBrand,
  },
  {
    number: "04",
    title: "UI/UX & Graphic Design",
    icon: Layers,
    description: `Good design isn't just about looking pretty—it's about making things effortless for your users. Whether it's a website, a mobile app, or a marketing flyer, we focus on creating visuals that are both stunning and incredibly intuitive. We blend strategic thinking with artistic skill to craft engaging User Interfaces (UI) and smooth User Experiences (UX). The result is a design that keeps your customers engaged, lowers frustration, and turns visitors into loyal clients.`,
    details: [
      `User Interface Design: Crafting the visual elements (screens, buttons, layouts) that are clean, professional, and directly guide the user.`,
      `User Experience Research: We start by analyzing how your audience thinks and behaves to ensure the final product is genuinely easy to use.`,
      `Prototyping & Testing: Creating interactive mockups and testing them with real users before development begins, saving you time and money on changes later.`,
      `Complete Graphic Assets & Visuals: Designing all necessary digital visuals, including marketing materials, custom icons, social media graphics, and full design systems.`,
    ],
    image: serviceDesign,
  },
  {
    number: "05",
    title: "E-commerce & Store Management",
    icon: Store,
    description: `Running an online store should be exciting, not complicated. We take the stress out of launching and running your shop by creating a beautiful, secure, and high-converting e-commerce platform that acts as a true sales engine for your business. We handle the entire build—from selecting the right platform to integrating payment processing—and set you up with intuitive management tools so you can focus on selling more and worrying less about stock levels and shipping logistics.`,
    details: [
      `Platform Setup and Customization: Professional design and launch services for leading platforms like Shopify, WooCommerce, and BigCommerce, tailored to your unique product catalog.`,
      `Inventory and Order Management: Setting up streamlined systems to automatically track stock, manage purchases, and simplify fulfillment across all your sales channels.`,
      `Secure Payment Integration: Implementing trusted, reliable payment gateways (like Stripe or PayPal) and configuring tax and shipping rules for a smooth, international checkout experience.`,
      `Store Optimization & Training: Ensuring your store is lightning fast and mobile-ready, plus providing your team with simple, hands-on training to manage products, update content, and process orders.`,
    ],
    image: serviceDesign,
  },
  {
    number: "06",
    title: "IT Support & Cloud Care",
    icon: ShieldCheck,
    description: `Your digital systems are the backbone of your business—they need to be available, secure, and fast, always. We offer comprehensive IT Support and Cloud Care to take the stress out of technology. Instead of reacting to problems, we work proactively to prevent issues, manage updates, and ensure your critical data is protected. From monitoring your website's performance on the cloud to providing emergency help when you need it most, our focus is simple: uninterrupted operation and complete peace of mind so you can concentrate on your core mission.`,
    details: [
      `Secure Cloud Hosting: Reliable hosting setup and management on secure platforms like AWS or Google Cloud, ensuring maximum uptime and lightning-fast speeds.`,
      `Proactive Maintenance & Updates: Regular monitoring, security patching, and core platform updates (for WordPress, e-commerce, apps, etc.) to prevent vulnerabilities and downtime.`,
      `Data Backup & Recovery: Implementing automated, secure systems to routinely back up all critical business data, guaranteeing quick, full recovery in case of an emergency.`,
      `Dedicated Technical Support: Access to our expert team for troubleshooting, technical questions, and reliable assistance whenever you need help with your hosted applications.`,
    ],
    image: serviceDesign,
  },
];
