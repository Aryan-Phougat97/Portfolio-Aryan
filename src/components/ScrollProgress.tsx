import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        const handleScroll = () => {
            // Show progress bar after scrolling past hero section (roughly 100vh)
            setIsVisible(window.scrollY > window.innerHeight * 0.5);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-50"
            style={{
                scaleX,
                opacity: isVisible ? 1 : 0,
            }}
            transition={{ opacity: { duration: 0.3 } }}
        />
    );
};
