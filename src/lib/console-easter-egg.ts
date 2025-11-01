/**
 * Console Easter Egg - Private Club Vibe
 * Displays a clean, confident welcome message for developers
 */

export const initConsoleEasterEgg = () => {
  const styles = {
    title: 'color: #E50914; font-size: 14px; font-weight: 600; font-family: monospace;',
    text: 'color: #ffffff; font-size: 12px; font-weight: 400; font-family: monospace;',
    muted: 'color: #666666; font-size: 11px; font-weight: 400; font-family: monospace;',
    accent: 'color: #E50914; font-size: 11px; font-weight: 500; font-family: monospace;'
  };

  console.log('%cAP_', styles.title);
  console.log('%c┌─────────────────────────────────────┐', styles.muted);
  console.log('%c│ %cWelcome, Developer%c                   │', styles.muted, styles.text, styles.muted);
  console.log('%c│                                     │', styles.muted);
  console.log('%c│ %cYou found the right place.%c         │', styles.muted, styles.text, styles.muted);
  console.log('%c│ %cThis site was built with precision%c │', styles.muted, styles.text, styles.muted);
  console.log('%c│ %cand clarity. No noise.%c             │', styles.muted, styles.text, styles.muted);
  console.log('%c│                                     │', styles.muted);
  console.log('%c│ %cStack:%c React + TypeScript + Vite  │', styles.muted, styles.accent, styles.muted);
  console.log('%c│ %cDesign:%c Pure minimalism           │', styles.muted, styles.accent, styles.muted);
  console.log('%c│                                     │', styles.muted);
  console.log('%c│ %cRespect.%c                           │', styles.muted, styles.text, styles.muted);
  console.log('%c└─────────────────────────────────────┘', styles.muted);
  console.log(' ');
};
