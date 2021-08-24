import React from 'react';

function Title() {

    const backgoundStyle={
        backgroundImage: 'url(/wallpaper.jpg)',
        backgroundPosition: 'center',
        width: '100%',
        height: '600px',
        backgroundSize: 'cover',
        //position: "fixed",
        //zIndex: -1
        // opacity: '0.9'
    };

    return (
        <div style={backgoundStyle}>
            <div className="backgroudEffect">
                <h className="pageTitle">José A. Flores Oria</h>
            </div>
        </div>
    );
}

export default Title;
