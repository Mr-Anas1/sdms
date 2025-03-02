"use client";

import React from "react";
import "./MainFooter.css";
import ScrollFromLeft from "../ScrollFromLeft";
import ScrollRevealText from "../ScrollRevealText";

const MainFooter = () => {
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
            <p>sabeenadigitalms@gmail.com</p>
          </div>

          {/* Phone Number Section */}
          <div className="contact-item">
            <small>Phone</small>
            <p>9345398449</p>
          </div>

          {/* Website Section */}
          {/* <div className="contact-item web">
            <small>Website</small>
            <p>sabeenadigitalmediaservices.com</p>
          </div> */}
        </div>

        {/* Bottom Horizontal Line */}
        <hr className="horizontal-line" />
      </div>
    </div>
  );
};

export default MainFooter;
