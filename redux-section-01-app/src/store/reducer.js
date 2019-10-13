const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if(action.type === 'INCREMENT'){
        // console.log("INCREMENT ACTION FOUND");
        return { counter: state.counter + 1 }
    }

    if(action.type === 'DECREMENT'){
        // console.log("DECREMENT ACTION FOUND");
        return { counter: state.counter -1 }
    }

    if(action.type === 'ADD'){
        // console.log("ADD_5 ACTION FOUND");
        return { counter: state.counter + action.value }
    }

    if(action.type === 'SUB'){
        // console.log("SUB_5 ACTION FOUND");
        return { counter: state.counter - action.value }
    }

    return state;
}

export default reducer;