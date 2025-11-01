import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    name: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration and real-time inventory management.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "https://example.com/project1",
  },
  {
    name: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features.",
    tags: ["TypeScript", "React", "Firebase"],
    link: "https://example.com/project2",
  },
  {
    name: "Portfolio Generator",
    description: "AI-powered tool that generates beautiful portfolio websites from user data.",
    tags: ["Python", "AI/ML", "React"],
    link: "https://example.com/project3",
  },
];

export const ProjectsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Featured Work
            <span className="inline-block w-2 h-2 bg-accent rounded-full ml-3 mb-4" />
          </h2>
          <p className="text-muted-foreground mb-16 text-lg">Selected projects that showcase my expertise</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={project.name}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative bg-card border border-border/20 p-6 transition-all duration-300 hover:border-accent/50"
              >
                {/* Red accent dot on hover */}
                <div className="absolute top-6 right-6 w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-foreground transition-colors">
                      {project.name}
                    </h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 border border-border/30 text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom border animation on hover */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
