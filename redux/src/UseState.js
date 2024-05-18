import React, { useState } from 'react';

export default function State() {

  const [state, setState] = useState("State Management using useState hook ");
  console.log(state);

  const changeName = () =>{
    const randomNumber = Math.floor(Math.random() * 1000);
    setState(`Random Value :- ${randomNumber}`);
    localStorage.setItem('hii','60');
  }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>{changeName()}} >Click Here !!!</button>
    </div>
  )
}
