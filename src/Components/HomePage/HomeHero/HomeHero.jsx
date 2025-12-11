import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import "./HomeHero.scss";

// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/autoplay';
// import { Autoplay } from 'swiper/modules';

// import video1 from "../../../Assets/Banners/1.jpg";
// import video2 from "../../../Assets/Banners/3.jpg";
// import video3 from "../../../Assets/Banners/2.jpg";
// import video4 from "../../../Assets/Banners/4.jpg";
import image from "../../../Assets/Banners/banner-image.webp"
import { FlipLinkBtn } from "../../../Designs/FlipLink";

const services = [
  {
    id: 1,
    title: "Premium Scaffolding Services Backed by Safety and Precision",
    description: "We deliver end-to-end scaffolding solutions from contracting to rentals using certified systems and sustainable practices built for long-term performance.",
    video: image,
  },
  // {
  //   id: 2,
  //   title: "Scaffolding Rentals & Contracting",
  //   description: "Flexible rental options for steel, aluminum, and formwork scaffolding, catering to diverse construction needs with prompt delivery and support.",
  //   video: video2,
  // },
  // {
  //   id: 3,
  //   title: "Aluminium Mobile Tower Sales",
  //   description: "High-strength cuplock systems available for sale and rent, ideal for maintenance, demolition, and complex construction projects.",
  //   video: video3,
  // },
  // {
  //   id: 4,
  //   title: "Rentals Equipment Rentals",
  //   description: "Lightweight, versatile aluminum towers designed for quick assembly, providing safe access solutions for indoor and outdoor tasks.",
  //   video: video4,
  // },
];

// Removed unused textVariants

export default function HomeHero() {
  // const ref = useRef();
  // const { scrollYProgress } = useScroll({ target: ref, start: ["start start", "end start"] });
  // const yBg = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const [currentSlide] = useState(services[0]);
  const [isHovered, setIsHovered] = useState(false);

  // const handleDotClick = (ele) => {
  //   setCurrentSlide(ele);
  // };

  // const swiperRef = useRef(null);

  const textVariants = {
    initial: {
      x: -300,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    },

    initial1: {
      y: 200,
      opacity: 0
    },
    animate1: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3
      }
    },
  } 

  const buttonVariants = {
    initial: {
      y: 50,
      opacity: 0
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: 1.2,
        ease: "easeOut"
      }
    }
  };

  const childVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target: ref,
    start: ["start start", "end start"]
  })
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 1000])

  return (
    <div className="hero">
      <div className="overlay"></div>
      <AnimatePresence mode="wait">
        <motion.img
          className="banner-video"
          key={currentSlide?.video}
          src={currentSlide?.video}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: .5 }} // Duration of fade effect
          autoPlay
          loop
          muted
          playsInline
        />
      </AnimatePresence>
      {/* <motion.div variants={textVariants} className="hero-content" style={{ y:yBg}}>
        <motion.div className="head-div">
          <motion.div variants={textVariants} initial="initial" whileInView="animate" className="head-top">
            <motion.hr variants={childVariants} className="head-top-hr"/>
            <motion.h3 variants={childVariants} className="top-title">
              Leading Outdoor & Digital Media Partner Across UAE & KSA
            </motion.h3>
          </motion.div>
        </motion.div>

        <motion.h1 variants={textVariants} initial="initial1" whileInView="animate1" className="title">
          Premium <span className="color">OOH & Digital Advertising</span><br/> Solutions That Elevate Your Brand
        </motion.h1>

        <motion.h2 variants={textVariants} initial="initial1" whileInView="animate1" className="description">
          With exclusive access to prime locations and 20+ years of expertise, IMedia247 delivers impactful campaigns that maximize visibility, engage audiences, and redefine brand presence across the region.
        </motion.h2>
        <motion.a 
          href="/"
          variants={buttonVariants}
          initial="initial" 
          whileInView="animate"
          className="btn btn-primary"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          <FlipLinkBtn isHovered={isHovered}>Contact Us</FlipLinkBtn>
        </motion.a>
      </motion.div> */}
      <div className="hero-content">
        <h2 className="new-top-title">Leading Outdoor & Digital Media Partner Across UAE & KSA</h2>
        <h1 className="new-main-title">Premium <span className="secondary-color">OOH & Digital Advertising</span><br/> Solutions That Elevate Your Brand</h1>
      </div>
    </div>
  );
}