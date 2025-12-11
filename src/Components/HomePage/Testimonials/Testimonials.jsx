import "./Testimonials.scss"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import image from "../../../Assets/Common/dummy.png"
import { motion } from "framer-motion";
import { FlipLinkBtn } from "../../../Designs/FlipLink";
import { useState } from "react";

const testimonials = [
    {
      name: "Marco Bizzarri",
      position: "CEO, Fendi",
      quote:
        "IMedia's OOH campaigns have elevated our brand presence across UAE & KSA. Their strategic locations and creative execution delivered exceptional results for Fendi.",
      image: image,
    },
    {
      name: "Tim Cook",
      position: "CEO, Apple",
      quote:
        "Working with IMedia has been transformative for our brand visibility. Their digital advertising solutions and prime locations perfectly align with Apple's innovative approach.",
      image: image,
    },
    {
      name: "Patrizio Bertelli",
      position: "CEO, Prada",
      quote:
        "IMedia's expertise in luxury brand advertising is unmatched. They understand our brand values and deliver campaigns that resonate with our sophisticated audience.",
      image: image,
    },
    {
      name: "Oliver Zipse",
      position: "CEO, BMW",
      quote:
        "BMW's partnership with IMedia has been outstanding. Their comprehensive OOH and digital solutions have significantly boosted our brand engagement across the region.",
      image: image,
    },
];

const textVariants = {
    initial: {
        x: -100,
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
}

const textVariants1 = {
    initial: {
        y: 100,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.3
        }
    },
}

const childVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

export default function Testimonials() {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
        <section>
            <div className="Testimonials-section section-container">
                <div className="head-div">
                    <motion.div variants={textVariants} initial="initial" whileInView="animate" className="head-top">
                        <motion.hr variants={childVariants} className="head-top-hr"/>
                        <motion.h3 variants={childVariants} className="top-title">Feedback</motion.h3>
                    </motion.div>
                    <motion.h1 variants={textVariants1} initial="initial" whileInView="animate" className="main-title">What <span className="color">Our Clients</span><br/> Say About Us</motion.h1>
                    <motion.p variants={textVariants1} initial="initial" whileInView="animate"> Our clients' trust and satisfaction are the driving force behind our success. Their positive feedback speaks volumes about our commitment to excellence.</motion.p>
                    <motion.a href="/" variants={textVariants1} initial="initial" whileInView="animate">
                        <div 
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="btn btn-primary">
                            <FlipLinkBtn isHovered={isHovered}>
                                Contact Us
                            </FlipLinkBtn>
                        </div>
                    </motion.a>
                </div>
                <div className="Testimonials-container">
                    <Splide
                        options={{
                            perPage: 1,
                            gap: "20px",
                            autoplay: true,
                            speed: 1000,
                            rewind: true,
                            rewindByDrag: true,
                        }}
                    >
                        {testimonials.map((item) => (
                            <SplideSlide key={item.id}>
                                <p>{item.quote}</p>
                                <div className="details">
                                    <img src={item.image} alt="" />
                                    <div className="title-div">
                                        <h1 className="name">{item.name}</h1>
                                        <h4 className="position">{item.position}</h4>
                                    </div>
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </section>
    )
}