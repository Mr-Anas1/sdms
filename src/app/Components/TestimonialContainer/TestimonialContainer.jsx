"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TestimonialContainer.css";

// ✅ Dynamic import to avoid SSR issues in Next.js
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
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true, // 🚀 disable on mobile to fix enlargement
      },
    },
  ],
};

const TestimonialContainer = ({ testimonials = [], sliderSettings = {} }) => {
  const sliderRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const settings = { ...defaultSettings, ...sliderSettings };

  // ✅ Ensure component only runs client-side
  useEffect(() => {
    setMounted(true);
  }, []);

  // ✅ Fix layout on hydration + orientation change
  useEffect(() => {
    if (!mounted || !sliderRef.current) return;

    const recalc = () => {
      try {
        sliderRef.current.slickGoTo(0, true); // reset position
      } catch {}
      window.dispatchEvent(new Event("resize"));
    };

    const t = setTimeout(recalc, 150);

    window.addEventListener("orientationchange", recalc);
    document.addEventListener("visibilitychange", recalc);

    return () => {
      clearTimeout(t);
      window.removeEventListener("orientationchange", recalc);
      document.removeEventListener("visibilitychange", recalc);
    };
  }, [mounted]);

  if (!mounted) return null; // Avoid SSR mismatch

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
