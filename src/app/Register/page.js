"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "../Components/Navbar/Navbar";
import MainFooter from "../Components/MainFooter/MainFooter";
import FluidCursor from "../FluidCursor";
import ScrollFromLeft from "../Components/ScrollFromLeft";
import ScrollFromRight from "../Components/ScrollFromRight";
import ScrollFromBottom from "../Components/ScrollFromBottom";
import ScrollRevealText from "../Components/ScrollRevealText";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Register.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Tshirt pics first, then alternating between event photos
const galleryImages = [
  { src: "/images/gallery-27.jpeg", alt: "Team SDMS" },
  { src: "/images/gallery-28.jpeg", alt: "Team SDMS" },
  { src: "/images/gallery-29.jpeg", alt: "Team SDMS" },
  { src: "/images/gallery-01.jpeg", alt: "Training session" },
  { src: "/images/gallery-14.jpeg", alt: "Faculty coordination" },
  { src: "/images/gallery-02.jpeg", alt: "Hands-on learning" },
  { src: "/images/gallery-15.jpeg", alt: "Internship program" },
  { src: "/images/gallery-03.jpeg", alt: "Workshop activity" },
  { src: "/images/gallery-16.jpeg", alt: "Award ceremony" },
  { src: "/images/gallery-04.jpeg", alt: "College program" },
  { src: "/images/gallery-17.jpeg", alt: "Large batch" },
  { src: "/images/gallery-05.jpeg", alt: "Batch training" },
  { src: "/images/gallery-18.jpeg", alt: "Valedictory ceremony" },
  { src: "/images/gallery-06.jpeg", alt: "Live project work" },
  { src: "/images/gallery-19.jpeg", alt: "Principal meeting" },
  { src: "/images/gallery-07.jpeg", alt: "Mentorship session" },
  { src: "/images/gallery-20.jpeg", alt: "Training workshop" },
  { src: "/images/gallery-08.jpeg", alt: "Industry collaboration" },
  { src: "/images/gallery-21.jpeg", alt: "Classroom session" },
  { src: "/images/gallery-09.jpeg", alt: "Placement drive" },
  { src: "/images/gallery-22.jpeg", alt: "Student engagement" },
  { src: "/images/gallery-10.jpeg", alt: "Certificate ceremony" },
  { src: "/images/gallery-23.jpeg", alt: "Lab session" },
  { src: "/images/gallery-11.jpeg", alt: "Seminar session" },
  { src: "/images/gallery-24.jpeg", alt: "Group activity" },
  { src: "/images/gallery-12.jpeg", alt: "Practical training" },
  { src: "/images/gallery-25.jpeg", alt: "Skill training" },
  { src: "/images/gallery-13.jpeg", alt: "Team SDMS" },
  { src: "/images/gallery-26.jpeg", alt: "Project work" },
];

const faqs = [
  {
    q: "Who can apply?",
    a: "Students and fresh graduates from any discipline.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes, certificates will be provided upon successful completion.",
  },
  {
    q: "Is prior experience required?",
    a: "No. Basic interest and willingness to learn are sufficient.",
  },
  {
    q: "What is the duration of the internship?",
    a: "Depends on the selected program.",
  },
  {
    q: "Is the internship paid?",
    a: "Yes, you will be charged a fee unless you are exempted by the authority.",
  },
  {
    q: "Will there be project work?",
    a: "Yes, participants will work on practical assignments and projects.",
  },
];

const highlights = [
  { value: "28500+", label: "Students\nTrained",       color: "#C93102" },
  { value: "2500+",  label: "Projects\nCompleted",     color: "#B6BEBE" },
  { value: "50+",    label: "Industry\nMentors",        color: "#B5DFCE" },
  { value: "100+",   label: "Internship\nOpportunities",color: "#F3E453" },
  { value: "150+",   label: "Students\nPlaced",         color: "#A78BFA" },
];

