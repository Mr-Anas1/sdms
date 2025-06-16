"use client";
import Head from "next/head";
import Navbar from "../Components/Navbar/Navbar";
import "./Trainings.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Cursor from "../Cursor";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSpring } from "framer-motion";
import { useRef } from "react";
import { useScrollAnimation } from "@/app/Hooks/useScrollAnimation";
import ScrollFromLeft from "../Components/ScrollFromLeft";
import ScrollRevealText from "../Components/ScrollRevealText";
import TestimonialContainer from "../Components/TestimonialContainer/TestimonialContainer";
import FluidCursor from "../FluidCursor";
import ScrollFromBottom from "../Components/ScrollFromBottom";
import ScrollFromRight from "../Components/ScrollFromRight";
import MainFooter from "../Components/MainFooter/MainFooter";

const testimonials = [
  {
    name: "Mohamed Ridwan A",
    text: "The 15-day UI/UX training with Figma was incredible. In just 13 days, I confidently designed an entire site. Tutor Bala’s clear, hands-on teaching made complex features like animations simple. Highly recommended!",
    position: "UI/UX In-Plant Training Attendee",
    image: "./images/ridwan.jpg",
  },
  {
    name: "Kaviya",
    text: "The UI/UX In-Plant training was fantastic. Initially challenging, but the tutor’s expert tips simplified everything. It sharpened my skills and transformed my design approach. A must for aspiring designers!",
    position: "UI/UX In-Plant Training Attendee",
    image: "./images/kaviya.jpeg",
  },
  {
    name: "Rifkhan",
    text: "The front-end training at Sabeena Digital was worth every penny. It covered core to advanced concepts with hands-on guidance. Complex topics became easy, and I now feel fully prepared to tackle real-world projects. A game-changing experience!",
    position: "Full-Stack Training Attendee",
    image: "./images/rifkhan.jpeg",
  },
  {
    name: "Anas",
    text: "The 15-day Figma training was a game-changer. Bala’s guidance made even advanced features like animations simple. The hands-on approach boosted my confidence in design. Highly recommend this program to elevate your skills!",
    position: "UI/UX In-Plant Training Attendee",
    image: "./images/anas1.png",
  },
  {
    name: "Mandeep Kaur",
    text: "Being a part of the Full Stack Web Development program at SDMS was an incredible experience. Devansh Sir was an amazing mentor—always supportive and insightful. I’m truly grateful for this opportunity and deeply appreciate Rukhsana Ma’am for making it possible.",
    position: "Full Stack Training Attendee",
    image: "./images/mandeep2.jpg",
  },
  {
    name: "Asheem",
    text: "The 15-day UI/UX training was a transformative experience. The tutor’s expert guidance made complex features like animations easy to grasp. I now feel confident in my design skills and ready to tackle real-world projects. Highly recommended!",
    position: "UI/UX In-Plant Training Attendee",
    image: "./images/asheem.jpg",
  },
];

