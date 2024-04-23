import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ServiceSection from './components/ServiceSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'



const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ServiceSection/>
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection/>
      <Footer/>
      <ScrollToTop/>
    </div>
  )
}

export default App
