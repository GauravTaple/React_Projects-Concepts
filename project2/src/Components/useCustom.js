import { useState } from 'react'

// --------------- Custom Hooks Concept ---------------------------------
function useCustom() {

    const [counting, setCounting] = useState(0);

    function increment() {
        setCounting(counting + 1);
    }

    function decrement() {
        setCounting(counting - 1);
    }
    return [counting, increment, decrement];

}

export default useCustom;