import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementNumber, incrementNumber } from './actions';

function  ReduxDemo() {
    const myState = useSelector((state)=> state.changeTheNumber)
    console.log(myState,'myState');
    const  dispatch = useDispatch();
  return (
    <div className="container">
    <h1>Increment / Decrement Counter Using React And Redux</h1>
  
    <div className="counter-container">
      <span className="counter-btn decrement" title='Decrement' onClick={()=>dispatch(decrementNumber())}> - </span>
      <input type="text" className="counter-input" value={myState}  />
      <span className="counter-btn increment" title='Increment' onClick={()=>dispatch(incrementNumber())}> + </span>
      {/* <button onClick={()=>dispatch(resetNumber())}>Reset</button> */}
    </div>
  </div>
    
  )
}

export default ReduxDemo