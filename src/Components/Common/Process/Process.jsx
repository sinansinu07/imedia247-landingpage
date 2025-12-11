import "./Process.scss"
import { motion } from "framer-motion"

const process = [
    {
        id: 1,
        title: "Strategy & Planning",
        description: "We analyze your brand objectives and develop a comprehensive OOH and digital advertising strategy tailored to your target audience."
    },
    {
        id: 2,
        title: "Location Selection",
        description: "Our team identifies and secures prime locations across UAE & KSA that align with your campaign goals and maximize brand visibility."
    },
    {
        id: 3,
        title: "Creative Development",
        description: "We design compelling creative assets that resonate with your audience and deliver maximum impact across all advertising formats."
    },
    {
        id: 4,
        title: "Campaign Launch",
        description: "We execute your campaign with precision, monitor performance in real-time, and optimize for maximum ROI and brand engagement."
    },
]

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
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const gridContainerVariants = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: .3,
        }
    }
}

const gridSquareVariants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5,
        }
    }
}

export default function Process() {
    return (
        <section>
            <div className="process-container section-container">
                <div className="head-container">
                    <div className="head-div">
                        <motion.div variants={textVariants} initial="initial" whileInView="animate" className="head-top">
                            <motion.hr variants={childVariants} className="head-top-hr"/>
                            <motion.h3 variants={childVariants} className="top-title">Our Process</motion.h3>
                        </motion.div>
                        <motion.h1 variants={textVariants1} initial="initial" whileInView="animate" className="main-title">Our <span className="color">Advertising</span> Process</motion.h1>
                    </div>
                    <motion.p variants={textVariants1} initial="initial" whileInView="animate">From strategy to execution, we deliver comprehensive OOH and digital advertising solutions that maximize your brand visibility across UAE & KSA.</motion.p>
                </div>
                <div className="process-content-div">
                    <hr className="process-hr"/>
                    <div 
                        variants={gridContainerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: false, amount: 0.5 }}
                        className="process-content">
                        { process.map((ele) => {
                            return (
                                <div 
                                    key={ele.id} 
                                    className="process"
                                    data-step={ele.id}
                                    variants={gridSquareVariants}
                                    viewport={{ once: false, amount: 0.5 }}>
                                    <div className="circle"></div>
                                    <h1 className="title">{ele.title}</h1>
                                    <p className="description">{ele.description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}