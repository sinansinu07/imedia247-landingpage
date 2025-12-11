import "./Certificates.scss"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import certificates1 from "../../../Assets/Certificates/1.jpg"
import certificates2 from "../../../Assets/Certificates/2.jpg"
import certificates3 from "../../../Assets/Certificates/3.jpg"

const testimonials = [
    {
        id: 1,
        image: certificates1,
    },
    {
        id: 2,
        image: certificates2,
    },
    {
        id: 3,
        image: certificates3,
    },
]

export default function Certificates() {
    return (
        <section>
            <div className="certifcates-section section-container">
                <div className="head-div">
                    <div>
                        <div className="head-top">
                            <hr className="head-top-hr"/>
                            <h3 className="top-title">What we Achieved</h3>
                        </div>
                        <h1 className="main-title">Our <span className="color">Certificates</span></h1>
                    </div>
                    <p>We make scaffolding easy - with a clear process that gets your project off the ground without delay.</p>
                </div>
                <div className="certifcates-container">
                    <Splide
                        options={{
                            perPage: 3,
                            perMove: 1,
                            gap: "20px",
                            autoplay: true,
                            speed: 1000,
                            rewind: true,
                            rewindByDrag: true,
                        }}
                    >
                        {testimonials.map((item) => (
                            <SplideSlide key={item.id}>
                                <div className="img-div">
                                    <img src={item.image} alt="" />
                                </div>
                            </SplideSlide>
                        ))}
                    </Splide>
                </div>
            </div>
        </section>
    )
}