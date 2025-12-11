import { Fragment } from "react";
import HomeHero from "../Components/HomePage/HomeHero/HomeHero";
import Projects from "../Components/HomePage/Projects/Projects";
import AboutCompany from "../Components/HomePage/AboutCompany/AboutCompany";
import Services from "../Components/Common/Services/Services";
import CTA from "../Components/HomePage/CTA/CTA";
import ContactForm from "../Components/Common/ContactForm/ContactForm";

export default function HomePage() {
    return (
        <Fragment>
            <HomeHero/>
            <AboutCompany/>
            <Services/>
            <CTA/>
            <Projects/>
            <ContactForm/>
        </Fragment>
    )
}