import { Link, useLocation, useNavigate } from "react-router-dom";
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
    // Extract the hash part (e.g., "#about" from "/#about")
    const hash = sectionId.includes("#") ? sectionId.split("#")[1] : sectionId;

    if (location.pathname !== "/") {
      // Navigate to home page first, then scroll
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
      // Navigate to home page
      navigate("/");
    } else {
      // Scroll to top if already on home page
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold gradient-text">
            Aryan Phougat
          </Link>

          <div className="flex items-center gap-6">
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
    </nav>
  );
};
