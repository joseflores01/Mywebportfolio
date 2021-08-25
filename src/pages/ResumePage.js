import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import "./Resume.css";

function ResumePage() {
    return (
        <div>
            <Navbar/>
            <div className="resumeContainer">
                <h4>Education</h4>
                <p className="InfoStyle">University of Central Florida, Orlando, FL<br/>
                                         Working on Bacherlor of Science in Computer Science<br/>
                                         2019 - 2021
                </p>

           
                <p className="InfoStyle">Santa Fe College, Gainesville, FL<br/>
                                         Associate of Arts with Distinction - AA Computer Science (transfer track)<br/>
                                         2017 - 2018
                </p>

                <p className="InfoStyle">University of Florida, English Language Institute, Gainesville, FL<br/>
                                         Certificate<br/>
                                         2015 - 2016
                </p>

                <h4>Projects & Work Experience</h4>

              
                    <p id= "ResumeProjectaPart" className="InfoStyle">
                        <Link to="projects">See my projects ›</Link>
                    </p>
        

                {/* <p className="InfoStyle">Webapp project using MERN Stack<br/>
                                         Working on a team project as a frontend developer to build a web portal using React and Redux.
                </p>

                <p className="InfoStyle">Webapp project using MERN Stack, <br/>
                                         Worked on a team as frontend developer to build a planning web app.<br/>
                                         Spring 2021
                </p>

                <p className="InfoStyle">Webapp project using LAMP Stack, Remote, Spring 2021<br/>
                                         Worked on a team as a database and frontend developer to build a contact manager webapp. <br/>
                                         Spring 2021
                </p>

                <p className="InfoStyle">Web Design (UX/UI) Project using WordPress, Remote<br/>
                                         Worked with Student Life staff to plan & develop programs and activities for students at Santa Fe College. Provided customer service. Promoted events on Campus.<br/>
                                         Fall 2020
                </p> */}

                <p className="InfoStyle">Student Life, Santa Fe College, Gainesville, FL<br/>
                                         Worked with Student Life staff to plan & develop programs and activities for students at Santa Fe College. Provided customer service. Promoted events on Campus.<br/>
                                         Fall 2018
                </p>

                <p className="InfoStyle">

                </p>

                <h4>Honors & Awards</h4>

                <p className="InfoStyle">Dean's List - Spring 2021<br/>
                                         University of Central Florida
                </p>

                <p className="InfoStyle">President's Honor Roll - Fall 2020<br/>
                                         University of Central Florida
                </p>

                <h4>Certifications</h4>

                <p className="InfoStyle">Learning Rest APIs - Aug 2021<br/>
                                         LinkedIn<br/>
                                         <a href="/CertificateOfCompletion_Learning REST APIs.pdf">See credential</a>

                </p>
                <p className="InfoStyle">HTML - Aug 2021<br/>
                                         Sololearn<br/>
                                         <a href="/cert-1014-12360066.pdf">See credential</a>

                </p>
                <p className="InfoStyle">JavaScript - Jul 2021<br/>
                                         Sololearn<br/>
                                         <a href="/cert-12360066-1024.pdf">See credential</a>

                </p>
                <p className="InfoStyle">React + Redux - Jul 2021<br/>
                                         Sololearn<br/>
                                         <a href="/cert-1097-12360066.pdf">See credential</a>

                </p>
                <p className="InfoStyle">C tutorial - May 2020<br/>
                                         Sololearn<br/>
                                         <a href="/cert-1089-12360066.pdf">See credential</a>

                </p>

                <h4>Programming Languages</h4>

                <p className="InfoStyle">JavaScript, HTML, CSS, C, Java, Python
                </p>

                <h4>Languages</h4>

                <p className="InfoStyle">English, Spanish, Italian
                </p>

                <h4>Organization</h4>

                <p className="InfoStyle">The National Society of Leadership and Success (NSLS)
                </p>

                <h4>Interests</h4>

                <p className="InfoStyle">Full Stack Web Development, React, UX/UI, Software engineering, AI, Machine Learning
                </p>

                <h4>Hobbies</h4>

                <p className="InfoStyle">Radio controlled airplanes (aeromodelling)
                </p>

           
            </div>
            <Footer/>

            
        </div>
    );
}

export default ResumePage;