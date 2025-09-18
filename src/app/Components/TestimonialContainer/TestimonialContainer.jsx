"use client";

import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic"; // <-- import dynamic
import { FaQuoteLeft } from "react-icons/fa";
import "./TestimonialContainer.css";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import react-slick (no SSR)
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const defaultSettings = {
  centerMode: true,
  centerPadding: "40px",
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
  speed: 400,
  cssEase: "ease-in-out",
  touchThreshold: 500,
  arrows: false,
  adaptiveHeight: true, // helps with mobile alignment
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "40px",
      },
    },
  ],
};

const TestimonialContainer = ({ testimonials = [], sliderSettings = {} }) => {
  const settings = { ...defaultSettings, ...sliderSettings };
  const sliderRef = useRef(null);

  useEffect(() => {
    // Force slick to recalc layout on first mount
    const timer = setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Slider ref={sliderRef} {...settings}>
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <div className="content-wrapper">
            <div className="testimonial-quote-container">
              <FaQuoteLeft size="3rem" className="quote-icon" />
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
          </div>

          <div className="testimonial-profile">
            <div className="img-container">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
            </div>
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <span className="testimonial-position">{testimonial.position}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialContainer;
