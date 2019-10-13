import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionTypes from '../store/actions';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {
    
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPersonHandler} />
                {this.props.persons.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.onRemovePersonHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

// after class, maps state properties to properties
const mapStateToProps = state => {
    return {
      persons: state.persons
    };
  };
  
  // after type every kind of extra information can be passed to the reducer
  const mapDispatchToStore = dispatch => {
    return {
      onAddPersonHandler: () => {

        const newPerson = {
            id: Math.random(), // not really unique but good enough here!
            name: 'El Svenno - ' + Math.random(),
            age: Math.floor( Math.random() * 40 )
        }

        dispatch({ type: actionTypes.ADD, value: newPerson})},
      onRemovePersonHandler: (id) => dispatch({ type: actionTypes.REMOVE, removeById: id })
    };
  };
  
  // returns Counter container with the counter state property bounded.
  export default connect(
    mapStateToProps,
    mapDispatchToStore
  )(Persons);