import React from 'react';

function Rating (props) {
    let rating = Math.round(props.children);
    let color  = props.color;
    let image = "";

    switch(rating) {
        case 0:
            image = "Yo, no stars!";
            break;
        case 1:
            image = "*";
            break;
        case 2:
            image = "**";
            break;
        case 3:
            image = "***";
            break;
        case 4:
            image = "****";
            break;
        case 5:
            image = "*****";
            break;
    }

    return (
        <div>
            <h1 style={{color:color}}>{image}</h1>
        </div>
    )
}

export default Rating;