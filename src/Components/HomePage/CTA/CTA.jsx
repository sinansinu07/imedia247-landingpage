import "./CTA.scss"
import { motion } from "framer-motion";
import { FlipLinkBtn } from "../../../Designs/FlipLink";
import { useState } from "react";

export default function CTA() {
    const [isHovered, setIsHovered] = useState(false);

    const textVariants = {
        initial: {
            y: 50,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        },
    }

    const childVariants = {
        initial: { y: 30, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    };

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
                delay: 0.4,
                ease: "easeOut"
            }
        }
    };

    const handleScrollToContact = (e) => {
        e.preventDefault();
        const contactSection = document.getElementById('contact-form');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="cta-section">
            <div className="cta-container">
                <motion.div 
                    variants={textVariants} 
                    initial="initial" 
                    whileInView="animate"
                    viewport={{ once: true, amount: 0.3 }}
                    className="cta-content"
                >
                    <motion.h2 variants={childVariants} className="cta-title">
                        Ready to <span className="color">Elevate Your Brand</span>?
                    </motion.h2>
                    <motion.p variants={childVariants} className="cta-description">
                        Let's discuss how we can help you reach your target audience with our premium OOH and digital advertising solutions across UAE & KSA.
                    </motion.p>
                    <motion.div 
                        variants={buttonVariants}
                        className="cta-button-wrapper"
                    >
                        <a 
                            href="#contact-form" 
                            onClick={handleScrollToContact}
                            className="cta-link"
                        >
                            <div 
                                className="btn btn-primary cta-button"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <FlipLinkBtn isHovered={isHovered}>Get In Touch</FlipLinkBtn>
                            </div>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

