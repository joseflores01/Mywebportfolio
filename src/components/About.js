import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function About() {
    const backgoundStyle={
        backgroundImage: 'url(/binary.svg)',
        backgroundPosition: 'center',
        width: '100%',
        height: '600px',
        backgroundSize: 'cover',
        // opacity: '0.5'
    };


    return (
        <div style={backgoundStyle}>
            <div className="aboutContainer">
                <br/><br/><h1>Hello, 🌎!</h1>
                <h1>I'm José, a software developer in Florida</h1><br/>
                <span>I enjoy coding, solving propblem, and making things simpler </span><br/><br/>
                <img src={'/foto.jpg'} className="foto"></img><br/><br/>
                <Link to="/About">Learn more ›</Link>
            </div>
        </div>
    );
}

export default About;
