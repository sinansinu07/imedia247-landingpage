import React, { useEffect, useState } from 'react'
import "./Navbar.scss"

import logowhite from "../../../Assets/Logo/imedia-logo.png"
import logoblack from "../../../Assets/Logo/imedia-logo.png"

import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from "framer-motion"

import { IoIosArrowDown, IoMdCall } from "react-icons/io";
import { BiLogIn } from "react-icons/bi";
import { HiMenu, HiX, HiPhone } from "react-icons/hi";
import { services } from '../../../Datasets/services'
import { FlipLinkBtn } from '../../../Designs/FlipLink'
import useIsMobile from '../../../Utils/useIsMobile'

export default function Navbar(){
    const location = useLocation()
    // const [isAboutUsDropDownOpen, setIsAboutUsDropDownOpen] = useState(false)
    const [isServicesDropDownOpen, setIsServicesDropDownOpen] = useState(false)
    // const [isProductsDropDownOpen, setIsProductsDropDownOpen] = useState(false)
    const [ isSticky, setIsSticky ] = useState(false)
    const [isHovered, setIsHovered] = useState(false);
    const isMobile = useIsMobile(600);

    const [mobileMenu, setMobileMenu] = useState(false)

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    useEffect(() => {
        const handleScroll = () => {
        if (location.pathname.startsWith("/blogs/")) {
            setIsSticky(true); // Keep sticky if pathname matches
        } else {
            window.scrollY > 100 ? setIsSticky(true) : mobileMenu ? setIsSticky(true) : setIsSticky(false); // Update based on scroll position otherwise
        }
        };

        // Add the scroll event listener
        window.addEventListener("scroll", handleScroll);

        // Run once on mount to set initial sticky state
        handleScroll();

        // Cleanup the event listener on unmount
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, [location.pathname, mobileMenu]);

    const handleLinkClick = () => {
        setMobileMenu(false);
    };

    return (
        <div className={`navbar ${isSticky ? "sticky" : ""}`}>
        <div className="logo-div">
            <a href="/"><img src={!isSticky ? logoblack : logowhite} alt="Logo" className="logo"/></a>
        </div>
        <div className={`nav-links-div ${mobileMenu ? "mobile-menu-open" : ""}`}>
            <ul className={`menu-bar ${mobileMenu ? "mobile-menu-open" : "hide-mobile-menu"}`}>
                {/* <li><a href="/" className={location.pathname==="/" ? "" : ""}>Home</a></li> */}
                <li><a href="#about-us" onClick={handleLinkClick}>About Us</a></li>
                <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
                <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
                {/* <li><a href="/" className={location.pathname==="/blogs" ? "" : ""}>Blog</a></li> */}
            </ul>
        </div>
        <div className="navbar-right">
            {isMobile && (
                <div className="button-div">
                    <a href="#contact-form" onClick={handleLinkClick}>
                        <div 
                            className="btn btn-primary contact-icon-btn"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            aria-label="Contact Us">
                            <IoMdCall />
                        </div>
                    </a>
                </div>
            )}
            <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                {mobileMenu ? <HiX /> : <HiMenu />}
            </button>
            {!isMobile && (
                <div className="button-div">
                    <a href="#contact-form" onClick={handleLinkClick}>
                        <div 
                            className="btn btn-primary"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}>
                            <FlipLinkBtn isHovered={isHovered}>Contact Us</FlipLinkBtn>
                        </div>
                    </a>
                </div>
            )}
        </div>
        </div>
    )
}