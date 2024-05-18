import React, { useContext } from "react";
import { data1, data2 } from "../App";


function ChildC() {
    const xc = useContext(data1);
    const yc = useContext(data2);

    console.log(xc);

    return <>

        <h1> This is Child C Component for {xc} and {yc}</h1>

    </>
}

export default ChildC();