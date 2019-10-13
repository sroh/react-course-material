import * as actionTypes from '../actions';

const initialState = {
  counter: 0
};

const counterReducer = (state = initialState, action) => {
  // immutable way
  const newState = Object.assign({}, state);
  switch (action.type) {
    case actionTypes.INCREMENT:
      newState.counter = state.counter + 1;
      return newState;
    case actionTypes.DECREMENT:
      newState.counter = state.counter - 1;
      return newState;
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.SUB:
      return {
        ...state,
        counter: state.counter - action.value
      };
    default:
      return state;
  }
};

export default counterReducer;
