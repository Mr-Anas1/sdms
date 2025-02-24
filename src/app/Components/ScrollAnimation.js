import { motion } from "framer-motion";
import { useRef } from "react";
import { useScrollSpring } from "../Hooks/useScrollSpring";
const ScrollAnimation = ({
  from = "100%",
  to = "0%",
  offset = ["start end", "end start"],
  className = "",
  children,
}) => {
  const ref = useRef(null);
  const translateY = useScrollSpring(ref, from, to, offset);

  return (
    <motion.div ref={ref} style={{ translateY }} className={className}>
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
