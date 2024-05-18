import { useState } from 'react'

function useFunction(initialCount = 0, value = 0) {
    const [count, setCount] = useState(initialCount);
    console.log(count);

    const increment = () => {
        setCount(prevCount => prevCount + value)
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(0);
    }
    return [count, increment, decrement, reset]
}

export default useFunction