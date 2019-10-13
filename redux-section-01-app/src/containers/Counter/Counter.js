import React, { Component } from "react";
// function which returns a HOC
import { connect } from "react-redux";
import * as actionTypes from '../../store/actions';

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";

class Counter extends Component {
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddFiveToCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractFiveFromCounter}
        />

        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
        <ul>
            {this.props.storedResults.map(result => (
                <li key={result.id} onClick={() => this.props.onDeleteResult(result.id) }>{result.value}</li>
            ))}
        </ul>
      </div>
    );
  }
}

// after class, maps state properties to properties
const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

// after type every kind of extra information can be passed to the reducer
const mapDispatchToStore = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddFiveToCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
    onSubtractFiveFromCounter: () => dispatch({ type: actionTypes.SUB, value: 5 }),
    onStoreResult: (counter) => {
        console.log("STORE RESULT CLICKED", counter);
        dispatch({ type: actionTypes.STORE_RESULT, result: counter})},
    onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, elementId: id})
  };
};

// returns Counter container with the counter state property bounded.
export default connect(
  mapStateToProps,
  mapDispatchToStore
)(Counter);
