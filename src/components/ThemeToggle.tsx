import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="group relative transition-all hover:bg-foreground/5 active:bg-foreground/10"
    >
      {theme === "light" ? (
        <Moon className="h-[18px] w-[18px] transition-all duration-200 group-hover:scale-110" />
      ) : (
        <Sun className="h-[18px] w-[18px] transition-all duration-200 group-hover:scale-110" />
      )}
    </Button>
  );
};
