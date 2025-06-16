"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import ScrollingText from "../ScollingText/ScrollingText";
import "./Testimonials.css";
import { useRef } from "react";
import ScrollFromLeft from "../ScrollFromLeft";
import ScrollRevealText from "../ScrollRevealText";
import TestimonialContainer from "../TestimonialContainer/TestimonialContainer";
import ScrollFromRight from "../ScrollFromRight";

const testimonials = [
  {
    name: "Melissa Hurtado",
    text: "Rukshana of Sabeena Digital Media Services showcases exceptional skills in social media management, storytelling, and content creation. Her positive energy and dedication to excellence make every collaboration a delight.",
    position: "Property Manager, Self employed",
    image: "./images/MelissaHurta.jpeg",
  },
  {
    name: "Mariel McCann",
    text: "Rukshana is a creative and talented social media manager who helped Shooting Stars Foundation with impactful content. Her patience and attention to feedback make her an integral part of our digital strategy.",
    position: "Shooting Stars (Former) Senior Program Manager",
    image: "./images/Mariel.jpeg",
  },
  {
    name: "Vidhya",
    text: "Rukshana was instrumental in driving marketing efforts for our Learning Series at Right Dots. Her creativity, professionalism, and dedication significantly contributed to our success.",
    position: "Founder, Right Dots",
    image: "./images/vidhya.jpg",
  },
  {
    name: "Shivaranjani",
    text: "Rukshana crafts high-impact content that inspires and engages. Her passion and professionalism make her a reliable choice for quality content delivered on time.",
    position: "Volunteer, Government School",
    image: "./images/shivaranjani.jpeg",
  },
  {
    name: "Chitra Shah",
    text: "SDMS transformed complex data into clear, engaging designs for our annual report and brochure. Rukshana’s creativity and attention to detail exceeded our expectations.",
    position: "Director, Satya Special School",
    image: "./images/chitra.jpg",
  },
  {
    name: "Ratna Singh",
    text: "Sabeena Digital Media Services has been a game-changer for Earth Safety Valve, managing events, social media, and impactful content with unmatched creativity and professionalism.",
    position: "Founder, Earth Safety Valve",
    image: "./images/ratna.jpeg",
  },
  {
    name: "Dnc Teja",
    text: "Working with SDMS felt like collaborating with a trusted friend. They understood my vision and delivered results that exceeded expectations with creativity and care.",
    position: "Director, Proven Group of Companies",
    image: "./images/teja.jpg",
  },
  {
    name: "Mohamed Misfer",
    text: "Rukshana's website development service boosted my business by providing customers with all the necessary details online, reducing inquiry calls and increasing sales-ready leads.",
    position: "Founder, Misfer Media",
    image: "./images/misfer.jpeg",
  },
  {
    name: "Nitin JBS",
    text: "I appreciate SDMS for organizing Creatathon for a Cause, inspiring students to showcase their talents and fostering creativity through thoughtful planning and collaboration.",
    position: "Product Manager @ Way.com | Volunteer",
    image: "./images/nitin.jpeg",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container" id="testimonials">
      <div className="testimonials-heading-main">
        <ScrollFromLeft>
          <ScrollRevealText>
            <h2 className="testimonials-heading">
              <span>partner's</span>
            </h2>
          </ScrollRevealText>
        </ScrollFromLeft>

        <ScrollFromRight>
          <ScrollRevealText>
            <h2 className="testimonials-heading">
              <span>view</span>
            </h2>
          </ScrollRevealText>
        </ScrollFromRight>
      </div>

      <div className="testimonials-section-content">
        <TestimonialContainer testimonials={testimonials} />
      </div>
    </div>
  );
};

export default Testimonials;
