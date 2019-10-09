import React from 'react';
import UserOutput from "../../Assignment_1/UserOutput";
import UserInput from "../../Assignment_1/UserInput";

import classes from './Person.css';

const person = props => {
  return (
    <div className={classes.Person}>
      <div onClick={props.click}>
        <UserOutput name={props.name} />
      </div>
      <UserInput name={props.name} change={props.change}/>
    </div>
  );
};

export default person;