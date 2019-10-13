import React, { Component } from 'react';
// function which returns a HOC
import { connect } from "react-redux";

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddFiveToCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractFiveFromCounter}  />
            </div>
        );
    }
}

// after class, maps state properties to properties
const mapStateToProps = (state) => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToStore = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddFiveToCounter: () => dispatch({type: 'ADD', value: 5}),
        onSubtractFiveFromCounter: () => dispatch({type: 'SUB', value: 5})
    };
};


// returns Counter container with the counter state property bounded.
export default connect(mapStateToProps, mapDispatchToStore)(Counter);