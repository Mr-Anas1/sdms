import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./Stats.css";
import { useMotionValue } from "framer-motion";

// Animation variants for cards

import StatCard from "./StatCard";

export default function StatsComponent() {
  return (
    <div className="stats-container">
      {/* Card 1 */}
      <div className="stat-card left card1">
        <div className="stat-value">100+</div>
        <div className="stat-label">
          PROJECTS <br />
          COMPLETED
        </div>
      </div>

      {/* Card 2 */}
      <div className="stat-card right card2">
        <div className="stat-value">5+</div>
        <div className="stat-label">
          SUCCESSFUL
          <br /> PARTNERSHIPS
        </div>
      </div>

      {/* Card 3 */}
      <div className="stat-card left card3">
        <div className="stat-value">10+</div>
        <div className="stat-label">
          CREATIVE <br />
          INNOVATORS
        </div>
      </div>

      {/* Card 4 */}
      <div className="stat-card right card4">
        <div className="stat-value">200+</div>
        <div className="stat-label">
          HOURS OF <br /> DIGITAL SOLUTIONS
        </div>
      </div>
    </div>
  );
}
