"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./Footer.css";
import ScrollRevealText from "../ScrollRevealText";
import ScrollFromLeft from "../ScrollFromLeft";

const Footer = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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
      <div className="footer-main">
        <ScrollFromLeft>
          <ScrollRevealText>
            <p className="footer-head">
              <span>connect with us</span>
              {/* <br /> <span>across the</span> <br />{" "}
            <span>cosmos</span> */}
            </p>
          </ScrollRevealText>
        </ScrollFromLeft>
      </div>

      {/* Social Media Section */}
      <div className="social-media-container">
        <div className="social-media">
          <div
            className="social-row"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/sabeena-digital-media-services/posts/?feedView=all",
                "_blank"
              )
            }
          >
            <p className="social-heading">LinkedIn</p>
            <div className="social-icon">
              <img
                src="./images/linkedin.svg"
                alt="LinkedIn Icon"
                className="icon"
              />
            </div>
          </div>
          <hr className="divider" />

          <div
            className="social-row"
            onClick={() =>
              window.open(
                "https://www.instagram.com/sabeena.digital_media/",
                "_blank"
              )
            }
          >
            <p className="social-heading">Instagram</p>
            <div className="social-icon">
              <img
                src="./images/instagram.svg"
                alt="Instagram Icon"
                className="icon"
              />
            </div>
          </div>
          <hr className="divider" />

          <div
            className="social-row"
            onClick={() =>
              window.open(
                "https://wa.me/919345398449",
                "_blank"
              )
            }
          >
            <p className="social-heading">Whatsapp</p>
            <div className="social-icon">
              <img
                src="./images/whatsapp.svg"
                alt="Facebook Icon"
                className="icon"
              />
            </div>
          </div>
          <hr className="divider" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
