import React, { Component } from "react";

import Aux from "../../../hoc/Aux.js";
import UserOutput from "../../Assignment_1/UserOutput";
import UserInput from "../../Assignment_1/UserInput";
// import classes from "./Person.css";

// function person(props) {

//   useEffect( () => { console.log("Something useEffect"); });

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
      <Aux>
        {/* <div className={classes.Person}> */}
        {/* <div onClick={this.props.click}> */}
        <UserOutput click={this.props.click} name={this.props.name} />
        {/* </div> */}
        <UserInput name={this.props.name} change={this.props.change} />
        {/* </div> */}
      </Aux>
    );
  }
}

export default Person;
