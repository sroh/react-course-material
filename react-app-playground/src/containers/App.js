import React, { Component } from "react";
import classes from "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "sdsfdfds", name: "sven_1", age: 30 },
      { id: "sdlihjos", name: "sven_2", age: 31 },
      { id: "ogjopfgj", name: "sven_3", age: 32 }
    ],
    otherState: "other state man !"
  };

  nameChangedHandler = (event, id) => {
    console.log("CLicked Name Changed Handler for " + id);
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // copy person object by personIndex
    const person = { ...this.state.persons[personIndex] };
    // set person new name to event target value
    person.name = event.target.value;

    // force error
    // person.name = event.input.value;

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
    let persons = <div>Nothing to show !</div>;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            click={this.deletePersonHandler}
            change={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit persons={this.state.persons} showPersons={this.state.showPersons} click={this.togglePersonsHandler}/>
        <hr />
        {persons}
        <hr />
      </div>
    );
  }
}

export default App;