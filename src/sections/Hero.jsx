import { motion } from "framer-motion"
import header from '../assets/header.svg'

function Hero() {
    return (
        <section id="home" className="section hero">
        <motion.h1
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        >
            hi, i'm sophia
        </motion.h1>
        <a href="#about">
         <img src={header} className="logo" alt="Vite logo" />
        </a>
        <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
        >
            Software Engineer
        </motion.p>
        </section>
    );
}

export default Hero;