import logo from "../../../Assets/Logo/imedia-logo.png"
import { FaFacebook, FaLinkedin, FaTelegram, FaTelegramPlane, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import "./Footer.scss"
import { RiInstagramFill } from "react-icons/ri"
import { useLocation } from "react-router-dom"
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    const location = useLocation()
    return (
        <footer>
            <div className="footer_row">
                <div className="footer_col">
                    <div className="contact_content">
                        <img src={logo} className="logo" alt="" />
                        <p>IMedia leads the OOH and digital advertising industry across UAE & KSA, providing brands with maximum visibility through exclusive prime locations and 20+ years of expertise.</p>
                        <div className="details">
                            <h2>Our Location</h2>
                            <p>Dubai, UAE</p>
                            <p>Riyadh, KSA</p>
                        </div>
                    </div>
                </div>
                <div className="footer_col">
                    <h1 className="head">Contact</h1>
                    <div className="contact_details">
                        <div className="details">
                            <h2>Phone</h2>
                            <p><a href="tel:+971501234567">+971 50 123 4567</a></p>
                            <p><a href="tel:+966501234567">+966 50 123 4567</a></p>
                        </div>
                        <div className="details">
                            <h2>Email</h2>
                            <p><a href="mailto:info@imedia247.com">info@imedia247.com</a></p>
                            <p><a href="mailto:support@imedia247.com">support@imedia247.com</a></p>
                        </div>
                        {/* <div className="details">
                            <h2>Working Hours</h2>
                            <p>24x7</p>
                        </div> */}
                    </div>
                </div>
                <div className="footer_col">
                    <h1 className="head">Quick Links</h1>
                    <ul>
                        <li><a className={location.pathname==="/" ? "active" : ""} href="/">Home</a></li>
                        <li><a className={location.pathname==="/about-us" ? "active" : ""} href="/">About Us</a></li>
                        <li><a className={location.pathname==="/services" ? "active" : ""} href="/">Services</a></li>
                        <li><a className={location.pathname==="/assets" ? "active" : ""} href="/assets">Our Assets</a></li>
                        <li><a className={location.pathname==="/blogs" ? "active" : ""} href="/">Blogs</a></li>
                        <li><a className={location.pathname==="/contact-us" ? "active" : ""} href="">Contact</a></li>
                    </ul>
                </div>
                <div className="footer_col">
                    <h1 className="head">Stay Connected</h1>
                    <div className="newsletter_details">
                        <p>Subscribe to our newsletter for the latest OOH advertising trends, campaign insights, and industry updates.</p>
                        <div className="newsletter_input">
                            <input className="input" type="text" placeholder="Enter your email address"/>
                            <button>Subscribe</button>
                        </div>
                        <p className="social_head">Follow us On :</p>
                        <div className="social_links">
                            <a href=""><FaFacebook /></a>
                            <a href=""><RiInstagramFill /></a>
                            <a href=""><FaYoutube /></a>
                            <a href=""><FaXTwitter /></a>
                            <a href=""><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 IMedia247. All rights reserved. | Leading OOH & Digital Advertising in UAE & KSA</p>
            </div>
        </footer>
    )
}

// {/* <a href="/" alt=""><img className='social' src={facebook} alt=""/></a>
// <a href="/" alt=""><img className='social' src={instagram} alt=""/></a>
// <a href="/" alt=""><img className='social' src={youtube} alt=""/></a>
// <a href="/" alt=""><img className='social' src={twitter} alt=""/></a>
// <a href="/" alt=""><img className='social' src={linkedin} alt=""/></a> */}