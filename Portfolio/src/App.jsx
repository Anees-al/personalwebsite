import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Technologies from './components/Technologies'
import Projects from './components/Projects'

const App = () => {
  return (
    <div className='px-4 py-4'>
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
