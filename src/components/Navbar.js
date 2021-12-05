import React, { useState, useEffect } from 'react';
import './Navbar.css';
import MenuButton from './MenuButton';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Navbar() {
    const [showLinks, setShowLinks] = useState(false);

    const [show, setShow] = useState(false)

    const controlNavBar = () => {
        if (window.scrollY > 100)
            setShow(true)
        else
            setShow(false)
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavBar)
        return () => {
            window.removeEventListener('scroll', controlNavBar)
            
        }
    }, [])

    return (
        <div className={`Navbar ${show && "NavBar__white"}`}>
            <div className="leftSide">
                <div className="links">
                    <Link to ='/'>José A. Flores Oria</Link>
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
