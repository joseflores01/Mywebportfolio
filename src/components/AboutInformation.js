import React from 'react';
import '../App.css';

function AboutInformation() {
    return (
        <div className="AboutInfoContainer">
            <div className="AboutInfoContainer__leftSide">
                <p className="pInfo">
                    My name is José, and I’m a tech aficionado excited to develop new technologies to make people’s life easier.
                </p>
                <p className="pInfo">
                    I’m a detail-oriented, curious, and autodidact person motivated to learn new subjects and acquire new skills. I like to see thoroughly all perspectives of the things and understand everything from the root. Anything in engineering or science always drives my attention.
                </p>
            </div>
            <div className="AboutInfoContainer__rightSide">
                <p className="pInfo">
                    At this moment, my area of greatest expertise is web-development, especially Frontend, but I’m actively working to expand my knowledge to the Full-stack as well as to other fields in CS. My interests include Machine Learning, Artificial Intelligence, Mobile App development, Web development, and UX Design.
                </p>
                <p className="pInfo">
                    I'm currently pursuing my bacherlor's degree in Computer Science from the University of Central Florida.
                </p>
            </div>
        </div>
    )
}

export default AboutInformation
