"use client"; // For client-side animations with GSAP
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Stats from "../Stats/Stats";
import Link from "next/link";
import "./Services.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useSpring } from "framer-motion";
import { useScrollAnimation } from "@/app/Hooks/useScrollAnimation";
import ScrollRevealText from "@/app/Components/ScrollRevealText";
import ScrollFromLeft from "../ScrollFromLeft";
import ScrollFromRight from "../ScrollFromRight";

const Services = () => {
  const refRight = useRef(null);
  const refLeft = useRef(null);
  const lineRef = useRef(null);
  const desRef1 = useRef(null);
  const desRef2 = useRef(null);
  const desRef3 = useRef(null);
  const desRef4 = useRef(null);

  const { translateY: translateY1 } = useScrollAnimation(desRef1);
  const { translateY: translateY2 } = useScrollAnimation(desRef2);
  const { translateY: translateY3 } = useScrollAnimation(desRef3);
  const { translateY: translateY4 } = useScrollAnimation(desRef4);

  // Line Scroll Progress
  const { scrollYProgress: scrollYProgressLine } = useScroll({
    target: lineRef,
    offset: ["start 140%", "end 90%"],
  });

  const rawTranslateYLine = useTransform(
    scrollYProgressLine,
    [0, 1],
    ["100%", "0%"]
  );
  const translateYLine = useSpring(rawTranslateYLine, {
    stiffness: 200,
    damping: 20,
    mass: 0.8,
  });

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

  // Scroll tracking for left image
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

  const servicesData = {
    service1: {
      imgSrc: "./images/test1.jpg",
      title: "development",
      list: [
        "Software as a Service (SaaS)",
        "Automation / API Creation",
        "Website / App Creation",
        "POS Systems",
        "UI/UX Design",
      ],
    },
    service2: {
      imgSrc: "./images/test2.jpg",
      title: "marketing & branding",
      list: [
        "Video Creation (from Reels to AR/VR videos)",
        "Content Writing",
        "Social Media Management",
        "Ads Management",
        "Whatsapp & Email Marketing",
      ],
    },
  };

  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const WhoWeAreRef = useRef([]);

  return (
    <section className="services-container" id="our-services">
      {/* Who We Are Section */}
      <div className="who-are-we" id="WhoWeAre">
        <div className="who-are-we-main">
          <div className="who-we-are-main-heading">
            <ScrollFromLeft>
              <ScrollRevealText>
                <h2 className="who-are-we-head" ref={WhoWeAreRef}>
                  <span>who</span>
                </h2>
              </ScrollRevealText>
            </ScrollFromLeft>

            <ScrollFromRight>
              <ScrollRevealText>
                <h2 className="who-are-we-head" ref={WhoWeAreRef}>
                  <span> we are</span>
                </h2>
              </ScrollRevealText>
            </ScrollFromRight>
          </div>
          <h4 className="who-are-we-subhead">
            <div className="who-are-we-subhead-line-wrapper">
              <div className="who-are-we-subhead-line" ref={lineRef}>
                <motion.div
                  className="subhead-main"
                  style={{
                    translateY: translateYLine,
                  }}
                >
                  We’re SDMS — A creative-tech company
                </motion.div>
              </div>
            </div>
            <div className="who-are-we-subhead-line-wrapper">
              <div className="who-are-we-subhead-line" ref={lineRef}>
                <motion.div
                  className="subhead-main"
                  style={{
                    translateY: translateYLine,
                  }}
                >
                  that helps you digitally to Scale Smarter
                </motion.div>
              </div>
            </div>
            <div className="who-are-we-subhead-line-wrapper">
              <div className="who-are-we-subhead-line" ref={lineRef}>
                <motion.div
                  className="subhead-main"
                  style={{
                    translateY: translateYLine,
                  }}
                >
                  With Leads That ACTUALLY Close.
                </motion.div>
              </div>
            </div>
          </h4>

          <h4 className="who-are-we-subhead ">
            <div className="who-are-we-subhead-line-wrapper">
              <div className="who-are-we-subhead-line" ref={lineRef}>
                <motion.div
                  className="subhead-mobile"
                  style={{ translateY: translateYLine }}
                >
                  We’re SDMS — A
                </motion.div>
              </div>
            </div>
            <div className="who-are-we-subhead-line-wrapper">
              <div className="who-are-we-subhead-line" ref={lineRef}>
                <motion.div
                  className="subhead-mobile"
                  style={{ translateY: translateYLine }}
                >
                  creative-tech company
                </motion.div>
              </div>
            </div>
            <div className="who-are-we-subhead-line-wrapper">
              <div className="who-are-we-subhead-line" ref={lineRef}>
                <motion.div
                  className="subhead-mobile"
                  style={{ translateY: translateYLine }}
                >
                  that helps you digitally to
                </motion.div>
              </div>
            </div>
            <div className="who-are-we-subhead-line-wrapper">
              <div className="who-are-we-subhead-line" ref={lineRef}>
                <motion.div
                  className="subhead-mobile"
                  style={{ translateY: translateYLine }}
                >
                  Scale Smarter With Leads
                </motion.div>
              </div>
            </div>
            <div className="who-are-we-subhead-line-wrapper">
              <div className="who-are-we-subhead-line" ref={lineRef}>
                <motion.div
                  className="subhead-mobile"
                  style={{ translateY: translateYLine }}
                >
                  That ACTUALLY Close.
                </motion.div>
              </div>
            </div>
          </h4>
        </div>

        <div className="who-are-we-container" ref={desRef1}>
          <motion.div
            style={{ translateY: translateY1 }}
            className="who-are-we-tag"
          >
            At SDMS, we engineer lead-generating websites, sales-focused
            marketing systems, and automated solutions that free up your time
            and deliver real results turning your marketing expenses into a
            real-time investment.
            <br />
            <br />
            Yes — No fluff. Just websites, systems, and strategies that actually
            work.
            <a href="/brochure.pdf" download>
              <button className="contact-button brochure">
                Download Brochure
              </button>
            </a>
          </motion.div>
        </div>
      </div>
      {/* Heading */}

      <div className="services-heading-main">
        <ScrollFromLeft>
          <ScrollRevealText>
            <h2 className="servicesTitle">
              <span>our</span>
            </h2>
          </ScrollRevealText>
        </ScrollFromLeft>
        <ScrollFromRight>
          <ScrollRevealText>
            <h2 className="servicesTitle">
              <span>services</span>
            </h2>
          </ScrollRevealText>
        </ScrollFromRight>
      </div>

      <div className="our-services-tag-container" ref={desRef2}>
        <motion.div
          style={{ translateY: translateY2 }}
          className="our-services-tag"
        >
          Like a constellation, our services align to create a universe of
          endless possibilities.
        </motion.div>
      </div>

      {/* Service Cards */}

      <div className="services-card">
        {/* Service 1 */}
        <div className="services-card-img-container" ref={refRight}>
          {" "}
          <motion.img
            src={servicesData.service1.imgSrc}
            alt="Scroll Image"
            style={{
              translateX: translateXRight,
              rotate: rotateRight,
              opacity: opacityRight,
            }}
            className="services-image"
          />
        </div>

        <motion.div
          className="services-text"
          ref={desRef3}
          style={{ translateY: translateY3 }}
        >
          <h3 className="services-text-head">{servicesData.service1.title}</h3>
          <ul className="services-text-para">
            {servicesData.service1.list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <Link href="/ServicesPage">
            <button className="contact-button">More Info</button>
          </Link>
        </motion.div>
      </div>

      <div className="services-card">
        {/* Service 2 */}

        <div className="services-card-img-container" ref={refLeft}>
          {" "}
          <motion.img
            src={servicesData.service2.imgSrc}
            alt="Scroll Image"
            style={{
              translateX: translateXLeft,
              rotate: rotateLeft,
              opacity: opacityLeft,
            }}
            className="services-image"
          />
        </div>

        <motion.div
          className="services-text"
          ref={desRef4}
          style={{ translateY: translateY4 }}
        >
          <h3 className="services-text-head">{servicesData.service2.title}</h3>
          <ul className="services-text-para">
            {servicesData.service2.list.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <Link href="/ServicesPage">
            <button className="contact-button">More Info</button>
          </Link>
        </motion.div>
      </div>

      {/* Stats Section */}
      <Stats />
    </section>
  );
};

export default Services;
