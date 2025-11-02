import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProjectDetailsDialog, { Project } from "@/components/ProjectDetailsDialog";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Categories");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const categories = ["All Categories", "Mobile App", "Branding", "Web Application", "UX/UI"];

  const projects: Project[] = [
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

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const filteredProjects =
    activeFilter === "All Categories"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      {/* Featured Work Section */}
      <section className="pt-32 py-20 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">Featured Work</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
              Beautiful designs. Eye-catching interactions. Memorable experiences. Development that
              delivers. Let the work do the talking.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all ${
                  activeFilter === category
                    ? "bg-foreground text-background" // ACTIVE: Dark Background, Light Text (Correct)
                    : "bg-[hsl(0,0%,92.16%)] text-foreground hover:bg-primary hover:text-primary-foreground" // UNSELECTED: Light Gray Background (Changed)
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Project Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                >
                  <div className="relative overflow-hidden rounded-3xl bg-card shadow-lg aspect-square">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
                      <h3 className="text-2xl font-bold mb-1 text-white">{project.title}</h3>
                      <p className="text-sm text-white/80">{project.category}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <ProjectDetailsDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default Projects;
