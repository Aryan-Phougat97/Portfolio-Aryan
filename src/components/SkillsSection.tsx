import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code2, Database, Layers, Terminal, Wrench, GitBranch } from "lucide-react";

interface Skill {
  name: string;
  icon: any;
  category: string;
}

const skills: Skill[] = [
  { name: "Python", icon: Code2, category: "Languages" },
  { name: "JavaScript", icon: Code2, category: "Languages" },
  { name: "TypeScript", icon: Code2, category: "Languages" },
  { name: "React", icon: Layers, category: "Frontend" },
  { name: "Node.js", icon: Terminal, category: "Backend" },
  { name: "PostgreSQL", icon: Database, category: "Backend" },
  { name: "Git", icon: GitBranch, category: "Tools" },
  { name: "DevOps", icon: Wrench, category: "Tools" },
];

export const SkillsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Expertise
            <span className="inline-block w-2 h-2 bg-accent rounded-full ml-3 mb-4" />
          </h2>
          <p className="text-muted-foreground mb-16 text-lg">Technologies and tools I work with</p>

          <div className="space-y-12">
            {categories.map((category, categoryIndex) => (
              <div key={category}>
                <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6 flex items-center gap-2">
                  <span className="w-8 h-px bg-border" />
                  {category}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => {
                      const Icon = skill.icon;
                      return (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={inView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: categoryIndex * 0.1 + index * 0.05, duration: 0.4 }}
                          className="group relative border border-border/20 p-6 transition-all duration-300 hover:border-accent/50"
                        >
                          {/* Red accent line on hover */}
                          <div className="absolute top-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300" />

                          <div className="flex flex-col items-center gap-3 text-center">
                            <Icon className="h-8 w-8 stroke-1 text-foreground group-hover:text-accent transition-colors duration-300" />
                            <span className="text-sm font-medium">{skill.name}</span>
                          </div>
                        </motion.div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
