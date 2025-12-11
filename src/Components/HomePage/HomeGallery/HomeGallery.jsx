import "./HomeGallery.scss"
import { motion } from "framer-motion"

import project1 from "../../../Assets/Gallery/project1.jpg"
import project2 from "../../../Assets/Gallery/project2.jpg"
import project3 from "../../../Assets/Gallery/project3.jpg"
import project4 from "../../../Assets/Gallery/project4.jpg"
import project5 from "../../../Assets/Gallery/project5.jpg"
import project6 from "../../../Assets/Gallery/project6.jpg"
import project7 from "../../../Assets/Gallery/project7.jpg"
import project8 from "../../../Assets/Gallery/project8.jpg"
import project9 from "../../../Assets/Gallery/project9.jpg"
import project10 from "../../../Assets/Gallery/project10.jpg"
import { FlipLinkBtn } from "../../../Designs/FlipLink"
import { useState } from "react"

const gallery = [
    {
        id: 1,
        type: "Project",
        image: project1
    },
    {
        id: 2,
        type: "Project",
        image: project2
    },
    {
        id: 3,
        type: "Project",
        image: project3
    },
    {
        id: 4,
        type: "Project",
        image: project4
    },
    {
        id: 5,
        type: "Project",
        image: project5
    },
    {
        id: 6,
        type: "Project",
        image: project6
    },
]

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

export default function HomeGallery() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section>
            <div className="gallery-section section-container">
                <div className="head-div">
                    <motion.div variants={textVariants} initial="initial" whileInView="animate" className="head-top">
                        <motion.hr className="head-top-hr"/>
                        <motion.h3 className="top-title">What we do</motion.h3>
                    </motion.div>
                    <motion.h1 variants={textVariants1} initial="initial" whileInView="animate" className="main-title">Our <span className="color">Gallery</span></motion.h1>
                </div>
                <div className="gallery-grid">
                    {gallery.map((ele) => {
                        return (
                            <div className="gallery">
                                <img src={ele.image} alt="" />
                            </div>
                        )
                    })}
                </div>
                <div href="/gallery" className="btn-container">
                    <a href="">
                        <div 
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            className="btn">
                                <FlipLinkBtn isHovered={isHovered}>Explore More</FlipLinkBtn>
                            
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}