import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import "../ServicesPage/servicesPage.css";

const HorizontalScrollSection = () => {
  const sectionRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div
      ref={sectionRef}
      className="scroll-section"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="scroll-container"
        style={{
          x: isHovered ? translateX : "0%",
          display: "flex",
          gap: "20px",
        }}
      >
        {[
          {
            heading: "Foundational Planning",
            description: "Project Planning, Competitor Analysis, Contract",
          },
          {
            heading: "Technology & Development",
            description: "Web Development, E-commerce Development, SAAS",
          },
          {
            heading: "Testing & Launch",
            description: "Usability Testing, Performance Testing, Security",
          },
          {
            heading: "Evaluate & Evolve",
            description: "Website Optimization, Server Performance, Reviews",
          },
        ].map((card, index) => (
          <div className="card" key={index}>
            <div className="cardContent">
              <div className="sequenceNumber">{index + 1}</div>
              <h2 className="cardHeading">{card.heading}</h2>
              <p className="cardDescription">{card.description}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default HorizontalScrollSection;