export default function Register() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formStatus, setFormStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Highlights scroll animations
  const statsRef = useRef(null);
  const { scrollYProgress: statsProgress } = useScroll({
    target: statsRef,
    offset: ["start end", "end start"],
  });
  const spring = (v) => useSpring(v, { stiffness: 250, damping: 30, mass: 0.9 });

  const c1x = spring(useTransform(statsProgress, [0,    0.2 ], [-220, 0]));
  const c1r = spring(useTransform(statsProgress, [0,    0.2 ], [-10,  0]));
  const c1o = spring(useTransform(statsProgress, [0,    0.2 ], [0,    1]));

  const c2x = spring(useTransform(statsProgress, [0.15, 0.35], [ 220, 0]));
  const c2r = spring(useTransform(statsProgress, [0.15, 0.35], [ 10,  0]));
  const c2o = spring(useTransform(statsProgress, [0.15, 0.35], [0,    1]));

  const c3x = spring(useTransform(statsProgress, [0.3,  0.5 ], [-220, 0]));
  const c3r = spring(useTransform(statsProgress, [0.3,  0.5 ], [-10,  0]));
  const c3o = spring(useTransform(statsProgress, [0.3,  0.5 ], [0,    1]));

  const c4x = spring(useTransform(statsProgress, [0.45, 0.65], [ 220, 0]));
  const c4r = spring(useTransform(statsProgress, [0.45, 0.65], [ 10,  0]));
  const c4o = spring(useTransform(statsProgress, [0.45, 0.65], [0,    1]));

  const c5x = spring(useTransform(statsProgress, [0.6,  0.8 ], [-220, 0]));
  const c5r = spring(useTransform(statsProgress, [0.6,  0.8 ], [-10,  0]));
  const c5o = spring(useTransform(statsProgress, [0.6,  0.8 ], [0,    1]));

  const cardMotion = [
    { x: c1x, r: c1r, o: c1o },
    { x: c2x, r: c2r, o: c2o },
    { x: c3x, r: c3r, o: c3o },
    { x: c4x, r: c4r, o: c4o },
    { x: c5x, r: c5r, o: c5o },
  ];

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const [mounted, setMounted] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => { setMounted(true); }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormStatus("");

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      dob: e.target.dob.value,
      address: e.target.address.value,
      institution: e.target.institution.value,
      phone: e.target.phone.value,
      lookingFor: e.target.lookingFor.value,
      yearOfStudy: e.target.yearOfStudy.value,
      degree: e.target.degree.value,
      major: e.target.major.value,
      program: e.target.program.value,
      availability: e.target.availability.value,
      projectIdeas: e.target.projectIdeas.value,
      socialConnected: e.target.socialConnected.value,
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      await res.json();
      setFormStatus(res.ok ? "success" : "error");
      if (res.ok) e.target.reset();
    } catch {
      setFormStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="register-page">
      <FluidCursor />
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
      />

      {/* ── Hero ── */}
      <section className="reg-hero">
        <div className="reg-hero-inner">
          <ScrollFromLeft>
            <ScrollRevealText>
              <h1 className="reg-hero-title">
                <span>internship &</span>
              </h1>
            </ScrollRevealText>
          </ScrollFromLeft>
          <ScrollFromRight>
            <ScrollRevealText>
              <h1 className="reg-hero-title">
                <span>training</span>
              </h1>
            </ScrollRevealText>
          </ScrollFromRight>
          <ScrollFromLeft>
            <ScrollRevealText>
              <h1 className="reg-hero-title">
                <span>program 2026</span>
              </h1>
            </ScrollRevealText>
          </ScrollFromLeft>
          <ScrollFromBottom>
            <p className="reg-hero-subtitle">
              Build industry-relevant skills through practical learning, live
              projects, mentorship, and professional development opportunities.
            </p>
          </ScrollFromBottom>
        </div>
      </section>

      {/* ── Program Highlights ── */}
      <section className="reg-highlights-section" ref={statsRef}>
        <div className="reg-highlights-heading-wrap">
          <ScrollFromBottom>
            <h2 className="reg-highlights-heading">program highlights</h2>
          </ScrollFromBottom>
        </div>
        <div className="reg-highlights-grid">
          {highlights.map((h, i) => (
            <motion.div
              key={i}
              className={`reg-highlight-card reg-hcard-${i + 1}`}
              style={{
                translateX: cardMotion[i].x,
                rotate:     cardMotion[i].r,
                opacity:    cardMotion[i].o,
              }}
            >
              <div className="reg-hcard-value">{h.value}</div>
              <div className="reg-hcard-label">
                {h.label.split("\n").map((line, j) => (
                  <span key={j}>{line}<br /></span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Registration Form ── */}
      <section className="reg-form-section" id="register">
        <div className="reg-form-container">
          <ScrollFromBottom>
            <h2 className="reg-section-label">register now</h2>
          </ScrollFromBottom>

          <form className="reg-form" onSubmit={handleSubmit} noValidate>
            {/* Row 1 */}
            <div className="reg-grid-2">
              <div className="reg-field">
                <label className="reg-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="reg-input"
                  placeholder="Your full name"
                  required
                />
              </div>
              <div className="reg-field">
                <label className="reg-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="reg-input"
                  placeholder="you@email.com"
                  required
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="reg-grid-2">
              <div className="reg-field">
                <label className="reg-label">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  className="reg-input"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
              <div className="reg-field">
                <label className="reg-label">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  className="reg-input reg-input-date"
                  required
                />
              </div>
            </div>

            {/* Address */}
            <div className="reg-field">
              <label className="reg-label">Address</label>
              <input
                type="text"
                name="address"
                className="reg-input"
                placeholder="Your current address"
                required
              />
            </div>

            {/* Institution */}
            <div className="reg-field">
              <label className="reg-label">Current Educational Institution</label>
              <input
                type="text"
                name="institution"
                className="reg-input"
                placeholder="College / University name"
                required
              />
            </div>

            {/* Row 3 */}
            <div className="reg-grid-3">
              <div className="reg-field">
                <label className="reg-label">Year of Study</label>
                <select name="yearOfStudy" className="reg-input" required>
                  <option value="" disabled defaultValue>Select year</option>
                  <option value="First Year">First Year</option>
                  <option value="Second Year">Second Year</option>
                  <option value="Third Year">Third Year</option>
                  <option value="Fourth Year">Fourth Year</option>
                </select>
              </div>
              <div className="reg-field">
                <label className="reg-label">Degree</label>
                <select name="degree" className="reg-input" required>
                  <option value="" disabled defaultValue>Select degree</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="Diploma">Diploma</option>
                </select>
              </div>
              <div className="reg-field">
                <label className="reg-label">Major / Field of Study</label>
                <select name="major" className="reg-input" required>
                  <option value="" disabled defaultValue>Select field</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Arts & Science">Arts & Science</option>
                </select>
              </div>
            </div>

            {/* Training Program */}
            <div className="reg-field">
              <label className="reg-label">Choose Your Training Program</label>
              <select name="program" className="reg-input" required>
                <option value="" disabled defaultValue>Select a program</option>
                <option value="Machine Learning">Machine Learning</option>
                <option value="AWS DevOps">AWS DevOps</option>
                <option value="Generative AI & Prompt Engineering">Generative AI &amp; Prompt Engineering</option>
                <option value="UI/UX Design">UI/UX Design</option>
                <option value="Full Stack Development">Full Stack Development</option>
              </select>
            </div>

            {/* Looking For — radio */}
            <div className="reg-field">
              <label className="reg-label">What are you looking for?</label>
              <div className="reg-radio-group">
                <label className="reg-radio-label">
                  <input type="radio" name="lookingFor" value="Implant Training" required />
                  <span>Implant Training</span>
                </label>
                <label className="reg-radio-label">
                  <input type="radio" name="lookingFor" value="Internship Training" />
                  <span>Internship Training</span>
                </label>
              </div>
            </div>

            {/* ── Declaration ── */}
            <div className="reg-declaration-divider">
              <span>Declaration</span>
            </div>

            {/* Availability */}
            <div className="reg-field">
              <label className="reg-label">
                Are you available for full-time training?
                <span className="reg-label-sub"> 25th June to 25th July, 2026</span>
                <span className="reg-required"> *</span>
              </label>
              <div className="reg-radio-group">
                <label className="reg-radio-label">
                  <input type="radio" name="availability" value="Yes" required />
                  <span>Yes</span>
                </label>
                <label className="reg-radio-label">
                  <input type="radio" name="availability" value="No" />
                  <span>No</span>
                </label>
              </div>
            </div>

            {/* Project ideas */}
            <div className="reg-field">
              <label className="reg-label">
                Do you have any specific projects or ideas you would like to work on during the training?
              </label>
              <textarea
                name="projectIdeas"
                className="reg-input"
                rows="3"
                placeholder="Describe your project idea (optional)"
              />
            </div>

            {/* Social handles */}
            <div className="reg-field">
              <label className="reg-label">
                Are you connected on our social handles?
                <span className="reg-required"> *</span>
              </label>
              <div className="reg-social-links">
                <a href="https://www.instagram.com/sabeena.digital_media" target="_blank" rel="noopener noreferrer">
                  IG — @sabeena.digital_media
                </a>
                <a href="https://www.linkedin.com/company/sabeena-digital-media-services/" target="_blank" rel="noopener noreferrer">
                  LI — Sabeena Digital Media Services
                </a>
                <a href="https://chat.whatsapp.com/LJML7ZLHyJDCp0OEMOuDZ8" target="_blank" rel="noopener noreferrer">
                  WA — Join WhatsApp Group
                </a>
              </div>
              <div className="reg-radio-group" style={{ marginTop: "0.8rem" }}>
                <label className="reg-radio-label">
                  <input type="radio" name="socialConnected" value="Yes" required />
                  <span>Yes, I'm connected</span>
                </label>
                <label className="reg-radio-label">
                  <input type="radio" name="socialConnected" value="No" />
                  <span>Not yet</span>
                </label>
              </div>
            </div>

            <div className="reg-submit-row">
              <button type="submit" className="reg-submit-btn" disabled={submitting}>
                {submitting ? "Submitting…" : "Submit Application"}
              </button>
            </div>

            {formStatus === "success" && (
              <p className="reg-status reg-status--success">
                Application submitted! Check your email for confirmation.
              </p>
            )}
            {formStatus === "error" && (
              <p className="reg-status reg-status--error">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="reg-gallery-section">
        <div className="reg-gallery-header">
          <ScrollFromLeft>
            <ScrollRevealText>
              <h2 className="reg-gallery-title"><span>behind the</span></h2>
            </ScrollRevealText>
          </ScrollFromLeft>
          <ScrollFromRight>
            <ScrollRevealText>
              <h2 className="reg-gallery-title"><span>scenes.</span></h2>
            </ScrollRevealText>
          </ScrollFromRight>
        </div>
        <div className="reg-carousel">
          {mounted && (
            <>
              <Slider
                fade={true}
                slidesToShow={1}
                slidesToScroll={1}
                infinite={true}
                autoplay={true}
                autoplaySpeed={3200}
                speed={900}
                cssEase="ease-in-out"
                arrows={false}
                dots={false}
                swipeToSlide={true}
                pauseOnHover={true}
                afterChange={(i) => setCurrentSlide(i)}
              >
                {galleryImages.map((img, i) => (
                  <div key={i} className="reg-carousel-slide">
                    <img src={img.src} alt={img.alt} loading="lazy" />
                  </div>
                ))}
              </Slider>
              <div className="reg-carousel-footer">
                <span className="reg-carousel-counter">
                  {String(currentSlide + 1).padStart(2, "0")} / {String(galleryImages.length).padStart(2, "0")}
                </span>
                <div className="reg-carousel-progress">
                  <div className="reg-carousel-progress-bar" key={currentSlide} />
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="reg-faq-section">
        <ScrollFromBottom>
          <h2 className="reg-faq-heading">faqs</h2>
        </ScrollFromBottom>
        <div className="reg-faq-list">
          {faqs.map((item, i) => (
            <div
              key={i}
              className={`reg-faq-item ${openFaq === i ? "reg-faq-item--open" : ""}`}
            >
              <button
                className="reg-faq-question"
                onClick={() => handleFaqToggle(i)}
                aria-expanded={openFaq === i}
              >
                <span>{item.q}</span>
                <span className="reg-faq-icon">{openFaq === i ? "−" : "+"}</span>
              </button>
              <div className="reg-faq-answer">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="reg-cta-section">
        <div className="reg-cta-inner">
          <ScrollFromBottom>
            <h2 className="reg-cta-title">
              Ready to gain real-world experience and build your professional skills?
            </h2>
          </ScrollFromBottom>
          <ScrollFromBottom>
            <a href="/ContactPage" className="reg-cta-btn">
              Know more about us
            </a>
          </ScrollFromBottom>
        </div>
      </section>

      <MainFooter />
    </div>
  );
}
