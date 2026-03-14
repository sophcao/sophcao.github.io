import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

import "../styles/Home.css"
import "../styles/Section.css"

function Hero() {
    return (
        <section id="home" className="section">

            <TypeAnimation
                sequence={[
                    "hi, i'm sophia"
                ]}
                wrapper="h1"
                className="hero-title"
                cursor={true}
                speed={10}
                repeat={0}
            />  
            <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1.5}}
            >
                Software Engineer
            </motion.p>
            {/* <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2, duration: 2}}
            >
                
            </motion.p> */}
        </section>
    );
}

export default Hero;