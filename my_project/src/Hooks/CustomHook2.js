import React, { useState } from 'react'
import useDocument from './useDocument';

function CustomHook2() {
    const [count, setCount] = useState(0);
    console.log(count);

    // useEffect(() => {
    //     document.title = `Count:------ ${count}`
    // }, [count])

    // Use Custom hook useDocument instead repeatedly writing useEffect hook in both custom Hooks.
    useDocument(count)

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count:- {count}</button>
        </div>
    )
}

export default CustomHook2