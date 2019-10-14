import * as actionTypes from "./actions";

const initalState = {
  ingredient: null,
  totalPrice: 0
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return state;
    case actionTypes.REMOVE_INGREDIENT:
      return state;
    default:
      return state;
  }
};

export default reducer;
