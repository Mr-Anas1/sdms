import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Stats.css";
import { useSpring } from "framer-motion";

export default function StatsComponent() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const createSmoothSpring = (value) =>
    useSpring(value, { stiffness: 250, damping: 30, mass: 0.9 });

  // Card 1 animations
  const rawCard1X = useTransform(scrollYProgress, [0, 0.2], [-200, 0]);
  const rawCard1Rotate = useTransform(scrollYProgress, [0, 0.2], [-10, 0]);
  const rawCard1Opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  const card1X = createSmoothSpring(rawCard1X);
  const card1Rotate = createSmoothSpring(rawCard1Rotate);
  const card1Opacity = createSmoothSpring(rawCard1Opacity);

  // Card 2 animations
  const rawCard2X = useTransform(scrollYProgress, [0.15, 0.35], [200, 0]);
  const rawCard2Rotate = useTransform(scrollYProgress, [0.15, 0.35], [10, 0]);
  const rawCard2Opacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  const card2X = createSmoothSpring(rawCard2X);
  const card2Rotate = createSmoothSpring(rawCard2Rotate);
  const card2Opacity = createSmoothSpring(rawCard2Opacity);

  // Card 3 animations
  const rawCard3X = useTransform(scrollYProgress, [0.3, 0.5], [-200, 0]);
  const rawCard3Rotate = useTransform(scrollYProgress, [0.3, 0.5], [-10, 0]);
  const rawCard3Opacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);

  const card3X = createSmoothSpring(rawCard3X);
  const card3Rotate = createSmoothSpring(rawCard3Rotate);
  const card3Opacity = createSmoothSpring(rawCard3Opacity);

  // Card 4 animations
  const rawCard4X = useTransform(scrollYProgress, [0.45, 0.65], [200, 0]);
  const rawCard4Rotate = useTransform(scrollYProgress, [0.45, 0.65], [10, 0]);
  const rawCard4Opacity = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);

  const card4X = createSmoothSpring(rawCard4X);
  const card4Rotate = createSmoothSpring(rawCard4Rotate);
  const card4Opacity = createSmoothSpring(rawCard4Opacity);

  return (
    <div className="stats-container" ref={containerRef}>
      {/* Card 1 - From Left */}
      <motion.div
        className="stat-card left card1"
        style={{
          translateX: card1X,
          rotate: card1Rotate,
          opacity: card1Opacity,
        }}
      >
        <div className="stat-value">100+</div>
        <div className="stat-label">
          PROJECTS <br /> COMPLETED
        </div>
      </motion.div>

      {/* Card 2 - From Right */}
      <motion.div
        className="stat-card right card2"
        style={{
          translateX: card2X,
          rotate: card2Rotate,
          opacity: card2Opacity,
        }}
      >
        <div className="stat-value">05+</div>
        <div className="stat-label">
          SUCCESSFUL <br /> PARTNERSHIPS
        </div>
      </motion.div>

      {/* Card 3 - From Left */}
      <motion.div
        className="stat-card left card3"
        style={{
          translateX: card3X,
          rotate: card3Rotate,
          opacity: card3Opacity,
        }}
      >
        <div className="stat-value">10+</div>
        <div className="stat-label">
          CREATIVE <br /> INNOVATORS
        </div>
      </motion.div>

      {/* Card 4 - From Right */}
      <motion.div
        className="stat-card right card4"
        style={{
          translateX: card4X,
          rotate: card4Rotate,
          opacity: card4Opacity,
        }}
      >
        <div className="stat-value">200+</div>
        <div className="stat-label">
          HOURS OF <br /> DIGITAL SOLUTIONS
        </div>
      </motion.div>
    </div>
  );
}
