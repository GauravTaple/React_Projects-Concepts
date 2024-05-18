import React from 'react'

const Propps = props => {
    console.log(props);
    // const { name } = props
    return (
        <>
            {/* <h1>Propps {name} </h1> */}
            <h1>Propps {props.name}</h1>
            <h2>{props.children}</h2>
        </>
    )
}

export default Propps
