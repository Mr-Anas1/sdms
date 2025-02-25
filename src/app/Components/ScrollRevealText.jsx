import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ScrollRevealText = ({ children }) => {
  const ref = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode based on class on body
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains("dark-mode"));
    };

    checkDarkMode();
    // Listen for class changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  // Track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Animate background size
  const backgroundSize = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 100%", "100% 100%"]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        width: "fit-content",
        padding: "5px",
        boxSizing: "border-box",
        backgroundRepeat: "no-repeat",
        backgroundImage: isDarkMode
          ? "linear-gradient(90deg, #ffffff, #ffffff)"
          : "linear-gradient(90deg, #000000, #000000)",
        backgroundColor: isDarkMode ? "#808080" : "#DCE1E1", // Gray for dark mode
        backgroundSize: backgroundSize,
        WebkitBackgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealText;
