// import React, { useState } from "react";
import React, { Component } from "react";
import "./App.css";
// import Radium, { StyleRoot } from "radium";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { id: "sdsfdfds", name: "sven_1", age: 30 },
      { id: "sdlihjos", name: "sven_2", age: 31 },
      { id: "ogjopfgj", name: "sven_3", age: 32 }
    ],
    otherState: "other state man !"
  };

  swtchNameHandler = newName => {
    console.log("CLicked SwitchName Handler");
    // this.state.persons[0].name = 'sven_new_1';
    this.setState({
      persons: [
        { name: newName, age: 30 },
        { name: "sven_2", age: 31 },
        { name: "sven_3", age: 32 }
      ],
      showPersons: false
    });
  };

  // Event Object useage
  nameChangedHandler = event => {
    console.log("CLicked Name Changed Handler");
    this.setState({
      persons: [
        { name: "ElSevnno 2.0", age: 30 },
        { name: event.target.value, age: 31 },
        { name: "sven_3", age: 32 }
      ]
    });
  };

  nameChangedHandler2 = (event, id) => {
    console.log("CLicked Name Changed Handler for " + id);
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // copy person object by personIndex
    const person = { ...this.state.persons[personIndex] };
    // set person new name to event target value
    person.name = event.target.value;
    // copy persons state array
    const persons = [...this.state.persons];
    // set person by index to new person ob with new name
    persons[personIndex] = person;
    // update state to set to new persons array
    this.setState({ persons: persons });
  };

  manipulateUsernameHandler = event => {
    console.log("Manipulate clicked");
    this.setState({
      username: event.target.value
    });
  };

  togglePersonsHandler = () => {
    console.log("Toggle Persons Handler Clicked !");
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];

    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "green",
      font: "inherit",
      color: "white",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
      // ":hover": {
      //   backgroundColor: "lightgreen",
      //   color: "black"
      // }
    };

    let persons = <div>Nothing to show !</div>;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                key={person.id}
                change={event => this.nameChangedHandler2(event, person.id)}
                name={person.name}
                age={person.age}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "lightyellow",
      //   color: "black"
      // };
    }

    // Dynamic assign classes to elements
    let classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      // <StyleRoot>
        <div className="App">
          <h1>Hi I'm a REACT App</h1>
          <p className={classes.join(" ")}>Status</p>
          <hr />
          <button style={style} onClick={this.togglePersonsHandler}>
            Toggle
          </button>
          <hr />
          {persons}
          <hr />
        </div>
      // </StyleRoot>
    );
  }
}

export default App;
// export default Radium(App);
