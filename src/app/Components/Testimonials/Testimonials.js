"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ScrollingText from "../ScollingText/ScrollingText";
import "./Testimonials.css";
import { useRef } from "react";

const testimonial = [
  {
    name: "Melissa Hurtado",
    text: "Excited to highlight the exceptional talents of Rukshana, an incredible professional and dear friend! Rukshana of Sabeena Digital Media Services effortlessly wears many hats, showcasing exceptional skills in social media management, storytelling, and crafting engaging content for newsletters and marketing emails. Working alongside Rukshana is an absolute delight. The positive energy she brings to every collaboration is infectious, and her dedication to excellence is truly commendable! ",
    position: "Property Manager, Self employed ",
    image: "./images/MelissaHurta.jpeg",
  },
  {
    name: "Mariel McCann",
    text: "Rukshana of Sabeena Digital Media Services is a creative and talented social media content creator and manager! Rukshana has helped our 501c3 Shooting Stars Foundation by creating gorgeous collateral with high impact. She is patient and values all requests and feedback. She is an integral part of our social media and digital design strategy. Thank you, Rukshana for your passion, dedication",
    position: "Shooting Stars (Former) Senior Program Manager",
    image: "./images/Mariel.jpeg",
  },
  {
    name: "Vidhya",
    text: "We had the pleasure of working with Rukshana as our digital marketing partner at Right Dots, and her contributions were invaluable. Rukshana was instrumental in driving the marketing efforts for our Learning Series, showcasing her expertise in reaching and engaging our target audience. Her support during the sessions was exceptional; she not only helped us craft compelling content but also ensured that everything ran smoothly. Rukshana's creativity, professionalism, and dedication truly made a difference in the success of our initiative. We look forward to collaborating with her again in the future!",
    position: "Founder, Right Dots",
    image: "./images/vidhya.jpg",
  },
  {
    name: "Shivaranjani",
    text: "Need high impact content to be written? Look no further than Rukshana of Sabeena Digital Media Services!!! Rukshana weaves magic through her words that can leave you inspired,  touched and stirred up. You can bank on Rukshana and her team to deliver high quality content within required timelines in the most professional way. Here is a young girl with unbridled enthusiasm and passion to create impact through her powerful content - all the best to you Rukshana!!!",
    position: "Volunteer, Government School",
    image: "./images/shivaranjani.jpeg",
  },
  {
    name: "Chitra Shah",
    text: "I highly recommend SDMS for their exceptional work on our annual report and brochure. Their professionalism, creativity, and attention to detail transformed complex information into clear, visually engaging content.Rukshana’s collaborative approach, innovative design, and commitment to quality delivered results that exceeded our expectations and effectively highlighted our organization’s vision and achievements.SDMS is an excellent choice for any design or communication project requiring expertise and excellence..",
    position: "Director, Satya Special School",
    image: "./images/chitra.jpg",
  },
  {
    name: "Ratna Singh",
    text: "Sabeena Digital Media Services has been a game-changer for Earth Safety Valve, managing all aspects of our organisation with excellence. From organizing an inspiring event with school kids from Nepal to creating stunning graphics, managing our social media, and crafting impactful content for our magazine featured at COP27 in Cairo, their creativity and professionalism have been unmatched. A true partner in driving meaningful impact!",
    position: "Founder, Earth Safety Valve",
    image: "./images/ratna.jpeg",
  },
  {
    name: "Dnc Teja",
    text: "Working with Sabheena Digital Marketing has been an incredible experience. Their personal approach and genuine care made it feel less like a business deal and more like working with a trusted friend.They understood my vision perfectly and brought in creativity and strategy that delivered results beyond expectations. It’s rare to find a team so committed and easy to connect with on a personal level.Thank you, Rukshana, for your unwavering support and for making every step of the journey seamless.",
    position: "Director, Proven Group of Companies",
    image: "./images/teja.jpg",
  },
  {
    name: "Mohamed Misfer",
    text: "Rukshana, thank you very much for your service. I had a positive impact on my business after I made my business's presence online through your website development service, a lot of work's pressure has been reduced as the customers usually call me to ask me their doubts and queries, but now the website has all the necessary details included so I get less calls just for enquiries and more calls that are ready to buy the service. Once again, thank you very much and I look forward to working with you again very soon!",
    position: "Founder, Misfer Media",
    image: "./images/misfer.jpeg",
  },
  {
    name: "Nitin JBS",
    text: "I sincerely appreciate Sabeena Digital Media Services for organizing the Creatathon for a Cause at Thassim Beevi Abdul Kader College For Women. Their professionalism and dedication to empowering young minds were evident throughout.Through meticulous planning and collaboration with Principal Dr. S. Sumaya and the college administration, they created a thriving environment for students to showcase their talents. The team's passion for fostering creativity and collaboration was truly inspiring.Thank you for making a meaningful impact and inspiring the next generation of leaders!",
    position: "Product Manager @ Way.com | Volunteer",
    image: "./images/nitin.jpeg",
  },

  // Additional testimonials...
];

const Testimonials = ({ testimonials }) => {
  const wrapperRef = useRef();
  const [dragConstraint, setDragConstraint] = useState(0);

  useEffect(() => {
    const updateDragConstraints = () => {
      if (wrapperRef.current) {
        const wrapperWidth = wrapperRef.current.scrollWidth;
        const containerWidth = wrapperRef.current.offsetWidth;
        const newConstraint = -(wrapperWidth - containerWidth);

        setDragConstraint(newConstraint < 0 ? newConstraint : 0);
      }
    };

    updateDragConstraints();
    window.addEventListener("resize", updateDragConstraints);

    return () => window.removeEventListener("resize", updateDragConstraints);
  }, []);

  return (
    <div className="testimonials-container" id="testimonials">
      <div className="testimonials-heading-main">
        <section className="scroll-reveal">
          <h2 className="testimonials-heading">
            <span>partner's</span>
            <br />
            <span>testimony</span>
          </h2>
        </section>
      </div>

      <motion.div
        ref={wrapperRef}
        className="testimonials-wrapper"
        drag="x"
        dragConstraints={{ left: dragConstraint, right: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {testimonial.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p className="testimonial-text">"{testimonial.text}"</p>
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <span className="testimonial-position">{testimonial.position}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
