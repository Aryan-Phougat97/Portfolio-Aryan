import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

interface Skill {
  name: string;
  percentage: number;
  category: string;
  color: string;
}

const skills: Skill[] = [
  { name: "Python", percentage: 95, category: "Languages", color: "hsl(var(--progress-python))" },
  { name: "JavaScript", percentage: 70, category: "Languages", color: "hsl(var(--progress-js))" },
  { name: "TypeScript", percentage: 65, category: "Languages", color: "hsl(var(--primary))" },
  { name: "HTML", percentage: 90, category: "Frontend", color: "hsl(var(--progress-html))" },
  { name: "CSS", percentage: 80, category: "Frontend", color: "hsl(var(--progress-css))" },
  { name: "DevOps", percentage: 75, category: "Others", color: "hsl(var(--primary))" },
  { name: "Git", percentage: 85, category: "Others", color: "hsl(var(--accent))" },
  { name: "Web Development", percentage: 88, category: "Others", color: "hsl(var(--gradient-end))" },
];

export const SkillsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [animatedValues, setAnimatedValues] = useState<number[]>(skills.map(() => 0));

  useEffect(() => {
    if (inView) {
      // Optimized: animate all skills together with requestAnimationFrame for better performance
      let animationFrame: number;
      const duration = 1000; // 1 second total animation
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        setAnimatedValues(skills.map(skill => Math.round(skill.percentage * progress)));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => cancelAnimationFrame(animationFrame);
    }
  }, [inView]);

  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            My <span className="gradient-text">Skills</span>
          </h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {categories.map((category) => (
              <div key={category} className="glass-effect rounded-2xl p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">{category}</h3>
                <div className="space-y-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => {
                      const skillIndex = skills.indexOf(skill);
                      return (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="font-semibold" style={{ color: skill.color }}>
                              {animatedValues[skillIndex]}%
                            </span>
                          </div>
                          <div className="h-3 bg-[hsl(var(--progress-bg))] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${animatedValues[skillIndex]}%` } : {}}
                              transition={{ duration: 1, delay: skillIndex * 0.1 }}
                              className="h-full rounded-full transition-all"
                              style={{ backgroundColor: skill.color }}
                            />
                          </div>
                        </div>
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
