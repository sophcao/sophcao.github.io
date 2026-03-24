import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"

import "../styles/Home.css"
import "../styles/Section.css"
import planet1 from "../assets/planet1.svg"
import planet2 from "../assets/planet2.svg"
import planet3 from "../assets/planet3.svg"
import planet4 from "../assets/planet4.svg"
import planet5 from "../assets/planet5.svg"
import planet6 from "../assets/planet6.svg"
import planet7 from "../assets/planet7.svg"
import planet8 from "../assets/planet8.svg"
import { useEffect } from "react";

function Hero() {

    useEffect(() => {
        const stars = document.querySelectorAll(".shooting-star");

        stars.forEach((star) => {
            const trigger = () => {
            star.classList.add("active"); // add shoot animation (active class)
            setTimeout(() => {
              star.classList.remove("active"); 
              const nextDelay = Math.random() * 10000 + 5000; // intervals: 5s–15s
              setTimeout(trigger, nextDelay); 
            }, 2500); // setTimeout: remove after animation ends (2.5s)
          };
      
          const initialDelay = Math.random() * 5000 + 2000; // initial delay: 2s-7s
          setTimeout(trigger, initialDelay);
        });
    }, []);

    return (
        <section id="home" className="section home">
        <div className="hero-background">
            {/* shooting stars */}
            <div className="shooting-star star1"></div>
            <div className="shooting-star star2"></div>
            <div className="shooting-star star3"></div>
            <div className="shooting-star star4"></div>


            {/* planets */}
            <motion.img
                src={planet1}
                className="planet planet1"
                animate={{
                    x: [-20, 10, 25, -10, -20],
                    y: [-10, 15, -5, 10, -10],
                    rotate: [0, 8, -4, 4, 0]
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <motion.img
            src={planet2}
            className="planet planet2"
            animate={{
                x: [10, -25, 15, -10, 10],
                y: [5, -10, 20, -5, 5],
                rotate: [0, -10, 6, -4, 0]
            }}
            transition={{
                duration: 26,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            />

            <motion.img
            src={planet3}
            className="planet planet3"
            animate={{
                x: [-15, 20, -20, 15, -15],
                y: [10, -15, 10, -10, 10],
                rotate: [0, 10, -6, 3, 0]
            }}
            transition={{
                duration: 23,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            />

            <motion.img
            src={planet4}
            className="planet planet4"
            animate={{
                x: [15, -20, 10, -15, 15],
                y: [-10, 15, -5, 12, -10],
                rotate: [0, 6, -3, 3, 0]
            }}
            transition={{
                duration: 24,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            />

            <motion.img
            src={planet5}
            className="planet planet5"
            animate={{
                x: [-10, 25, -20, 15, -10],
                y: [10, -12, 18, -8, 10],
                rotate: [0, -8, 6, -10, 0]
            }}
            transition={{
                duration: 28,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            />

            <motion.img
            src={planet6}
            className="planet planet6"
            animate={{
                x: [20, -10, 15, -25, 20],
                y: [-15, 10, -5, 8, -15],
                rotate: [0, 6, -10, 4, 0]
            }}
            transition={{
                duration: 26,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            />

            <motion.img
            src={planet7}
            className="planet planet7"
            animate={{
                x: [-25, 15, -10, 20, -25],
                y: [12, -8, 16, -10, 12],
                rotate: [0, -22, 10, -20, 0]
            }}
            transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            />

            <motion.img
            src={planet8}
            className="planet planet8"
            animate={{
                x: [-25, -15, 10, -20, -25],
                y: [-12, 8, 16, -10, -12],
                rotate: [0, 20, -25, 14, 0]
            }}
            transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            />
        </div>


        <div className="hero-content">
            <TypeAnimation
                sequence={[
                    "hi, i'm sophia"
                ]}
                wrapper="h1"
                className="hero-title"
                cursor={true}
                speed={1.2}
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
        </div>


        </section>
    );
}

export default Hero;