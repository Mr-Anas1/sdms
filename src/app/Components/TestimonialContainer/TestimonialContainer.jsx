"use client";

import React,{useRef,useEffect} from "react";
// UPDATED: Import the icon from the library
import { FaQuoteLeft } from "react-icons/fa";
import "./TestimonialContainer.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Dynamically import react-slick (disable SSR)
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
  adaptiveHeight: true,
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
    const sliderRef = useRef(null);
  const settings = { ...defaultSettings, ...sliderSettings };
  const sliderRef = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [sliderKey, setSliderKey] = useState("ssr");

  useEffect(() => {
    // Delay mount until client is ready
    setMounted(true);

    // Force a re-mount of Slider on client with a stable key (fixes first-load on mobile)
    const key = typeof window !== "undefined" && window.innerWidth < 768 ? "mobile" : "desktop";
    // next tick to ensure layout is ready
    const raf = requestAnimationFrame(() => setSliderKey(`${key}-mounted`));

    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (mounted && sliderRef.current) {
      // Force slick to recalc after hydration
      const recalc = () => {
        try {
          // Jump to first slide to normalize position
          sliderRef.current?.slickGoTo?.(0, true);
        } catch { }
        window.dispatchEvent(new Event("resize"));
      };

      const t = setTimeout(recalc, 200);

      // Also handle orientation and visibility changes on mobile
      const onOrientation = () => setTimeout(recalc, 50);
      const onVisibility = () => {
        if (!document.hidden) setTimeout(recalc, 50);
      };

      window.addEventListener("orientationchange", onOrientation);
      document.addEventListener("visibilitychange", onVisibility);

      return () => {
        clearTimeout(t);
        window.removeEventListener("orientationchange", onOrientation);
        document.removeEventListener("visibilitychange", onVisibility);
      };
    }
  }, [mounted]);

  if (!mounted) return null; // render nothing until client is ready

  useEffect(() => {
    // Force slick to recalc layout on mobile
    if (sliderRef.current) {
      setTimeout(() => {
        sliderRef.current.slickGoTo(0); // re-render track
      }, 100);
    }
  }, []);

  return (
    <Slider ref={sliderRef} {...settings} >
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
