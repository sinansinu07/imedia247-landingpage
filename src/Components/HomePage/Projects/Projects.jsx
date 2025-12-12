import "./Projects.scss"
import { motion } from "framer-motion";

import project1 from "../../../Assets/Projects/project1.webp"
import project2 from "../../../Assets/Projects/project2.webp"
import project3 from "../../../Assets/Projects/project3-new.webp"
import project4 from "../../../Assets/Projects/project4.webp"
import project5 from "../../../Assets/Projects/project6.webp"
import project6 from "../../../Assets/Projects/project8.webp"

 

export default function Projects() {
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
    const projects = [
        { id: 1, image: project1, name: "Hoardings", location: "Dubai", service: "Hoardings", description: "Large‑format hoarding displays strategically placed across Dubai for maximum brand visibility. Premium print quality ensures impactful messaging at high-traffic locations." },
        { id: 2, image: project2, name: "Unipol", location: "Dubai", service: "Unipol", description: "Innovative unipole advertising structures providing 360-degree brand exposure. Perfect for high-visibility locations with premium positioning and modern design." },
        { id: 3, image: project3, name: "Wall backlights", location: "Dubai", service: "Wall backlights", description: "Illuminated wall backlight displays that create stunning visual impact. LED technology ensures vibrant colors and clear messaging day and night." },
        { id: 4, image: project4, name: "Glass Graphics", location: "Dubai", service: "Glass Graphics", description: "Premium glass graphics installations for sophisticated brand presentation. High-quality printing on glass surfaces creates elegant and modern advertising solutions." },
        { id: 5, image: project5, name: "DOOH", location: "Dubai", service: "DOOH", description: "Digital Out-of-Home advertising with dynamic content capabilities. Real-time updates, interactive features, and data-driven targeting for maximum engagement." },
        { id: 6, image: project6, name: "Hoardings", location: "KSA", service: "Hoardings", description: "Large‑format hoarding displays across Saudi Arabia for comprehensive brand reach. Strategically positioned to maximize visibility and impact in key markets." },
    ];

    return (
        <section id="assets">
            <div className="project-section section-container">
                <div className="head-section-div">
                    <div className="head-div">
                        <motion.div variants={textVariants} initial="initial" whileInView="animate" className="head-top">
                            <motion.hr variants={childVariants} className="head-top-hr"/>
                            <motion.h3 variants={childVariants} className="top-title">What we have done</motion.h3>
                        </motion.div>
                        <motion.h1 variants={textVariants1} initial="initial" whileInView="animate" className="main-title">Our <span className="color">Assets</span></motion.h1>
                    </div>
                    <motion.p variants={textVariants1} initial="initial" whileInView="animate">
                        We are proud to showcase our work and the results we have achieved for our clients.
                    </motion.p>
                </div>
                <div className="project-container">
                    <div className="projects-grid">
                        {projects.map((p) => (
                            <div className="project-card" key={p.id}>
                                <div className="card-image">
                                    <img src={p.image} alt={p.name} />
                                    <span className="badge-service">{p.service}</span>
                                    <div className="image-overlay" />
                                    <div className="hover-overlay">
                                        <div className="hover-content">
                                            <div className="hover-head">
                                                <h3 className="hover-title">{p.name}</h3>
                                                <span className="hover-location">{p.location}</span>
                                            </div>
                                            <p className="hover-description">{p.description}</p>
                                            <a href="#contact-form"><button className="learn-more-btn" type="button">Learn More</button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}