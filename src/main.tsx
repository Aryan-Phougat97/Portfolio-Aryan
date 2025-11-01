import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initConsoleEasterEgg } from "./lib/console-easter-egg";
import { initCommandPaletteListener } from "./lib/command-palette";

// Initialize console easter egg
initConsoleEasterEgg();

// Initialize command palette listener (Cmd/Ctrl + K)
initCommandPaletteListener();

createRoot(document.getElementById("root")!).render(<App />);
