import React, { useState } from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);
    return (
        <div className="Navbar">
            <div className="leftSide">
                <div className="links">
                    <Link to ='/'>JF</Link>
                </div>
            </div>
            <div className="rightSide">
                <div className="links"  id={showLinks ? "hidden" : "" }>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                </div>
                <button onClick={()=>{setShowLinks(!showLinks)}} className="expanding_btn">Open</button>

            </div>
            
        </div>
    )
}

export default Navbar;
