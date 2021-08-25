import React, { useState } from 'react';
import './Navbar.css';
import MenuButton from './MenuButton';

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
   
                {/* <button onClick={()=>{setShowLinks(!showLinks)}} className="expanding_btn">Open</button> */}

                {/* <MenuButton onClick={()=>{setShowLinks(!showLinks)}}></MenuButton> */}

                <div className="container" id={showLinks ? "change" : ""} onClick={()=>{setShowLinks(!showLinks)}}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>

            </div>
        </div>
    )
}

export default Navbar;
