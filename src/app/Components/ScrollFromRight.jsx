import { motion } from "framer-motion";
import { useScrollFromRight } from "../Hooks/useScrollFromRight";

const ScrollFromRight = ({ children }) => {
  const { ref, translateX } = useScrollFromRight();

  return (
    <motion.div
      ref={ref}
      style={{
        x: translateX,
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFromRight;
