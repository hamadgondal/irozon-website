import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import { Project } from "@/components/ProjectDetailsDialog";

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "The Dark Side",
    category: "Mobile App",
    image: project1,
    images: [project1, project2, project3],
    client: "Dark Studios",
    year: "2024",
    description:
      "A bold creative campaign that explores the darker side of modern design aesthetics. This project combines cutting-edge visual storytelling with immersive user experiences.",
    technologies: ["React", "Three.js", "GSAP", "WebGL"],
  },
  {
    id: 2,
    title: "Justice Robot",
    category: "Branding",
    image: project2,
    images: [project2, project4, project5],
    client: "Tech Innovations Inc",
    year: "2024",
    description:
      "An innovative design system that brings robotics and justice together through powerful visual metaphors and interactive elements.",
    technologies: ["Figma", "React", "Framer Motion", "TypeScript"],
  },
  {
    id: 3,
    title: "Color Current",
    category: "Web Application",
    image: project3,
    images: [project3, project6, project1],
    client: "Flow Creative",
    year: "2023",
    description:
      "A stunning photography series that captures the essence of color in motion, combining artistic vision with technical excellence.",
    technologies: ["Photography", "Adobe Suite", "Color Grading"],
  },
  {
    id: 4,
    title: "Subsequent Sneeze",
    category: "UX/UI",
    image: project4,
    images: [project4, project1, project2],
    client: "Wellness Brand Co",
    year: "2023",
    description:
      "A creative exploration of unexpected moments and their ripple effects, told through engaging visuals and interactive storytelling.",
    technologies: ["React", "Animation", "Creative Direction"],
  },
  {
    id: 5,
    title: "Abstract Dreams",
    category: "UX/UI",
    image: project5,
    images: [project5, project3, project6],
    client: "Dream Labs",
    year: "2024",
    description:
      "An abstract design project that pushes the boundaries of digital art and user interface design, creating dreamlike experiences.",
    technologies: ["UI/UX Design", "React", "Canvas API", "WebGL"],
  },
  {
    id: 6,
    title: "Minimal Essence",
    category: "Branding",
    image: project6,
    images: [project6, project2, project4],
    client: "Essence Studio",
    year: "2023",
    description:
      "A minimalist photography project that strips away the unnecessary to reveal the true essence of subjects through clean composition.",
    technologies: ["Photography", "Minimalist Design", "Post-Production"],
  },
];
