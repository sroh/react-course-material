import React, { Component } from "react";
import "./AddPerson.css";

class AddPerson extends Component {
  state = {
    name: "",
    age: 0
  };

  nameChangedHanlder = event => {
    this.setState({ name: event.target.value });
  };

  ageChangedHanlder = event => {
    this.setState({ age: event.target.value });
  };

  render() {
    return (
      <div className="AddPerson">
        <input type="text" 
               name="name" 
               placeholder="Name Please" 
               onChange={this.nameChangedHanlder}
               value={this.state.name}
        />
        <input type="number" 
               age="name" 
               placeholder="Age Please"
               onChange={this.ageChangedHanlder}
               value={this.state.age}
        />
        <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
      </div>
    );
  }
}

export default AddPerson;
