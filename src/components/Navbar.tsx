import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Home, User, Code, Mail } from "lucide-react";
import { motion } from "framer-motion";

export const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/#about", label: "About", icon: User },
    { path: "/#skills", label: "Skills", icon: Code },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/${sectionId}`;
    } else {
      const element = document.querySelector(sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold gradient-text">
            Portfolio
          </Link>

          <div className="flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = item.path === location.pathname;
              const Icon = item.icon;

              return (
                <button
                  key={item.path}
                  onClick={() => {
                    if (item.path.includes("#")) {
                      scrollToSection(item.path);
                    } else {
                      window.location.href = item.path;
                    }
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all hover:scale-105 ${
                    isActive
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden md:inline">{item.label}</span>
                </button>
              );
            })}

            <ThemeToggle />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
