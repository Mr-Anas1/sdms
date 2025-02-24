import { motion } from "framer-motion";
import { useScrollFromLeft } from "../Hooks/useScrollFromLeft";

const ScrollFromLeft = ({ children }) => {
  const { ref, translateX } = useScrollFromLeft();

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

export default ScrollFromLeft;
