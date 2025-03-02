"use client";

import React, { useState, useEffect } from "react";
import "./ScrollingText.css";

const ScrollingText = () => {
  const firstLine = "- beyond boundaries - beyond boundaries "
    .repeat(30)
    .trim();
  const secondLine = "- venture beyond the digital horizon ".repeat(30).trim();

  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = document.querySelector(".scrolling-text");
      if (!container) return;

      const { left, top } = container.getBoundingClientRect();
      setPosition({ x: e.clientX - left, y: e.clientY - top });
      setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const textElements = document.querySelectorAll(".scrolling-text p");
    textElements.forEach((text) => {
      text.addEventListener("mousemove", handleMouseMove);
      text.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      textElements.forEach((text) => {
        text.removeEventListener("mousemove", handleMouseMove);
        text.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div className="scrolling-text-container">
      {/* Glow Effect */}
      <div
        className="glowing-circle"
        style={{
          transform: `translate(${position.x - 300}px, ${position.y - 100}px)`,
          opacity: visible ? 1 : 0,
        }}
      />

      {/* Scrolling Text */}
      <div className="scrolling-text">
        <p className="scroll-right">{firstLine}</p>
      </div>
      <div className="scrolling-text">
        <p className="scroll-left">{secondLine}</p>
      </div>
    </div>
  );
};

export default ScrollingText;
