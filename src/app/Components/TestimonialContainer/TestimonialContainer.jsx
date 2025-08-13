"use client";

import React from "react";
// UPDATED: Import the icon from the library
import { FaQuoteLeft } from "react-icons/fa";
import "./TestimonialContainer.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  return (
    <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div className="testimonial-card" key={index}>
          <div className="content-wrapper">
            {/* UPDATED: Replaced the div with the icon component */}
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
            <span className="testimonial-position">
              {testimonial.position}
            </span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialContainer;