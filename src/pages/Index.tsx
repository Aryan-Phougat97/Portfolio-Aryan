import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FloatingParticles } from "@/components/FloatingParticles";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CursorGlow } from "@/components/CursorGlow";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <FloatingParticles />
      <ScrollProgress />
      <CursorGlow />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
