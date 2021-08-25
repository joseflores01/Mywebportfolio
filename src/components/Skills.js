import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Skills() {



    return (
        <div className="skillsContainer">
            <div className="programmingSkills">
                <br/><br/>
                <h1>Programming skills</h1>
                {/* <h3>I have done a variety of projects using these programing languages and frameworks</h3> */}
                <span className="defaultFont">I have experience in different programing languges and frameworks that I have learned by making projects.</span><br/>
                <span className="defaultFont">In my free time, I often reinforce some of my programming languages skills and learn new ones.</span><br/><br/><br/>
                <div className="iconContainer">
                    <img className="logo" src={'/js.svg'}></img><br/>
                    <span>JavaScript</span>
                </div>
                <div className="iconContainer">
                    <img className="logo" src={'/html.svg'}></img><br/>
                    <span>HTML</span>
                </div>
                <div className="iconContainer">
                    <img className="logo" src={'/css.svg'}></img><br/>
                    <span>CSS</span>

                </div>
                <div className="iconContainer">
                    <img className="logo" src={'/logo512.png'}></img><br/>
                    <span>React</span>

                </div>
                <div className="iconContainer">
                    <img className="logo" src={'/redux.svg'}></img><br/>
                    <span>Redux</span>

                </div>
                <div className="iconContainer">
                    <img className="logo" src={'/c.svg'}></img><br/>
                    <span>C</span>
                </div>
                <div className="iconContainer">
                    <img className="logo" src={'/java.png'}></img><br/>
                    <span>Java</span>
                </div><br/><br/><br/>
                <Link to="/projects">Check out my projects ›</Link>
                

            </div>    
        </div>
    );
}

export default Skills;
