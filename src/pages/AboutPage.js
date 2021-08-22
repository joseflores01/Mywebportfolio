import React from 'react'
import About from '../components/About'
import AboutInformation from '../components/AboutInformation'
import AboutMain from '../components/AboutMain'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function AboutPage() {
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
