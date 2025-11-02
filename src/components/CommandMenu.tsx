import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Github, FileText, Mail, FolderGit2 } from "lucide-react";

interface Command {
  id: string;
  label: string;
  shortcut?: string;
  icon: React.ReactNode;
  action: () => void;
}

export const CommandMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const commands: Command[] = [
    {
      id: "projects",
      label: "View Projects",
      shortcut: "⌘P",
      icon: <FolderGit2 className="w-4 h-4" />,
      action: () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: "smooth" });
        }
        setIsOpen(false);
      },
    },
    {
      id: "contact",
      label: "Contact",
      shortcut: "⌘C",
      icon: <Mail className="w-4 h-4" />,
      action: () => {
        navigate("/contact");
        setIsOpen(false);
      },
    },
    {
      id: "github",
      label: "GitHub",
      shortcut: "⌘G",
      icon: <Github className="w-4 h-4" />,
      action: () => {
        window.open("https://github.com/aryanphougat", "_blank");
        setIsOpen(false);
      },
    },
    {
      id: "resume",
      label: "Resume",
      shortcut: "⌘R",
      icon: <FileText className="w-4 h-4" />,
      action: () => {
        // Placeholder - will be implemented later
        console.log("Resume action");
        setIsOpen(false);
      },
    },
  ];

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle menu with Cmd+K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
        setSearchQuery("");
        setSelectedIndex(0);
        return;
      }

      if (!isOpen) return;

      // Close with Escape
      if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
        setSearchQuery("");
        setSelectedIndex(0);
        return;
      }

      // Navigate with arrow keys
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((prev) =>
          prev < filteredCommands.length - 1 ? prev + 1 : prev
        );
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
      }

      // Execute command with Enter
      if (e.key === "Enter") {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedIndex, filteredCommands]);

  // Reset selected index when filtered commands change
  useEffect(() => {
    setSelectedIndex(0);
  }, [searchQuery]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />

          {/* Command Menu */}
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -20 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="pointer-events-auto w-full max-w-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-black border border-white/20 rounded-md shadow-2xl overflow-hidden">
                {/* Search Input */}
                <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
                  <Search className="w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search commands..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="flex-1 bg-transparent text-white placeholder:text-white/40 outline-none text-sm"
                    autoFocus
                  />
                  <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono text-white/40 bg-white/5 rounded border border-white/10">
                    ESC
                  </kbd>
                </div>

                {/* Command List */}
                <div className="py-2">
                  {filteredCommands.length === 0 ? (
                    <div className="px-4 py-8 text-center text-white/40 text-sm">
                      No commands found
                    </div>
                  ) : (
                    filteredCommands.map((cmd, index) => (
                      <button
                        key={cmd.id}
                        onClick={cmd.action}
                        onMouseEnter={() => setSelectedIndex(index)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-left transition-colors ${
                          selectedIndex === index
                            ? "bg-white/5 border-l-2 border-red-500"
                            : "border-l-2 border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`${
                              selectedIndex === index
                                ? "text-white"
                                : "text-white/60"
                            }`}
                          >
                            {cmd.icon}
                          </div>
                          <span
                            className={`text-sm ${
                              selectedIndex === index
                                ? "text-white"
                                : "text-white/80"
                            }`}
                          >
                            {cmd.label}
                          </span>
                        </div>
                        {cmd.shortcut && (
                          <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-1 text-[10px] font-mono text-white/40 bg-white/5 rounded border border-white/10">
                            {cmd.shortcut}
                          </kbd>
                        )}
                      </button>
                    ))
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
