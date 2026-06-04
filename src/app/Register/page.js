"use client";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import MainFooter from "../Components/MainFooter/MainFooter";
import FluidCursor from "../FluidCursor";
import ScrollFromLeft from "../Components/ScrollFromLeft";
import ScrollFromRight from "../Components/ScrollFromRight";
import ScrollFromBottom from "../Components/ScrollFromBottom";
import ScrollRevealText from "../Components/ScrollRevealText";
import "./Register.css";

const galleryImages = [
  { src: "/images/test1.jpg", alt: "Hands-on lab session" },
  { src: "/images/training2.jpeg", alt: "Training program" },
  { src: "/images/test3.jpg", alt: "Workshop session" },
  { src: "/images/college.webp", alt: "College training" },
  { src: "/images/test2.jpg", alt: "Practical learning" },
  { src: "/images/training1.jpeg", alt: "Batch training" },
  { src: "/images/test4.jpg", alt: "Internship program" },
  { src: "/images/service1.jpeg", alt: "Live project work" },
  { src: "/images/school.webp", alt: "School program" },
  { src: "/images/service2.jpeg", alt: "Mentorship session" },
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

export default function Register() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formStatus, setFormStatus] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

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
    };

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
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
              <h2 className="reg-gallery-title"><span>glimpses of our</span></h2>
            </ScrollRevealText>
          </ScrollFromLeft>
          <ScrollFromRight>
            <ScrollRevealText>
              <h2 className="reg-gallery-title"><span>training programs</span></h2>
            </ScrollRevealText>
          </ScrollFromRight>
        </div>
        <div className="reg-masonry">
          {galleryImages.map((img, i) => (
            <div key={i} className="reg-masonry-item">
              <img src={img.src} alt={img.alt} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="reg-faq-section">
        <ScrollFromBottom>
          <h2 className="reg-faq-heading">frequently asked questions</h2>
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
            <a href="/" className="reg-cta-btn">
              Know more about us
            </a>
          </ScrollFromBottom>
        </div>
      </section>

      <MainFooter />
    </div>
  );
}
