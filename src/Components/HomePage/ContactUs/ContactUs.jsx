import "./ContactUs.scss"
import { FaFacebook, FaFacebookF, FaLinkedin, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function ContactUs() {
    return (
        <section>
            <div className="contact-us section-container">
                <div className="contact-info">
                    <div className="head-div">
                        <div className="head-top">
                            <hr className="head-top-hr"/>
                            <h3 className="top-title">Contact us</h3>
                        </div>
                        <h1 className="main-title"><span className="color">Contact</span> information</h1>
                        <p>Quaddream Scaffolding Contracting LLC is one of the leading suppliers of scaffoldings since 2012</p>
                    </div>
                    <div className="contact-details">
                        <div className="contact">
                            <h1 className="head">Address</h1>
                            <div className="content">
                                <p>22 E11 - Al Garhoud</p>
                                <p>Dubai, UAE</p>
                            </div>
                        </div>
                        <div className="contact">
                            <h1 className="head">Email</h1>
                            <div className="content">
                                <p>info@quaddream.com</p>
                                <p>support@quaddream.com</p>
                            </div>
                        </div>
                        <div className="contact">
                            <h1 className="head">Phone</h1>
                            <div className="content">
                                <p>1 - 313 - 645 - 3395</p>
                                <p>1 - 469 - 970 - 2609</p>
                            </div>
                        </div>
                    </div>
                    <div className="social-links">
                        <a href="" alt=""><FaFacebookF /></a>
                        <a href="" alt=""><RiInstagramFill /></a>
                        <a href="" alt=""><FaYoutube /></a>
                        <a href="" alt=""><FaTwitter /></a>
                        <a href="" alt=""><FaLinkedinIn /></a>
                    </div>
                </div>
                <div className="contact-loc">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1804.3847415322336!2d55.339406!3d25.244688!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d0256c252a5%3A0x5df3bfe1132f1251!2sQuad%20Dream%20Trading%20LLC!5e0!3m2!1sen!2sae!4v1745318475614!5m2!1sen!2sae"
                        width="100%"
                        height="500px"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}