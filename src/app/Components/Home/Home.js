"use client";
import { useState, useEffect } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Cursor from "../../Cursor";
import "./Home.css";
import FluidCursor from "@/app/FluidCursor";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 5000); // Show the loading screen for 5 seconds (video duration)
  //   return () => clearTimeout(timer);
  // }, []);

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

      {/* 
  {loading ? (
    <div className="loading-screen">
      <video
        id="intro-video"
        className="video"
        autoPlay
        muted
        playsInline
        onEnded={() => setLoading(false)}
      >
        <source src="./images/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div id="logo-and-title" className="fade-in">
        <img src="./images/logo.jpeg" alt="Logo" className="logo zoom-in" />
        <h1 className="glow-text zoom-in">
          Sabeena Digital Media Services
        </h1>
      </div>
    </div>
  ) : (
    <div className="main-content"></div>
  )}
*/}

      <div className={`home ${darkMode ? "dark" : ""}`} id="home">
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          toggleMenu={toggleMenu}
          menuOpen={menuOpen}
        />
        {/* <Cursor darkMode={darkMode} /> */}
        {/* <FluidCursor /> */}
        <main className="home-main">
          <h2 className="home-heading">
            let's orbit success <br />
            in the digital universe
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
            <FaRegArrowAltCircleDown />
          </div>
          <div className="button-row">
            <button className="explore-button">Explore work</button>
            <button className="contact-button">Get in Touch</button>
          </div>
        </main>
      </div>
    </div>
  );
}
