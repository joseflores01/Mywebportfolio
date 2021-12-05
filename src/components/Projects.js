import React, {useState} from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandableCard from './ExpandableCard';
import '../App.css';
// import ExpandableCard from  "expandable-card";

import InfoIcon from '@material-ui/icons/Info';


function Projects() {


    return (
            <div className="projectContainerParent">
  
                    <br/><br/><h1 className="title">Projects</h1>

                    <ExpandableCard 
                        title = "Senior Design Web Portal"
                        header = "Jan 2021 - Present"
                        paragraph = "Working on a team as a frontend developer to make a web portal to be used for future Senior Design classes."
                        // hparagraph = "As a frontend developer I built one of the major components for the app, a dynamic calendar. I also created other components for the user interface. During the development I contributed with ideas and solutions to several problems we faced."
                        // img = '/plannit.png'
                        // himg = '/plannit2.png'
                        // footer = 'Technology used: MERN Stack, JWT tokens'
                        // footer2 = "Project type: Software engineering"
                        // link1 ="https://github.com/GavinTryz/Plannit"
                        // linkName1 = {<GitHubIcon style={{ color: 'black' }}/>}
                        // link2 = "https://plannit-cop4331.herokuapp.com"
                        // linkName ={<GitHubIcon/>}
                        // linkName2 ={<GitHubIcon/>}
                        // linkName2 ={<button className="linkBtn">Website ❭</button>}
                        button ="hidden"
                    />

                    <ExpandableCard 
                        title = "Weekly COVID-19 Deaths Predictor"
                        header = "Oct 2021 - Oct 2021"
                        paragraph = "Built Linear Regression (Ordinary Least Squares), Ridge Regression, Lasso Regression, and Elastic Net models to predict the number of weekly deaths from COVID-19 in the U.S. using time series data from the CDC."
                        hparagraph = "I built several models and selected the most accurate for the final predictions in which the model obtained an accuracy of 87% in test set"
                        // img = '/plannit.png'
                        // himg = '/plannit2.png'
                        footer = 'Technology used: Python, Pandas, Scikit-Learn'
                        footer2 = "Project type: Machine Learning"
                        // link1 ="https://github.com/GavinTryz/Plannit"
                        // linkName1 = {<GitHubIcon style={{ color: 'black' }}/>}
                        link2 = "https://www.kaggle.com/joseaflores/weekly-covid-19-deaths-predictor"
                        // linkName ={<GitHubIcon/>}
                        // linkName2 ={<GitHubIcon/>}
                        linkName2 ={<button className="linkBtn">See Project ❭</button>}
                    />                   

                    <ExpandableCard 
                        title = "Plannit - MERN Stack"
                        header = "Mar 2021 - Apr 2021"
                        paragraph = "Plannit is a tool for planning and organizing events with groups of people. We developed a webapp and mobile app. I worked on a team of  seven members as a frontend developer."
                        hparagraph = "As a frontend developer I built one of the major components for the app, a dynamic calendar. I also created other components for the user interface. During the development I contributed with ideas and solutions to several problems we faced."
                        img = '/plannit.png'
                        himg = '/plannit2.png'
                        footer = 'Technology used: MERN Stack, JWT tokens'
                        footer2 = "Project type: Software engineering"
                        link1 ="https://github.com/GavinTryz/Plannit"
                        linkName1 = {<GitHubIcon style={{ color: 'black' }}/>}
                        link2 = "https://plannit-cop4331.herokuapp.com"
                        // linkName ={<GitHubIcon/>}
                        // linkName2 ={<GitHubIcon/>}
                        linkName2 ={<button className="linkBtn">Website ❭</button>}
                    />

                    <ExpandableCard 
                        title = "Contact Manager WebApp"
                        header = "Jan 2021 – Feb 2021"
                        paragraph = "Contact Manager App was my first experience in the web development or stack. I worked in a team of five as a database administrator and frontend developer."
                        hparagraph = "In just 5 weeks we developed this app that supports user registration/authentication and contains the main functionalities of any contact app such as, add, serch, edit, and delete contacts. During the develoment I had experience with SQL database, JavaScript and Apache server."
                        img = '/contastic.png'
                        footer = 'Technology used: LAMP Stack'
                        footer2 = "Project type: Software engineering"
                        link = "https://github.com/BenBraun23/Contastic/" 
                        linkName = {<GitHubIcon style={{ color: 'black' }}/>}
                        // button ="hidden"
                    />

                    <ExpandableCard 
                        title = "Atlantic Cleaning WebSite"
                        header = "Sep 2020 – Nov 2020"
                        paragraph = "Worked on a team to build a complete web-based solution that meets real-worlds client's needs using Wordpress. Applied user-centered principles, requirements, persona development, business analysis, prototyping, and testing."
                        hparagraph = "The UX team consisted of 5 members (a project manager, graphic designer, technical writer, web programmer, and quality assurance). My team role was the web programmer. I was in charge of the server configuration, research of WordPress tools and dependencies and implement the layout."
                        img = '/ac.png'
                        footer = 'Technology used: WordPress and Elementor'
                        footer2 = 'Project type: UX design'
                        link ="https://atlanticcleaningnsb.com" 
                        linkName = {<button className="linkBtn">Website ❭</button>}
                    /> 

                    <ExpandableCard 
                        title = "PL/0 Compiler"
                        paragraph = "I constructed a fully functional compiler for PL/0 programming language. The compiler is written in C and has a lexical analyzer (Scanner), syntax analyzer (Parser) with a code generator, and a virtual machine."
                        // hparagraph = "The UX team consisted of 5 members (a project manager, graphic designer, technical writer, web programmer, and quality assurance). My team role was the web programmer. I was in charge of the server configuration, research of WordPress tools and dependencies and implement the layout."
                        // img = '/plannit.png'
                        // footer = 'Technology used: MERN Stack'
                        link ="https://github.com/joseflores01/PL-0-Compiler" 
                        linkName = {<GitHubIcon style={{ color: 'black' }}/>}
                        footer = 'Written in: C'
                        footer2 = 'Project type: Systems Software'
                    />
            </div>
    );
}

export default Projects;
