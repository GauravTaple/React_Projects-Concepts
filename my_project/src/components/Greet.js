import React from 'react'

//--------------1st way------------------
// function Greet(){
//     return <h1>Hello Gaurav...!!!</h1>
// }

//-----------2nd way --------------------------------
// export const Greet = () => <h1>Hello Gaurav</h1>


// export default Greet


// -------------------Props Concept ------------------
const Greet = Props => {
   console.log(Props);
   Props.name = 'Akshay';                        // can not assign a value
   return (
      <div>
         <h1>Hello {Props.name}</h1>
         {Props.children}
      </div>
   )
}

export default Greet();