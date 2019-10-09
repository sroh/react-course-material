import React, {useEffect} from 'react';
import classes from "./Cockpit.css";

const cockpit = (props) => {

  // useEffect(() => {
  //   console.log("[Cockpit.js] useEffect called");
  // });

  let btnClass = "";
  if (props.showPerson) {
    btnClass = classes.red;
  }

  // Dynamic assign classes to elements
  let dynamicClasses = [];
  if (props.persons.length <= 2) {
    dynamicClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    dynamicClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi I'm a REACT App </h1>
      <p>{props.title}</p>
      <p className={dynamicClasses.join(" ")}>Status</p>
      <hr />
      <button className={btnClass} onClick={props.click}>
        Toggle
      </button>
    </div>
  );
};

export default cockpit;
