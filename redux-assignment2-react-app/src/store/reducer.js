import * as actionTypes from "./actions";

const initialState = {
  persons: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return {
        persons: state.persons.concat(action.value)
      };

    case actionTypes.REMOVE:
      const newArray = state.persons.filter(result => {
        if (result.id !== action.removeById) {
          return true;
        }
        return false;
      });

      return {
        persons: newArray
      };

    default:
      return state;
  }
};

export default reducer;
