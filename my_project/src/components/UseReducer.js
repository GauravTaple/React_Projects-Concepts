import React, { useReducer } from 'react'


const initialState = 0;
console.log(initialState,'initialState');


const reducer = (state, action) => {
    console.log(state,'state');
    switch (action) {
        case 'Increment':
            return state + 1;

        case 'Decrement':
            return state - 1;

        case 'Reset':
            return initialState;

        default:
            return state;
    }
}


function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);
    console.log(count, 'Counts');

    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);


    return (
        <div>
            <div>Count :- {count}</div>
            <button onClick={() => dispatch('Increment')}>Increment</button>
            <button onClick={() => dispatch('Decrement')}>Decrement</button>
            <button onClick={() => dispatch('Reset')}>Reset</button>
            <hr />
            <div>CountTwo :- {countTwo}</div>
            <button onClick={() => dispatchTwo('Increment')}>Increment</button>
            <button onClick={() => dispatchTwo('Decrement')}>Decrement</button>
            <button onClick={() => dispatchTwo('Reset')}>Reset</button>
        </div>
    )
}

export default UseReducer