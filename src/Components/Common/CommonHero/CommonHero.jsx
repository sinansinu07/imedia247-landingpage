import "./CommonHero.scss"
import image from "../../../Assets/Banners/banner.webp";

export default function CommonHero(props) {
    return (
        <div className="common-hero">
            <div className="overlay"></div>
            <div className="hero-image-div">
                <img src={image} alt="Background" className="hero-image"/>
            </div>
            <div className="hero-content container1" initial="initial" whileInView="animate">
                <div className="head-div">
                    <div className="head-top">
                        <hr className="head-top-hr"/>
                        <h3 className="top-title">{props.title1}</h3>
                    </div>
                    <h1 className="main-title">{props.title2white} <span className="color">{props.title2red}</span></h1>
                </div>
            </div>
        </div>
    );
}