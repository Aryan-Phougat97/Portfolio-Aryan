import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { MultiStepLoader } from "./MultiStepLoader";

interface Project {
  name: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and real-time inventory management.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    link: "https://example.com/project1",
  },
  {
    name: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    link: "https://example.com/project2",
  },
  {
    name: "Portfolio Generator",
    description: "An AI-powered tool that generates beautiful portfolio websites from user data.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    link: "https://example.com/project3",
  },
];

export const ProjectsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [loadingProject, setLoadingProject] = useState<string | null>(null);

  const handleProjectClick = (project: Project) => {
    setLoadingProject(project.name);

    setTimeout(() => {
      window.open(project.link, "_blank");
      setLoadingProject(null);
    }, 3000);
  };

  const getLoadingSteps = (projectName: string) => [
    { text: "Opening link..." },
    { text: `Sending to project ${projectName}` },
    { text: "Redirecting..." },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 glass-effect group">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 gradient-bg opacity-0 group-hover:opacity-20 transition-opacity" />
                  </div>
                  <CardHeader>
                    <CardTitle className="gradient-text">{project.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button
                      onClick={() => handleProjectClick(project)}
                      className="w-full gradient-bg hover:opacity-90 transition-all group"
                    >
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {loadingProject && (
          <MultiStepLoader
            loadingStates={getLoadingSteps(loadingProject)}
            loading={true}
            duration={1000}
          />
        )}
      </div>
    </section>
  );
};
