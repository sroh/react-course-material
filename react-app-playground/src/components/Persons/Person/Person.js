import React, { Component } from "react";
import UserOutput from "../../Assignment_1/UserOutput";
import UserInput from "../../Assignment_1/UserInput";
import classes from "./Person.css";

// const person = props => {
//   console.log("[Person.js] render called ...")
//   return (
//     <div className={classes.Person}>
//       <div onClick={props.click}>
//         <UserOutput name={props.name} />
//       </div>
//       <UserInput name={props.name} change={props.change}/>
//     </div>
//   );
// };

class Person extends Component {
  render() {
    console.log("[Person.js] rendering ...");
    return (
      <div className={classes.Person}>
        <div onClick={this.props.click}>
          <UserOutput name={this.props.name} />
        </div>
        <UserInput name={this.props.name} change={this.props.change} />
      </div>
    );
  }
}

export default Person;
