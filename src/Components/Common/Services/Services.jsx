import { services } from "../../../Datasets/services";
import "./Services.scss"
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FlipLinkBtn } from "../../../Designs/FlipLink";

export default function Services() {
    const [ selectedService, setSelectedService ] = useState(services[1])
    const handleServiceClick = (serviceId) => {
        setSelectedService(services.find(ele => ele.id === serviceId))
    }
    const [isHovered, setIsHovered] = useState(false);

    const controls = useAnimation();

    useEffect(() => {
        controls.start("animate");
    }, [selectedService, controls]);

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

    const childVariants1 = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    };

    return (
        <section id="services">
            <div className="services-section section-container">
                <div className="head-section-div">
                    <div className="head-div">
                        <motion.div variants={textVariants} initial="initial" whileInView="animate" className="head-top">
                            <motion.hr variants={childVariants} className="head-top-hr"/>
                            <motion.h3 variants={childVariants} className="top-title">What we do</motion.h3>
                        </motion.div>
                        <motion.h1 variants={textVariants1} initial="initial" whileInView="animate" className="main-title">Our <span className="color">Services</span></motion.h1>
                    </div>
                    <motion.p variants={textVariants1} initial="initial" whileInView="animate">
                        At IMedia, we pride ourselves on delivering top-quality OOH and digital advertising products that meet international safety standards. With over 20 years of experience, our offerings are trusted by industry leaders across the UAE & KSA for their reliability and performance. 
                    </motion.p>
                </div>
                <div className="services-container">
                    <div className="service-head-div">
                        {services.map((ele) => {
                            return (
                                <div key={ele.id} className={`service ${ele.id === selectedService.id ? "active" : ""}`} onClick={() => handleServiceClick(ele.id)}>
                                    <div className="icon-div">
                                        <img src={ele.icon1} alt="" className="icon icon-default" />
                                        <img src={ele.icon2} alt="" className="icon icon-hover" />
                                    </div>
                                    <p className="service-name">
                                        {ele.title}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                    <div className="service-details-div">
                        <div className="img-div">
                            <img src={selectedService.image} alt="" />
                        </div>
                        <div className="service-details">
                            <motion.div variants={textVariants1} initial="initial" whileInView="animate">
                                <motion.h1 variants={childVariants1}>{selectedService.title}</motion.h1>
                                <motion.p variants={childVariants1}>{selectedService.description}</motion.p>
                                <motion.p variants={childVariants1}>{selectedService.description2}</motion.p>
                                <motion.a variants={childVariants1} href={`/`}>
                                <div className="btn" 
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                ><FlipLinkBtn isHovered={isHovered}>Service Details</FlipLinkBtn></div></motion.a>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}