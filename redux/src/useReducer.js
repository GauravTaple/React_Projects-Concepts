import React, { useReducer } from 'react'

const initialState = 0;
console.log(initialState,'initialState');

const reducer = (state=initialState, action) => {
    console.log(state,'state-----');
    switch (action) {
        case 'Increment':
            return state + 5;

        case 'Decrement':
            return state - 5;

        case 'Reset':
            return initialState;

        default:
            return state;
    }
}


function UseReducer() {
    const [count, dispatch] = useReducer(reducer, initialState);
    console.log(count, 'Count');
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);


    return (
        <div className="container">
        <h1>State Management Using useReducer hook</h1>
        <div className="count">Count: {count}</div>
        <div className="buttons">
            <button className="button" onClick={() => dispatch('Increment')}>Increment</button>
            <button className="button" onClick={() => dispatch('Decrement')}>Decrement</button>
            <button className="button" onClick={() => dispatch('Reset')}>Reset</button>
        </div>
        <hr />
        <div className="count">Count Two: {countTwo}</div>
        <div className="buttons">
            <button className="button" onClick={() => dispatchTwo('Increment')}>Increment</button>
            <button className="button" onClick={() => dispatchTwo('Decrement')}>Decrement</button>
            <button className="button" onClick={() => dispatchTwo('Reset')}>Reset</button>
        </div>
    </div>
    )
}

export default UseReducer