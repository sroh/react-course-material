import React from "react";
import classes from "./Input.css";

const input = props => {
  let inputElement = null;
  console.log(props);
  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value} 
          onChange={props.change}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value} 
          onChange={props.change}
        />
      );
      break;
    case "select": {
      console.log("Select found");
      inputElement = (
        <select className={classes.InputElement} value={props.value}  onChange={props.change}>
          {props.elementConfig.options.map(option => (
            <option key={option.displayValue} value={option.value}>{option.displayValue}</option>
          ))}
        </select>
      );
      break;
    }
    default:
      inputElement = (
        <input
          className={classes.InputElement}
          {...props.elementConfig}
          value={props.value}  
          onChange={props.change}
        />
      );
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
