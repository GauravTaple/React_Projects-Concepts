import React from 'react'

function FunctionClick() {

    function FunctionOn() {
        console.log("Button Clicked...!!!");
    }

    return (
        <button onClick={FunctionOn}>Click</button>
    )
}

export default FunctionClick