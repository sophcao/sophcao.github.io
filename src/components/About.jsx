import { motion } from "framer-motion"
import "../styles/About.css"
import "../styles/Section.css"
import milkyway from "../assets/milkyway.svg"

function About() {
  return (
    <section id="about" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

      <h2 className="section-title">About</h2>

      <div className="about-container">


        <motion.div
          className="about-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>
            I'm a software engineer and alumni of the University of Michigan, where I studied computer science. 
            I'm interested in backend engineering, infrastructure,
            and building tools that make people's lives easier.
          </p>

          <p>
            Outside of coding, I enjoy design, reading, strength training, and traveling. 
          </p>
        </motion.div>

        <motion.img
          src={milkyway}
          className="about-illustration"
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />



      </div>
      </motion.div>
    </section>
  )
}

export default About
