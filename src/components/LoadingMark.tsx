/**
 * Minimal Loading Mark - "AP_" with blinking underscore
 * Extremely minimal, no animation noise
 */

import { useEffect, useState } from 'react';

export const LoadingMark = () => {
  const [showUnderscore, setShowUnderscore] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowUnderscore((prev) => !prev);
    }, 530); // Subtle blink timing

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black">
      <div className="font-mono text-white text-sm tracking-wider">
        AP{showUnderscore ? '_' : '\u00A0'}
      </div>
    </div>
  );
};
