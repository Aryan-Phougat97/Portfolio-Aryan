import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef, useState, MouseEvent } from "react";

export const HeroSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Parallax effect - content moves slower than scroll
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <section ref={sectionRef} id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
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

      <motion.div
        className="container mx-auto max-w-4xl relative z-10"
        style={{ y, opacity }}
      >
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

          {/* CTA Buttons with Magnetic Effect */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 pt-8 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <MagneticButton onClick={scrollToProjects}>
              <Button
                size="lg"
                variant="outline"
                className="group border-foreground/20 text-foreground bg-background hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300 dark:border-foreground w-full sm:w-auto"
              >
                View Work
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
              </Button>
            </MagneticButton>

            <MagneticButton onClick={handleContactClick}>
              <Button
                size="lg"
                variant="outline"
                className="group border-foreground/20 text-foreground bg-background hover:bg-accent/10 hover:border-accent hover:text-accent transition-all duration-300 dark:border-foreground w-full sm:w-auto"
              >
                Contact
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </MagneticButton>
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
      </motion.div>
    </section>
  );
};

// Magnetic Button Component
const MagneticButton = ({ children, onClick }: { children: React.ReactNode; onClick: () => void }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.15; // Subtle magnetic effect
    const deltaY = (e.clientY - centerY) * 0.15;

    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="inline-block cursor-pointer"
    >
      <motion.div
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
