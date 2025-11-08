import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectDetailsDialog, { Project } from "./ProjectDetailsDialog";
import { PROJECTS } from "@/constants/projects";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

const PortfolioGrid = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();

  const filteredProjects = PROJECTS.filter((p) => p.isFeatured);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          id="portfolio-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground"
        >
          Discover Our Work
        </motion.h2>
        <p className="text-lg md:text-xl text-muted-foreground text-center mb-16">
          Where ideas take shape and innovation comes to life.
        </p>

        {/* Project Grid */}

        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => handleProjectClick(project)}
              >
                <div className="relative overflow-hidden rounded-3xl bg-card aspect-square">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.category} project for ${project.client}`}
                    loading="lazy"
                    width="400"
                    height="400"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="text-xl font-extrabold uppercase text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <AnimatePresence>
          <div
            style={{
              marginTop: "4rem",
              display: "flex",
              flexDirection: "row",
              gap: "1rem",
              justifyContent: "center",
            }}
          >
            <Button size="lg" className="group rounded-xl" onClick={() => navigate("/projects")}>
              Explore More
            </Button>
          </div>
        </AnimatePresence>
      </div>

      <ProjectDetailsDialog
        project={selectedProject}
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </section>
  );
};

export default PortfolioGrid;
