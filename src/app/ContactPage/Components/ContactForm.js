"use client";
import { useState, useEffect } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [currentTime, setCurrentTime] = useState("");
  const [formType, setFormType] = useState("Say Hello");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata", // Set the timezone to IST
      };
      const indianTime = now.toLocaleTimeString("en-US", options) + " IST";
      setCurrentTime(indianTime);
    };

    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="contact-form-container">
      {/* Header Row */}
      <div className="header-row">
        <div className="button-group">
          <button
            onClick={() => setFormType("Say Hello")}
            className={`button ${formType === "Say Hello" ? "active" : ""}`}
          >
            Say Hello!
          </button>
          <button
            onClick={() => setFormType("Get A Quote")}
            className={`button ${formType === "Get A Quote" ? "active" : ""}`}
          >
            GET A QUOTE
          </button>
        </div>
        <div className="time-display">{currentTime}</div>
      </div>

      {/* Form Header */}
      <h2 className="form-header">{formType}</h2>

      {/* Form */}
      <form className="form">
        <div className="grid">
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              className="input-field"
              placeholder="Enter your email"
            />
          </div>
        </div>

        {formType === "Get A Quote" && (
          <>
            <div>
              <label className="label">Company/Organization</label>
              <input
                type="text"
                className="input-field"
                placeholder="Enter company/organization"
              />
            </div>
            <div>
              <label className="label">Phone</label>
              <input
                type="tel"
                className="input-field"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label className="label">Project Type</label>
              <select className="input-field" defaultValue="">
                <option value="" disabled>
                  Select a project type
                </option>

                <option value="marketing">Social Media Marketing</option>
                <option value="branding">Branding</option>
                <option value="development">Web or App Development</option>
                <option value="production">Video Production</option>
                <option value="design">Graphic Design</option>
                <option value="ad">Ad Production</option>
                <option value="writing">Copy Writing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="label">Project Budget </label>
              <input
                type="text"
                className="input-field"
                placeholder="Enter project type budget"
              />
            </div>
            <div>
              <label className="label">How did you hear about us?</label>
              <input
                type="text"
                className="input-field"
                placeholder="Enter details"
              />
            </div>
          </>
        )}

        {formType === "Say Hello" && (
          <div>
            <label className="label">Company/Organization</label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter company/organization"
            />
          </div>
        )}

        <div>
          <label className="label">Tell us about your project</label>
          <textarea
            className="textarea-field"
            rows="4"
            placeholder="Enter project details"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="submit-container">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
