import { useRef } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";

export const useScrollFromLeft = (offset = ["start 100%", "end 60%"]) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const rawTranslateX = useTransform(scrollYProgress, [0, 1], ["-100%", "0%"]);

  const translateX = useSpring(rawTranslateX, {
    stiffness: 200,
    damping: 20,
    mass: 0.8,
  });

  return { ref, translateX };
};
