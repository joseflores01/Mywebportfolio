import React from 'react';
import '../App.css';

function AboutInformation() {
    return (
        <div className="AboutInfoContainer">
            <div className="AboutInfoContainer__leftSide">
                <p className="pInfo">
                    My name is José, and I’m a tech enthusiast excited to develop new technologies to make people’s lives easier.
                </p>
                <p className="pInfo">
                    I’m a detail-oriented, curious, and self-motivated person driven to learn new subjects and acquire new skills. I like to examine all perspectives thoroughly and understand systems from the root. Anything in engineering or science always captures my attention.
                </p>
            </div>
            <div className="AboutInfoContainer__rightSide">
                <p className="pInfo">
                    My core expertise lies in modern web development, with an active focus on expanding into full-stack engineering and broader computer science domains. I am deeply interested in artificial intelligence, machine learning, mobile app development, and UX design.
                </p>
                <p className="pInfo">
                    I hold a Bachelor of Science in Computer Science from the University of Central Florida, and I am always looking forward to applying my skills to build products that make a real difference.
                </p>
            </div>
        </div>
    )
}

export default AboutInformation
