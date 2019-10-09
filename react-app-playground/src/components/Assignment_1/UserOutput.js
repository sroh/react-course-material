import React from "react";
import './UserOutput.css';

const userOutput = props => {
    return (
        <React.Fragment>
        {/* <div> */}
            <p onClick={props.click}>Hi there User: {props.name}</p>
            <p>Change your Username here : </p>
        {/* </div> */}
        </React.Fragment>
    );
}

export default userOutput;