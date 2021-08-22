import React from 'react';
import Title from '../components/Title.js';
import Navbar from '../components/Navbar.js';
import About from '../components/About.js';
import Skills from '../components/Skills.js';
import Footer from '../components/Footer.js';

function HomePage() {
    return (
        <div>
            <Navbar/>
            <Title/>
            <About/>
            <Skills/>
            <Footer/>
            
        </div>
    )
}

export default HomePage;
