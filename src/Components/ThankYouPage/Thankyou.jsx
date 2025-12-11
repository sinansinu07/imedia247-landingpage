import React, { useEffect } from "react";
import "./ThankYou.css";

import Helmet from "../../General/Helmet";
import banner1 from "../../Assets/Banners/bg-image.webp";
// import { initThankYouPageScripts } from "../../Utils/scripts";

export default function Thankyou() {    
    // On Thank You Page
    // useEffect(() => {
    //     const cleanup = initThankYouPageScripts();
    //     return cleanup;
    // }, []);

    return (
        <>
            <Helmet title="Symphony by Chaimaa | Thank You" />
            <div className="thankyou-hero">
                <div className="overlay"></div>
                <div className="banner-container">
                    <img
                        className="banner-image active"
                        src={banner1}
                        alt="Thank You Banner"
                    />
                </div>
                
                {/* Content Text - Left Bottom */}
                <div className="hero-content-left">
                    <h1 className="content-title">THANK YOU</h1>
                    <p className="content-description">We'll get back to you soon</p>
                    <a href="/">
                        <button className="btn btn-glass content-button">
                            Back To Home
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
} 