import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              I'm a passionate Full Stack Developer with expertise in building scalable web applications.
              With a strong foundation in both backend and frontend technologies, I create seamless digital
              experiences that combine elegant design with robust functionality.
            </p>

            <p className="text-muted-foreground">
              I'm constantly learning and staying up-to-date with the latest technologies to deliver
              cutting-edge solutions that make a real impact.
            </p>

            <div className="pt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent rounded-full" />
                <span className="text-sm">Problem Solver</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent rounded-full" />
                <span className="text-sm">Detail-Oriented</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1 h-1 bg-accent rounded-full" />
                <span className="text-sm">Fast Learner</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
