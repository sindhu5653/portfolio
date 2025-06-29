import React from 'react'
import AboutImage from '../assets/firstimage.jpg'

const About = () => {
    return (
        <div className='bg-black text-white py-20' id='about'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img
                        className='w-72 h-80 rounded object-cover mb-8 md:mb-0'
                        src={AboutImage}
                        alt="About Image" />
                    <div className='flex-1'>
                        <p className='text-lg mb-8'>I am a passionate Mern-Stack developer with a focus on building modern and responsive web applications. With a strong foundation in both frontend and backend technologies, I strive to create seamless and efficient user experiences.
                        </p>
                        <div className='space-y-4'>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>
                                HTML&CSS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div
                                    className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 transform transition-transform duration-300 hover:scale-105 w-10/12 rounded-full'>
                                    </div>
                                </div>
                            </div> 
                            <div className='flex items-center'>
                                <label htmlFor="javascript" className='w-2/12'>
                                JavaScript</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div
                                    className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 transform transition-transform duration-300 hover:scale-105 w-8/12 rounded-full'>
                                    </div>
                                </div>
                            </div> 
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>
                                React JS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div
                                    className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 transform transition-transform duration-300 hover:scale-105 w-11/12 rounded-full'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>
                                Express JS</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div
                                    className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 transform transition-transform duration-300 hover:scale-105 w-4/12 rounded-full'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>
                                Node Js</label>
                                <div className='grow bg-gray-800 rounded-full h-2.5'>
                                    <div
                                    className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 transform transition-transform duration-300 hover:scale-105 w-2/12 rounded-full'>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;