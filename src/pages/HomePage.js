import React, {useEffect} from 'react';
import Title from '../components/Title.js';
import Navbar from '../components/Navbar.js';
import About from '../components/About.js';
import Skills from '../components/Skills.js';
import Footer from '../components/Footer.js';

function HomePage() {

    useEffect(() => {
        document.title = "Jose Home Page"
     }, []);

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
