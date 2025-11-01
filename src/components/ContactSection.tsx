import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const navigate = useNavigate();

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            Let's Work Together
            <span className="inline-block w-2 h-2 bg-accent rounded-full ml-3 mb-4" />
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'm always open to discussing new opportunities.
          </p>

          <Button
            size="lg"
            variant="outline"
            onClick={() => navigate("/contact")}
            className="group border-foreground hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 mt-8"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>

          {/* Social Links */}
          <div className="pt-12 flex justify-center gap-6">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                  className="group relative p-3 border border-border/20 hover:border-accent/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                  {/* Red dot indicator on hover */}
                  <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
