import React from "react";
import './UserOutput.css';
import '../Person/Person.css';

const userOutput = props => {
    return (
        <div>
            <p>Hi there User: {props.name}</p>
            <p>Change your Username here : </p>
        </div>
    );
}

export default userOutput;