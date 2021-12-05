import React, {useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from '../components/Footer'
import Navbar from '../components/Navbar';
import "./Resume.css";

function ResumePage() {

    useEffect(() => {
        document.title = "Jose A. Flores O. - Resume"
     }, []);

    return (
        <div>
            <Navbar/>
            <div className="resumeContainer">
                <h3 className="TitleCategory">Education</h3>

                <div className="sectionContainer">
                    <span className="InfoStyleTitle">University of Central Florida</span><br/>
                    <span className="InfoStyleDegree">Bacherlor of Science in Computer Science</span><br/>
                    <span className="InfoStyleDate">2019 - 2021</span><br/><br/>
                </div>

                <div className="sectionContainer">
                    <span className="InfoStyleTitle">Santa Fe College</span><br/>
                    <span className="InfoStyleDegree">Associate of Arts with Distinction - AA, Engineering</span><br/>
                    <span className="InfoStyleDate">2017 - 2018</span><br/><br/>
                </div>

                <div className="sectionContainer">
                    <span className="InfoStyleTitle">University of Florida, English Language Institute</span><br/>
                    <span className="InfoStyleDegree">English as a Second Language</span><br/>
                    <span className="InfoStyleDate">2015 - 2016</span><br/><br/>
                </div>

                <h3 className="TitleCategory">Projects & Work Experience</h3>


                <div className="sectionContainer">
                    <Link id= "ResumeProjectaPart" to="projects">See my projects ›</Link>
                </div><br/>
                                
                <div className="sectionContainer">
                    <span className="InfoStyleTitle">Student Life, Santa Fe College</span><br/>
                    <span className="InfoStyleDegree">Worked with Student Life staff to plan & develop programs and activities for students at Santa Fe College. Provided customer service. Promoted events on Campus.</span><br/>
                    <span className="InfoStyleDate">Aug 2018 - Dec 2018</span><br/><br/>
                </div>

                <h3 className="TitleCategory">Certifications</h3>

                <div className="sectionContainer">
                    <span className="InfoStyleTitle">Foundations of Leadership Certificate 2</span><br/>
                    <span className="InfoStyleDegree">The National Society of Leadership and Success</span><br/>
                    <span className="InfoStyleDate">Oct 2021</span><br/>
                    <a href="https://members.nsls.org/members/badges/foundation-of-leadership-2/earner/6088c48f-ba22-416f-a0ad-6c6e6047826c/share">See credential</a><br/><br/>
                </div>


                <div className="sectionContainer">
                    <span className="InfoStyleTitle">Foundations of Leadership Certificate 1</span><br/>
                    <span className="InfoStyleDegree">The National Society of Leadership and Success</span><br/>
                    <span className="InfoStyleDate">Sep 2021</span><br/>
                    <a href="https://members.nsls.org/members/badges/foundation-of-leadership-1/earner/6088c48f-ba22-416f-a0ad-6c6e6047826c/share">See credential</a><br/><br/>
                </div>
          
                <div className="sectionContainer">
                    <span className="InfoStyleTitle">JavaScript</span><br/>
                    <span className="InfoStyleDegree">Sololearn</span><br/>
                    <span className="InfoStyleDate">Jul 2021</span><br/>
                    <a href="https://www.sololearn.com/profile/12360066">See credential</a><br/><br/>
                </div>

                <div className="sectionContainer">
                    <span className="InfoStyleTitle">React + Redux</span><br/>
                    <span className="InfoStyleDegree">Sololearn</span><br/>
                    <span className="InfoStyleDate">Jul 2021</span><br/>
                    <a href="https://www.sololearn.com/profile/12360066">See credential</a><br/><br/>
                </div>

                <div className="sectionContainer">
                    <span className="InfoStyleTitle">C tutorial</span><br/>
                    <span className="InfoStyleDegree">Sololearn</span><br/>
                    <span className="InfoStyleDate">May 2020</span><br/>
                    <a href="https://www.sololearn.com/profile/12360066">See credential</a><br/><br/>
                </div>

                <h3 className="TitleCategory">Skills</h3>

                <div className="sectionContainer">
                    <span className="InfoStyleTitle">Programming: </span>
                    <span className="InfoStyleDegree">JavaScript, React, Redux, HTML, CSS, C, Java, Python, Keras, Pandas</span><br/><br/>
                    <span className="InfoStyleTitle">Interpersonal: </span>
                    <span className="InfoStyleDegree">Problem Solving, Leadership, Comunication, Teamwork, Critical Thinking, Attention to Detail, Self-directed Learning</span><br/>

                </div>

                <h3 className="TitleCategory">Honors & Awards</h3>

                <div className="sectionContainer">
                    <span className="InfoStyleTitle">Dean's List - Spring 2021</span><br/>
                    <span className="InfoStyleDegree">University of Central Florida</span><br/><br/>
                </div>

                <div className="sectionContainer">
                    <span className="InfoStyleTitle">President's Honor Roll - Fall 2020</span><br/>
                    <span className="InfoStyleDegree">University of Central Florida</span><br/><br/>
                </div>

                <div className="sectionContainer">
                    <span className="InfoStyleTitle">Latin American and Caribbean Scholarship - 2020</span><br/>
                    <span className="InfoStyleDegree">University of Central Florida</span><br/><br/>
                </div>

                <div className="sectionContainer">
                    <span className="InfoStyleTitle">Scholarship Award Nominee - Summer 2016</span><br/>
                    <span className="InfoStyleDegree">University of Florida, English Language Institute</span><br/><br/>
                </div>


                <h3 className="TitleCategory">Languages</h3>

                <div className="sectionContainer">
                    <span className="InfoStyleDegree">English, Spanish, Italian</span><br/>
                </div>


                <h3 className="TitleCategory">Organizations</h3>

                <div className="sectionContainer">
                    <span className="InfoStyleDegree">The National Society of Leadership and Success (NSLS)</span><br/>
                </div>


                <h3 className="TitleCategory">Interests</h3>

                <div className="sectionContainer">
                    <span className="InfoStyleDegree">Full Stack Web Development, React, UX/UI, Software engineering, AI, Machine Learning</span><br/>
                </div>

            </div>
            <Footer/>

            
        </div>
    );
}

export default ResumePage;