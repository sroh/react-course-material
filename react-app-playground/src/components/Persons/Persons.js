import React, { Component } from "react";
import Person from "./Person/Person";
import Aux from "../../hoc/Aux.js";
import AuthContext from "../../context/auth-context.js"

// const persons = props =>
//   props.persons.map((person, index) => {
//     console.log("[Persons.js] render called ...")
//     return (
//         <Person
//           click={() => props.click(index)}
//           change={event => props.change(event, person.id)}
//           key={person.id}
//           name={person.name}
//           age={person.age}
//         />
//     );
//   });

class Persons extends Component {
  // is static
  // static getDerivedStateFromProps(props, state) {
  //   console.log("[Persons.js] getDerivedStateFromProps called", props);
  //   return state;
  // }

  static contextType = AuthContext;

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] ShouldComponentUpdate called ...");
    return true;
  }

  getSnapshotBeforeUpdate(prevtProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate called ...");
    return { message: "Snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] ComponentDidUpdate called ...");
    console.log("[Persons.js] ComponentDidUpdate snapshot value: ", snapshot);
  }

  render() {
    console.log("[Persons.js] rendering ...");
    
      return (
        <Aux>
          {(context) => this.props.persons.map((person, index) => {
            return (
              <Person
            click={() => this.props.click(index)}
            change={event => this.props.change(event, person.id)}
            key={person.id}
            name={person.name}
            age={person.age}
          />
            ) } ) }
    </Aux>
    ); }
}

export default Persons;
