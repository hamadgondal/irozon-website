import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetailsDialog, { Project } from "@/components/ProjectDetailsDialog";
import { PROJECTS } from "@/constants/projects";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All Categories");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const categories = ["All Categories", "Mobile App", "Branding", "Web Application", "UX/UI"];

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const filteredProjects =
    activeFilter === "All Categories"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Portfolio | Featured Web & Mobile App Work by irozon</title>
        <meta
          name="description"
          content="Explore irozon's featured work. See case studies and success stories for beautiful designs, eye-catching interactions, and development that delivers real business results."
        />
        {/* Optional: Add canonical link if your site uses one */}
        <link rel="canonical" href="https://irozon.se/projects" />
      </Helmet>
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
              Beautiful designs. Eye-catching interactions. Development that delivers. We believe
              quality speaks for itself. Explore the projects where we helped our clients achieve
              real, measurable success.
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
