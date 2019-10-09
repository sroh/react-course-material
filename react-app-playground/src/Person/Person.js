import React from 'react';
// import Radium from 'radium';
import UserOutput from "../Assignment_1/UserOutput";
import UserInput from "../Assignment_1/UserInput";
// import './Person.css';

/* const outputText = "I'm " + {props.name} + " and I'm " +{props.age} ! Random Mark: 
        {Math.floor(Math.random() * 30)}" */
/* <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} ! Random Mark: 
        {Math.floor(Math.random() * 30)}
      </p>
      <p>{props.children}</p> */
/* event object will be automatically passed through */
/* <input type="text" value={props.name} onChange={props.changed} /> */

const person = props => {
   const style = {
       '@media (min-width:500px)': {
           width: '450px'
       }
   }

  return (
    <div className="Person" style={style} >
      <div onClick={props.click}>
        <UserOutput name={props.name} />
      </div>
      <UserInput name={props.name} change={props.change} />
    </div>
  );
};

// export default Radium(person);
export default person;
