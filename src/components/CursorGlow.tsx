import { useEffect, useRef } from "react";

export const CursorGlow = () => {
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Only enable on desktop with mouse
        const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        const handleMouseMove = (e: MouseEvent) => {
            if (!glowRef.current) return;

            glowRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Don't render on touch devices
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
        return null;
    }

    return (
        <div
            ref={glowRef}
            className="fixed pointer-events-none z-50 mix-blend-screen"
            style={{
                width: "400px",
                height: "400px",
                marginLeft: "-200px",
                marginTop: "-200px",
                background: "radial-gradient(circle, rgba(239, 68, 68, 0.08) 0%, transparent 70%)",
                filter: "blur(40px)",
                transition: "transform 0.15s ease-out",
            }}
        />
    );
};
