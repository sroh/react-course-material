import React from "react";
import UserOutput from "../Output/UserOutput";
import UserInput from "../Input/UserInput";
// import './Person.css';

const person = props => {
  return (
    <div className="Person">
      {/* const outputText = "I'm " + {props.name} + " and I'm " +{props.age} ! Random Mark: 
        {Math.floor(Math.random() * 30)}" */}

      {/* <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} ! Random Mark: 
        {Math.floor(Math.random() * 30)}
      </p>
      <p>{props.children}</p> */}
      {/* event object will be automatically passed through */}
      {/* <input type="text" value={props.name} onChange={props.changed} /> */}

      <UserOutput name={props.name} />
      <UserInput name={props.name} change={props.change} />

    </div>
  );
};

export default person;
