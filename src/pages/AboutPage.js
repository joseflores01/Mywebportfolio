import React, { useEffect } from 'react';
import About from '../components/About';
import AboutInformation from '../components/AboutInformation';
import AboutMain from '../components/AboutMain';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function AboutPage() {

    useEffect(() => {
        document.title = "Jose A. Flores O. - About"
     }, []);

    return (
        <div>
            <Navbar/>
            <AboutMain/>
            <AboutInformation/>
            <Footer/>
            
        </div>
    )
}

export default AboutPage
