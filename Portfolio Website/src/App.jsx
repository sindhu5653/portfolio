import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Qualification from './components/Qualification'
import Home from './components/Home'
import Footer from './components/Footer'
import Service from './components/Service'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Qualification/>
      <Service/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App