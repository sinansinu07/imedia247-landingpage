import "./AboutCompany.scss"
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import image from "../../../Assets/Projects/project2.webp"
import { FlipLinkBtn } from "../../../Designs/FlipLink";
import { useState } from "react";

export default function AboutCompany() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
    });

    const [isHovered, setIsHovered] = useState(false);

    const textVariants = {    
        initial: {
            y: 200,
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

    const textVariants2 = {
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

    const buttonVariants = {
        initial: {
          y: 30,
          opacity: 0
        },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.6,
            delay: 0.8,
            ease: "easeOut"
          }
        }
    };

    const childVariants = {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    };
    
    const childVariants2 = {
        initial: { x: -100, opacity: 0 },
        animate: { x: 0, opacity: 1, transition: { duration: 0.6 } },
    };
    
    return (
        <section id="about-us">
            <div className="about-company-section section-container">
                <motion.div variants={textVariants} initial="initial" whileInView="animate" className="head-div">
                    <div className="left">
                        <motion.div variants={textVariants2} className="head-top">
                            <motion.hr variants={childVariants2} className="head-top-hr"/>
                            <motion.h3 variants={childVariants2} className="top-title">feel the future</motion.h3>
                        </motion.div>
                        <motion.h1 variants={childVariants} className="main-title">Leading <span className="color">OOH and digital advertising</span> across UAE & KSA, delivering <span className="color">maximum brand visibility</span></motion.h1>
                    </div>
                    <div className="about-company-left">
                        <motion.p variants={childVariants} className="description">With exclusive access to prime locations, we deliver unmatched visibility, empowering brands to captivate audiences effortlessly.</motion.p>
                        <motion.p variants={childVariants} className="description">Backed by 20+ years of expertise, our leadership drives innovation in advertising.</motion.p>
                        <a href="#contact-form">
                                <motion.div 
                                    variants={buttonVariants}
                                    className="btn btn-primary"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                    ><FlipLinkBtn isHovered={isHovered}>Get In Touch</FlipLinkBtn>
                                </motion.div>
                        </a>
                    </div>
                </motion.div>
                <div className="stats-image-div">
                    <div ref={ref} className="stats-grid">
                        <div className="stats-item">
                            <span>
                            {inView && <CountUp end={40} duration={2} />}+
                            </span>
                            <p>Years of OOH Advertising Expertise</p>
                        </div>
                        <div className="stats-item">
                            <span>
                            {inView && <CountUp end={500} duration={2} />}+
                            </span>
                            <p>Prime Advertising Locations</p>
                        </div>
                        {/* <div className="stats-item">
                            <span>
                            {inView && <CountUp end={10000} duration={2} />}+
                            </span>
                            <p>Successful Campaigns Delivered</p>
                        </div>
                        <div className="stats-item">
                            <span>
                            {inView && <CountUp end={2000} duration={2} />}+
                            </span>
                            <p>Brands Served Across UAE & KSA</p>
                        </div> */}
                    </div>
                    <div className="img-div">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}