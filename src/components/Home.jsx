import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

import "../styles/Home.css"

function Hero() {
    return (
        <section id="home">

            <TypeAnimation
                sequence={[
                    "hi, i'm sophia."
                ]}
                wrapper="h1"
                className="hero-title"
                cursor={true}
                speed={6}
                repeat={0}
            />  
            <motion.p
                className="hero-subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
            >
                Software Engineer
            </motion.p>
        </section>
    );
}

export default Hero;