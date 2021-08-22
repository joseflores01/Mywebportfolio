import React, { useState } from 'react';
import InfoIcon from '@material-ui/icons/Info';
import "./ExpandableCard.css";

/**
 * @param title @param paragraph @param hparagraph @param img @param footer @param link @param linkName @param color
 */
function ExpandableCard(props) {

    const [expanded, setExpanded]  = useState(false);

    const mystyle = {
        backgroundColor: props.color
      };
 
    return (
            <div style = {mystyle} className={expanded ? "Expanded" : "Reduced"}>
                <h3>{props.title}</h3>
                <p>{props.paragraph}</p>
                <p className={expanded ? "" : "hidden"}>{props.hparagraph}</p>
                <img className="projectImg" src={props.img}></img><br/>
                <span className={expanded ? "" : "hidden"}>{props.footer}</span><br/>
                <a href= {props.link} className={expanded ? "" : "hidden"}>{props.linkName}</a>
                <a className={expanded ? "" : "hidden"} >{props.icon}</a>
                <div className="infIconContainer">
                    <InfoIcon className="InfoIcon" onClick={()=>{setExpanded(!expanded)}}/>
                </div>
            </div>   
    );
}
export default ExpandableCard;
