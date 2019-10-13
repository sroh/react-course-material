import * as actionTypes from '../actions';

const initialState = {
  results: []
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({ id: new Date(), value: action.result })
      };
    case actionTypes.DELETE_RESULT:
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
};

export default resultReducer;
