import React from 'react';
import '../App.css';

function AboutMain() {


    return (
        <div className="AboutMainWrapper">
            <div className="AboutMain">
                <div className="About__leftSide">
                    <h1>José A. Flores Oria</h1>
                    <h3>Student at University of Central Florida</h3>
                </div>
                <div className="About__rightSide">
                    <img src={'/foto.JPG'} className="foto"></img><br/><br/> 
                </div>
            </div>
        </div>
    );
}

export default AboutMain;
