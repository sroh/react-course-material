import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
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
    case actionTypes.STORE_RESULT:
      // console.log("STORE_RESULT CALLED");
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: state.counter })
      };
    case actionTypes.DELETE_RESULT:
      //   const id = 2;
      //   const newArray = [...state.results];
      //   newArray.splice(id, 1);

      const newArray = state.results.filter(result => {
        if (result.id !== action.elementId) {
          return true;
        }
        return false;
      });

      return {
        ...state,
        results: newArray
      };
    default:
      return state;
  }

  //   return state;
};

export default reducer;
