"use client";
import { useState, useEffect } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import Cursor from "../../Cursor";
import "./Home.css";
import FluidCursor from "@/app/FluidCursor";
import { Link } from "react-router-dom";
export default function Home() {
  const [loading, setLoading] = useState(true);
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
    setMenuOpen((prev) => !prev);
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
        <FluidCursor />
        <main className="home-main">
          <h2 className="home-heading">
            let’s get more <br />
            leads & customers
          </h2>
          <p className="home-desc">
            Your business needs just two things to grow: leads and sales. We
            help you get both — using powerful software, sales-focused websites,
            engaging videos, and smart marketing that actually works.
            <br />
            <br />
            Let’s move your business forward.
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
            <a href="/ServicesPage" className="explore-button">Explore work</a>
            <a href={"/ContactPage"} className="contact-button">Get in Touch</a>
          </div>
        </main>
      </div>
    </div>
  );
}
