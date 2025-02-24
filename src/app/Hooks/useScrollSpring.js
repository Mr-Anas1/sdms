import { useScroll, useTransform, useSpring } from "framer-motion";

export const useScrollSpring = (
  ref,
  from = "100%",
  to = "0%",
  offset = ["start end", "center center"]
) => {
  const { scrollYProgress } = useScroll({
    target: ref,
    offset,
  });

  const rawTranslate = useTransform(scrollYProgress, [0, 1], [from, to]);

  const translate = useSpring(rawTranslate, {
    stiffness: 180,
    damping: 30,
    mass: 0.9,
  });

  return translate;
};
