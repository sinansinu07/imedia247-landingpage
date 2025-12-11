import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./CaseStudies.scss"

import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { TbArrowBigRight } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
import { IoIosClose } from "react-icons/io";
import { caseStudies } from "../../../Datasets/caseStudies";

export default function CaseStudies() {
    let categories = [ "All" ]
    const [activeCategory, setActiveCategory] = useState("All");

    caseStudies.forEach((ele) => {
        if (!categories.includes(ele.serviceCategory)) {
            categories.push(ele.serviceCategory)
        }
    })

    console.log(categories)

    const [ isDetailSectionOpen, setIsDetailSectionOpen ] = useState(false)
    const [ currentCaseStudy, setCurrentCaseStudy ] = useState(caseStudies[0])
    return (
        <section className="caseStudies-section section-container">
            <div className="head-div">
                <h1 className="main-title">Case Studies</h1>
            </div>

            <div className="category-filter-div">
                {
                    categories.map((category) => {
                        return (
                            <h3 key={category} onClick={() => setActiveCategory(category)} className={`category-name ${activeCategory === category ? "active" : ""} `}>{category}</h3>
                        )
                    })
                }
            </div>

            <div className="caseStudies-grid">
                {caseStudies
                    .filter((caseStudy) => activeCategory === "All" || caseStudy.serviceCategory === activeCategory)
                    .map((caseStudy) => (
                    <div 
                        onClick={() => {
                            setIsDetailSectionOpen(true)
                            setCurrentCaseStudy(caseStudy)
                        }}
                        className="caseStudies-card"
                    >
                        <div className="left-div">
                            <img src={caseStudy.image1} alt="case study" />
                        </div>
                        <div className="right-div">
                            <div className="same-line">
                            <h1 className="company-name">{caseStudy.companyName}</h1>
                                { caseStudy.companyLogo && <div className="logo-div">
                                    <img
                                        className="company-logo"
                                        src={caseStudy.companyLogo}
                                        alt={caseStudy.companyName}
                                    />
                                </div>}
                            </div>
                            <h1 className="caseStudy-title">{caseStudy.title}</h1>
                            <ul className="key-points">
                                {caseStudy.keyPoints.map((point) => {
                                    return (
                                        <li className="points" key={point.id}>
                                            <TbArrowBigRight className="icon"/>
                                            <h1 className="point-title">{point}</h1>
                                        </li>
                                        )
                                })}
                            </ul>
                            {/* <div className="comapny-description">{caseStudy.description}</div> */}
                            <div className="btn btn-primary">Read More</div>
                        </div>
                    </div>
                ))}
            </div>
            
            <AnimatePresence mode="wait">
                {isDetailSectionOpen && (
                    <>
                        <div className="overlay" onClick={() => setIsDetailSectionOpen(false)}></div>
                        <motion.div 
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%", opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }} 
                            className="caseStudy-detail-section">
                                <div className="caseStudy-details">
                                    <div className="close-btn" onClick={() => setIsDetailSectionOpen(false)}><IoIosClose className="icon"/></div>
                                    <div className="img-div">
                                        <img src={currentCaseStudy.image1} alt={currentCaseStudy.title} />
                                    </div>
                                    <div className="caseStudy-content">
                                        <h2 className="category-name">{currentCaseStudy.category}</h2>
                                        <h1 className="main-title">{currentCaseStudy.title}</h1>
                                        <p className="description">{currentCaseStudy.description}</p>
                                        <div className="section-content">
                                        {
                                            currentCaseStudy?.sections?.map((section) => {
                                                return (
                                                    <div key={section.id} className="section-div">
                                                        <h1 className="section-head">{section.title}</h1>
                                                        <p className="section-description">{section.description}</p>
                                                        <div className="section-points">
                                                            {section?.points?.map((point) => {
                                                                return (
                                                                    <li key={point.id} className="points">
                                                                        <div className="title-div">
                                                                            <TbArrowBigRight className="icon"/>
                                                                            <h1 className="point-title">{point.title}</h1>
                                                                        </div>
                                                                        <p className="point-description">{point.description}</p>
                                                                    </li>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                )})
                                            }
                                        </div>
                                        {/* <div className="casestudy-conclusion">
                                            <h1 className="conclusion-title">{currentCaseStudy.conclusion.title}</h1>
                                            <p className="conclusion-description">{currentCaseStudy.conclusion.description}</p>
                                        </div> */}
                                    </div>
                                </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}