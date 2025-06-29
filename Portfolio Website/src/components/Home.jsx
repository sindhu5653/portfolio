import React from 'react'
import FrontpageImage from '../assets/firstimage.jpg'

const Home = () => {
  return (
    <div className='bg-black text-white text-center py-16' id='home'>
      <img
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
        src={FrontpageImage}
        alt="First Image" />
      <h1 className='text-4xl font-bold'>
        I'm {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Sindhu</span>
        ,Mern-Stack Developer
      </h1>
      <p className='mt-4 text-lg text-gray-300 px-4 md:px-3'>
        I specialize in building modern and responsive web applications.
      </p>
      <div className='mt-8 space-x-4'>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Connect With Me</button>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Resume
        </a>
      </div>
    </div>
  )
}

export default Home;