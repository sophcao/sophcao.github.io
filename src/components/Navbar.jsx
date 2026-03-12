import "../styles/Navbar.css"
import logo from "../assets/star.svg"
// import nametag from "../assets/nametag.svg"

import { FaLinkedin, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

function Navbar() {
  return (
    <nav className="navbar">

      {/* left side */}
      <div className="nav-left">
        <a href="#home">
          <img src={logo} className="nav-logo" />
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </div>
      </div>

      {/* right side */}
      <div className="nav-right">
        <a href="https://www.linkedin.com/in/cao-sophia" target="_blank">
          <FaLinkedin />
        </a>

        <a href="mailto:sophcao@umich.com">
          <MdEmail />
        </a>

        <a href="https://github.com/sophcao" target="_blank">
          <FaGithub />
        </a>
      </div>

    </nav>
  )
}

export default Navbar