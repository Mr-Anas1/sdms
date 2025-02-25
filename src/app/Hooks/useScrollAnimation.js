import { useScroll, useTransform, useSpring } from "framer-motion";

export const useScrollAnimation = (ref, offset = ["start 140%", "end 90%"]) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const rawTranslateY = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);

  const translateY = useSpring(rawTranslateY, {
    stiffness: 200,
    damping: 20,
    mass: 0.8,
  });

  return { scrollYProgress, translateY };
};
