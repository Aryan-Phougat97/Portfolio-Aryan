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
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Film grain overlay for unified texture - only in dark mode */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-overlay hero-grain dark:block hidden" />

      {/* Subtle gradient accent - light mode */}
      <div className="absolute inset-0 pointer-events-none dark:hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      {/* Cinematic vignette for depth - only in dark mode */}
      <div
        className="absolute inset-0 pointer-events-none dark:block hidden"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.3) 80%, rgba(0,0,0,0.6) 100%)',
        }}
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8 text-center"
        >
          {/* Name with minimal red dot accent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight">
              Aryan Phougat
              <span className="inline-block w-2 h-2 bg-accent rounded-full ml-2 mb-6 sm:mb-8 dark:opacity-100 opacity-70" />
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Full Stack Developer crafting exceptional digital experiences with precision and elegance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-8 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToProjects}
              className="group border-foreground/20 text-foreground bg-background hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 dark:border-foreground"
            >
              View Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleContactClick}
              className="group border-foreground/20 text-foreground bg-background hover:bg-accent/10 hover:border-accent hover:text-accent transition-all duration-300 dark:border-foreground"
            >
              Contact
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          {/* Minimal scroll indicator */}
          <motion.div
            className="pt-24 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
              <span className="text-xs tracking-widest uppercase opacity-60">Scroll</span>
              <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
