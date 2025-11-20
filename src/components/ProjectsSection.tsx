import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink } from "lucide-react";
import { useRef, MouseEvent } from "react";

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
    name: "Self Improvement App",
    description: "Collaborative self improvement tool with real-time updates and team features.",
    tags: ["TypeScript", "React", "Firebase"],
    link: "https://trelix.aryanphougat.dev",
  },

];

const ProjectCard = ({ project, index, inView }: { project: Project; index: number; inView: boolean }) => {
  const cardRef = useRef<HTMLAnchorElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.a
      ref={cardRef}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative bg-white/80 dark:bg-black/80 backdrop-blur-xl border border-black/[0.08] dark:border-white/[0.08] p-8 transition-all duration-500 hover:border-black/20 dark:hover:border-white/20 overflow-hidden"
    >
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>

      {/* Tiny red corner accent - only visible on hover */}
      <div className="absolute top-3 right-3 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />

      <div className="space-y-5 relative" style={{ transform: "translateZ(20px)" }}>
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-medium tracking-tight text-black/90 dark:text-white/90 group-hover:text-black dark:group-hover:text-white transition-colors">
            {project.name}
          </h3>
          <ExternalLink className="h-3.5 w-3.5 text-black/30 dark:text-white/30 group-hover:text-accent transition-all duration-300 flex-shrink-0 mt-1" />
        </div>

        <p className="text-black/50 dark:text-white/50 text-[13px] leading-relaxed font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 pt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 border border-black/10 dark:border-white/10 text-black/40 dark:text-white/40 font-light tracking-wide uppercase backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Minimal red underline on hover - ultra subtle */}
      <div className="absolute bottom-0 left-0 h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-500 ease-out" />
    </motion.a>
  );
};

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: "1000px" }}>
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
