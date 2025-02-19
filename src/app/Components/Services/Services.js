"use client"; // For client-side animations with GSAP
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Stats from "../Stats/Stats";
import Link from "next/link";
import "./Services.css";

const Services = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const WhoWeAreRef = useRef([]);
  return (
    <section className="services-container" id="our-services">
      {/* Who We Are Section */}
      <div className="who-are-we" id="WhoWeAre">
        <div className="who-are-we-main">
          <section className="scroll-reveal">
            <h2 className="who-are-we-head" ref={WhoWeAreRef}>
              <span>who</span>
              <br />
              <span> we are</span>
            </h2>
          </section>
          <h4 className="who-are-we-subhead">
            As a pioneering force in the digital galaxy, SDMS® blends creativity
            with cutting-edge technology to craft your brand’s journey through
            the stars.
          </h4>
        </div>

        <div className="who-are-we-container">
          <p className="who-are-we-tag">
            We help your business launch into the digital cosmos, delivering
            powerful websites and apps that leave a lasting impact. Our
            expertise in the latest digital trends ensures your brand orbits
            success, expanding across the universe of possibilities.
          </p>
        </div>
      </div>
      {/* Heading */}

      <div className="services-heading-main">
        <section className="scroll-reveal">
          <h2 className="servicesTitle">
            <span>
              our <br /> services
            </span>
          </h2>
        </section>
      </div>
      <p className="our-services-tag">
        Like a constellation, our services align to create a universe of endless
        possibilities.
      </p>

      {/* Service Cards */}

      {[
        {
          imgSrc: "./images/service1.jpeg",
          title: "development",
          list: [
            " Software as a Service (SaaS)",
            "Automation / API Creation",
            "Website / App Creation ",
            "POS Systems",
            "UI/UX Design",
          ],
        },
        {
          imgSrc: "./images/service2.jpeg",
          title: "marketing & branding",
          list: [
            "Video Creation (from Reels to AR/VR videos)",
            "Content Writing",
            "Social Media Management",
            "Ads Management",
            "Whatsapp & Email Marketing",
          ],
        },
      ].map((service, index) => (
        <div key={index} className="services-card">
          {/* Image Section */}
          <img
            className="services-image"
            src={service.imgSrc}
            alt={`${service.title} Image`}
          />
          {/* Text Section */}
          <div className="services-text">
            <h3 className="services-text-head">{service.title}</h3>
            <ul className="services-text-para">
              {service.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <Link href="/ServicesPage">
              <button className="contact-button">More Info</button>
            </Link>
          </div>
        </div>
      ))}

      {/* Stats Section */}
      <Stats />
    </section>
  );
};

export default Services;
