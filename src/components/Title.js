import React from 'react';

function Title() {

    const backgoundStyle={
        backgroundImage: 'url(/codeDesign.png)',
        backgroundPosition: 'center',
        width: '100%',
        height: '600px',
        backgroundSize: 'cover',
        //position: "fixed",
        //zIndex: -1
        // opacity: '0.9'
    };

    const rndInt = Math.floor(Math.random() * 3) + 1

    return (
        <div style={backgoundStyle}>
            <div className="backgroudEffect">
                {rndInt === 1 &&
                <div>
                    <h className="pageTitle">“The only way to do great work is to love what you do.”</h>
                    <p className="pageTitle2">- Steve Jobs</p>
                </div>}
                {rndInt === 2 &&
                <div>
                    <h className="pageTitle">“Logic will get you from A to B. Imagination will take you everywhere.”</h>
                    <p className="pageTitle2">- Albert Einstein</p>
                </div>}
                {rndInt === 3 &&
                <div>
                    <h className="pageTitle">“Engineering is the closest thing to magic that exists in the world.”</h>
                    <p className="pageTitle2">- Elon Musk</p>
                </div>}

            </div>
        </div>
    );
}

export default Title;
