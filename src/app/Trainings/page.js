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

const testimonials = [
  {
    name: "Mohamed Ridwan A",
    text: "The 15-day inplant training on UI/UX design with Figma by Sabeena Digital Media Services was incredible. By the end of just 13 days, I had designed an entire UI/UX site with confidence! Tutor Bala’s teaching was clear, practical, and engaging, making complex features like animations easy to master.With a hands-on approach and a supportive team, this training has truly elevated my design skills. Highly recommended for anyone looking to excel in UI/UX design",
    position: "UI/UX In-Plant Training Attendee",
    image: "./images/ridwan.jpeg",
  },
  {
    name: "Kaviya",
    text: "The UI/UX In-Plant training was a fantastic experience. Initially, it felt challenging to perfect my designs, but the tutor’s expert guidance and practical tips made all the difference.The training broke down complex concepts into simple steps, and by the end, I was able to create a complete UI/UX project confidently. It was an enriching journey that sharpened my skills and transformed the way I approach design. Highly recommended for aspiring designers!",
    position: "UI/UX In-Plant Training Attendee",
    image: "./images/kaviya.jpeg",
  },
  {
    name: "Rifkhan",
    text: "The front-end development training at Sabeena Digital Media Services was absolutely worth every penny. The course gave me the skills to truly excel in front-end development, from mastering core concepts to working with advanced techniques. The practical, hands-on approach and expert guidance made complex topics easy to grasp. I now feel fully equipped to take on real-world projects.",
    position: "Full-Stack Training Attendee",
    image: "./images/rifkhan.jpeg",
  },
  {
    name: "Anas",
    text: "Attending the 15-day Figma training by Sabeena Digital Media Services was a game-changer. Bala’s clear guidance made even advanced features like animations easy to master.The hands-on approach boosted my confidence to create impactful designs. I highly recommend this program to anyone looking to elevate their design skills!",
    position: "UI/UX In-Plant Training Attendee",
    image: "./images/anas1.png",
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
    offset: ["start end", "center center"],
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
    offset: ["start end", "center center"],
  });

  const rawTranslateXLeft = useTransform(
    scrollYProgressLeft,
    [0, 1],
    [-401.5, 0]
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

  const [darkMode, setDarkMode] = useState(false);
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

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const cards = [
    "./images/laravel.png",
    "./images/less.png",
    "./images/angular.png",
    "./images/bootstrap.png",
  ];
  const [dragConstraint, setDragConstraint] = useState(-1500); // Default for desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        // Mobile screen width (adjust as needed)
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
              <div className="image-content">
                <motion.img
                  src="./images/training1.jpeg"
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
              <motion.div
                ref={desRef1}
                style={{ translateY: translateY1 }}
                className="text-content one"
              >
                <h2 className="text-content-head">inplant trainings</h2>
                <p className="text-content-para">
                  UI/UX, Full Stack Development, DataScience, Graphic Designing,
                  Content Writing & Trainings on various coding languages.
                </p>

                <a
                  href="https://forms.gle/DtNyVJhmAtUyB6jQ7"
                  target="_blank"
                  className="services-text-button"
                >
                  Register
                </a>
              </motion.div>
            </div>

            {/* Second Sub-Container */}
            <div className="sub-container reverse">
              {/* Image Content */}
              <div className="image-content">
                <motion.img
                  src="./images/training2.jpeg"
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
              <motion.div
                ref={desRef2}
                style={{ translateY: translateY2 }}
                className="text-content two"
              >
                <h2 className="text-content-head">internships</h2>
                <p className="text-content-para">
                  UI/UX Designing <br />
                  Full Stack Development <br />
                  Data Science
                </p>
                <a
                  href="https://forms.gle/xgxqXt9zHQcVMYPi6"
                  target="_blank"
                  className="services-text-button"
                >
                  Register
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimonials-container" id="testimonials">
        <h2 className="testimonials-heading">
          participant's
          <br />
          testimony
        </h2>
        <motion.div
          className="testimonials-wrapper"
          drag="x"
          dragConstraints={{ left: dragConstraint, right: 0 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="testimonial-card"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="testimonial-text">"{testimonial.text}"</p>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <h3 className="testimonial-name">{testimonial.name}</h3>
              <span className="testimonial-position">
                {testimonial.position}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="time-to-roar-head-main">
        <section className="scroll-reveal">
          <p className="time-to-roar-head">
            <span>time to </span>
            <br /> <span>roar!</span>
          </p>
        </section>
      </div>
      <div className="time-to-roar">
        {/* Top Horizontal Line */}
        <hr className="horizontal-line" />

        {/* Middle Content */}
        <div className="contact-row">
          {/* Email Section */}
          <div className="contact-item">
            <small>Email</small>
            <p>sabeenadigitalmediaservices@gmail.com</p>
          </div>

          {/* Phone Number Section */}
          <div className="contact-item">
            <small>Phone</small>
            <p>1234567890</p>
          </div>

          {/* Website Section */}
          <div className="contact-item web">
            <small>Website</small>
            <p>sabeenadigitalmediaservices.com</p>
          </div>
        </div>

        {/* Bottom Horizontal Line */}
        <hr className="horizontal-line" />
      </div>
    </div>
  );
}