export default function Trainings() {
  const desRef1 = useRef(null);
  const desRef2 = useRef(null);

  const { translateY: translateY1 } = useScrollAnimation(desRef1);
  const { translateY: translateY2 } = useScrollAnimation(desRef2);

  const refRight = useRef(null);
  const refLeft = useRef(null);

  const { scrollYProgress: scrollYProgressRight } = useScroll({
    target: refRight,
    offset: ["start 90%", "center 80%"],
  });

  const rawTranslateXRight = useTransform(
    scrollYProgressRight,
    [0, 1],
    [401.5, 0]
  );
  const rawRotateRight = useTransform(scrollYProgressRight, [0, 1], [10, 0]);
  const rawOpacityRight = useTransform(scrollYProgressRight, [0, 1], [0, 1]);

  const translateXRight = useSpring(rawTranslateXRight, {
    stiffness: 120,
    damping: 20,
    mass: 1,
  });
  const rotateRight = useSpring(rawRotateRight, {
    stiffness: 120,
    damping: 20,
    mass: 1,
  });
  const opacityRight = useSpring(rawOpacityRight, {
    stiffness: 120,
    damping: 20,
    mass: 1,
  });

  const { scrollYProgress: scrollYProgressLeft } = useScroll({
    target: refLeft,
    offset: ["start 90%", "center 80%"],
  });

  const rawTranslateXLeft = useTransform(
    scrollYProgressLeft,
    [0, 1],
    [-401, 0]
  );
  const rawRotateLeft = useTransform(scrollYProgressLeft, [0, 1], [-10, 0]);
  const rawOpacityLeft = useTransform(scrollYProgressLeft, [0, 1], [0, 1]);

  const translateXLeft = useSpring(rawTranslateXLeft, {
    stiffness: 120,
    damping: 20,
    mass: 1,
  });
  const rotateLeft = useSpring(rawRotateLeft, {
    stiffness: 120,
    damping: 20,
    mass: 1,
  });
  const opacityLeft = useSpring(rawOpacityLeft, {
    stiffness: 120,
    damping: 20,
    mass: 1,
  });

  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form1, setForm1] = useState("");
  const [form2, setForm2] = useState("");

  useEffect(() => {
    fetch("/api/formLinks")
      .then((res) => res.json())
      .then((data) => {
        setForm1(data.form1 || "");
        setForm2(data.form2 || "");
      });
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [dragConstraint, setDragConstraint] = useState(-1500); // Default for desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDragConstraint(-1000);
      } else {
        setDragConstraint(-1500);
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen to window resize

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="services-page">
      <FluidCursor />
      <Head>
        <title>Sabeena Digital Media Services</title>
        <meta
          name="description"
          content="Sabeena Digital Media Services homepage"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
      />
      {/* <Cursor darkMode={darkMode} /> */}
      <div className="content-container">
        <div className="training-container-main">
          <h2 className="services-page-heading">
            inplant trainings & <br /> internships
          </h2>
          <div className="services-page-service">
            <p className="service-page-head">
              Tailored for college students and young aspirants seeking
              certifications, our Inplant Trainings and Internships (online and
              offline) offer hands-on, real-world experience. These programs are
              crafted to guide you through the expanding tech universe,
              providing the skills and knowledge to launch your career.
            </p>
            <p className="service-page-text">
              With mentorship and practical learning, we prepare you to tackle
              challenges and succeed in today’s dynamic digital space, equipping
              you with the certifications that fuel your professional growth and
              readiness for the tech galaxy..
            </p>
          </div>
        </div>

        <div className="trainings-container">
          <div className="main-container">
            {/* First Sub-Container */}
            <div className="sub-container normal">
              {/* Image Content */}
              <div className="image-content" ref={refLeft}>
                <motion.img
                  src="./images/test3.jpg"
                  alt="Scroll Image"
                  style={{
                    translateX: translateXLeft,
                    rotate: rotateLeft,
                    opacity: opacityLeft,
                  }}
                  className="services-image one"
                />
              </div>
              {/* Text Content */}
              <div
                ref={desRef1}
                style={{ translateY: translateY1 }}
                className="text-content one"
              >
                <div className="line-wrapper">
                  <ScrollFromBottom>
                    <h2 className="text-content-head">inplant trainings</h2>
                  </ScrollFromBottom>
                </div>
                <div className="line-wrapper">
                  <ScrollFromBottom>
                    <h2 className="text-content-para">
                      Spend 15 days building real skills that actually matter.
                      It’s hands-on, practical, and built to get you ready
                      for the industry.
                    </h2>
                  </ScrollFromBottom>
                </div>

                <div className="line-wrapper-btn">
                  <ScrollFromBottom>
                    <a
                      href="https://forms.gle/YshyRVNa9VmobMet7"
                      target="_blank"
                      className="services-text-button"
                    >
                      Register
                    </a>
                  </ScrollFromBottom>
                </div>
              </div>
            </div>

            {/* Second Sub-Container */}
            <div className="sub-container reverse">
              {/* Image Content */}
              <div className="image-content" ref={refRight}>
                <motion.img
                  src="./images/test4.jpg"
                  alt="Scroll Image"
                  style={{
                    translateX: translateXRight,
                    rotate: rotateRight,
                    opacity: opacityRight,
                  }}
                  className="services-image two"
                />
              </div>
              {/* Text Content */}
              <div
                ref={desRef2}
                style={{ translateY: translateY2 }}
                className="text-content two"
              >
                <div className="line-wrapper">
                  <ScrollFromBottom>
                    <h2 className="text-content-head">internships</h2>
                  </ScrollFromBottom>
                </div>
                <div className="line-wrapper">
                  <ScrollFromBottom>
                    <p className="text-content-para">
                      UI/UX Designing <br />
                      Full Stack Development <br />
                      Data Science
                    </p>
                  </ScrollFromBottom>
                </div>

                <div className="line-wrapper-btn">
                  <ScrollFromBottom>
                    <a
                      href="https://forms.gle/xgxqXt9zHQcVMYPi6"
                      target="_blank"
                      className="services-text-button"
                    >
                      Register
                    </a>
                  </ScrollFromBottom>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials-container" id="testimonials">
        <div className="testimonials-heading-main">
          <ScrollFromLeft>
            <ScrollRevealText>
              <h2 className="testimonials-heading-training">
                <span>trainee's</span>
              </h2>
            </ScrollRevealText>
          </ScrollFromLeft>

          <ScrollFromRight>
            <ScrollRevealText>
              <h2 className="testimonials-heading-training">
                <span>view</span>
              </h2>
            </ScrollRevealText>
          </ScrollFromRight>
        </div>

        <TestimonialContainer testimonials={testimonials} />
      </div>
      <MainFooter />
    </div>
  );
}
