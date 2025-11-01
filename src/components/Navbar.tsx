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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <button
            onClick={handleHomeClick}
            className="text-lg font-light tracking-tight cursor-pointer text-white/90 hover:text-white transition-colors flex items-center gap-2.5"
          >
            X.
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
            </span>
          </button>

          <div className="flex items-center gap-10">
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
                  className={`group relative flex items-center gap-2 text-[13px] font-light tracking-wide transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/40 hover:text-white/90"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span className="hidden md:inline">{item.label}</span>
                  {/* Minimal red underline on active/hover */}
                  <span className={`absolute -bottom-1.5 left-0 h-[1px] bg-accent transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
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
