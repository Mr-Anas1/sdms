"use client";
import Head from "next/head";
import Navbar from "../Components/Navbar/Navbar";
import "./ServicesPage.css";
import { useState, useEffect } from "react";
import Cursor from "../Cursor";
import { useScrollAnimation } from "@/app/Hooks/useScrollAnimation";
import { useRef } from "react";
import { motion } from "framer-motion";
import ScrollAnimation from "../Components/ScrollAnimation";
import ScrollFromLeft from "../Components/ScrollFromLeft";
import ScrollRevealText from "../Components/ScrollRevealText";
import FluidCursor from "../FluidCursor";
import ScrollFromRight from "../Components/ScrollFromRight";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngular, FaBootstrap, FaWix, FaWordpress } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaLess } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import MainFooter from "../Components/MainFooter/MainFooter";

const defaultSettings = {
  slidesToShow: 2.3,
  slidesToScroll: 1,
  infinite: false,
  swipeToSlide: true,
  speed: 400,
  cssEase: "ease-in",
  touchThreshold: 500,
  arrows: false,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "40px",
      },
    },
  ],
};

export default function ServicesPage() {
  const settings = { ...defaultSettings };

  const desRef1 = useRef(null);
  const desRef2 = useRef(null);
  const desRef3 = useRef(null);
  const desRef4 = useRef(null);
  const desRef5 = useRef(null);
  const desRef6 = useRef(null);
  const desRef7 = useRef(null);
  const desRef8 = useRef(null);
  const desRef9 = useRef(null);
  const desRef10 = useRef(null);

  const { translateY: translateY1 } = useScrollAnimation(desRef1);
  const { translateY: translateY2 } = useScrollAnimation(desRef2);
  const { translateY: translateY3 } = useScrollAnimation(desRef3);
  const { translateY: translateY4 } = useScrollAnimation(desRef4);
  const { translateY: translateY5 } = useScrollAnimation(desRef5);
  const { translateY: translateY6 } = useScrollAnimation(desRef6);
  const { translateY: translateY7 } = useScrollAnimation(desRef7);
  const { translateY: translateY8 } = useScrollAnimation(desRef8);
  const { translateY: translateY9 } = useScrollAnimation(desRef9);
  const { translateY: translateY10 } = useScrollAnimation(desRef10);

  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

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

  const cards = [
    { name: "Angular", icon: <FaAngular /> },
    { name: "Laravel", icon: <FaLaravel /> },
    { name: "Less", icon: <FaLess /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "JQuery", icon: <DiJqueryLogo /> },
    { name: "Javascript", icon: <IoLogoJavascript /> },
    { name: "React", icon: <FaReact /> },
    { name: "Html", icon: <FaHtml5 /> },
    { name: "Wix", icon: <FaWix /> },
    { name: "Wordpress", icon: <FaWordpress /> },
  ];

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
        <div className="service-page-main-content">
          <div className="services-page-container">
            <h2 className="services-page-heading">our services</h2>
            <div className="services-page-service">
              <p className="service-page-head">
                At Sabeena Digital Media Services (SDMS), we understand that
                businesses thrive on two essentials: leads and sales. Our
                services are crafted to deliver these outcomes through tailored
                digital solutions.
              </p>
              <p className="service-page-text">
                Whether it’s crafting immersive websites, developing powerful
                apps, creating captivating video content, or launching stellar
                social media campaigns, our services are designed to orbit
                around your brand’s goals.
              </p>
            </div>
          </div>
          <div className="services-extra-container">
            <div className="services-extra-content">
              <div className="extra-heading development-heading">
                <div className="extra-heading-line-wrapper">
                  <ScrollAnimation offset={["start 100%", "end 100%"]}>
                    <div className="extra-heading">develop</div>
                  </ScrollAnimation>
                </div>
                <div className="extra-heading-line-wrapper">
                  <ScrollAnimation offset={["start 100%", "end 100%"]}>
                    <div className="extra-heading">ment</div>
                  </ScrollAnimation>
                </div>
              </div>

              <motion.div
                ref={desRef2}
                style={{ translateY: translateY2 }}
                className="extra-text"
              >
                Your website or app should be more than just visually
                appealing—it should be a lead-generating machine. We specialize
                in creating platforms that not only look good but also drive
                user engagement and conversions.
              </motion.div>
            </div>

            <motion.div ref={desRef3} style={{ translateY: translateY3 }}>
              <p className="extra-text-para">
                We develop UI/UX sites, Websites, Applications, APIs, Software,
                POS Systems for various ventures under the following stacks:
              </p>
            </motion.div>

            <motion.div
              ref={desRef4}
              style={{ translateY: translateY4 }}
              className="service-options"
            >
              <p className="service-options-p">
                Any UI/UX <br />
                React JS <br />
                Next JS <br />
                Node JS <br />
                Angular JS <br />
                WordPress <br />
                Magento <br />
                Shopify <br />
              </p>
              <p className="service-options-p">
                HTML5 & CSS3 <br />
                LESS & SASS <br />
                Bootstrap <br />
                Tailwind <br />
                Laravel <br />
                Javascript <br />
                jQuery <br />
                PHP <br />
              </p>
            </motion.div>
          </div>
        </div>
        <div className="services-extra-container">
          <div className="services-extra-content">
            <div className="extra-heading development-heading">
              <div className="extra-heading-line-wrapper">
                <ScrollAnimation offset={["start 80%", "end 80%"]}>
                  <div className="extra-heading">marketing</div>
                </ScrollAnimation>
              </div>
              <div className="extra-heading-line-wrapper">
                <ScrollAnimation offset={["start 80%", "end 80%"]}>
                  <div className="extra-heading">& branding</div>
                </ScrollAnimation>
              </div>
            </div>

            <motion.div
              ref={desRef6}
              style={{ translateY: translateY6 }}
              className="extra-text"
            >
              Visibility is key to attracting leads. Our marketing strategies
              are designed to increase your online presence and convert visitors
              into loyal customers.
            </motion.div>
          </div>

          <motion.div
            ref={desRef7}
            style={{ translateY: translateY7 }}
            className="service-options"
          >
            <p className="service-options-p">
              Social Media Management <br />
              Advertisement (Google, Youtube, META Ads) <br />
              Content Writing & Copywriting <br />
              Branding strategy <br />
              Podcasts <br />
            </p>
            <p className="service-options-p">
              Videos (AR/VR Videos, Reels, Shorts, YT full length videos,
              Voiceover Narratives) <br />
              Graphic designs & Mockups <br />
            </p>
          </motion.div>
        </div>

        <div className="services-extra-container">
          <div className="services-extra-content">
            <div className="extra-heading event-heading">
              <div className="extra-heading-line-wrapper">
                <ScrollAnimation offset={["start 100%", "end 100%"]}>
                  <div className="extra-heading">event</div>
                </ScrollAnimation>
              </div>
              <div className="extra-heading-line-wrapper">
                <ScrollAnimation offset={["start 100%", "end 100%"]}>
                  <div className="extra-heading">management</div>
                </ScrollAnimation>
              </div>
            </div>

            <motion.div
              ref={desRef8}
              style={{ translateY: translateY8 }}
              className="extra-text"
            >
              With expertise in hosting 20+ programs across India & the US, we
              provide end-to-end event management for corporates, non-profits,
              and educational institutions ensuring seamless execution and
              marketing.
            </motion.div>
          </div>

          <motion.div ref={desRef9} style={{ translateY: translateY9 }}>
            <p className="extra-text-para">
              Our Event Management Services Include: Registration Outsourcing,
              Event Marketing & Promotions, Keynote Speakers & Expert Trainers
              Outsourcing.
            </p>
          </motion.div>

          <motion.div
            ref={desRef10}
            style={{ translateY: translateY10 }}
            className="service-options"
          >
            <p className="service-options-p">
              Hosting Hackathons <br />
              Corporate Training Sessions <br />
              Technical & Industry-Specific College Training Programs <br />
              Summer & Winter Camps <br />
            </p>
          </motion.div>
        </div>

        <div className="our-expertise-head-container">
          <ScrollFromLeft>
            <ScrollRevealText>
              <h2 className="our-expertise-head">
                <span>our</span>
              </h2>
            </ScrollRevealText>
          </ScrollFromLeft>

          <ScrollFromRight>
            <ScrollRevealText>
              <h2 className="our-expertise-head">
                <span>expertise</span>
              </h2>
            </ScrollRevealText>
          </ScrollFromRight>
        </div>

        <div className="cardScrollerWrapper">
          <div className="cardScroller">
            {/* Dynamically rendering the cards */}
            {cards.map((src, index) => (
              <div className="card" key={index}>
                <div className="card-item">{src.icon}</div>
                <div className="card-name">{src.name}</div>
              </div>
            ))}
            {cards.map((src, index) => (
              <div className="card" key={index}>
                <div className="card-item">{src.icon}</div>
                <div className="card-name">{src.name}</div>
              </div>
            ))}

            {cards.map((src, index) => (
              <div className="card" key={index}>
                <div className="card-item">{src.icon}</div>
                <div className="card-name">{src.name}</div>
              </div>
            ))}
            {/* Duplicating the cards for infinite scroll */}
            {cards.map((src, index) => (
              <div className="card" key={`duplicate-${index}`}>
                <div className="card-item">{src.icon}</div>
                <div className="card-name">{src.name}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="cardScrollerWrapper2">
          <div className="cardScroller2">
            {cards.map((src, index) => (
              <div className="card" key={index}>
                <div className="card-item">{src.icon}</div>
                <div className="card-name">{src.name}</div>
              </div>
            ))}
            {cards.map((src, index) => (
              <div className="card" key={index}>
                <div className="card-item">{src.icon}</div>
                <div className="card-name">{src.name}</div>
              </div>
            ))}

            {cards.map((src, index) => (
              <div className="card" key={index}>
                <div className="card-item">{src.icon}</div>
                <div className="card-name">{src.name}</div>
              </div>
            ))}
            {/* Duplicating the cards for infinite scroll */}
            {cards.map((src, index) => (
              <div className="card" key={`duplicate-${index}`}>
                <div className="card-item">{src.icon}</div>
                <div className="card-name">{src.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="our-process-heading-main">
          <ScrollFromLeft>
            <ScrollRevealText>
              <h2 className="our-process-heading">
                <span>our</span>
              </h2>
            </ScrollRevealText>
          </ScrollFromLeft>

          <ScrollFromRight>
            <ScrollRevealText>
              <h2 className="our-process-heading">
                <span>process</span>
              </h2>
            </ScrollRevealText>
          </ScrollFromRight>
        </div>
        <p className="our-process-text"> From Concept to Conversion</p>
        <div className="cardScroller3">
          <Slider {...settings}>
            {[
              {
                heading: "Discovery & Strategy",
                description: `
               Understanding your <br /> 
               business goals and <br /> 
               target audience.

            `,
              },
              {
                heading: "Design & Development",
                description: `
              Creating tailored <br />
              solutions that align <br />
              with your objectives.
            `,
              },
              {
                heading: "Testing & Launch",
                description: `
              Ensuring functionality <br />
              and user experience <br />
              are optimized.
            `,
              },
              {
                heading: "Evaluate & Evolve",
                description: `
              Monitoring performance <br />
              and making data-driven <br />
              improvements.
            `,
              },
            ].map((card, index) => (
              <div className="card" key={index}>
                <div className="cardContent">
                  <div className="cardContent-main">
                    <div className="sequenceNumber">{index + 1}</div>
                    <h2 className="cardHeading">{card.heading}</h2>
                  </div>

                  <p
                    className="cardDescription"
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  ></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <MainFooter />
      <FluidCursor />
    </div>
  );
}
