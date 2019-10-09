import React from "react";
import "./UserInput.css";

const userInput = props => {
    return (
        <div>
            <input type="text" value={props.name} onChange={props.change}></input>
        </div>
    );
}

export default userInput;