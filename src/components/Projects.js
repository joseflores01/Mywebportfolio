import React, { useState } from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InfoIcon from '@material-ui/icons/Info';
import ExpandableCard from './ExpandableCard';
// import ac from './ac.png'


function Projects() {



    var contentArr = [1, 2, 3, 4];

    const [expanded, setExpanded]  = useState(false);
 

    var ti ="Atlantic Cleaning WebSite";
    var p ="Worked on a team to build a complete web-based solution that meets real-worlds client's needs using Wordpress. Applied user-centered principles, requirements, persona development, business analysis, prototyping, and testing. "
    var im = '/ac.png';

    return (


            <div className="projectContainerParent">
  
                    <br/><br/><h1>Projects</h1>

                    <ExpandableCard icon = {<GitHubIcon/>} title={ti} paragraph={p} hparagraph={"did ssss"} img={im} link ={"https://atlanticcleaningnsb.com"} linkName = {"WebSite"}/>


                    {/* <div className={expanded ? "projectContainer__Exp" : "projectContainer__R"}>
                        <h3>Atlantic Cleaning WebSite </h3>
                        <p>Worked on a team to build a complete web-based solution that meets real-worlds client's needs using Wordpress.
                             Applied user-centered principles, requirements, persona development, business analysis, prototyping, and testing.</p>
                        <img className="projectImg" src={'/ac.png'}></img><br/>
                        <InfoIcon className="InfoIcon" onClick={()=>{setExpanded(!expanded)}}/><br/>

                        <span className={expanded ? "" : "hidden"}>Technology used: WordPress</span><br/>
                        <a href= "https://atlanticcleaningnsb.com" className={expanded ? "" : "hidden"}>Website</a>
                        <a className={expanded ? "" : "hidden"} href="https://github.com/joseflores01"><GitHubIcon style={{ color: 'black' }}/></a>
                    </div> */}

           
            </div>

    );
}

export default Projects;
