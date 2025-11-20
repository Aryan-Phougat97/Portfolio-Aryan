import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            About
            <span className="inline-block w-2 h-2 bg-accent rounded-full ml-3 mb-4" />
          </h2>

          <motion.div
            className="space-y-6 text-lg leading-relaxed"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p variants={itemVariants} className="text-muted-foreground">
              I'm a passionate Full Stack Developer with expertise in building scalable web applications.
              With a strong foundation in both backend and frontend technologies, I create seamless digital
              experiences that combine elegant design with robust functionality.
            </motion.p>

            <motion.p variants={itemVariants} className="text-muted-foreground">
              I'm constantly learning and staying up-to-date with the latest technologies to deliver
              cutting-edge solutions that make a real impact.
            </motion.p>

            <motion.div variants={itemVariants} className="pt-8 flex flex-wrap gap-4">
              {["Problem Solver", "Detail-Oriented", "Fast Learner"].map((trait, index) => (
                <motion.div
                  key={trait}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group flex items-center gap-2 px-4 py-2 border border-border/20 bg-background/50 backdrop-blur-sm hover:border-accent/50 hover:bg-background/80 transition-all duration-300"
                >
                  <motion.span
                    className="w-1 h-1 bg-accent rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  <span className="text-sm group-hover:text-accent transition-colors">{trait}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
