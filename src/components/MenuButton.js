import React, { useState } from 'react';
import './MenuButton.css';

function MenuButton() {

    const [closeBtn, setCloseBtn] = useState(false);

    return (
        <div className="container" id={closeBtn ? "change" : ""} onClick={()=>{setCloseBtn(!closeBtn)}}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </div>
    );
}

export default MenuButton;
