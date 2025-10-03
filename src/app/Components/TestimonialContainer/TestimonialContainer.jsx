// TestimonialContainer.jsx

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
        centerMode: true,
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

  // ✅ Force slick recalc on mount + visibility/tab switch
  useEffect(() => {
    if (!mounted || !sliderRef.current) return;

    const recalc = () => {
      try {
        // Force slick to reset internal track height
        sliderRef.current.slickGoTo(0, true);
        sliderRef.current.innerSlider.onWindowResized();
      } catch (err) {
        console.warn("Slick recalc error:", err);
      }
    };

    // Run once after mount
    const t = setTimeout(recalc, 300);

    // Run again on tab visibility change
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        recalc();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      clearTimeout(t);
      document.removeEventListener("visibilitychange", handleVisibility);
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
            <span className="testimonial-position">{testimonial.position}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialContainer;
