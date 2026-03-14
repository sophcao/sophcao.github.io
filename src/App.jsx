import './App.css'

import Hero from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Footer />
    </>
  )
}

export default App
