import React from "react";

function Header(props) {
    console.log(props);
    return <h1> I am Header Component {props.name}</h1>

}

export default Header;



// function add(a){
// return a + a
// }

// add(5);