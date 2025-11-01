/**
 * Minimal Footer Signature
 * Elite, confident, barely-there footer
 */

export const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-white/[0.04]">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-2">
          <p className="text-[11px] font-light text-white/30 tracking-wide">
            © 2025 AP
          </p>
          <span className="inline-block w-[3px] h-[3px] rounded-full bg-accent opacity-60"></span>
          <p className="text-[11px] font-light text-white/30 tracking-wide">
            Built with clarity & precision.
          </p>
        </div>
      </div>
    </footer>
  );
};
