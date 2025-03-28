"use client";
import {
  FaSun,
  FaMoon,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import "./Navbar.css";

export default function Navbar({
  darkMode,
  toggleDarkMode,
  toggleMenu,
  menuOpen,
}) {
  const handleScroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    toggleMenu();
  };
  return (
    <nav className="navbar menu-container">
      {/* Logo */}
      <div className="left">
        <div className="premium-logo">
          <Link href="/">
            {" "}
            <span className="logo-main">sdms</span>
          </Link>

          <span className="logo-sub">digital media services</span>
        </div>
      </div>

      {/* Toggle Dark Mode Button */}
      <div className="middle">
        <button className="toggle-button" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Menu Icon */}
      <div className="right">
        <div className="menu" onClick={toggleMenu}>
          <p>menu</p>
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>

      {/* Menu Overlay with Framer Motion */}
      <AnimatePresence mode="wait">
        {menuOpen && (
          <motion.div
            key="menu-overlay"
            className="menu-overlay open"
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          >
            <div className="menu-header">
              <div className="premium-logo">
                <Link href="/">
                  {" "}
                  <span className="logo-main">sdms</span>
                </Link>
                <span className="logo-sub">digital media services</span>
              </div>
              <button
                className="toggle-button overlay-toggle"
                onClick={toggleDarkMode}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              <FaTimes className="close-icon" onClick={toggleMenu} />
            </div>

            {/* Menu Content */}
            <div className="menu-content">
              <ul className="nav-links">
                <li onClick={() => handleScroll("#home")}>
                  <Link href="/" className="navitem">
                    home{" "}
                  </Link>
                </li>
                <li>
                  <Link href="/ServicesPage" className="navitem">
                    our services
                  </Link>
                  <br />
                </li>
                <li>
                  {" "}
                  <Link href="/Trainings" className="navitem">
                    {" "}
                    Trainings & Internships
                  </Link>{" "}
                </li>

                <li>
                  <Link href="/ContactPage" className="navitem">
                    contact
                  </Link>
                  <br />
                </li>
              </ul>
            </div>
            <div className="contact-info">
              <p className="website-url">sabeenadigitalmediaservices.com</p>
              <p className="phone-number">9345398449</p>
            </div>
            <div className="social-links">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="social-media-icon"
              >
                <FaFacebook size={50} />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="social-media-icon"
              >
                <FaTwitter size={50} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="social-media-icon"
              >
                <FaInstagram size={50} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-media-icon"
              >
                <FaLinkedin size={50} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
