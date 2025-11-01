import { useLocation, useNavigate } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";
import { Home, User, Code, Mail } from "lucide-react";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/#about", label: "About", icon: User },
    { path: "/#skills", label: "Skills", icon: Code },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    const hash = sectionId.includes("#") ? sectionId.split("#")[1] : sectionId;

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(hash);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHomeClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById("home");
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById("home");
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={handleHomeClick}
            className="text-xl font-bold cursor-pointer hover:text-foreground transition-colors flex items-center gap-2"
          >
            AP
            <span className="w-1 h-1 bg-accent rounded-full" />
          </button>

          <div className="flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = item.path === location.pathname;
              const Icon = item.icon;

              return (
                <button
                  key={item.path}
                  onClick={() => {
                    if (item.path === "/") {
                      handleHomeClick();
                    } else if (item.path.includes("#")) {
                      scrollToSection(item.path);
                    } else {
                      navigate(item.path);
                    }
                  }}
                  className={`group relative flex items-center gap-2 text-sm transition-all ${
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden md:inline">{item.label}</span>
                  {/* Minimal underline on active */}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 w-full h-px bg-accent" />
                  )}
                </button>
              );
            })}

            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};
