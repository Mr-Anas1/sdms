import { useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

export const useScrollFromBottom = (offset = ["start 80%", "end 80%"]) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const rawTranslateY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  const translateY = useSpring(rawTranslateY, {
    stiffness: 300,
    damping: 40,
    mass: 0.8,
  });

  return { ref, translateY };
};
