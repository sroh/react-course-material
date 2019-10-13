const redux = require('redux');
const createStore = redux.createStore;
const initialState = {
    counter: 0
};

// reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === 'INC_COUNTER'){
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if(action.type === 'ADD_COUNTER'){
        return {
            ...state,
            counter: state.counter + action.value
        }
    }

    return state;
};

// store (needs a reducer to be intsantiated)
const store = createStore(rootReducer);
console.log(store.getState())

// subscription (before dispatching) gets triggered when a action gets dispatched
store.subscribe(() => {
    console.log('[SUBSCRIPTION]', store.getState());
});

// dispatching action (convention all uppercase)
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log(store.getState());