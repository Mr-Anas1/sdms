"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Footer.css";

const Footer = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate the footer heading on each scroll into view
    gsap.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 }, // Starting state
      {
        y: 0,
        opacity: 1,
        duration: 1.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%", // Animation starts when heading is 80% in view
          end: "bottom 20%", // Animation ends when heading is almost out of view
          toggleActions: "play none none none", // Replay animation on scroll down
          scrub: false, // Disable scrub for discrete animation
        },
      }
    );
  }, []);

  return (
    <footer className="footer-container">
      {/* Animated Footer Heading */}
      <p className="footer-head">
        connect with us <br /> across the <br /> cosmos
      </p>

      {/* Social Media Section */}
      <div className="social-media">
        <div
          className="social-row"
          onClick={() => window.open("https://linkedin.com/", "_blank")}
        >
          <p className="social-heading">LinkedIn</p>
          <div className="social-icon">
            <img
              src="./images/linkedin.svg" // Replace with your LinkedIn icon's path
              alt="LinkedIn Icon"
              className="icon"
            />
          </div>
        </div>
        <hr className="divider" />

        <div
          className="social-row"
          onClick={() => window.open("https://instagram.com/", "_blank")}
        >
          <p className="social-heading">Instagram</p>
          <div className="social-icon">
            <img
              src="./images/instagram.svg" // Replace with your Instagram icon's path
              alt="Instagram Icon"
              className="icon"
            />
          </div>
        </div>
        <hr className="divider" />

        <div
          className="social-row"
          onClick={() => window.open("https://facebook.com/", "_blank")}
        >
          <p className="social-heading">Facebook</p>
          <div className="social-icon">
            <img
              src="./images/facebook.svg" // Replace with your Facebook icon's path
              alt="Facebook Icon"
              className="icon"
            />
          </div>
        </div>
        <hr className="divider" />
      </div>
    </footer>
  );
};

export default Footer;
