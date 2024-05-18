import React from 'react'
import useFunction from './useFunction'

function CustomHook4() {
    // const [count, setCount] = useState(0);

    // const increment = () => {
    //     setCount(prevCount => prevCount + 1)
    // }

    // const decrement = () => {
    //     setCount(prevCount => prevCount - 1)
    // }

    // const reset = () => {
    //     setCount(0);
    // }

    const [count, increment, decrement, reset] = useFunction(5, 2)

    return (
        <>
            <div>Count :- {count}</div>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}


export default CustomHook4