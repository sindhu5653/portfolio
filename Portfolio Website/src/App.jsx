import React from 'react'
import Navbar from './components/Navbar'
import Frontpage from './components/Frontpage'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Qualification from './components/Qualification'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Frontpage/>
      <About/>
      <Qualification/>
      <Projects/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  )
}

export default App