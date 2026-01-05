"use client";

import React from "react";
import "./MainFooter.css";
import ScrollFromLeft from "../ScrollFromLeft";
import ScrollRevealText from "../ScrollRevealText";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const MainFooter = () => {
  const year = new Date().getFullYear();
  return (
    <div className="mainFooter">
      <div className="time-to-roar-head-main">
        <ScrollFromLeft>
          <ScrollRevealText>
            <h2 className="time-to-roar-head">
              <span>time to</span>
              <br /> <span>roar!</span>
            </h2>
          </ScrollRevealText>
        </ScrollFromLeft>
      </div>
      <div className="time-to-roar">
        {/* Top Horizontal Line */}
        <hr className="horizontal-line" />

        {/* Middle Content */}
        <div className="contact-row">
          {/* Email Section */}
          <div className="contact-item">
            <small>Email</small>
            <p><a href="mailto:info@sabeenadigitalms.in">info@sabeenadigitalms.in</a></p>
          </div>

          {/* Phone Number Section */}
          <div className="contact-item">
            <small>Phone</small>
            <p><a href="tel:+919345398449">+91 9345398449</a></p>
          </div>
          <div className="contact-item">
            <small>Address</small>
            <p>
              <a href="https://maps.app.goo.gl/ge41QPGwaFKT5tGX9">F-2, MSS Enclave, Basha Street, Choolaimedu, Chennai, Tamil Nadu,
              India</a>
            </p>
          </div>
        </div>

        {/* Bottom Horizontal Line */}
        <hr className="horizontal-line" />

        <div className="footer-end">
          <div className="copyright">
            <p>© {year} SDMS</p>
          </div>
          <div
            className="up-arrow"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FaRegArrowAltCircleUp />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
