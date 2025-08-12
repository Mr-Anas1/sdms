"use client";
import { useState, useEffect } from "react";
import "./ContactForm.css";

export default function ContactForm() {
  const [currentTime, setCurrentTime] = useState("");
  const [formType, setFormType] = useState("Say Hello");
  const [statusMessage, setStatusMessage] = useState(""); // State for status message

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

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      company: e.target.company?.value || "",
      phone: e.target.phone?.value || "",
      projectType: e.target.projectType?.value || "",
      budget: e.target.budget?.value || "",
      hearAbout: e.target.hearAbout?.value || "",
      message: e.target.message.value,
    };

    const endpoint = formType === "Say Hello" ? "/api/sayHello" : "/api/getAQuote";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatusMessage("Message sent successfully!"); // Set success message
      } else {
        setStatusMessage("Failed to send message. Please try again."); // Set failure message
      }
    } catch (error) {
      setStatusMessage("An error occurred. Please try again."); // Set error message
    }
  };

  return (
    <div className="contact-form-container">
      {/* Header Row */}
      <div className="header-row">
        <div className="button-group">
          <button
            onClick={() => {setFormType("Say Hello"); setStatusMessage('')} }
            className={`button ${formType === "Say Hello" ? "active" : ""}`}
          >
            Say Hello!
          </button>
          <button
            onClick={() => {setFormType("Get A Quote"); setStatusMessage('')} }
            className={`button ${formType === "Get A Quote" ? "active" : ""}`}
          >
            GET A QUOTE
          </button>
        </div>
        <div className="time-display ">{currentTime}</div>
      </div>

      {/* Form Header */}
      <h2 className="form-header">{formType}</h2>

      {/* Form */}
      <form className="form" onSubmit={handleSubmit}>
        <div className="grid">
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input-field"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input-field"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        {formType === "Get A Quote" && (
          <>
            <div>
              <label className="label">Company/Organization</label>
              <input
                type="text"
                name="company"
                className="input-field"
                placeholder="Enter company/organization"
                required
              />
            </div>
            <div>
              <label className="label">Phone</label>
              <input
                type="tel"
                name="phone"
                className="input-field"
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div>
              <label className="label">Project Type</label>
              <select name="projectType" className="input-field" required>
                <option value="" disabled>
                  Select a project type
                </option>
                <option value="marketing">Social Media Marketing</option>
                <option value="branding">Branding</option>
                <option value="development">Web or App Development</option>
                <option value="production">Video Production</option>
                <option value="design">Graphic Design</option>
                <option value="ad">Ad Production</option>
                <option value="writing">Copy Writing</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="label">Project Budget</label>
              <input
                type="text"
                name="budget"
                className="input-field"
                placeholder="Enter project type budget"
                required
              />
            </div>
            <div>
              <label className="label">How did you hear about us?</label>
              <input
                type="text"
                name="hearAbout"
                className="input-field"
                placeholder="Enter details"
                required
              />
            </div>
          </>
        )}

        {formType === "Say Hello" && (
          <div>
            <label className="label">Company/Organization</label>
            <input
              type="text"
              name="company"
              className="input-field"
              placeholder="Enter company/organization"
              required
            />
          </div>
        )}

        <div>
          <label className="label">Tell us about your project</label>
          <textarea
            name="message"
            className="textarea-field"
            rows="4"
            placeholder="Enter project details"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="submit-container">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>

      {/* Status Message */}
      {statusMessage && (
        <div
          className={`status-message ${
            statusMessage.includes("successfully") ? "success" : "error"
          }`}
        >
          {statusMessage}
        </div>
      )}
    </div>
  );
}