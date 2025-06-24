import React, { useState } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('home');

    const linkClass = (section) =>
        `${activeLink === section ? 'text-green-400 font-semibold' : ''
        }`;

    return (
        <nav className='bg-black text-white px-8 md:px-16 lg:px-24 sticky top-0 z-50'>
            <div className='container py-2 flex justify-center md:justify-between items-center'>
                <div className='text-2xl font-bold hidden md:inline'>Sindhu</div>
                <div className='space-x-6'>
                    <a href="#home" onClick={() => setActiveLink('home')} className={linkClass('home')}>Home</a>
                    <a href="#about" onClick={() => setActiveLink('about')} className={linkClass('about')}>About Me</a>
                    <a href="#qualification" onClick={() => setActiveLink('qualification')} className={linkClass('qualification')}>Qualification</a>
                    <a href="#service" onClick={() => setActiveLink('service')} className={linkClass('service')}>Services</a>
                    <a href="#projects" onClick={() => setActiveLink('projects')} className={linkClass('projects')}>Projects</a>
                    <a href="#contact" onClick={() => setActiveLink('contact')} className={linkClass('contact')}>Contact</a>
                </div>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
                    Connect Me
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
