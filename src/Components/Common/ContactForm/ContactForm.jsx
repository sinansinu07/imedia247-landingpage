import "./ContactForm.scss"
import { FaFacebook, FaFacebookF, FaLinkedin, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import React, { useState } from 'react';
import { TextField, Button, Box, Radio, RadioGroup, FormControlLabel, Checkbox } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import { FlipLinkBtn } from "../../../Designs/FlipLink";
import { motion } from "framer-motion";

export default function ContactForm() {
    const [isHovered, setIsHovered] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        countryCode: '+971',
        phone: '',
        userType: 'Individual',
        company: '',
        email: '',
        message: '',
        recaptcha: false,
    });
    
    const handleUpdate = (field) => (event) => {
        const inputValue = event.target.value;
        setFormData((prev) => ({ ...prev, [field]: inputValue }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Add your submission logic here (e.g. send to API)
    };

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
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
    };

    return (
        <section id="contact-form">
            <div className="contact-form section-container">
                {/* Head Section */}
                <div className="head-section-div">
                    <div className="head-div">
                        <motion.div variants={textVariants} initial="initial" whileInView="animate" className="head-top">
                            <motion.hr variants={childVariants} className="head-top-hr"/>
                            <motion.h3 variants={childVariants} className="top-title">Get in touch</motion.h3>
                        </motion.div>
                        <motion.h1 variants={textVariants1} initial="initial" whileInView="animate" className="main-title">Contact <span className="color">Us</span></motion.h1>
                    </div>
                    <motion.p variants={textVariants1} initial="initial" whileInView="animate">
                        Have questions or ready to elevate your brand? Reach out to us and let's discuss how we can help you achieve maximum visibility across UAE & KSA.
                    </motion.p>
                </div>

                {/* Content Section - Two Columns */}
                <div className="contact-content-wrapper">
                    {/* Left Side - Contact Info */}
                    <motion.div className="contact-info-left" variants={textVariants} initial="initial" whileInView="animate">
                        <motion.h1 className="contact-heading" variants={childVariants}>
                            Get in Touch with <span className="color">IMedia247</span>
                        </motion.h1>
                        
                        <motion.div className="contact-details-list" variants={textVariants1} initial="initial" whileInView="animate">
                            <motion.div className="contact-item" variants={childVariants1}>
                                <HiLocationMarker className="contact-icon" />
                                <p>21st Floor, Festival Tower, Dubai Festival City. Dubai - United Arab Emirates.</p>
                            </motion.div>
                            
                            <motion.div className="contact-item" variants={childVariants1}>
                                <HiPhone className="contact-icon" />
                                <a href="tel:+97143588855">+971 4 358 8855</a>
                            </motion.div>
                            
                            <motion.div className="contact-item" variants={childVariants1}>
                                <HiMail className="contact-icon" />
                                <a href="mailto:info@media247.ae">info@media247.ae</a>
                            </motion.div>
                        </motion.div>
                    </motion.div>

                    {/* Right Side - Contact Form */}
                    <div className="contact-form-right">
                        <form
                            component="form"
                            onSubmit={handleSubmit}
                            className="contact-form-wrapper"
                        >
                            <div>
                                <TextField
                                    label="Full Name"
                                    variant="outlined"
                                    value={formData.fullName}
                                    onChange={handleUpdate('fullName')}
                                    fullWidth
                                    className="form-field"
                                />
                            </div>

                            <div className="phone-row">
                                <Autocomplete
                                    value={formData.countryCode}
                                    onChange={(event, newValue) => {
                                        setFormData((prev) => ({ ...prev, countryCode: newValue || '+971' }));
                                    }}
                                    options={['+971', '+966', '+1', '+44', '+971']}
                                    renderInput={(params) => <TextField {...params} label="Code" className="form-field country-code" />}
                                    className="country-code-select"
                                />
                                <TextField
                                    label="Phone"
                                    variant="outlined"
                                    value={formData.phone}
                                    onChange={handleUpdate('phone')}
                                    fullWidth
                                    className="form-field"
                                />
                            </div>

                            <div className="radio-group-wrapper">
                                <RadioGroup
                                    row
                                    value={formData.userType}
                                    onChange={(e) => setFormData((prev) => ({ ...prev, userType: e.target.value }))}
                                    className="user-type-radio"
                                >
                                    <FormControlLabel value="Individual" control={<Radio />} label="Individual" />
                                    <FormControlLabel value="Corporate" control={<Radio />} label="Corporate" />
                                </RadioGroup>
                            </div>

                            <div>
                                <TextField
                                    label="Company"
                                    variant="outlined"
                                    value={formData.company}
                                    onChange={handleUpdate('company')}
                                    fullWidth
                                    className="form-field"
                                />
                            </div>

                            <div>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleUpdate('email')}
                                    fullWidth
                                    className="form-field"
                                />
                            </div>

                            <div style={{ width: '100%' }}>
                                <TextField
                                    label="Message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleUpdate('message')}
                                    fullWidth
                                    className="form-field"
                                />
                            </div>

                            <div className="recaptcha-wrapper">
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={formData.recaptcha}
                                            onChange={(e) => setFormData((prev) => ({ ...prev, recaptcha: e.target.checked }))}
                                        />
                                    }
                                    label={
                                        <span className="recaptcha-label">
                                            I'm not a robot
                                            <span className="recaptcha-logo">reCAPTCHA</span>
                                            <a href="#" className="privacy-link">Privacy - Terms</a>
                                        </span>
                                    }
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >
                                <FlipLinkBtn isHovered={isHovered}>Send</FlipLinkBtn>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}