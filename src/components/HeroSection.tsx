import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Name with minimal red dot accent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              Aryan Phougat
              <span className="inline-block w-2 h-2 bg-accent rounded-full ml-2 mb-8" />
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Full Stack Developer crafting exceptional digital experiences with precision and elegance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToProjects}
              className="group border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
            >
              View Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleContactClick}
              className="group border-foreground hover:border-accent hover:text-accent transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Contact
                <Mail className="ml-2 h-4 w-4" />
              </span>
              <span className="absolute inset-0 w-0 bg-accent/10 group-hover:w-full transition-all duration-300" />
            </Button>
          </motion.div>

          {/* Minimal scroll indicator */}
          <motion.div
            className="pt-20 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-muted-foreground to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
