"use client";

import { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
    service: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Invalid mobile number. Must be 10 digits.";
    }
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          mobile: "",
          message: "",
          service: "",
        });
      } else {
        setSuccessMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contactSection" id="contact">
      <div className="innerWidth">
        <p className="contact-head">let's connect!</p>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <input
            type="text"
            name="name"
            className={`name ${errors.name ? "error" : ""}`}
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />

          {/* Email Field */}
          <input
            type="email"
            name="email"
            className={`email ${errors.email ? "error" : ""}`}
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />

          {/* Mobile Number Field */}
          <input
            type="number"
            name="mobile"
            className={`mobile ${errors.mobile ? "error" : ""}`}
            placeholder="Your Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
          />

          {/* Dropdown for Services */}
          <select
            name="service"
            className={`service ${errors.service ? "error" : ""}`}
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a Service</option>
            <option value="Digital Solutions & Development">
              Digital Solutions & Development
            </option>
            <option value="Creative Content and Services">
              Creative Content and Services
            </option>
            <option value="Marketing and Management">
              Marketing and Management
            </option>
            <option value="Event Marketing and Training Solutions">
              Event Marketing and Training Solutions
            </option>
          </select>

          {/* Message Field */}
          <textarea
            rows="1"
            name="message"
            placeholder="Message"
            className={`message ${errors.name ? "error" : ""}`}
            value={formData.message}
            onChange={handleChange}
          />

          {/* Submit Button */}
          <button className="contact-button" type="submit">
            Get in touch
          </button>
        </form>

        {/* Success Message */}
        {successMessage && <p className="success">{successMessage}</p>}
      </div>
    </div>
  );
}
