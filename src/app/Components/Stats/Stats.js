import React from "react";
import { motion } from "framer-motion";
import "./Stats.css";

// Animation variants for cards
const cardVariants = (direction) => {
  const directions = {
    left: { opacity: 0, x: -100 },
    top: { opacity: 0, x: 100 },
    bottom: { opacity: 0, x: -100 },
    right: { opacity: 0, x: 100 },
  };

  return {
    hidden: directions[direction],
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
  };
};

export default function StatsComponent() {
  return (
    <div className="stats-container">
      {/* Card 1 */}
      <motion.div
        className="stat-card card1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants("left")}
      >
        <div className="stat-value">100+</div>
        <div className="stat-label">
          PROJECTS <br />
          COMPLETED
        </div>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        className="stat-card card2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants("top")}
      >
        <div className="stat-value">5+</div>
        <div className="stat-label">
          SUCCESSFUL
          <br /> PARTNERSHIPS
        </div>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        className="stat-card card3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants("bottom")}
      >
        <div className="stat-value">10+</div>
        <div className="stat-label">
          CREATIVE <br />
          INNOVATORS
        </div>
      </motion.div>

      {/* Card 4 */}
      <motion.div
        className="stat-card card4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants("right")}
      >
        <div className="stat-value">200+</div>
        <div className="stat-label">
          HOURS OF <br /> DIGITAL SOLUTIONS
        </div>
      </motion.div>
    </div>
  );
}
