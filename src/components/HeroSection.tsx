import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadCV = () => {
    // Placeholder for CV download - replace with actual CV file
    const link = document.createElement("a");
    link.href = "/cv.pdf"; // Add your CV file to public folder
    link.download = "CV.pdf";
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Optimized Background - Static with CSS animations for better performance */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Simplified gradient orbs using CSS animations */}
        <div
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] rounded-full opacity-40 dark:opacity-50 animate-float-slow"
          style={{
            background: "radial-gradient(circle, hsl(262 83% 58% / 0.5) 0%, hsl(213 94% 68% / 0.3) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div
          className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] rounded-full opacity-40 dark:opacity-50 animate-float-slower"
          style={{
            background: "radial-gradient(circle, hsl(213 94% 68% / 0.5) 0%, hsl(262 83% 58% / 0.3) 50%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6"
        >
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="w-32 h-32 mx-auto rounded-full gradient-bg p-1">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center text-4xl font-bold gradient-text">
                DEV
              </div>
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Hi, I'm <span className="gradient-text">Aryan Phougat</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Full Stack Developer specializing in building exceptional digital experiences
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              size="lg"
              onClick={scrollToAbout}
              className="gradient-bg hover:opacity-90 transition-all hover:scale-105 group"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadCV}
              className="transition-all hover:scale-105 hover:border-primary hover:text-primary group"
            >
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download CV
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
