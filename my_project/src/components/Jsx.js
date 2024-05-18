import React from "react";


const Jsx = () => {
    //--- With Jsx---
    // return (
    //     <div ClassName='dummy'>
    //         <h1>Hello Gaurav From this Jsx</h1>
    //     </div>
    // )


    //---Without Jsx---
    return React.createElement('div',{id:'hello',className:'dummy'},React.createElement('h1',null,"Without Jsx"))
}



export default Jsx