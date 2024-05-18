import React from 'react'

// Map Function use
function Map() {
    const IPL = ["csk", "rcb", "mi"];
    const result = IPL.map((ipl) => <h1>{ipl}</h1>);
    return (
        <h3>{result}</h3>
    )
}

export default Map;