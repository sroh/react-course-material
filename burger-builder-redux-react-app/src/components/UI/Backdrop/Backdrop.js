import React from "react";
import classes from "./Backdrop.css";

const backdrop = props => {
  return props.show === true ? <div className={classes.Backdrop} onClick={props.click} ></div> : null;
};

export default backdrop;