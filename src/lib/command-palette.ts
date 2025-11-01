/**
 * Command Palette Listener
 * Listens for Cmd/Ctrl + K keyboard shortcut
 * Currently triggers custom event - UI can be built later
 */

export const initCommandPaletteListener = () => {
  const handleKeyDown = (event: KeyboardEvent) => {
    // Cmd+K on Mac, Ctrl+K on Windows/Linux
    if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
      event.preventDefault();

      // Dispatch custom event for future command palette UI
      const commandPaletteEvent = new CustomEvent('ap:command-palette', {
        detail: { timestamp: Date.now() }
      });
      window.dispatchEvent(commandPaletteEvent);

      // Optional: Log to console for development
      console.log('%cCommand Palette triggered (UI pending)', 'color: #E50914; font-weight: 600;');
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  // Return cleanup function
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
};

// Optional: Listen for the custom event
export const onCommandPalette = (callback: () => void) => {
  const handler = () => callback();
  window.addEventListener('ap:command-palette', handler);

  return () => {
    window.removeEventListener('ap:command-palette', handler);
  };
};
