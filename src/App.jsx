import './App.css'

import Hero from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </>
  )
}

export default App
