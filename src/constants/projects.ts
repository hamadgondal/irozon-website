import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import { Project } from "@/components/ProjectDetailsDialog";
import midixApp1 from "@/assets/projects/midix/app-icon.png";
import midixApp2 from "@/assets/projects/midix/process.png";
import midixApp3 from "@/assets/projects/midix/usage.jpg";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Midix App",
    category: "Branding",
    isFeatured: true,
    image: midixApp1,
    images: [midixApp1, midixApp2, midixApp3],
    client: "Dark Studios",
    website: "https://vinaz.se",
    year: "2024",
    description: `The Midicx app icon is a creative fusion of meaning and design. It combines the letter “M” from the app’s name with a heart, symbolizing care and compassion, and a pill shape, representing medicine.
    
    Together, these elements form a modern and memorable “M” logo that reflects both healthcare innovation and Midicx’s mission of delivering medicines directly to users’ homes.`,
    technologies: ["Photoshop", "Illustrator"],
  },
  {
    id: 2,
    title: "Justice Robot",
    category: "Branding",
    isFeatured: false,
    image:
      "https://theme.madsparrow.me/osty/wp-content/uploads/2025/02/Three-Scoops-of-Ice-Cream-on-Spoons.webp",
    images: [project2, project4, project5],
    client: "Tech Innovations Inc",
    website: "https://vinaz.se",
    year: "2024",
    description:
      "An innovative design system that brings robotics and justice together through powerful visual metaphors and interactive elements.",
    technologies: ["Figma", "React", "Framer Motion", "TypeScript"],
  },
  {
    id: 3,
    title: "Color Current",
    category: "Web Application",
    isFeatured: false,
    image:
      "https://theme.madsparrow.me/osty/wp-content/uploads/2025/01/Minimalist-Stone-Composition-m_f.png",
    images: [project3, project6, project1],
    client: "Flow Creative",
    website: "https://vinaz.se",
    year: "2023",
    description:
      "A stunning photography series that captures the essence of color in motion, combining artistic vision with technical excellence.",
    technologies: ["Photography", "Adobe Suite", "Color Grading"],
  },
  {
    id: 4,
    title: "Subsequent Sneeze",
    category: "UX/UI",
    isFeatured: true,
    image:
      "https://theme.madsparrow.me/osty/wp-content/uploads/2025/01/Green-Character-in-Yellow-Hoodie-m_f.png",
    images: [project4, project1, project2],
    client: "Wellness Brand Co",
    website: "https://vinaz.se",
    year: "2023",
    description:
      "A creative exploration of unexpected moments and their ripple effects, told through engaging visuals and interactive storytelling.",
    technologies: ["React", "Animation", "Creative Direction"],
  },
  {
    id: 5,
    title: "Abstract Dreams",
    category: "UX/UI",
    isFeatured: true,
    image:
      "https://theme.madsparrow.me/osty/wp-content/uploads/2025/01/Whimsical-Character-in-a-Jar-m_f.png",
    images: [project5, project3, project6],
    client: "Dream Labs",
    website: "https://vinaz.se",
    year: "2024",
    description:
      "An abstract design project that pushes the boundaries of digital art and user interface design, creating dreamlike experiences.",
    technologies: ["UI/UX Design", "React", "Canvas API", "WebGL"],
  },
  {
    id: 6,
    title: "Minimal Essence",
    category: "Branding",
    isFeatured: false,
    image:
      "https://theme.madsparrow.me/osty/wp-content/uploads/2025/01/Person-with-VR-Headset-m_f.png",
    images: [project6, project2, project4],
    client: "Essence Studio",
    website: "https://vinaz.se",
    year: "2023",
    description:
      "A minimalist photography project that strips away the unnecessary to reveal the true essence of subjects through clean composition.",
    technologies: ["Photography", "Minimalist Design", "Post-Production"],
  },
];
