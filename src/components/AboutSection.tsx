import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [displayedText, setDisplayedText] = useState("");
  
  const fullText = `I'm a passionate Full Stack Developer with expertise in building scalable web applications. 
With a strong foundation in both backend and frontend technologies, I create seamless digital experiences 
that combine elegant design with robust functionality. I'm constantly learning and staying up-to-date 
with the latest technologies to deliver cutting-edge solutions.`;

  useEffect(() => {
    if (inView) {
      let index = 0;
      const interval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 20);

      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            About <span className="gradient-text">Me</span>
          </h2>

          <div className="glass-effect rounded-2xl p-8 md:p-12">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground min-h-[200px]">
              {displayedText}
              <span className="inline-block w-1 h-6 bg-primary ml-1 animate-pulse" />
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
