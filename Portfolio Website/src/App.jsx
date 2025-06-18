import React from 'react'
import Navbar from './components/Navbar'
import Frontpage from './components/Frontpage'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Frontpage/>
      <About/>
      <Projects/>
      <Contact/>
      {/* <Footer/> */}
    </div>
  )
}

export default App