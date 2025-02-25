"use client";
import { useState, useEffect } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import Head from "next/head";
import Cursor from "../Cursor";
import Navbar from "../Components/Navbar/Navbar.js";
import "./ContactPage.css";
import ContactForm from "./Components/ContactForm";
import FluidCursor from "../FluidCursor";
import ScrollFromLeft from "../Components/ScrollFromLeft";
import ScrollRevealText from "../Components/ScrollRevealText";

export default function ContactPage() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Show the loading screen for 5 seconds (video duration)
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <Head>
        <title>Sabeena Digital Media Services</title>
        <meta
          name="description"
          content="Sabeena Digital Media Services homepage"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={`home ${darkMode ? "dark" : ""}`} id="home">
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          toggleMenu={toggleMenu}
          menuOpen={menuOpen}
        />
        {/* <Cursor darkMode={darkMode} /> */}
        <main>
          <h2 className="home-heading">
            let's roar <br /> into the wild <br /> together
          </h2>
          <p className="home-desc">
            Launch your brand into the digital cosmos with powerful software,
            dynamic video creations <br /> and stellar web and app solutions. We
            guide your business to new galaxies of growth and success.
          </p>
          <div
            className="down-arrow"
            onClick={() =>
              window.scrollBy({ top: window.innerHeight, behavior: "smooth" })
            }
          >
            <FaRegArrowAltCircleDown className="downArrowIcon" />
          </div>
        </main>
      </div>
      <ContactForm />

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
