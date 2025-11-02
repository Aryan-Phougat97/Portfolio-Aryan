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
      {/* Film grain overlay for unified texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-overlay hero-grain" />

      {/* Cinematic vignette for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 70% 50%, transparent 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 100%)',
        }}
      />

      {/* Portrait Image - Desktop: right side with gradient fade, Mobile: centered behind text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Desktop Portrait - Large screens (1280px+) */}
        <div
          className="hidden xl:block absolute right-0 top-0 bottom-0 w-[50%] bg-no-repeat"
          style={{
            backgroundImage: 'url(/portrait.png)',
            backgroundSize: 'auto 115%',
            backgroundPosition: 'right center',
            maskImage: 'radial-gradient(ellipse 120% 100% at 85% 50%, black 30%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.4) 65%, transparent 85%), linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.5) 25%, black 45%)',
            WebkitMaskImage: 'radial-gradient(ellipse 120% 100% at 85% 50%, black 30%, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.4) 65%, transparent 85%), linear-gradient(to right, transparent 0%, rgba(0,0,0,0.15) 12%, rgba(0,0,0,0.5) 25%, black 45%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        />

        {/* Enhanced ambient rim-light glow - Apple product style */}
        <div
          className="hidden xl:block absolute right-0 top-0 bottom-0 w-[50%] bg-no-repeat -z-10"
          style={{
            backgroundImage: 'url(/portrait.png)',
            backgroundSize: 'auto 115%',
            backgroundPosition: 'right center',
            filter: 'blur(60px) brightness(1.2) saturate(0.9)',
            opacity: 0.12,
            mixBlendMode: 'screen',
          }}
        />

        {/* OPTIONAL: Soft gradient overlay for luxury depth - UNCOMMENT TO ENABLE */}
        {/* <div
          className="hidden xl:block absolute right-0 top-0 bottom-0 w-[50%] pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(201, 27, 31, 0.06) 50%, rgba(0, 0, 0, 0.3) 100%)',
            maskImage: 'radial-gradient(ellipse 120% 100% at 85% 50%, black 30%, rgba(0,0,0,0.7) 50%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse 120% 100% at 85% 50%, black 30%, rgba(0,0,0,0.7) 50%, transparent 85%)',
            mixBlendMode: 'multiply',
            opacity: 0.5,
          }}
        /> */}

        {/* Tablet Portrait - Medium screens (768px-1279px) */}
        <div
          className="hidden md:block xl:hidden absolute right-0 top-0 bottom-0 w-[52%] bg-no-repeat"
          style={{
            backgroundImage: 'url(/portrait.png)',
            backgroundSize: 'auto 110%',
            backgroundPosition: 'right center',
            maskImage: 'radial-gradient(ellipse 115% 100% at 82% 50%, black 32%, rgba(0,0,0,0.8) 48%, rgba(0,0,0,0.35) 68%, transparent 88%), linear-gradient(to right, transparent 0%, rgba(0,0,0,0.12) 10%, rgba(0,0,0,0.45) 22%, black 42%)',
            WebkitMaskImage: 'radial-gradient(ellipse 115% 100% at 82% 50%, black 32%, rgba(0,0,0,0.8) 48%, rgba(0,0,0,0.35) 68%, transparent 88%), linear-gradient(to right, transparent 0%, rgba(0,0,0,0.12) 10%, rgba(0,0,0,0.45) 22%, black 42%)',
            maskComposite: 'intersect',
            WebkitMaskComposite: 'source-in',
          }}
        />

        {/* Enhanced ambient rim-light glow - tablet */}
        <div
          className="hidden md:block xl:hidden absolute right-0 top-0 bottom-0 w-[52%] bg-no-repeat -z-10"
          style={{
            backgroundImage: 'url(/portrait.png)',
            backgroundSize: 'auto 110%',
            backgroundPosition: 'right center',
            filter: 'blur(55px) brightness(1.2) saturate(0.9)',
            opacity: 0.10,
            mixBlendMode: 'screen',
          }}
        />

        {/* Mobile Portrait - behind text with low opacity */}
        <div
          className="md:hidden absolute inset-0 bg-no-repeat"
          style={{
            backgroundImage: 'url(/portrait.png)',
            opacity: 0.18,
            backgroundSize: 'auto 90%',
            backgroundPosition: 'center 25%',
          }}
        />
      </motion.div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8 md:max-w-[55%] lg:max-w-[50%]"
        >
          {/* Name with minimal red dot accent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              Aryan Phougat
              <span className="inline-block w-2 h-2 bg-accent rounded-full ml-2 mb-8" />
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-xl"
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
              className="group border-foreground text-foreground bg-background hover:bg-foreground hover:text-background transition-all duration-300"
            >
              View Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleContactClick}
              className="group border-foreground text-foreground bg-background hover:bg-accent/10 hover:border-accent hover:text-accent transition-all duration-300"
            >
              Contact
              <Mail className="ml-2 h-4 w-4" />
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
