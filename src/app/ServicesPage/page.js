"use client";
import Head from "next/head";
import Navbar from "../Components/Navbar/Navbar";
import "./ServicesPage.css";
import { useState, useEffect } from "react";
import Cursor from "../Cursor";

export default function ServicesPage() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
                We harness the power of creativity and technology to fuel your
                brand’s digital journey. From dynamic design to robust
                development, we create solutions that propel you into new
                digital realms.
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
              <h3 className="extra-heading">
                develop
                <br />
                ment
              </h3>
              <p className="extra-text">
                In this vast digital galaxy, our tools and technologies are the
                rocket fuel powering your journey. We leverage top frameworks
                and languages to build experiences that shine across the digital
                cosmos, enhanced by seamless animations and interactions.
              </p>
            </div>
            <p className="extra-text-para">
              We develop UI/UX sites, Websites, Applications, APIs, Software,
              POS Systems for various ventures under the following stacks:
            </p>
            <div className="service-options">
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
            </div>
          </div>
        </div>
        <div className="services-extra-container">
          <div className="services-extra-content">
            <h3 className="extra-heading">marketing & branding</h3>
            <p className="extra-text">
              We help your brand make a bold impact in the digital world. From
              stunning logos and compelling Video narratives to managing
              engaging social media & campaigns, we tell stories that resonate.
              Our services are crafted to boost your brand’s visibility and
              makeit unforgettable, ensuring your ideas are market-ready assets.
            </p>
          </div>

          <div className="service-options">
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
              Product Packaging / Marketing Collateral(s) Design <br />
            </p>
          </div>
        </div>
        <h2 className="our-expertise-head"> Our expertise</h2>

        <div className="cardScrollerWrapper">
          <div className="cardScroller">
            {/* Dynamically rendering the cards */}
            {cards.map((src, index) => (
              <div className="card" key={index}>
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="cardImage"
                />
              </div>
            ))}
            {/* Duplicating the cards for infinite scroll */}
            {cards.map((src, index) => (
              <div className="card" key={`duplicate-${index}`}>
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="cardImage"
                />
              </div>
            ))}
            {cards.map((src, index) => (
              <div className="card" key={index}>
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="cardImage"
                />
              </div>
            ))}
            {/* Duplicating the cards for infinite scroll */}
            {cards.map((src, index) => (
              <div className="card" key={`duplicate-${index}`}>
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="cardImage"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="cardScrollerWrapper2">
          <div className="cardScroller2">
            {/* Dynamically rendering the cards */}
            {cards.map((src, index) => (
              <div className="card" key={index}>
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="cardImage"
                />
              </div>
            ))}
            {/* Duplicating the cards for infinite scroll */}
            {cards.map((src, index) => (
              <div className="card" key={`duplicate-${index}`}>
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="cardImage"
                />
              </div>
            ))}
            {cards.map((src, index) => (
              <div className="card" key={index}>
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="cardImage"
                />
              </div>
            ))}
            {/* Duplicating the cards for infinite scroll */}
            {cards.map((src, index) => (
              <div className="card" key={`duplicate-${index}`}>
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="cardImage"
                />
              </div>
            ))}
            {cards.map((src, index) => (
              <div className="card" key={index}>
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="cardImage"
                />
              </div>
            ))}
            {/* Duplicating the cards for infinite scroll */}
            {cards.map((src, index) => (
              <div className="card" key={`duplicate-${index}`}>
                <img
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="cardImage"
                />
              </div>
            ))}
          </div>
        </div>

        <p className="our-process-heading">
          our <br /> process
        </p>
        <p className="our-process-text">
          {" "}
          These Pillars Support excellence <br /> in the digital jungle.
        </p>
        <div className="cardScroller3">
          {/* Dynamically rendering the cards */}
          {[
            {
              heading: "Foundational Planning",
              description: `
              Project Planning <br />
              Expectations Setting <br />
              Competitor Analysis <br />
              Digital Strategy <br />
              Contract
            `,
            },
            {
              heading: "Technology & Development",
              description: `
              Web Development <br />
              Front-end Development <br />
              Custom CMS Integrations <br />
              E-commerce Development <br />
              SAAS Implementation
            `,
            },
            {
              heading: "Testing & Launch",
              description: `
              Usability Testing <br />
              Performance Testing <br />
              Functionality Testing <br />
              Security Testing <br />
              Integration Testing
            `,
            },
            {
              heading: "Evaluate & Evolve",
              description: `
              Reviews <br />
              Website optimisation <br />
              3rd Party Evaluation <br />
              Server performance <br />
              Improvement
            `,
            },
            {
              heading: "Foundational Planning",
              description: `
              Project Planning <br />
              Expectations Setting <br />
              Competitor Analysis <br />
              Digital Strategy <br />
              Contract
            `,
            },
            {
              heading: "Technology & Development",
              description: `
              Web Development <br />
              Front-end Development <br />
              Custom CMS Integrations <br />
              E-commerce Development <br />
              SAAS Implementation
            `,
            },
            {
              heading: "Testing & Launch",
              description: `
              Usability Testing <br />
              Performance Testing <br />
              Functionality Testing <br />
              Security Testing <br />
              Integration Testing
            `,
            },
            {
              heading: "Evaluate & Evolve",
              description: `
              Reviews <br />
              Website optimisation <br />
              3rd Party Evaluation <br />
              Server performance <br />
              Improvement
            `,
            },
          ].map((card, index) => (
            <div className="card" key={index}>
              <div className="cardContent">
                {/* Sequence number */}
                <div className="sequenceNumber">{index + 1}</div>
                {/* Heading */}
                <h2 className="cardHeading">{card.heading}</h2>
                {/* Paragraph */}
                <p
                  className="cardDescription"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                ></p>
              </div>
            </div>
          ))}

          {/* Duplicating the cards for infinite scroll */}
          {[
            {
              heading: "Foundational Planning",
              description: `
              Project Planning <br />
              Expectations Setting <br />
              Competitor Analysis <br />
              Digital Strategy <br />
              Contract
            `,
            },
            {
              heading: "Technology & Development",
              description: `
              Web Development <br />
              Front-end Development <br />
              Custom CMS Integrations <br />
              E-commerce Development <br />
              SAAS Implementation
            `,
            },
            {
              heading: "Testing & Launch",
              description: `
              Usability Testing <br />
              Performance Testing <br />
              Functionality Testing <br />
              Security Testing <br />
              Integration Testing
            `,
            },
            {
              heading: "Evaluate & Evolve",
              description: `
              Reviews <br />
              Website optimisation <br />
              3rd Party Evaluation <br />
              Server performance <br />
              Improvement
            `,
            },
          ].map((card, index) => (
            <div className="card" key={`duplicate-${index}`}>
              <div className="cardContent">
                {/* Sequence number */}
                <div className="sequenceNumber">{index + 1}</div>
                {/* Heading */}
                <h2 className="cardHeading">{card.heading}</h2>
                {/* Paragraph */}
                <p
                  className="cardDescription"
                  dangerouslySetInnerHTML={{ __html: card.description }}
                ></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <p className="time-to-roar-head">
        time to <br /> roar!
      </p>
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
