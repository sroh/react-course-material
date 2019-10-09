import React from "react";

const validationComponent = props => {
    return <div>
    { (props.textLength > 5) ? <div>
            <p>Text is Long enough !</p>
            <p>Length of text input is : {props.textLength}</p>
        </div> : 
        <div>
            <p>Text is too Short !</p>
            <p>Length of text input is : {props.textLength}</p>
        </div>
    }
    </div>
};

export default validationComponent;