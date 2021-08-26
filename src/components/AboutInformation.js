import React from 'react';
import '../App.css';

function AboutInformation() {
    return (
        <div className="AboutInfoContainer">
            <div className="AboutInfoContainer__leftSide">
                <p className="pInfo">
                    My name is Jose, and I am a tech aficionado excited 
                    to develop new technologies to make people’s life easier. 
                    I am a detail-oriented and curious person; I like to see thoroughly
                    all perspectives of the matter and understand everything from the root.
                    Anything in engineering or science always drives my attention. 
                    I am also an autodidact person and motivated for learning new skills.
                </p>
            </div>
            <div className="AboutInfoContainer__rightSide">
                <p className="pInfo">
                    My area of greatest expertise is web-development, especially front-end,
                    but I am actively working to expand my knowledge to the full-stack and other fields 
                    as well. My interests include machine learning, artificial intelligence, 
                    mobile apps, UX design.
                </p>
                <p className="pInfo">
                    I am currently pursuing my bacherlor's degree in Computer Science from the University of Central Florida.
                </p>
            </div>
        </div>
    )
}

export default AboutInformation
