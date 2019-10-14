import React from "react";
import classes from "./Input.css";

const input = props => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];

  let validationMessage = null;
  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(classes.Invalid);
    validationMessage = (
      <div className={classes.ValidationError}>
        <p>Please enter a valid value !</p>
        {/* <p>Please enter a valid {props.valueType}</p>
        <p>{props.errorMessage}</p> */}
      </div>
    );
  }

  switch (props.elementType) {
    case "input":
      inputElement = (
        <input
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
        />
      );
      break;
    case "textarea":
      inputElement = (
        <textarea
          className={inputClasses.join(" ")}
          {...props.elementConfig}
          value={props.value}
          onChange={props.change}
        />
      );
      break;
    case "select": {
      console.log("Select found");
      inputElement = (
        <select
          className={inputClasses.join(" ")}
          value={props.value}
          onChange={props.change}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.displayValue} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    }
    default:
      inputElement = (
        <input
          className={inputClasses.join(" ")}
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
      {validationMessage}
    </div>
  );
};

export default input;
