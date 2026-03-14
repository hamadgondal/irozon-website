import { Project } from "@/components/ProjectDetailsDialog";
import midixApp1 from "@/assets/projects/midix/midix-app-icon.jpg";
import midixApp2 from "@/assets/projects/midix/midix-app-icon-process.jpg";
import midixApp3 from "@/assets/projects/midix/midix-app-icon-usage.jpg";
import midixApp4 from "@/assets/projects/midix/midix-app-ui.jpg";
import indigoBrochure1 from "@/assets/projects/indigo/Indigo-Brochure-1.jpg";
import indigoBrochure2 from "@/assets/projects/indigo/Indigo-Brochure-2.jpg";
import indigoBrochure3 from "@/assets/projects/indigo/Indigo-Brochure-3.jpg";
import indigoBrochure4 from "@/assets/projects/indigo/Indigo-Brochure-4.jpg";
import alMouj from "@/assets/projects/almouj/almouj-app.jpg";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Midix App",
    category: "Branding",
    isFeatured: true,
    image: midixApp1,
    images: [midixApp1, midixApp2, midixApp4, midixApp3],
    client: "Midix",
    website: "https://vinaz.se",
    year: "2024",
    description: `The Midicx app icon is a creative fusion of meaning and design. It combines the letter “M” from the app’s name with a heart, symbolizing care and compassion, and a pill shape, representing medicine.
    
    Together, these elements form a modern and memorable “M” logo that reflects both healthcare innovation and Midicx’s mission of delivering medicines directly to users’ homes.`,
    technologies: ["Photoshop", "Illustrator"],
  },
  {
    id: 2,
    title: "Indigo Brochure",
    category: "Branding",
    isFeatured: true,
    image: indigoBrochure1,
    images: [indigoBrochure2, indigoBrochure3, indigoBrochure4],
    client: "Indigo Oman",
    website: "https://indigo-oman.com/",
    year: "2021",
    description:
      "A glimpse into how we transform big ideas into cohesive brand experiences. Every pixel and palette choice is designed to tell your unique story.",
    technologies: ["Photoshop", "Illustrator"],
  },
  {
    id: 3,
    title: "Al Mouj App",
    category: "Web Application",
    isFeatured: true,
    image: alMouj,
    images: [alMouj],
    client: "Al Mouj Muscat",
    website: "https://www.almouj.com/en/",
    year: "2021",
    description:
      "We designed and developed a custom iOS app that puts essential resident services right on their phones and tablets from maintenance requests to facility bookings simplifying daily life in Oman’s premier lifestyle destination.",
    technologies: ["Swift", "Figma", "Google Maps API"],
  },
];
