import { motion } from "framer-motion"
import {useState, useRef} from "react"

import "../styles/Section.css"
import "../styles/Experience.css"
import telescope from "../assets/telescope.svg"

function Experience() {
  // states for mouse hover interaction w telescope doodle
  const [telescopeY, setTelescopeY] = useState(0)
  const containerRef = useRef([])

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect()

    const y = e.clientY - rect.top

    setTelescopeY(y - 60) // telescope centers on mouse??? experiment w this
  }

  const experiences = [
    {
      company: "Apple ",
      title: "Incoming Software Engineer",
      time: "July 2026 - Present",
      desc: "Apple Services Engineering",
      link: "https://www.apple.com/"
    },
    {
      company: "Amazon Web Services",
      title: "Software Engineering Intern",
      time: "May 2025 - August 2025",
      desc: "Infrastructure Security ",
      link: "https://aws.amazon.com/"
    },
    {
      company: "Nowadays (YC S23)",
      title: "Software Engineering Intern",
      time: "January 2024 - May 2024",
      desc: "Data Collection Platform",
      link: "https://www.nowadays.ai/"
    },
    {
      company: "University of Rochester",
      title: "NSF REU Research Fellow",
      time: "May 2023 - July 2023",
      desc: "Automated Defect Detection in 3D Printing",
      link: "https://www.hajim.rochester.edu/dsc/"
    },
    // {
    //   title: "Teaching Assistant",
    //   company: "University",
    //   time: "2024",
    //   desc: "Led discussion sections and office hours."
    // }
  ]

  return (
    <section id="experience" className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        
      <h2 className="section-title">Experience</h2>

        <div
          className="experience-container"
          ref={containerRef}
          onMouseMove={handleMouseMove}
        >

          {/* telescope column */}
          <div className="telescope-column">
            <motion.div
            animate={{ rotate: [-6, 6, -6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <motion.img
              src={telescope}
              className="telescope"
              animate={{ y: telescopeY }}
              transition={{ type: "spring", stiffness: 60, damping: 25 }}
            />
          </motion.div>

          </div>

          {/* experience column */}
          <div className="experience-list">

            {experiences.map((experience, i) => (
              <a
                key={i}
                href={experience.link}
                target="_blank"
                className="experience-link"
              >

                <motion.div
                  key={i}
                  className="experience-card"
                  whileHover={{ scale: 1.04 }}
                  >
                  <h3 className="experience-company">{experience.company}</h3>
                  <h4>{experience.title}</h4>
                  <p className="time">{experience.time}</p>
                  <p>{experience.desc}</p>
                </motion.div>
              </a>
            ))}

          </div>
        </div>

      </motion.div>


    </section>
  )
}

export default Experience
