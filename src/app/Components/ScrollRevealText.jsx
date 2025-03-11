import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const ScrollRevealText = ({ children }) => {
  const ref = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.body.classList.contains("dark-mode"));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "1% 50%"],
  });

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
        paddingTop: "10px",
        paddingRight: "10px",
        paddingBottom: "15px",
        paddingLeft: "0px",
        boxSizing: "border-box",
        backgroundRepeat: "no-repeat",
        backgroundImage: isDarkMode
          ? "linear-gradient(90deg, #ffffff, #ffffff)"
          : "linear-gradient(90deg, #000000, #000000)",
        backgroundColor: isDarkMode ? "#808080" : "#DCE1E1",
        backgroundSize: backgroundSize,
        WebkitBackgroundClip: "text",
        color: "transparent",
        marginTop: "-25px",
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealText;
