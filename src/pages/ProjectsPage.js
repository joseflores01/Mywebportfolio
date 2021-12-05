import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'

function ProjectsPage() {

    useEffect(() => {
        document.title = "Jose A. Flores O. - Projects"
     }, []);

    return (
        <div>
            <Navbar/>
            <Projects/>
            <Footer/>
        </div>
    )
}

export default ProjectsPage
